import { routes } from "../config/routes.js";
import { getServiceById } from "../data/services.js";
import { getServiceChoice } from "../data/service-choices.js";
import { escapeHtml } from "../lib/html.js";

/** A single contextual comparison, not keyword-stuffed copies of every service. */
export function ServiceChoice({ service, locale = "ar" } = {}) {
  const choice = getServiceChoice(service.id, locale);
  if (!choice) return "";
  const alternative = getServiceById(choice.alternativeServiceId);
  if (!alternative) throw new Error(`Missing comparison service: ${choice.alternativeServiceId}`);
  return `
    <section class="section article-related service-choice" id="service-choice">
      <div class="container article-related__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "اختيار الحل المناسب" : "Choosing the right solution"}</p>
          <h2>${escapeHtml(choice.heading)}</h2>
          <p>${escapeHtml(choice.guidance)}</p>
        </div>
        <div class="article-related__links">
          <a href="${routes.service(alternative.slug, locale)}">
            <strong>${escapeHtml(choice.link)}</strong>
            <span>${escapeHtml(alternative.content[locale].subtitle)}</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
