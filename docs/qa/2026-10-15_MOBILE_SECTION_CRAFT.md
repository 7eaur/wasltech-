# Mobile Section Craft — 2026-10-15

## Scope

Improve Wasl Tech's mobile presentation without replacing its identity or copying another site's colors and shapes. The batch focuses on repeated decision and narrative sections across Home, About, and service-detail pages.

## Changes

- `FeatureList` owns Why Wasl Tech and About principles.
- `ProcessSteps` owns Home and service-detail process sequences.
- Mobile feature lists use a compact connected reading path instead of stacked boxed cards.
- Mobile process sequences use numbered markers, a light connector, and contained copy blocks.
- Homepage service cards switch to a readable single-column media row below 640px and retain their summaries.
- Media cards have one semantic title link whose hit area covers the full card.
- Homepage primary action starts a project; service exploration is secondary.
- The language switch is inside the mobile menu, while desktop behavior stays unchanged.
- Homepage trust signals stack into readable rows on compact screens.
- Unused VNext utility CSS was removed to keep the existing compressed CSS budget intact.

## Verification

- `npm run vnext:verify`: passed.
- `npm run vnext:verify:release`: passed for 84 indexable routes, Search Visibility, AI Answer Readiness, and Entity Consistency.
- CSS budget: passed at 16,357 compressed bytes; JavaScript remains 4,330 compressed bytes.
- Playwright reflow check at 360×740, 390×844, and 1440×900: zero horizontal overflow on Arabic/English Home, About, Process, and web-service detail routes.
- Process layout computed as one column at 360/390 and four columns at 1440 on Home and service detail.
- Visual review completed for Arabic Home at 390/1440, Arabic About at 390, Arabic service detail at 390, and English Home at 390.
- Mobile navigation interaction verified: menu opens, `aria-expanded` changes to `true`, and the route-preserving language switch is visible inside the opened menu.
- The first browser capture exposed a cascade defect that kept process steps in four mobile columns; the shared grid owner was corrected and the fixed captures were re-reviewed.
- Production and merge status: not changed.

## Known boundaries

- No new claims, metrics, services, project evidence, or business rules were introduced.
- No brand font, official color, logo, routing, SEO identity, or backend contract changed.
- Physical-device and screen-reader acceptance remain external verification gates.
