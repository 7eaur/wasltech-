import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { absoluteUrl } from "../src/config/seo.js";
import { getIndexableEntries } from "../src/seo/indexable-routes.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist-release");
const errors = [];
const warnings = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function warn(scope, message) {
  warnings.push(`${scope}: ${message}`);
}

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

function decodeBasicEntities(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function rootSchemaTypes(value) {
  const values = Array.isArray(value) ? value : [value];
  const types = [];
  for (const item of values) {
    if (!item || typeof item !== "object") continue;
    const raw = item["@type"];
    if (Array.isArray(raw)) types.push(...raw);
    else if (raw) types.push(raw);
    if (Array.isArray(item["@graph"])) {
      for (const node of item["@graph"]) {
        const graphType = node?.["@type"];
        if (Array.isArray(graphType)) types.push(...graphType);
        else if (graphType) types.push(graphType);
      }
    }
  }
  return new Set(types);
}

function isServiceDetail(route) {
  return /^\/(?:en\/)?services\/[^/]+\/$/.test(route);
}

function isProjectDetail(route) {
  return /^\/(?:en\/)?portfolio\/[^/]+\/$/.test(route);
}

function isArticleDetail(route) {
  return /^\/(?:en\/)?insights\/[^/]+\/$/.test(route);
}

const entries = getIndexableEntries();
const indexablePaths = new Set(entries.map((entry) => entry.path));
const htmlByPath = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();
const inbound = new Map(entries.map((entry) => [entry.path, 0]));

for (const entry of entries) {
  const file = outputPath(entry.path);
  const html = await readFile(path.join(DIST, file), "utf8");
  htmlByPath.set(entry.path, html);

  const title = decodeBasicEntities(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "");
  const description = decodeBasicEntities(
    html.match(/<meta name="description" content="([^"]*)">/i)?.[1]?.trim() ?? ""
  );
  const robots = html.match(/<meta name="robots" content="([^"]*)">/i)?.[1] ?? "";
  const directives = new Set(robots.split(",").map((item) => item.trim()).filter(Boolean));
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/i)?.[1] ?? "";

  if (!title) fail(file, "missing title");
  if (!description) fail(file, "missing meta description");
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) fail(file, "expected exactly one H1");
  if (canonical !== absoluteUrl(entry.path)) fail(file, "canonical does not match indexable route");

  for (const directive of ["index", "follow", "max-image-preview:large"]) {
    if (!directives.has(directive)) fail(file, `robots directive missing: ${directive}`);
  }

  if (/NOT VERIFIED|CONTENT REQUIRED/.test(html)) {
    fail(file, "internal verification placeholder leaked into public output");
  }

  if (title) {
    const owners = titleOwners.get(title) ?? [];
    owners.push(entry.path);
    titleOwners.set(title, owners);
  }
  if (description) {
    const owners = descriptionOwners.get(description) ?? [];
    owners.push(entry.path);
    descriptionOwners.set(description, owners);
  }

  const schemaValues = [];
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      schemaValues.push(JSON.parse(match[1]));
    } catch (error) {
      fail(file, `invalid JSON-LD: ${error.message}`);
    }
  }
  const types = rootSchemaTypes(schemaValues);

  if (entry.path === "/" || entry.path === "/en/") {
    if (!types.has("Organization")) fail(file, "homepage Organization schema missing");
    if (!types.has("WebSite")) fail(file, "homepage WebSite schema missing");
  }
  if (isServiceDetail(entry.path)) {
    if (!types.has("Service")) fail(file, "service detail schema missing");
    if (!types.has("BreadcrumbList")) fail(file, "service breadcrumb schema missing");
  }
  if (isProjectDetail(entry.path)) {
    if (!types.has("CreativeWork")) fail(file, "project CreativeWork schema missing");
    if (!types.has("BreadcrumbList")) fail(file, "project breadcrumb schema missing");
  }
  if (isArticleDetail(entry.path)) {
    if (!types.has("Article")) fail(file, "article schema missing");
    if (!types.has("BreadcrumbList")) fail(file, "article breadcrumb schema missing");
  }
}

for (const [route, html] of htmlByPath) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)) {
    const href = match[1];
    if (!href.startsWith("/")) continue;
    let pathname = "";
    try {
      pathname = new URL(href, "https://www.wasl-tech.com").pathname;
    } catch {
      continue;
    }
    if (indexablePaths.has(pathname) && pathname !== route) {
      inbound.set(pathname, (inbound.get(pathname) ?? 0) + 1);
    }
  }
}

for (const [title, owners] of titleOwners) {
  if (owners.length > 1) fail("titles", `duplicate title across: ${owners.join(", ")} :: ${title}`);
}

for (const [description, owners] of descriptionOwners) {
  if (owners.length > 1) {
    warn("descriptions", `duplicate description across: ${owners.join(", ")} :: ${description}`);
  }
}

for (const entry of entries) {
  if ((inbound.get(entry.path) ?? 0) === 0) {
    fail(entry.path, "indexable route has no internal inbound link from another indexable route");
  }
}

if (warnings.length) {
  console.warn("SEARCH VISIBILITY CHECK: WARNINGS");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error("SEARCH VISIBILITY CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEARCH VISIBILITY CHECK: PASSED");
console.log(`Indexable routes checked: ${entries.length}`);
console.log("Crawler eligibility, metadata, entity schema and internal discovery guards: PASSED");
