import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { site } from "../src/config/site.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

const shellRouteKeys = [
  "home",
  "services",
  "portfolio",
  "process",
  "about",
  "insights",
  "faq",
  "careers",
  "contact",
  "startProject"
];

for (const locale of ["ar", "en"]) {
  const alternateLocale = locale === "ar" ? "en" : "ar";

  for (const routeKey of shellRouteKeys) {
    const route = routes[routeKey](locale);
    const file = outputPath(route);
    const html = await readFile(path.join(DIST, file), "utf8");

    if (count(html, /data-brand-intro/g) !== 1) fail(file, "one shared brand intro required on each normal page");
    if (!html.includes('src="/assets/js/brand-intro-bootstrap.js"') ||
        !html.includes('src="/assets/js/brand-intro.js" defer')) fail(file, "first-visit logo policy JS missing");
    if (!html.includes('class="brand-intro__layer brand-intro__layer--finished"')) {
      fail(file, "approved Wasl Tech logo intro layer missing");
    }

    if (count(html, /data-site-header/g) !== 1) fail(file, "expected exactly one shared site header");
    if (count(html, /class="floating-contact"/g) !== 1) fail(file,"single global floating contact shortcut required");
    if (!html.includes(`href="${site.contact.whatsapp}?text=`)) fail(file,"localized WhatsApp shortcut missing");

    if (count(html, /<footer\b/g) !== 1) fail(file, "expected exactly one shared footer");
    if (!html.includes("data-menu-toggle")) fail(file, "mobile menu toggle missing");
    if (!html.includes("data-primary-nav")) fail(file, "primary navigation contract missing");
    if (!html.includes('class="mobile-nav-contact"') || !html.includes('class="mobile-nav-language"') || !html.includes('class="mobile-nav-action"')) fail(file,"mobile contact, language and project entries missing");
    if (!html.includes(`href="${routes.contact(locale)}"`) || !html.includes(`href="${routes.startProject(locale)}"`)) fail(file,"mobile contact/project route missing");

    const alternatePath = routes[routeKey](alternateLocale);
    if (!html.includes(`href="${alternatePath}" hreflang="${alternateLocale}"`)) {
      fail(file, "language switch does not preserve route identity");
    }
  }
}

const headerSource = await readFile(path.join(ROOT, "src/components/Header.js"), "utf8");
for (const contract of [
  "data-open-label",
  "data-close-label",
  "menu-icon",
  "aria-expanded"
]) {
  if (!headerSource.includes(contract)) {
    fail("src/components/Header.js", `missing shell header contract: ${contract}`);
  }
}

const footerSource = await readFile(path.join(ROOT, "src/components/Footer.js"), "utf8");
for (const contract of [
  "footer-social",
  "footer-contact__value",
  "site.contact.whatsapp",
  "site.contact.phoneUri",
  "site.contact.email",
  "site.contact.domain",
  "site.contact.social"
]) {
  if (!footerSource.includes(contract)) {
    fail("src/components/Footer.js", `missing shared footer contract: ${contract}`);
  }
}

for (const locale of ["ar", "en"]) {
  const file = outputPath(routes.home(locale));
  const html = await readFile(path.join(DIST, file), "utf8");
  const renderedContracts = [
    `href="${site.contact.whatsapp}"`,
    `href="tel:${site.contact.phoneUri}"`,
    `href="mailto:${site.contact.email}"`,
    `<bdi dir="ltr">${site.contact.phoneDisplay}</bdi>`,
    `<bdi dir="ltr">${site.contact.email}</bdi>`,
    `<bdi dir="ltr">${site.contact.domain}</bdi>`,
    ...Object.values(site.contact.social).map((url) => `href="${url}"`)
  ];

  for (const contract of renderedContracts) {
    if (!html.includes(contract)) {
      fail(file, `missing rendered footer contact/social contract: ${contract}`);
    }
  }
}

const quickContact=await readFile(path.join(ROOT,"src/components/FloatingContact.js"),"utf8");
if(!quickContact.includes("encodeURIComponent(copy.message)") || !quickContact.includes('rel="noopener noreferrer"')) fail("FloatingContact.js","safe encoded bilingual contact link required");

const layoutCss=await readFile(path.join(ROOT,"src/styles/layout.css"),"utf8");
if(!layoutCss.includes(".site-header{position:sticky;top:0;z-index:var(--z-header)")) fail("layout.css","the header must remain sticky");
if(!layoutCss.includes(".footer-links a{display:inline-flex;align-items:center;min-height:1.5rem}")) {
  fail("src/styles/layout.css","footer link targets must be at least 24px tall in English and Arabic");
}

const navigationClient = await readFile(path.join(ROOT, "src/client/navigation.js"), "utf8");
for (const contract of [
  'setAttribute("aria-label"',
  'event.key === "Escape"',
  '"pointerdown"',
  '"focusin"',
  'matchMedia("(min-width: 53.8125rem)")'
]) {
  if (!navigationClient.includes(contract)) {
    fail("src/client/navigation.js", `missing mobile navigation behavior: ${contract}`);
  }
}

// The intro is progressive enhancement: disabled JS must never cover page content.
const introCss=await readFile(path.join(DIST,"assets/css/site.css"),"utf8");
const introBootstrap=await readFile(path.join(DIST,"assets/js/brand-intro-bootstrap.js"),"utf8");
const introController=await readFile(path.join(DIST,"assets/js/brand-intro.js"),"utf8");
for(const token of [".brand-intro-pending .brand-intro", ".brand-intro-active .brand-intro", "wt-intro-symbol", "wt-intro-wordmark"]){
  if(!introCss.includes(token)) fail("site.css","missing Update Card-compatible Signature Reveal: "+token);
}
if(!introBootstrap.includes('localStorage.getItem("wasl-tech-intro-v1")')) fail("brand-intro-bootstrap.js","first-visit persistent eligibility decision missing");
if(!introController.includes('localStorage.setItem("wasl-tech-intro-v1", "seen")')) fail("brand-intro.js","one-time completion marker missing");
if(!introController.includes('"brand-intro-static"') || !introController.includes("3000")) fail("brand-intro.js","reduced-motion/image timeout protection missing");
const motionClient=await readFile(path.join(ROOT,"src/client/motion.js"),"utf8");
if(!motionClient.includes('"DOMContentLoaded", scheduleReveals')) fail("motion.js","reveal scheduling should not wait for full image load");
const componentCss=await readFile(path.join(ROOT,"src/styles/components.css"),"utf8");
if(componentCss.includes("contact-halo 7s") || componentCss.includes("@keyframes contact-halo")) fail("components.css","fixed contact shortcut must not pulse continuously");
if(!componentCss.includes(".media-card__title a:focus-visible::after")) fail("components.css","full-card keyboard focus style is missing");
if (errors.length) {
  console.error("VNEXT SHELL CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SHELL CHECK: PASSED");
console.log(`Checked ${shellRouteKeys.length * 2} bilingual shared-shell routes.`);
