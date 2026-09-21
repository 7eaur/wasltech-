# Wasl Tech VNext — Conversation Handoff

Last updated: 2026-09-21  
Repository: `7eaur/wasltech-`  
Official/legacy branch: `main`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified implementation HEAD: `4c1c3ba07924d5a99ce827eae060a7923663da1d`

## 1. Start procedure — mandatory

A new conversation must:

1. fetch live `main`;
2. fetch live `rebuild/vnext-foundation-20260921`;
3. read `PROJECT_STATUS.md`;
4. read this file;
5. read `AGENTS.md`;
6. read `docs/README.md`;
7. read relevant canonical core docs only;
8. read the SATR audit only when structural/writing reference is needed;
9. continue from Phase 2B without repeating completed phases.

Live repository/code/tests override stale text or chat memory.

## 2. Understand the two branches correctly

### `main`
This is the official/legacy branch and the source of the currently published website.

At this handoff:
`main = a4ed507defe5e7831f3459e12752a89fe0d225fc`

Verified Vercel production:
- deployment: `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9`
- state: READY
- target: production
- alias: `wasltech.vercel.app`
- source: `main@a4ed507...`

That commit added VNext documentation only; the public runtime remains the existing legacy site.

Use the published/legacy implementation as evidence for verified **facts**, assets, images, service/project identity, scope clues and behavior.

Do **not** use Legacy wording as the default copy source. Headings, descriptions, CTAs, FAQ wording and section order must be rewritten for VNext unless there is a deliberate reason to preserve a specific phrase.

Do **not** continue VNext by patching its legacy CSS/JS.

### `rebuild/vnext-foundation-20260921`
This is the clean VNext rebuild branch.

It contains:
- new build system;
- canonical identity/config;
- bilingual route architecture;
- normalized data;
- CI/data guards;
- Phase 2B content architecture work.

VNext preview deployments may exist on Vercel but are not production.

## 3. Why we moved to this architecture

The user explicitly rejected continuing with repeated visual/legacy patches.

The direction became:
- clean architecture;
- reusable components;
- centralized data;
- Arabic + English from the foundation;
- strong search-engine architecture;
- service/project/article pages generated from data;
- exact content/evidence ownership;
- no duplicated per-page content;
- no invented claims;
- future services/projects can be added as records instead of copied pages.

Later, after Phase 2 normalized the old data, the user clarified two things:

1. **do not stop at the data that already exists; define what a strong site actually needs and ask for missing real facts/assets when important.**
2. **do not migrate all Legacy text as-is; preserve the important verified facts, then write improved, original, marketing-aware and easy-to-use VNext copy.**

That decision created **Phase 2B — Content Architecture & Evidence Completion** before final visual composition.

## 4. Identity and visual references

### Wasl Tech — Source of Truth
Use original Wasl assets:
- `assets/brand/wasl-tech-horizontal.svg`
- `assets/brand/wasl-tech-horizontal-white.svg`
- `assets/brand/favicon.svg`

Locked:
- IBM Plex Sans Arabic;
- IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- existing approved Navy/Teal scales;
- cool supporting neutral palette.

Do not redesign the logo or replace fonts/colors casually.

### UPDATE CARD — craft benchmark
Repository:
`7eaur/update_card`

Use its lessons for:
- polish;
- compact density;
- spacing;
- controlled surfaces;
- restrained radii/shadows;
- image-led composition;
- mobile editing;
- reusable component discipline.

Never copy its brand/content/literal layout.

### SATR Technology — structure/writing benchmark
Reference:
`https://satr-tec.com/`

Canonical audit:
`docs/research/SATR_TEC_COMPETITOR_AUDIT_2026-09-21.md`

Use for:
- page hierarchy;
- Hero purpose;
- section sequencing;
- service-detail depth;
- case-study storytelling;
- planner funnel;
- editorial copy structure;
- microcopy;
- content/SEO ideas.

Never copy SATR text, images, code, brand or literal design.

## 5. Architecture already locked

- build-time static multipage;
- Node 24;
- minimal browser JS;
- Arabic default at `/`;
- English under `/en/`;
- shared entity ids/slugs;
- one entity record with localized `content.ar` / `content.en`;
- generated service/project/article/job routes;
- crawlable HTML;
- SEO generated/validated by build;
- no runtime frontend framework by default.

Canonical routes include:
Home, About, Services, Service Detail, Portfolio, Project Detail, Process, Contact, Start Project, FAQ, Insights, Article, Careers, Job, Privacy, Terms and 404, mirrored under `/en/`.

## 6. Completed work

### Phase 0
Canonical documentation/handoff system complete.

### Phase 1
Build/repository foundation complete.

### Brand + bilingual + SEO freeze
Complete:
- `src/config/brand.js`
- `src/config/locales.js`
- `src/config/routes.js`
- `src/styles/tokens.css`
- `src/styles/brand.css`
- `src/styles/typography.css`
- brand/locale/route CI guards.

### Phase 2
Complete:
- 8 services → `src/data/services.js`
- 14 projects → `src/data/projects.js`
- 13 FAQ / 4 groups → `src/data/faq.js`
- article contract → `src/data/articles.js`
- careers contract → `src/data/jobs.js`
- data guard → `scripts/check-data.mjs`

Verified:
- run `35552059884`
- SHA `b7412a4a5143404a9169857b4ef844a7765cfa83`
- SUCCESS
- `Services: 8 | Projects: 14 | FAQ: 13 | Articles: 0 | Jobs: 0`

## 7. Active phase — Phase 2B

Do not build final pages yet.

Current services have:
- identity/slug/group/image;
- Arabic title/subtitle/description;
- audiences;
- deliverables/features;
- process;
- FAQ;
- CTA.

Still needed where relevant:
- explicit customer problem/need;
- scope;
- capabilities/integrations;
- proof/evidence;
- SEO/search intent;
- related article topics;
- reviewed English.

Current projects have:
- identity/slug/category/image;
- Arabic title/summary;
- 3 highlights;
- related service.

Still needed where evidence exists:
- year;
- public client attribution;
- live URL;
- gallery/screenshots;
- verified stack;
- actual scope;
- what Wasl delivered;
- overview/context/challenge;
- factual outcomes;
- SEO;
- English.

Gap audit:
`docs/qa/2026-09-21_phase-2b_content-gap-audit.md`

### Verified Phase 2B batch now in code

- `src/data/content-contracts.js`: completeness model + authoring policy.
- `src/data/pages.js`: canonical page content owners.
- `src/data/services.js`: evidence/completeness metadata; migrated Arabic copy marked `draft`.
- `src/data/projects.js`: evidence/completeness metadata and explicit missing project fields; migrated Arabic copy marked `draft`.
- `src/config/site.js`: verified Instagram contact preserved.
- `scripts/check-data.mjs`: Phase 2B contract validation.

Authoring policy:
**Legacy = evidence only. VNext public copy = newly authored from verified facts and user intent.**

Verified:
- run `35553980138`
- SHA `4c1c3ba07924d5a99ce827eae060a7923663da1d`
- result **SUCCESS**


## 8. Exact next work

1. Extend final service/project schemas in code.
2. Add field-state model:
   `READY / PARTIAL / CONTENT REQUIRED / NOT VERIFIED / NOT APPLICABLE`.
3. Create page-level content owners for:
   Home, About, Services, Portfolio, Process, Contact, Start Project, FAQ, Insights, Careers, Privacy, Terms, 404.
4. Search repository evidence before asking the user.
5. Produce a prioritized list of missing facts/assets.
6. Ask the user in small batches only for facts/assets that cannot be recovered.
7. Write final Arabic copy from verified facts.
8. Write English after Arabic facts stabilize.
9. Add entity/page SEO metadata and search-intent/internal-link fields.
10. Extend data integrity checks.
11. Run `npm run vnext:verify`.
12. Document and close Phase 2B.
13. Then begin Phase 3 shared primitives.

## 9. Non-negotiable rules

- legacy content is evidence/baseline, not canonical wording or final completion;
- keep only important verified facts/assets/relationships from Legacy; write VNext marketing and UX copy anew;
- migrated Arabic service/project copy is `draft` until reviewed;
- never invent metrics/results/clients/stacks/prices/timelines/SLAs;
- ask user for facts/evidence, not finished marketing copy;
- no SEO filler;
- no copied SATR copy/design;
- no copied UPDATE CARD identity/layout;
- no final Homepage design before Phase 2B closes;
- no merge/cutover to production before the final release phase;
- root-cause fixes only; no patch pile.
