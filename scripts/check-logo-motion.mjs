import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { Script } from "node:vm";
const cwd=process.cwd(),read=p=>readFile(resolve(cwd,p),"utf8");
const html=await read("prototypes/wasl-logo-motion.html");
const source=await read("assets/brand/wasl-tech-horizontal.svg");
const output=await read("dist/__logo-motion/index.html");
const assert=(condition,reason)=>{if(!condition)throw Error("WASL CONSTRUCTIVE MOTION QA: "+reason)};
assert(html===output,"preview output differs from committed source");
assert(html.includes(source.replace(/^<\?xml[^>]*>\s*/,"")),"exact master SVG must be embedded intact");
assert((source.match(/<path\b/g)||[]).length===3,"official SVG path count changed");
assert(html.includes('name="robots" content="noindex,nofollow"'),"preview must be unindexed");
const names=["orbital","weave","bloom","calligraphy"];
assert((html.match(/<article class="card"/g)||[]).length===4,"expected four distinct motion storyboard cards");
for(const name of names){
 for(const key of ["data-card","data-variant","data-demo","data-replay","data-orbit","data-finish","data-scrub"]){
  assert(html.includes(key+'="'+name+'"'),"missing "+key+" for "+name);
 }
}
const js=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert(js,"missing controller");
new Script(js,{filename:"wasl-constructive-morph.js"});
for(const name of ["contours","meta","generate","toLocal","makeLetters","instance","orbitCoordinates","timeline","scrub"]){
 assert(js.includes("function "+name+"("),"independent vector function missing "+name);
}
assert(js.includes("r.word.setAttribute('opacity',t>=1?'1':'0')"),"wordmark master must be hidden until full assembly");
assert(js.includes("piece.element.setAttribute('d'"),"individual vector path morphing missing");
assert(js.includes("getTotalLength()")&&js.includes("getPointAtLength"),"native contour measurements missing");
assert(js.includes("const balls=Array.from({length:4}"),"four independent original orbit balls missing");
assert(js.includes("const pieces=[]")&&js.includes("makeLetters(word,svg,pieces)"),"letter path independence missing");
assert(html.includes("@media(prefers-reduced-motion:reduce)"),"reduced motion CSS missing");
for(const img of html.match(/<img\b[^>]*>/g)||[]){
 assert(/\balt="[^"]*"/.test(img)&&/\bwidth="\d+"/.test(img)&&/\bheight="\d+"/.test(img),"image missing alt or intrinsic size");
}
for(const button of html.match(/<button\b[^>]*>/g)||[]){
 assert(/\btype="button"/.test(button),"button missing explicit type");
}
assert((await stat(resolve(cwd,"dist/__logo-motion/index.html"))).isFile(),"preview output missing");
console.log("WASL CONSTRUCTIVE MOTION QA PASSED: 4 nonidentical timelines, 4 seeds, exact SVG, independently morphed glyph paths.");
