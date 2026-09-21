# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Active branch: `rebuild/vnext-foundation-20260921`  
Latest verified implementation HEAD: `b7412a4a5143404a9169857b4ef844a7765cfa83`

## 1. Start procedure

A new conversation must:

1. fetch live `main`;
2. fetch live `rebuild/vnext-foundation-20260921`;
3. read `PROJECT_STATUS.md`;
4. read this file;
5. read `AGENTS.md`;
6. read `docs/README.md`;
7. read only relevant canonical core docs;
8. continue from the exact next phase below.

Live repository/code/tests override stale text or chat memory.

## 2. Stable direction

Clean VNext rebuild. No legacy patching.

Architecture:
- build-time static multipage;
- Node 24;
- minimal runtime JavaScript;
- centralized data/config;
- reusable templates/components;
- Arabic default at `/`;
- English under `/en/`;
- shared stable entity ids/slugs across locales;
- services/projects/articles/jobs generated from data/content records;
- SEO generated and verified as part of the build.

Identity:
- original Wasl logo assets only;
- IBM Plex Sans Arabic / IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- approved Navy/Teal scales + supporting neutrals.

## 3. Completed work

### Phase 0
Canonical documentation system complete.

### Phase 1
Build/repository foundation complete.

### Brand/Bilingual/SEO freeze
Complete and guarded by CI.

### Phase 2
Complete:
- `src/data/services.js` — 8 services;
- `src/data/projects.js` — 14 projects;
- `src/data/faq.js` — 13 FAQ items / 4 groups;
- `src/data/articles.js` — future article contract, currently empty;
- `src/data/jobs.js` — future careers contract, currently empty;
- `scripts/check-data.mjs` — data integrity guard.

Important decisions:
- one entity identity;
- localized content inside each record;
- no duplicated Arabic/English databases;
- Arabic is source-ready;
- English is `content_required` until reviewed;
- no invented case-study, article or job content;
- relations use stable ids;
- data files are validated by integrity checks rather than arbitrary code-size limits.

Final green Phase 2 evidence:
- workflow: `VNext verify`
- run: `35552059884`
- SHA: `b7412a4a5143404a9169857b4ef844a7765cfa83`
- result: **SUCCESS**

QA:
`docs/qa/2026-09-21_phase-2_data-normalization.md`

## 4. Exact next phase

**Phase 3 — Design Tokens & Shared Primitives**

Do not build final pages yet.

Start with:
1. inspect existing VNext `tokens.css`, `brand.css`, `typography.css`, `layout.css`, `components.css`, `media.css`;
2. define shared container/grid/section contracts;
3. refine bilingual typography hierarchy;
4. implement Button/TextLink contracts;
5. refine PageHero variants;
6. implement reusable card primitives with specific Service/Project/Article components;
7. implement form field states;
8. implement FAQ/accordion presentation contract;
9. refine ResponsiveImage/media contracts;
10. build a static component showcase fixture;
11. review desktop + 390 + 360 visually;
12. fix root causes;
13. run `npm run vnext:verify`;
14. document Phase 3 evidence.

## 5. Phase 3 rules

- do not invent a second palette;
- no arbitrary colors outside tokens;
- no generic card-wall system;
- shared card foundation may exist, but content components remain semantically distinct;
- no gradients/glows/blobs/AI-tech decoration;
- no page-specific patches in global primitive files;
- RTL/LTR must be first-class;
- mobile is edited, not desktop stacked;
- use semantic tokens, not raw repeated hex values;
- keep controls accessible and keyboard-visible;
- do not design final Home before primitive review passes.

## 6. Do not repeat

Do not:
- recreate Phase 0/1/2;
- re-audit legacy service/project data unless evidence changes;
- reopen approved font/logo/colors casually;
- translate English by copying or inventing unsupported claims;
- create copied pages per locale/entity;
- introduce a frontend framework without proven need;
- weaken CI/data guards;
- merge VNext to production early.
