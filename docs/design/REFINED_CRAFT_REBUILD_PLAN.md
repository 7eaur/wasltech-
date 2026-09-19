# Wasl Tech — Refined Craft Rebuild Plan v1.0

Status: ACTIVE EXECUTION PLAN  
Branch: `design/refined-craft-rebuild-20260919`  
Design authority:
- `AGENTS.md`
- `docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`
- Approved Wasl Tech identity
- Live repository + browser/runtime evidence

## Current execution status

As of 2026-09-19:
- Phase 1: COMPLETE
- Phase 2: COMPLETE
- Phase 3: COMPLETE
- Phase 4: COMPLETE
- Phase 5: COMPLETE
- Phase 6: COMPLETE
- Phase 7: COMPLETE
- Phase 8: COMPLETE
- Phase 9: COMPLETE
- Phase 10: COMPLETE
- Phase 11: COMPLETE
- **Phase 12: NEXT**
- Phase 13: PENDING

Current handoff files:
- `PROJECT_STATUS.md`
- `PROJECT_HANDOFF.md`

Do not restart completed phases unless live repository evidence requires a fix.

## Purpose

Rebuild the public Wasl Tech website page-by-page with the same design discipline, organization and craft level demonstrated in UPDATE CARD, while preserving Wasl Tech's own identity, content, services and business truth.

This is **not** a visual reskin and not a one-shot global rewrite.

Execution loop for every phase:

**Understand → Architect → Implement → Run → Desktop Review → Mobile Review → Dark/Light Review → Critique → Fix → Verify → Merge**

No phase is considered finished because the code compiles.

---

# Phase 1 — Global Design System & Layout Architecture

## Goal
Create the visual grammar all pages will use before page-specific redesign begins.

## Scope
- design tokens,
- container widths,
- spacing scale,
- typography scale,
- surface hierarchy,
- borders/shadows/radii,
- buttons/links,
- section-heading contract,
- image/media frame contract,
- CTA surface contract,
- shared responsive rules,
- reduced-motion baseline.

## Must NOT do
- Do not redesign Homepage sections yet.
- Do not change service taxonomy/content.
- Do not invent new imagery.
- Do not merge page-specific composition into global CSS.

## Acceptance gate
- All public pages load the new craft layer.
- No gradients/glow/particles introduced.
- No horizontal overflow caused by global primitives.
- Light/Dark variables remain readable.
- Desktop and Mobile baseline review passes.

---

# Phase 2 — Shared Shell: Header, Navigation, Footer

## Goal
Make the site shell compact, elegant and consistent before rebuilding page bodies.

## Scope
- desktop header proportions,
- 5-link primary navigation,
- active states,
- CTA hierarchy,
- theme control,
- tablet breakpoint,
- solid mobile drawer,
- contact actions,
- footer information architecture,
- floating WhatsApp behavior.

## Acceptance gate
Desktop 1440/1024 + Mobile 390/360 in Light/Dark.
Keyboard open/close, focus visibility, no overlap, no overflow.

---

# Phase 3 — Homepage Architecture & Visual Rebuild

## Goal
Make Homepage the strongest expression of the new Wasl Tech system.

## Architecture
1. contained Product + Brand hero,
2. compact proof/capability strip,
3. service discovery by functional importance,
4. verified work showcase,
5. concise process,
6. contextual objections/FAQ,
7. branded conversion close.

## Key rule
No equal-card wall. One visual idea per section. Real project imagery has priority.

---

# Phase 4 — Services Directory

## Goal
Let a visitor understand all 8 official services quickly without catalog fatigue.

## Scope
- preserve all 8 services,
- grouped/editorial composition,
- clear distinction between programming and technical solutions,
- Profiles remains standalone,
- real proof where available.

---

# Phase 5 — Adaptive Service Detail

## Goal
One maintainable dynamic route with different content rhythm by service type.

## Service modes
- Product: websites/apps/stores
- System: programming/technical solutions
- Presence: identity/profiles/marketing

## Journey
Understand → Fit → Deliverables → Proof → Process → FAQ → Contact.

---

# Phase 6 — Portfolio

## Goal
Make real work the strongest trust surface.

## Scope
- preserve all verified projects,
- strong visual browsing,
- filtering,
- project detail drawer,
- only repository-supported project facts,
- related service + related projects,
- contextual conversion.

---

# Phase 7 — About

## Goal
Tell the company story and philosophy without corporate filler or duplicated Process content.

## Scope
Story → beliefs → what we build → decision approach → principles → next action.

---

# Phase 8 — Process

## Goal
Explain how work progresses and how decisions remain clear.

## Scope
pre-start inputs → six stages → project-clarity principles → workflow FAQ → CTA.

---

# Phase 9 — Contact

## Goal
Make contacting Wasl Tech effortless and truthful.

## Scope
- WhatsApp primary,
- secondary official channels,
- organized project-context form,
- no fake send/success state,
- explain exactly what happens,
- compact Update-Card-level composition.

---

# Phase 10 — FAQ + Secondary/Public Utility Pages

## Goal
Bring supporting pages into the same craft system without overdesign.

## Scope
- FAQ architecture and grouping,
- blog hidden/placeholder policy until real articles exist,
- 404 if present,
- secondary pages only when content is verified.

---

# Phase 11 — Mobile + Dark Mode Normalization

## Goal
Treat mobile and dark mode as designed experiences, not CSS fallbacks.

## Review
- 360, 390, 768, 1024, 1366, 1440 widths,
- touch targets,
- text wrapping,
- image crops,
- section density,
- drawers/modals,
- sticky/floating controls.

---

# Phase 12 — Motion, Accessibility, Performance, SEO

## Motion
Functional only; no continuous decoration.

## Accessibility
WCAG 2.2 AA target, focus, keyboard, reduced motion, semantics.

## Performance
Image loading/format/dimensions, JS discipline, remove dead CSS/JS, CWV review.

## SEO
titles/descriptions/canonical/sitemap/structured data only when truthful.

---

# Phase 13 — Cross-Page Craft Normalization & Final QA

## Goal
The whole site must feel like one intentionally art-directed product.

Final comparison against:
- Wasl Refined Web Craft Standard,
- UPDATE CARD craft discipline,
- Wasl identity,
- real runtime screenshots.

Review:
- density,
- hierarchy,
- repeated patterns,
- image storytelling,
- surfaces,
- radii/shadows,
- CTA language,
- mobile editing,
- dark mode,
- page-to-page consistency.

No completion claim until all representative pages pass Desktop + Mobile, Light + Dark review.

---

# Merge discipline

Each phase should have:
1. dedicated implementation commit(s),
2. phase QA document,
3. PR,
4. merge only after gate passes.

Do not batch several page stages into one unreviewable design change.
