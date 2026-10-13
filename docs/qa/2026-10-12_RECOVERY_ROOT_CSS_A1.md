# Wasl Tech — Root-cause CSS cleanup A1 (2026-10-12)

**Base:** `a725ecc9a2dc4b480199ae14220ef64d585f6293`; **branch:** `fix/independent-site-recovery-20261010`; **PR:** #46 Draft; **release:** not approved.

## Verified source cause and ownership

- `scripts/build.mjs` concatenates `src/styles/*` in an explicit order and builds the bilingual Planner and service routes from `src/pages/*`. Old root-level legacy files are *not* part of that declared VNext build input; their production ownership has not been proved and they are not deleted.
- The Planner Hero created a focusable Contact link then suppressed it with `display:none` in `hero-pages.css`. `contact-planner.css` retained a now-orphaned margin rule. The root correction removes the anchor from the page template and removes both CSS rules; the existing no-JS Contact alternative in the form, header/footer routes, and form fail-closed logic are preserved.
- The service Hero description was clipped to three lines and hidden overflow on narrow screens in `hero-pages.css`, with a conflicting `display:block`/overflow reversal in `hero-responsive.css` at larger widths. Both sides of the conflict are removed, leaving full description text at every viewport and retaining responsive font sizing.

## Regression prevention

- `scripts/check-cta.mjs`: no Planner inner-Hero anchor/button or orphan CSS selector.
- `scripts/check-service-details.mjs`: reject clipping/line-clamp on service Hero description, in addition to pre-existing 8 services × 2 locales HTML checks.
- Source transformation checks passed before commit. GitHub CI and AR/EN visual/no-JS/keyboard checks on the exact new SHA remain to be verified; **do not call this VERIFIED_PREVIEW until evidence exists**.

## Remaining

WT-IA-02/09/38: targeted conflicts addressed; WT-IA-25/38 and WT-015/020: full legacy dependency and CSS module ownership audit still OPEN/PARTIAL. Next inspect remaining consumers before cleanup, then UXR-03 semantic repetition. No `main`, DNS, SEO, Logo, or Production changes.
