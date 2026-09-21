import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { pages } from "../src/data/pages.js";
import { serviceGroups } from "../src/data/services.js";
import { getProjectById } from "../src/data/projects.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function htmlText(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

const home = pages.find((page) => page.id === "home");
if (!home) fail("home", "canonical Home page record missing");

const featuredIds = ["project-02", "project-06", "project-09"];

for (const locale of ["ar", "en"]) {
  const content = home?.content?.[locale];
  const file = outputPath(routes.home(locale));
  const html = await readFile(path.join(DIST, file), "utf8");

  if (!content) {
    fail(file, "localized Home content missing");
    continue;
  }

  if (!html.includes(`<h1>${htmlText(content.title)}</h1>`)) fail(file, "canonical Home H1 missing");
  if (!html.includes(htmlText(content.seo.title))) fail(file, "canonical Home SEO title missing");
  if (!html.includes(htmlText(content.seo.description))) fail(file, "canonical Home SEO description missing");
  if (html.includes("VNext Foundation")) fail(file, "foundation placeholder copy leaked into Home");

  for (const group of serviceGroups) {
    const title = group.content[locale].title;
    if (!html.includes(htmlText(title))) fail(file, `service group missing: ${title}`);
  }

  for (const projectId of featuredIds) {
    const project = getProjectById(projectId);
    if (!project) {
      fail(file, `featured project record missing: ${projectId}`);
      continue;
    }

    const title = project.content[locale].title;
    if (!html.includes(htmlText(title))) fail(file, `featured project missing: ${title}`);
    if (!html.includes(project.image)) fail(file, `featured project image missing: ${project.image}`);

    try {
      const asset = await stat(path.join(DIST, project.image.replace(/^\//, "")));
      if (!asset.isFile()) fail(file, `featured project asset is not a file: ${project.image}`);
    } catch {
      fail(file, `featured project asset missing from dist: ${project.image}`);
    }
  }

  for (const sectionId of ["services", "work", "approach", "process", "faq"]) {
    if (!html.includes(`id="${sectionId}"`)) fail(file, `Home section missing: ${sectionId}`);
  }

  if ((html.match(/<details class="home-faq__item">/g) ?? []).length !== 3) {
    fail(file, "Home must show exactly three decision-support FAQ items");
  }
}

if (errors.length) {
  console.error("VNEXT HOME CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT HOME CHECK: PASSED");
console.log("Checked bilingual canonical Homepage, featured work, service paths, FAQ and assets.");
