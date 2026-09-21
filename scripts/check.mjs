import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { absoluteUrl } from "../src/config/seo.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

const errors = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

const routeKeys = ["home", "services", "portfolio", "process", "about", "contact"];

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

const requiredPages = [
  ...["ar", "en"].flatMap((locale) =>
    routeKeys.map((routeKey) => ({
      file: outputPath(routes[routeKey](locale)),
      route: routes[routeKey](locale),
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      alternate: routes[routeKey](locale === "ar" ? "en" : "ar")
    }))
  ),
  { file: "404.html", route: null, locale: "ar", dir: "rtl", alternate: null }
];

for (const record of requiredPages) {
  const file = path.join(DIST, record.file);
  try {
    const html = await readFile(file, "utf8");

    if (!html.includes(`<html lang="${record.locale}" dir="${record.dir}">`)) {
      fail(record.file, `missing ${record.locale}/${record.dir} document contract`);
    }
    if (count(html, /<h1\b/g) !== 1) fail(record.file, "expected exactly one h1");
    if (count(html, /<main\b/g) !== 1) fail(record.file, "expected exactly one main");
    if (!html.includes('name="robots" content="noindex,follow"')) fail(record.file, "foundation preview must remain noindex");
    if (html.includes('href="#"')) fail(record.file, 'dead href="#" is forbidden');
    if (html.includes('style="')) fail(record.file, "inline style attributes are forbidden in VNext generated markup");

    if (record.route) {
      const canonical = absoluteUrl(record.route);
      const alternate = absoluteUrl(record.alternate);
      if (!html.includes(`rel="canonical" href="${canonical}"`)) fail(record.file, "canonical URL missing or incorrect");
      if (!html.includes(`hreflang="${record.locale}" href="${canonical}"`)) fail(record.file, "self hreflang missing");
      const alternateLocale = record.locale === "ar" ? "en" : "ar";
      if (!html.includes(`hreflang="${alternateLocale}" href="${alternate}"`)) fail(record.file, "alternate hreflang missing");
      if (!html.includes('hreflang="x-default"')) fail(record.file, "x-default hreflang missing");
      for (const property of ["og:type", "og:locale", "og:site_name", "og:title", "og:description", "og:url"]) {
        if (!html.includes(`property="${property}"`)) fail(record.file, `missing ${property}`);
      }
      for (const name of ["twitter:card", "twitter:title", "twitter:description"]) {
        if (!html.includes(`name="${name}"`)) fail(record.file, `missing ${name}`);
      }
      if (record.route === routes.home(record.locale) && !html.includes('type="application/ld+json"')) {
        fail(record.file, "homepage structured data missing");
      }
    } else {
      if (html.includes('rel="canonical"')) fail(record.file, "404 must not emit canonical");
      if (html.includes('<link rel="alternate" hreflang=')) fail(record.file, "404 must not emit SEO hreflang links");
    }
  } catch {
    fail(record.file, "generated page missing");
  }
}

const robotsOutput = await readFile(path.join(DIST, "robots.txt"), "utf8");
if (!robotsOutput.includes("User-agent: *") || !robotsOutput.includes("Disallow: /")) {
  fail("robots.txt", "preview robots policy must block crawling");
}
try {
  await stat(path.join(DIST, "sitemap.xml"));
  fail("sitemap.xml", "preview build must not emit an indexable sitemap");
} catch {
  // Expected until release/index mode is enabled.
}

for (const record of [
  { file: "__showcase/index.html", locale: "ar", dir: "rtl" },
  { file: "en/__showcase/index.html", locale: "en", dir: "ltr" }
]) {
  const html = await readFile(path.join(DIST, record.file), "utf8");
  if (!html.includes(`<html lang="${record.locale}" dir="${record.dir}">`)) {
    fail(record.file, "showcase locale/direction contract failed");
  }
  if (!html.includes('name="robots" content="noindex,nofollow"')) {
    fail(record.file, "showcase must stay noindex,nofollow");
  }
  if (html.includes('rel="canonical"')) fail(record.file, "showcase must not emit canonical");
  if (html.includes('<link rel="alternate" hreflang=')) fail(record.file, "showcase must not emit SEO hreflang links");
  if (html.includes('href="#"')) fail(record.file, 'showcase dead href="#" is forbidden');
  if (html.includes('style="')) fail(record.file, "showcase inline style attributes are forbidden");
  if (count(html, /<h1\b/g) !== 1) fail(record.file, "showcase must have exactly one h1");
}

const sourceFiles = [
  ...await walk(path.join(ROOT, "src")),
  path.join(ROOT, "scripts/build.mjs"),
  path.join(ROOT, "scripts/check.mjs"),
  path.join(ROOT, "scripts/check-data.mjs")
];

for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const relative = path.relative(ROOT, file);
  const lines = source.split(/\r?\n/).length;

  if (/final[-_ ]?fix|mobile[-_ ]?fix|responsive[-_ ]?fix/i.test(relative)) {
    fail(relative, "patch-style filename is forbidden");
  }

  if (relative.endsWith(".css")) {
    if (/!important/.test(source)) fail(relative, "!important is forbidden in VNext foundation styles");
    if (/linear-gradient|radial-gradient|conic-gradient/.test(source)) fail(relative, "decorative gradients are forbidden by default");
    if (lines > 400) fail(relative, `CSS responsibility file too large (${lines} lines)`);
  }

  if ((relative.endsWith(".js") || relative.endsWith(".mjs")) && !relative.startsWith("src/data/")) {
    if (lines > 350) fail(relative, `code module too large (${lines} lines)`);
  }
}

const packageJson = JSON.parse(await readFile(path.join(ROOT, "package.json"), "utf8"));
if (packageJson.dependencies && Object.keys(packageJson.dependencies).length) {
  fail("package.json", "Phase 1 must not introduce runtime dependencies");
}

const brandConfig = await readFile(path.join(ROOT, "src/config/brand.js"), "utf8");
for (const contract of [
  'ar: "وصل تك"',
  'en: "Wasl Tech"',
  'ar: "IBM Plex Sans Arabic"',
  'en: "IBM Plex Sans"',
  'logo: "/assets/brand/wasl-tech-horizontal.svg"',
  'logoWhite: "/assets/brand/wasl-tech-horizontal-white.svg"',
  'favicon: "/assets/brand/favicon.svg"'
]) {
  if (!brandConfig.includes(contract)) {
    fail("src/config/brand.js", `missing canonical brand contract: ${contract}`);
  }
}

const localesSource = await readFile(path.join(ROOT, "src/config/locales.js"), "utf8");
for (const contract of [
  'export const defaultLocale = "ar"',
  'prefix: ""',
  'prefix: "/en"',
  'dir: "rtl"',
  'dir: "ltr"'
]) {
  if (!localesSource.includes(contract)) {
    fail("src/config/locales.js", `missing bilingual locale contract: ${contract}`);
  }
}

const routesSource = await readFile(path.join(ROOT, "src/config/routes.js"), "utf8");
for (const route of [
  "services",
  "portfolio",
  "start-project",
  "insights",
  "careers",
  "privacy",
  "terms"
]) {
  if (!routesSource.includes(route)) {
    fail("src/config/routes.js", `missing canonical route family: ${route}`);
  }
}

const tokensSource = await readFile(path.join(ROOT, "src/styles/tokens.css"), "utf8");
for (const contract of [
  "--wt-navy-700:#14305F",
  "--wt-teal-500:#0E8889",
  "--wt-teal-700:#096B70",
  '--font-ar:"IBM Plex Sans Arabic"',
  '--font-en:"IBM Plex Sans"'
]) {
  if (!tokensSource.includes(contract)) {
    fail("src/styles/tokens.css", `missing canonical identity token: ${contract}`);
  }
}

const brandStyles = await readFile(path.join(ROOT, "src/styles/brand.css"), "utf8");
for (const token of [
  "--color-brand-primary:",
  "--color-brand-accent:",
  "--color-bg-canvas:",
  "--color-text-primary:",
  "--color-border-default:"
]) {
  if (!brandStyles.includes(token)) {
    fail("src/styles/brand.css", `missing semantic brand role: ${token}`);
  }
}

const typographyStyles = await readFile(path.join(ROOT, "src/styles/typography.css"), "utf8");
if (!typographyStyles.includes('html[lang="ar"]') || !typographyStyles.includes('html[lang="en"]')) {
  fail("src/styles/typography.css", "bilingual typography selectors are required");
}

const cssSourcesForTokenCheck = await Promise.all(
  [
    "src/styles/tokens.css",
    "src/styles/brand.css",
    "src/styles/typography.css",
    "src/styles/base.css",
    "src/styles/layout.css",
    "src/styles/components.css",
    "src/styles/media.css",
    "src/styles/showcase.css"
  ].map((file) => readFile(path.join(ROOT, file), "utf8"))
);
const cssSourceBundle = cssSourcesForTokenCheck.join("\n");
const declaredCustomProperties = new Set(
  [...cssSourceBundle.matchAll(/(--[a-z0-9-]+)\s*:/gi)].map((match) => match[1])
);
const usedCustomProperties = new Set(
  [...cssSourceBundle.matchAll(/var\((--[a-z0-9-]+)/gi)].map((match) => match[1])
);
for (const token of usedCustomProperties) {
  if (!declaredCustomProperties.has(token)) {
    fail("styles", `undefined custom property used: ${token}`);
  }
}

const cssOutput = await readFile(path.join(DIST, "assets/css/site.css"), "utf8");
for (const contract of [
  "--wt-navy-700:#14305F",
  "--wt-teal-500:#0E8889",
  "--wt-teal-700:#096B70",
  "IBM Plex Sans Arabic",
  "IBM Plex Sans"
]) {
  if (!cssOutput.includes(contract)) {
    fail("site.css", `generated identity output missing: ${contract}`);
  }
}

const primaryLogo = await readFile(path.join(ROOT, "assets/brand/wasl-tech-horizontal.svg"), "utf8");
if (!primaryLogo.includes('viewBox="0.00 0.00 1130.00 360.00"')) {
  fail("assets/brand/wasl-tech-horizontal.svg", "unexpected primary logo geometry");
}
if (!primaryLogo.includes("#14305F") || !primaryLogo.includes("#0E8889")) {
  fail("assets/brand/wasl-tech-horizontal.svg", "official Navy/Teal logo colors missing");
}

const whiteLogo = await readFile(path.join(ROOT, "assets/brand/wasl-tech-horizontal-white.svg"), "utf8");
if (!whiteLogo.includes("#FFFFFF")) {
  fail("assets/brand/wasl-tech-horizontal-white.svg", "white logo variant is not the approved source");
}

const favicon = await readFile(path.join(ROOT, "assets/brand/favicon.svg"), "utf8");
if (!favicon.includes('viewBox="0.00 0.00 1024.00 1024.00"') || !favicon.includes("#14305F")) {
  fail("assets/brand/favicon.svg", "favicon identity contract changed");
}

for (const asset of [
  "assets/brand/wasl-tech-horizontal.svg",
  "assets/brand/wasl-tech-horizontal-white.svg",
  "assets/brand/favicon.svg",
  "assets/js/navigation.js"
]) {
  try {
    const info = await stat(path.join(DIST, asset));
    if (!info.isFile()) fail(asset, "expected generated file");
  } catch {
    fail(asset, "missing generated asset");
  }
}

if (errors.length) {
  console.error("VNEXT CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT CHECK: PASSED");
console.log(`Checked ${requiredPages.length} generated bilingual routes and ${sourceFiles.length} source files.`);
console.log("Brand guard: PASSED");
