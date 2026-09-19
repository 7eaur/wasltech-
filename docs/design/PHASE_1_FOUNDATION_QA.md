# Phase 1 — Global Design System & Layout Architecture QA

Date: 2026-09-19
Branch: `design/refined-craft-rebuild-20260919`
Status: STATIC GATE PASSED / VISUAL GATE PENDING

## Implemented
- Added `css/craft-system.css` as the new shared architectural design layer.
- Normalized core tokens in `css/variables.css`.
- Added shared contracts for:
  - container width,
  - section density,
  - typography hierarchy,
  - buttons,
  - editorial surfaces,
  - split layouts,
  - media frames,
  - CTA surfaces,
  - responsive behavior,
  - reduced motion.
- Loaded the new craft layer after `brand-v2.css` on all public HTML pages.
- Kept page-specific layout decisions outside the global layer.
- Did not redesign Homepage/Header/Footer in this phase.

## Token decisions
- Main container: 1220px.
- Major panel radius: 20px.
- Standard panel radius: 14px.
- Controls: 10px radius.
- Section rhythm:
  - desktop: 72px
  - tablet: 56px
  - mobile: 42px
- Shared control height: 44px.
- Motion uses one central easing and short durations.
- Shadows reduced to quieter ambient levels.

## Static verification
Public pages checked:
- index.html
- services.html
- service-web.html
- portfolio.html
- about.html
- process.html
- contact.html
- faq.html
- blog.html

Results:
- craft-system loaded exactly once on every page.
- craft-system loads after brand-v2 on every page.
- every checked page has one H1.
- literal dead `href="#"`: 0.
- gradients in craft-system.css: 0.
- reduced-motion baseline present.
- mobile responsive rules present.
- central surface/split/media primitives present.

## Visual gate still required
Before Phase 1 can be merged and Phase 2 begins:
- Desktop 1440 Light/Dark baseline screenshots.
- Mobile 390 Light/Dark baseline screenshots.
- At least Home, Services, Portfolio, Contact.
- Check horizontal overflow.
- Check typography scale and vertical density.
- Check that the global layer did not create page-specific regressions.
- Fix any regressions before merge.

## Rule
Phase 2 (Header/Footer shell) must not start until this visual gate is completed.
