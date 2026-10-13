import { absoluteUrl } from "../config/seo.js";

export function renderPreviewRobots() {
  return "User-agent: *\nDisallow: /\n";
}

export function renderProductionRobots() {
  return `User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: *\nAllow: /\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`;
}

export function renderSitemap(entries = []) {
  const urls = entries.map((entry) => {
    const alternateEntries = Object.entries(entry.alternates ?? {});
    const alternates = [
      ...alternateEntries.map(([locale, path]) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${absoluteUrl(path)}"/>`),
      ...(entry.alternates?.ar ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(entry.alternates.ar)}"/>`] : [])
    ].join("\n");
    return `  <url>\n    <loc>${absoluteUrl(entry.path)}</loc>\n${alternates}\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}
