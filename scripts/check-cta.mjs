import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const errors=[];
const fail=(scope,message)=>errors.push(`${scope}: ${message}`);

const component=await readFile(path.join(ROOT,"src/components/CallToAction.js"),"utf8");
for(const contract of ["export function CallToAction","site-cta__inner","site-cta__copy","site-cta__actions","ActionLink({"]){
  if(!component.includes(contract)) fail("CallToAction",`missing shared contract: ${contract}`);
}

for(const file of [
  "home.js","about.js","process.js","services.js","service-detail.js","portfolio.js",
  "project-detail.js","contact.js","insights.js","article-detail.js","job-detail.js"
]){
  const source=await readFile(path.join(ROOT,"src/pages",file),"utf8");
  if(!source.includes("CallToAction")) fail(file,"closing CTA must use CallToAction");
}

const styles=await Promise.all([
  "components.css","home.css","about-process.css","services.css","service-detail.css",
  "portfolio.css","project-detail.css","contact-planner.css","insights-careers.css"
].map((file)=>readFile(path.join(ROOT,"src/styles",file),"utf8")));
const css=styles.join("\n");

for(const legacy of [
  "home-final-cta","about-cta","process-cta","services-unsure","service-detail-cta",
  "portfolio-cta","project-detail-cta","contact-final","insights-cta","article-cta","job-cta"
]){
  if(css.includes(`.${legacy}`)) fail("styles",`legacy CTA selector remains: .${legacy}`);
}

for(const contract of [".site-cta{",".site-cta__inner{",".site-cta h2{",".site-cta__actions{"]){
  if(!css.includes(contract)) fail("components.css",`missing shared CTA style: ${contract}`);
}

if(errors.length){
  console.error("VNEXT CTA CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("VNEXT CTA CHECK: PASSED");
console.log("Shared closing CTA component and legacy-selector guard verified.");
