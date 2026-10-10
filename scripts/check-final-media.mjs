import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const issues = [];
const manifest = JSON.parse(await readFile(new URL("../docs/qa/FINAL_MEDIA_CHECKSUMS.json", import.meta.url), "utf8"));
const base = process.cwd();
const heroMapping = await readFile(path.join(base, "src/config/hero-media.js"), "utf8");
const articles = await readFile(path.join(base, "src/data/articles.js"), "utf8");

function jpegDimensions(content) {
  if (content[0] !== 0xff || content[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < content.length) {
    if (content[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = content[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) {
      offset += 2;
      continue;
    }
    const length = content.readUInt16BE(offset + 2);
    if (length < 2 || offset + 2 + length > content.length) return null;
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return { height: content.readUInt16BE(offset + 5), width: content.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }
  return null;
}

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
      if (name.endsWith(".jpeg")) {
        const dimensions = jpegDimensions(content);
        if (!dimensions) issues.push(`${name}: JPEG signature or dimensions are invalid`);
        else if (dimensions.width !== item.width || dimensions.height !== item.height) issues.push(`${name}: dimensions mismatch`);
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
console.log("FINAL MEDIA INTEGRITY: PASSED (8/8 byte-identical source JPEG + 8/8 verified WebP).");
