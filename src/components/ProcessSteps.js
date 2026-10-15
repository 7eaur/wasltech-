import { escapeHtml } from "../lib/html.js";
import { icon } from "./icons.js";

export function ProcessSteps({ items = [], className = "" }) {
  if (!items.length) throw new Error("ProcessSteps requires items.");

  const classes = ["process-steps", className].filter(Boolean).join(" ");

  return `
    <ol class="${escapeHtml(classes)}">
      ${items.map((item, index) => `
        <li class="process-steps__item">
          <div class="process-steps__marker" aria-hidden="true">
            ${item.icon ? icon(item.icon, "process-steps__icon") : ""}
            <span>${item.number ?? String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="process-steps__copy">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body ?? item.description)}</p>
          </div>
        </li>
      `).join("")}
    </ol>
  `;
}
