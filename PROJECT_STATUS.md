# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified implementation HEAD: `9d9ad83677f8ed8040c14bc220d444848e001568`

## Current state

**VNext clean rebuild is ACTIVE.**

The existing public implementation remains separate while VNext is built and verified.

VNext does not patch the legacy HTML/CSS/JS architecture and must not replace production before the cutover phase.

## Completed

### Phase 0 — Canonical Foundation
**COMPLETE**

Canonical documentation and handoff system are established.

### Phase 1 — Build System & Repository Skeleton
**COMPLETE**

Implemented:
- Node 24 ESM manifest;
- build-time static VNext pipeline;
- dependency-free build/check commands;
- shared config/component/template foundation;
- minimal navigation runtime;
- separated VNext CSS layers;
- generated noindex foundation preview routes;
- VNext CI workflow.

Original Phase 1 green evidence:
- Workflow: `VNext verify`
- Run: `35543509588`
- SHA: `e18e906817b1550a4ccaa56e438e0187340b6524`

### Pre-Phase-2 — Brand + Bilingual Architecture Freeze
**COMPLETE**

Identity:
- original Wasl logo assets remain authoritative;
- IBM Plex Sans Arabic / IBM Plex Sans locked;
- official published Navy and Teal scales moved into VNext tokens;
- semantic brand roles added;
- supporting cool neutral palette added;
- functional state colors are restricted to UI feedback;
- CI brand guard added.

Architecture:
- Arabic is default locale at `/`;
- English is planned/generated under `/en/`;
- RTL/LTR locale contract added;
- clean bilingual route builders added;
- stable entity slugs are shared across locales;
- services/projects/articles/jobs are designed as data/content records, not copied pages;
- Insights, Careers, Privacy, Terms and dedicated Start Project are canonical planned surfaces;
- SEO is a build-time architecture concern with canonical/hreflang/sitemap/robots/structured-data validation.

Files added/established:
- `src/config/brand.js`
- `src/config/locales.js`
- `src/config/routes.js`
- `src/styles/tokens.css`
- `src/styles/brand.css`
- `src/styles/typography.css`

Latest implementation verification:
- Workflow: `VNext verify`
- Run: `35550116171`
- HEAD: `9d9ad83677f8ed8040c14bc220d444848e001568`
- Conclusion: **SUCCESS**

Evidence:
`docs/qa/2026-09-21_brand-bilingual-architecture-foundation.md`

## Next phase

### Phase 2 — Bilingual Data & Content Normalization
**NEXT / NOT STARTED**

Goal:
normalize verified business content into one extensible multilingual data layer before real page design.

Phase 2 must:
- audit current legacy service/project/FAQ data;
- create one stable identity per entity;
- add Arabic/English localized fields without duplicating entity identity;
- normalize slugs/groups/relations;
- map verified assets;
- define article/job content contracts;
- mark missing evidence explicitly;
- add integrity checks for duplicate ids/slugs, locale completeness and broken relations.

## Exact next work

1. fetch current legacy `js/services-data.js`;
2. fetch current legacy `js/portfolio.js`;
3. fetch current FAQ source(s);
4. inventory only evidence-backed fields;
5. define the bilingual service schema;
6. build `src/data/services.js`;
7. define/build `src/data/projects.js`;
8. build `src/data/faq.js`;
9. define article/job metadata contracts;
10. add relationship fields between services/projects/articles;
11. extend `scripts/check.mjs` with data-integrity checks;
12. run `npm run vnext:verify`;
13. update QA/status/handoff.

Do not design Homepage before this is complete.

## Preserved non-negotiables

- original Wasl identity;
- IBM Plex Sans Arabic / IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- 8 official services;
- Yemen + Gulf positioning;
- Arabic + English architecture;
- crawlable build-time HTML;
- SEO-first route/metadata architecture;
- verified portfolio only;
- responsive RTL/LTR;
- compact mobile design;
- WCAG/reduced motion;
- truthful contact/WhatsApp behavior;
- no invented metrics/prices/timelines/stacks;
- reusable components and centralized data;
- no legacy patching;
- SATR lessons used structurally, never copied.

## Production separation

VNext is **not production**.

Do not change Vercel production/output configuration until the final cutover gate.
