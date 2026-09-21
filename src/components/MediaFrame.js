import { escapeHtml } from "../lib/html.js";

const ratios = new Set(["landscape", "wide", "square", "portrait"]);

export function MediaFrame({
  src,
  alt = "",
  ratio = "landscape",
  fit = "cover",
  loading = "lazy"
}) {
  if (!src) throw new Error("MediaFrame requires src.");
  if (!ratios.has(ratio)) throw new Error(`Unknown MediaFrame ratio: ${ratio}`);
  if (!["cover", "contain"].includes(fit)) throw new Error(`Unknown MediaFrame fit: ${fit}`);

  const containClass = fit === "contain" ? " media-frame--contain" : "";

  return `
    <figure class="media-frame media-frame--${ratio}${containClass}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="${loading}">
    </figure>
  `;
}
