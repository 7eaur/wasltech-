# Wasl Tech VNext — Documentation Map

Status: CANONICAL DOCUMENTATION INDEX  
Repository: `7eaur/wasltech-`

This file defines where project truth lives. It exists to prevent overlapping documentation, stale handoffs, and conflicting decisions.

## Current handoff record

For Search / AI visibility work, read first:
- `PROJECT_STATUS.md` — 2026-09-25 Search Visibility baton
- `PROJECT_HANDOFF.md` — 2026-09-25 Search Visibility resume point
- `docs/core/SEARCH_VISIBILITY.md`
- `docs/qa/2026-09-25_search-visibility-s1.md`

For the current 2026-09-24 continuation, read:
- `PROJECT_STATUS.md`
- `PROJECT_HANDOFF.md`
- `docs/qa/2026-09-24_final-conversation-handoff.md`
- `docs/qa/FINAL_MEDIA_INVENTORY.md`

The authoritative resume point is the current baton at the top of `PROJECT_STATUS.md` / `PROJECT_HANDOFF.md` together with `docs/qa/2026-09-24_final-conversation-handoff.md`.

The older `docs/qa/2026-09-24_footer-service-media-handoff.md` record is historical evidence only. Its former “service media pending” instruction is superseded: all eight service originals and WebP derivatives are committed and wired through the canonical service data, and Home/About media are also integrated.

## Read order for every new conversation

1. `PROJECT_STATUS.md` — current live state only.
2. `PROJECT_HANDOFF.md` — exact execution baton / next action.
3. `docs/qa/2026-09-24_final-conversation-handoff.md` — concise current-conversation baton when resuming this phase.
4. `AGENTS.md` — non-negotiable operating rules.
5. `docs/core/PRODUCT.md` — stable product/business truth.
6. `docs/core/DESIGN_SYSTEM.md` — stable UX/UI/brand rules.
7. `docs/core/ENGINEERING_ARCHITECTURE.md` — stable code architecture.
8. `docs/core/CONTENT_IA.md` — information architecture and writing system.
9. `docs/core/EXECUTION_PLAN.md` — phase sequence and acceptance goals.
10. `docs/core/QA_RELEASE.md` — quality/release gates.
11. `docs/core/SEARCH_VISIBILITY.md` — SEO, AI-search, entity, content-authority and measurement authority.
12. Relevant `docs/research/*` only when external/reference evidence is needed.

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
| Search/AI visibility strategy, crawler policy, entity authority, content growth and measurement | `docs/core/SEARCH_VISIBILITY.md` |
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
