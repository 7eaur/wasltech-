import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { services } from "../src/data/services.js";
import { site } from "../src/config/site.js";
import { getIndexableEntries } from "../src/seo/indexable-routes.js";
import {
  createLegacyRedirects,
  legacyPageAliases,
  legacyServicePathVariants,
  legacyUnknownServiceRoutes
} from "../src/seo/legacy-redirects.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vercel = JSON.parse(await readFile(path.join(ROOT,"vercel.json"),"utf8"));
const expected = createLegacyRedirects();
const errors = [];
const fail = (x) => errors.push(x);
const keys = new Set();
const canonical = new Set(getIndexableEntries().map(({path}) => path));

const normalized = (value) => Array.isArray(value)
  ? value.map(normalized)
  : value && typeof value === "object"
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, normalized(value[key])]))
    : value;
if (JSON.stringify(normalized(vercel.redirects ?? [])) !== JSON.stringify(normalized(expected))) {
  fail("vercel.json redirects differ from canonical source (run sync-legacy-redirects --write)");
}
if (services.length !== 8) fail("Expected exactly eight independently addressable services");
const expectedCount = legacyPageAliases.length + services.length * 2 * 2 * legacyServicePathVariants.length;
if (expected.length !== expectedCount) fail("Unexpected redirect count");
for (const redirect of expected) {
  const { source, destination, has } = redirect;
  const label = source + (has?.[0]?.key === "id" ? "?id=" + has[0].value : "");
  if (keys.has(label)) fail("Duplicate alias: " + label);
  keys.add(label);
  if (!redirect.permanent) fail("Nonpermanent redirect: " + label);
  if (!canonical.has(destination)) fail("Destination not in current indexable route manifest: " + destination);
  if (destination === source || source === destination.replace(/\/$/,"")) fail("Self redirect: " + label);
  if (source.includes("service-web")) {
    if (has?.length !== 1 || has[0]?.type !== "query" || has[0]?.key !== "id" || !has[0]?.value) fail("Unscoped legacy service redirect: " + label);
    if (!destination.includes("/services/")) fail("Legacy service must resolve to matching service details: " + label);
  } else if (has?.length) fail("Nonservice alias unexpectedly contains query condition: " + label);
}
const routes = vercel.routes ?? [];
const firstFilesystem = routes.findIndex((x) => x.handle === "filesystem");
if (firstFilesystem < 0) fail("No filesystem stage");
const prefix = firstFilesystem < 0 ? [] : routes.slice(0, firstFilesystem);
const fallback = prefix.filter((r) => r.status === 404 && r.src.includes("service-web"));
if (JSON.stringify(fallback) !== JSON.stringify(legacyUnknownServiceRoutes)) {
  fail("Legacy unknown/missing service 404 rules drifted from canonical source");
}
if (prefix.some((r) => r.status === 308)) fail("Redirections must use top-level Vercel redirects before filesystem");
if (!vercel.trailingSlash) fail("Canonical trailing-slash policy was changed");
if (site.origin !== "https://wasl-tech.com") fail("Canonical host changed; verify intended strategy first");
for (const r of routes.slice(firstFilesystem+1)) {
  if (r.status !== 404) fail("Unexpected post-filesystem non-404 rule");
}
if (errors.length) {
  console.error("LEGACY REDIRECT SOURCE AUDIT: FAILED");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}
console.log(`LEGACY REDIRECT SOURCE AUDIT: PASSED (${expected.length} unique redirects, ${fallback.length} localized unknown-ID fallbacks, canonical destinations)`);
