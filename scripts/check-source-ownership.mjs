import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Active VNext ownership only. Legacy site files remain until a coordinated cutover.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const read=(p)=>readFile(path.join(root,p),"utf8");
const errors=[];
const fail=(scope,message)=>errors.push(`${scope}: ${message}`);
const build=await read("scripts/build.mjs");
const packageJson=JSON.parse(await read("package.json"));
const vercel=JSON.parse(await read("vercel.json"));
const template=await read("src/templates/document.js");

const sourcesBlock=build.match(/const cssSources = \[([\s\S]*?)\];/)?.[1];
if(!sourcesBlock) fail("build.mjs","canonical CSS source list is missing");
const active=[...(sourcesBlock??"").matchAll(/"src\/styles\/([^"]+\.css)"/g)].map(x=>x[1]);
if(new Set(active).size!==active.length) fail("build.mjs","duplicate CSS source");
const onDisk=(await readdir(path.join(root,"src/styles"))).filter(x=>x.endsWith(".css"));
for(const file of active){
  if(!onDisk.includes(file)) fail(file,"listed CSS source missing");
}
const preview="showcase.css";
if(!build.includes('src/styles/showcase.css')) fail(preview,"preview-only stylesheet must be explicitly included by build");
const inert="hero-system.css";
const inertSource=await read(`src/styles/${inert}`);
if(inertSource.replace(/\/\*[\s\S]*?\*\//g,"").trim()) fail(inert,"comment-only architectural marker became functional without a build owner");
if(active.includes(preview)||active.includes(inert)) fail("build.mjs","preview/marker stylesheet incorrectly listed for runtime");
for(const name of onDisk){
  if(!active.includes(name) && name!==preview && name!==inert) fail(name,"unowned stylesheet: register build use or explicitly prove archival ownership");
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
// considered owned. Preserve root-level legacy code for a separate production cutover.
const clientOwners = new Map([
  ["navigation.js","src/templates/document.js"],
  ["motion.js","src/templates/document.js"],
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
  const scriptTag = `<script src="/assets/js/${client}" defer></script>`;
  const owners=ownerSources.filter((entry)=>entry.content.includes(scriptTag)).map((entry)=>entry.module);
  if(owners.length!==1 || owners[0]!==expectedOwner){
    fail(client,`expected exactly one script owner (${expectedOwner}); found: ${owners.join(", ")||"none"}`);
  }
}
for (const client of clients) {
  if (!clientOwners.has(client)) fail(client,"new public client needs an explicit script owner");
}
if(!template.includes("/assets/css/site.css")) fail("document.js","canonical stylesheet URL missing");
if(vercel.buildCommand!=="npm run vnext:build:release"||vercel.outputDirectory!=="dist-release") fail("vercel.json","VNext release output owner changed");
if(!build.includes('await rm(DIST, { recursive: true, force: true })')) fail("build.mjs","deterministic output cleaning removed");
if(!packageJson.scripts["vnext:check:structure"]?.includes("check-source-ownership.mjs")) fail("package.json","dependency ownership guard not wired into verification");

if(errors.length){
  console.error("VNEXT SOURCE OWNERSHIP: FAILED");
  for(const error of errors) console.error("- "+error);
  process.exit(1);
}
console.log(`VNEXT SOURCE OWNERSHIP: PASSED (${active.length} runtime CSS, 1 preview CSS, 1 comment-only marker, ${clients.length} runtime client modules).`);
console.log("Root-level legacy HTML/CSS/JS and .htaccess were not deleted or treated as release inputs.");
