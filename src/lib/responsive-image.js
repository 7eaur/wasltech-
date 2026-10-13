const DEFAULT_VARIANT_WIDTHS = Object.freeze([480, 768, 1024]);

export const IMAGE_SIZES = Object.freeze({
  hero: "(max-width: 48rem) 100vw, 48vw",
  card: "(max-width: 43.75rem) calc(100vw - 2rem), (max-width: 64rem) calc(50vw - 2rem), 33vw",
  featuredCard: "(max-width: 53.75rem) calc(100vw - 2rem), 40vw",
  compactCard: "(max-width: 48rem) calc(50vw - 1.5rem), (max-width: 64rem) calc(50vw - 2rem), 25vw",
  serviceDirectory: "(max-width: 48rem) 7.5rem, 45vw",
  halfWidth: "(max-width: 48rem) calc(100vw - 2rem), 50vw"
});

export function imageFormatPath(src, format = "webp") {
  if (!src?.endsWith(".webp")) return src;
  return src.replace(/\.webp$/i, `.${format}`);
}

export function imageVariantPath(src, width, format = "webp") {
  if (!src?.endsWith(".webp")) return null;
  return src.replace(/\.webp$/i, `-${width}.${format}`);
}

export function responsiveImageCandidates(src, intrinsicWidth, format = "webp") {
  const width = Number(intrinsicWidth);
  if (!src?.endsWith(".webp") || !Number.isFinite(width) || width <= 0) {
    return Object.freeze([{ src, width }]);
  }

  const variants = DEFAULT_VARIANT_WIDTHS
    .filter((candidateWidth) => candidateWidth + 160 <= width)
    .map((candidateWidth) => Object.freeze({
      src: imageVariantPath(src, candidateWidth, format),
      width: candidateWidth
    }));

  return Object.freeze([
    ...variants,
    Object.freeze({ src: imageFormatPath(src, format), width })
  ]);
}

export function responsiveImageData(src, intrinsicWidth, sizes, format = "webp") {
  const candidates = responsiveImageCandidates(src, intrinsicWidth, format);
  return Object.freeze({
    srcset: candidates.map((candidate) => `${candidate.src} ${candidate.width}w`).join(", "),
    sizes
  });
}

export function responsivePictureData(src, intrinsicWidth, sizes) {
  return Object.freeze({
    avif: responsiveImageData(src, intrinsicWidth, sizes, "avif"),
    fallback: responsiveImageData(src, intrinsicWidth, sizes, "webp")
  });
}
