import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getIndexableEntries } from "../src/seo/indexable-routes.js";
import { absoluteUrl } from "../src/config/seo.js";
import { organizationEntityId, websiteEntityId } from "../src/seo/structured-data.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist-release");
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const htmlByRoute = new Map();
const schemasByRoute = new Map();

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

  htmlByRoute.set(route, html);

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
  const parsedSchemas = [];
  for (const [index, block] of jsonLdBlocks.entries()) {
    try {
      const parsed = JSON.parse(block[1]);
      if (parsed?.["@context"] !== "https://schema.org") {
        fail(route, `JSON-LD block ${index + 1} has unexpected @context`);
      }
      parsedSchemas.push(parsed);
    } catch {
      fail(route, `JSON-LD block ${index + 1} is not valid JSON`);
    }
  }
  schemasByRoute.set(route, parsedSchemas);
}

function schemaOfType(route, type) {
  return (schemasByRoute.get(route) ?? []).find((item) => item?.["@type"] === type);
}

function requireSchema(route, type) {
  const schema = schemaOfType(route, type);
  if (!schema) fail(route, `expected ${type} structured data`);
  return schema;
}

for (const route of ["/", "/en/"]) {
  const organization = requireSchema(route, "Organization");
  const website = requireSchema(route, "WebSite");
  if (organization?.["@id"] !== organizationEntityId) fail(route, "Organization @id must use the canonical entity id");
  if (website?.["@id"] !== websiteEntityId) fail(route, "WebSite @id must use the canonical entity id");
  if (website?.publisher?.["@id"] !== organizationEntityId) fail(route, "WebSite publisher must reference the canonical Organization");
}

for (const [route, schemas] of schemasByRoute.entries()) {
  for (const schema of schemas) {
    const type = schema?.["@type"];
    if (type === "Organization" && schema?.["@id"] !== organizationEntityId) {
      fail(route, "Organization schema uses a non-canonical @id");
    }
    if (type === "Service") {
      if (schema?.provider?.["@id"] !== organizationEntityId) fail(route, "Service provider must reference the canonical Organization");
      if (schema?.isPartOf?.["@id"] !== websiteEntityId) fail(route, "Service must reference the canonical WebSite");
    }
    if (type === "CreativeWork") {
      if (schema?.creator?.["@id"] !== organizationEntityId) fail(route, "CreativeWork creator must reference the canonical Organization");
      if (schema?.isPartOf?.["@id"] !== websiteEntityId) fail(route, "CreativeWork must reference the canonical WebSite");
    }
    if (type === "Article") {
      if (schema?.publisher?.["@id"] !== organizationEntityId) fail(route, "Article publisher must reference the canonical Organization");
      if (schema?.isPartOf?.["@id"] !== websiteEntityId) fail(route, "Article must reference the canonical WebSite");
    }
    if (type === "JobPosting") {
      if (schema?.hiringOrganization?.["@id"] !== organizationEntityId) fail(route, "JobPosting hiringOrganization must reference the canonical Organization");
      if (schema?.isPartOf?.["@id"] !== websiteEntityId) fail(route, "JobPosting must reference the canonical WebSite");
    }
  }

  if (/^\/(?:en\/)?services\/[^/]+\/$/.test(route)) requireSchema(route, "Service");
  if (/^\/(?:en\/)?portfolio\/[^/]+\/$/.test(route)) requireSchema(route, "CreativeWork");
  if (/^\/(?:en\/)?insights\/[^/]+\/$/.test(route)) requireSchema(route, "Article");
  if (/^\/(?:en\/)?careers\/[^/]+\/$/.test(route)) requireSchema(route, "JobPosting");
}

const indexablePaths = new Set(getIndexableEntries().map((entry) => entry.path));
const graph = new Map();

for (const [route, html] of htmlByRoute.entries()) {
  const outgoing = new Set();
  for (const match of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)) {
    try {
      const url = new URL(match[1], absoluteUrl(route));
      if (url.origin !== new URL(absoluteUrl("/")).origin) continue;
      let pathname = url.pathname;
      if (!pathname.endsWith("/") && !pathname.split("/").at(-1)?.includes(".")) pathname += "/";
      if (indexablePaths.has(pathname)) outgoing.add(pathname);
    } catch {
      // Malformed URLs are covered by the general link checker.
    }
  }
  graph.set(route, outgoing);
}

function reachableFrom(start) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const current = queue.shift();
    for (const next of graph.get(current) ?? []) {
      if (visited.has(next)) continue;
      visited.add(next);
      queue.push(next);
    }
  }
  return visited;
}

for (const [locale, home] of [["ar", "/"], ["en", "/en/"]]) {
  const reachable = reachableFrom(home);
  const localePaths = [...indexablePaths].filter((route) => locale === "ar" ? !route.startsWith("/en/") : route.startsWith("/en/"));
  for (const route of localePaths) {
    if (!reachable.has(route)) fail(route, `indexable page is not reachable from the ${locale} homepage through internal links`);
  }
}

if (errors.length) {
  console.error("SEARCH VISIBILITY CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEARCH VISIBILITY CHECK: PASSED");
console.log(`Indexable routes checked: ${getIndexableEntries().length}`);
