# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official/legacy branch: `main`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified implementation HEAD: `054113b9bb2e7d3c832129a56a75894cf6102227`

## 1. Start procedure — mandatory

A new conversation must:

1. fetch live `main`;
2. fetch live `rebuild/vnext-foundation-20260921`;
3. read `PROJECT_STATUS.md`;
4. read this file;
5. read `AGENTS.md`;
6. read `docs/README.md`;
7. read relevant canonical core docs only;
8. read the SATR audit only when structural/writing reference is needed;
9. begin Phase 3 from the verified Phase 2B baseline without repeating completed content work.

Live repository/code/tests override stale text or chat memory.

## 2. Understand the two branches correctly

### `main`
This is the official/legacy branch and the source of the currently published website.

At this handoff:
`main = a4ed507defe5e7831f3459e12752a89fe0d225fc`

Verified Vercel production:
- deployment: `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9`
- state: READY
- target: production
- alias: `wasltech.vercel.app`
- source: `main@a4ed507...`

That commit added VNext documentation only; the public runtime remains the existing legacy site.

Use the published/legacy implementation as evidence for verified **facts**, assets, images, service/project identity, scope clues and behavior.

Do **not** use Legacy wording as the default copy source. Headings, descriptions, CTAs, FAQ wording and section order must be rewritten for VNext unless there is a deliberate reason to preserve a specific phrase.

Do **not** continue VNext by patching its legacy CSS/JS.

### `rebuild/vnext-foundation-20260921`
This is the clean VNext rebuild branch.

It contains:
- new build system;
- canonical identity/config;
- bilingual route architecture;
- normalized data;
- CI/data guards;
- Phase 2B content architecture work.

VNext preview deployments may exist on Vercel but are not production.

## 3. Why we moved to this architecture

The user explicitly rejected continuing with repeated visual/legacy patches.

The direction became:
- clean architecture;
- reusable components;
- centralized data;
- Arabic + English from the foundation;
- strong search-engine architecture;
- service/project/article pages generated from data;
- exact content/evidence ownership;
- no duplicated per-page content;
- no invented claims;
- future services/projects can be added as records instead of copied pages.

Later, after Phase 2 normalized the old data, the user clarified two things:

1. **do not stop at the data that already exists; define what a strong site actually needs and ask for missing real facts/assets when important.**
2. **do not migrate all Legacy text as-is; preserve the important verified facts, then write improved, original, marketing-aware and easy-to-use VNext copy.**

That decision created **Phase 2B — Content Architecture & Evidence Completion** before final visual composition.

## 4. Identity and visual references

### Wasl Tech — Source of Truth
Use original Wasl assets:
- `assets/brand/wasl-tech-horizontal.svg`
- `assets/brand/wasl-tech-horizontal-white.svg`
- `assets/brand/favicon.svg`

Locked:
- IBM Plex Sans Arabic;
- IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- existing approved Navy/Teal scales;
- cool supporting neutral palette.

Do not redesign the logo or replace fonts/colors casually.

### UPDATE CARD — craft benchmark
Repository:
`7eaur/update_card`

Use its lessons for:
- polish;
- compact density;
- spacing;
- controlled surfaces;
- restrained radii/shadows;
- image-led composition;
- mobile editing;
- reusable component discipline.

Never copy its brand/content/literal layout.

### SATR Technology — structure/writing benchmark
Reference:
`https://satr-tec.com/`

Canonical audit:
`docs/research/SATR_TEC_COMPETITOR_AUDIT_2026-09-21.md`

Use for:
- page hierarchy;
- Hero purpose;
- section sequencing;
- service-detail depth;
- case-study storytelling;
- planner funnel;
- editorial copy structure;
- microcopy;
- content/SEO ideas.

Never copy SATR text, images, code, brand or literal design.

## 5. Architecture already locked

- build-time static multipage;
- Node 24;
- minimal browser JS;
- Arabic default at `/`;
- English under `/en/`;
- shared entity ids/slugs;
- one entity record with localized `content.ar` / `content.en`;
- generated service/project/article/job routes;
- crawlable HTML;
- SEO generated/validated by build;
- no runtime frontend framework by default.

Canonical routes include:
Home, About, Services, Service Detail, Portfolio, Project Detail, Process, Contact, Start Project, FAQ, Insights, Article, Careers, Job, Privacy, Terms and 404, mirrored under `/en/`.

## 6. Completed work

### Phase 0
Canonical documentation/handoff system complete.

### Phase 1
Build/repository foundation complete.

### Brand + bilingual + SEO freeze
Complete:
- `src/config/brand.js`
- `src/config/locales.js`
- `src/config/routes.js`
- `src/styles/tokens.css`
- `src/styles/brand.css`
- `src/styles/typography.css`
- brand/locale/route CI guards.

### Phase 2
Complete:
- 8 services → `src/data/services.js`
- 14 projects → `src/data/projects.js`
- 13 FAQ / 4 groups → `src/data/faq.js`
- article contract → `src/data/articles.js`
- careers contract → `src/data/jobs.js`
- data guard → `scripts/check-data.mjs`

Verified:
- run `35552059884`
- SHA `b7412a4a5143404a9169857b4ef844a7765cfa83`
- SUCCESS
- `Services: 8 | Projects: 14 | FAQ: 13 | Articles: 0 | Jobs: 0`

## 7. Phase 2B — COMPLETE

The bilingual content and SEO foundation is verified.

Ready:
- public page copy in Arabic and English;
- all 8 service records in Arabic and English;
- all 14 project records in Arabic and English;
- general FAQ in Arabic and English;
- project stories use one primary image only;
- Arabic/English SEO metadata;
- locale-aware route/navigation/document foundations;
- canonical/hreflang/x-default support;
- Open Graph/Twitter support;
- structured-data builders;
- safe preview robots behavior and sitemap/production robots renderers;
- content/SEO integrity guards.

Privacy and Terms intentionally remain `CONTENT REQUIRED` until final implementation behavior is known. They are not to be filled with generic legal text.

Verified:
- run `35557088166`
- SHA `6f0863a1b4a8490522c6df41e9b3be896432dcc0`
- result **SUCCESS**

## 8. Exact next work — Phase 3

Build the shared design grammar before composing final pages:
1. audit/refine semantic tokens against the approved Wasl identity;
2. spacing, container and layout primitives;
3. Arabic/LTR typography scale and reading behavior;
4. buttons, links, focus states and form primitives;
5. cards/media/image contracts;
6. reusable surfaces and section primitives;
7. reduced-motion/accessibility baseline;
8. static component showcase;
9. review at mobile and desktop breakpoints;
10. verify and document Phase 3 before Shared Shell.

Do not start Homepage composition before Phase 3 and Phase 4 gates pass.

## 8A. Phase 3 — COMPLETE

Design primitives and visual review are complete.

Final verification:
- HEAD `b1b2e14968dd5e9fc2f33405e5f106b547ac24c4`
- run `35559468184`
- SUCCESS.

Visual review:
- Arabic/English;
- 1440 desktop / 390 mobile;
- no overflow;
- RTL/LTR correct;
- mobile control targets normalized;
- actual visual defect in header CTA behavior found and fixed.

IBM Plex exact glyph rendering should be re-confirmed on a real networked preview later; it does not reopen the primitive/layout gate.

## 8B. Phase 4 Shared Shell — COMPLETE

Verified implementation:
- HEAD `c2640be27fb76dca4232c134df86ff1d0269d496`
- run `35562217299`
- SUCCESS.

Completed:
- route-family active navigation;
- localized menu open/close labeling;
- Escape / outside-click / resize handling;
- focus return to menu toggle;
- bilingual route-preserving language switch;
- mobile menu icon and full-width drawer;
- reusable Header CTA;
- bilingual Footer IA;
- dedicated shared-shell CI gate.

Visual review:
- Arabic + English;
- 1440 desktop / 390 mobile;
- mobile drawer open in both locales;
- no overflow;
- mobile CTA hidden;
- active state correct;
- Footer responsive collapse correct.

## 8C. Exact next work — Phase 5 Homepage

Do not start until the next explicit continuation point.

When started:
1. consume canonical Home content from `src/data/pages.js`;
2. define one strong homepage narrative, not a card wall;
3. compose Hero → service discovery → proof/work → approach → process → FAQ support → final CTA;
4. use real project/service data rather than duplicated page copy;
5. review Arabic desktop/mobile first;
6. review English desktop/mobile;
7. fix hierarchy/cropping/density from root cause;
8. verify SEO and shell contracts remain intact;
9. document Phase 5 before Services Directory.

## 8D. Phase 5 Homepage — COMPLETE

Verified:
- HEAD `eae58343daa539e295ce209b3bb442fc0e14647d`
- run `35562768516`
- SUCCESS.

Home now consumes canonical page/service/project/FAQ data and contains no duplicated marketing data in the build layer.

Composition:
- text-led Hero;
- three service-decision paths;
- selected real work;
- approach principles;
- four-step process;
- focused FAQ;
- final CTA.

Visual review:
- Arabic + English;
- 1440 desktop / 390 mobile;
- no horizontal overflow;
- RTL/LTR reviewed;
- image crops reviewed;
- mobile stacking reviewed.

Performance detail:
- featured project images use their intrinsic dimensions;
- project images are lazy-loaded;
- Hero remains text-led, avoiding an unnecessary LCP image.

## 8E. Exact next work — Phase 6 Services Directory

1. consume canonical Services page content and 8 canonical service records;
2. keep the three service groups as the information architecture;
3. avoid eight equal generic cards;
4. make each service easy to compare by need, value and next action;
5. use service imagery only when it adds clarity;
6. review Arabic desktop/mobile first;
7. review English desktop/mobile;
8. verify SEO/shell/home contracts remain intact;
9. document Phase 6 before service detail pages.

## 8F. Phase 6 Services Directory — COMPLETE

Verified:
- HEAD `054113b9bb2e7d3c832129a56a75894cf6102227`
- run `35567035544`
- SUCCESS.

Directory behavior:
- 3 canonical service families;
- 8 canonical services;
- decision-led rows;
- no duplicated service business content;
- Arabic + English visual review at 1440 / 390;
- no horizontal overflow.

## 8G. Exact next work — Phase 7 Service Detail System

1. build one reusable service-detail architecture;
2. render all 8 services from `src/data/services.js`;
3. consume title/subtitle/description/decision/audiences/deliverables/process/FAQ/constraints/CTA/SEO;
4. surface related verified projects only where they exist;
5. use one template system without flattening distinct service content;
6. add Service structured data and breadcrumb data;
7. generate all Arabic + English service detail routes;
8. verify every detail link resolves;
9. review representative short/long services on desktop/mobile;
10. document Phase 7 before Portfolio.

## 9. Non-negotiable rules

- Legacy remains evidence only, not a wording or architecture source.
- Arabic and English share one entity identity and stable slug.
- Do not duplicate localized content inside templates.
- Every project uses exactly one primary image.
- Do not invent metrics, results, clients, prices, timelines, SLAs or legal claims.
- Incomplete locales/legal pages must remain non-indexable/unpublished.
- Search metadata must stay tied to canonical content and route identities.
- No copied SATR wording/design and no copied UPDATE CARD branding/layout.
- No production cutover before the final release phase.
- Fix root causes; do not build a patch pile.
