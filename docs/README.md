# Wasl Tech VNext — Documentation Map

Status: CANONICAL DOCUMENTATION INDEX  
Repository: `7eaur/wasltech-`

This file defines where project truth lives. It exists to prevent overlapping documentation, stale handoffs, and conflicting decisions.

## Current handoff — 2026-10-10 stabilization

The previous September handoff and historical “VNext not merged” state are **superseded**. VNext was merged into main on 2026-09-24 (PR #35); the branch release facts must always be refreshed from live GitHub/Vercel.

**Read order for the active stabilization program:**
1. **docs/qa/2026-10-10_site-stabilization-closure-register.md** — sole owner of WT-001..WT-020 defect IDs, phase order, acceptance criteria, progress and exclusions.
2. **PROJECT_STATUS.md** — current live state and checkpoint; the **2026-10-10 section at the top** overrides older notes.
3. **PROJECT_HANDOFF.md** — current continuation handoff; the **2026-10-10 section at the top** overrides older notes.
4. **AGENTS.md** — operating/scope/verification rules.
5. **docs/core/PRODUCT.md** and **docs/core/DESIGN_SYSTEM.md** — stable brand/UX directions.
6. **docs/core/ENGINEERING_ARCHITECTURE.md** and **docs/core/CONTENT_IA.md** — stable implementation and content ownership.
7. **docs/core/EXECUTION_PLAN.md** and **docs/core/QA_RELEASE.md** — phase background and release-quality standards.
8. **docs/qa/FINAL_MEDIA_INVENTORY.md** — exact final media slot names, not the latest GitHub upload-state evidence.
9. Relevant dated QA/research documents as historical evidence only.

**Excluded from this stabilization team:** SEO/AI Search work under PRs #36/#37; logo animation work under PR #41. Their branches have separate owners and must not be touched, merged or deleted as part of site stabilization.

The approved media and 404 branches should be integrated only after actual build/QA verification; no main merge, production change or DNS change without explicit authorization.

## Document ownership

| Information | Canonical owner |
|---|---|
| Current HEAD / active phase / blocker / next task | `PROJECT_STATUS.md` |
| Exact resume instructions for next conversation | `PROJECT_HANDOFF.md` |
| Mandatory behavior / prohibitions | `AGENTS.md` |
| Brand/business/service facts | `docs/core/PRODUCT.md` |
| Visual/UX/design rules | `docs/core/DESIGN_SYSTEM.md` |
| Repository/code architecture | `docs/core/ENGINEERING_ARCHITECTURE.md` |
| Site map, page purpose, copywriting | `docs/core/CONTENT_IA.md` |
| Phase plan / phase order | `docs/core/EXECUTION_PLAN.md` |
| Performance, accessibility, SEO, visual/release gates | `docs/core/QA_RELEASE.md` |
| Competitor/reference research | `docs/research/*` |
| Dated QA evidence | `docs/qa/*` |

## Update protocol

Do not repeat the same fact across many files.

When a stable fact changes:
- update its canonical owner;
- update `PROJECT_STATUS.md` if the change affects current execution;
- update `PROJECT_HANDOFF.md` only if it changes the next resume action.

At the end of every meaningful implementation batch:
1. fetch live branch HEAD;
2. record what actually changed;
3. record verification evidence;
4. update `PROJECT_STATUS.md`;
5. update `PROJECT_HANDOFF.md`;
6. do not rewrite stable core docs unless a stable rule/fact truly changed.

## Historical documentation

Existing files under `docs/design/PHASE_*_QA.md`, old rebuild plans, old QA reports, and prior design-stage handoffs are historical evidence for earlier implementations.

They MUST NOT override the VNext canonical set above.

The approved craft lessons from UPDATE CARD and the SATR competitor research are preserved in the VNext core documents. Historical files remain useful as evidence, not as the active execution plan.

## Naming rules

- Core documents: stable names; never create `FINAL_V2_REAL_FINAL.md`.
- QA evidence: `docs/qa/YYYY-MM-DD_<phase>_<scope>.md`.
- Research: `docs/research/<SUBJECT>_<DATE>.md`.
- No new root-level status files without updating this map.
