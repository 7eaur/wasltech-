# Wasl Tech Website — Project Rules

This repository follows a strict product/design/engineering protocol.

## Source of truth
1. Live repository code and assets.
2. Runtime behavior in a real browser.
3. Verified business content in the repository.
4. Approved Wasl Tech visual identity package v1.0.
5. Project documentation.
6. Assumptions are never promoted to facts.

Use `CONTENT REQUIRED` or `NOT VERIFIED` when evidence is missing.

## Brand authority
- Brand name: وصل تك | Wasl Tech.
- Primary Navy: `#14305F`.
- Accent Teal: `#0E8889`.
- Accessible Teal Dark: `#096B70`.
- Arabic typeface: IBM Plex Sans Arabic.
- English typeface: IBM Plex Sans.
- Arabic surfaces are `dir="rtl" lang="ar"`.
- Prefer the approved horizontal logo; use a white lockup on dark surfaces.
- Never redraw, stretch, recolor with CSS filters, or retype the wordmark.
- Teal `#0E8889` is not for small body text on white; use `#096B70`.

## Design authority
The website direction is **The Tech-Forward Partner**: structured, modern, clear, credible, human, and technically polished.

The detailed craft authority is `docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`. It adapts the proven composition, spacing, surface, imagery, mobile-first and component discipline used in `7eaur/update_card` without copying UPDATE CARD branding or page layouts. Future design work must follow it, and final cross-page QA must re-check earlier pages against it.

### Required design behavior
- Clarity before decoration.
- Proof before claims.
- Each section must have a reason to exist.
- Reduce repetition and dead ends.
- Mobile is intentionally composed, not merely stacked desktop.
- Use whitespace, scale, cropping and hierarchy instead of decorative card grids.
- Cards must earn their existence.
- Motion is functional, restrained and reduced-motion safe.
- Preserve the brand; do not apply generic themes.

### Anti-AI / anti-template rules
Do not default to:
- purple/blue marketing gradients,
- 3-column icon-in-circle feature grids,
- decorative icon circles,
- floating blobs/circles,
- centered text everywhere,
- uniform bubbly radius everywhere,
- gratuitous glassmorphism/glow/3D,
- fake dashboards or fake UI text,
- stock-looking imagery,
- unnecessary continuous animation,
- all-content-as-cards.

Bento is not a default. Use editorial, split, showcase, list, timeline or other compositions when they fit better.

## Content integrity
Never invent:
- metrics,
- project results,
- client problems/solutions,
- technologies used,
- SLAs,
- delivery dates,
- supported platforms,
- testimonials,
- certifications,
- prices.

Portfolio and service content may use only verified repository data unless new content is explicitly supplied.

## UX requirements
- No dead `href="#"` on published journeys.
- No fake success state.
- A contact form must state what actually happened.
- External redirects such as WhatsApp must be clear.
- Navigation must be understandable at desktop/tablet/mobile widths.
- Every key journey must have a logical next step.

## Accessibility and performance
- Target WCAG 2.2 AA.
- Visible `:focus-visible`.
- Keyboard-operable navigation, drawers and dialogs.
- Touch targets at least 44×44px.
- Support `prefers-reduced-motion`.
- Prevent horizontal overflow.
- Avoid content hidden forever behind animation.
- Prefer WebP/SVG and explicit image dimensions when practical.
- Avoid unnecessary libraries.

## Implementation protocol
For every significant phase:
1. Understand.
2. Implement.
3. Run.
4. Visually inspect.
5. Critique.
6. Fix.
7. Verify.

Do not claim completion without evidence.

## Current website implementation order
1. Brand/design foundations.
2. Header/navigation/mobile.
3. Homepage.
4. Services overview.
5. Adaptive service detail.
6. Portfolio.
7. About/process.
8. Contact.
9. Shared footer/components.
10. Responsive + dark mode.
11. Motion cleanup.
12. Accessibility.
13. Performance/Core Web Vitals.
14. SEO/semantics.
15. Cross-page QA.


## Current execution checkpoint
Before continuing design/engineering work, read:
1. `PROJECT_STATUS.md`
2. `PROJECT_HANDOFF.md`
3. `docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`
4. `docs/design/REFINED_CRAFT_REBUILD_PLAN.md`

Current handoff checkpoint (2026-09-19):
- Refined Craft Phases 1–11 are merged to `main`.
- Current verified HEAD when the handoff was created: `9a0204f28c3075f0cddae3b5ae94c45ec84c7a39`.
- Next phase: **Phase 12 — Motion + Accessibility + Performance/Core Web Vitals + SEO/Semantics**.
- Final remaining phase after that: **Phase 13 — Cross-Page Craft Normalization + Final Runtime QA**.
- Do not restart earlier phases unless live code supplies new evidence of a regression.
- `docs/design/QA_REPORT.md` is legacy historical evidence and must not override current live code, `PROJECT_STATUS.md`, `PROJECT_HANDOFF.md`, or current `PHASE_*_QA.md` files.
