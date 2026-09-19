# Phase 1 — Global Design System & Layout Architecture QA

Date: 2026-09-19
Branch: `design/refined-craft-phase1-20260919`
Status: ARCHITECTURE GATE PASSED

## Implemented
- Added `css/craft-system.css` as the shared architectural layer.
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
- Loaded the craft layer after `brand-v2.css` on every public page.
- Kept page-specific composition out of the global system.
- Did not redesign Homepage/Header/Footer in Phase 1.

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
- Motion uses central easing and short durations.
- Shadows reduced to quieter ambient levels.

## Static architecture verification
Checked:
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
- one H1 on every checked page.
- literal dead `href="#"`: 0.
- mojibake/replacement characters: 0.
- gradients in `craft-system.css`: 0.
- reduced-motion baseline: present.
- responsive baseline: present.
- shared surface/split/media primitives: present.

## Runtime visual infrastructure note
Two automated runtime routes were attempted:
1. GitHub Actions browser QA workflow.
2. Local Chromium/Playwright runtime.

The GitHub job is currently stopped by the repository/runner environment before executable steps begin, and the local browser environment blocks or stalls navigation. No screenshot claim is made from those failed attempts.

Therefore:
- Phase 1 is accepted as a **design-system architecture gate**.
- Exact page-level visual acceptance remains mandatory in each page phase and in the final cross-page craft normalization gate.
- No production-ready visual claim is made from Phase 1 alone.

## Decision
Proceed to Phase 2 (shared Header / Navigation / Footer), while retaining the final Desktop/Mobile Light/Dark visual gate before production merge.
