import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { services } from "../data/services.js";
import { projects } from "../data/projects.js";
import { articles } from "../data/articles.js";
import { jobs } from "../data/jobs.js";

const locales = Object.freeze(["ar", "en"]);

function readyLocales(record) {
  return locales.filter((locale) => record.localeStatus?.[locale] === "ready" && record.content?.[locale]);
}

function localizedAlternates(record, routeFactory) {
  return Object.freeze(Object.fromEntries(
    readyLocales(record).map((locale) => [locale, routeFactory(locale)])
  ));
}

function pageEntries() {
  return pages
    .filter((page) => page.routeKey && page.contentState === "READY")
    .flatMap((page) => {
      const alternates = localizedAlternates(page, (locale) => routes[page.routeKey](locale));
      return readyLocales(page)
        .map((locale) => Object.freeze({ path: alternates[locale], alternates }));
    });
}

function entityEntries(records, routeFactory) {
  return records.flatMap((record) => {
    const alternates = localizedAlternates(record, (locale) => routeFactory(record.slug, locale));
    return readyLocales(record)
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
