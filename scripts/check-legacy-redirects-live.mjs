/**
 * Acceptance against a PREVIEW built from this exact experimental branch SHA.
 * Run only after account deployment limits are available and with explicit
 * permission to create a preview. Read-only HTTP, never runs against production.
 */
import { legacyPageAliases, legacyServicePathVariants } from "../src/seo/legacy-redirects.js";
import { services } from "../src/data/services.js";
import { routes } from "../src/config/routes.js";
import { site } from "../src/config/site.js";

const raw=process.env.PREVIEW_BASE_URL;
let preview;
try { preview=new URL(raw); } catch { console.error("PREVIEW_BASE_URL is required"); process.exit(2); }
if(preview.protocol!=="https:" || !preview.hostname.endsWith(".vercel.app") ||
  preview.pathname!=="/" || preview.search || preview.hash){
  console.error("PREVIEW_BASE_URL must be an exact HTTPS .vercel.app origin");
  process.exit(2);
}
const errors=[];
let count=0;
async function check(pathname,status,expectedPath=null,expectedCleanQuery=false){
  for(const method of ["GET","HEAD"]){
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),12000);
    const url=new URL(pathname,preview.origin);
    try {
      const res=await fetch(url,{method,redirect:"manual",signal:controller.signal});
      count++;
      if(res.status!==status){ errors.push(`${method} ${pathname}: HTTP ${res.status} expected ${status}`);continue; }
      if(expectedPath){
        const location=res.headers.get("location");
        if(!location){errors.push(`${method} ${pathname}: missing Location`);continue;}
        const dest=new URL(location,url);
        if(![preview.origin,site.origin].includes(dest.origin) || dest.pathname!==expectedPath){
          errors.push(`${method} ${pathname}: incorrect destination ${dest.href}`);
        }
        if(expectedCleanQuery && dest.search){errors.push(`${method} ${pathname}: old query leaked into Location ${dest.search}`);}
      }
      if(status===404 && res.headers.get("location")) errors.push(`${method} ${pathname}: unknown ID must not redirect`);
    }catch(error){errors.push(`${method} ${pathname}: ${error.message}`);}
    finally{clearTimeout(timeout);}
  }
}
for(const alias of legacyPageAliases){await check(alias.source,308,alias.destination);}
for(const locale of ["ar","en"]){
  const prefix=locale==="ar"?"":"/en";
  for(const suffix of legacyServicePathVariants){
    for(const service of services){
      for(const id of new Set([service.slug,service.id])){
        await check(`${prefix}${suffix}?id=${encodeURIComponent(id)}`,308,routes.service(service.slug,locale),true);
      }
    }
    for(const query of ["","?id=does-not-exist","?id=web&id=app"]){
      await check(prefix+suffix+query,404);
    }
  }
}
for(const destination of new Set([
  ...legacyPageAliases.map(alias=>alias.destination),
  ...["ar","en"].flatMap(locale=>services.map(service=>routes.service(service.slug,locale)))
])){
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),12000);
  try {
    const r=await fetch(new URL(destination,preview.origin),{redirect:"manual",signal:controller.signal});
    count++;
    if(r.status!==200){errors.push(destination+": target must respond 200 but got "+r.status);continue;}
    const html=await r.text();
    if(!html.includes('rel="canonical" href="'+site.origin+destination+'"')){
      errors.push(destination+": destination must have its correct canonical");
    }
  }catch(e){errors.push(destination+": "+e.message);}
  finally{clearTimeout(timeout);}
}
if(errors.length){
  console.error("LIVE STAGE 01 EXPERIMENT ACCEPTANCE: FAILED");
  errors.forEach(e=>console.error("- "+e));
  process.exit(1);
}
console.log(`LIVE STAGE 01 EXPERIMENT ACCEPTANCE: PASSED (${count} checks, 9 HTML redirects and bilingual service aliases)`);
