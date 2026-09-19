# Phase 11 — Mobile + Dark Mode Normalization QA

Date: 2026-09-19
Branch: `design/refined-craft-phase11-mobile-dark-20260919`

## Goal
Treat mobile and dark mode as first-class experiences and add a final guard layer without rewriting page-specific architecture.

## Implemented
- Added `css/responsive-normalization.css` as the final stylesheet on every public page.
- Added:
  - safe-area positioning for floating controls,
  - 44px minimum touch targets for navigation, filters, drawer close, social and floating controls,
  - 16px mobile form control font size to prevent iOS focus zoom,
  - long text/email wrapping,
  - fixed/modal viewport guards,
  - mobile action stacking,
  - dark native form control normalization,
  - strong `:focus-visible` treatment,
  - reduced-motion fallback for reveal content,
  - scroll-margin support for anchored sections.
- Updated `js/main.js`:
  - browser theme-color follows Light/Dark,
  - system theme changes are respected when the user has not saved an explicit theme,
  - mobile menu closes safely when resizing back above the drawer breakpoint.

## Public pages checked
- index.html
- services.html
- service-web.html
- portfolio.html
- about.html
- process.html
- contact.html
- faq.html
- blog.html
- 404.html

Results across all 10:
- normalization stylesheet loaded exactly once: YES
- normalization stylesheet loaded last: YES
- viewport meta present: YES
- theme-color meta present: YES
- H1 count: 1
- dead literal `href="#"`: 0
- inline style attributes: 0
- mojibake/replacement characters: 0

## Responsive/code audit
Relevant page CSS already contains dedicated mobile/tablet breakpoints. Phase 11 avoids duplicating those layouts and only guards cross-page edge cases.

Important corrections:
- portfolio filter buttons: normalized to >=44px touch target on mobile
- portfolio drawer close: normalized to >=44px
- header theme/hamburger controls: normalized to >=44px
- floating WhatsApp/back-to-top controls: normalized to >=44px
- mobile form controls: >=44px and 16px text size
- fixed utilities respect `env(safe-area-inset-*)`

## Contrast verification
Calculated representative WCAG contrast ratios:
- light primary text `#0B1730` on white: 17.80:1
- light secondary text `#46566F` on white: 7.44:1
- Teal Dark `#096B70` on white: 6.27:1
- dark primary text `#F5F8FA` on `#071127`: 17.60:1
- dark secondary text `#B7C4D3` on `#071127`: 10.59:1
- Teal 200 `#9DDED8` on `#071127`: 12.40:1
- white on Brand Navy `#14305F`: 12.98:1

Note:
- base Teal `#0E8889` on white is ~4.28:1, so it must not be used for normal-size body/link text on white.
- text/link uses are kept on Teal Dark `#096B70`; base Teal remains suitable for larger UI/accent surfaces.

## Runtime visual gate status
Exact browser screenshots remain required in Phase 13. Previous browser automation routes are currently unavailable in this repository/environment, so this phase does not claim screenshot-based visual approval.

## Decision
Mobile/Dark normalization code gate passes. Proceed to Phase 12, while retaining final Desktop/Mobile Light/Dark browser review as a hard production gate.
