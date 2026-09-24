# Phase 2 QA — Bilingual Data & Content Normalization

Date: 2026-09-21  
Branch: `rebuild/vnext-foundation-20260921`  
Verified implementation HEAD: `b7412a4a5143404a9169857b4ef844a7765cfa83`

## Scope

Normalized verified legacy business/content records into the VNext data layer without redesigning or publishing any VNext page.

## Sources audited

- `js/services-data.js`
- `js/portfolio.js`
- `faq.html`

## Implemented

### Services
- 8 official services normalized into `src/data/services.js`.
- Stable entity ids preserved.
- Stable clean slugs assigned.
- 3 service families established:
  - `digital-products`
  - `systems-engineering`
  - `brand-presence`
- Arabic source content preserved.
- English content intentionally marked `content_required`.
- Service page fields normalized into:
  - title
  - subtitle
  - description
  - hero cards
  - audiences
  - deliverables
  - process
  - FAQ
  - CTA
- Icons were not promoted into canonical content data because they are presentation concerns.

### Projects
- 14 verified portfolio records normalized into `src/data/projects.js`.
- Stable ids/slugs added.
- Existing images preserved.
- Verified service relationships normalized through `serviceIds`.
- Existing project highlights preserved.
- Case-study data remains `null` because legacy evidence does not support full challenge/solution/result narratives for every project.
- English content is `content_required`.

### FAQ
- 13 general FAQ items normalized into `src/data/faq.js`.
- 4 verified groups preserved:
  - before project start
  - websites/apps/stores
  - identity/profiles/marketing
  - execution/workflow
- Visible FAQ copy and legacy FAQPage schema matched.

### Future content contracts
- `src/data/articles.js` created with a documented scalable article record contract.
- `src/data/jobs.js` created with a documented scalable job record contract.
- Both remain empty. No fake articles or job openings were added.

## Data architecture decisions

- One entity identity per service/project/article/job.
- Localized content lives under `content.ar` / `content.en`.
- No duplicated Arabic/English entity databases.
- Locale publication readiness is explicit through `localeStatus`.
- Missing English content is not silently generated or published.
- Relationships use ids rather than copied names/content.
- Service/project relations are owned by project `serviceIds`, avoiding duplicated relation lists.

## Integrity checks

Added `scripts/check-data.mjs`.

It verifies:
- unique ids;
- unique slugs;
- valid service groups;
- valid project→service relations;
- required Arabic content;
- locale state/content consistency;
- local image asset existence;
- FAQ id uniqueness;
- future article relation validity;
- current 8-service invariant.

Build scripts now run:
- `vnext:check:structure`
- `vnext:check:data`
- `vnext:check`
- `vnext:verify`

Data files are exempt from normal code-module line thresholds because they are primarily canonical data; they are instead guarded by data integrity checks.

## CI evidence

Workflow: **VNext verify**  
Run: `35552059884`  
HEAD: `b7412a4a5143404a9169857b4ef844a7765cfa83`  
Conclusion: **SUCCESS**

Observed output:
- `VNEXT BUILD: PASSED`
- `VNEXT CHECK: PASSED`
- `Brand guard: PASSED`
- `VNEXT DATA CHECK: PASSED`
- `Services: 8 | Projects: 14 | FAQ: 13 | Articles: 0 | Jobs: 0`

## Phase result

**PHASE 2: COMPLETE**

Next:
**Phase 3 — Design Tokens & Shared Primitives**

Do not start page composition before the shared primitive system is reviewed.
