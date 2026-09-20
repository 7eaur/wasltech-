# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Live main at VNext start: `9a19271bbe472e1b44a6909865b3b6254ef58f56`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified VNext HEAD: `e18e906817b1550a4ccaa56e438e0187340b6524`

## Current state

**VNext clean rebuild is ACTIVE.**

The existing public implementation remains separate while VNext is built and verified.

VNext does not patch the legacy HTML/CSS/JS architecture.

## Completed

### Phase 0 — Canonical Foundation
**COMPLETE**

Canonical documentation:
- `docs/README.md`
- `docs/core/PRODUCT.md`
- `docs/core/DESIGN_SYSTEM.md`
- `docs/core/ENGINEERING_ARCHITECTURE.md`
- `docs/core/CONTENT_IA.md`
- `docs/core/EXECUTION_PLAN.md`
- `docs/core/QA_RELEASE.md`
- `docs/qa/README.md`

Root operating files were reset for VNext:
- `README.md`
- `AGENTS.md`
- `PROJECT_STATUS.md`
- `PROJECT_HANDOFF.md`

### Phase 1 — Build System & Repository Skeleton
**COMPLETE**

Implemented:
- Node 24 ESM manifest.
- build-time static VNext pipeline.
- dependency-free build/check commands.
- centralized site/navigation config.
- shared component foundation.
- shared document template.
- minimal navigation runtime.
- separated VNext CSS layers.
- generated noindex foundation preview routes.
- VNext CI workflow.

Final QA:
- Workflow: `VNext verify`
- Run: `35543509588`
- HEAD: `e18e906817b1550a4ccaa56e438e0187340b6524`
- Conclusion: **SUCCESS**

Evidence:
`docs/qa/2026-09-21_phase-1_foundation.md`

## Important QA lesson already enforced

The first VNext run rejected `!important` in reduced-motion CSS.

The guard was not relaxed. Motion was redesigned so transitions/smooth scrolling are enabled only under `prefers-reduced-motion: no-preference`.

This is the expected VNext root-cause workflow.

## Next phase

### Phase 2 — Data & Content Normalization
**NEXT / NOT STARTED**

Goal:
move verified business content into canonical VNext data owners before real page design begins.

Planned owners:
- `src/config/site.js`
- `src/config/navigation.js`
- `src/data/services.js`
- `src/data/projects.js`
- `src/data/faq.js`

Phase 2 must:
- inspect legacy service/project/FAQ data;
- preserve only verified facts;
- normalize slugs/groups/fields;
- mark missing evidence;
- prevent content duplication;
- prepare clean-route mappings/legacy redirects without publishing them yet.

## Preserved non-negotiables

- IBM Plex Sans Arabic / IBM Plex Sans.
- Wasl Navy/Teal identity.
- 8 official services.
- Yemen + Gulf positioning.
- verified portfolio only.
- responsive/RTL.
- compact mobile design.
- accessibility/reduced motion.
- truthful contact/WhatsApp behavior.
- SEO/performance targets.
- reusable shared components.
- UPDATE CARD-derived craft rules.
- SATR-derived structural/writing lessons without copying.

## Production separation

VNext is **not production**.

Do not change Vercel production/output configuration until Phase 14 cutover.

Legacy public files stay untouched during the early VNext phases.

## Current blockers

None.

## Exact next work

When Phase 2 is approved to start:

1. audit current `js/services-data.js`;
2. audit current `js/portfolio.js`;
3. audit FAQ source(s);
4. build normalized `src/data/services.js`;
5. build normalized `src/data/projects.js`;
6. build normalized `src/data/faq.js`;
7. add data-integrity checks;
8. update QA/status/handoff.

Do not design Homepage before this is complete.
