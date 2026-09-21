# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official/legacy branch: `main`  
Current live `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified VNext implementation HEAD: `b1b2e14968dd5e9fc2f33405e5f106b547ac24c4`

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
**ACTIVE**

Scope:
- Header;
- primary navigation;
- mobile drawer behavior;
- locale switch;
- Footer;
- route-family active state;
- keyboard/focus behavior;
- responsive shell verification.

Do not begin Homepage composition until this phase passes its gate.

## Production separation

VNext is **not production**.

Do not merge/cut over or alter production routing until the final release phase.
