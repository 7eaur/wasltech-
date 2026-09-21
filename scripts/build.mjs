import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { foundationHome, foundationPlaceholder } from "../src/pages/foundation.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

const cssSources = [
  "src/styles/tokens.css",
  "src/styles/brand.css",
  "src/styles/typography.css",
  "src/styles/base.css",
  "src/styles/layout.css",
  "src/styles/components.css",
  "src/styles/media.css"
];

const placeholderRoutes = Object.freeze([
  Object.freeze({ key: "services", title: Object.freeze({ ar: "الخدمات", en: "Services" }) }),
  Object.freeze({ key: "portfolio", title: Object.freeze({ ar: "الأعمال", en: "Work" }) }),
  Object.freeze({ key: "process", title: Object.freeze({ ar: "كيف نعمل", en: "Process" }) }),
  Object.freeze({ key: "about", title: Object.freeze({ ar: "من نحن", en: "About" }) }),
  Object.freeze({ key: "contact", title: Object.freeze({ ar: "تواصل معنا", en: "Contact" }) })
]);

async function ensureDirectory(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function writeOutput(relativePath, content) {
  const destination = path.join(DIST, relativePath);
  await ensureDirectory(destination);
  await writeFile(destination, content, "utf8");
}

function outputPath(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

async function buildStyles() {
  const blocks = [];
  for (const source of cssSources) {
    const content = await readFile(path.join(ROOT, source), "utf8");
    blocks.push(`/* ${source} */\n${content.trim()}\n`);
  }
  await writeOutput("assets/css/site.css", blocks.join("\n"));
}

async function buildAssets() {
  await cp(path.join(ROOT, "assets/brand"), path.join(DIST, "assets/brand"), {
    recursive: true
  });

  const navigation = await readFile(path.join(ROOT, "src/client/navigation.js"), "utf8");
  await writeOutput("assets/js/navigation.js", navigation);
}

async function buildPages() {
  for (const locale of ["ar", "en"]) {
    await writeOutput(outputPath(routes.home(locale)), foundationHome(locale));

    for (const record of placeholderRoutes) {
      await writeOutput(
        outputPath(routes[record.key](locale)),
        foundationPlaceholder({
          title: record.title[locale],
          routeKey: record.key,
          locale
        })
      );
    }
  }

  await writeOutput(
    "404.html",
    foundationPlaceholder({ title: "الصفحة غير موجودة", routeKey: "home", locale: "ar" })
  );
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

await buildStyles();
await buildAssets();
await buildPages();

console.log("VNEXT BUILD: PASSED");
console.log(`Output: ${path.relative(ROOT, DIST)}`);
