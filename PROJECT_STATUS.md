# Wasl Tech VNext — Current Project Status

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Live main at VNext start: `9a19271bbe472e1b44a6909865b3b6254ef58f56`  
Active VNext branch: `rebuild/vnext-foundation-20260921`

## Current state

**VNext rebuild is ACTIVE.**

The previous public-site implementation remains the legacy/production implementation while VNext is built separately.

Do not continue VNext by patching the legacy page/CSS architecture.

## Why VNext exists

The previous repository accumulated:
- overlapping page-specific styles;
- multiple historical design layers;
- repeated override/normalization behavior;
- stale status/QA documentation;
- page architecture that became harder to reason about.

The user explicitly requested:
- a clean rebuild;
- strong architecture;
- no patching;
- no duplicated components/data;
- no giant files;
- preserved Wasl identity/font/features;
- UPDATE CARD craft discipline;
- stronger organization informed by SATR competitor research;
- permanent documentation/handoff continuity.

## Phase state

### Phase 0 — Canonical Foundation
Status: **ACTIVE / near completion**

Completed on the VNext branch:
- canonical documentation map;
- product/business source of truth;
- design/experience standard;
- engineering architecture;
- content/IA/writing system;
- execution plan;
- QA/release authority;
- QA evidence folder rules.

In progress:
- replace stale root operating/status/handoff documents with VNext versions;
- create clean code/build skeleton.

### Phase 1 — Build System & Repository Skeleton
Status: **NEXT**

All later phases: PENDING.

See:
`docs/core/EXECUTION_PLAN.md`

## Preserved non-negotiables

- IBM Plex Sans Arabic / IBM Plex Sans.
- Wasl Navy/Teal identity.
- 8 official services.
- Yemen + Gulf positioning.
- verified portfolio only.
- responsive/RTL.
- compact mobile design including two-up cards where readable.
- accessibility/reduced motion.
- truthful WhatsApp/contact behavior.
- SEO/performance targets.
- reusable shared components.
- UPDATE CARD-derived craft rules.
- SATR-derived structural/writing lessons without copying.

## Current implementation decision

Target VNext architecture:
**build-time static multipage site, Node 24, no runtime frontend framework by default, centralized data/config, reusable components, minimal browser JS.**

See:
`docs/core/ENGINEERING_ARCHITECTURE.md`

## Important: production separation

VNext is not production yet.

Repository `main`, Vercel production, and the active VNext branch are separate states.

Do not alter production merely to preview incomplete VNext work.

## Current blockers

No architecture blocker.

Content gaps will be handled explicitly as `CONTENT REQUIRED` / `NOT VERIFIED`.

## Exact next work

Finish Phase 0 root entrypoints, then begin Phase 1:

1. create package/build foundation;
2. create `src/` responsibility skeleton;
3. create shared site/config source;
4. create minimal build output;
5. add deterministic check command;
6. verify no legacy production behavior was modified.

## Completion rule for Phase 0

A new conversation must be able to read:
`PROJECT_STATUS → PROJECT_HANDOFF → AGENTS → docs/README`
and correctly continue without old chat context.
