import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { Script } from "node:vm";

const root=process.cwd();
const source=await readFile(resolve(root,"prototypes/wasl-logo-motion.html"),"utf8");
const original=await readFile(resolve(root,"assets/brand/wasl-tech-horizontal.svg"),"utf8");
const rendered=await readFile(resolve(root,"dist/__logo-motion/index.html"),"utf8");
const modes=["elastic","magnetic","ribbon","liquid","segments"];
const fail=(message)=>{throw new Error("WASL MOTION QA: "+message)};

if(rendered!==source)fail("built HTML does not match source");
if(!source.includes('name="robots" content="noindex,nofollow"'))fail("noindex missing");
if(!source.includes('src="/assets/brand/wasl-tech-horizontal.svg"'))fail("original SVG fallback missing");
if((original.match(/<path\\b/g)||[]).length!==3)fail("official SVG structure changed");
if((source.match(/<template id="svg-source">/g)||[]).length!==1)fail("expected embedded SVG source once");
if(!source.includes(original.replace(/^<\\?xml[^>]*>\\s*/,"")))fail("embedded master SVG changed");
const cards=[...source.matchAll(/<article class="card[^"]*">/g)];
if(cards.length!==5)fail("five gallery cards required");
for(const mode of modes){
  if(!source.includes('data-motion="'+mode+'"')||
     !source.includes('data-open="'+mode+'"')||
     !source.includes('data-replay="'+mode+'"')||
     !source.includes('@keyframes '+({elastic:"en",magnetic:"mn",ribbon:"rn",liquid:"ln",segments:"sn"}[mode]))) {
      fail("incomplete elastic variant: "+mode);
  }
}
if(!source.includes("wrapPiece(parts[0],'navy')") ||
   !source.includes("wrapPiece(parts[1],'teal')") ||
   !source.includes("wrapPiece(word,'word')") ||
   !source.includes("word=Array.from(svg.children).find(x=>x.localName==='path')"))fail("official wordmark/svg part preservation missing");
for(const img of source.match(/<img\\b[^>]*>/g)||[]){
  if(!/\\balt="[^"]*"/.test(img)||!/\\bwidth="\\d+"/.test(img)||!/\\bheight="\\d+"/.test(img))fail("image missing intrinsic size or alt");
}
for(const button of source.match(/<button\\b[^>]*>/g)||[]){
  if(!/\\btype="button"/.test(button))fail("button missing type");
}
if(!source.includes('@media(prefers-reduced-motion:reduce)') ||
   !source.includes('reduce.matches'))fail("accessibility reduced motion not handled");
if(!source.includes("event.key==='Escape'") ||
   !source.includes('id="dialog-close"') ||
   !source.includes('splash.classList.add(\'is-exiting\')'))fail("splash controls/dismissal missing");
const scripts=[...source.matchAll(/<script>([\\s\\S]*?)<\\/script>/g)];
if(scripts.length!==1)fail("must have a single inline controller");
new Script(scripts[0][1],{filename:"logo-motion-prototype.js"});
const file=await stat(resolve(root,"dist/__logo-motion/index.html"));
if(!file.isFile())fail("preview output missing");
console.log("WASL MOTION QA PASSED: 5 elastic modes, exact master SVG, safe controls, preview route, JS syntax.");
