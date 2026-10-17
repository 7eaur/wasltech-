import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { legacyStaticPageAliases, legacyCdnPageAliases, legacyServicePathVariants } from "../src/seo/legacy-redirects.js";
import { resolveHistoricalService } from "../src/seo/resolve-historical-service.js";
import { services } from "../src/data/services.js";
import { routes } from "../src/config/routes.js";
import { getIndexableEntries } from "../src/seo/indexable-routes.js";
import functionHandler from "../api/legacy-service.js";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const vercel=JSON.parse(await readFile(path.join(ROOT,"vercel.json"),"utf8"));
const cdn=JSON.parse(await readFile(path.join(ROOT,"config/vercel-cdn-routes.json"),"utf8"));
const errors=[];
const check=(condition,message)=>{if(!condition)errors.push(message)};
const canonical=new Set(getIndexableEntries().map(item=>item.path));
const routeList=vercel.routes??[];
const fileAt=routeList.findIndex(x=>x.handle==="filesystem");
const redirectRules=routeList.slice(2,2+legacyStaticPageAliases.length);
check(!vercel.redirects?.length,"Spike must avoid mixed 'redirects' and legacy 'routes' definitions");
check(vercel.trailingSlash===true,"Existing trailing slash canonical policy must not change");
check(fileAt===11,"Seven static redirect rules and two function rules must precede filesystem");
check(legacyCdnPageAliases.length===2,"CDN index aliases must remain separate");
check(cdn.routes?.length===3,"CDN must own precisely www and two index aliases");
for (const {source,destination} of legacyCdnPageAliases) {
  const matches=(cdn.routes??[]).filter(rule=>rule.route?.src===source &&
    rule.route?.status===308 && rule.route?.headers?.Location==="https://wasl-tech.com"+destination);
  check(matches.length===1,"CDN index rule missing or noncanonical for "+source);
}
const hostRule=(cdn.routes??[]).filter(rule=>rule.route?.has?.some(x=>x.type==="host" && x.value==="www.wasl-tech.com") &&
  rule.route?.status===308 && rule.route?.headers?.Location==="https://wasl-tech.com/$1");
check(hostRule.length===1,"www → apex host redirect must remain unique");

for(const cdn of legacyCdnPageAliases){check(!routeList.some(r=>r.src===cdn.source.replaceAll(".","\\.")),"CDN and vercel.json must not both own "+cdn.source);}
for(const {source,destination} of legacyStaticPageAliases){
  const expectedSrc=source.replaceAll(".","\\.");
  const matches=redirectRules.filter(rule=>rule.src===expectedSrc && rule.status===308 && rule.headers?.Location===destination);
  check(matches.length===1,`Missing or duplicate HTML 308 ${source}`);
  check(canonical.has(destination),`HTML redirect ${source} targets a noncanonical URL`);
}
for(const locale of ["ar","en"]){
  const rule=routeList.find(r=>r.dest===`/api/legacy-service?language=${locale}`);
  check(Boolean(rule),"No function route for "+locale);
  const prefix=locale==="en"?"/en":"";
  for(const suffix of legacyServicePathVariants){
    check(Boolean(rule && new RegExp("^"+rule.src+"$").test(prefix+suffix)),`Missing match for ${prefix+suffix}`);
  }
  for(const service of services){
    for(const id of new Set([service.id,service.slug])){
      const result=resolveHistoricalService({id,locale});
      check(result===routes.service(service.slug,locale),`Wrong target for ${locale}/${id}: ${result}`);
      check(canonical.has(result),`Unindexable target for ${id}`);
      const request=new Request(`https://wasl-tech.com/api/legacy-service?language=${locale}&id=${id}`);
      const response=await functionHandler.fetch(request);
      check(response.status===308 && response.headers.get("location")===result,`Incorrect HTTP result for ${locale}/${id}`);
      check(!response.headers.get("location")?.includes("?id"),"Legacy ID must be removed from Location");
    }
  }
  for(const bad of ["","bogus","wEb","../../admin","https://bad.example","web-development/", "a".repeat(120)]){
    const request=new Request(`https://wasl-tech.com/api/legacy-service?language=${locale}&id=${encodeURIComponent(bad)}`);
    const response=await functionHandler.fetch(request);
    check(response.status===404,`Unknown ${locale}/${bad} must be 404, got ${response.status}`);
  }
}
for(const request of [
  "https://wasl-tech.com/api/legacy-service?language=ar",
  "https://wasl-tech.com/api/legacy-service?language=ar&id=web&id=app",
  "https://wasl-tech.com/api/legacy-service?language=fr&id=web"
]){
  const response=await functionHandler.fetch(new Request(request));
  check(response.status===404,`Malformed parameter should not match: ${request}`);
}
check((await functionHandler.fetch(new Request("https://wasl-tech.com/api/legacy-service?language=ar&id=web",{method:"POST"}))).status===405,"POST should be disallowed");
check((await functionHandler.fetch(new Request("https://wasl-tech.com/api/legacy-service?language=ar&id=web",{method:"HEAD"}))).status===308,"HEAD should follow redirect");
if(errors.length){
 console.error("LEGACY FUNCTION ROUTING SPIKE: FAILED");
 errors.forEach(x=>console.error("- "+x));
 process.exit(1);
}
console.log(`LEGACY FUNCTION ROUTING SPIKE: PASSED (7 local + 2 CDN HTML aliases, 2 route matchers, ${services.length} × 2 locales × 2 aliases, unknown-ID 404); live Vercel acceptance still required.`);
