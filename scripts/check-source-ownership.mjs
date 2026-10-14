import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Active VNext ownership only. Superseded root runtime files were removed after VNext cutover verification.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const read=(p)=>readFile(path.join(root,p),"utf8");
const exists=async(p)=>access(path.join(root,p)).then(()=>true,()=>false);
const errors=[];
const fail=(scope,message)=>errors.push(`${scope}: ${message}`);
const build=await read("scripts/build.mjs");
const packageJson=JSON.parse(await read("package.json"));
const vercel=JSON.parse(await read("vercel.json"));
const template=await read("src/templates/document.js");
const sharedComponents=await read("src/styles/components.css");
const serviceDetailStyles=await read("src/styles/service-detail.css");
if(!sharedComponents.includes(".section-jump-nav a{")) fail("components.css","shared FAQ/service jump navigation styles missing");
if(serviceDetailStyles.includes(".section-jump-nav")) fail("service-detail.css","shared jump navigation must not be owned by one route bundle");

// These paths belonged to the retired pre-VNext runtime or one-off generation
// output. Keeping the list executable prevents a future merge from silently
// restoring two competing website implementations.
const retiredPaths = [
  ".cfignore",
  ".htaccess",
  ".wranglerignore",
  "404.html",
  "about.html",
  "blog.html",
  "contact.html",
  "faq.html",
  "index.html",
  "portfolio.html",
  "process.html",
  "robots.txt",
  "service-web.html",
  "services.html",
  "site.webmanifest",
  "sitemap.xml",
  "scratch_fonts.css",
  "css",
  "js",
  "elyas",
  "assets/fontawesome",
  "assets/gen"
];
for (const retiredPath of retiredPaths) {
  if (await exists(retiredPath)) fail(retiredPath,"retired pre-VNext path must not be restored");
}

const sourcesBlock=build.match(/const cssSources = \[([\s\S]*?)\];/)?.[1];
if(!sourcesBlock) fail("build.mjs","canonical CSS source list is missing");
const active=[...(sourcesBlock??"").matchAll(/"src\/styles\/([^"]+\.css)"/g)].map(x=>x[1]);
if(new Set(active).size!==active.length) fail("build.mjs","duplicate CSS source");
const runtimeOwned=new Set([...build.matchAll(/"src\/styles\/([^"]+\.css)"/g)].map(x=>x[1]));
const onDisk=(await readdir(path.join(root,"src/styles"))).filter(x=>x.endsWith(".css"));
for(const file of active){
  if(!onDisk.includes(file)) fail(file,"listed CSS source missing");
}
const preview="showcase.css";
if(!build.includes('src/styles/showcase.css')) fail(preview,"preview-only stylesheet must be explicitly included by build");
const inert="hero-system.css";
const inertSource=await read(`src/styles/${inert}`);
if(inertSource.replace(/\/\*[\s\S]*?\*\//g,"").trim()) fail(inert,"comment-only architectural marker became functional without a build owner");
if(active.includes(preview)||active.includes(inert)) fail("build.mjs","preview/marker stylesheet incorrectly listed in the shared runtime bundle");
for(const name of onDisk){
  if(!runtimeOwned.has(name) && name!==inert) fail(name,"unowned stylesheet: register build use or explicitly prove archival ownership");
}
for(const bundle of ["home","services","service-detail","portfolio","project-detail","about","process","contact-planner","secondary","insights-careers"]){
  if(!build.includes(`${bundle}:`) && !build.includes(`"${bundle}":`)) fail("build.mjs",`page CSS bundle missing: ${bundle}`);
}

const clients=(await readdir(path.join(root,"src/client"))).filter(x=>x.endsWith(".js"));
for(const file of clients){
  const src=`src/client/${file}`;
  const dest=`assets/js/${file}`;
  if(!build.includes(`"${src}"`)) fail(file,"client module missing from release build");
  if(!build.includes(`"${dest}"`)) fail(file,"client release output missing");
}
// Attribute every public script tag to exactly one VNext component/page owner.
// A module copied by build but never loaded (or accidentally loaded twice) is not
// considered owned.
const clientOwners = new Map([
  ["navigation.js","src/templates/document.js"],
  ["motion.js","src/templates/document.js"],
  ["analytics.js","src/templates/document.js"],
  ["portfolio-filter.js","src/pages/portfolio.js"],
  ["project-planner.js","src/pages/project-planner.js"]
]);
const ownedModules = [
  "src/templates/document.js",
  ...(await readdir(path.join(root,"src/pages")))
    .filter((name)=>name.endsWith(".js")).map((name)=>`src/pages/${name}`)
];
const ownerSources = await Promise.all(ownedModules.map(async (module)=>({
  module,
  content: module==="src/templates/document.js" ? template : await read(module)
})));
for (const [client, expectedOwner] of clientOwners) {
  if (!clients.includes(client)) fail(client,"public JS referenced but its build source is missing");
  const scriptUrl = `src="/assets/js/${client}"`;
  const owners=ownerSources.filter((entry)=>entry.content.includes(scriptUrl)).map((entry)=>entry.module);
  if(owners.length!==1 || owners[0]!==expectedOwner){
    fail(client,`expected exactly one script owner (${expectedOwner}); found: ${owners.join(", ")||"none"}`);
  }
}
for (const client of clients) {
  if (!clientOwners.has(client)) fail(client,"new public client needs an explicit script owner");
}
if(!template.includes("/assets/css/site.css")) fail("document.js","canonical stylesheet URL missing");
if(!template.includes("styleBundles = []") || !template.includes('/assets/css/${bundle}.css')) fail("document.js","route-specific stylesheet ownership missing");
if(vercel.buildCommand!=="npm run vnext:build:release"||vercel.outputDirectory!=="dist-release") fail("vercel.json","VNext release output owner changed");
// Vercel legacy routes API controls routing for the bilingual custom 404s.
// Its first continuing route must own headers. Top-level headers did not reach
// Preview HTTP responses alongside this explicit routes configuration.
const [fontCacheRoute,headerRoute,filesystemRoute,...fallbackRoutes]=vercel.routes??[];
if(fontCacheRoute?.src!=="/assets/fonts/(.*)" || fontCacheRoute?.continue!==true
  || fontCacheRoute?.headers?.["Cache-Control"]!=="public, max-age=31536000, immutable"){
  fail("vercel.json","versioned local fonts must keep a long-lived immutable browser cache");
}
if(headerRoute?.src!=="/(.*)" || headerRoute?.continue!==true || headerRoute?.dest || headerRoute?.status){
  fail("vercel.json","response headers must be in a continuing catch-all route before filesystem");
}
if(filesystemRoute?.handle!=="filesystem")fail("vercel.json","filesystem must follow the continuing headers route");
if(vercel.headers?.length)fail("vercel.json","top-level headers may be ignored with custom routes; keep a single route owner");
for(const [key,value] of Object.entries({
  "X-Content-Type-Options":"nosniff",
  "Referrer-Policy":"strict-origin-when-cross-origin",
  "Permissions-Policy":"camera=(), microphone=(), geolocation=()",
  "X-Frame-Options":"SAMEORIGIN"
})){
  if(headerRoute?.headers?.[key]!==value)fail("vercel.json","expected route-applied static response header: "+key);
}
if(fallbackRoutes.length!==2
  || fallbackRoutes[0].src!=="/en(?:/.*)?" || fallbackRoutes[0].status!==404 || fallbackRoutes[0].dest!=="/en/404.html"
  || fallbackRoutes[1].src!=="/.*" || fallbackRoutes[1].status!==404 || fallbackRoutes[1].dest!=="/404.html"){
  fail("vercel.json","localized HTTP 404 routes must stay after filesystem unchanged");
}

if(!build.includes('await rm(DIST, { recursive: true, force: true })')) fail("build.mjs","deterministic output cleaning removed");
if(!packageJson.scripts["vnext:check:structure"]?.includes("check-source-ownership.mjs")) fail("package.json","dependency ownership guard not wired into verification");

if(errors.length){
  console.error("VNEXT SOURCE OWNERSHIP: FAILED");
  for(const error of errors) console.error("- "+error);
  process.exit(1);
}
console.log(`VNEXT SOURCE OWNERSHIP: PASSED (${active.length} shared CSS sources, 10 route bundles, 1 preview CSS, 1 comment-only marker, ${clients.length} runtime client modules).`);
