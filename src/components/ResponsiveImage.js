import { attributes, escapeHtml } from "../lib/html.js";

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  fetchpriority,
  className = ""
}) {
  if (!src || alt === undefined || !width || !height) {
    throw new Error("ResponsiveImage requires src, alt, width and height.");
  }

  return `<img ${attributes({
    src,
    alt: escapeHtml(alt),
    width,
    height,
    loading,
    fetchpriority,
    class: className || undefined,
    decoding: "async"
  })}>`;
}
