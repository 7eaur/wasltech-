# Wasl Tech VNext — Comprehensive Pre-Final-Media Audit

Date: 2026-09-23  
Status: **PASS — FINAL MEDIA ONLY REMAINS**  
Implementation checkpoint: `49e2f00e5d9b6ae6bae17311beee577495244122`  
Production `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc` — unchanged

## Purpose

This audit re-reviewed VNext from repository/deployment safety through generated output, content, bilingual parity, SEO, accessibility, performance, runtime interactions and visual consistency before final editorial imagery is supplied.

Final image replacement was intentionally excluded from implementation work. Temporary imagery remains valid only for architecture/layout review.

## Final evidence

- VNext verify run: `35803461945` — **SUCCESS**
- Full responsive/all-route matrix run: `35803461943` — **SUCCESS**
- Screenshot artifact: `10727135324`
- Screenshot artifact digest: `sha256:631cb2ea94d1767fa607c2c4c93fd6006ff3363d64a6df59654163f480bc5592`
- Vercel VNext preview: `dpl_BNU72k5L9fJm5C8q4AL4auCvBGzs` — **READY**
- Preview source SHA: `49e2f00e5d9b6ae6bae17311beee577495244122`
- Preview branch: `rebuild/vnext-foundation-20260921`
- Production branch/SHA remained unchanged.

## What was reviewed and fixed

### Repository / CI / deployment

- removed obsolete pre-VNext and duplicate QA workflows;
- removed obsolete foundation-only modules/CSS and unused runtime artifacts;
- removed stale `.refresh/*.b64` patch artifacts;
- kept root legacy/static compatibility files as rollback/reference rather than deleting them without proof;
- verified VNext release output is isolated from root legacy files;
- found and fixed a real Vercel deployment defect: Git previews were serving legacy root static files instead of VNext;
- added `vercel.json` so Vercel runs `npm run vnext:build:release` and serves `dist-release`;
- verified a live Vercel preview now serves VNext;
- Vercel preview remains protected from indexing at the platform layer.

### Canonical data and content

- verified stable bilingual service/project/article identity and route generation;
- verified project/service/article relationships and publication states;
- removed service-count wording from canonical page data, not just the renderer;
- removed unsupported homepage trust claims such as client-satisfaction/success wording;
- removed internal `VNext` terminology from public Privacy copy;
- removed duplicated Careers empty-state messaging;
- centralized Contact final CTA copy in canonical page data;
- centralized Process outcomes/working rule and Insights final CTA in canonical page data;
- strengthened the public-surface guard against internal terms, public counts and unsupported claims;
- no invented jobs, metrics, results, years, live project URLs, stacks, testimonials, prices, durations or SLAs were introduced.

### Bilingual parity

Generated Arabic and English routes were compared structurally and semantically.

Verified:
- same public entity identity across locales;
- no missing bilingual sections;
- language switch preserves entity route identity;
- no unintended Arabic leakage into English except the intentional language-switch label;
- correct `lang` / `dir`;
- equivalent CTA intent;
- 404 locale shapes aligned.

### SEO / crawl output

Release artifact review found:
- 76 generated public HTML files;
- 74 indexable routes plus localized 404 pages;
- no duplicate indexable paths;
- no duplicate title/description/canonical collisions found;
- canonical routes correct;
- reciprocal Arabic/English hreflang correct;
- Arabic x-default correct;
- sitemap contains only publishable routes;
- production robots allows crawling and references sitemap;
- 404 pages are `noindex,follow` and emit no canonical;
- internal links and fragments resolve;
- Open Graph and Twitter images resolve to generated assets;
- no important generated route is orphaned.

Structured data was checked against visible content:
- Organization / WebSite;
- Service;
- FAQPage;
- BreadcrumbList;
- CreativeWork;
- Article.

FAQ structured data matches visible FAQ copy. Service/project/article schema identity matches visible page content.

### Accessibility / interaction

Verified by source/static checks and Chromium workflow:
- one H1 and logical heading hierarchy;
- semantic landmarks;
- skip link;
- no duplicate IDs;
- form controls have labels;
- buttons have explicit type;
- no positive tabindex;
- visible focus rules;
- reduced-motion rule;
- contrast-token gate;
- touch-target gate;
- mobile navigation open/close state;
- Escape closes mobile navigation and restores focus;
- Portfolio filter updates pressed state and hides nonmatching cards;
- filter live status stays count-free;
- Planner rejects invalid submission;
- Planner valid submission opens review;
- Planner builds the expected WhatsApp URL;
- Planner Edit returns to editing flow;
- no automatic Planner network send or browser storage is allowed by the legal/runtime guard.

### Privacy/runtime truth

The current Planner:
- does not use `fetch`;
- does not use XMLHttpRequest;
- does not use sendBeacon;
- does not use localStorage/sessionStorage;
- does not automatically open WhatsApp;
- prepares the message locally and waits for the user to activate the external link.

Privacy copy was aligned with this behavior and discloses Google Fonts/external channels.

### Responsive / visual review

Representative public route families were reviewed in Arabic and English at:
- 360
- 390
- 768
- 1024
- 1366
- 1440

The matrix additionally verifies **every sitemap/indexable route** at 390 and 1440.

The final pre-media visual review found:
- no horizontal overflow;
- no broken RTL/LTR composition;
- no overlapping Header/Footer/CTA;
- coherent hierarchy and section rhythm;
- Services remains compact without service counters;
- Portfolio cards remain readable on mobile;
- long-form articles remain readable on mobile;
- Contact channels remain readable on mobile;
- Careers remains honest without invented openings;
- 404 no longer marks Home as the active primary-navigation item;
- Process is the densest mobile page but remains readable and consistent.

### Performance / quality

The code payload remains small and dependency-light:
- production CSS remains within the executable gzip budget;
- combined runtime JS remains within the executable gzip budget;
- no third-party runtime/build dependency was introduced;
- intrinsic image dimensions are enforced;
- at most one eager/high-priority content image is allowed per page;
- below-fold media remains lazy where applicable;
- project-image asset budgets remain guarded.

The remaining major transfer risk is the **temporary editorial imagery**. Several temporary Hero/article PNGs are intentionally too large for production. They are not accepted as final performance assets.

## Severity closeout

- P0: **0**
- P1: **0**
- P2 implementation/content/SEO/a11y issues found during this audit: fixed
- P3 historical documentation drift: reconciled in current status/handoff; historical phase records remain as history

## Final-media blocker

The only planned gate remaining before Phase 14 is final editorial media:

1. receive final Hero/article/service imagery;
2. replace temporary assets without changing approved layout roles;
3. crop/focal-point review at 390 and 1440;
4. generate/choose appropriate responsive web formats and sizes;
5. preserve intrinsic dimensions and LCP priority contract;
6. verify Open Graph/Twitter image output;
7. rerun VNext verify and the full route matrix;
8. perform final visual acceptance;
9. only then begin Phase 14 cutover with explicit user approval.

## Cutover status

**DO NOT MERGE OR CUT OVER YET.**

Production remains the legacy/current `main` implementation. No production routing or alias was changed during this audit.
