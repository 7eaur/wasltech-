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

if(faqs.length!==12) fail("faq","expected 12 non-duplicative canonical FAQ items");
if(faqs.some(item=>item.id==="product-3")) fail("faq","duplicated integration question must not return");
if(faqGroups.length!==4) fail("faq","expected 4 canonical FAQ groups");

for(const locale of ["ar","en"]){
  const faqRecord=pages.find((page)=>page.id==="faq");
  const faqCopy=faqRecord?.content?.[locale];
  const faqFile=outputPath(routes.faq(locale));
  const faqHtml=await readFile(path.join(DIST,faqFile),"utf8");
  if(!faqCopy) fail(faqFile,"localized FAQ page content missing");
  else {
    if(!faqHtml.includes(`<h1>${htmlText(faqCopy.kicker)}</h1>`)) fail(faqFile,"FAQ H1 missing");
    if(!faqHtml.includes(`<h2 class="inner-hero__subtitle">${htmlText(faqCopy.title)}</h2>`)) fail(faqFile,"FAQ subtitle missing");
    if(!faqHtml.includes(htmlText(faqCopy.seo.title))) fail(faqFile,"FAQ SEO title missing");
  }
  if((faqHtml.match(/class="faq-item"/g)??[]).length!==faqs.length) fail(faqFile,"FAQ page must render every canonical question");
  for(const item of faqs)if(!faqHtml.includes(htmlText(item.content[locale].question)))fail(faqFile,"FAQ missing: "+item.id);
  if(!faqHtml.includes('"@type":"FAQPage"')) fail(faqFile,"FAQ structured data missing");

  if(!faqHtml.includes('class="page-intro page-intro--faq"') || faqHtml.includes('secondary-hero__media')) fail(faqFile,"FAQ must start with text-first help intro");
  if(!faqHtml.includes('class="section-jump-nav"')) fail(faqFile,"FAQ category navigation missing");
  if(faqHtml.indexOf('page-intro--faq') > faqHtml.indexOf('class="section-jump-nav"')) fail(faqFile,"FAQ categories must follow intro");
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
    if(html.includes('class="secondary-hero__media"')) fail(file,"legal pages should use a text-first compact hero");
    if(html.includes("VNext Foundation")) fail(file,`${id} placeholder leaked`);
  }


  const notFoundPath=locale==="ar"?"404.html":"en/404.html";
  const notFoundHtml=await readFile(path.join(DIST,notFoundPath),"utf8");
  const notFoundCopy=pages.find((page)=>page.id==="notFound")?.content?.[locale];
  if(!notFoundCopy) fail(notFoundPath,"localized 404 copy missing");
  else if(!notFoundHtml.includes(`<h1 id="not-found-title">${htmlText(notFoundCopy.title)}</h1>`)) fail(notFoundPath,"404 heading missing");
  if(!notFoundHtml.includes('name="robots" content="noindex,follow"')) fail(notFoundPath,"404 must be noindex");
  if(!notFoundHtml.includes('src="/assets/brand/not-found-illustration.svg"')) fail(notFoundPath,"404 illustration missing");
  if(notFoundHtml.includes('location.pathname.startsWith')) fail(notFoundPath,"404 must not localize via client JavaScript");
  if(!notFoundHtml.includes(`lang="${locale}"`)) fail(notFoundPath,"404 language must match requested locale");

  if((notFoundHtml.match(/<img\b/g)??[]).length!==1) fail(notFoundPath,"404 must contain exactly one image");
  if((notFoundHtml.match(/<a\b/g)??[]).length!==2) fail(notFoundPath,"404 must contain only skip link and home CTA");
  if(!notFoundHtml.includes(`href="${routes.home(locale)}"`)) fail(notFoundPath,"404 must link to localized homepage");
  if(notFoundHtml.includes('class="site-header"') || notFoundHtml.includes('class="site-footer"')) fail(notFoundPath,"404 must not render the regular site shell");

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
  "The site uses basic traffic measurement through Google Analytics 4.",
  "يستخدم الموقع قياسًا أساسيًا للزيارات عبر Google Analytics 4.",
  "Google Fonts operate outside this website",
  "Google Fonts خدمات خارجية عن الموقع"
]){
  if(!legalSource.includes(required)) fail("legal",`verified privacy statement missing: ${required}`);
}

const routing=JSON.parse(await readFile(path.join(ROOT,"vercel.json"),"utf8"));
const routeList=routing.routes??[];
// Continuing security-header route is evaluated before filesystem; 404 fallbacks
// must remain terminal and localized after the filesystem handler.
if(routeList[0]?.src!=="/(.*)" || routeList[0]?.continue!==true || !routeList[0]?.headers) fail("vercel.json","the first rule must attach headers and continue to filesystem");
if(routeList[1]?.handle!=="filesystem") fail("vercel.json","static routes must resolve before 404 catchalls");
if(routeList[2]?.src!=="/en(?:/.*)?" || routeList[2]?.status!==404 || routeList[2]?.dest!=="/en/404.html" || routeList[2]?.continue) fail("vercel.json","English 404 must be a terminal server-side 404");
if(routeList[3]?.src!=="/.*" || routeList[3]?.status!==404 || routeList[3]?.dest!=="/404.html" || routeList[3]?.continue) fail("vercel.json","Arabic/default 404 must be a terminal server-side 404");


const articleCss=await readFile(path.join(ROOT,"src/styles/insights-careers.css"),"utf8");
if(!articleCss.includes(".article-content__layout{display:grid;grid-template-columns:minmax(0,52rem)")) {
  fail("article","intro and body must be in a single readable editorial column");
}
const faqCss=await readFile(path.join(ROOT,"src/styles/secondary.css"),"utf8");
if(!faqCss.includes("padding-inline-end:2.5rem") || !faqCss.includes(".faq-group{display:grid")) {
  fail("faq","logical RTL/LTR disclosure space and grouped layout are required");
}
if(errors.length){
  console.error("VNEXT SECONDARY/LEGAL CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SECONDARY/LEGAL CHECK: PASSED");
console.log("Checked FAQ, published editorial routes, careers publication states, verified legal copy and runtime privacy behavior.");
