import { site } from "../config/site.js";
import { locales } from "../config/locales.js";
import { buildOpenGraph, buildSeoLinks } from "../config/seo.js";
import { serializeStructuredData } from "../seo/structured-data.js";
import { Header } from "../components/Header.js";
import { publicRobots } from "../config/release.js";
import { Footer } from "../components/Footer.js";
import { escapeHtml } from "../lib/html.js";

const copy = Object.freeze({
  ar: Object.freeze({ skip: "تجاوز إلى المحتوى الرئيسي" }),
  en: Object.freeze({ skip: "Skip to main content" })
});

function metaTag(property, content) {
  return content ? `  <meta property="${property}" content="${escapeHtml(content)}">` : "";
}

function nameMetaTag(name, content) {
  return content ? `  <meta name="${name}" content="${escapeHtml(content)}">` : "";
}

export function documentTemplate({
  title,
  description,
  body,
  locale = "ar",
  activePath = "/",
  alternatePath = null,
  canonicalPath = null,
  alternatePaths = {},
  robots = publicRobots,
  ogTitle = title,
  ogDescription = description,
  ogImage = null,
  ogType = "website",
  structuredData = [],
  styleBundles = [],
  minimalShell = false
}) {
  if (!title || !description || !body) {
    throw new Error("documentTemplate requires title, description and body.");
  }

  const localeConfig = locales[locale];
  if (!localeConfig) throw new Error(`Unsupported document locale: ${locale}`);
  const preloadedFont = locale === "ar"
    ? "/assets/fonts/ibm-plex-sans-arabic-400.woff2"
    : "/assets/fonts/ibm-plex-sans-latin-400-700.woff2";

  const seoLinks = buildSeoLinks({ canonicalPath, alternates: alternatePaths });
  const openGraph = buildOpenGraph({
    locale,
    title: ogTitle,
    description: ogDescription,
    canonicalPath,
    image: ogImage,
    type: ogType
  });

  const hreflangTags = seoLinks.hreflang
    .map((item) => `  <link rel="alternate" hreflang="${item.hreflang}" href="${item.href}">`)
    .join("\n");

  const structuredDataTags = structuredData
    .filter(Boolean)
    .map((item) => `  <script type="application/ld+json">${serializeStructuredData(item)}</script>`)
    .join("\n");
  const pageStyleTags = styleBundles
    .map((bundle) => {
      if (!/^[a-z0-9-]+$/.test(bundle)) throw new Error(`Invalid style bundle: ${bundle}`);
      return `  <link rel="stylesheet" href="/assets/css/${bundle}.css">`;
    })
    .join("\n");

  return `<!doctype html>
<html lang="${localeConfig.lang}" dir="${localeConfig.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#FFFFFF">
  <meta name="robots" content="${robots}">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
${seoLinks.canonical ? `  <link rel="canonical" href="${seoLinks.canonical}">` : ""}
${hreflangTags}
${seoLinks.xDefault ? `  <link rel="alternate" hreflang="x-default" href="${seoLinks.xDefault}">` : ""}
${metaTag("og:type", openGraph.type)}
${metaTag("og:locale", openGraph.locale)}
${metaTag("og:site_name", openGraph.siteName)}
${metaTag("og:title", openGraph.title)}
${metaTag("og:description", openGraph.description)}
${metaTag("og:url", openGraph.url)}
${metaTag("og:image", openGraph.image)}
${nameMetaTag("twitter:card", openGraph.image ? "summary_large_image" : "summary")}
${nameMetaTag("twitter:title", openGraph.title)}
${nameMetaTag("twitter:description", openGraph.description)}
${nameMetaTag("twitter:image", openGraph.image)}
${structuredDataTags}
  <link rel="preload" href="${preloadedFont}" as="font" type="font/woff2" crossorigin>
  <link rel="icon" href="${site.brand.assets.favicon}">
  <link rel="stylesheet" href="/assets/css/site.css">
${pageStyleTags}
${minimalShell ? "" : `  <script src="/assets/js/navigation.js" defer></script>\n  <script src="/assets/js/motion.js" defer></script>`}
${minimalShell ? "" : `  <script src="/assets/js/analytics.js" data-analytics-host="${escapeHtml(site.analytics.host)}" data-measurement-id="${escapeHtml(site.analytics.measurementId)}" defer></script>`}
</head>
<body>
  <a class="skip-link" href="#main-content">${copy[locale].skip}</a>
  ${minimalShell ? "" : Header({ activePath, locale, alternatePath })}
  <main id="main-content" tabindex="-1">${body}</main>
  ${minimalShell ? "" : Footer({ locale })}
</body>
</html>`;
}
