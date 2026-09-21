import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { serviceGroups, services } from "../src/data/services.js";
import { projects } from "../src/data/projects.js";
import { faqGroups } from "../src/data/faq.js";
import { articles } from "../src/data/articles.js";
import { jobs } from "../src/data/jobs.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const allowedLocaleStates = new Set(["draft", "ready", "content_required"]);

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function unique(records, field, scope) {
  const seen = new Set();
  for (const record of records) {
    const value = record[field];
    if (!value) fail(scope, `missing ${field}`);
    else if (seen.has(value)) fail(scope, `duplicate ${field}: ${value}`);
    else seen.add(value);
  }
}

function validateLocaleRecord(record, scope) {
  for (const locale of ["ar", "en"]) {
    const state = record.localeStatus?.[locale];
    if (!allowedLocaleStates.has(state)) {
      fail(scope, `invalid ${locale} locale state: ${state}`);
      continue;
    }
    const content = record.content?.[locale] ?? null;
    if (state === "ready" && !content) fail(scope, `${locale} is ready but content is missing`);
    if (state === "content_required" && content) {
      fail(scope, `${locale} has content but is still marked content_required`);
    }
  }
}

async function validateAsset(assetPath, scope) {
  if (!assetPath?.startsWith("/assets/")) {
    fail(scope, `invalid local asset path: ${assetPath}`);
    return;
  }
  try {
    const info = await stat(path.join(ROOT, assetPath.replace(/^\//, "")));
    if (!info.isFile()) fail(scope, `asset is not a file: ${assetPath}`);
  } catch {
    fail(scope, `asset does not exist: ${assetPath}`);
  }
}

unique(serviceGroups, "id", "serviceGroups");
unique(services, "id", "services");
unique(services, "slug", "services");

const serviceGroupIds = new Set(serviceGroups.map((group) => group.id));
const serviceIds = new Set(services.map((service) => service.id));

if (services.length !== 8) fail("services", `expected 8 official services, found ${services.length}`);

for (const service of services) {
  const scope = `service:${service.id}`;
  if (!serviceGroupIds.has(service.group)) fail(scope, `unknown group: ${service.group}`);
  validateLocaleRecord(service, scope);
  if (!service.content?.ar?.title) fail(scope, "Arabic title missing");
  if (!service.content?.ar?.description) fail(scope, "Arabic description missing");
  if (!Array.isArray(service.content?.ar?.deliverables) || !service.content.ar.deliverables.length) {
    fail(scope, "Arabic deliverables missing");
  }
  await validateAsset(service.image, scope);
}

unique(projects, "id", "projects");
unique(projects, "slug", "projects");

for (const project of projects) {
  const scope = `project:${project.id}`;
  validateLocaleRecord(project, scope);
  if (!project.content?.ar?.title) fail(scope, "Arabic title missing");
  if (!project.content?.ar?.summary) fail(scope, "Arabic summary missing");
  for (const serviceId of project.serviceIds ?? []) {
    if (!serviceIds.has(serviceId)) fail(scope, `unknown related service: ${serviceId}`);
  }
  await validateAsset(project.image, scope);
}

unique(faqGroups, "id", "faqGroups");
const faqItems = faqGroups.flatMap((group) => group.items);
unique(faqItems, "id", "faqs");

for (const group of faqGroups) {
  if (!group.content?.ar?.title) fail(`faqGroup:${group.id}`, "Arabic title missing");
  for (const item of group.items) {
    const scope = `faq:${item.id}`;
    validateLocaleRecord(item, scope);
    if (!item.content?.ar?.question || !item.content?.ar?.answer) {
      fail(scope, "Arabic question/answer missing");
    }
  }
}

for (const article of articles) {
  validateLocaleRecord(article, `article:${article.id}`);
  for (const serviceId of article.relatedServiceIds ?? []) {
    if (!serviceIds.has(serviceId)) fail(`article:${article.id}`, `unknown service: ${serviceId}`);
  }
  const projectIds = new Set(projects.map((project) => project.id));
  for (const projectId of article.relatedProjectIds ?? []) {
    if (!projectIds.has(projectId)) fail(`article:${article.id}`, `unknown project: ${projectId}`);
  }
}

for (const job of jobs) {
  validateLocaleRecord(job, `job:${job.id}`);
}

if (errors.length) {
  console.error("VNEXT DATA CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT DATA CHECK: PASSED");
console.log(`Services: ${services.length} | Projects: ${projects.length} | FAQ: ${faqItems.length} | Articles: ${articles.length} | Jobs: ${jobs.length}`);
