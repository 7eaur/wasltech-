import { site } from "../config/site.js";
import { locales } from "../config/locales.js";
import { buildOpenGraph, buildSeoLinks } from "../config/seo.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { escapeHtml } from "../lib/html.js";

const copy = Object.freeze({
  ar: Object.freeze({ skip: "تجاوز إلى المحتوى الرئيسي" }),
  en: Object.freeze({ skip: "Skip to main content" })
});

function metaTag(property, content) {
  return content ? `  <meta property="${property}" content="${escapeHtml(content)}">` : "";
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
  robots = "noindex,follow",
  ogTitle = title,
  ogDescription = description,
  ogImage = null,
  ogType = "website"
}) {
  if (!title || !description || !body) {
    throw new Error("documentTemplate requires title, description and body.");
  }

  const localeConfig = locales[locale];
  if (!localeConfig) throw new Error(`Unsupported document locale: ${locale}`);

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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
  <link rel="icon" href="${site.brand.assets.favicon}">
  <link rel="stylesheet" href="/assets/css/site.css">
  <script src="/assets/js/navigation.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">${copy[locale].skip}</a>
  ${Header({ activePath, locale, alternatePath })}
  <main id="main-content">${body}</main>
  ${Footer({ locale })}
</body>
</html>`;
}
