import { escapeHtml } from "../lib/html.js";
import { IMAGE_SIZES, responsivePictureData } from "../lib/responsive-image.js";

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
  const responsive = responsivePictureData(src, width, sizes);
  return `
    <figure class="${classes}"${temporary ? ' data-hero-status="temporary"' : ""}>
      <picture>
        <source type="image/avif" srcset="${escapeHtml(responsive.avif.srcset)}" sizes="${escapeHtml(responsive.avif.sizes)}">
        <img
          src="${escapeHtml(src)}"
          srcset="${escapeHtml(responsive.fallback.srcset)}"
          sizes="${escapeHtml(responsive.fallback.sizes)}"
          alt="${escapeHtml(alt)}"
          width="${width}"
          height="${height}"
          loading="eager"
          fetchpriority="high"
          decoding="async">
      </picture>
    </figure>
  `;
}
