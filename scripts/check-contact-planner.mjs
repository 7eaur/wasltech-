import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { site } from "../src/config/site.js";
import { pages } from "../src/data/pages.js";
import { services } from "../src/data/services.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function htmlText(value=""){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}

const contactRecord=pages.find((page)=>page.id==="contact");
const plannerRecord=pages.find((page)=>page.id==="startProject");

for(const locale of ["ar","en"]){
  const contactCopy=contactRecord?.content?.[locale];
  const contactFile=outputPath(routes.contact(locale));
  const contactHtml=await readFile(path.join(DIST,contactFile),"utf8");

  if(!contactCopy) fail(contactFile,"localized Contact content missing");
  else {
    if(!contactHtml.includes(`<h1>${htmlText(contactCopy.title)}</h1>`)) fail(contactFile,"Contact H1 missing");
    if(!contactHtml.includes(htmlText(contactCopy.seo.title))) fail(contactFile,"Contact SEO title missing");
  }

  for(const value of [site.contact.phoneDisplay,site.contact.email,site.contact.instagram.handle]){
    if(!contactHtml.includes(htmlText(value))) fail(contactFile,`verified contact channel missing: ${value}`);
  }
  if(contactHtml.includes("data-project-planner")) fail(contactFile,"Project Planner form leaked into direct Contact page");

  const plannerCopy=plannerRecord?.content?.[locale];
  const plannerFile=outputPath(routes.startProject(locale));
  const plannerHtml=await readFile(path.join(DIST,plannerFile),"utf8");

  if(!plannerCopy) fail(plannerFile,"localized Planner content missing");
  else {
    if(!plannerHtml.includes(`<h1>${htmlText(plannerCopy.title)}</h1>`)) fail(plannerFile,"Planner H1 missing");
    if(!plannerHtml.includes(htmlText(plannerCopy.seo.title))) fail(plannerFile,"Planner SEO title missing");
  }

  if(!plannerHtml.includes("data-project-planner")) fail(plannerFile,"Planner form contract missing");
  if(!plannerHtml.includes("data-planner-review")) fail(plannerFile,"Planner review contract missing");
  if(plannerHtml.includes('method="post"') || plannerHtml.includes('action="/')) fail(plannerFile,"Planner must not pretend to submit to a backend");

  for(const service of services){
    if(!plannerHtml.includes(`value="${service.id}"`)) fail(plannerFile,`service planner option missing: ${service.id}`);
  }
  if(!plannerHtml.includes('value="unsure"')) fail(plannerFile,"unsure planner option missing");

  for(const value of ["new","existing","redesign","feature","unsure"]){
    if(!plannerHtml.includes(`value="${value}"`)) fail(plannerFile,`project stage missing: ${value}`);
  }
  for(const value of ["mvp","full","phased","consult"]){
    if(!plannerHtml.includes(`value="${value}"`)) fail(plannerFile,`priority option missing: ${value}`);
  }
}

const client=await readFile(path.join(ROOT,"src/client/project-planner.js"),"utf8");
for(const contract of ["checkValidity","reportValidity","encodeURIComponent","data-planner-summary","Nothing has been sent","لم يتم إرسال أي بيانات"]){
  if(!client.includes(contract)) fail("src/client/project-planner.js",`truthful planner behavior missing: ${contract}`);
}
for(const forbidden of ["fetch(","XMLHttpRequest","form.submit(","localStorage","sessionStorage"]){
  if(client.includes(forbidden)) fail("src/client/project-planner.js",`planner must not send/store data: ${forbidden}`);
}

try{
  const info=await stat(path.join(DIST,"assets/js/project-planner.js"));
  if(!info.isFile()) fail("assets/js/project-planner.js","generated Planner client missing");
}catch{fail("assets/js/project-planner.js","generated Planner client missing");}

if(errors.length){
  console.error("VNEXT CONTACT/PLANNER CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT CONTACT/PLANNER CHECK: PASSED");
console.log("Checked direct Contact and truthful bilingual Project Planner behavior.");
