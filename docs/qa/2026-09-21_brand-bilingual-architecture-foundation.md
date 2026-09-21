# Brand + Bilingual Architecture Foundation QA

Date: 2026-09-21  
Branch: `rebuild/vnext-foundation-20260921`  
Verified implementation HEAD: `9d9ad83677f8ed8040c14bc220d444848e001568`  
Workflow: `VNext verify`  
Run: `35550116171`  
Conclusion: **SUCCESS**

## Scope

This checkpoint locks the pre-Phase-2 identity and architecture decisions without publishing VNext or changing production.

## Implemented identity foundation

Canonical brand configuration:
- `src/config/brand.js`

Official source assets preserved:
- `assets/brand/wasl-tech-horizontal.svg`
- `assets/brand/wasl-tech-horizontal-white.svg`
- `assets/brand/favicon.svg`

Typography:
- IBM Plex Sans Arabic
- IBM Plex Sans
- language-aware typography layer in `src/styles/typography.css`

Color architecture:
- official published Navy scale;
- official published Teal scale;
- cool supporting neutral scale;
- functional success/warning/danger states;
- semantic color roles in `src/styles/brand.css`;
- raw design tokens in `src/styles/tokens.css`.

Core official values remain:
- Navy `#14305F`
- Teal `#0E8889`
- Accessible Teal Dark `#096B70`

No logo redraw/recolor or replacement identity was introduced.

## Implemented bilingual architecture contracts

Added:
- `src/config/locales.js`
- `src/config/routes.js`

Locked:
- Arabic default locale at `/`;
- English locale under `/en/`;
- RTL Arabic / LTR English;
- stable shared entity slugs across locales;
- clean route builders for services, portfolio, project planner, insights, careers, privacy and terms.

The actual English public pages are **not published yet**. These files define the architecture that Phase 2+ must follow.

## Build integration

Build stylesheet order now includes:
1. tokens;
2. semantic brand;
3. typography;
4. base;
5. layout;
6. components;
7. media.

Official brand assets remain copied into generated `dist/`.

Header/footer/document template now source brand assets from canonical brand configuration.

## Automated guards

`scripts/check.mjs` now fails if:
- canonical Navy/Teal values disappear;
- IBM Plex contracts disappear;
- official logo asset paths disappear;
- expected primary/white/favicon source geometry/colors change materially;
- semantic brand roles are missing;
- Arabic/English locale contracts are missing;
- key canonical route families disappear.

Existing anti-patch guards remain active:
- no `!important`;
- no decorative CSS gradients;
- no patch-style filenames;
- module/file-size checks;
- no runtime dependencies;
- foundation routes remain noindex.

## Documentation architecture updated

Canonical docs now record:
- bilingual site architecture;
- scalable service/project/article/job generation;
- insights/articles;
- careers;
- privacy;
- terms;
- dedicated project planner;
- build-time SEO;
- canonical/hreflang/sitemap/robots requirements;
- internal-link relationships;
- no thin keyword pages.

## Verification result

Run `35550116171` passed:
- VNext build;
- VNext structural checks;
- brand guard;
- bilingual locale/route guard.

## Production impact

**None.**

VNext remains isolated on its rebuild branch. Existing production is unchanged.

## Next phase

**Phase 2 — Bilingual Data & Content Normalization**

Next work must normalize verified service/project/FAQ data into stable multilingual records before real page design begins.
