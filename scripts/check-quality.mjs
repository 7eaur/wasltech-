import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

import { projects } from "../src/data/projects.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

const budgets = Object.freeze({
  cssGzip: 16 * 1024,
  jsGzipTotal: 8 * 1024,
  htmlGzipPerPage: 16 * 1024,
  projectImageEach: 150 * 1024,
  projectImagesTotal: 1200 * 1024
});

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function gzipSize(source) {
  return gzipSync(source, { level: 9 }).length;
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return match ? match[1] : null;
}

function relative(file) {
  return path.relative(DIST, file).replaceAll(path.sep, "/");
}

function luminance(hex) {
  const rgb = hex.replace("#", "").match(/.{2}/g).map((value) => parseInt(value, 16) / 255);
  const linear = rgb.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(a, b) {
  const [one, two] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (one + 0.05) / (two + 0.05);
}

function cssVariables(source) {
  return Object.fromEntries(
    [...source.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)]
      .map((match) => [match[1], match[2].trim()])
  );
}

function resolveColor(name, variables, seen = new Set()) {
  if (seen.has(name)) return null;
  seen.add(name);
  const value = variables[name];
  if (!value) return null;
  if (/^#[0-9a-f]{6}$/i.test(value)) return value.toUpperCase();
  const ref = value.match(/^var\((--[a-z0-9-]+)\)$/i)?.[1];
  return ref ? resolveColor(ref, variables, seen) : null;
}

const css = await readFile(path.join(DIST, "assets/css/site.css"));
const cssGzip = gzipSize(css);
if (cssGzip > budgets.cssGzip) {
  fail("site.css", `gzip budget exceeded: ${cssGzip} > ${budgets.cssGzip}`);
}

const jsFiles = [
  "assets/js/navigation.js",
  "assets/js/portfolio-filter.js",
  "assets/js/project-planner.js"
];
let jsGzipTotal = 0;
for (const file of jsFiles) {
  const source = await readFile(path.join(DIST, file));
  jsGzipTotal += gzipSize(source);
}
if (jsGzipTotal > budgets.jsGzipTotal) {
  fail("client-js", `combined gzip budget exceeded: ${jsGzipTotal} > ${budgets.jsGzipTotal}`);
}

const htmlFiles = (await walk(DIST))
  .filter((file) => file.endsWith(".html"))
  .filter((file) => !relative(file).startsWith("__showcase/") && !relative(file).startsWith("en/__showcase/"));

for (const file of htmlFiles) {
  const rel = relative(file);
  const source = await readFile(file, "utf8");
  const pageGzip = gzipSize(Buffer.from(source));
  if (pageGzip > budgets.htmlGzipPerPage) {
    fail(rel, `HTML gzip budget exceeded: ${pageGzip} > ${budgets.htmlGzipPerPage}`);
  }

  const images = source.match(/<img\b[^>]*>/gi) ?? [];
  for (const tag of images) {
    const src = attr(tag, "src") ?? "unknown";
    if (attr(tag, "alt") === null) fail(rel, `image missing alt: ${src}`);
    if (attr(tag, "width") === null || attr(tag, "height") === null) {
      fail(rel, `image missing intrinsic width/height: ${src}`);
    }
  }

  const eagerImages = images.filter((tag) => attr(tag, "loading") === "eager");
  if (eagerImages.length > 1) fail(rel, "more than one eager content image");
  for (const tag of eagerImages) {
    if (attr(tag, "fetchpriority") !== "high") {
      fail(rel, `eager content image missing fetchpriority=high: ${attr(tag, "src")}`);
    }
  }

  for (const tag of source.match(/<button\b[^>]*>/gi) ?? []) {
    if (attr(tag, "type") === null) fail(rel, "button missing explicit type");
  }

  for (const tag of source.match(/<a\b[^>]*target="_blank"[^>]*>/gi) ?? []) {
    const relValue = attr(tag, "rel") ?? "";
    if (!relValue.split(/\s+/).includes("noopener")) {
      fail(rel, "target=_blank link missing rel=noopener");
    }
  }

  if (/tabindex="[1-9][0-9]*"/.test(source)) fail(rel, "positive tabindex is forbidden");

  if (!source.includes("fonts.googleapis.com/css2?") || !source.includes("display=swap")) {
    fail(rel, "font stylesheet must use Google Fonts display=swap");
  }
  if (!source.includes('rel="preconnect" href="https://fonts.gstatic.com" crossorigin')) {
    fail(rel, "font origin preconnect missing");
  }
}

const worksDirectory = path.join(DIST, "assets/works");
const workFiles = (await readdir(worksDirectory)).sort();
const expectedWorkFiles = [...new Set(projects.map((project) => path.basename(project.image)))].sort();

if (JSON.stringify(workFiles) !== JSON.stringify(expectedWorkFiles)) {
  fail("assets/works", `generated work assets do not match referenced projects (expected ${expectedWorkFiles.length}, found ${workFiles.length})`);
}

let projectImageBytes = 0;
for (const file of workFiles) {
  const info = await stat(path.join(worksDirectory, file));
  projectImageBytes += info.size;
  if (info.size > budgets.projectImageEach) {
    fail(`assets/works/${file}`, `project image exceeds ${budgets.projectImageEach} bytes`);
  }
}
if (projectImageBytes > budgets.projectImagesTotal) {
  fail("assets/works", `total project-image budget exceeded: ${projectImageBytes} > ${budgets.projectImagesTotal}`);
}

const baseCss = await readFile(path.join(ROOT, "src/styles/base.css"), "utf8");
if (!baseCss.includes("@media(prefers-reduced-motion:reduce)")) {
  fail("src/styles/base.css", "prefers-reduced-motion baseline missing");
}

const tokens = await readFile(path.join(ROOT, "src/styles/tokens.css"), "utf8");
const brand = await readFile(path.join(ROOT, "src/styles/brand.css"), "utf8");
const variables = { ...cssVariables(tokens), ...cssVariables(brand) };

const contrastChecks = [
  ["--color-text-primary", "--wt-neutral-0", 4.5],
  ["--color-text-secondary", "--wt-neutral-0", 4.5],
  ["--color-text-muted", "--wt-neutral-0", 4.5],
  ["--color-text-accent", "--wt-neutral-0", 4.5],
  ["--color-action-primary", "--wt-neutral-0", 4.5],
  ["--color-focus", "--wt-neutral-0", 3],
  ["--color-text-inverse", "--wt-navy-950", 4.5]
];

for (const [foregroundToken, backgroundToken, minimum] of contrastChecks) {
  const foreground = resolveColor(foregroundToken, variables);
  const background = resolveColor(backgroundToken, variables);
  if (!foreground || !background) {
    fail("contrast", `unable to resolve ${foregroundToken} / ${backgroundToken}`);
    continue;
  }
  const value = contrast(foreground, background);
  if (value < minimum) {
    fail("contrast", `${foregroundToken} on ${backgroundToken} = ${value.toFixed(2)} < ${minimum}`);
  }
}

if (errors.length) {
  console.error("VNEXT QUALITY CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT QUALITY CHECK: PASSED");
console.log(`CSS gzip: ${cssGzip} bytes | JS gzip: ${jsGzipTotal} bytes | project images: ${projectImageBytes} bytes`);
