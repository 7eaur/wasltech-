import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { absoluteUrl } from "../src/config/seo.js";
import { getIndexableEntries } from "../src/seo/indexable-routes.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist-release");
const errors = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

const entries = getIndexableEntries();
const paths = new Set(entries.map((entry) => entry.path));

if (paths.size !== entries.length) {
  fail("sitemap", "duplicate indexable paths detected");
}

const robots = await readFile(path.join(DIST, "robots.txt"), "utf8");
if (!robots.includes("User-agent: *") || !robots.includes("Allow: /")) {
  fail("robots.txt", "production robots must allow crawling");
}
if (!robots.includes("User-agent: OAI-SearchBot") || !/User-agent: OAI-SearchBot\s+Allow: \/\s*/.test(robots)) {
  fail("robots.txt", "OAI-SearchBot must be explicitly allowed in production");
}
if (!robots.includes(`Sitemap: ${absoluteUrl("/sitemap.xml")}`)) {
  fail("robots.txt", "production sitemap URL missing");
}
if (robots.includes("Disallow: /")) {
  fail("robots.txt", "production robots must not block the whole site");
}

const sitemap = await readFile(path.join(DIST, "sitemap.xml"), "utf8");
const urlCount = (sitemap.match(/<url>/g) ?? []).length;
if (urlCount !== entries.length) {
  fail("sitemap.xml", `expected ${entries.length} URL entries, found ${urlCount}`);
}

for (const entry of entries) {
  const file = outputPath(entry.path);
  let html = "";
  try {
    html = await readFile(path.join(DIST, file), "utf8");
  } catch {
    fail(file, "indexable release route missing");
    continue;
  }

  const robotsMeta = html.match(/<meta name="robots" content="([^"]+)">/i)?.[1] ?? "";
  const robotDirectives = new Set(robotsMeta.split(",").map((item) => item.trim()).filter(Boolean));
  for (const directive of ["index", "follow", "max-image-preview:large"]) {
    if (!robotDirectives.has(directive)) {
      fail(file, `release robots directive missing: ${directive}`);
    }
  }

  const canonical = absoluteUrl(entry.path);
  if (!html.includes(`rel="canonical" href="${canonical}"`)) {
    fail(file, "release canonical missing");
  }
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
    fail(file, "release route missing from sitemap");
  }

  for (const [locale, alternatePath] of Object.entries(entry.alternates ?? {})) {
    const alternate = absoluteUrl(alternatePath);
    if (!paths.has(alternatePath)) {
      fail(file, `hreflang points to a non-indexable route: ${locale} => ${alternatePath}`);
    }
    if (!html.includes(`hreflang="${locale}" href="${alternate}"`)) {
      fail(file, `HTML hreflang missing: ${locale}`);
    }
    if (!sitemap.includes(`hreflang="${locale}" href="${alternate}"`)) {
      fail(file, `sitemap hreflang missing: ${locale}`);
    }
  }

  const ogImageMatch = html.match(/property="og:image" content="([^"]+)"/);
  const twitterImageMatch = html.match(/name="twitter:image" content="([^"]+)"/);
  if (!ogImageMatch || !twitterImageMatch) {
    fail(file, "indexable route must expose Open Graph and Twitter images");
  } else if (ogImageMatch[1] !== twitterImageMatch[1]) {
    fail(file, "Open Graph and Twitter images must resolve to the same asset");
  } else {
    const imagePath = new URL(ogImageMatch[1]).pathname.replace(/^\/+/, "");
    try {
      const imageInfo = await stat(path.join(DIST, imagePath));
      if (!imageInfo.isFile()) fail(file, `social image is not a file: ${imagePath}`);
    } catch {
      fail(file, `social image missing from release output: ${imagePath}`);
    }
  }

  if (entry.alternates?.ar) {
    const xDefault = absoluteUrl(entry.alternates.ar);
    if (!html.includes(`hreflang="x-default" href="${xDefault}"`)) {
      fail(file, "HTML x-default missing");
    }
    if (!sitemap.includes(`hreflang="x-default" href="${xDefault}"`)) {
      fail(file, "sitemap x-default missing");
    }
  }
}

try {
  await stat(path.join(DIST, "__showcase"));
  fail("__showcase", "internal design-system showcase must not ship in production build");
} catch {
  // Expected.
}

for (const file of ["404.html", "en/404.html"]) {
  try {
    const html = await readFile(path.join(DIST, file), "utf8");
    if (!html.includes('name="robots" content="noindex,follow"')) {
      fail(file, "404 must stay noindex in release build");
    }
    if (html.includes('rel="canonical"')) fail(file, "404 must not emit canonical");
  } catch {
    fail(file, "localized 404 page missing from release build");
  }
}

if (errors.length) {
  console.error("VNEXT RELEASE CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT RELEASE CHECK: PASSED");
console.log(`Indexable release routes: ${entries.length}`);
