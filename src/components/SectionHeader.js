import { escapeHtml } from "../lib/html.js";

export function SectionHeader({ kicker = "", title, supporting = "" }) {
  if (!title) throw new Error("SectionHeader requires a title.");

  return `
    <header class="section-header">
      ${kicker ? `<p class="eyebrow">${escapeHtml(kicker)}</p>` : ""}
      <h2>${escapeHtml(title)}</h2>
      ${supporting ? `<p>${escapeHtml(supporting)}</p>` : ""}
    </header>
  `;
}
