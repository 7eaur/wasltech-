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

  return documentTemplate({
    title: content.seo.title,
    description: content.seo.description,
    body,
    locale,
    activePath: null,
    alternatePath: null,
    canonicalPath: null,
    alternatePaths: {},
    robots: "noindex,follow",
    minimalShell: true
  });
}
