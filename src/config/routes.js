import { locales } from "./locales.js";

const cleanSlug = (slug) => String(slug ?? "").trim().replace(/^\/+|\/+$/g, "");

function withLocale(locale, path = "/") {
  const config = locales[locale];
  if (!config) throw new Error(`Unsupported locale: ${locale}`);

  const normalized = path === "/" ? "/" : `/${cleanSlug(path)}/`;
  if (!config.prefix) return normalized;
  return normalized === "/" ? `${config.prefix}/` : `${config.prefix}${normalized}`;
}

export const routes = Object.freeze({
  home: (locale = "ar") => withLocale(locale, "/"),
  about: (locale = "ar") => withLocale(locale, "about"),
  services: (locale = "ar") => withLocale(locale, "services"),
  service: (slug, locale = "ar") => withLocale(locale, `services/${cleanSlug(slug)}`),
  portfolio: (locale = "ar") => withLocale(locale, "portfolio"),
  project: (slug, locale = "ar") => withLocale(locale, `portfolio/${cleanSlug(slug)}`),
  process: (locale = "ar") => withLocale(locale, "process"),
  contact: (locale = "ar") => withLocale(locale, "contact"),
  startProject: (locale = "ar") => withLocale(locale, "start-project"),
  faq: (locale = "ar") => withLocale(locale, "faq"),
  insights: (locale = "ar") => withLocale(locale, "insights"),
  article: (slug, locale = "ar") => withLocale(locale, `insights/${cleanSlug(slug)}`),
  careers: (locale = "ar") => withLocale(locale, "careers"),
  job: (slug, locale = "ar") => withLocale(locale, `careers/${cleanSlug(slug)}`),
  privacy: (locale = "ar") => withLocale(locale, "privacy"),
  terms: (locale = "ar") => withLocale(locale, "terms")
});
