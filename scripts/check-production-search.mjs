import { site } from "../src/config/site.js";
import { services } from "../src/data/services.js";
import { articles } from "../src/data/articles.js";
import { routes } from "../src/config/routes.js";

const origin=(process.env.SEARCH_PRODUCTION_ORIGIN || site.origin).replace(/\/$/,"");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function absolute(pathname){return new URL(pathname,origin).href;}
async function fetchText(url,options={}){
  try{
    const response=await fetch(url,{...options,headers:{"user-agent":"WaslTech-Search-Release-Check/1.0",...(options.headers||{})}});
    return {response,text:await response.text()};
  }catch(error){
    fail(url,`request failed: ${error.message}`);
    return null;
  }
}
function canonicalIn(html,url){
  return html.includes(`rel="canonical" href="${url}"`);
}

const robotsResult=await fetchText(absolute("/robots.txt"));
if(robotsResult){
  const {response,text}=robotsResult;
  if(response.status!==200) fail("/robots.txt",`expected 200, got ${response.status}`);
  if(!/User-agent:\s*OAI-SearchBot[\s\S]*?Allow:\s*\//i.test(text)) fail("/robots.txt","OAI-SearchBot allowance missing");
  if(!/User-agent:\s*\*[\s\S]*?Allow:\s*\//i.test(text)) fail("/robots.txt","general crawler allowance missing");
  if(!text.includes(`Sitemap: ${site.origin}/sitemap.xml`)) fail("/robots.txt","canonical sitemap declaration missing");
}

const sitemapResult=await fetchText(absolute("/sitemap.xml"));
if(sitemapResult){
  const {response,text}=sitemapResult;
  if(response.status!==200) fail("/sitemap.xml",`expected 200, got ${response.status}`);
  if(!text.includes(`<loc>${site.origin}/</loc>`)) fail("/sitemap.xml","canonical homepage missing");
  const sampleService=services[0];
  if(sampleService && !text.includes(`<loc>${site.origin}${routes.service(sampleService.slug,"ar")}</loc>`)) {
    fail("/sitemap.xml","sample service route missing");
  }
  const sampleArticle=articles.find((item)=>item.publishedAt && item.localeStatus?.ar==="ready");
  if(sampleArticle && !text.includes(`<loc>${site.origin}${routes.article(sampleArticle.slug,"ar")}</loc>`)) {
    fail("/sitemap.xml","sample article route missing");
  }
}

const samples=[
  {label:"home",path:"/"},
  {label:"home-en",path:"/en/"},
  {label:"services",path:routes.services("ar")},
  {label:"service-detail",path:routes.service(services[0].slug,"ar")},
  {label:"portfolio",path:routes.portfolio("ar")},
  ...(articles.some((item)=>item.publishedAt && item.localeStatus?.ar==="ready")
    ? [{label:"article-detail",path:routes.article(articles.find((item)=>item.publishedAt && item.localeStatus?.ar==="ready").slug,"ar")}]
    : [])
];

for(const sample of samples){
  const url=absolute(sample.path);
  const result=await fetchText(url);
  if(!result) continue;
  const {response,text}=result;
  if(response.status!==200) fail(sample.label,`expected 200, got ${response.status}`);
  const xRobots=response.headers.get("x-robots-tag")||"";
  if(/noindex/i.test(xRobots)) fail(sample.label,`X-Robots-Tag blocks indexing: ${xRobots}`);
  if(!text.includes('name="robots" content="index,follow"')) fail(sample.label,"index,follow meta missing");
  const expectedCanonical=new URL(sample.path,site.origin).href;
  if(!canonicalIn(text,expectedCanonical)) fail(sample.label,`canonical mismatch: expected ${expectedCanonical}`);
}

const canonicalHost=new URL(site.origin).hostname;
if(canonicalHost.startsWith("www.")){
  const apexHost=canonicalHost.slice(4);
  const apexUrl=`https://${apexHost}/`;
  try{
    const response=await fetch(apexUrl,{redirect:"manual",headers:{"user-agent":"WaslTech-Search-Release-Check/1.0"}});
    if(![301,302,307,308].includes(response.status)) fail("apex-redirect",`expected redirect from ${apexUrl}, got ${response.status}`);
    const location=response.headers.get("location");
    if(location){
      const target=new URL(location,apexUrl);
      if(target.hostname!==canonicalHost || target.protocol!=="https:") {
        fail("apex-redirect",`redirect target must be canonical HTTPS host, got ${target.href}`);
      }
    } else {
      fail("apex-redirect","redirect Location header missing");
    }
  }catch(error){
    fail("apex-redirect",`request failed: ${error.message}`);
  }
}

const httpCanonical=site.origin.replace(/^https:/,"http:");
try{
  const response=await fetch(httpCanonical,{redirect:"manual",headers:{"user-agent":"WaslTech-Search-Release-Check/1.0"}});
  if(![301,302,307,308].includes(response.status)) fail("https-redirect",`expected HTTP→HTTPS redirect, got ${response.status}`);
  const location=response.headers.get("location");
  if(location && new URL(location,httpCanonical).protocol!=="https:") fail("https-redirect",`redirect is not HTTPS: ${location}`);
}catch(error){
  fail("https-redirect",`request failed: ${error.message}`);
}

if(errors.length){
  console.error("PRODUCTION SEARCH SMOKE: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("PRODUCTION SEARCH SMOKE: PASSED");
console.log(`Origin: ${origin}`);
console.log(`Representative routes checked: ${samples.length}`);
