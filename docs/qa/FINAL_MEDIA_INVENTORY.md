# Final Media Inventory

Status: active VNext media ownership
Updated: 2026-10-14

## Runtime contract

- Every content raster is delivered as responsive AVIF with WebP fallback.
- Intrinsic width/height, `sizes`, lazy loading and async decoding are enforced.
- Each page has at most one eager/high-priority content image.
- The release build copies only assets referenced by `src/config/hero-media.js`, service data and project data.
- Old `assets/gen/`, root PNG placeholders and unrelated legacy JPG files were removed after proving they were outside the build graph.

## Source ownership

- Page/article originals: `assets/media/source/`.
- Service originals: `assets/services/source/`.
- Project source JPGs and optimized variants: `assets/works/`.
- Runtime page/article variants: `assets/media/`.
- Runtime service variants: `assets/services/`.
- Checksums for the eight user-supplied final media pairs: `FINAL_MEDIA_CHECKSUMS.json`.

## Active media families

| Family | Original/reference count | Runtime variants |
|---|---:|---:|
| Page and article media | 10 | AVIF + WebP responsive candidates |
| Service media | 8 | AVIF + WebP responsive candidates |
| Portfolio projects | 14 | AVIF + WebP, 480px + canonical |
| Brand assets | 4 SVG files | copied unchanged |
| Local fonts | 5 WOFF2 files + license | copied unchanged |

Intentional reuse:

- Contact and Project Planner share one approved Hero.
- FAQ and Insights share one approved Hero.
- About and Careers share the approved Wasl Tech team visual.
- Legal pages use neutral media for social previews but do not render decorative Hero images.
- The standalone 404 uses only `assets/brand/not-found-illustration.svg`.

## Automated acceptance

Run:

```bash
node scripts/check-final-media.mjs
npm run vnext:verify
npm run vnext:verify:release
```

The checks reject missing assets, invalid signatures, broken source hashes, oversized runtime media, missing AVIF/WebP pairs and unowned project-image output.
