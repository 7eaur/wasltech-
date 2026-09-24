import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { pages } from "../src/data/pages.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function htmlText(value=""){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}

const configs=[
  {id:"about",route:"about",required:["story","vision","mission","principles","build","final-cta"],forbidden:["phase-understand","phase-plan"]},
  {id:"process",route:"process",required:["understand","decide","build","launch-grow","principle","final-cta"],forbidden:["about-market__facts","about-principles__list"]}
];

for(const locale of ["ar","en"]){
  for(const config of configs){
    const record=pages.find((page)=>page.id===config.id);
    const copy=record?.content?.[locale];
    const route=routes[config.route](locale);
    const file=outputPath(route);
    const html=await readFile(path.join(DIST,file),"utf8");

    if(!copy){fail(file,`localized ${config.id} content missing`);continue;}
    if(!html.includes(`<h1>${htmlText(copy.kicker)}</h1>`)) fail(file,`${config.id} H1 missing`);
    if(!html.includes(`<h2 class="inner-hero__subtitle">${htmlText(copy.title)}</h2>`)) fail(file,`${config.id} hero subtitle missing`);
    if(!html.includes(htmlText(copy.seo.title))) fail(file,`${config.id} SEO title missing`);
    if(!html.includes(htmlText(copy.seo.description))) fail(file,`${config.id} SEO description missing`);
    if(html.includes("VNext Foundation")) fail(file,"foundation placeholder leaked");

    for(const sectionId of config.required){
      const item=copy.sections.find((section)=>section.id===sectionId);
      if(!item){fail(file,`canonical section record missing: ${sectionId}`);continue;}
      if(!html.includes(htmlText(item.title))) fail(file,`section title missing: ${sectionId}`);
    }

    for(const marker of config.forbidden){
      if(html.includes(marker)) fail(file,`cross-page presentation leaked: ${marker}`);
    }
  }
}

if(errors.length){
  console.error("VNEXT ABOUT/PROCESS CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT ABOUT/PROCESS CHECK: PASSED");
console.log("Checked bilingual About and Process separation, canonical copy and SEO.");
