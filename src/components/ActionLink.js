import { escapeHtml } from "../lib/html.js";

const variants = new Set(["primary", "secondary", "ghost", "light"]);
const sizes = new Set(["sm", "md", "lg"]);

export function ActionLink({
  href,
  label,
  variant = "primary",
  size = "md",
  className = ""
}) {
  if (!href || !label) throw new Error("ActionLink requires href and label.");
  if (!variants.has(variant)) throw new Error(`Unknown ActionLink variant: ${variant}`);
  if (!sizes.has(size)) throw new Error(`Unknown ActionLink size: ${size}`);

  const sizeClass = size === "md" ? "" : ` button--${size}`;
  const extra = className ? ` ${escapeHtml(className)}` : "";

  return `<a class="button button--${variant}${sizeClass}${extra}" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}
