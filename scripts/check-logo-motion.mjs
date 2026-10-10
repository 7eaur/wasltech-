import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { Script } from "node:vm";

const root=process.cwd();
const source=await readFile(resolve(root,"prototypes/wasl-logo-motion.html"),"utf8");
const original=await readFile(resolve(root,"assets/brand/wasl-tech-horizontal.svg"),"utf8");
const built=await readFile(resolve(root,"dist/__logo-motion/index.html"),"utf8");
const fail=message=>{throw new Error("WASL DOT MORPH QA: "+message)};

if(source!==built)fail("build output and preview source differ");
if(!source.includes('name="robots" content="noindex,nofollow"'))fail("preview must be noindex");
if(!source.includes(original.replace(/^<\?xml[^>]*>\s*/,"")))fail("the original SVG is not embedded unchanged");
if((original.match(/<path\b/g)||[]).length!==3)fail("unexpected source vector path count");
if(!source.includes('src="/assets/brand/wasl-tech-horizontal.svg"'))fail("official SVG fallback missing");
if(source.includes('<article class="card"'))fail("obsolete logo animation gallery leaked into preview");
for(const fragment of [
    'data-state="orbit"',
    "function splitContours(pathD)",
    "function renderSymbol(run,t)",
    "function finishSymbol(run)",
    "function updateOrbit(run,now)",
    "function contourPoints(d,count,svg)",
    "const blueDot=make('circle',{r:13,fill:'#14305F'",
    "const greenDot=make('circle',{r:13,fill:'#0E8889'",
    'id="replay"',
    'id="slow"',
    'id="trigger-ready"',
    'id="show-site"',
    'id="site-preview"',
    'id="close-preview"',
    'id="demo-again"',
    "event.key==='Escape'",
    'prefers-reduced-motion:reduce'
]){if(!source.includes(fragment))fail("missing "+fragment)}
for(const img of source.match(/<img\b[^>]*>/g)||[]){
  if(!/\balt="[^"]*"/.test(img)||!/\bwidth="\d+"/.test(img)||!/\bheight="\d+"/.test(img))fail("image missing accessible alt / intrinsic dimensions");
}
for(const button of source.match(/<button\b[^>]*>/g)||[]){
  if(!/\btype="button"/.test(button))fail("button missing explicit type");
}
const scripts=[...source.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if(scripts.length!==1)fail("expected one inline controller");
new Script(scripts[0][1],{filename:"wasl-two-dot-morph.js"});
if(!(await stat(resolve(root,"dist/__logo-motion/index.html"))).isFile())fail("preview route not built");
console.log("WASL DOT MORPH QA PASSED: original SVG, dual orbit, morph, actual wordmark, timeout-free controls.");
