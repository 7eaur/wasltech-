# Wasl Tech VNext — Execution Plan

Status: CANONICAL PHASE PLAN

This rebuild is phased. We do not redesign all pages at once and we do not patch the existing production implementation.

Execution loop for every phase:

**Understand → Architect → Implement → Run → Desktop Review → Mobile Review → Critique → Fix Root Cause → Verify → Document**

A phase is not complete because files exist.

## Phase 0 — Canonical Foundation

Goal:
establish one source of truth before code rebuild.

Outputs:
- canonical docs map;
- product truth;
- design standard;
- engineering architecture;
- content/IA;
- QA/release standard;
- new status/handoff protocol.

Gate:
a new conversation can identify project purpose, rules, current state and exact next action without reading old chats.

## Phase 1 — Build System & Repository Skeleton

Goal:
create clean VNext code structure without changing production.

Outputs:
- Node 24 build-time pipeline;
- `src/`, `public/`, `dist/`;
- shared document template;
- shared config/data boundaries;
- build/check commands;
- no runtime framework.

Gate:
minimal generated page builds deterministically and checks pass.

## Phase 2 — Data & Content Normalization

Goal:
move repeated business content into canonical data.

Outputs:
- site config;
- navigation config;
- 8 services model;
- portfolio model;
- FAQ model;
- verified asset mapping;
- missing fields explicitly marked.

Gate:
no service/project business content duplicated across page modules.

## Phase 3 — Design Tokens & Shared Primitives

Goal:
implement Wasl design grammar before page composition.

Outputs:
- tokens;
- base;
- layout;
- shared components;
- media contracts;
- typography;
- buttons/links/forms;
- accessibility baseline.

Gate:
component showcase/static fixture passes desktop/mobile review.

## Phase 4 — Shared Shell

Goal:
Header + Navigation + Footer + optional theme shell.

Gate:
keyboard, RTL, mobile drawer, 360/390/768/1024/1366/1440, no overflow.

## Phase 5 — Homepage

Goal:
strong positioning → service discovery → proof → process → project planner.

Gate:
no generic card-wall layout; real hierarchy; approved mobile/desktop screenshots.

## Phase 6 — Services Directory

Goal:
organize all 8 services into understandable families.

Gate:
all services discoverable; no taxonomy loss; no duplicated copy.

## Phase 7 — Service Detail System

Goal:
one reusable detail architecture driven by service data.

Gate:
all 8 services render from one model/template system and keep distinct content.

## Phase 8 — Portfolio & Case-study Foundation

Goal:
make verified work the strongest proof surface.

Outputs:
- filters;
- project cards;
- detail/case-study capability;
- related services/projects.

Gate:
no invented case-study fields; every visible project asset resolves.

## Phase 9 — About + Process

Goal:
separate "how we think" from "how work progresses".

Gate:
no duplicated filler between pages.

## Phase 10 — Project Planner + Contact

Goal:
replace flat contact experience with a clearer project-intake journey while preserving direct WhatsApp.

Gate:
validation is truthful; no fake send/success; keyboard/mobile tested.

## Phase 11 — FAQ + Utility + Localization Readiness

Goal:
support decision-making and future bilingual growth without publishing incomplete English pages.

Gate:
FAQ data/schema sync; 404 works; unfinished content is noindex.

## Phase 12 — SEO + Performance + Accessibility

Goal:
close technical quality.

Gate:
- WCAG 2.2 AA targeted checks;
- Core Web Vitals budgets;
- route/canonical/sitemap/robots checks;
- image/font delivery review;
- dependency audit;
- reduced motion;
- zero critical console errors.

## Phase 13 — Cross-page Visual Normalization

Goal:
review the site as one product.

Check:
- density;
- hierarchy;
- crops;
- buttons;
- cards;
- surfaces;
- footer;
- mobile;
- RTL;
- light/dark if exposed;
- anti-AI rules.

Gate:
full screenshot matrix accepted.

## Phase 14 — Cutover & Production Verification

Goal:
replace legacy production only after exact VNext release is verified.

Steps:
1. merge approved VNext;
2. deploy exact SHA;
3. verify redirects;
4. verify public routes;
5. verify assets;
6. verify metadata;
7. run runtime smoke test;
8. confirm production SHA;
9. update status/handoff.

No cutover while VNext is partially complete.

## Phase discipline

- One active implementation phase unless a blocker explicitly permits independent work.
- No jumping to visual polish before architecture/data owners exist.
- New evidence can reopen a previous phase only with a documented reason.
- Do not merge "temporary" hacks with the promise to clean them later.
