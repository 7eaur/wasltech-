# Wasl Tech VNext — Documentation Map

Status: CANONICAL DOCUMENTATION INDEX  
Repository: `7eaur/wasltech-`

This file defines where project truth lives. It exists to prevent overlapping documentation, stale handoffs, and conflicting decisions.

## Read order for every new conversation

1. `PROJECT_STATUS.md` — current live state only.
2. `PROJECT_HANDOFF.md` — exact execution baton / next action.
3. `AGENTS.md` — non-negotiable operating rules.
4. `docs/core/PRODUCT.md` — stable product/business truth.
5. `docs/core/DESIGN_SYSTEM.md` — stable UX/UI/brand rules.
6. `docs/core/ENGINEERING_ARCHITECTURE.md` — stable code architecture.
7. `docs/core/CONTENT_IA.md` — information architecture and writing system.
8. `docs/core/EXECUTION_PLAN.md` — phase sequence and acceptance goals.
9. `docs/core/QA_RELEASE.md` — quality/release gates.
10. Relevant `docs/research/*` only when external/reference evidence is needed.

Live code/runtime always override stale documentation.

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
