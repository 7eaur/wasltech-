import { routes } from "../config/routes.js";
import { escapeHtml } from "../lib/html.js";

/** Render a responsive, content-first grid for product or service cards. */
export function ProductGrid({ items = [], locale = "ar", className = "home-service-grid" } = {}) {
  const cards = items.map((item) => {
    const content = item.content?.[locale] ?? item;
    const href = item.slug ? routes.service(item.slug, locale) : (item.href ?? "#");
    const title = content.title ?? "";
    const summary = content.subtitle ?? content.summary ?? "";
    return `
      <article class="home-service-card">
        <a class="product-card__media home-service-card__media" href="${href}" aria-label="${escapeHtml(title)}">
          <img src="${item.image ?? ""}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" width="1280" height="720">
        </a>
        <div class="product-card__body home-service-card__body">
          <p class="product-card__eyebrow">${locale === "ar" ? "حل رقمي" : "Digital solution"}</p>
          <h3><a href="${href}">${escapeHtml(title)}</a></h3>
          <p>${escapeHtml(summary)}</p>
        </div>
      </article>
    `;
  }).join("");

  return `<div class="${className}" data-product-grid>${cards}</div>`;
}

export default ProductGrid;
