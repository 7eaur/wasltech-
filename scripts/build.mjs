import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { renderPreviewRobots, renderProductionRobots, renderSitemap } from "../src/seo/crawl.js";
import { isProductionBuild, outputDirectoryName } from "../src/config/release.js";
import { indexNow } from "../src/config/indexnow.js";
import { getIndexableEntries } from "../src/seo/indexable-routes.js";
import { designSystemShowcase } from "../src/pages/design-system.js";
import { homePage } from "../src/pages/home.js";
import { servicesDirectoryPage } from "../src/pages/services.js";
import { serviceDetailPage } from "../src/pages/service-detail.js";
import { portfolioPage } from "../src/pages/portfolio.js";
import { projectDetailPage } from "../src/pages/project-detail.js";
import { aboutPage } from "../src/pages/about.js";
import { processPage } from "../src/pages/process.js";
import { contactPage } from "../src/pages/contact.js";
import { projectPlannerPage } from "../src/pages/project-planner.js";
import { faqPage } from "../src/pages/faq.js";
import { insightsPage } from "../src/pages/insights.js";
import { articleDetailPage } from "../src/pages/article-detail.js";
import { careersPage } from "../src/pages/careers.js";
import { jobDetailPage } from "../src/pages/job-detail.js";
import { privacyPage, termsPage } from "../src/pages/legal.js";
import { notFoundPage } from "../src/pages/not-found.js";
import { services } from "../src/data/services.js";
import { projects } from "../src/data/projects.js";
import { articles } from "../src/data/articles.js";
import { jobs } from "../src/data/jobs.js";
import { responsiveImageCandidates } from "../src/lib/responsive-image.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, outputDirectoryName);

const cssSources = [
  "src/styles/fonts.css",
  "src/styles/tokens.css",
  "src/styles/brand.css",
  "src/styles/typography.css",
  "src/styles/base.css",
  "src/styles/layout.css",
  "src/styles/components.css",
  "src/styles/media.css",
  "src/styles/text-flow.css",
  "src/styles/motion.css"
];

const pageCssBundles = Object.freeze({
  home: ["src/styles/home.css", "src/styles/hero-home.css"],
  services: ["src/styles/services.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  "service-detail": ["src/styles/service-detail.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  portfolio: ["src/styles/portfolio.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  "project-detail": ["src/styles/project-detail.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  about: ["src/styles/about-page.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  process: ["src/styles/about-process.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  "contact-planner": ["src/styles/contact-planner.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  secondary: ["src/styles/secondary.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"],
  "insights-careers": ["src/styles/insights-careers.css", "src/styles/hero-pages.css", "src/styles/hero-responsive.css"]
});


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

function minifyCss(blocks) {
  return blocks.join("\n")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .trim();
}

async function buildCssBundle(output, sources) {
  const blocks = [];
  for (const source of sources) {
    const content = await readFile(path.join(ROOT, source), "utf8");
    blocks.push(content.trim());
  }
  await writeOutput(`assets/css/${output}.css`, minifyCss(blocks));
}

async function buildStyles() {
  await buildCssBundle("site", cssSources);
  for (const [name, sources] of Object.entries(pageCssBundles)) {
    await buildCssBundle(name, sources);
  }
  if (!isProductionBuild) await buildCssBundle("showcase", ["src/styles/showcase.css"]);
}

async function buildAssets() {
  await cp(path.join(ROOT, "assets/brand"), path.join(DIST, "assets/brand"), {
    recursive: true
  });
  await cp(path.join(ROOT, "assets/fonts"), path.join(DIST, "assets/fonts"), {
    recursive: true
  });
  const siteMediaImages = [
    { src: "/assets/media/home-hero.webp", width: 1200 },
    { src: "/assets/media/about-us.webp", width: 1280 },
    { src: "/assets/media/services-hero.webp", width: 1536 },
    { src: "/assets/media/portfolio-hero.webp", width: 1536 },
    { src: "/assets/media/process-hero.webp", width: 1536 },
    { src: "/assets/media/contact-project-planner-hero.webp", width: 1536 },
    { src: "/assets/media/faq-insights-hero.webp", width: 1536 },
    { src: "/assets/media/article-website-or-web-system.webp", width: 1536 },
    { src: "/assets/media/article-ecommerce-store-prep.webp", width: 1536 },
    { src: "/assets/media/article-content-before-design.webp", width: 1536 }
  ];
  const responsiveAssets = [
    ...siteMediaImages,
    ...services.map((service) => ({ src: service.image, width: 1280 })),
    ...projects.map((project) => ({ src: project.image, width: project.imageDimensions.width }))
  ];
  const copiedAssets = new Set();
  for (const asset of responsiveAssets) {
    const candidates = [
      ...responsiveImageCandidates(asset.src, asset.width, "webp"),
      ...responsiveImageCandidates(asset.src, asset.width, "avif")
    ];
    for (const candidate of candidates) {
      if (copiedAssets.has(candidate.src)) continue;
      const relative = candidate.src.replace(/^\/+/, "");
      const source = path.join(ROOT, relative);
      const destination = path.join(DIST, relative);
      await ensureDirectory(destination);
      await cp(source, destination);
      copiedAssets.add(candidate.src);
    }
  }

  const navigation = await readFile(path.join(ROOT, "src/client/navigation.js"), "utf8");
  await writeOutput("assets/js/navigation.js", navigation);
  const motion = await readFile(path.join(ROOT, "src/client/motion.js"), "utf8");
  await writeOutput("assets/js/motion.js", motion);
  const analytics = await readFile(path.join(ROOT, "src/client/analytics.js"), "utf8");
  await writeOutput("assets/js/analytics.js", analytics);
  const portfolioFilter = await readFile(path.join(ROOT, "src/client/portfolio-filter.js"), "utf8");
  await writeOutput("assets/js/portfolio-filter.js", portfolioFilter);
  const projectPlanner = await readFile(path.join(ROOT, "src/client/project-planner.js"), "utf8");
  await writeOutput("assets/js/project-planner.js", projectPlanner);
}

async function buildPages() {
  for (const locale of ["ar", "en"]) {
    await writeOutput(outputPath(routes.home(locale)), homePage(locale));
    if (!isProductionBuild) {
      await writeOutput(
        locale === "ar" ? "__showcase/index.html" : "en/__showcase/index.html",
        designSystemShowcase(locale)
      );
    }

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

    await writeOutput(outputPath(routes.about(locale)), aboutPage(locale));
    await writeOutput(outputPath(routes.process(locale)), processPage(locale));
    await writeOutput(outputPath(routes.contact(locale)), contactPage(locale));
    await writeOutput(outputPath(routes.startProject(locale)), projectPlannerPage(locale));
    await writeOutput(outputPath(routes.faq(locale)), faqPage(locale));
    await writeOutput(outputPath(routes.insights(locale)), insightsPage(locale));
    for (const article of articles.filter((item) => item.publishedAt && item.localeStatus?.[locale] === "ready")) {
      await writeOutput(
        outputPath(routes.article(article.slug, locale)),
        articleDetailPage(article, locale)
      );
    }

    await writeOutput(outputPath(routes.careers(locale)), careersPage(locale));
    for (const job of jobs.filter((item) => item.status === "open" && item.localeStatus?.[locale] === "ready")) {
      await writeOutput(
        outputPath(routes.job(job.slug, locale)),
        jobDetailPage(job, locale)
      );
    }
    await writeOutput(outputPath(routes.privacy(locale)), privacyPage(locale));
    await writeOutput(outputPath(routes.terms(locale)), termsPage(locale));


  }

  await writeOutput("404.html", notFoundPage("ar"));
  await writeOutput("en/404.html", notFoundPage("en"));
  await writeOutput("robots.txt", isProductionBuild ? renderProductionRobots() : renderPreviewRobots());
  if (isProductionBuild) {
    await writeOutput("sitemap.xml", renderSitemap(getIndexableEntries()));
    await writeOutput(indexNow.fileName, indexNow.key);
  }
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

await buildStyles();
await buildAssets();
await buildPages();

console.log(`VNEXT BUILD: PASSED [${isProductionBuild ? "production" : "preview"}]`);
console.log(`Output: ${path.relative(ROOT, DIST)}`);
