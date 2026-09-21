import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { renderPreviewRobots } from "../src/seo/crawl.js";
import { designSystemShowcase } from "../src/pages/design-system.js";
import { foundationPlaceholder } from "../src/pages/foundation.js";
import { homePage } from "../src/pages/home.js";
import { servicesDirectoryPage } from "../src/pages/services.js";
import { serviceDetailPage } from "../src/pages/service-detail.js";
import { portfolioPage } from "../src/pages/portfolio.js";
import { projectDetailPage } from "../src/pages/project-detail.js";
import { services } from "../src/data/services.js";
import { projects } from "../src/data/projects.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

const cssSources = [
  "src/styles/tokens.css",
  "src/styles/brand.css",
  "src/styles/typography.css",
  "src/styles/base.css",
  "src/styles/layout.css",
  "src/styles/components.css",
  "src/styles/media.css",
  "src/styles/home.css",
  "src/styles/services.css",
  "src/styles/service-detail.css",
  "src/styles/portfolio.css",
  "src/styles/project-detail.css",
  "src/styles/showcase.css"
];

const placeholderRoutes = Object.freeze([
  Object.freeze({ key: "services", title: Object.freeze({ ar: "الخدمات", en: "Services" }) }),
  Object.freeze({ key: "portfolio", title: Object.freeze({ ar: "الأعمال", en: "Work" }) }),
  Object.freeze({ key: "process", title: Object.freeze({ ar: "كيف نعمل", en: "Process" }) }),
  Object.freeze({ key: "about", title: Object.freeze({ ar: "من نحن", en: "About" }) }),
  Object.freeze({ key: "insights", title: Object.freeze({ ar: "المقالات", en: "Insights" }) }),
  Object.freeze({ key: "faq", title: Object.freeze({ ar: "الأسئلة الشائعة", en: "FAQ" }) }),
  Object.freeze({ key: "careers", title: Object.freeze({ ar: "الوظائف", en: "Careers" }) }),
  Object.freeze({ key: "contact", title: Object.freeze({ ar: "تواصل معنا", en: "Contact" }) }),
  Object.freeze({ key: "startProject", title: Object.freeze({ ar: "ابدأ مشروعك", en: "Start a Project" }) })
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
  await cp(path.join(ROOT, "assets/works"), path.join(DIST, "assets/works"), {
    recursive: true
  });

  const navigation = await readFile(path.join(ROOT, "src/client/navigation.js"), "utf8");
  await writeOutput("assets/js/navigation.js", navigation);
  const portfolioFilter = await readFile(path.join(ROOT, "src/client/portfolio-filter.js"), "utf8");
  await writeOutput("assets/js/portfolio-filter.js", portfolioFilter);
}

async function buildPages() {
  for (const locale of ["ar", "en"]) {
    await writeOutput(outputPath(routes.home(locale)), homePage(locale));
    await writeOutput(
      locale === "ar" ? "__showcase/index.html" : "en/__showcase/index.html",
      designSystemShowcase(locale)
    );

    await writeOutput(outputPath(routes.services(locale)), servicesDirectoryPage(locale));

    for (const service of services) {
      await writeOutput(
        outputPath(routes.service(service.slug, locale)),
        serviceDetailPage(service, locale)
      );
    }

    await writeOutput(outputPath(routes.portfolio(locale)), portfolioPage(locale));

    for (const project of projects) {
      await writeOutput(
        outputPath(routes.project(project.slug, locale)),
        projectDetailPage(project, locale)
      );
    }

    for (const record of placeholderRoutes.filter((item) => !["services","portfolio"].includes(item.key))) {
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
    foundationPlaceholder({ title: "الصفحة غير موجودة", routeKey: "home", locale: "ar", seo: false })
  );
  await writeOutput("robots.txt", renderPreviewRobots());
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

await buildStyles();
await buildAssets();
await buildPages();

console.log("VNEXT BUILD: PASSED");
console.log(`Output: ${path.relative(ROOT, DIST)}`);
