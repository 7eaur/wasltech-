import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

const errors = [];

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

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

const requiredPages = [
  "index.html",
  "services/index.html",
  "portfolio/index.html",
  "process/index.html",
  "about/index.html",
  "contact/index.html",
  "404.html"
];

for (const page of requiredPages) {
  const file = path.join(DIST, page);
  try {
    const html = await readFile(file, "utf8");

    if (!html.includes('<html lang="ar" dir="rtl">')) fail(page, "missing Arabic RTL document contract");
    if (count(html, /<h1\b/g) !== 1) fail(page, "expected exactly one h1");
    if (count(html, /<main\b/g) !== 1) fail(page, "expected exactly one main");
    if (!html.includes('name="robots" content="noindex,follow"')) fail(page, "foundation preview must remain noindex");
    if (html.includes('href="#"')) fail(page, 'dead href="#" is forbidden');
    if (html.includes('style="')) fail(page, "inline style attributes are forbidden in VNext generated markup");
  } catch {
    fail(page, "generated page missing");
  }
}

const sourceFiles = [
  ...await walk(path.join(ROOT, "src")),
  path.join(ROOT, "scripts/build.mjs"),
  path.join(ROOT, "scripts/check.mjs")
];

for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const relative = path.relative(ROOT, file);
  const lines = source.split(/\r?\n/).length;

  if (/final[-_ ]?fix|mobile[-_ ]?fix|responsive[-_ ]?fix/i.test(relative)) {
    fail(relative, "patch-style filename is forbidden");
  }

  if (relative.endsWith(".css")) {
    if (/!important/.test(source)) fail(relative, "!important is forbidden in VNext foundation styles");
    if (/linear-gradient|radial-gradient|conic-gradient/.test(source)) fail(relative, "decorative gradients are forbidden by default");
    if (lines > 400) fail(relative, `CSS responsibility file too large (${lines} lines)`);
  }

  if (relative.endsWith(".js") || relative.endsWith(".mjs")) {
    if (lines > 350) fail(relative, `code module too large (${lines} lines)`);
  }
}

const packageJson = JSON.parse(await readFile(path.join(ROOT, "package.json"), "utf8"));
if (packageJson.dependencies && Object.keys(packageJson.dependencies).length) {
  fail("package.json", "Phase 1 must not introduce runtime dependencies");
}

const brandConfig = await readFile(path.join(ROOT, "src/config/brand.js"), "utf8");
for (const contract of [
  'ar: "وصل تك"',
  'en: "Wasl Tech"',
  'ar: "IBM Plex Sans Arabic"',
  'en: "IBM Plex Sans"',
  'logo: "/assets/brand/wasl-tech-horizontal.svg"',
  'logoWhite: "/assets/brand/wasl-tech-horizontal-white.svg"',
  'favicon: "/assets/brand/favicon.svg"'
]) {
  if (!brandConfig.includes(contract)) {
    fail("src/config/brand.js", `missing canonical brand contract: ${contract}`);
  }
}

const tokensSource = await readFile(path.join(ROOT, "src/styles/tokens.css"), "utf8");
for (const contract of [
  "--wt-navy-700:#14305F",
  "--wt-teal-500:#0E8889",
  "--wt-teal-700:#096B70",
  '--font-ar:"IBM Plex Sans Arabic"',
  '--font-en:"IBM Plex Sans"'
]) {
  if (!tokensSource.includes(contract)) {
    fail("src/styles/tokens.css", `missing canonical identity token: ${contract}`);
  }
}

const brandStyles = await readFile(path.join(ROOT, "src/styles/brand.css"), "utf8");
for (const token of [
  "--color-brand-primary:",
  "--color-brand-accent:",
  "--color-bg-canvas:",
  "--color-text-primary:",
  "--color-border-default:"
]) {
  if (!brandStyles.includes(token)) {
    fail("src/styles/brand.css", `missing semantic brand role: ${token}`);
  }
}

const typographyStyles = await readFile(path.join(ROOT, "src/styles/typography.css"), "utf8");
if (!typographyStyles.includes('html[lang="ar"]') || !typographyStyles.includes('html[lang="en"]')) {
  fail("src/styles/typography.css", "bilingual typography selectors are required");
}

const cssOutput = await readFile(path.join(DIST, "assets/css/site.css"), "utf8");
for (const contract of [
  "--wt-navy-700:#14305F",
  "--wt-teal-500:#0E8889",
  "--wt-teal-700:#096B70",
  "IBM Plex Sans Arabic",
  "IBM Plex Sans"
]) {
  if (!cssOutput.includes(contract)) {
    fail("site.css", `generated identity output missing: ${contract}`);
  }
}

const primaryLogo = await readFile(path.join(ROOT, "assets/brand/wasl-tech-horizontal.svg"), "utf8");
if (!primaryLogo.includes('viewBox="0.00 0.00 1130.00 360.00"')) {
  fail("assets/brand/wasl-tech-horizontal.svg", "unexpected primary logo geometry");
}
if (!primaryLogo.includes("#14305F") || !primaryLogo.includes("#0E8889")) {
  fail("assets/brand/wasl-tech-horizontal.svg", "official Navy/Teal logo colors missing");
}

const whiteLogo = await readFile(path.join(ROOT, "assets/brand/wasl-tech-horizontal-white.svg"), "utf8");
if (!whiteLogo.includes("#FFFFFF")) {
  fail("assets/brand/wasl-tech-horizontal-white.svg", "white logo variant is not the approved source");
}

const favicon = await readFile(path.join(ROOT, "assets/brand/favicon.svg"), "utf8");
if (!favicon.includes('viewBox="0.00 0.00 1024.00 1024.00"') || !favicon.includes("#14305F")) {
  fail("assets/brand/favicon.svg", "favicon identity contract changed");
}

for (const asset of [
  "assets/brand/wasl-tech-horizontal.svg",
  "assets/brand/wasl-tech-horizontal-white.svg",
  "assets/brand/favicon.svg",
  "assets/js/navigation.js"
]) {
  try {
    const info = await stat(path.join(DIST, asset));
    if (!info.isFile()) fail(asset, "expected generated file");
  } catch {
    fail(asset, "missing generated asset");
  }
}

if (errors.length) {
  console.error("VNEXT CHECK: FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT CHECK: PASSED");
console.log(`Checked ${requiredPages.length} generated routes and ${sourceFiles.length} source files.`);
console.log("Brand guard: PASSED");
