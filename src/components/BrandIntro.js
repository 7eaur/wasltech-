import { site } from "../config/site.js";
import { escapeHtml } from "../lib/html.js";

// Reuse the approved Wasl Tech SVG in each layer; only the reveal mask is animated.
export function BrandIntro({ locale = "ar" } = {}) {
  const logo = escapeHtml(site.brand.assets.logo);
  const layer = (type, priority = "") =>
    '<img class="brand-intro__layer brand-intro__layer--' + type +
    '" src="' + logo + '" width="1130" height="360" alt="" decoding="async"' + priority + '>';
  const label = locale === "ar" ? "وصل تك" : "Wasl Tech";
  return '<div class="brand-intro" data-brand-intro aria-hidden="true" hidden>' +
    '<div class="brand-intro__mark">' +
    layer("symbol", ' fetchpriority="high"') + layer("wordmark") + layer("finished") +
    '<span class="brand-intro__line" aria-hidden="true"></span>' +
    '<span class="brand-intro__fallback" aria-hidden="true">' + escapeHtml(label) + '</span>' +
    '</div></div>';
}
