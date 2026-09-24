import { ActionLink } from "./ActionLink.js";
import { escapeHtml } from "../lib/html.js";

export function CallToAction({
  kicker = "",
  title,
  description = "",
  action,
  secondaryAction = null,
  className = ""
}) {
  if (!title) throw new Error("CallToAction requires title.");
  if (!action?.href || !action?.label) throw new Error("CallToAction requires a primary action.");

  const extra = className ? ` ${escapeHtml(className)}` : "";
  const primary = ActionLink({
    href: action.href,
    label: action.label,
    variant: action.variant ?? "light",
    size: action.size ?? "md"
  });
  const secondary = secondaryAction?.href && secondaryAction?.label
    ? `<a class="site-cta__secondary" href="${escapeHtml(secondaryAction.href)}">${escapeHtml(secondaryAction.label)}</a>`
    : "";

  return `
    <section class="site-cta${extra}">
      <div class="container">
        <div class="site-cta__inner">
          <div class="site-cta__copy">
            ${kicker ? `<p class="eyebrow">${escapeHtml(kicker)}</p>` : ""}
            <h2>${escapeHtml(title)}</h2>
            ${description ? `<p class="site-cta__description">${escapeHtml(description)}</p>` : ""}
          </div>
          <div class="site-cta__actions">
            ${primary}
            ${secondary}
          </div>
        </div>
      </div>
    </section>
  `;
}
