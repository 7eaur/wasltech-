import { site } from "./site.js";
import { locales } from "./locales.js";

export const SEO_INDEX_STATE = Object.freeze({
  INDEX: "index,follow",
  NOINDEX: "noindex,follow"
});

export function isLocaleIndexable(record, locale) {
  return record?.localeStatus?.[locale] === "ready" && Boolean(record?.content?.[locale]);
}

export function robotsForLocale(record, locale) {
  return isLocaleIndexable(record, locale) ? SEO_INDEX_STATE.INDEX : SEO_INDEX_STATE.NOINDEX;
}

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, `${site.origin}/`).toString();
}

export function buildSeoLinks({ canonicalPath, alternates = {} } = {}) {
  const canonical = canonicalPath ? absoluteUrl(canonicalPath) : null;
  const hreflang = Object.freeze(
    Object.entries(alternates)
      .filter(([locale, path]) => locales[locale] && path)
      .map(([locale, path]) => Object.freeze({
        locale,
        hreflang: locales[locale].lang,
        href: absoluteUrl(path)
      }))
  );

  return Object.freeze({
    canonical,
    hreflang,
    xDefault: alternates.ar ? absoluteUrl(alternates.ar) : canonical
  });
}

export function buildOpenGraph({
  locale = "ar",
  title,
  description,
  canonicalPath,
  image = null,
  type = "website"
}) {
  return Object.freeze({
    type,
    locale: locale === "ar" ? "ar_YE" : "en_US",
    siteName: site.brand.name[locale],
    title,
    description,
    url: canonicalPath ? absoluteUrl(canonicalPath) : null,
    image: image ? absoluteUrl(image) : null
  });
}
