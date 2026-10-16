import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

import { projects } from "../src/data/projects.js";
import { responsiveImageCandidates } from "../src/lib/responsive-image.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const errors = [];

const budgets = Object.freeze({
  cssGzip: 20 * 1024, // sitewide design ceiling; retain a 16 KiB optimization target
  cssGzipTarget: 16 * 1024,
  jsGzipTotal: 8 * 1024,
  htmlGzipPerPage: 16 * 1024,
  runtimeRasterEach: 120 * 1024,
  avifRasterEach: 80 * 1024,
  fontEach: 50 * 1024,
  projectImageEach: 60 * 1024,
  projectImagesTotal: 700 * 1024
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

const cssDirectory = path.join(DIST, "assets/css");
const cssFiles = (await readdir(cssDirectory)).filter((file) => file.endsWith(".css")).sort();
const cssGzipByHref = new Map();
let maxPageCssGzip = 0;
const cssOverTarget = [];
for (const file of cssFiles) {
  const bytes = gzipSize(await readFile(path.join(cssDirectory, file)));
  cssGzipByHref.set(`/assets/css/${file}`, bytes);
  if (bytes > budgets.cssGzip) fail(file, `single CSS bundle gzip budget exceeded: ${bytes} > ${budgets.cssGzip}`);
}

const jsFiles = ["assets/js/navigation.js", "assets/js/motion.js", "assets/js/analytics.js", "assets/js/portfolio-filter.js", "assets/js/project-planner.js"];
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
  const stylesheetHrefs = [...source.matchAll(/<link rel="stylesheet" href="([^"]+\.css)">/g)].map((match) => match[1]);
  if (stylesheetHrefs[0] !== "/assets/css/site.css" || stylesheetHrefs.length !== 2) {
    fail(rel, `expected shared CSS plus exactly one route bundle; found ${stylesheetHrefs.join(", ") || "none"}`);
  }
  const cssGzip = stylesheetHrefs.reduce((total, href) => total + (cssGzipByHref.get(href) ?? 0), 0);
  maxPageCssGzip = Math.max(maxPageCssGzip, cssGzip);
  if (cssGzip > budgets.cssGzip) fail(rel, `combined CSS gzip budget exceeded: ${cssGzip} > ${budgets.cssGzip}`);
  else if (cssGzip > budgets.cssGzipTarget) cssOverTarget.push(`${rel}: ${cssGzip} bytes`);

  const isStandalone404 = rel === "404.html" || rel === "en/404.html";
  if (!isStandalone404 && !source.includes('src="/assets/js/motion.js" defer')) {
    fail(rel, "progressive motion client missing");
  }
  if (!isStandalone404 && !source.includes('src="/assets/js/analytics.js" data-analytics-host="wasl-tech.com" data-measurement-id="G-WVH08BTS6C" defer')) fail(rel, "owned deferred analytics client missing");
  if ([...source.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>/gi)].length) fail(rel, "executable inline script is forbidden; use an owned deferred client");

  const images = source.match(/<img\b[^>]*>/gi) ?? [];
  const avifSources = source.match(/<source\b[^>]*type="image\/avif"[^>]*>/gi) ?? [];
  for (const tag of images) {
    const src = attr(tag, "src") ?? "unknown";
    if (attr(tag, "alt") === null) fail(rel, `image missing alt: ${src}`);
    if (attr(tag, "width") === null || attr(tag, "height") === null) {
      fail(rel, `image missing intrinsic width/height: ${src}`);
    }

    if (/^\/assets\/.*\.(?:png|jpe?g|webp|avif)$/i.test(src)) {
      const imagePath = path.join(DIST, src.replace(/^\//, ""));
      const info = await stat(imagePath);
      if (info.size > budgets.runtimeRasterEach) {
        fail(src, `referenced runtime raster exceeds ${budgets.runtimeRasterEach} bytes: ${info.size}`);
      }

      const srcset = attr(tag, "srcset");
      const sizes = attr(tag, "sizes");
      if (!srcset || !sizes) {
        fail(rel, `content image missing responsive srcset/sizes: ${src}`);
      } else {
        const candidateSources = srcset.split(",").map((candidate) => candidate.trim().split(/\s+/)[0]);
        if (!candidateSources.includes(src)) {
          fail(rel, `responsive srcset is missing its canonical source: ${src}`);
        }
        for (const candidateSrc of candidateSources) {
          if (!/^\/assets\/.*\.(?:png|jpe?g|webp|avif)$/i.test(candidateSrc)) {
            fail(rel, `invalid local responsive candidate: ${candidateSrc}`);
            continue;
          }
          const candidatePath = path.join(DIST, candidateSrc.replace(/^\//, ""));
          const candidateInfo = await stat(candidatePath);
          if (candidateInfo.size > budgets.runtimeRasterEach) {
            fail(candidateSrc, `responsive raster exceeds ${budgets.runtimeRasterEach} bytes: ${candidateInfo.size}`);
          }
        }
      }

      if (src.endsWith(".webp")) {
        const intrinsicWidth = Number(attr(tag, "width"));
        const expectedAvif = responsiveImageCandidates(src, intrinsicWidth, "avif");
        const avifSource = avifSources.find((candidate) => {
          const candidateSrcset = attr(candidate, "srcset") ?? "";
          return expectedAvif.every((image) => candidateSrcset.includes(`${image.src} ${image.width}w`));
        });
        if (!avifSource || attr(avifSource, "sizes") !== sizes) {
          fail(rel, `content image missing matching AVIF picture source: ${src}`);
        }
        for (const candidate of expectedAvif) {
          const candidatePath = path.join(DIST, candidate.src.replace(/^\//, ""));
          const candidateInfo = await stat(candidatePath);
          if (candidateInfo.size > budgets.avifRasterEach) {
            fail(candidate.src, `AVIF raster exceeds ${budgets.avifRasterEach} bytes: ${candidateInfo.size}`);
          }
          const signature = (await readFile(candidatePath)).subarray(4, 12).toString("ascii");
          if (signature !== "ftypavif") fail(candidate.src, "invalid AVIF file signature");
        }
      }
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

  if (source.includes("fonts.googleapis.com") || source.includes("fonts.gstatic.com")) {
    fail(rel, "external font request is forbidden");
  }
  const expectedFont = source.includes('<html lang="ar"')
    ? "/assets/fonts/ibm-plex-sans-arabic-400.woff2"
    : "/assets/fonts/ibm-plex-sans-latin-400-700.woff2";
  if (!source.includes(`<link rel="preload" href="${expectedFont}" as="font" type="font/woff2" crossorigin>`)) {
    fail(rel, `localized font preload missing: ${expectedFont}`);
  }
}

const fontFiles = [
  "ibm-plex-sans-arabic-400.woff2",
  "ibm-plex-sans-arabic-500.woff2",
  "ibm-plex-sans-arabic-600.woff2",
  "ibm-plex-sans-arabic-700.woff2",
  "ibm-plex-sans-latin-400-700.woff2"
];
for (const file of fontFiles) {
  const fontPath = path.join(DIST, "assets/fonts", file);
  const info = await stat(fontPath);
  if (info.size > budgets.fontEach) fail(`assets/fonts/${file}`, `font exceeds ${budgets.fontEach} bytes`);
  const signature = (await readFile(fontPath)).subarray(0, 4).toString("ascii");
  if (signature !== "wOF2") fail(`assets/fonts/${file}`, "invalid WOFF2 file signature");
}

const worksDirectory = path.join(DIST, "assets/works");
const workFiles = (await readdir(worksDirectory)).sort();
const expectedWorkFiles = [...new Set(projects.flatMap((project) =>
  ["webp", "avif"].flatMap((format) => responsiveImageCandidates(project.image, project.imageDimensions.width, format))
    .map((candidate) => path.basename(candidate.src))
))].sort();

if (JSON.stringify(workFiles) !== JSON.stringify(expectedWorkFiles)) {
  fail("assets/works", `generated work assets do not match referenced projects (expected ${expectedWorkFiles.length}, found ${workFiles.length})`);
}

const projectImageBytes = { webp: 0, avif: 0 };
for (const file of workFiles) {
  const info = await stat(path.join(worksDirectory, file));
  const format = path.extname(file).slice(1);
  projectImageBytes[format] += info.size;
  if (info.size > budgets.projectImageEach) {
    fail(`assets/works/${file}`, `project image exceeds ${budgets.projectImageEach} bytes`);
  }
}
for (const [format, bytes] of Object.entries(projectImageBytes)) {
  if (bytes > budgets.projectImagesTotal) {
    fail("assets/works", `total ${format} project-image budget exceeded: ${bytes} > ${budgets.projectImagesTotal}`);
  }
}

const portfolioCss = await readFile(path.join(ROOT, "src/styles/portfolio.css"), "utf8");
const portfolioFilterRules = [...portfolioCss.matchAll(/\.portfolio-filters button\{([^}]*)\}/g)].map((match) => match[1]);
if (!portfolioFilterRules.length) {
  fail("src/styles/portfolio.css", "portfolio filter button rules missing");
}
for (const rule of portfolioFilterRules) {
  const minHeight = rule.match(/min-height:([^;]+)/)?.[1]?.trim();
  if (minHeight && minHeight !== "var(--control-height)") {
    fail("src/styles/portfolio.css", `portfolio filter touch target override is too small or non-canonical: ${minHeight}`);
  }
}
if (!portfolioFilterRules.some((rule) => rule.includes("min-height:var(--control-height)"))) {
  fail("src/styles/portfolio.css", "portfolio filter buttons must use the shared control-height touch target");
}

const baseCss = await readFile(path.join(ROOT, "src/styles/base.css"), "utf8");
if (!baseCss.includes("@media(prefers-reduced-motion:reduce)")) {
  fail("src/styles/base.css", "prefers-reduced-motion baseline missing");
}

const motionSource = await readFile(path.join(ROOT, "src/client/motion.js"), "utf8");
for (const contract of ["IntersectionObserver", "prefers-reduced-motion", "saveData"]) {
  if (!motionSource.includes(contract)) fail("src/client/motion.js", `missing motion performance contract: ${contract}`);
}
if (/addEventListener\(\s*["']scroll["']/.test(motionSource)) {
  fail("src/client/motion.js", "continuous scroll listeners are forbidden for presentation motion");
}

const tokens = await readFile(path.join(ROOT, "src/styles/tokens.css"), "utf8");
const brand = await readFile(path.join(ROOT, "src/styles/brand.css"), "utf8");
const tokenVariables = cssVariables(tokens);
const lightBrandBlock = brand.match(/:root\s*\{([\s\S]*?)\}/)?.[1] ?? "";
const darkBrandBlock = brand.match(/html\[data-theme="dark"\]\s*\{([\s\S]*?)\}/)?.[1] ?? "";
const lightVariables = { ...tokenVariables, ...cssVariables(lightBrandBlock) };
const darkVariables = { ...lightVariables, ...cssVariables(darkBrandBlock) };

function checkContrastSet(label, variables, checks) {
  for (const [foregroundToken, backgroundToken, minimum] of checks) {
    const foreground = resolveColor(foregroundToken, variables);
    const background = resolveColor(backgroundToken, variables);
    if (!foreground || !background) {
      fail(`contrast:${label}`, `unable to resolve ${foregroundToken} / ${backgroundToken}`);
      continue;
    }
    const value = contrast(foreground, background);
    if (value < minimum) {
      fail(`contrast:${label}`, `${foregroundToken} on ${backgroundToken} = ${value.toFixed(2)} < ${minimum}`);
    }
  }
}

checkContrastSet("light", lightVariables, [
  ["--color-text-primary", "--color-bg-canvas", 4.5],
  ["--color-text-secondary", "--color-bg-canvas", 4.5],
  ["--color-text-muted", "--color-bg-canvas", 4.5],
  ["--color-text-accent", "--color-bg-canvas", 4.5],
  ["--color-action-primary", "--wt-neutral-0", 4.5],
  ["--color-focus", "--color-bg-canvas", 3],
  ["--color-text-inverse", "--color-bg-emphasis", 4.5]
]);

// Approved supporting apricot uses a contrasting warm text role rather than small apricot text on white.
checkContrastSet("warm-accent", lightVariables, [
  ["--color-text-warm", "--color-surface-warm", 4.5],
  ["--color-text-primary", "--color-surface-warm", 4.5],
  ["--color-text-primary", "--color-accent-warm", 4.5]
]);

checkContrastSet("dark", darkVariables, [
  ["--color-text-primary", "--color-bg-canvas", 4.5],
  ["--color-text-secondary", "--color-bg-canvas", 4.5],
  ["--color-text-muted", "--color-bg-canvas", 4.5],
  ["--color-text-accent", "--color-bg-canvas", 4.5],
  ["--color-focus", "--color-bg-canvas", 3],
  ["--color-text-inverse", "--color-bg-emphasis", 4.5]
]);

if (errors.length) {
  console.error("VNEXT QUALITY CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

if (cssOverTarget.length) {
  console.warn(`CSS optimization target ${budgets.cssGzipTarget} bytes exceeded on ${cssOverTarget.length} pages (hard ceiling ${budgets.cssGzip} bytes).`);
  for (const item of cssOverTarget.slice(0, 15)) console.warn(`- ${item}`);
}
console.log("VNEXT QUALITY CHECK: PASSED");
console.log(`Max page CSS gzip: ${maxPageCssGzip} bytes | JS gzip: ${jsGzipTotal} bytes | project WebP: ${projectImageBytes.webp} bytes | project AVIF: ${projectImageBytes.avif} bytes`);
