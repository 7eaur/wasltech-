import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { routes } from "../src/config/routes.js";
import { renderPreviewRobots, renderProductionRobots, renderSitemap } from "../src/seo/crawl.js";
import { isProductionBuild, outputDirectoryName } from "../src/config/release.js";
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

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, outputDirectoryName);

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
  "src/styles/about-process.css",
  "src/styles/contact-planner.css",
  "src/styles/secondary.css",
  "src/styles/insights-careers.css",
  "src/styles/hero-home.css",
  "src/styles/hero-pages.css",
  "src/styles/hero-responsive.css",
  "src/styles/text-flow.css"
];



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
  const sources = isProductionBuild ? cssSources : [...cssSources, "src/styles/showcase.css"];
  for (const source of sources) {
    const content = await readFile(path.join(ROOT, source), "utf8");
    blocks.push(`/* ${source} */\n${content.trim()}\n`);
  }
  await writeOutput("assets/css/site.css", blocks.join("\n"));
}

async function buildAssets() {
  await cp(path.join(ROOT, "assets/brand"), path.join(DIST, "assets/brand"), {
    recursive: true
  });
  for (const image of ["about_1.png", "about_2.png"]) {
    await cp(path.join(ROOT, "assets", image), path.join(DIST, "assets", image));
  }
  const editorialImages = [
    "hero_blog.png",
    "hero_contact.png",
    "hero_portfolio.png",
    "hero_process.png",
    "blog_brand.png",
    "blog_ecommerce.png",
    "blog_web.png"
  ];
  await mkdir(path.join(DIST, "assets/gen"), { recursive: true });
  for (const image of editorialImages) {
    await cp(path.join(ROOT, "assets/gen", image), path.join(DIST, "assets/gen", image));
  }
  const siteMediaImages = ["home-hero.webp", "about-us.webp"];
  await mkdir(path.join(DIST, "assets/media"), { recursive: true });
  for (const image of siteMediaImages) {
    await cp(path.join(ROOT, "assets/media", image), path.join(DIST, "assets/media", image));
  }

  const serviceImages = [...new Set(services.map((service) => service.image))];
  for (const image of serviceImages) {
    const relative = image.replace(/^\/+/, "");
    const source = path.join(ROOT, relative);
    const destination = path.join(DIST, relative);
    await ensureDirectory(destination);
    await cp(source, destination);
  }

  const projectImages = [...new Set(projects.map((project) => project.image))];
  for (const image of projectImages) {
    const relative = image.replace(/^\/+/, "");
    const source = path.join(ROOT, relative);
    const destination = path.join(DIST, relative);
    await ensureDirectory(destination);
    await cp(source, destination);
  }

  const navigation = await readFile(path.join(ROOT, "src/client/navigation.js"), "utf8");
  await writeOutput("assets/js/navigation.js", navigation);
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
  }
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

await buildStyles();
await buildAssets();
await buildPages();

console.log(`VNEXT BUILD: PASSED [${isProductionBuild ? "production" : "preview"}]`);
console.log(`Output: ${path.relative(ROOT, DIST)}`);
