# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Active branch: `rebuild/vnext-foundation-20260921`  
Latest verified VNext HEAD: `e18e906817b1550a4ccaa56e438e0187340b6524`

## 1. Start procedure

A new conversation must:

1. fetch live `main`;
2. fetch/search `rebuild/vnext-foundation-20260921`;
3. read `PROJECT_STATUS.md`;
4. read this file;
5. read `AGENTS.md`;
6. read `docs/README.md`;
7. continue from the exact next phase below.

Live repository overrides stale text.

## 2. Stable direction

Clean rebuild. No legacy patching.

Preserve:
- Wasl identity;
- IBM Plex typography;
- approved features;
- 8 services;
- verified work;
- UPDATE CARD craft discipline;
- SATR structural/writing lessons without copying.

Architecture:
build-time static multipage, Node 24, centralized data/config, reusable components, minimal browser JS.

## 3. Completed work

### Phase 0
Canonical documentation system complete.

### Phase 1
Build/repository foundation complete.

Key source structure now exists:
- `src/config/`
- `src/lib/`
- `src/components/`
- `src/templates/`
- `src/pages/`
- `src/styles/`
- `src/client/`
- `scripts/build.mjs`
- `scripts/check.mjs`

Commands:
- `npm run vnext:build`
- `npm run vnext:check`
- `npm run vnext:verify`

Final green CI:
- run `35543509588`
- SHA `e18e906817b1550a4ccaa56e438e0187340b6524`

QA evidence:
`docs/qa/2026-09-21_phase-1_foundation.md`

## 4. Root-cause discipline already proven

An early CI failure caught `!important` in motion fallback.

Do not undo this by weakening checks.

The solution was to make motion opt-in to user motion preference.

## 5. Exact next phase

**Phase 2 — Data & Content Normalization**

Do not redesign pages yet.

Next operations:

1. fetch current legacy `js/services-data.js`;
2. fetch current legacy `js/portfolio.js`;
3. fetch current FAQ implementation/data;
4. inventory every field actually supported;
5. map the 8 official services into `src/data/services.js`;
6. map verified projects into `src/data/projects.js`;
7. map FAQ into `src/data/faq.js`;
8. define stable slugs/group taxonomy;
9. add data-integrity checks to `scripts/check.mjs`;
10. run `npm run vnext:verify`;
11. document Phase 2 evidence.

## 6. Rules for Phase 2

- No invented field.
- No rewriting facts based on competitor copy.
- Use SATR research only to improve organization/writing structure.
- Missing values become `null`, `NOT VERIFIED`, or are omitted according to schema.
- Do not duplicate data into page modules.
- Keep legacy public code untouched.
- Do not publish VNext.

## 7. Do not repeat

Do not:
- recreate Phase 0 docs;
- replace IBM Plex;
- create another CSS architecture;
- introduce a framework;
- copy old CSS into `src/styles`;
- create eight duplicated service pages;
- redesign Home before data normalization;
- merge VNext to production.

Continue exactly from Phase 2 when approved.
