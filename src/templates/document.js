import { site } from "../config/site.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { escapeHtml } from "../lib/html.js";

export function documentTemplate({
  title,
  description,
  body,
  activePath = "/",
  robots = "noindex,follow"
}) {
  if (!title || !description || !body) {
    throw new Error("documentTemplate requires title, description and body.");
  }

  return `<!doctype html>
<html lang="${site.locale.lang}" dir="${site.locale.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#FFFFFF">
  <meta name="robots" content="${robots}">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
  <link rel="icon" href="${site.brand.assets.favicon}">
  <link rel="stylesheet" href="/assets/css/site.css">
  <script src="/assets/js/navigation.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main-content">تجاوز إلى المحتوى الرئيسي</a>
  ${Header({ activePath })}
  <main id="main-content">${body}</main>
  ${Footer()}
</body>
</html>`;
}
