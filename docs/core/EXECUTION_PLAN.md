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

### Pre-Phase-2 architecture freeze

Before Phase 2, the following product decisions are locked:
- original Wasl identity assets;
- IBM Plex Sans Arabic / IBM Plex Sans;
- official Navy/Teal palette with semantic token layer;
- Arabic default + English under `/en/`;
- stable shared slugs across locales;
- generated service/project/article/job detail routes;
- insights, careers, privacy and terms are part of the planned architecture;
- SEO is generated/validated at build time.

These decisions must not be re-opened casually during data normalization.

## Phase 2 — Data & Content Normalization

Goal:
build the bilingual, extensible content/data layer before real page design.

Inputs:
- verified legacy service data;
- verified portfolio data;
- current FAQ data;
- approved product/service taxonomy;
- approved bilingual route/locale contracts.

Outputs:
- `src/config/locales.js`;
- `src/config/routes.js`;
- localized navigation model;
- 8-service canonical model with stable ids/slugs and `ar/en` fields;
- portfolio canonical model with stable ids/slugs and localized fields;
- FAQ canonical model;
- jobs model contract;
- article/content metadata contract;
- verified asset mapping;
- relation fields between services/projects/articles;
- explicit `null`, `NOT VERIFIED`, or omitted fields when evidence is missing;
- data-integrity checks for duplicate ids/slugs, locale completeness and broken relations.

Gate:
- no service/project business content duplicated across page modules;
- every entity has one stable identity across locales;
- no incomplete English content is silently treated as publishable;
- adding a future service/project record does not require a copied page implementation.

## Phase 2B — Content Architecture & Evidence Completion

Goal:
move from normalized legacy data to a complete content model suitable for final pages, SEO and future expansion.

This phase does not invent business facts. It identifies what a strong public site needs, reuses verified repository evidence, and requests user/business input only for meaningful gaps.

Outputs:
- complete service content contract;
- complete project/case-study contract;
- page-level localized content contract;
- article/content planning contract;
- field-level gap audit;
- explicit `READY / PARTIAL / CONTENT REQUIRED / NOT VERIFIED / NOT APPLICABLE` states;
- SEO content requirements per entity/page;
- prioritized list of business inputs needed from the user;
- representative real-content fixtures for later design review.

Gate:
- no important page is being designed against unknown content structure;
- service detail fields are defined before Service Detail UI work;
- case-study capability is defined before project detail UI work;
- missing factual claims are explicitly requested rather than invented;
- English content requirements are known before localization completion;
- design can proceed using realistic content lengths and known evidence constraints.

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
clear positioning → official services → selected proof/work → About Team → Why Wasl Tech → process → short FAQ → compact project CTA.

Approved Phase-13 refinement:
- calm, elegant, profile-inspired composition;
- one supporting Hero visual;
- services remain visible as 8 concise comparable cards;
- About and Why stay separate;
- qualitative trust language replaces unsupported numeric counters;
- selected work stays restrained;
- Home FAQ stays at 3 questions;
- final CTA is smaller than the Hero.

Gate:
real hierarchy, no oversized showcase/cinematic treatment, approved mobile/desktop screenshots, and all homepage structural guards green.

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

## Phase 11 — FAQ + Insights + Careers + Legal + Localization Completion

Goal:
complete decision-support and secondary public surfaces without weakening content quality.

Outputs:
- FAQ;
- insights listing/article template;
- careers listing/job template and honest empty state;
- privacy;
- terms;
- 404;
- complete Arabic/English locale behavior;
- language switcher/hreflang relationships.

Gate:
- FAQ data/schema sync;
- article/job publication states work;
- privacy/terms reflect real behavior;
- unfinished translations remain noindex/unpublished;
- no mixed-language taxonomy leaks;
- all generated localized routes resolve correctly.

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

## Phase 13B — Architecture, Editorial & Media Completion

Goal:
close the architecture gaps discovered during final cross-page review before production cutover.

Outputs:
- remove public service/project counters;
- image-led Hero surface across every public page family;
- central temporary/final Hero-media contract;
- published bilingual Insights listing;
- reusable bilingual Article detail routes;
- future-safe Careers listing and Job detail template without inventing openings;
- Article and JobPosting structured-data builders;
- published articles included automatically in canonical/hreflang/sitemap output;
- Hero images reused for Open Graph/Twitter previews;
- final image replacement inventory.

Gate:
- Preview verify green;
- Release verify green;
- representative AR/EN route matrix green at the canonical breakpoints;
- published Article route included in matrix;
- no public service/project count counter;
- every public route family has Hero media;
- no obsolete duplicate page implementation remains;
- temporary editorial images replaced/optimized before Phase 14.

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
