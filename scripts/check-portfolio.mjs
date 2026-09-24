import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { pages } from "../src/data/pages.js";
import { projects } from "../src/data/projects.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];
const categories=["web","app","store","brand","marketing"];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function htmlText(value=""){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}

const page=pages.find((item)=>item.id==="portfolio");
if(!page) fail("portfolio","canonical Portfolio page missing");

for(const locale of ["ar","en"]){
  const copy=page?.content?.[locale];
  const file=outputPath(routes.portfolio(locale));
  const html=await readFile(path.join(DIST,file),"utf8");

  if(!copy){ fail(file,"localized Portfolio content missing"); continue; }
  if(!html.includes(`<h1>${htmlText(copy.kicker)}</h1>`)) fail(file,"canonical Portfolio H1 missing");
  if(!html.includes(`<h2 class="inner-hero__subtitle">${htmlText(copy.title)}</h2>`)) fail(file,"Portfolio subtitle missing");
  if(!html.includes(htmlText(copy.seo.title))) fail(file,"Portfolio SEO title missing");
  if(!html.includes(htmlText(copy.seo.description))) fail(file,"Portfolio SEO description missing");
  if((html.match(/data-project-card/g)??[]).length!==projects.length) fail(file,"Portfolio must render all canonical projects");

  for(const category of categories){
    if(!html.includes(`data-portfolio-filter="${category}"`)) fail(file,`filter missing: ${category}`);
  }

  for(const project of projects){
    const title=project.content[locale].title;
    const href=routes.project(project.slug,locale);
    if(!html.includes(htmlText(title))) fail(file,`project missing: ${project.id}`);
    if(!html.includes(`href="${href}"`)) fail(file,`project detail link missing: ${href}`);
    if(!html.includes(project.image)) fail(file,`project image missing: ${project.image}`);
  }

  if(html.includes("VNext Foundation")) fail(file,"foundation placeholder leaked into Portfolio");
}

const filterAsset=path.join(DIST,"assets/js/portfolio-filter.js");
try{
  const info=await stat(filterAsset);
  if(!info.isFile()) fail("assets/js/portfolio-filter.js","generated filter asset missing");
}catch{ fail("assets/js/portfolio-filter.js","generated filter asset missing"); }

const filterSource=await readFile(path.join(ROOT,"src/client/portfolio-filter.js"),"utf8");
for(const contract of ["aria-pressed","dataset.category","hidden","data-portfolio-filter"]){
  if(!filterSource.includes(contract)) fail("src/client/portfolio-filter.js",`filter behavior missing: ${contract}`);
}

if(errors.length){
  console.error("VNEXT PORTFOLIO CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT PORTFOLIO CHECK: PASSED");
console.log(`Checked ${projects.length} projects and ${categories.length} real category filters in both locales.`);
