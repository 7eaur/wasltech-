import { escapeHtml } from "../lib/html.js";

export function HeroMedia({
  src,
  alt = "",
  width = 1600,
  height = 1000,
  temporary = false,
  className = ""
}) {
  if (!src) throw new Error("HeroMedia requires src.");
  const classes = ["editorial-hero-media", className].filter(Boolean).join(" ");
  return `
    <figure class="${classes}"${temporary ? ' data-hero-status="temporary"' : ""}>
      <img
        src="${escapeHtml(src)}"
        alt="${escapeHtml(alt)}"
        width="${width}"
        height="${height}"
        loading="eager"
        fetchpriority="high"
        decoding="async">
    </figure>
  `;
}
