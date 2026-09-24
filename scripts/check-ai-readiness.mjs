import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { articles } from "../src/data/articles.js";
import { services, getServiceById } from "../src/data/services.js";
import { routes } from "../src/config/routes.js";
import { absoluteUrl } from "../src/config/seo.js";
import { organizationEntityId } from "../src/seo/structured-data.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist-release");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function htmlText(value=""){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}
function schemas(html){
  const out=[];
  for(const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)){
    try{out.push(JSON.parse(match[1]));}catch{/* search visibility gate reports invalid JSON */}
  }
  return out;
}
function schemaOf(html,type){return schemas(html).find((item)=>item?.["@type"]===type);}

const robots=await readFile(path.join(DIST,"robots.txt"),"utf8");
if(!/User-agent:\s*OAI-SearchBot[\s\S]*?Allow:\s*\//i.test(robots)){
  fail("robots.txt","OAI-SearchBot must remain explicitly allowed");
}

for(const locale of ["ar","en"]){
  for(const service of services){
    if(service.localeStatus?.[locale]!=="ready") continue;
    const route=routes.service(service.slug,locale);
    const html=await readFile(path.join(DIST,outputPath(route)),"utf8");
    const copy=service.content[locale];

    if(/nosnippet|max-snippet\s*:\s*0/i.test(html)) fail(route,"snippet blocking is forbidden on an indexable service page");
    if(!html.includes(htmlText(copy.decision.problemNeed))) fail(route,"answer-ready problem/need text missing from static HTML");
    if(!html.includes(htmlText(copy.decision.scopeSummary))) fail(route,"answer-ready scope summary missing from static HTML");
    for(const faq of copy.faq){
      if(!html.includes(htmlText(faq.question))) fail(route,`visible service FAQ missing: ${faq.question}`);
    }
    if(!schemaOf(html,"Service")) fail(route,"Service schema missing");
  }

  for(const article of articles.filter((item)=>item.publishedAt && item.localeStatus?.[locale]==="ready")){
    const route=routes.article(article.slug,locale);
    const html=await readFile(path.join(DIST,outputPath(route)),"utf8");
    const copy=article.content[locale];
    const schema=schemaOf(html,"Article");

    if(/nosnippet|max-snippet\s*:\s*0/i.test(html)) fail(route,"snippet blocking is forbidden on a published article");
    if(!html.includes(`<p class="article-hero__summary">${htmlText(copy.summary)}</p>`)) fail(route,"article summary must be visible near the top");
    if(!html.includes(`<div class="article-content__lead">\n            <p>${htmlText(copy.intro)}</p>`)) fail(route,"article intro must be visible in static HTML");
    for(const section of copy.sections){
      if(!html.includes(`<h2>${htmlText(section.heading)}</h2>`)) fail(route,`descriptive article section missing: ${section.heading}`);
    }
    if(!html.includes(htmlText(article.author[locale]))) fail(route,"visible article author missing");
    if(!html.includes(`datetime="${article.publishedAt}"`)) fail(route,"visible publication date missing");

    if(!schema) { fail(route,"Article schema missing"); continue; }
    if(schema.headline!==copy.title) fail(route,"Article schema headline must match visible title");
    if(schema.description!==copy.summary) fail(route,"Article schema description must match visible summary");
    if(schema.mainEntityOfPage!==absoluteUrl(route)) fail(route,"Article mainEntityOfPage must match canonical route");
    if(schema.datePublished!==article.publishedAt) fail(route,"Article datePublished mismatch");
    if(schema.publisher?.["@id"]!==organizationEntityId) fail(route,"Article publisher must reference canonical Organization");
    if(schema.author?.["@id"]!==organizationEntityId) fail(route,"Article author must reference canonical Organization");

    const related=(article.relatedServiceIds??[]).map(getServiceById).filter(Boolean);
    const about=Array.isArray(schema.about)?schema.about:[];
    for(const service of related){
      const serviceRoute=routes.service(service.slug,locale);
      const serviceId=`${absoluteUrl(serviceRoute)}#service`;
      if(!html.includes(`href="${serviceRoute}"`)) fail(route,`visible related service link missing: ${serviceRoute}`);
      if(!about.some((item)=>item?.["@id"]===serviceId)) fail(route,`Article schema about relation missing: ${serviceId}`);
    }

    if(article.updatedAt && article.updatedAt!==article.publishedAt){
      if(schema.dateModified!==article.updatedAt) fail(route,"Article dateModified mismatch");
      if(!html.includes(`datetime="${article.updatedAt}"`)) fail(route,"material update date must be visible");
    }
  }
}

if(errors.length){
  console.error("AI ANSWER READINESS CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("AI ANSWER READINESS CHECK: PASSED");
console.log(`Checked ${services.length*2} service surfaces and ${articles.filter((item)=>item.publishedAt).length*2} published article surfaces.`);
