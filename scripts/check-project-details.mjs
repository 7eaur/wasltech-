import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { projects, getProjectsByCategory } from "../src/data/projects.js";
import { getServiceById } from "../src/data/services.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function htmlText(value=""){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}

for(const locale of ["ar","en"]){
  const alternateLocale=locale==="ar"?"en":"ar";

  for(const project of projects){
    const copy=project.content[locale];
    const route=routes.project(project.slug,locale);
    const file=outputPath(route);
    const html=await readFile(path.join(DIST,file),"utf8");

    if(!html.includes(`<h1>${htmlText(copy.title)}</h1>`)) fail(file,"project H1 missing");
    if(!html.includes(htmlText(copy.seo.title))) fail(file,"project SEO title missing");
    if(!html.includes(htmlText(copy.seo.description))) fail(file,"project SEO description missing");
    if(!html.includes(`hreflang="${alternateLocale}" href="https://www.wasl-tech.com${routes.project(project.slug,alternateLocale)}"`)) fail(file,"project alternate hreflang missing");

    for(const schemaType of ['"@type":"CreativeWork"','"@type":"BreadcrumbList"']){
      if(!html.includes(schemaType)) fail(file,`structured data missing: ${schemaType}`);
    }

    if((html.match(/class="project-primary-media"/g)??[]).length!==1) fail(file,"exactly one primary project media section is required");
    if(!html.includes(project.image)) fail(file,"primary project image missing");

    for(const value of [copy.caseStudy.overview,copy.caseStudy.context,copy.caseStudy.contribution]){
      if(!html.includes(htmlText(value))) fail(file,"case-study story content missing");
    }
    for(const value of [...copy.caseStudy.scope,...copy.caseStudy.deliveredOutputs]){
      if(!html.includes(htmlText(value))) fail(file,`scope/output missing: ${value}`);
    }

    for(const serviceId of project.serviceIds){
      const service=getServiceById(serviceId);
      if(!service) { fail(file,`related service missing: ${serviceId}`); continue; }
      const href=routes.service(service.slug,locale);
      if(!html.includes(`href="${href}"`)) fail(file,`related service link missing: ${href}`);
    }

    const related=getProjectsByCategory(project.category).filter((item)=>item.id!==project.id).slice(0,2);
    for(const item of related){
      const href=routes.project(item.slug,locale);
      if(!html.includes(`href="${href}"`)) fail(file,`related project link missing: ${href}`);
    }

    for(const forbidden of ["project-gallery","project-year","project-technologies","project-live-url"]){
      if(html.includes(forbidden)) fail(file,`forbidden project presentation field leaked: ${forbidden}`);
    }

    if(html.includes("VNext Foundation")) fail(file,"foundation placeholder leaked into project detail");
  }
}

if(errors.length){
  console.error("VNEXT PROJECT DETAIL CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT PROJECT DETAIL CHECK: PASSED");
console.log(`Checked ${projects.length*2} bilingual project detail routes.`);
