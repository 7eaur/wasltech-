import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { services } from "../src/data/services.js";
import { routes } from "../src/config/routes.js";
import { site } from "../src/config/site.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(await readFile(path.join(ROOT, "vercel.json"), "utf8"));
const errors = [];
const fail = (message) => errors.push(message);
const redirects = config.routes ?? [];
const filesystemAt = redirects.findIndex((entry) => entry.handle === "filesystem");
if (filesystemAt < 0) fail("filesystem fallback missing");
if (!config.trailingSlash) fail("canonical URLs require consistent trailing slashes");

function expectRule(src, dest, id = null) {
  const matched = redirects.filter((rule, index) =>
    index < filesystemAt &&
    rule.src === src &&
    rule.status === 308 &&
    rule.headers?.Location === dest &&
    (!id || (rule.has?.length === 1 &&
      rule.has[0].type === "query" &&
      rule.has[0].key === "id" &&
      new RegExp(`^(?:${rule.has[0].value})$`).test(id)))
  );
  if (matched.length !== 1) fail(`expected one 308 redirect: ${src} + ${id ?? ""} -> ${dest} (found ${matched.length})`);
}
expectRule("/index\\.html", routes.home("ar"));
expectRule("/en/index\\.html", routes.home("en"));
expectRule("/about\\.html", routes.about("ar"));
expectRule("/contact\\.html", routes.contact("ar"));

for (const locale of ["ar", "en"]) {
  const prefix = locale === "ar" ? "" : "/en";
  const src = `${prefix}/service-web/?`;
  for (const service of services) {
    const dest = routes.service(service.slug, locale);
    expectRule(src, dest, service.slug);
    expectRule(src, dest, service.id);
  }
  const fallbacks = redirects.filter((rule, i) =>
    i < filesystemAt &&
    rule.src === src &&
    rule.status === 404 &&
    rule.dest === (locale === "ar" ? "/404.html" : "/en/404.html")
  );
  if (fallbacks.length !== 1) fail(`unexpected unknown-service fallback: ${locale}`);
  const fallbackIdx = redirects.indexOf(fallbacks[0]);
  for (const [i, rule] of redirects.entries()) {
    if (rule.src === src && rule.status === 308 && i >= fallbackIdx) {
      fail(`known service redirect must precede unknown id 404: ${locale}`);
    }
  }
}
if (services.length !== 8) fail(`expected eight service definitions, received ${services.length}`);
if (new Set(services.map(({ slug }) => slug)).size !== services.length) fail("duplicate service slug");
if (site.origin !== "https://wasl-tech.com") fail("unexpected canonical host: review redirects before shipping");
for (const entry of redirects) {
  if (entry.status === 308 && entry.headers?.Location) {
    const dest = entry.headers.Location;
    if (!dest.startsWith("/") || dest.startsWith("//")) fail(`invalid redirect destination: ${dest}`);
    if (dest.includes("service-web")) fail(`redirect loop destination: ${dest}`);
  }
}
if (errors.length) {
  console.error("LEGACY REDIRECT ROUTES: FAILED");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}
console.log("LEGACY REDIRECT ROUTES: PASSED");
console.log("Checked HTML aliases, 8 services × Arabic/English × old slug/ID, unknown-ID fallbacks, order and destinations.");
