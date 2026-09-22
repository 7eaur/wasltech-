# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-22  
Repository: `7eaur/wasltech-`  
Official/production branch: `main`  
Active VNext branch: `rebuild/vnext-foundation-20260921`

## 1. Mandatory start procedure

A new conversation must:

1. fetch live `main`;
2. fetch live `rebuild/vnext-foundation-20260921`;
3. read `PROJECT_STATUS.md`;
4. read this file;
5. read `AGENTS.md`;
6. read `docs/README.md`;
7. read only the relevant canonical core docs;
8. treat live code/runtime/tests as higher authority than old chats or stale docs.

Do **not** restart analysis from zero.

## 2. Branch truth

### Production / legacy
`main` remains the currently published site.

Verified production reference:
- Vercel project: `wasltech`
- production deployment: `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9`
- alias: `wasltech.vercel.app`
- source branch: `main`
- verified source SHA: `a4ed507defe5e7831f3459e12752a89fe0d225fc`

Production is still legacy/current implementation.

Do not cut over VNext yet.

### VNext
Active branch:
`rebuild/vnext-foundation-20260921`

Latest verified **runtime/design checkpoint**:
`ec5b788d393b245e25bf08dc70ad29b7c9715074`

Latest visual refinement evidence:
- VNext verify: `35679244075` — **SUCCESS**
- capture: `35679244011` — **SUCCESS**
- screenshot artifact: `10673974756`
- Mobile 390 now keeps key card groups compact/horizontal instead of collapsing every group to one long column.
- Homepage uses restrained inline SVG cues in Hero/Process, tighter typography, corrected image crops, and normalized section rhythm.

Documentation commits may be newer than that checkpoint. Always fetch live HEAD first.

## 3. Current phase

**Phase 13 — Cross-page Visual Normalization — IN PROGRESS**

Phases 0–12 are complete.

Phase 12 technical release baseline is green:
- Preview/Production build separation;
- SEO/canonical/hreflang/sitemap/robots;
- 404;
- accessibility/contrast;
- quality/performance budgets;
- deterministic project media;
- runtime smoke;
- no critical console/page errors.

Phase 13 now owns visual consistency across the whole site.

## 4. User-approved visual direction

The user rejected:
- text-heavy VNext composition;
- giant project showcase imagery;
- flashy agency/cinematic layouts;
- over-designed or AI-looking landing pages.

The approved direction is:

**calm + elegant + sequential + easy to understand + profile-inspired**

The published `main` homepage is useful as a **visual direction reference only**:
- calm spacing;
- understandable flow;
- supporting images;
- easy scanning.

Do **not** copy legacy architecture, wording, or CSS.

Locked brand:
- IBM Plex Sans Arabic / IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- original Wasl Tech logo assets.

## 5. Approved Homepage sequence

This sequence is now canonical:

1. Hero
2. Services
3. Selected Work
4. About the Wasl Tech team
5. Why Wasl Tech
6. How We Work
7. Short FAQ
8. Compact final CTA
9. Footer

Important user decisions:
- all 8 official services remain visible on Home;
- About and Why Wasl Tech are separate and must **not** be merged;
- use `فريق وصل تك / Wasl Tech team` in narrative copy rather than generic “company” wording;
- no unsupported numeric counters such as years/projects/satisfaction percentages;
- approved qualitative trust cues:
  - فريق ذو خبرة
  - رضا العملاء
  - مشاريع ناجحة
- selected work stays compact; no huge portfolio/project image dominates the page;
- Home FAQ = exactly 3 decision-support questions;
- final CTA is intentionally smaller than Hero;
- Footer should not dominate the close;
- copy must be customer-facing and marketing-aware, not internal evidence justification.

Canonical rules are now recorded in:
- `docs/core/DESIGN_SYSTEM.md`
- `docs/core/CONTENT_IA.md`
- `docs/core/EXECUTION_PLAN.md`

## 6. Homepage implementation already completed

Implemented in:
- `src/pages/home.js`
- `src/data/pages.js`
- `src/styles/home.css`
- `scripts/build.mjs`
- `scripts/check-home.mjs`

Homepage now has:
- calm image-supported Hero;
- all 8 service cards;
- 3 selected project cards;
- separate About Team section;
- separate Why Wasl Tech section;
- 4-step Process;
- 3-question FAQ;
- compact final CTA.

Homepage editorial/checkpoint media:
- `assets/about_1.png`
- `assets/about_2.png`

Their **layout role** is approved. The exact images may later be replaced by stronger real/custom assets if they feel generic; do not change the composition merely to replace the asset.

## 7. Homepage implementation commits

Key commits:
- `98e9f4ab2c542da1f6ff9a8760d8bec45d5b063e` — marketing homepage copy
- `d3559c2540a4d783ff77ae9399fffa831ad2ee92` — refined profile-inspired layout
- `b0a4381de25bf91d7e150208433248e0070e750b` — include homepage editorial media in build
- `736245247522c353af3e333d38ea7c91b3254b78` — guard approved homepage sequence
- `dcbd8def11c4db30e14f2d7cdf694e988ac52ec4` — spacing-token fix
- `66adc2591a0bca36bace30a972667cf99c120b5f` — preload media for visual capture only
- `4c034ec2276ab3ba96436d35d263db915236043a` — remove sticky-scroll capture artifact

The last two are screenshot/capture workflow refinements only.

## 8. Verification evidence

### VNext verify
Run:
`35677121641`

SHA:
`4c034ec2276ab3ba96436d35d263db915236043a`

Result:
**SUCCESS**

Artifacts:
- preview: `wasltech-vnext-foundation`
  - artifact id: `10673711495`
- release candidate: `wasltech-vnext-release-candidate`
  - artifact id: `10673746371`

### Latest real Homepage screenshots
Capture run:
`35677121570`

Result:
**SUCCESS**

Artifact:
- name: `wasltech-vnext-homepage-screenshots`
- id: `10674085957`
- digest: `sha256:4317be0be4fcaab6787b08d621ef2aed18483f1114922f2c938ca6d2e1e808a1`

Contains:
- Desktop full-page: 1440px
- Mobile full-page: 390px

The capture verifies no horizontal overflow before saving.

QA record:
`docs/qa/2026-09-22_phase-13_homepage-visual-redesign.md`

## 9. Exact next action — do this first

**Do not immediately redesign other pages.**

First:

1. fetch live VNext HEAD;
2. confirm the Homepage runtime files above have not changed unexpectedly;
3. retrieve artifact `10674085957` or regenerate the same screenshots;
4. show the user the latest real Homepage:
   - Desktop 1440
   - Mobile 390
5. visually critique it with the user;
6. fix any Homepage defect from the root cause;
7. only after the user accepts the implemented Homepage, use its visual language as the Phase 13 reference for the rest of the site.

## 10. After Homepage acceptance

Normalize the remaining route families in this order:

1. Shared Header/Footer
2. Services Directory
3. Service Detail
4. Portfolio
5. Project Detail / Case Study
6. About
7. Process
8. Contact
9. Project Planner
10. FAQ
11. Insights / Careers empty states
12. Privacy / Terms / secondary pages
13. English equivalents

For every page:
- preserve existing correct architecture/data;
- change visual composition/copy only where needed;
- do not reintroduce duplication;
- fix shared root causes in shared primitives/styles;
- avoid patch CSS piles.

## 11. Required Phase 13 visual matrix

Before Phase 13 can close, review:
- 360
- 390
- 768
- 1024
- 1366
- 1440

For:
- Arabic RTL
- English LTR

Check:
- hierarchy;
- section spacing;
- image crops;
- header/footer density;
- button hierarchy;
- card/surface consistency;
- long vs short pages;
- mobile editing;
- no horizontal overflow;
- no generic AI/template feel.

## 12. Content/claim rules

Never invent:
- metrics;
- project results;
- client names;
- prices;
- durations;
- SLAs;
- certifications;
- technologies from inference;
- testimonials.

User intentionally does **not** want project:
- year;
- live URL;
- stack;
- gallery.

Do not reintroduce them.

## 13. Current data/content facts

Canonical:
- 8 official services;
- 14 projects;
- 13 FAQ items across 4 groups;
- 0 published articles;
- 0 open jobs.

Market:
- Yemen + Gulf.

Verified contact:
- phone / WhatsApp: `+967775377979`
- email: `wasltechp@gmail.com`
- Instagram: `@wasltech.yem`

## 14. Non-negotiable engineering rules

Read `AGENTS.md`.

Key reminders:
- clean VNext architecture;
- no patch pile;
- no runtime frontend framework by default;
- Node 24 build-time static multipage;
- centralized data;
- Arabic + English from same records;
- semantic/crawlable HTML;
- WCAG 2.2 AA target;
- LCP ≤2.5s / INP <200ms / CLS <0.1 targets;
- no critical console/resource errors;
- no production cutover until Phase 14.

## 15. Cutover status

**DO NOT MERGE/CUT OVER YET.**

Phase 13 must finish and be visually accepted first.

Then Phase 14:
- merge approved VNext;
- deploy exact SHA;
- verify redirects/routes/assets/metadata;
- runtime smoke;
- exact production SHA;
- real production CWV verification;
- update status/handoff.
