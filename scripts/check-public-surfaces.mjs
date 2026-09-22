import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { services } from "../src/data/services.js";
import { projects } from "../src/data/projects.js";
import { articles } from "../src/data/articles.js";
import { jobs } from "../src/data/jobs.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
async function htmlFor(route){return readFile(path.join(DIST,outputPath(route)),"utf8");}

const pageKeys=["services","portfolio","about","process","contact","startProject","faq","insights","careers","privacy","terms"];

for(const locale of ["ar","en"]){
  const home=await htmlFor(routes.home(locale));
  if(!home.includes('class="home-hero__media"')) fail(routes.home(locale),"homepage hero media missing");

  for(const key of pageKeys){
    const route=routes[key](locale);
    const html=await htmlFor(route);
    if(!html.includes('class="editorial-hero-media')) fail(route,"shared hero media missing");
  }

  for(const service of services){
    const route=routes.service(service.slug,locale);
    const html=await htmlFor(route);
    if(!html.includes('class="editorial-hero-media')) fail(route,"service hero media missing");
  }

  for(const project of projects){
    const route=routes.project(project.slug,locale);
    const html=await htmlFor(route);
    if(!html.includes('class="editorial-hero-media')) fail(route,"project hero media missing");
  }

  for(const article of articles.filter((item)=>item.publishedAt && item.localeStatus?.[locale]==="ready")){
    const route=routes.article(article.slug,locale);
    const html=await htmlFor(route);
    if(!html.includes('class="editorial-hero-media')) fail(route,"article hero media missing");
  }

  for(const job of jobs.filter((item)=>item.status==="open" && item.localeStatus?.[locale]==="ready")){
    const route=routes.job(job.slug,locale);
    const html=await htmlFor(route);
    if(!html.includes('class="editorial-hero-media')) fail(route,"job hero media missing");
  }

  const servicesHtml=await htmlFor(routes.services(locale));
  if(servicesHtml.includes('services-hero__summary')) fail(routes.services(locale),"service-count summary must not be public");
  if(servicesHtml.includes("<strong>8</strong>")) fail(routes.services(locale),"public service count must not be shown");

  const portfolioHtml=await htmlFor(routes.portfolio(locale));
  if(portfolioHtml.includes('portfolio-hero__count')) fail(routes.portfolio(locale),"project-count hero must not be public");
  if(portfolioHtml.includes(`<strong>${projects.length}</strong>`)) fail(routes.portfolio(locale),"public project count must not be shown");

  const aboutHtml=await htmlFor(routes.about(locale));
  if(aboutHtml.includes(`<strong>${projects.length}</strong>`)) fail(routes.about(locale),"About must not expose project count");
  if(aboutHtml.includes("<strong>8</strong>")) fail(routes.about(locale),"About must not expose service count");
}

for(const [file,locale] of [["404.html","ar"],["en/404.html","en"]]){
  const html=await readFile(path.join(DIST,file),"utf8");
  if(!html.includes('class="editorial-hero-media')) fail(file,"404 hero media missing");
  if(!html.includes(`lang="${locale}"`)) fail(file,"404 locale mismatch");
}

const allHtmlFiles=[
  ...pageKeys.flatMap((key)=>["ar","en"].map((locale)=>outputPath(routes[key](locale)))),
  ...["ar","en"].flatMap((locale)=>services.map((item)=>outputPath(routes.service(item.slug,locale)))),
  ...["ar","en"].flatMap((locale)=>projects.map((item)=>outputPath(routes.project(item.slug,locale)))),
  ...["ar","en"].flatMap((locale)=>articles.filter((item)=>item.publishedAt && item.localeStatus?.[locale]==="ready").map((item)=>outputPath(routes.article(item.slug,locale))))
];

for(const file of allHtmlFiles){
  const html=await readFile(path.join(DIST,file),"utf8");
  for(const forbidden of ["مشروعًا موثقًا","مشاريع موثقة","verified projects","8 خدمات","8 services"]){
    if(html.includes(forbidden)) fail(file,`forbidden public counting/proof copy leaked: ${forbidden}`);
  }
  if(/>\s*Temporary editorial image/i.test(html)) fail(file,"temporary implementation wording leaked to public output");
}

if(errors.length){
  console.error("VNEXT PUBLIC SURFACES CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT PUBLIC SURFACES CHECK: PASSED");
console.log("Hero media, public counter removal, and editorial surface contracts verified.");
