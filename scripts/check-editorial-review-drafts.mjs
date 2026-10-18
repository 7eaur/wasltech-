/**
 * Editorial REVIEW gate; draft copy is not owner-approved project evidence.
 * This ensures 16 bilingual case narratives remain substantive, and the
 * website-vs-system guide remains practical after editorial revisions.
 */
import { projects } from "../src/data/projects.js";
import { articles } from "../src/data/articles.js";

const errors = [];
const fail = (id, message) => errors.push(id + ": " + message);
if (projects.length !== 16) fail("projects", "expected sixteen projects");
const slugs = new Set(projects.map(p => p.slug));
if (slugs.size !== projects.length) fail("projects", "duplicate slug");
for (const project of projects) {
  for (const locale of ["ar", "en"]) {
    const key = project.slug + "/" + locale;
    const story = project.content?.[locale]?.caseStudy;
    if (!story) { fail(key, "missing case study"); continue; }
    for (const field of ["overview", "context", "contribution"]) {
      if ((story[field]?.trim().length ?? 0) < 180) fail(key, field + " is insufficiently detailed for owner review");
    }
    if (story.decisions?.length !== 3) fail(key, "exactly three decisions required");
    const names = new Set();
    for (const item of story.decisions ?? []) {
      if (!item.title || names.has(item.title)) fail(key, "empty/duplicate decision title");
      names.add(item.title);
      if ((item.reason?.length ?? 0) < 30 || (item.implementation?.length ?? 0) < 30) {
        fail(key, "decision must explain both motivation and implementation");
      }
    }
    if (!story.scope?.length || !story.deliveredOutputs?.length) fail(key, "missing scope or outputs");
  }
  if (!project.image?.startsWith("/assets/works/")) fail(project.slug, "missing reviewable portfolio image");
  if (!project.evidenceSources?.length) fail(project.slug, "no source disclosure for the case record");
}
const target=articles.find(item=>item.slug==="website-or-web-system");
if (!target) fail("article", "missing core comparison article");
for(const locale of ["ar","en"]){
  const content=target?.content?.[locale];
  if(!content) { fail("article/"+locale,"missing translation"); continue; }
  if(content.sections?.length !== 10) fail("article/"+locale,"expect ten practical sections");
  if((content.intro?.length ?? 0) < 250) fail("article/"+locale,"intro needs direct answer and context");
  const prose=(content.sections??[]).flatMap(section=>[...(section.paragraphs??[]),...(section.bullets??[])]).join(" ");
  if(prose.length < 3800) fail("article/"+locale,"insufficiently developed guide");
}
if(errors.length) {
  console.error("EDITORIAL DRAFT REVIEW: FAILED");
  errors.forEach(line=>console.error("- "+line));
  process.exit(1);
}
console.log("EDITORIAL DRAFT REVIEW: PASSED (16 projects × 2 locales, 3 choices each; core article 10 sections × 2 locales)");
console.log("Drafts require owner approval; source-image existence is not independent proof of results.");
