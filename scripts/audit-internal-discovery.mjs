import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getIndexableEntries } from "../src/seo/indexable-routes.js";
import { site } from "../src/config/site.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(ROOT, "dist-release");
const pages = getIndexableEntries();
const routes = new Map(pages.map((p) => [p.path, p]));
const inlinks = new Map(pages.map(({ path }) => [path, new Set()]));
const outlinks = new Map(pages.map(({ path }) => [path, new Set()]));
const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
const errors = [];
const visited = new Set();

if (routes.size !== pages.length) errors.push("duplicate source routes");
if (!pages.length) errors.push("no indexable pages");
for (const { path: route } of pages) {
  const file = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  let html;
  try {
    html = await readFile(path.join(output, file), "utf8");
  } catch {
    errors.push(route + ": generated HTML missing");
    continue;
  }
  if (!sitemap.includes("<loc>" + site.origin + route + "</loc>")) errors.push(route + ": sitemap listing missing");
  const links = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)]
    .map((m) => m[1].replaceAll("&amp;", "&"));
  for (const href of links) {
    let url;
    try { url = new URL(href, site.origin + route); } catch { continue; }
    if (url.origin !== site.origin || !routes.has(url.pathname)) continue;
    if (url.pathname === route) continue;
    visited.add(url.pathname);
    outlinks.get(route).add(url.pathname);
    inlinks.get(url.pathname).add(route);
  }
}

const focus = [
  "/portfolio/aroma-cafe/",
  "/portfolio/elite-electronics/",
  "/en/portfolio/cms-dashboard/",
  "/insights/website-or-web-system/"
];
const lines = [];
for (const route of focus) {
  const incoming = [...(inlinks.get(route) || [])].sort();
  lines.push({ route, count: incoming.length, referringRoutes: incoming });
  if (!routes.has(route)) errors.push(route + ": missing from canonical route manifest");
  if (incoming.length === 0) errors.push(route + ": zero internal links from any indexable page");
}
const orphans = [...inlinks].filter(([route, sources]) => sources.size === 0 && !["/","/en/"].includes(route));
console.log("INTERNAL LINK DISCOVERY AUDIT (static release, no deployment)");
console.log("Indexable URLs: " + routes.size + "; internally discovered: " + visited.size + "; zero-inlink pages: " + orphans.length);
for (const item of lines) console.log(JSON.stringify(item));
console.log("ALL ZERO-INLINK PATHS: " + JSON.stringify(orphans.map(([r]) => r)));
if (errors.length) {
  console.error("INTERNAL DISCOVERY CHECK FAILED:");
  for (const err of errors) console.error("- " + err);
  process.exit(1);
}
console.log("INTERNAL DISCOVERY CHECK PASSED");
