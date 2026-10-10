import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { Script } from "node:vm";

const root=process.cwd();
const source=await readFile(resolve(root,"prototypes/wasl-logo-motion.html"),"utf8");
const master=await readFile(resolve(root,"assets/brand/wasl-tech-horizontal.svg"),"utf8");
const built=await readFile(resolve(root,"dist/__logo-motion/index.html"),"utf8");
const modes=["voltsuite","luckypaint","fiverr","google"];
const fail=(message)=>{throw new Error("WASL MOTION QA: "+message)};

if(source!==built)fail("built preview differs from reviewed source");
if(!source.includes('name="robots" content="noindex,nofollow"'))fail("internal preview must be noindex");
if(!source.includes(master.replace(/^<\?xml[^>]*>\s*/,"")))fail("complete official SVG was not embedded unchanged");
if((master.match(/<path\b/g)||[]).length!==3)fail("unexpected master SVG geometry");
if(!source.includes('src="/assets/brand/wasl-tech-horizontal.svg"'))fail("accessible native original logo fallback missing");
if((source.match(/<article class="card"/g)||[]).length!==4)fail("expected exactly four references");
for(const mode of modes){
  if(!source.includes('data-mode="'+mode+'"')||
     !source.includes('data-open="'+mode+'"')||
     !source.includes('data-replay="'+mode+'"'))fail("missing preview/replay controls for "+mode);
}
if(!source.includes("const glyphPaths=d=>") ||
   !source.includes("trace.getTotalLength()") ||
   !source.includes("getPointAtLength") ||
   !source.includes("clipPathUnits:'userSpaceOnUse'") ||
   !source.includes("clipBox(bbox,transformMatrix)") ||
   !source.includes("Arabic upper lettering reads right-to-left"))fail("actual letter-by-letter vector drawing guard missing");
for(const img of source.match(/<img\b[^>]*>/g)||[]){
  if(!/\balt="[^"]*"/.test(img)||!/\bwidth="\d+"/.test(img)||!/\bheight="\d+"/.test(img))fail("image lacks alt or intrinsic dimensions");
}
for(const button of source.match(/<button\b[^>]*>/g)||[]){
  if(!/\btype="button"/.test(button))fail("button lacks explicit type");
}
if(!source.includes("@media(prefers-reduced-motion:reduce)") ||
   !source.includes("reduce.matches") ||
   !source.includes("e.key==='Escape'"))fail("reduced motion or accessible dismissal missing");
const embedded=[...source.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if(embedded.length!==1)fail("single controller script required");
new Script(embedded[0][1],{filename:"logo-motion-preview.js"});
if(!(await stat(resolve(root,"dist/__logo-motion/index.html"))).isFile())fail("preview route missing");
console.log("WASL MOTION QA PASSED: 4 reference-inspired wordmark draw animations; exact original SVG; 3 base paths; preview and a11y contracts.");
