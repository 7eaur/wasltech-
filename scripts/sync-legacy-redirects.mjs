/**
 * Deterministic vercel.json sync: Vercel reads this file before build.
 * --check is read-only and CI safe. --write updates the committed manifest.
 * Other Vercel config, header routes and custom 404s are never touched.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createLegacyRedirects } from "../src/seo/legacy-redirects.js";

const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../vercel.json");
const args = process.argv.slice(2);
if (args.length !== 1 || !["--check","--write"].includes(args[0])) {
  console.error("Usage: node scripts/sync-legacy-redirects.mjs --check|--write");
  process.exit(2);
}
const config = JSON.parse(await readFile(file,"utf8"));
const expected = createLegacyRedirects();
if (args[0] === "--write") {
  config.redirects = expected;
  await writeFile(file, JSON.stringify(config,null,2) + "\n","utf8");
  console.log(`Updated vercel.json with ${expected.length} canonical redirect rules.`);
  process.exit(0);
}
const normalized = (value) => Array.isArray(value)
  ? value.map(normalized)
  : value && typeof value === "object"
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, normalized(value[key])]))
    : value;
if (JSON.stringify(normalized(config.redirects ?? [])) !== JSON.stringify(normalized(expected))) {
  console.error("vercel.json redirect rules have drifted from src/seo/legacy-redirects.js. Run sync --write and commit the file.");
  process.exit(1);
}
console.log(`LEGACY REDIRECT SYNC: PASSED (${expected.length} rules from a single source of truth)`);
