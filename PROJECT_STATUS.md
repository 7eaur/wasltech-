# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified implementation HEAD: `b7412a4a5143404a9169857b4ef844a7765cfa83`

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
- Node 24 ESM build-time static pipeline;
- centralized config/component/template foundation;
- separated CSS responsibility layers;
- minimal runtime navigation behavior;
- noindex foundation preview routes;
- VNext CI workflow.

Original Phase 1 evidence:
- Run: `35543509588`
- SHA: `e18e906817b1550a4ccaa56e438e0187340b6524`
- Result: **SUCCESS**

### Pre-Phase-2 — Brand + Bilingual + SEO Architecture Freeze
**COMPLETE**

Locked:
- original Wasl brand assets;
- IBM Plex Sans Arabic / IBM Plex Sans;
- official Navy/Teal palette and semantic tokens;
- Arabic default at `/`;
- English under `/en/`;
- shared stable entity slugs across locales;
- scalable service/project/article/job route architecture;
- SEO-first canonical/hreflang/sitemap/robots/structured-data direction;
- automated brand/locale/route guards.

Evidence:
`docs/qa/2026-09-21_brand-bilingual-architecture-foundation.md`

### Phase 2 — Bilingual Data & Content Normalization
**COMPLETE**

Normalized:
- 8 official services → `src/data/services.js`;
- 14 verified projects → `src/data/projects.js`;
- 13 general FAQ items in 4 groups → `src/data/faq.js`;
- article contract → `src/data/articles.js`;
- careers contract → `src/data/jobs.js`.

Architecture:
- one entity identity, localized `content.ar` / `content.en`;
- Arabic source content preserved;
- English remains `content_required` until reviewed;
- stable slugs and service families;
- project→service relations use ids;
- no fake case-study fields;
- no fake articles/jobs.

Integrity:
- `scripts/check-data.mjs` validates ids, slugs, locale states, relations and image assets.
- `npm run vnext:verify` now runs structural + data checks.

Final Phase 2 evidence:
- Workflow: `VNext verify`
- Run: `35552059884`
- HEAD: `b7412a4a5143404a9169857b4ef844a7765cfa83`
- Conclusion: **SUCCESS**
- Data result: `Services: 8 | Projects: 14 | FAQ: 13 | Articles: 0 | Jobs: 0`

QA:
`docs/qa/2026-09-21_phase-2_data-normalization.md`

## Active phase

### Phase 2B — Content Architecture & Evidence Completion
**ACTIVE**

Goal:
move from normalized legacy data to complete content/evidence contracts before final visual composition.

Current audit:
- services are structurally strong but still missing final scope/problem/integrations/proof/SEO/English completion;
- all 14 projects are missing full case-study evidence fields such as year/live URL/gallery/verified stack/scope/outcomes;
- page-level VNext content still needs canonical owners;
- Insights currently has 0 articles and must be built around real search intent, not filler.

Evidence:
`docs/qa/2026-09-21_phase-2b_content-gap-audit.md`

Next actions:
1. define/extend final service and project field contracts in code;
2. classify each field as READY/PARTIAL/CONTENT REQUIRED/NOT VERIFIED/NOT APPLICABLE;
3. create page-level content owners;
4. build prioritized missing-input list;
5. request user facts/assets in small batches;
6. draft final Arabic copy from verified evidence;
7. prepare English copy after Arabic facts are stable;
8. add SEO metadata/search-intent fields;
9. re-run data integrity checks;
10. close Phase 2B before final component/page composition.

### Phase 3 — Design Tokens & Shared Primitives
**BLOCKED UNTIL PHASE 2B GATE**

Goal:
turn the frozen Wasl identity/tokens into a complete reusable visual primitive system before real page composition.

Phase 3 should implement/review:
- typography scale and bilingual RTL/LTR behavior;
- spacing/container/grid primitives;
- Button/TextLink contracts;
- SectionHeader;
- PageHero variants;
- ServiceCard / ProjectCard / ArticleCard baseline;
- form controls;
- FAQ/accordion primitive;
- ResponsiveImage/media contracts;
- surface/border/shadow/radius usage;
- focus/hover/disabled/error states;
- 360/390/mobile density;
- static component showcase/fixture;
- accessibility and reduced-motion checks.

Do not build the final Homepage before Phase 2B content contracts are sufficiently known and the shared primitives pass visual review.

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
- strong SEO architecture;
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
