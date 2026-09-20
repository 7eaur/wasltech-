# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Active branch: `rebuild/vnext-foundation-20260921`

## 1. Purpose

This is the operational baton for the next conversation.

It must answer:
- where work is happening;
- what is complete;
- what is not complete;
- what must happen next;
- what must not be repeated.

It is not the place for stable design/business rules. Those live under `docs/core/`.

## 2. Start procedure

A new conversation must:

1. fetch live `main`;
2. fetch/search active branch `rebuild/vnext-foundation-20260921`;
3. read `PROJECT_STATUS.md`;
4. read this file;
5. read `AGENTS.md`;
6. read `docs/README.md`;
7. continue from the exact next operation below.

If branch/main HEAD changed, trust live repository and reconcile these files.

## 3. Project direction

The user requested a clean Wasl Tech rebuild from a strong foundation.

Preserve:
- Wasl identity;
- IBM Plex typography;
- approved features;
- UPDATE CARD-derived craft discipline;
- current verified business/service data;
- SATR research lessons about page sequencing, content, service detail, case studies and project planning.

Do NOT copy SATR visuals/content.

## 4. Architecture decision

VNext target:
- static multipage build;
- Node 24;
- no runtime framework by default;
- centralized data/config;
- reusable components;
- minimal browser JS;
- strong SEO/performance/accessibility.

Canonical architecture:
`docs/core/ENGINEERING_ARCHITECTURE.md`

## 5. Documentation foundation already created

Canonical:
- `docs/README.md`
- `docs/core/PRODUCT.md`
- `docs/core/DESIGN_SYSTEM.md`
- `docs/core/ENGINEERING_ARCHITECTURE.md`
- `docs/core/CONTENT_IA.md`
- `docs/core/EXECUTION_PLAN.md`
- `docs/core/QA_RELEASE.md`
- `docs/qa/README.md`

Research reference:
- `docs/research/SATR_TEC_COMPETITOR_AUDIT_2026-09-21.md`

Old `docs/design/PHASE_*` documents are historical evidence and are not the VNext execution authority.

## 6. Hard implementation rules

- No patch-on-patch CSS.
- No override-only "fix" files.
- No duplicated business data.
- No duplicated components.
- No giant mixed-responsibility modules.
- No hidden removal of existing approved features.
- No invented content.
- No AI-looking generic design.
- Root-cause fixes only.
- Production stays intact until VNext release gate.

## 7. Exact next operation

Begin **Phase 1 — Build System & Repository Skeleton**.

Implement on the active branch:

1. `package.json` with Node 24 / ESM and minimal scripts.
2. `scripts/build.mjs`.
3. `scripts/check.mjs`.
4. `src/config/site.js`.
5. `src/config/navigation.js`.
6. initial `src/components/` contracts.
7. initial `src/templates/document.js`.
8. initial `src/styles/tokens.css`, `base.css`, `layout.css`, `components.css`, `media.css`.
9. one minimal generated VNext fixture/page into `dist/` or a non-production preview output.

Do not migrate all pages yet.

## 8. Phase 1 acceptance

- deterministic build command succeeds;
- check command succeeds;
- generated HTML is semantic/crawlable;
- IBM Plex + Wasl tokens are present;
- component/data boundaries exist;
- no runtime framework;
- legacy public files remain untouched;
- documentation updated with exact branch HEAD/evidence.

## 9. Do not do next

Do not:
- redesign Homepage yet;
- edit legacy `index.html` for VNext;
- copy legacy CSS into `src/styles`;
- migrate every service at once;
- create a mega `app.js`;
- publish VNext;
- delete legacy code.

The next conversation should finish Phase 1 cleanly before Phase 2.
