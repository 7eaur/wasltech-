# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official/legacy branch: `main`  
Current live `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified VNext implementation HEAD: `b25851ff2e26252e3dfe84518037055543e6b224`

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

## Active phase

### Phase 2B — Content Architecture & Evidence Completion
**ACTIVE**

Why this phase was added:
after Phase 2, the user explicitly clarified that legacy content must **not** be treated as sufficient just because it exists. The site should use the complete information a strong service/portfolio/SEO experience actually needs, and the user will provide missing real facts/assets when necessary.

Gap audit found:

Services currently have:
- title;
- subtitle;
- description;
- audiences;
- deliverables/features;
- service process;
- FAQ;
- CTA;
- primary image.

Still incomplete as final VNext content:
- explicit customer problem/need;
- clear scope boundaries;
- integrations/capabilities;
- proof/evidence model;
- entity-specific SEO/search intent;
- related article topics;
- reviewed English copy.

Projects use a simplified presentation model:
- title;
- category;
- exactly one primary image;
- summary;
- highlights;
- related service;
- platform/type;
- case-study overview/context/contribution/scope/delivered outputs;
- SEO draft.

Remaining project content work:
- public client attribution only where useful;
- final Arabic editorial review;
- reviewed English copy.

Evidence:
`docs/qa/2026-09-21_phase-2b_content-gap-audit.md`

### Phase 2B editorial rewrite batch — verified

Completed in this batch:
- rewrote the Arabic core messaging for Home, About, Services, Portfolio, Process, Contact, Start Project, FAQ, Insights, Careers and 404;
- rewrote the core value proposition + CTA layer for all 8 services;
- retained service/project facts while replacing generic Legacy-style marketing phrasing;
- applied the editorial pattern: page/service job → customer need → value message → next action;
- used the SATR audit only as a structural/writing benchmark, with original Wasl Tech wording.

Verification:
- page-copy safety/fix commit: `f25f7dd3bf615c3ecb80800f8f3bda94e45d8e5e` — SUCCESS;
- service-copy commit: `3b899ada38f273ecc9dcdd1c20165663a6f78105`;
- workflow: `VNext verify`;
- run: `35554359258`;
- result: **SUCCESS**.

The copy remains `draft` until the deeper service-detail/project-detail editorial pass is completed.

### Phase 2B implementation batch — verified

Implemented:
- `src/data/content-contracts.js` with completeness states and explicit authoring policy;
- `src/data/pages.js` as canonical page-level content owner;
- service and project field-state/evidence metadata;
- verified Instagram contact in site config;
- extended data integrity checks for Phase 2B contracts;
- Legacy/VNext authoring separation: **Legacy = evidence only; VNext copy = newly authored**;
- migrated Arabic service/project copy reclassified as `draft`, not final/ready.

Verification:
- workflow: `VNext verify`
- run: `35553980138`
- SHA: `4c1c3ba07924d5a99ce827eae060a7923663da1d`
- result: **SUCCESS**

Editorial rule now enforced:
**Evidence → User need → Message hierarchy → New copy → Fact check → UX review**


## Exact next actions

1. Extend the final service/project schemas in code.
2. Classify fields as `READY / PARTIAL / CONTENT REQUIRED / NOT VERIFIED / NOT APPLICABLE`.
3. Create canonical page-level content owners for Home/About/Services/Portfolio/Process/Contact/Start Project/FAQ/Insights/Careers/Privacy/Terms/404.
4. Recover any missing facts/assets that can be proven from the repository.
5. Build a prioritized missing-input list.
6. Ask the user only for meaningful facts/assets that cannot be recovered.
7. Draft the final Arabic content professionally from verified facts.
8. Prepare English copy only after facts are stable.
9. Add SEO title/meta/search-intent/internal-link fields.
10. Extend integrity checks and verify.
11. Close Phase 2B.
12. Then continue to Phase 3 — Design Tokens & Shared Primitives.

## Phase 2B rules

- legacy content = evidence/baseline only, never the default wording source;
- preserve verified facts, identities, scope evidence and assets; rewrite presentation copy from scratch for VNext;
- migrated Arabic content remains `draft` until editorial review;
- ask the user for facts/evidence, not finished marketing copy;
- the implementation team writes final Arabic/English copy;
- do not invent project results, clients, prices, timelines or SLAs;
- no generic SEO filler;
- missing values stay explicit;
- final design must be tested against realistic content lengths;
- do not start final Homepage composition before Phase 2B closes.

## Production separation

VNext is **not production**.

Do not merge/cut over or alter production routing until the final release phase.
