import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "../src/config/site.js";
import { organizationEntityId, websiteEntityId } from "../src/seo/structured-data.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist-release");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}
function outputPath(route){return route==="/"?"index.html":path.join(route.replace(/^\//,""),"index.html");}
function schemas(html){
  const out=[];
  for(const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)){
    try{out.push(JSON.parse(match[1]));}catch{/* covered by search visibility gate */}
  }
  return out;
}

const expectedSameAs=[...site.entity.sameAs].sort();

for(const route of ["/","/en/"]){
  const html=await readFile(path.join(DIST,outputPath(route)),"utf8");
  const all=schemas(html);
  const organization=all.find((item)=>item?.["@type"]==="Organization");
  const website=all.find((item)=>item?.["@type"]==="WebSite");

  if(!organization){fail(route,"Organization schema missing");continue;}
  if(organization["@id"]!==organizationEntityId) fail(route,"canonical Organization @id mismatch");
  if(organization.name!==site.brand.name.en) fail(route,"Organization name mismatch");
  if(organization.alternateName!==site.brand.name.ar) fail(route,"Organization alternateName mismatch");
  if(organization.url!==site.origin) fail(route,"Organization canonical URL mismatch");
  if(organization.description!==site.entity.description) fail(route,"Organization description mismatch");
  if(organization.disambiguatingDescription!==site.entity.disambiguatingDescription) fail(route,"Organization disambiguation text mismatch");
  if(organization.slogan!==site.brand.slogan.en) fail(route,"Organization slogan mismatch");
  if(organization.email!==site.contact.email) fail(route,"Organization email mismatch");
  if(organization.telephone!==site.contact.phoneUri) fail(route,"Organization telephone mismatch");

  const actualSameAs=[...(organization.sameAs??[])].sort();
  if(JSON.stringify(actualSameAs)!==JSON.stringify(expectedSameAs)) fail(route,"Organization sameAs must match the canonical entity profile set");
  if(new Set(actualSameAs).size!==actualSameAs.length) fail(route,"Organization sameAs contains duplicates");
  for(const value of actualSameAs){
    let url;
    try{url=new URL(value);}catch{fail(route,`invalid sameAs URL: ${value}`);continue;}
    if(url.protocol!=="https:") fail(route,`sameAs must use HTTPS: ${value}`);
    if(url.search) fail(route,`sameAs must not contain tracking/query parameters: ${value}`);
    if(/\/share\//i.test(url.pathname)) fail(route,`share URLs are forbidden in sameAs: ${value}`);
  }

  if(!website) fail(route,"WebSite schema missing");
  else {
    if(website["@id"]!==websiteEntityId) fail(route,"canonical WebSite @id mismatch");
    if(website.publisher?.["@id"]!==organizationEntityId) fail(route,"WebSite publisher must reference canonical Organization");
    if(website.description!==site.entity.description) fail(route,"WebSite description mismatch");
  }
}

if(site.entity.sameAs.includes(site.contact.social.facebook)){
  fail("site.entity.sameAs","Facebook share URL must not be used as an entity identity URL; replace it only when a canonical Facebook profile URL is verified");
}

if(errors.length){
  console.error("ENTITY CONSISTENCY CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("ENTITY CONSISTENCY CHECK: PASSED");
console.log(`Canonical external entity profiles: ${site.entity.sameAs.length}`);
