import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.js";
import { articles } from "../src/data/articles.js";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const fails=[];
const reviewable=projects.filter(x=>x.id!=="project-16");
if(reviewable.length!==15)fails.push("expected 15 portfolio drafts (excluding published Update Card)");
for(const p of reviewable){
  const file=path.join(root,"docs/seo/client-review/cases",p.slug+".md");
  let content;
  try { content=await readFile(file,"utf8"); } catch {fails.push("missing draft "+p.slug);continue}
  for(const token of [p.content.ar.title,p.content.en.title,p.image,"src/data/projects.js","English", "الأدلة"]){
    if(!content.includes(token))fails.push(p.slug+": missing review field "+token);
  }
  if(!content.includes("../../../../"+p.image.replace(/^\//,"")))fails.push(p.slug+": broken relative image evidence path");
  try { await access(path.join(root,p.image.replace(/^\//,""))); } catch {fails.push(p.slug+": real cover image missing"); }
  if(!content.includes("- [ ]"))fails.push(p.slug+": no specific review questions");
  if(/\b\d{2,}%\b/.test(content))fails.push(p.slug+": unjustified percentage claim");
}
const article=articles.find(x=>x.slug==="website-or-web-system");
if(!article)fails.push("missing web-vs-system article");
else for(const locale of ["ar","en"]){
  const copy=article.content[locale];
  if(copy.sections.length<10)fails.push("article has fewer than ten sections: "+locale);
  const wordCount=copy.sections.flatMap(s=>s.paragraphs).join(" ").split(/\s+/).length;
  if(wordCount<350)fails.push("article body too short: "+locale+" ("+wordCount+")");
}
const articleMd=await readFile(path.join(root,"docs/seo/client-review/ARTICLE_WEBSITE_OR_SYSTEM_AR_EN.md"),"utf8");
if((articleMd.match(/^## \d+\./gm)||[]).length!==20)fails.push("article review markdown missing 20 bilingual section headings");
const index=await readFile(path.join(root,"docs/seo/client-review/README.md"),"utf8");
for(const p of reviewable){if(!index.includes("cases/"+p.slug+".md"))fails.push("index missing "+p.slug)}
if(fails.length){
 console.error("EDITORIAL REVIEW DRAFTS: FAILED");
 for(const failure of fails)console.error("- "+failure);
 process.exit(1);
}
console.log("EDITORIAL REVIEW DRAFTS: PASSED — 15 project case studies (AR/EN) and ten-section bilingual article, sources and real images");
