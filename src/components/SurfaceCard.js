import { escapeHtml } from "../lib/html.js";

const variants = new Set(["default", "soft", "accent"]);

export function SurfaceCard({
  title,
  body = "",
  meta = "",
  action = null,
  variant = "default",
  interactive = false
}) {
  if (!title) throw new Error("SurfaceCard requires a title.");
  if (!variants.has(variant)) throw new Error(`Unknown SurfaceCard variant: ${variant}`);

  const variantClass = variant === "default" ? "" : ` surface--${variant}`;
  const interactiveClass = interactive ? " card--interactive" : "";

  return `
    <article class="card surface${variantClass}${interactiveClass}">
      ${meta ? `<p class="eyebrow">${escapeHtml(meta)}</p>` : ""}
      <h3 class="card__title">${escapeHtml(title)}</h3>
      ${body ? `<p class="card__body">${escapeHtml(body)}</p>` : ""}
      ${action ? `<div class="card__footer"><a class="text-link" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a></div>` : ""}
    </article>
  `;
}
