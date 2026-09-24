# Wasl Tech — Final SEO Conversation Handoff

Date: 2026-09-25  
Repository: `7eaur/wasltech-`  
SEO branch: `seo/search-visibility-foundation-20260925`  
Draft PR: `#37`

## 1. Exact resume point

At the final verification check:
- live `main`: `1cb5d939b58c1e03ff63fce5b27d476d116e7a90`;
- latest verified SEO checkpoint before this documentation-only handoff batch: `7c27a9c8e0dcf6c23d09c60f6814c74ac3b41456`;
- verify run for that checkpoint: `36070906421` — **SUCCESS**;
- merge base between current `main` and the SEO branch: `427e8bc5939f8bb4f0051fc3a3d562f646a0c0da`;
- comparison at handoff: SEO **47 commits ahead / 22 commits behind** `main`.

The documentation commit containing this file will be newer than the verified checkpoint above. On resume, always fetch live branch heads first.

## 2. Non-negotiable first action

**Do not merge PR #37 directly.**

First:
1. fetch current `main`;
2. fetch current SEO branch;
3. compare/inspect divergence;
4. reconcile `main` into the SEO branch;
5. resolve conflicts intentionally;
6. inspect any public-route/content/schema changes introduced by newer `main`;
7. rerun Preview + Release verification;
8. rerun the route/search gates relevant to changed surfaces.

Only after a green reconciled checkpoint may publication/cutover be discussed.

## 3. SEO phases completed

### Phase 0 — Governance
Canonical standard:
`docs/core/SEARCH_VISIBILITY.md`

### Phase 1 — Technical discoverability
Implemented/verified:
- index/follow production policy;
- canonical URLs;
- bilingual hreflang;
- sitemap;
- robots;
- OAI-SearchBot allow;
- unique titles/descriptions;
- one H1;
- OG/Twitter metadata;
- internal reachability/orphan checks;
- legal-page footer linking.

### Phase 2 — Entity + schema
Implemented:
- stable Organization/WebSite IDs;
- Service, CreativeWork, Article, JobPosting relations;
- canonical publisher/author identity;
- evidence-safe structured data.

### Phase 3 — Intent architecture
Canonical map:
`docs/research/SEARCH_INTENT_MAP_2026-09-25.md`

Eight main commercial service intents each have one canonical owner page.

### Phase 4 — Service authority
QA:
`docs/qa/2026-09-25_service-search-authority-audit.md`

Service pages connect to:
- real related work;
- published related guidance;
- service-specific decision content and FAQs.

### Phase 5 — Case-study evidence
QA:
`docs/qa/2026-09-25_case-study-evidence-authority-audit.md`

14 project records remain concise and evidence-bounded. Do not add invented outcomes/stacks/dates/metrics to lengthen them.

### Phase 6 — Topic clusters
Current published Insights coverage supports all eight service families without mass content production.

### Phase 7 — AI answer readiness
QA:
`docs/qa/2026-09-25_ai-answer-readiness-audit.md`

Release gate verifies:
- extractable static HTML;
- no snippet blocking;
- visible author/date;
- Article schema parity;
- canonical Organization authorship/publishing;
- Article → Service entity relationships.

### Phase 8 — External entity consistency
Core contract:
`docs/core/EXTERNAL_ENTITY_PROFILE.md`

QA:
`docs/qa/2026-09-25_external-entity-consistency-audit.md`

Important:
- “Wasl Tech” is not globally unique;
- disambiguate with `وصل تك | Wasl Tech`, `wasl-tech.com`, Yemen + Gulf;
- current Facebook contact URL is a share URL and is intentionally excluded from Organization `sameAs` until a canonical profile URL is verified.

### Phase 9 — Webmaster/measurement
Plan:
`docs/core/WEBMASTER_MEASUREMENT.md`

Pre-publication implementation:
- production-domain smoke command: `npm run vnext:check:production-search`;
- pre-publication verify: `36069649090` — SUCCESS;
- latest docs/connector-state checkpoint verify: `36070906421` — SUCCESS.

## 4. Connected measurement state

Windsor.ai is connected.

Verified:
- GA4 connector: connected;
- account: `Wasl Tech` (`530356719`);
- last 90-day reads currently return 0 rows, including broad channel/hostname reads;
- therefore GA4 is **not** a usable SEO baseline yet.

Pending user/account authorization:
- Google Search Console;
- Bing Webmaster.

Do not request sensitive credentials in chat. Use connector authorization flows.

## 5. Publication-dependent actions

After the user explicitly approves publication:
1. reconcile latest `main`;
2. verify the reconciled SEO branch;
3. merge/deploy the exact approved SHA;
4. connect `www.wasl-tech.com`;
5. redirect apex `wasl-tech.com` → `https://www.wasl-tech.com/`;
6. enforce HTTP → HTTPS;
7. run `npm run vnext:check:production-search`;
8. verify real robots/sitemap/canonical/hreflang/crawler access;
9. verify Search Console Domain property `wasl-tech.com`;
10. submit `https://www.wasl-tech.com/sitemap.xml`;
11. import/verify in Bing Webmaster;
12. inspect Bing AI Performance when data appears;
13. record Day-0 baseline;
14. start Phase 10 continuous optimization only from real evidence.

## 6. Current domain rule

The user explicitly said the canonical domain will be connected **at publication**.

Therefore:
- do not treat Preview/Vercel URLs as canonical search targets;
- do not diagnose the old/live external domain as the final VNext state before cutover;
- do not submit protected previews to webmaster tools.

## 7. Locked integrity rules

Never:
- keyword-stuff;
- create doorway city pages without real differentiated value;
- mass-produce thin pages/articles;
- invent results, metrics, testimonials, reviews, awards, certifications, prices, timelines, SLAs or client facts;
- hide AI-only text;
- cloak content;
- use fake citations;
- treat `llms.txt` as required unless official engine guidance changes;
- buy spam backlink packages.

Prefer:
- one intent → one canonical owner;
- first-party evidence;
- clear static HTML;
- real project proof;
- concise answer-first guidance;
- consistent entity identity;
- legitimate partner/client/editorial references;
- evidence-driven changes after launch.

## 8. Existing temporary media caveat

Some older editorial/inner-page Hero assets remain temporary according to the VNext media inventory.

Do not reopen page architecture just to replace them. Preserve approved layout roles and replace/optimize only the media assets when final images are supplied.

## 9. Production approval state

**NOT APPROVED.**

PR #37 remains draft. No SEO branch merge or production cutover should happen until the user explicitly approves it.

## 10. Resume command

On the next conversation:
- fetch live `main`;
- fetch live SEO branch;
- read this file first;
- reconcile branch divergence before new SEO implementation;
- continue Phase 9 publication completion only when the user says to publish/connect the domain;
- otherwise continue non-production preparation without touching `main`.
