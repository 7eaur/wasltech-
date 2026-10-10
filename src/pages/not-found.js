import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";

const record = pages.find((page) => page.id === "notFound");

export function notFoundPage(locale = "ar") {
  if (!record) throw new Error("Canonical 404 page record missing.");
  const content = record.content[locale];
  if (!content) throw new Error(`404 content missing for locale: ${locale}`);

  const body = `
    <section class="not-found-page" aria-labelledby="not-found-title">
      <div class="not-found-page__content">
        <img
          class="not-found-page__illustration"
          src="/assets/brand/not-found-illustration.svg"
          width="480"
          height="320"
          alt=""
          loading="eager"
          fetchpriority="high"
          decoding="async"
        >
        <h1 id="not-found-title">${escapeHtml(content.title)}</h1>
        ${ActionLink({href:routes.home(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
      </div>
    </section>
  `;

  // Vercel serves the root 404.html for unknown nested routes, including /en/*.
  // Keep the real HTTP 404 response and localize the single visible message
  // instead of rewriting missing English routes to a 200 response.
  const englishFallback = locale === "ar" ? `
    <script>
      (() => {
        if (!location.pathname.startsWith("/en/")) return;
        const copy = ${JSON.stringify({
          heading: record.content.en.title,
          action: record.content.en.primaryCta,
          pageTitle: record.content.en.seo.title,
          skipLink: "Skip to main content"
        }).replace(/</g, "\\u003c")};
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        document.title = copy.pageTitle;
        document.getElementById("not-found-title").textContent = copy.heading;
        const action = document.querySelector(".not-found-page .button");
        action.textContent = copy.action;
        action.href = "/en/";
        document.querySelector(".skip-link").textContent = copy.skipLink;
      })();
    </script>
  ` : "";

  return documentTemplate({
    title: content.seo.title,
    description: content.seo.description,
    body: body + englishFallback,
    locale,
    activePath: null,
    alternatePath: null,
    canonicalPath: null,
    alternatePaths: {},
    robots: "noindex,follow",
    minimalShell: true
  });
}
