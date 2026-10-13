import { escapeHtml } from "../lib/html.js";

/** Shared text-first entry for visitor tasks, not a decorative Hero. */
export function PageIntro({ kicker, title, supporting, variant }) {
  if (!kicker || !title || !supporting || !["contact","faq"].includes(variant)) {
    throw new Error("PageIntro needs localized content and a supported variant.");
  }
  return `
    <section class="page-intro page-intro--${variant}">
      <div class="container">
        <div class="page-intro__content">
          <h1>${escapeHtml(kicker)}</h1>
          <h2 class="inner-hero__subtitle">${escapeHtml(title)}</h2>
          <p>${escapeHtml(supporting)}</p>
        </div>
      </div>
    </section>
  `;
}
