import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { foundationHome, foundationPlaceholder } from "../src/pages/foundation.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

const cssSources = [
  "src/styles/tokens.css",
  "src/styles/base.css",
  "src/styles/layout.css",
  "src/styles/components.css",
  "src/styles/media.css"
];

const placeholderRoutes = new Map([
  ["/services/", "الخدمات"],
  ["/portfolio/", "الأعمال"],
  ["/process/", "كيف نعمل"],
  ["/about/", "من نحن"],
  ["/contact/", "ابدأ مشروعك"]
]);

async function ensureDirectory(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function writeOutput(relativePath, content) {
  const destination = path.join(DIST, relativePath);
  await ensureDirectory(destination);
  await writeFile(destination, content, "utf8");
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
  await writeOutput("index.html", foundationHome());

  for (const [route, title] of placeholderRoutes) {
    const relativePath = path.join(route.replace(/^\//, ""), "index.html");
    await writeOutput(relativePath, foundationPlaceholder({ title, path: route }));
  }

  await writeOutput(
    "404.html",
    foundationPlaceholder({ title: "الصفحة غير موجودة", path: "/" })
  );
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

await buildStyles();
await buildAssets();
await buildPages();

console.log("VNEXT BUILD: PASSED");
console.log(`Output: ${path.relative(ROOT, DIST)}`);
