import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const errors=[];
const fail=(scope,message)=>errors.push(`${scope}: ${message}`);

const component=await readFile(path.join(ROOT,"src/components/MediaCard.js"),"utf8");
for(const contract of ["export function MediaCard","media-card__media","media-card__title","media-card__body"]){
  if(!component.includes(contract)) fail("MediaCard",`missing shared contract: ${contract}`);
}

for(const file of ["home.js","portfolio.js","insights.js","service-detail.js","project-detail.js"]){
  const source=await readFile(path.join(ROOT,"src/pages",file),"utf8");
  if(!source.includes("MediaCard")) fail(file,"shared media-card pattern must use MediaCard");
}

const styles=await Promise.all([
  "components.css","home.css","portfolio.css","insights-careers.css","service-detail.css","project-detail.css"
].map((file)=>readFile(path.join(ROOT,"src/styles",file),"utf8")));
const css=styles.join("\n");

for(const legacy of [
  "home-service-card","home-project__media","home-project__copy",
  "portfolio-card","insight-card","service-proof__card","service-proof__media",
  "service-proof__copy","project-related__media","project-related__copy"
]){
  if(css.includes(`.${legacy}`)) fail("styles",`legacy media-card selector remains: .${legacy}`);
}
for(const contract of [".media-card{",".media-card__media{",".media-card__title{",".media-card__body{"]){
  if(!css.includes(contract)) fail("components.css",`missing shared media-card style: ${contract}`);
}

if(errors.length){
  console.error("VNEXT MEDIA CARD CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("VNEXT MEDIA CARD CHECK: PASSED");
console.log("Shared image/title/summary card contract verified.");
