# Wasl Tech VNext — Documentation Map

## Active performance/UX audit — 2026-10-14

For the current non-SEO hardening branch, start with [`qa/2026-10-14_PERFORMANCE_UX_CONTENT_AUDIT.md`](qa/2026-10-14_PERFORMANCE_UX_CONTENT_AUDIT.md), then the newest sections of `PROJECT_STATUS.md` and `PROJECT_HANDOFF.md`. This audit records what is locally closed, what still requires Preview/device/owner evidence, and which UPDATE CARD ideas were deliberately rejected. It does not authorize SEO, DNS, merge or Production actions.

## Search visibility authorities — 2026-10-13

For SEO / AI-search work, read these after the current release handoff:
- `core/SEARCH_VISIBILITY.md` — canonical search and AI-discovery policy.
- `core/EXTERNAL_ENTITY_PROFILE.md` — canonical Wasl Tech entity/profile contract.
- `core/WEBMASTER_MEASUREMENT.md` — Search Console, Bing and post-launch measurement plan.
- `research/SEARCH_INTENT_MAP_2026-09-25.md` — intent ownership map, with the 2026-10-13 reconciliation note.
- `qa/2026-10-13_SEO_MAIN_RECONCILIATION.md` — current reconciliation evidence and remaining gates.

The older SEO branch/PR #37 is historical input only. Do not merge it directly into current `main`.

## Current release handoff — 2026-10-13

Start with [`qa/2026-10-13_INTEGRATION_MERGE_VERIFICATION.md`](qa/2026-10-13_INTEGRATION_MERGE_VERIFICATION.md), then `PROJECT_STATUS.md` and `PROJECT_HANDOFF.md`. PR #46 is merged into integration and PR #45 is released to `main`/Production. Recovery-only records below remain historical evidence. SEO and logo branches stayed outside this release scope.

## مرجع العمل الحالي — 2026-10-13

**ابدأ من [تقرير الفرع الشامل والمهام المتبقية R01–R10](qa/2026-10-13_BRANCH_RECOVERY_FINAL_HANDOFF.md)**؛ يحتوي نطاق الفرع، ما اكتمل، سجلات CI/Preview HTTP، إجراءات قبول كل بند، المسؤول/الاعتمادية، خريطة PRs والخطوة القادمة. هذا المستند هو مرجع QA التفصيلي الوحيد، وليس ملف Status بديلًا. لا تتبع تعليمات «صور ناقصة» أو «CI pending» من محاضر قديمة دون مراجعة الأحدث.


Status: CANONICAL DOCUMENTATION INDEX  
Repository: `7eaur/wasltech-`

This file defines where project truth lives. It exists to prevent overlapping documentation, stale handoffs, and conflicting decisions.

## Current handoff record

**2026-10-13 canonical:** Read [branch completion and external acceptance gates](qa/2026-10-13_BRANCH_RECOVERY_FINAL_HANDOFF.md) first, then latest `PROJECT_STATUS.md`, `PROJECT_HANDOFF.md`, `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md` and evidence details `docs/qa/2026-10-13_FAQ_DEDUP_AND_FOOTER_A11Y.md`, `docs/qa/2026-10-13_RESPONSE_HEADERS_AND_LAB_DIAGNOSTICS.md`. Everything below referring to unfinished October 12 CI is historical unless consistent with the actual tested SHA.


For independent recovery work as of 2026-10-12, read the newest sections of `PROJECT_STATUS.md` and `PROJECT_HANDOFF.md` first, followed by `docs/qa/2026-10-12_NEW_CONVERSATION_ROOT_CAUSE_HANDOFF.md`, `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md` and `docs/qa/2026-10-12_RECOVERY_ROOT_CSS_A1.md`. The former September 2026 baton remains historical evidence only. Media ownership: `docs/qa/FINAL_MEDIA_INVENTORY.md`.

The older `docs/qa/2026-09-24_footer-service-media-handoff.md` record is historical evidence only. Its former “service media pending” instruction is superseded: all eight service originals and WebP derivatives are committed and wired through the canonical service data, and Home/About media are also integrated.

## Read order for every new conversation

1. `PROJECT_STATUS.md` — current live state only.
2. `PROJECT_HANDOFF.md` — exact execution baton / next action.
3. `docs/qa/2026-10-12_NEW_CONVERSATION_ROOT_CAUSE_HANDOFF.md` and `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md` — live recovery baton.
4. `AGENTS.md` — non-negotiable operating rules.
5. `docs/core/PRODUCT.md` — stable product/business truth.
6. `docs/core/DESIGN_SYSTEM.md` — stable UX/UI/brand rules.
7. `docs/core/ENGINEERING_ARCHITECTURE.md` — stable code architecture.
8. `docs/core/CONTENT_IA.md` — information architecture and writing system.
9. `docs/core/EXECUTION_PLAN.md` — phase sequence and acceptance goals.
10. `docs/core/QA_RELEASE.md` — quality/release gates.
11. Relevant `docs/research/*` only when external/reference evidence is needed.

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
