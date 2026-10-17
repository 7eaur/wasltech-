/**
 * Read-only HTTP acceptance test for the release-candidate Vercel Preview.
 * Intentionally NOT triggered by CI until the user authorizes preview creation.
 * Example (when permission and an exact current-SHA preview exist):
 *   PREVIEW_BASE_URL=https://<preview-host>.vercel.app node scripts/check-legacy-redirects-live.mjs
 *
 * Never use the live site's custom domain: stage changes are not deployed there.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const configPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../vercel.json");
const config = JSON.parse(await readFile(configPath,"utf8"));
const root = process.env.PREVIEW_BASE_URL;
if (!root) {
  console.error("PREVIEW_BASE_URL is required. Run only against an authorized preview matching the PR SHA.");
  process.exit(2);
}
let parsed;
try { parsed = new URL(root); } catch {
  console.error("Invalid PREVIEW_BASE_URL"); process.exit(2);
}
if (parsed.protocol !== "https:" || !parsed.hostname.endsWith(".vercel.app") ||
  parsed.pathname !== "/" || parsed.search || parsed.hash) {
  console.error("Only a clean, HTTPS .vercel.app preview origin is accepted.");
  process.exit(2);
}
const errors = [];
let checks = 0;

async function assertResponse(pathname, expectedStatus, expectedDestination = "") {
  const target = new URL(pathname, parsed.origin);
  for (const method of ["GET","HEAD"]) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(target, { method, redirect:"manual", signal:controller.signal });
      checks++;
      if (response.status !== expectedStatus) {
        errors.push(`${method} ${target.pathname}${target.search} expected ${expectedStatus}, got ${response.status}`);
        continue;
      }
      if (expectedDestination) {
        const location = response.headers.get("location");
        if (!location) {
          errors.push(`${method} ${target.pathname}${target.search}: missing Location`);
          continue;
        }
        const actual = new URL(location, target);
        // Vercel Preview currently emits an absolute apex host in Location;
        // the exact destination pathname and authorized origin still must match.
        if (![parsed.origin, "https://wasl-tech.com"].includes(actual.origin) || actual.pathname !== expectedDestination) {
          errors.push(`${method} ${target.pathname}${target.search}: unsafe/wrong redirect to ${actual.origin}${actual.pathname}`);
        }
      }
    } catch (err) { errors.push(`${method} ${target}: ${err.message}`); }
    finally { clearTimeout(timeout); }
  }
}

// Verify every canonical destination actually responds with the correct
// self-canonical, not just that the first redirect points somewhere plausible.
async function checkDestinations() {
  const destinations = new Set((config.redirects ?? []).map((rule) => rule.destination));
  for (const pathname of destinations) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(new URL(pathname,parsed.origin),{
        method:"GET",redirect:"manual",signal:controller.signal
      });
      checks++;
      if (response.status !== 200) {
        errors.push(`Destination ${pathname}: expected 200, got ${response.status}`);
        continue;
      }
      const html = await response.text();
      const canonical = "https://wasl-tech.com" + pathname;
      if (!html.includes('rel="canonical" href="' + canonical + '"')) {
        errors.push(`Destination ${pathname}: missing expected canonical ${canonical}`);
      }
    } catch (err) { errors.push(`Destination ${pathname}: ${err.message}`); }
    finally { clearTimeout(timeout); }
  }
}

for (const rule of config.redirects ?? []) {
  const id = rule.has?.find((condition) => condition.type === "query" && condition.key === "id")?.value;
  const source = rule.source + (id ? "?id=" + encodeURIComponent(id) : "");
  await assertResponse(source, 308, rule.destination);
}
for (const prefix of ["","/en"]) {
  for (const source of ["/service-web","/service-web/","/service-web.html"]) {
    for (const query of ["","?id=missing-service"]) {
      await assertResponse(prefix + source + query, 404);
    }
  }
}
await checkDestinations();
if (errors.length) {
  console.error("LIVE LEGACY REDIRECT ACCEPTANCE: FAILED");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}
console.log(`LIVE LEGACY REDIRECT ACCEPTANCE: PASSED (${checks} GET/HEAD checks on ${parsed.hostname})`);
