import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const record = pages.find((page) => page.id === "notFound");

export function notFoundPage(locale = "ar") {
  if (!record) throw new Error("Canonical 404 page record missing.");
  const content = record.content[locale];
  if (!content) throw new Error(`404 content missing for locale: ${locale}`);

  const body = `
    <section class="secondary-hero not-found">
      <div class="container secondary-hero__grid">
        <div class="secondary-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(content.support)}</p>
          <div class="secondary-hero__actions">
            ${ActionLink({href:routes.home(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
            ${ActionLink({href:routes.services(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
          </div>
        </div>
        ${HeroMedia({...getPageHeroMedia("notFound", locale), className:"secondary-hero__media"})}
      </div>
    </section>
  `;

  return documentTemplate({
    title: content.seo.title,
    description: content.seo.description,
    body,
    locale,
    activePath: null,
    alternatePath: routes.home(locale === "ar" ? "en" : "ar"),
    canonicalPath: null,
    alternatePaths: {},
    robots: "noindex,follow"
  });
}
