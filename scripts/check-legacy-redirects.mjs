import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { services } from "../src/data/services.js";
import { routes } from "../src/config/routes.js";
import { site } from "../src/config/site.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(await readFile(path.join(ROOT, "vercel.json"), "utf8"));
const redirects = config.redirects ?? [];
const errors = [];
const fail = (msg) => errors.push(msg);
const seen = new Set();
const expected = new Set();

function check(source, destination, id = null) {
  const tag = source + (id ? `?id=${id}` : "");
  expected.add(tag);
  const matches = redirects.filter((rule) =>
    rule.source === source &&
    rule.destination === destination &&
    rule.permanent === true &&
    (id === null ? !rule.has?.length
      : rule.has?.length === 1 &&
        rule.has[0].type === "query" &&
        rule.has[0].key === "id" &&
        rule.has[0].value === id)
  );
  if (matches.length !== 1) fail(`missing or duplicate permanent redirect: ${tag} -> ${destination}`);
}
check("/index.html", routes.home("ar"));
check("/en/index.html", routes.home("en"));
check("/about.html", routes.about("ar"));
check("/contact.html", routes.contact("ar"));
const oldTopLevelPages = [
  ["/services.html", routes.services("ar")],
  ["/portfolio.html", routes.portfolio("ar")],
  ["/process.html", routes.process("ar")],
  ["/faq.html", routes.faq("ar")],
  ["/blog.html", routes.insights("ar")]
];
for (const [source, destination] of oldTopLevelPages) check(source, destination);

for (const locale of ["ar", "en"]) {
  const source = (locale === "ar" ? "" : "/en") + "/service-web";
  for (const aliasSource of [source, source + "/", source + ".html"]) {
    for (const service of services) {
      for (const alias of new Set([service.slug, service.id])) {
        check(aliasSource, routes.service(service.slug, locale), alias);
      }
    }
    const fallbackSource = aliasSource.endsWith(".html")
      ? aliasSource.replace(".html", "\\.html")
      : (aliasSource.endsWith("/") ? aliasSource.slice(0, -1) : aliasSource) + "/?";
    const fallbacks = config.routes?.filter((rule) =>
      rule.src === fallbackSource && rule.status === 404 &&
      rule.dest === (locale === "ar" ? "/404.html" : "/en/404.html")
    );
    if (fallbacks?.length !== 1) fail(`unknown service fallback invalid: ${locale}, ${aliasSource}`);
  }
}
if (services.length !== 8) fail("Expected eight services");
for (const r of redirects) {
  const tag = r.source + (r.has?.[0]?.key === "id" ? `?id=${r.has[0].value}` : "");
  if (seen.has(tag)) fail(`duplicate source/condition: ${tag}`);
  seen.add(tag);
  if (!expected.has(tag)) fail(`unexpected redirect entry: ${tag}`);
  if (!r.permanent || !r.destination?.startsWith("/") || r.destination.startsWith("//")) fail(`unsafe/temporary destination: ${tag}`);
  if (r.destination.includes("service-web")) fail(`redirect destination loop: ${tag}`);
}
if (!config.trailingSlash) fail("Canonical trailing-slash policy changed");
if (site.origin !== "https://wasl-tech.com") fail("Canonical origin has changed");
if (redirects.length !== expected.size) fail("Incorrect permanent redirect count");
const filesystemAt = (config.routes ?? []).findIndex((route) => route.handle === "filesystem");
if (filesystemAt < 0 || (config.routes ?? []).slice(0, filesystemAt).some((route) =>
  route.status === 308)) fail("Legacy 308s must use priority redirects, not static-fallback routing");
if (errors.length) {
  console.error("LEGACY REDIRECT ROUTES: FAILED");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}
console.log("LEGACY REDIRECT ROUTES: PASSED");
console.log(`Checked ${redirects.length} canonical old-page/service 308s, two service URI formats and unknown ID 404s.`);
