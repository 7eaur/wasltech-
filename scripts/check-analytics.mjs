import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "../src/config/site.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RELEASE = path.join(ROOT, "dist-release");
const errors = [];

function fail(message) {
  errors.push(message);
}

const measurementId = site.analytics?.measurementId;
if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) fail("GA4 measurement ID is missing or invalid");

const home = await readFile(path.join(RELEASE, "index.html"), "utf8");
const privacy = await readFile(path.join(RELEASE, "privacy", "index.html"), "utf8");
const analytics = await readFile(path.join(RELEASE, "assets/js/analytics.js"), "utf8");
const planner = await readFile(path.join(ROOT, "src/client/project-planner.js"), "utf8");

for (const required of [
  `data-analytics-measurement-id="${measurementId}"`,
  "data-analytics-consent",
  "/assets/js/analytics.js"
]) {
  if (!home.includes(required)) fail(`production home missing analytics contract: ${required}`);
}

for (const required of [
  "analytics_storage",
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "data-analytics-accept",
  "data-analytics-reject",
  "localStorage",
  "googletagmanager.com/gtag/js"
]) {
  if (!analytics.includes(required)) fail(`analytics runtime missing: ${required}`);
}

for (const required of [
  "Google Analytics 4",
  "موافقتك",
  "your consent"
]) {
  if (!privacy.includes(required)) fail(`privacy disclosure missing: ${required}`);
}

for (const forbidden of [
  "data.name",
  "data.phone",
  "data.company",
  "data.details"
]) {
  if (planner.includes(`waslTrack?.(`) && planner.includes(forbidden)) {
    fail(`planner analytics must not send personal/project free-text data: ${forbidden}`);
  }
}

if (errors.length) {
  console.error("VNEXT ANALYTICS CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT ANALYTICS CHECK: PASSED");
console.log(`GA4 ${measurementId} is production-only, consent-gated and excludes planner PII/free text.`);
