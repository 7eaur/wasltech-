import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getIndexableEntries } from "../src/seo/indexable-routes.js";
import { absoluteUrl } from "../src/config/seo.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist-release");
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function matchOne(source, regex) {
  return source.match(regex)?.[1]?.trim() ?? "";
}

function registerUnique(map, value, route, label) {
  const normalized = value.replace(/\s+/g, " ").trim().toLowerCase();
  if (!normalized) {
    fail(route, `${label} is empty`);
    return;
  }
  const prior = map.get(normalized);
  if (prior && prior !== route) {
    fail(route, `duplicate ${label} also used by ${prior}`);
  } else {
    map.set(normalized, route);
  }
}

const robots = await readFile(path.join(DIST, "robots.txt"), "utf8");

if (!/User-agent:\s*OAI-SearchBot[\s\S]*?Allow:\s*\//i.test(robots)) {
  fail("robots.txt", "OAI-SearchBot must be explicitly allowed in production");
}
if (!robots.includes(`Sitemap: ${absoluteUrl("/sitemap.xml")}`)) {
  fail("robots.txt", "canonical sitemap declaration missing");
}

for (const entry of getIndexableEntries()) {
  const route = entry.path;
  const file = outputPath(route);
  let html = "";
  try {
    html = await readFile(path.join(DIST, file), "utf8");
  } catch {
    fail(route, "generated HTML missing");
    continue;
  }

  const title = decode(matchOne(html, /<title>([\s\S]*?)<\/title>/i));
  const description = decode(matchOne(html, /<meta\s+name="description"\s+content="([^"]*)"/i));
  registerUnique(seenTitles, title, route, "title");
  registerUnique(seenDescriptions, description, route, "meta description");

  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) fail(route, `expected exactly one H1, found ${h1Count}`);

  if (!html.includes(`rel="canonical" href="${absoluteUrl(route)}"`)) {
    fail(route, "self canonical missing or incorrect");
  }

  if (!html.includes('name="robots" content="index,follow"')) {
    fail(route, "must remain index,follow in production");
  }

  for (const name of ["og:title", "og:description", "og:url", "og:image"]) {
    if (!html.includes(`property="${name}"`)) fail(route, `${name} missing`);
  }
  for (const name of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    if (!html.includes(`name="${name}"`)) fail(route, `${name} missing`);
  }

  for (const [locale, alternatePath] of Object.entries(entry.alternates ?? {})) {
    if (!html.includes(`hreflang="${locale}" href="${absoluteUrl(alternatePath)}"`)) {
      fail(route, `hreflang ${locale} missing`);
    }
  }

  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const [index, block] of jsonLdBlocks.entries()) {
    try {
      const parsed = JSON.parse(block[1]);
      if (parsed?.["@context"] !== "https://schema.org") {
        fail(route, `JSON-LD block ${index + 1} has unexpected @context`);
      }
    } catch {
      fail(route, `JSON-LD block ${index + 1} is not valid JSON`);
    }
  }
}

if (errors.length) {
  console.error("SEARCH VISIBILITY CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEARCH VISIBILITY CHECK: PASSED");
console.log(`Indexable routes checked: ${getIndexableEntries().length}`);
