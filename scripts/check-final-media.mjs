import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const issues = [];
const manifest = JSON.parse(await readFile(new URL("../docs/qa/FINAL_MEDIA_CHECKSUMS.json", import.meta.url), "utf8"));
const base = process.cwd();
const heroMapping = await readFile(path.join(base, "src/config/hero-media.js"), "utf8");
const articles = await readFile(path.join(base, "src/data/articles.js"), "utf8");

if (manifest.length !== 8) issues.push("Expected exactly eight final media asset pairs.");
for (const item of manifest) {
  for (const [name, expectedSize, expectedHash] of [
    [item.source, item.sourceSize, item.sourceSha256],
    [item.runtime, item.webpSize, item.webpSha256]
  ]) {
    try {
      const content = await readFile(path.join(base, name));
      const hash = createHash("sha256").update(content).digest("hex");
      if (content.length !== expectedSize) issues.push(`${name}: size mismatch ${content.length} != ${expectedSize}`);
      if (hash !== expectedHash) issues.push(`${name}: SHA-256 mismatch`);
      if (name.endsWith(".png")) {
        if (content.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") issues.push(`${name}: PNG header mismatch`);
        if (content.readUInt32BE(16) !== item.width || content.readUInt32BE(20) !== item.height) issues.push(`${name}: dimensions mismatch`);
      } else {
        if (content.toString("ascii", 0, 4) !== "RIFF" || content.toString("ascii", 8, 12) !== "WEBP") issues.push(`${name}: WebP signature mismatch`);
        if (content.length > 180 * 1024) issues.push(`${name}: runtime weight exceeds budget`);
      }
    } catch(error) { issues.push(`${name}: cannot read asset (${error.message})`); }
  }
  if (!heroMapping.includes(item.runtime) && !articles.includes(item.runtime)) issues.push(`${item.runtime}: not wired to any active page`);
}
try {
  await stat(path.join(base, ".media-upload"));
  issues.push("Temporary .media-upload staging must never be tracked.");
} catch(error) {
  if (error.code !== "ENOENT") issues.push("Unable to inspect staging: " + error.message);
}
if (issues.length) {
  console.error("FINAL MEDIA INTEGRITY: FAILED");
  for(const item of issues) console.error("- " + item);
  process.exit(1);
}
console.log("FINAL MEDIA INTEGRITY: PASSED (8/8 byte-identical original PNG + 8/8 verified WebP).");
