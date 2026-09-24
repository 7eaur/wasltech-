import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { pages } from "../src/data/pages.js";
import { serviceGroups, services } from "../src/data/services.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

function fail(scope,message){ errors.push(`${scope}: ${message}`); }
function outputPath(route){ return route === "/" ? "index.html" : path.join(route.replace(/^\//,""),"index.html"); }
function htmlText(value=""){ return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"); }

const page = pages.find((item)=>item.id==="services");
if (!page) fail("services","canonical Services page missing");

for (const locale of ["ar","en"]) {
  const content = page?.content?.[locale];
  const file = outputPath(routes.services(locale));
  const html = await readFile(path.join(DIST,file),"utf8");

  if (!content) {
    fail(file,"localized Services content missing");
    continue;
  }

  if (!html.includes(`<h1>${htmlText(content.title)}</h1>`)) fail(file,"canonical Services H1 missing");
  if (!html.includes(htmlText(content.seo.title))) fail(file,"Services SEO title missing");
  if (!html.includes(htmlText(content.seo.description))) fail(file,"Services SEO description missing");
  if (html.includes("VNext Foundation")) fail(file,"foundation placeholder leaked into Services");

  for (const group of serviceGroups) {
    if (!html.includes(`id="${group.id}"`)) {
      fail(file,`service family section missing: ${group.id}`);
    }
  }

  for (const service of services) {
    const title = service.content[locale].title;
    const href = routes.service(service.slug,locale);
    if (!html.includes(htmlText(title))) fail(file,`service missing: ${title}`);
    if (!html.includes(`href="${href}"`)) fail(file,`service detail link missing: ${href}`);
    if (!html.includes(service.image)) fail(file,`service image missing: ${service.image}`);
  }

  if ((html.match(/class="service-directory-row"/g) ?? []).length !== 8) {
    fail(file,"Services directory must render exactly eight services");
  }
}

if (errors.length) {
  console.error("VNEXT SERVICES CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SERVICES CHECK: PASSED");
console.log("Checked bilingual grouped Services directory and all eight service links.");
