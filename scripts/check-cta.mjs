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
  "project-detail.js","insights.js","article-detail.js","job-detail.js"
]){
  const source=await readFile(path.join(ROOT,"src/pages",file),"utf8");
  if(!source.includes("CallToAction")) fail(file,"closing CTA must use CallToAction");
}

// Contact is the destination for action, so repeating a closing WhatsApp CTA
// after two decision paths and three direct channels adds no new destination.
const contactSource=await readFile(path.join(ROOT,"src/pages/contact.js"),"utf8");
if(!contactSource.includes('class="container contact-paths__grid"') ||
   !contactSource.includes('class="contact-channels"') ||
   !contactSource.includes('href="${whatsappHref(locale)}"')) {
  fail("contact.js","contact must retain explicit decision paths and direct contact channels");
}
if(contactSource.includes("CallToAction")) fail("contact.js","duplicate closing action returned after contact choices");

// Inner-page hero actions are intentionally absent from rendered HTML and source.
for(const file of ["services.js","service-detail.js","contact.js","process.js","faq.js","insights.js"]){
  const source=await readFile(path.join(ROOT,"src/pages",file),"utf8");
  if(/<div class="[^"]+-hero__actions"/.test(source)) fail(file,"obsolete hidden inner-hero actions still rendered");
}
for(const file of ["hero-pages.css","hero-responsive.css"]){
  const source=await readFile(path.join(ROOT,"src/styles",file),"utf8");
  if(source.includes(".services-hero__actions")) fail(file,"obsolete inner-hero action override remains");
}

// Never emit focusable inner-Hero controls and hide them with CSS.
const plannerSource=await readFile(path.join(ROOT,"src/pages/project-planner.js"),"utf8");
const plannerHero=plannerSource.match(/<section class="planner-hero">([\s\S]*?)<\/section>/)?.[1];
if(!plannerHero) fail("project-planner.js","planner hero not found");
else if(/<a\b|<button\b|hero__actions/.test(plannerHero)) fail("project-planner.js","inner hero actions must not be rendered");
for(const file of ["hero-pages.css","contact-planner.css"]){
  const source=await readFile(path.join(ROOT,"src/styles",file),"utf8");
  if(/\.planner-hero__copy\s*>?\s*\.text-link\s*\{/.test(source)) fail(file,"orphan planner Hero link rules remain");
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
