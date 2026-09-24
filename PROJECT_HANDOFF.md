# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-24  
Repository: `7eaur/wasltech-`  
Official/production branch: `main`  
Active VNext branch: `rebuild/vnext-foundation-20260921`

## 0A. Media integration update — 2026-09-24

The approved service-media batch is now integrated rather than pending upload:
- 8 source JPEGs preserved under `assets/services/source/`;
- 8 optimized WebP files under `assets/services/`;
- `src/data/services.js` owns the canonical runtime mapping;
- Homepage cards, Services directory entries, and service-detail Heroes consume the same `service.image`;
- Homepage Hero uses `assets/media/home-hero.webp`;
- Homepage About + About page Hero use `assets/media/about-us.webp`;
- original Home/About files are preserved under `assets/media/source/`.

Do not manually deploy Vercel. Check the GitHub VNext verify run for the integration commit before calling the batch technically verified.

## 0. Immediate baton — 2026-09-24

This is the exact resume point for the next conversation.

### First actions
1. Fetch live `main` and `rebuild/vnext-foundation-20260921`.
2. Read this file, `PROJECT_STATUS.md`, and `docs/qa/2026-09-24_footer-service-media-handoff.md`.
3. Confirm whether the live VNext HEAD is newer than the implementation checkpoint `4e11e5e9c13e4f9a8c477a21ce62a0e1f21d8d4f`; if newer, inspect the documentation-only handoff commit before doing code work.
4. Do **not** restart architecture, homepage, Footer, or final-audit work from zero.
5. Do **not** merge/cut over `main`.
6. Do **not** manually publish a Vercel Preview until the user explicitly says `انشر`.

### What is already complete
- VNext architecture/page systems and final audit Stages 0–18 were previously closed.
- Footer contact/social redesign is implemented.
- Final implementation checkpoint `4e11e5e9...` has:
  - VNext verify `35990862213` — **SUCCESS**
  - responsive route matrix `35990862361` — **SUCCESS**
- Production is still legacy `main` at `a4ed507d...`.

### Footer state — do not redo unless the user asks
Shared Footer now contains:
- long Wasl Tech description instead of the short slogan;
- icon-led WhatsApp, phone, email, and website contact rows;
- Facebook, X, Instagram, Telegram, and TikTok social icons;
- mobile layout keeps contact values visible;
- Footer bottom with copyright/domain.

Current contact source of truth:
- phone / WhatsApp: `+967 775 377 979`
- email: `info@wasl-tech.com`
- domain: `www.wasl-tech.com`
- Instagram: `@wasltech.yem`

The email intentionally follows the old **live** site, not the older Gmail value still found in legacy source code.

### Service images — exact pending task
The user supplied and approved eight service originals. The mapping is locked:

| Service slug | Supplied image subject | Derivative filename |
|---|---|---|
| `web-development` | Wasl website displayed on a laptop | `web-development.webp` |
| `mobile-app-development` | Wasl mobile app on phone | `mobile-app-development.webp` |
| `ecommerce` | e-commerce store shown on laptop | `ecommerce.webp` |
| `custom-software` | code editor on laptop | `custom-software.webp` |
| `technical-solutions` | cloud/server infrastructure | `technical-solutions.webp` |
| `company-profiles` | printed company profile/brochure | `company-profiles.webp` |
| `brand-design` | Wasl Tech identity/stationery mockup | `brand-design.webp` |
| `digital-marketing` | analytics/dashboard screen | `digital-marketing.webp` |

Prepared web derivative target:
- WebP
- `1280×720`
- roughly `41–77 KB` each.

**Do not misunderstand current status:** neither the originals nor derivatives have been committed to GitHub yet, and `src/data/services.js` still points at old project JPEGs.

The user specifically wants the **originals uploaded and verified**, not merely optimized local copies.

Recommended implementation:
1. preserve originals unchanged under `assets/services/source/<slug>.jpeg`;
2. add optimized derivatives under `assets/services/<slug>.webp`;
3. update each service record's `image` field in `src/data/services.js` to `/assets/services/<slug>.webp`;
4. verify the service-detail Hero already consumes the canonical service image; keep one media owner rather than duplicating mappings;
5. verify each of the 16 localized service-detail routes plus Home/Services usage;
6. run `VNext verify`;
7. run the route matrix after the **whole batch**, not after each file;
8. only publish manually if the user later says `انشر`.

### Binary upload caveat
The prior attempt through the GitHub connector failed because current-chat images were returned to the connector as asset pointers, not raw bytes for Git blobs.

If a new conversation cannot access the eight original attachments, ask the user to re-upload those same originals. Never pretend they are already in the repo, and never regenerate substitutes.

### Commit/deployment discipline
The user wants to conserve deployment limits. Vercel Git integration can create a Preview for every pushed commit even when no manual deploy is requested. Therefore:
- prepare the full next batch first;
- push one consolidated commit;
- avoid sequential tiny Git commits;
- do not invoke a manual Vercel deployment until requested.

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
`aea64eb0f4339a610fa8f035b8650e12bdbbd8cf`

Latest architecture/visual evidence:
- Homepage: **USER ACCEPTED**
- VNext verify: `35682925238` — **SUCCESS**
- responsive route-family matrix: `35682925234` — **SUCCESS**
- screenshot artifact: `10675451706`
- documentation-head verify: `35682982991` — **SUCCESS**
- QA record: `docs/qa/2026-09-22_phase-13b_architecture-editorial-media-completion.md`
- representative route families, including a published Article detail page, checked at 360/390/768/1024/1366/1440 in Arabic and English;
- image-led Hero surfaces are now part of the page architecture;
- public service/project count counters are removed and guarded;
- Insights is a published bilingual editorial system with Article detail routes and schema;
- Careers keeps an honest empty state while Job detail/JobPosting architecture is ready for future real openings;
- final CTAs and compact Footer behavior remain consistent across the site;
- current non-project editorial Hero/article images are temporary and must be replaced/optimized before cutover.

Documentation commits may be newer than that checkpoint. Always fetch live HEAD first.

## 3. Current phase

**Phase 13B — Architecture, Editorial & Final Media Preparation — FINAL MEDIA PENDING**

Latest acceptance evidence is recorded in `docs/qa/2026-09-23_comprehensive-pre-final-media-audit.md`. Stages 0–18 are closed. Use `docs/qa/FINAL_MEDIA_INVENTORY.md` as the exact image handoff contract; do not reopen prior stages unless final-media work causes a regression.

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
- all canonical service offerings remain visible on Home without a public service-count counter;
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
- the complete canonical service set;
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

The architecture/content/SEO batch is complete. Do **not** restart page architecture.

Next:

1. fetch live VNext HEAD;
2. read the Phase 13B QA record;
3. collect the final image set from the user;
4. replace only the temporary Hero/article assets while preserving their approved layout roles;
5. optimize final images for responsive web delivery;
6. review focal crops at Mobile 390 and Desktop 1440;
7. verify Open Graph image output;
8. run Preview + Release + quality + SEO checks;
9. run the full Arabic/English responsive route matrix;
10. show the final screenshots for visual acceptance;
11. only after explicit acceptance start Phase 14.

## 10. Final media replacement rules

- Hero imagery is required across public page families.
- Project detail continues to use canonical project covers unless the user supplies replacements.
- Service-detail temporary media can be replaced independently per service.
- Article covers must be replaced independently per published article.
- No layout redesign is required merely to swap media.
- Keep crop-safe focal points for both desktop and mobile.
- Do not embed essential text inside the image.
- Final assets must be optimized before production; current temporary editorial files are architecture placeholders only.

## 11. Required final validation matrix

Before Phase 13B can close, review:
- 360
- 390
- 768
- 1024
- 1366
- 1440

For:
- Arabic RTL
- English LTR

Include:
- Home;
- directories;
- service detail;
- portfolio/project detail;
- About/Process;
- Contact/Planner;
- FAQ;
- Insights + a published Article;
- Careers;
- legal pages.

Check:
- hierarchy;
- Hero image crop/focal point;
- section spacing;
- header/footer density;
- button hierarchy;
- card/surface consistency;
- long-form article readability;
- mobile editing;
- no horizontal overflow;
- no generic AI/template feel;
- metadata/social image resolution.

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

Canonical current state:
- service and project data remain centralized in their canonical records;
- general FAQ content is bilingual;
- Insights now has published bilingual decision-support articles;
- Careers has no invented opening and remains publication-state driven;
- privacy/terms reflect the verified current runtime behavior;
- article/job route generation is data-driven.

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
