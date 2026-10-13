import { escapeHtml } from "../lib/html.js";
import { IMAGE_SIZES, responsiveImageData } from "../lib/responsive-image.js";

export function HeroMedia({
  src,
  alt = "",
  width = 1600,
  height = 1000,
  temporary = false,
  className = "",
  sizes = IMAGE_SIZES.hero
}) {
  if (!src) throw new Error("HeroMedia requires src.");
  const classes = ["editorial-hero-media", className].filter(Boolean).join(" ");
  const responsive = responsiveImageData(src, width, sizes);
  return `
    <figure class="${classes}"${temporary ? ' data-hero-status="temporary"' : ""}>
      <img
        src="${escapeHtml(src)}"
        srcset="${escapeHtml(responsive.srcset)}"
        sizes="${escapeHtml(responsive.sizes)}"
        alt="${escapeHtml(alt)}"
        width="${width}"
        height="${height}"
        loading="eager"
        fetchpriority="high"
        decoding="async">
    </figure>
  `;
}
