import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { pages } from "../src/data/pages.js";
import { services } from "../src/data/services.js";

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

    if(config.id==="about"){
      const story=copy.sections.find(item=>item.id==="story");
      const values=copy.sections.find(item=>item.id==="principles");
      const groups=copy.sections.find(item=>item.id==="build")?.groups ?? [];
      const approach=copy.sections.find(item=>item.id==="approach");
      if(story?.facts?.length!==3 || !html.includes('class="about-story__facts"')) fail(file,"three factual company indicators required");
      if(values?.items?.length!==4 || (html.match(/class="about-values__item"/g)??[]).length!==4) fail(file,"four designed values required");
      if(groups.length!==3 || (html.match(/class="about-build__card"/g)??[]).length!==3) fail(file,"three distinct service families required");
      const allIds=groups.flatMap(group=>group.serviceIds);
      if(allIds.length!==services.length || new Set(allIds).size!==services.length || allIds.some(id=>!services.some(s=>s.id===id))) fail(file,"all eight actual services must appear exactly once");
      for(const service of services) if(!html.includes(`href="${routes.service(service.slug,locale)}"`)) fail(file,`actual service link missing: ${service.id}`);
      if(approach?.steps?.length!==4 || (html.match(/class="about-approach__index"/g)??[]).length!==4) fail(file,"four short approach stages required");
      if(!html.includes(`href="${routes.process(locale)}"`)) fail(file,"How We Work link missing");
      if(!html.includes(`href="${routes.contact(locale)}"`)) fail(file,"secondary contact CTA missing");
      if(html.includes('class="about-hero__actions"')) fail(file,"inner page hero must not duplicate CTAs");
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
