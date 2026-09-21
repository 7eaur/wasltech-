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

**Phase 2B — Content Architecture & Evidence Completion**

Do not build final pages yet.

Current content is normalized but not considered complete merely because it exists.

Start with:
1. extend final service/project content contracts;
2. classify missing fields;
3. create canonical page-level content owners;
4. identify which missing facts can be recovered from repository evidence;
5. request only meaningful missing business facts/assets from the user;
6. draft final Arabic content;
7. prepare reviewed English content after facts stabilize;
8. add SEO/search-intent metadata;
9. validate realistic content lengths before Phase 3 visual approval.

After Phase 2B closes, continue with Phase 3 shared primitives.

## 5. Phase 2B rules

- legacy content is baseline, not completion;
- ask the user for facts/evidence, not finished copy;
- do not fabricate project case studies, outcomes, technologies, dates or clients;
- do not publish generic SEO filler;
- missing fields remain explicit;
- final visual components must be tested against realistic content lengths;
- English is written from approved facts, not as an independent drifting content database.

## 6. Do not repeat

Do not:
- recreate Phase 0/1/2;
- treat all current legacy descriptions as final VNext editorial copy;
- jump to final Home design before the content model is known;
- reopen approved font/logo/colors casually;
- create copied pages per locale/entity;
- weaken CI/data guards;
- merge VNext to production early.

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
