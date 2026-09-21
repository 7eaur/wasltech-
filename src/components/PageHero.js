import { escapeHtml } from "../lib/html.js";
import { ActionLink } from "./ActionLink.js";

const VALID_VARIANTS = new Set(["brand", "directory", "detail", "evidence", "action"]);

export function PageHero({
  variant = "brand",
  kicker = "",
  title,
  supporting = "",
  primaryAction,
  secondaryAction,
  media = ""
}) {
  if (!title) throw new Error("PageHero requires a title.");
  if (!VALID_VARIANTS.has(variant)) throw new Error(`Unknown PageHero variant: ${variant}`);

  const actions = [primaryAction, secondaryAction]
    .filter(Boolean)
    .map((action, index) => ActionLink({
      href: action.href,
      label: action.label,
      variant: index === 0 ? "primary" : "ghost",
      size: "lg"
    }))
    .join("");

  return `
    <section class="page-hero page-hero--${variant}">
      <div class="container page-hero__shell">
        <div class="page-hero__copy">
          ${kicker ? `<p class="eyebrow">${escapeHtml(kicker)}</p>` : ""}
          <h1>${escapeHtml(title)}</h1>
          ${supporting ? `<p class="page-hero__support">${escapeHtml(supporting)}</p>` : ""}
          ${actions ? `<div class="page-hero__actions">${actions}</div>` : ""}
        </div>
        ${media ? `<div class="page-hero__media">${media}</div>` : ""}
      </div>
    </section>
  `;
}
