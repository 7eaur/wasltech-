# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Active branch: `rebuild/vnext-foundation-20260921`  
Latest verified implementation HEAD: `9d9ad83677f8ed8040c14bc220d444848e001568`

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
- approved Navy/Teal scales + supporting neutrals;
- no arbitrary rebranding.

## 3. Completed work

### Phase 0
Canonical documentation system complete.

### Phase 1
Build/repository foundation complete.

### Pre-Phase-2 architecture freeze
Complete:
- canonical brand config;
- semantic color/token architecture;
- bilingual typography contract;
- locale config;
- route builders;
- bilingual/full-site/SEO architecture documented;
- automated identity + locale/route guards.

Latest green implementation evidence:
- workflow: `VNext verify`
- run: `35550116171`
- SHA: `9d9ad83677f8ed8040c14bc220d444848e001568`
- result: **SUCCESS**

QA:
`docs/qa/2026-09-21_brand-bilingual-architecture-foundation.md`

## 4. Exact next phase

**Phase 2 — Bilingual Data & Content Normalization**

Do not redesign pages yet.

Start with:
1. legacy `js/services-data.js`;
2. legacy `js/portfolio.js`;
3. current FAQ source(s);
4. verify fields and assets;
5. design one bilingual entity schema;
6. create `src/data/services.js`;
7. create `src/data/projects.js`;
8. create `src/data/faq.js`;
9. define article/job metadata contracts;
10. define relations;
11. add integrity checks;
12. run `npm run vnext:verify`;
13. document evidence.

## 5. Phase 2 rules

- one entity identity, localized fields;
- no separate duplicated Arabic/English service databases;
- stable shared slug across locales;
- no invented content;
- missing evidence stays null / `NOT VERIFIED` / `CONTENT REQUIRED`;
- do not copy SATR text;
- do not publish incomplete English;
- keep legacy production code untouched;
- do not publish VNext;
- do not design Home before normalization is complete.

## 6. Do not repeat

Do not:
- recreate Phase 0 docs;
- reopen the approved font/logo/colors casually;
- revert to Arabic-only architecture;
- create a second route system;
- create copied pages per service/project/language;
- introduce a frontend framework without proven need;
- copy legacy CSS into VNext;
- weaken CI guards;
- merge VNext to production early.
