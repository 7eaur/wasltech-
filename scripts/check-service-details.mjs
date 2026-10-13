import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { site } from "../src/config/site.js";
import { services } from "../src/data/services.js";
import { getProjectsByService } from "../src/data/projects.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

function fail(scope,message){ errors.push(`${scope}: ${message}`); }
function outputPath(route){ return route === "/" ? "index.html" : path.join(route.replace(/^\//,""),"index.html"); }
function htmlText(value=""){ return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"); }

for (const locale of ["ar","en"]) {
  const alternateLocale = locale === "ar" ? "en" : "ar";

  for (const service of services) {
    const copy = service.content[locale];
    const route = routes.service(service.slug,locale);
    const file = outputPath(route);
    const html = await readFile(path.join(DIST,file),"utf8");

    if (!html.includes(`<h1>${htmlText(copy.title)}</h1>`)) fail(file,"canonical service H1 missing");
    if (!html.includes(service.image)) fail(file,`canonical service Hero image missing: ${service.image}`);
    if (!html.includes(htmlText(copy.seo.title))) fail(file,"service SEO title missing");
    if (!html.includes(htmlText(copy.seo.description))) fail(file,"service SEO description missing");
    if (!html.includes(`rel="canonical" href="${site.origin}${route}"`)) fail(file,"service canonical missing");
    if (!html.includes(`hreflang="${alternateLocale}" href="${site.origin}${routes.service(service.slug,alternateLocale)}"`)) {
      fail(file,"service alternate hreflang missing");
    }

    for (const schemaType of ['"@type":"Service"','"@type":"BreadcrumbList"','"@type":"FAQPage"']) {
      if (!html.includes(schemaType)) fail(file,`structured data missing: ${schemaType}`);
    }

    if (!html.includes(htmlText(copy.decision.problemNeed))) fail(file,"problem/need content missing");
    if (!html.includes(htmlText(copy.decision.scopeSummary))) fail(file,"scope summary missing");

    // Keep every substantive field when removing repeated template copy (UXR-03).
    for (const item of copy.heroCards) {
      if (!html.includes(htmlText(item.title)) || !html.includes(htmlText(item.description))) fail(file,`service signal missing: ${item.title}`);
    }
    for (const audience of copy.audiences) {
      if (!html.includes(htmlText(audience))) fail(file,`service audience missing: ${audience}`);
    }
    for (const constraint of copy.constraints) {
      if (!html.includes(htmlText(constraint))) fail(file,`scope constraint missing: ${constraint}`);
    }
    for (const deliverable of copy.deliverables) {
      if (!html.includes(htmlText(deliverable.description))) fail(file,`deliverable description missing: ${deliverable.title}`);
    }

    const subserviceDisclosureCount=(html.match(/class="service-disclosure service-subservice__details"/g)??[]).length;
    if((copy.subservices?.length ?? 0)>3){
      if(subserviceDisclosureCount!==copy.subservices.length) fail(file,"long service options need native, JS-free disclosures");
      if(!html.includes('class="service-disclosure service-subservice__details" open')) fail(file,"first service option must show a visible explanation");
    }else if(subserviceDisclosureCount!==0){
      fail(file,"short service option lists should remain fully readable without disclosure");
    }
    for (const subservice of copy.subservices ?? []) {
      if (!html.includes(htmlText(subservice.title))) fail(file,`subservice missing: ${subservice.title}`);
      if (!html.includes(htmlText(subservice.description))) fail(file,`subservice description missing: ${subservice.id}`);
    }

    const deliverablesAt = html.indexOf('id="service-deliverables"');
    const proofAt = html.indexOf('id="service-proof"');
    const processAt = html.indexOf('id="service-process"');
    const signalAt = html.indexOf('class="service-signals"');
    if (deliverablesAt < 0 || signalAt < 0 || deliverablesAt > signalAt) fail(file,"all services must show outcomes before supporting claims");
    if (proofAt >= 0 && (proofAt < deliverablesAt || proofAt > signalAt)) fail(file,"related work must follow outcomes and precede support");
    if (processAt < signalAt) fail(file,"service process must follow supporting context");

    for (const anchor of ["service-deliverables","service-process","service-faq"]) {
      if (!html.includes(`id="${anchor}"`) || !html.includes(`href="#${anchor}"`)) fail(file,`service jump link missing: ${anchor}`);
    }
    if ((html.match(/class="service-disclosure service-deliverable__details"/g) ?? []).length !== copy.deliverables.length) {
      fail(file,"deliverables must use native accessible disclosure");
    }
    if (!html.includes('class="service-disclosure service-deliverable__details" open')) fail(file,"first deliverable must provide an open example");
    for (const deliverable of copy.deliverables) {
      if (!html.includes(htmlText(deliverable.title))) fail(file,`deliverable missing: ${deliverable.title}`);
    }

    if (service.id === "web" && html.indexOf('id="service-deliverables"') > html.indexOf('class="service-signals"')) fail(file,"U2 web prototype must show deliverables before support signals");
    for (const process of copy.process) {
      if (!html.includes(htmlText(process.title))) fail(file,`process step missing: ${process.title}`);
    }

    for (const faq of copy.faq) {
      if (!html.includes(htmlText(faq.question))) fail(file,`FAQ missing: ${faq.question}`);
    }

    const related = getProjectsByService(service.id);
    const hasProof = /class="[^"]*\bservice-proof\b[^"]*"/.test(html);
    if (Boolean(related.length) !== hasProof) {
      fail(file,`related proof visibility mismatch for service: ${service.id}`);
    }

    for (const project of related.slice(0,3)) {
      if (!html.includes(htmlText(project.content[locale].title))) {
        fail(file,`related project missing: ${project.id}`);
      }
    }

    for (const project of related.slice(0,3)) {
      const detailHref = routes.project(project.slug,locale);
      if (!html.includes(`href="${detailHref}"`)) fail(file,`related project detail link missing: ${project.id}`);
    }

    if (html.includes("VNext Foundation")) fail(file,"foundation placeholder leaked into service detail");
  }
}

const source=await readFile(path.join(ROOT,"src/pages/service-detail.js"),"utf8");
for (const duplicate of [
  "هذه الأنواع جزء من الخدمة الرئيسية وتُحدد تفاصيلها حسب احتياج المشروع.",
  "يتم تحديد التفاصيل النهائية حسب احتياج المشروع ونطاق العمل.",
  "استكشف كيف تُترجم هذه الخدمة داخل مشاريع ومتطلبات مختلفة.",
  "خطوات واضحة من فهم الاحتياج إلى التنفيذ والتسليم.",
  "These are service types within the main offering, with details defined according to each project.",
  "The exact deliverables depend on your project scope, but these are the elements that may be included in the service.",
  "See how this service takes shape across different projects and needs.",
  "Clear steps from understanding the need to execution and delivery."
]){
  if (source.includes(duplicate)) fail("service-detail.js","duplicated generic supporting text returned: "+duplicate);
}

const serviceCss=await readFile(path.join(ROOT,"src/styles/service-detail.css"),"utf8");
if(!serviceCss.includes(".service-decision-panel{grid-template-columns:1fr}")) fail("service-detail.css","mobile decision summaries must stack for readable reflow");

// Descriptions are real service content and must be visible at narrow widths too.
for(const file of ["hero-pages.css","hero-responsive.css"]){
  const source=await readFile(path.join(ROOT,"src/styles",file),"utf8");
  for(const [,css] of source.matchAll(/\.service-detail-hero__description\s*\{([^}]*)\}/g)){
    if(/(?:-webkit-line-clamp|\bline-clamp|\bmax-height|overflow\s*:\s*hidden|display\s*:\s*-webkit-box)/.test(css)) fail(file,"service Hero description must not be clipped");
  }
}

if (errors.length) {
  console.error("VNEXT SERVICE DETAIL CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SERVICE DETAIL CHECK: PASSED");
console.log(`Checked ${services.length * 2} bilingual service detail routes.`);
