import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../src/data/articles.js";
import { getProjectById } from "../src/data/projects.js";
import { routes } from "../src/config/routes.js";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const errors = [];
const expected = {
  "website-or-web-system": ["project-07","project-04"],
  "before-building-ecommerce-store": ["project-08","project-12"],
  "prepare-website-content-before-design": ["project-07","project-14"],
  "plan-mobile-app-before-development": ["project-06","project-05"],
  "when-you-need-custom-system": ["project-03","project-04"],
  "prepare-brand-identity-brief": ["project-09","project-10"],
  "profile-content-checklist": [],
  "digital-marketing-content-plan": ["project-11"]
};
for(const article of articles) {
  const refs = article.relatedProjectIds ?? [];
  if(JSON.stringify(refs)!==JSON.stringify(expected[article.slug])) errors.push(article.slug+": editorial project map changed unexpectedly");
  if(refs.length !== new Set(refs).size) errors.push(article.slug+": duplicated project reference");
  for(const locale of ["ar","en"]) {
    const file=path.join(dist,routes.article(article.slug,locale).slice(1),"index.html");
    let html;
    try { html=await readFile(file,"utf8"); } catch { errors.push(file+": missing built HTML");continue; }
    const section = html.match(/<section class="section article-related article-project-examples">([\s\S]*?)<\/section>/)?.[1]??"";
    if(Boolean(refs.length)!==Boolean(section)) errors.push(file+": inconsistent examples section");
    for(const id of refs) {
      const project = getProjectById(id);
      if(!project || !project.content?.[locale]) { errors.push(file+": invalid editorial project "+id);continue; }
      const link = `href="${routes.project(project.slug,locale)}"`;
      if(!section.includes(link)) errors.push(file+": missing localized link "+link);
    }
    const count=(section.match(/<a href="/g)??[]).length;
    if(count!==refs.length) errors.push(file+": number of visible links differs from editorial references");
  }
}
if(Object.keys(expected).length!==articles.length) errors.push("Expected all eight editorial articles");
if(errors.length) {
  console.error("ARTICLE PROJECT EVIDENCE CHECK: FAILED");
  errors.forEach(x=>console.error("- "+x));
  process.exit(1);
}
console.log("ARTICLE PROJECT EVIDENCE CHECK: PASSED (8 articles × 2 locales)");
