import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";

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

    if (count(html, /data-site-header/g) !== 1) fail(file, "expected exactly one shared site header");
    if (count(html, /<footer\b/g) !== 1) fail(file, "expected exactly one shared footer");
    if (!html.includes("data-menu-toggle")) fail(file, "mobile menu toggle missing");
    if (!html.includes("data-primary-nav")) fail(file, "primary navigation contract missing");

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

const navigationClient = await readFile(path.join(ROOT, "src/client/navigation.js"), "utf8");
for (const contract of [
  'setAttribute("aria-label"',
  'event.key === "Escape"',
  '"pointerdown"',
  'matchMedia("(min-width: 53.8125rem)")'
]) {
  if (!navigationClient.includes(contract)) {
    fail("src/client/navigation.js", `missing mobile navigation behavior: ${contract}`);
  }
}

if (errors.length) {
  console.error("VNEXT SHELL CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT SHELL CHECK: PASSED");
console.log(`Checked ${shellRouteKeys.length * 2} bilingual shared-shell routes.`);
