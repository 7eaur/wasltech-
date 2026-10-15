import { escapeHtml } from "../lib/html.js";

export function FeatureList({ items = [], className = "" }) {
  if (!items.length) throw new Error("FeatureList requires items.");

  const classes = ["feature-list", className].filter(Boolean).join(" ");

  return `
    <div class="${escapeHtml(classes)}">
      ${items.map((item, index) => `
        <article class="feature-list__item">
          <span class="feature-list__number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <div class="feature-list__copy">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}
