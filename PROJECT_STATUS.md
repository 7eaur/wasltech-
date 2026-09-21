# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official/legacy branch: `main`  
Current live `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified VNext implementation HEAD: `3942c6da3ad0cc8e435324bbe195909b09972493`

## Current state

**VNext clean rebuild is ACTIVE.**

The published website remains the legacy/current implementation from `main`. VNext is developed separately and must not replace production until the final cutover gates pass.

Current verified Vercel production:
- project: `wasltech`
- deployment: `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9`
- state: **READY**
- target: **production**
- Git branch: `main`
- Git SHA: `a4ed507defe5e7831f3459e12752a89fe0d225fc`
- alias: `wasltech.vercel.app`

That `main` commit added VNext documentation only and did **not** replace the legacy runtime implementation.

VNext branch deployments/previews must never be confused with production.

## Why VNext exists

The project deliberately moved away from repeatedly patching the existing site.

VNext is a clean architecture rebuild with:
- build-time static multipage output;
- Node 24;
- minimal runtime JavaScript;
- centralized config/data;
- reusable components/templates;
- Arabic default at `/`;
- English under `/en/`;
- generated service/project/article/job routes;
- SEO as a build-time concern;
- strict content integrity and no invented claims.

The legacy published site remains useful as evidence for verified content/assets/behavior, but it is **not** the architecture to continue patching.

## Reference hierarchy

### 1. Wasl Tech identity — authoritative
Use only the original identity/assets in this repository:
- `assets/brand/wasl-tech-horizontal.svg`
- `assets/brand/wasl-tech-horizontal-white.svg`
- `assets/brand/favicon.svg`

Locked:
- IBM Plex Sans Arabic / IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- approved Navy/Teal scales + supporting neutral palette.

### 2. Current published Wasl site — evidence/reference
Use it to recover:
- verified business facts and operating behavior;
- current service/project identities and factual scope evidence;
- real images/assets;
- current contact behavior;
- existing public expectations.

**Do not treat Legacy wording as canonical VNext copy.** Old headings, descriptions, CTAs, FAQ wording and section order are evidence/context only unless deliberately rewritten and approved.

Do not copy its legacy CSS/JS architecture into VNext.

### 3. UPDATE CARD — craft reference only
Repository:
`7eaur/update_card`

Use it for:
- design discipline;
- compact density;
- spacing;
- controlled surfaces;
- restrained shadows/radii;
- image-led storytelling;
- intentional mobile composition;
- shared component contracts.

Do **not** copy its branding, colors, content or literal layout.

### 4. SATR Technology — structural/writing benchmark only
Public reference:
`https://satr-tec.com/`

Canonical audit:
`docs/research/SATR_TEC_COMPETITOR_AUDIT_2026-09-21.md`

Use it for:
- page purpose;
- hero/page sequencing;
- service-detail depth;
- case-study storytelling;
- project-planner structure;
- content hierarchy;
- writing/microcopy lessons;
- SEO/content architecture ideas.

Do **not** copy its text, brand, images, code or literal visual design.

## Completed

### Phase 0 — Canonical Foundation
**COMPLETE**

Canonical docs, status/handoff protocol and operating rules established.

### Phase 1 — Build System & Repository Skeleton
**COMPLETE**

Implemented:
- Node 24 ESM build-time static pipeline;
- centralized config/component/template foundation;
- separated VNext CSS layers;
- minimal navigation runtime;
- generated noindex preview routes;
- VNext CI workflow.

Original Phase 1 evidence:
- run: `35543509588`
- SHA: `e18e906817b1550a4ccaa56e438e0187340b6524`
- result: **SUCCESS**

### Brand + Bilingual + SEO Architecture Freeze
**COMPLETE**

Locked:
- original Wasl brand assets;
- bilingual IBM Plex typography;
- official palette + semantic tokens;
- Arabic `/`, English `/en/`;
- stable shared entity slugs;
- service/project/article/job route builders;
- Insights, Careers, Privacy, Terms, FAQ and Start Project surfaces;
- SEO-first canonical/hreflang/sitemap/robots/structured-data direction;
- automated brand/locale/route guards.

### Phase 2 — Bilingual Data & Content Normalization
**COMPLETE**

Normalized:
- 8 official services → `src/data/services.js`;
- 14 verified projects → `src/data/projects.js`;
- 13 general FAQ items / 4 groups → `src/data/faq.js`;
- article contract → `src/data/articles.js`;
- careers contract → `src/data/jobs.js`;
- data integrity checks → `scripts/check-data.mjs`.

Final Phase 2 evidence:
- workflow: `VNext verify`
- run: `35552059884`
- SHA: `b7412a4a5143404a9169857b4ef844a7765cfa83`
- result: **SUCCESS**
- `Services: 8 | Projects: 14 | FAQ: 13 | Articles: 0 | Jobs: 0`

QA:
`docs/qa/2026-09-21_phase-2_data-normalization.md`

## Phase 2B — Content Architecture & Evidence Completion
**COMPLETE**

The content baseline is now ready for design work.

Completed:
- original Arabic VNext copy for public pages, all 8 services, all 14 projects and general FAQ;
- reviewed English copy for the same public content;
- 14-project model locked to one primary image + project story;
- service decision copy, deliverables, process, FAQ, constraints and topic planning;
- project context, contribution, scope and delivered outputs;
- Arabic + English SEO titles/descriptions;
- service Open Graph copy;
- Arabic `/` + English `/en/` route architecture;
- locale-aware Header/Footer/navigation foundation;
- canonical, hreflang and x-default helpers;
- Open Graph + Twitter metadata support;
- Organization/WebSite and reusable Service/FAQ/Breadcrumb/CreativeWork structured-data builders;
- preview robots protection;
- sitemap/production robots renderers;
- CI guards for bilingual content and SEO output.

Intentional deferrals:
- Privacy and Terms remain `CONTENT REQUIRED` until form, analytics/cookie and third-party behavior is final;
- Insights has an honest empty state until real articles are authored;
- Careers has an honest empty state until a real role exists.

Verification:
- workflow: `VNext verify`
- run: `35557088166`
- SHA: `6f0863a1b4a8490522c6df41e9b3be896432dcc0`
- result: **SUCCESS**
- Build: **PASS**
- Structure: **PASS**
- Data: **PASS**

### Next phase — Phase 3: Design Tokens & Shared Primitives

Phase 3 is ready to start, but final page composition has not started yet.

The next implementation work is:
- refine semantic design tokens;
- spacing and layout primitives;
- bilingual typography behavior;
- buttons, links and form primitives;
- card/media contracts;
- focus/accessibility states;
- responsive primitives;
- component showcase review on desktop + mobile.

The original Wasl Tech identity remains authoritative, and the approved content/data layer must be consumed rather than duplicated in page markup.

## Phase 3 — Design Tokens & Shared Primitives
**COMPLETE**

Completed:
- canonical design token grammar and semantic color roles;
- bilingual typography hierarchy;
- responsive layout primitives;
- buttons/links/cards/forms/media primitives;
- focus-visible + reduced-motion baseline;
- bilingual internal component showcase;
- shared ActionLink / SurfaceCard / FormField / MediaFrame components;
- CSS custom-property integrity guard;
- real Chromium review at 1440 and 390 for Arabic and English;
- no horizontal overflow;
- RTL/LTR correct;
- mobile touch/control targets normalized to 46px;
- mobile header CTA conflict discovered visually and fixed.

Verification:
- final branch HEAD: `b1b2e14968dd5e9fc2f33405e5f106b547ac24c4`
- workflow run: `35559468184`
- result: **SUCCESS**
- final input-height design SHA `0d97f4930059052d695706d0998fdb9658e76765`
- run `35559252091`: **SUCCESS**

Exact IBM Plex glyph rendering remains a later live-preview confirmation item because local environment could not load the binary font files, but the canonical font contract is unchanged.

## Phase 4 — Shared Shell
**COMPLETE**

Completed:
- route-family-aware primary navigation;
- bilingual Header and Footer;
- language switch preserving route identity;
- reusable header project CTA;
- responsive mobile navigation drawer;
- accessible open/close labels;
- animated menu icon without decorative excess;
- Escape handling with focus return;
- outside-click close behavior;
- desktop-resize close behavior;
- mobile active-state treatment;
- four-column desktop Footer with responsive collapse;
- dedicated `check-shell.mjs` gate;
- ready public shell routes generated for Arabic and English.

Visual verification:
- Arabic desktop: 1440px;
- Arabic mobile: 390px;
- English desktop: 1440px;
- English mobile: 390px;
- open mobile navigation reviewed in both locales;
- no horizontal overflow;
- mobile navigation width: 366px at 390px viewport;
- mobile header CTA hidden correctly;
- active navigation verified for Services in Arabic and English;
- Footer responsive behavior verified.

Interaction verification:
- menu open/close state: PASS;
- `aria-expanded`: PASS;
- localized `aria-label` open/close: PASS;
- Escape closes + restores focus: PASS;
- outside pointer closes: PASS;
- resize to desktop closes: PASS.

Verification:
- workflow: `VNext verify`
- run: `35562217299`
- SHA: `c2640be27fb76dca4232c134df86ff1d0269d496`
- result: **SUCCESS**
- Build: PASS
- Structure: PASS
- Shared Shell Gate: PASS
- Data: PASS

### Next phase — Phase 5: Homepage

Phase 5 is ready but **not started**.

Do not compose the Homepage until the next explicit continuation point.

## Phase 5 — Homepage
**COMPLETE**

Implemented:
- canonical bilingual Homepage at `/` and `/en/`;
- editorial Hero with one clear promise and two actions;
- three service-decision paths instead of an eight-card wall;
- selected real work using canonical project records and project images;
- approach section built as editorial principles, not icon cards;
- four-step process summary;
- three decision-support FAQ items;
- final project CTA;
- dedicated `home.css`;
- dedicated `check-home.mjs`;
- portfolio assets copied into the build;
- intrinsic dimensions for featured project images to reduce CLS;
- project images lazy-loaded because Home LCP is text-led.

Visual review completed:
- Arabic desktop 1440px;
- Arabic mobile 390px;
- English desktop 1440px;
- English mobile 390px;
- no horizontal overflow;
- RTL/LTR hierarchy reviewed;
- featured work image crops reviewed;
- mobile section stacking reviewed;
- Hero density reviewed in both locales.

Verification:
- workflow: `VNext verify`
- run: `35562768516`
- SHA: `eae58343daa539e295ce209b3bb442fc0e14647d`
- result: **SUCCESS**
- Build: PASS
- Structure: PASS
- Shared Shell Gate: PASS
- Homepage Gate: PASS
- Data: PASS

### Next phase — Phase 6: Services Directory

Ready to start.

## Phase 6 — Services Directory
**COMPLETE**

Implemented:
- canonical bilingual Services Directory;
- all 8 services grouped into the 3 approved families;
- decision-led service rows instead of equal generic cards;
- problem/need and scope summary exposed for comparison;
- canonical links prepared for service detail routes;
- dedicated `services.css`;
- dedicated `check-services.mjs`;
- Services route removed from the placeholder build.

Visual review:
- Arabic desktop 1440px;
- Arabic mobile 390px;
- English desktop 1440px;
- English mobile 390px;
- no horizontal overflow;
- all 8 services visible in both locales;
- service-family hierarchy retained on mobile;
- desktop comparison density reviewed;
- long English content remained readable without taxonomy loss.

Verification:
- workflow: `VNext verify`
- run: `35567035544`
- SHA: `054113b9bb2e7d3c832129a56a75894cf6102227`
- result: **SUCCESS**
- Build: PASS
- Structure: PASS
- Shell: PASS
- Home: PASS
- Services Directory: PASS
- Data: PASS

### Next phase — Phase 7: Service Detail System

Ready to start.

## Phase 7 — Service Detail System
**COMPLETE**

Implemented:
- one reusable bilingual service-detail architecture;
- all 8 services rendered from canonical data;
- 16 generated detail routes;
- Breadcrumb → Hero → problem/scope → service signals → audience → deliverables → verified proof → process → FAQ → constraints → CTA;
- Service, BreadcrumbList and FAQPage structured data;
- related proof only when verified projects exist;
- no project-detail links before Phase 8;
- dedicated `service-detail.css`;
- dedicated `check-service-details.mjs`.

Representative visual review:
- Web service: Arabic/English desktop + mobile;
- Technical Solutions: Arabic/English desktop + mobile;
- proof-present and proof-absent states reviewed;
- no horizontal overflow;
- long content remained structured;
- RTL/LTR reviewed.

Verification:
- workflow: `VNext verify`
- run: `35567508172`
- SHA: `1b3ec7fe20c03ab8f3a00887d7ccea4decd7a8f3`
- result: **SUCCESS**
- 16 detail routes: PASS
- structured data: PASS
- distinct service content: PASS
- related proof visibility: PASS
- no future project-detail links: PASS

### Next phase — Phase 8: Portfolio & Case-study Foundation

Ready to start.

## Phase 8 — Portfolio & Case-study Foundation
**COMPLETE**

Implemented:
- bilingual Portfolio directory;
- 14 canonical projects;
- 5 filters derived from real categories only;
- progressive-enhancement filtering with aria-pressed state;
- one primary image per project;
- one reusable case-study architecture;
- 28 localized project detail routes;
- project context, contribution, scope and delivered outputs;
- related services;
- related projects from real category relationships;
- CreativeWork + Breadcrumb structured data;
- canonical SEO and social metadata;
- dedicated `portfolio.css` and `project-detail.css`;
- dedicated Portfolio and Project Detail gates.

Project presentation stays intentionally free of:
- year;
- live/public project URL;
- technology stack;
- gallery/additional project images.

Filter verification in both locales:
- all: 14;
- web/systems: 6;
- apps: 2;
- e-commerce: 3;
- brand identity: 2;
- marketing: 1.

Visual review:
- Portfolio Arabic/English at 1440 and 390;
- no horizontal overflow;
- all 14 projects visible by default;
- filter interaction reviewed;
- Arabic Wasl Freelance case study reviewed desktop/mobile;
- English Al Malaki Brand Identity case study reviewed desktop/mobile;
- one-image case-study layout preserved;
- related service/project sections reviewed.

Verification:
- workflow: `VNext verify`
- run: `35568080827`
- SHA: `5b29dba17ca789a31512c3788ee8e388b40d9346`
- result: **SUCCESS**
- Portfolio Gate: PASS
- Project Detail Gate: PASS
- 28 localized detail routes: PASS
- structured data: PASS
- all earlier gates remained green.

### Next phase — Phase 9: About + Process

Ready to start.

## Phase 9 — About + Process
**COMPLETE**

Implemented:
- canonical bilingual About page;
- canonical bilingual Process page;
- About focused on operating philosophy, what Wasl combines, decision principles and Yemen + Gulf market;
- Process focused on four execution phases and what becomes clearer after each phase;
- no duplicated filler between the two pages;
- no invented timeline promises;
- dedicated shared `about-process.css`;
- dedicated `check-about-process.mjs`.

Visual review:
- About Arabic/English desktop + mobile;
- Process Arabic/English desktop + mobile;
- no horizontal overflow;
- About retained editorial/positioning character;
- Process retained sequential execution character;
- RTL/LTR hierarchy reviewed.

Verification:
- workflow: `VNext verify`
- run: `35568496733`
- SHA: `3942c6da3ad0cc8e435324bbe195909b09972493`
- result: **SUCCESS**
- About/Process Gate: PASS
- all previous gates remained green.

### Next phase — Phase 10: Project Planner + Contact

Ready to start.

## Production separation

VNext is **not production**.

Do not merge/cut over or alter production routing until the final release phase.
