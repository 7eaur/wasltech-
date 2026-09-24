import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { services } from "../src/data/services.js";
import { getProjectsByService } from "../src/data/projects.js";
import { getPublishedArticlesByService } from "../src/data/articles.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

function fail(scope,message){ errors.push(`${scope}: ${message}`); }
function outputPath(route){ return route === "/" ? "index.html" : path.join(route.replace(/^\//,""),"index.html"); }
function htmlText(value=""){ return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"); }

for (const locale of ["ar","en"]) {
  const alternateLocale = locale === "ar" ? "en" : "ar";

  for (const service of services) {
    const copy = service.content[locale];
    const route = routes.service(service.slug,locale);
    const file = outputPath(route);
    const html = await readFile(path.join(DIST,file),"utf8");

    if (!html.includes(`<h1>${htmlText(copy.title)}</h1>`)) fail(file,"canonical service H1 missing");
    if (!html.includes(service.image)) fail(file,`canonical service Hero image missing: ${service.image}`);
    if (!html.includes(htmlText(copy.seo.title))) fail(file,"service SEO title missing");
    if (!html.includes(htmlText(copy.seo.description))) fail(file,"service SEO description missing");
    if (!html.includes(`rel="canonical" href="https://www.wasl-tech.com${route}"`)) fail(file,"service canonical missing");
    if (!html.includes(`hreflang="${alternateLocale}" href="https://www.wasl-tech.com${routes.service(service.slug,alternateLocale)}"`)) {
      fail(file,"service alternate hreflang missing");
    }

    for (const schemaType of ['"@type":"Service"','"@type":"BreadcrumbList"','"@type":"FAQPage"']) {
      if (!html.includes(schemaType)) fail(file,`structured data missing: ${schemaType}`);
    }

    if (!html.includes(htmlText(copy.decision.problemNeed))) fail(file,"problem/need content missing");
    if (!html.includes(htmlText(copy.decision.scopeSummary))) fail(file,"scope summary missing");

    for (const deliverable of copy.deliverables) {
      if (!html.includes(htmlText(deliverable.title))) fail(file,`deliverable missing: ${deliverable.title}`);
    }

    for (const process of copy.process) {
      if (!html.includes(htmlText(process.title))) fail(file,`process step missing: ${process.title}`);
    }

    for (const faq of copy.faq) {
      if (!html.includes(htmlText(faq.question))) fail(file,`FAQ missing: ${faq.question}`);
    }

    const related = getProjectsByService(service.id);
    const hasProof = /class="[^"]*\bservice-proof\b[^"]*"/.test(html);
    if (Boolean(related.length) !== hasProof) {
      fail(file,`related proof visibility mismatch for service: ${service.id}`);
    }

    for (const project of related.slice(0,3)) {
      if (!html.includes(htmlText(project.content[locale].title))) {
        fail(file,`related project missing: ${project.id}`);
      }
      if (!html.includes(`href="${routes.project(project.slug,locale)}"`)) {
        fail(file,`related project link missing: ${project.id}`);
      }
    }

    const relatedArticles = getPublishedArticlesByService(service.id, locale).slice(0,3);
    const hasRelatedArticles = /class="[^"]*\bservice-articles\b[^"]*"/.test(html);
    if (Boolean(relatedArticles.length) !== hasRelatedArticles) {
      fail(file,`related article visibility mismatch for service: ${service.id}`);
    }
    for (const article of relatedArticles) {
      if (!html.includes(`href="${routes.article(article.slug,locale)}"`)) {
        fail(file,`related article link missing: ${article.id}`);
      }
    }

    if (html.includes("VNext Foundation")) fail(file,"foundation placeholder leaked into service detail");
  }
}

if (errors.length) {
  console.error("VNEXT SERVICE DETAIL CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SERVICE DETAIL CHECK: PASSED");
console.log(`Checked ${services.length * 2} bilingual service detail routes.`);
