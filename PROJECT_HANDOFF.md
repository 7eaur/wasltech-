# Wasl Tech VNext — Conversation Handoff

## 2026-09-25 — AUTHORITATIVE SEO RESUME POINT

Use this section first for search-visibility work. It supersedes older SEO/search next-action notes.

### Resume source of truth
- Repository: `7eaur/wasltech-`
- Production branch: `main`
- SEO work branch: `seo/search-visibility-foundation-20260925`
- Draft PR: `#37`
- Main checkpoint merged into SEO branch: `427e8bc5939f8bb4f0051fc3a3d562f646a0c0da`
- Merge checkpoint: `409a5ee31e49b9a1119884c9475b059bec548a41`
- Read `docs/core/SEARCH_VISIBILITY.md` and `docs/research/SEARCH_INTENT_MAP_2026-09-25.md` before search changes.

### Completed
- SEO/AI search governance standard.
- Production search visibility CI gate.
- OAI-SearchBot production allowance.
- bilingual canonical/hreflang/sitemap/robots validation.
- title/description/H1/OG/Twitter validation.
- internal indexable-route reachability validation.
- canonical Organization/WebSite entity graph.
- service/CreativeWork/Article/Job structured-data relationships.
- global Footer links to privacy/terms.
- eight-service topic ownership map.
- current main subservices reconciled into the SEO branch.
- service → project and service → published article internal linking.

### Active phase
**Phase 9 — Webmaster integrations & measurement — publication dependent.**

Phases 5–8 are complete on the website side. Phase 8 passed Preview + Release verification in run `36069375128`.

Phase 9 is pre-publication ready:
- `docs/core/WEBMASTER_MEASUREMENT.md`
- `npm run vnext:check:production-search`

Do not create separate indexable subservice pages by default. Current subservices are sections of their parent service. Dedicated URLs require distinct search intent plus substantial unique evidence/content.

### Publication rule
The user will connect `www.wasl-tech.com` as the primary domain at publication. Until that point, do not diagnose the old/current external domain as the final VNext search state. At publication verify the real domain, redirects, robots, sitemap, canonical/hreflang, crawler access and webmaster submission.

### Safety / release
- PR remains draft.
- Do not merge SEO changes into `main` without explicit approval.
- Do not manually publish production.
- Re-fetch `main` before merge because parallel project work may continue.


## 2026-09-24 — AUTHORITATIVE RESUME POINT

Use this section first in a new conversation. It supersedes the older “Immediate baton” and historical pending-media instructions below.

### Source of truth
1. Fetch live GitHub repository `7eaur/wasltech-`.
2. Active work branch: `rebuild/vnext-foundation-20260921`.
3. Production branch: `main`; do not merge or cut over without explicit approval.
4. Implementation HEAD at handoff time: `93b7fc58f104da20a1818ad7e9ff4147922d37ce`.
5. Read:
   - `PROJECT_STATUS.md`
   - this file
   - `docs/qa/2026-09-24_final-conversation-handoff.md`
   - `docs/core/CONTENT_IA.md`
   - `docs/core/DESIGN_SYSTEM.md`
   - `docs/qa/FINAL_MEDIA_INVENTORY.md`

### Current project state
- Final marketing rewrite source is adopted from:
  `b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md`.
- No public packages or prices.
- Home/Services/About/Process/Portfolio/Contact/Planner/core FAQ and all 8 service records are aligned to the outcome-led copy in Arabic/English.
- Home mobile Hero: copy → image → actions → signals.
- Inner-page Hero actions are removed.
- Typography/card hierarchy has been rebalanced for mobile and desktop.
- Footer contacts are text-only, compact rows; social icons remain.
- About page was rebuilt around story → vision/mission → principles → what we build → final CTA.
- All 8 service originals + WebP derivatives are committed and wired.
- Home Hero + About media are committed and wired.
- Shared reusable `MediaCard` and `CallToAction` contracts are part of current live code; do not recreate page-specific duplicates without a real need.

### Verification
- VNext verify: `36052391480` — SUCCESS
- Route matrix: `36052391498` — SUCCESS
- Preview deployment: `dpl_8j8ebNEuqtSW2kp9UMLpj8hFoz5K` — READY
- Preview: `https://wasltech-472tnx2s9-wasl15.vercel.app`
- Production `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc` and unchanged by VNext runtime.

### Do not redo
- service image upload/mapping;
- Home/About media upload;
- Footer contact redesign;
- general responsive typography foundation;
- About rewrite;
- final marketing rewrite adoption;
- Hero mobile ordering;
- removal of inner-Hero buttons;
- MediaCard/CTA shared-component refactor;
unless live HEAD proves a regression.

### What to do next
- Start by verifying live HEAD because it may be newer than this handoff.
- Inspect the latest preview visually before changing design.
- Continue from the user's next explicit feedback.
- If changing design/content substantially: batch edits, run VNext verify, then full route matrix at review point.
- Do not manually deploy on every commit; Git integration can auto-create previews.
- If the user says `انشر`, confirm the target branch/HEAD and verify Vercel reaches `READY`.


## 2026-09-24 — Final marketing rewrite alignment
- Canonical content source: `b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md`.
- Adopted the no-packages/no-pricing marketing baseline across Home, Services, all eight service records, About, Process, and FAQ in Arabic and English.
- Final Home journey: Hero → Services → Work/Trust → About → Process → FAQ → Final CTA.
- Service-detail order: need/problem → audience → deliverables → scope-dependent constraints → process → related work → FAQ → CTA.
- No unverified counters, testimonials, or numerical outcome claims were introduced.

## 2026-09-24 — Canonical marketing content baseline
Source of truth for the new marketing voice:
- source commit: `b87872d12adcc836018fe61a7ef1556f04aa5b86`
- file: `إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md`
- the file has been copied unchanged into the active VNext branch for future reference.

Implementation state:
- canonical page copy updated for Home, Services, About, Portfolio, Process, Contact, and Project Planner;
- all eight service records updated with outcome-led positioning, problem/need, scope, deliverables, and CTA copy;
- FAQ decision-support wording updated;
- Home trust signals, Why Wasl Tech, and six-step process updated;
- no packages or public pricing introduced;
- no unverified metrics or testimonials introduced;
- keep project outcome claims limited to what existing project records actually establish;
- do not revert to generic CTAs such as “تعرف أكثر / المزيد / ابدأ الآن” where a contextual CTA is available.

Production remains `main`; do not cut over without explicit user approval.


## 2026-09-24 — Footer, typography, and About refresh
- Footer contact details are compact text rows without contact icons; social links remain unchanged.
- Site-wide text flow now uses available layout width more naturally across mobile and desktop instead of narrow fixed heading measures.
- About page content and IA refreshed around: story, vision, mission, principles, what we build, and final CTA.
- About copy is adapted from the legacy Wasl Tech About direction and reviewed reference patterns, while keeping Wasl Tech's own brand voice and current scope.
- No production cutover or merge to main.

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

## 0. Historical baton — superseded
The older baton below originally described pending service-media work. That work is now complete. Use **AUTHORITATIVE RESUME POINT** at the top of this file and `docs/qa/2026-09-24_final-conversation-handoff.md`.

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
