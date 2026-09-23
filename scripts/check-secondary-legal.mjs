import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { pages } from "../src/data/pages.js";
import { faqGroups, faqs } from "../src/data/faq.js";
import { articles } from "../src/data/articles.js";
import { jobs } from "../src/data/jobs.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function htmlText(value=""){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}

if(faqs.length!==13) fail("faq","expected 13 canonical FAQ items");
if(faqGroups.length!==4) fail("faq","expected 4 canonical FAQ groups");

for(const locale of ["ar","en"]){
  const faqRecord=pages.find((page)=>page.id==="faq");
  const faqCopy=faqRecord?.content?.[locale];
  const faqFile=outputPath(routes.faq(locale));
  const faqHtml=await readFile(path.join(DIST,faqFile),"utf8");
  if(!faqCopy) fail(faqFile,"localized FAQ page content missing");
  else {
    if(!faqHtml.includes(`<h1>${htmlText(faqCopy.title)}</h1>`)) fail(faqFile,"FAQ H1 missing");
    if(!faqHtml.includes(htmlText(faqCopy.seo.title))) fail(faqFile,"FAQ SEO title missing");
  }
  if((faqHtml.match(/class="faq-item"/g)??[]).length!==13) fail(faqFile,"FAQ page must render all 13 questions");
  if(!faqHtml.includes('"@type":"FAQPage"')) fail(faqFile,"FAQ structured data missing");

  for(const group of faqGroups){
    if(!faqHtml.includes(`id="faq-${group.id}"`)) fail(faqFile,`FAQ group missing: ${group.id}`);
  }

  for(const id of ["insights","careers"]){
    const record=pages.find((page)=>page.id===id);
    const copy=record?.content?.[locale];
    const file=outputPath(routes[id](locale));
    const html=await readFile(path.join(DIST,file),"utf8");
    if(!copy) fail(file,`localized ${id} content missing`);
    else {
      if(!html.includes(`<h1>${htmlText(copy.title)}</h1>`)) fail(file,`${id} H1 missing`);
      if(!html.includes(htmlText(copy.seo.title))) fail(file,`${id} SEO title missing`);
    }
    if(html.includes(">00<")) fail(file,`${id} must not expose a numeric empty-state counter`);
    if(html.includes("VNext Foundation")) fail(file,`${id} placeholder leaked`);
  }

  const insightsFile=outputPath(routes.insights(locale));
  const insightsHtml=await readFile(path.join(DIST,insightsFile),"utf8");
  for(const article of articles.filter((item)=>item.publishedAt && item.localeStatus?.[locale]==="ready")){
    const articleCopy=article.content[locale];
    const articleFile=outputPath(routes.article(article.slug,locale));
    const articleHtml=await readFile(path.join(DIST,articleFile),"utf8");
    if(!insightsHtml.includes(htmlText(articleCopy.title))) fail(insightsFile,`published article missing from listing: ${article.slug}`);
    if(!articleHtml.includes(`<h1>${htmlText(articleCopy.title)}</h1>`)) fail(articleFile,"article H1 missing");
    if(!articleHtml.includes(htmlText(articleCopy.seo.title))) fail(articleFile,"article SEO title missing");
    if(!articleHtml.includes('"@type":"Article"')) fail(articleFile,"Article structured data missing");
  }

  const openJobs=jobs.filter((item)=>item.status==="open" && item.localeStatus?.[locale]==="ready");
  for(const job of openJobs){
    const copy=job.content[locale];
    const file=outputPath(routes.job(job.slug,locale));
    const html=await readFile(path.join(DIST,file),"utf8");
    if(!html.includes(`<h1>${htmlText(copy.title)}</h1>`)) fail(file,"job H1 missing");
    if(!html.includes('"@type":"JobPosting"')) fail(file,"JobPosting structured data missing");
  }

  for(const id of ["privacy","terms"]){
    const record=pages.find((page)=>page.id===id);
    const copy=record?.content?.[locale];
    const file=outputPath(routes[id](locale));
    const html=await readFile(path.join(DIST,file),"utf8");

    if(record?.contentState!=="READY") fail(file,`${id} must be READY after verified runtime review`);
    if(!copy) fail(file,`localized ${id} content missing`);
    else {
      if(!html.includes(`<h1>${htmlText(copy.title)}</h1>`)) fail(file,`${id} H1 missing`);
      if(!html.includes(htmlText(copy.seo.title))) fail(file,`${id} SEO title missing`);
      for(const section of copy.sections){
        if(!html.includes(htmlText(section.title))) fail(file,`legal section missing: ${section.id}`);
      }
    }
    if(html.includes("VNext Foundation")) fail(file,`${id} placeholder leaked`);
  }
}

const plannerClient=await readFile(path.join(ROOT,"src/client/project-planner.js"),"utf8");
const navigationClient=await readFile(path.join(ROOT,"src/client/navigation.js"),"utf8");
const portfolioClient=await readFile(path.join(ROOT,"src/client/portfolio-filter.js"),"utf8");
const runtimeClient=[plannerClient,navigationClient,portfolioClient].join("\n");

for(const forbidden of [
  "googletagmanager.com",
  "google-analytics.com",
  "gtag(",
  "fbq(",
  "localStorage.",
  "sessionStorage."
]){
  if(runtimeClient.includes(forbidden)) fail("runtime",`unexpected tracking/storage behavior found: ${forbidden}`);
}

for(const forbidden of [
  "fetch(",
  "XMLHttpRequest",
  "navigator.sendBeacon",
  "localStorage",
  "sessionStorage",
  "window.open("
]){
  if(plannerClient.includes(forbidden)) fail("planner",`unexpected automatic send/storage behavior found: ${forbidden}`);
}

const legalSource=await readFile(path.join(ROOT,"src/data/pages.js"),"utf8");
for(const required of [
  "does not automatically send",
  "لا يقوم الموقع بإرسالها تلقائيًا",
  "no analytics tools or tracking cookies",
  "لا يضيف الموقع حاليًا أدوات تحليلات أو ملفات تعريف ارتباط للتتبع",
  "Google Fonts operate outside this website",
  "Google Fonts خدمات خارجية عن الموقع"
]){
  if(!legalSource.includes(required)) fail("legal",`verified privacy statement missing: ${required}`);
}

if(errors.length){
  console.error("VNEXT SECONDARY/LEGAL CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SECONDARY/LEGAL CHECK: PASSED");
console.log("Checked FAQ, published editorial routes, careers publication states, verified legal copy and runtime privacy behavior.");
