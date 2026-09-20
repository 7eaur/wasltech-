# Phase 1 QA — VNext Build System & Repository Skeleton

Date: 2026-09-21  
Branch: `rebuild/vnext-foundation-20260921`  
Verified HEAD: `e18e906817b1550a4ccaa56e438e0187340b6524`

## Scope

Verified the new VNext foundation only. No legacy production page was migrated or replaced.

## Implemented

- Node 24 ESM project manifest.
- Dependency-free build pipeline.
- Dependency-free structural/check pipeline.
- Canonical config:
  - site
  - navigation
- Shared component contracts:
  - Header
  - Footer
  - PageHero
  - SectionHeader
  - ResponsiveImage
  - ContactCTA
- Shared document template.
- Minimal client navigation behavior.
- New CSS responsibility layers:
  - tokens
  - base
  - layout
  - components
  - media
- Noindex generated foundation preview routes.
- VNext GitHub Actions verification workflow.

## Root-cause correction during QA

Initial VNext CI run:
`35543449656`

It failed because `src/styles/base.css` used `!important` for reduced-motion overrides.

The check was not weakened.

Root fix:
- global forced motion overrides were removed;
- smooth scrolling and component transitions became opt-in under `prefers-reduced-motion: no-preference`.

This removed the need for `!important`.

## Final evidence

GitHub Actions workflow:
**VNext verify**

Successful run:
`35543509588`

Verified HEAD:
`e18e906817b1550a4ccaa56e438e0187340b6524`

Result:
- VNEXT BUILD: PASSED
- VNEXT CHECK: PASSED
- generated foundation routes verified
- Wasl tokens/font contracts verified
- no runtime dependency introduced
- anti-patch foundation guards passed

## Phase result

**PHASE 1: COMPLETE**

Next:
**Phase 2 — Data & Content Normalization**

Do not begin page redesign before Phase 2 establishes the data owners.
