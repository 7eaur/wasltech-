import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { services } from "../data/services.js";
import { projects } from "../data/projects.js";
import { articles } from "../data/articles.js";
import { jobs } from "../data/jobs.js";

const locales = Object.freeze(["ar", "en"]);

function localizedPair(routeFactory) {
  return Object.freeze({
    ar: routeFactory("ar"),
    en: routeFactory("en")
  });
}

function pageEntries() {
  return pages
    .filter((page) => page.routeKey && page.contentState === "READY")
    .flatMap((page) => {
      const alternates = localizedPair((locale) => routes[page.routeKey](locale));
      return locales
        .filter((locale) => page.localeStatus?.[locale] === "ready" && page.content?.[locale])
        .map((locale) => Object.freeze({ path: alternates[locale], alternates }));
    });
}

function entityEntries(records, routeFactory) {
  return records.flatMap((record) => {
    const alternates = localizedPair((locale) => routeFactory(record.slug, locale));
    return locales
      .filter((locale) => record.localeStatus?.[locale] === "ready" && record.content?.[locale])
      .map((locale) => Object.freeze({ path: alternates[locale], alternates }));
  });
}

export function getIndexableEntries() {
  return Object.freeze([
    ...pageEntries(),
    ...entityEntries(services, routes.service),
    ...entityEntries(projects, routes.project),
    ...entityEntries(articles.filter((item) => item.publishedAt), routes.article),
    ...entityEntries(jobs.filter((item) => item.status === "open"), routes.job)
  ]);
}
