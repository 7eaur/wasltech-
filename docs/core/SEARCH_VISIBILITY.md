# Wasl Tech — Search Visibility Standard

Status: CANONICAL / NON-NEGOTIABLE  
Scope: Google, Bing, AI-assisted search and answer engines  
Applies to: Arabic and English public surfaces of `www.wasl-tech.com`

## 1. Objective

Build durable discoverability for Wasl Tech in traditional search and AI-generated answers by improving:
- crawlability and indexability;
- technical search quality;
- clear entity identity;
- useful, evidence-based service and editorial content;
- structured data;
- internal linking and topical depth;
- site performance and accessibility;
- trustworthy external signals;
- measurable citation/search performance.

There is no guaranteed #1 ranking. The operating goal is to maximize qualified visibility, citations, organic discovery and conversions without violating search-engine guidelines or fabricating authority.

## 2. Source-of-truth order

1. Live repository and generated production HTML.
2. Verified production runtime.
3. Search-engine/webmaster official documentation.
4. Search Console / Bing Webmaster / analytics evidence once connected.
5. Verified business facts and approved Wasl Tech content.
6. Canonical project documentation.
7. Third-party SEO research as supporting evidence only.

Chat memory, SEO folklore and unsupported ranking claims never override these sources.

## 3. Non-negotiable search rules

### Technical
- Public content must be crawlable in build-time HTML.
- Production indexable pages must use `index,follow`.
- Canonical URLs must be self-consistent and absolute.
- Arabic is canonical at root routes; English mirrors under `/en/`.
- Published translations must use reciprocal hreflang plus x-default.
- Sitemaps are generated only from publishable canonical records.
- Preview/staging builds must remain noindex / crawl-blocked.
- One meaningful H1 per public page.
- Every indexable page requires a unique useful title and meta description.
- Open Graph/Twitter metadata must resolve to real assets.
- Critical content must never depend on client JavaScript.
- Core Web Vitals targets remain LCP ≤ 2.5s, INP < 200ms, CLS < 0.1.
- Redirects, 404s, broken internal links and orphan high-value pages are release defects.

### AI search / answer engines
- Production robots must allow `OAI-SearchBot` so public pages remain eligible for ChatGPT Search discovery.
- `GPTBot` training policy is independent from Search and must not be conflated with `OAI-SearchBot`.
- Bing/AI visibility must be measured through Bing Webmaster Tools AI Performance when available.
- Content should be easy to quote accurately: descriptive headings, concise answer-first passages, evidence, examples, tables/FAQs only when genuinely useful.
- AI visibility must never be pursued with hidden text, cloaking, synthetic citations, fake reviews, fake statistics or machine-generated filler.
- `llms.txt` is not treated as a ranking requirement unless major engines publish an official dependency on it.

### Content integrity
Forbidden:
- keyword stuffing;
- doorway/location pages without real differentiated value;
- scaled thin pages created only to capture queries;
- copied competitor text;
- fake client names, testimonials, ratings, results, awards or certifications;
- invented prices, durations, guarantees or SLAs;
- fake publication/update dates;
- schema that claims content not visibly present on the page;
- changing good customer-facing copy merely to repeat exact-match keywords.

Required:
- search intent first;
- original information and first-party experience where available;
- evidence before claims;
- clear authorship/publisher identity for editorial content;
- meaningful internal links between services, articles and verified work;
- Arabic written naturally for Arabic readers; English written naturally for English readers.

## 4. Entity standard

The primary entity is:
- Arabic: وصل تك
- English: Wasl Tech
- Canonical website: https://www.wasl-tech.com
- Market: Yemen + Gulf
- Canonical contact data comes only from `src/config/site.js`.

Entity consistency must be preserved across:
- Organization/WebSite schema;
- page metadata;
- Footer/contact surfaces;
- social profiles;
- Google/Bing webmaster properties;
- future business-directory profiles.

Structured data must use verified facts only. Social `sameAs` values should reference the canonical configured profiles.

## 5. Search architecture

Search visibility follows the real information architecture rather than creating parallel SEO-only pages.

Priority entity/page families:
1. Home — brand/entity + broad solution discovery.
2. Services — solution directory.
3. Eight service detail pages — commercial/decision intent.
4. Portfolio and project details — evidence and capability.
5. About + Process — trust and operating model.
6. Insights/articles — real informational and comparison intent.
7. Contact + Project Planner — conversion.
8. FAQ — objection handling, not keyword farming.

Every new SEO page proposal must answer:
- Which real user intent does this solve?
- Does an existing page already solve it?
- What original value/evidence can Wasl Tech add?
- Which canonical entity owns it?
- How will it be internally linked?
- What would make it useful even if search traffic did not exist?

If those questions have weak answers, the page is not created.

## 6. Content model for citation-friendly answers

For important service/article topics, prefer:
- a direct answer or definition near the top;
- descriptive H2/H3 headings;
- short paragraphs with one clear idea;
- concrete scope/deliverables;
- comparisons only when evidence-based;
- FAQs only for real decision questions;
- first-party examples/case studies;
- source attribution for external factual claims;
- visible updated dates only when a material review occurred.

Do not artificially format every page as FAQ or tables. Structure follows the information need.

## 7. Structured-data policy

Allowed when supported by visible content:
- Organization;
- WebSite;
- Service;
- BreadcrumbList;
- Article;
- FAQPage;
- CreativeWork;
- JobPosting only for a real published opening.

Rules:
- JSON-LD must parse.
- Schema and visible content must agree.
- Organization identity must stay consistent across schemas.
- No rating/review/price/availability markup without verified public data.
- Structured data helps understanding; it is not treated as a ranking guarantee.

## 8. Crawler / indexing policy

Production:
- `User-agent: *` → Allow public site.
- `OAI-SearchBot` → explicitly Allow public site.
- Sitemap → canonical production sitemap.
- Preview/staging → block crawling and emit noindex.

Infrastructure must not accidentally return 401/403/429 to legitimate crawlers through bot protection. This must be checked on production when infrastructure rules change.

## 9. Measurement model

Primary measurement:
- Google Search Console: indexing, impressions, clicks, query/page performance, rich-result/index issues and Core Web Vitals.
- Bing Webmaster Tools: indexing/search performance plus AI Performance citations, cited pages, grounding queries, intents/topics/citation share where available.
- Analytics: qualified organic landing sessions, engagement and project/contact conversions.
- Server/CDN logs when available: crawler access and error patterns.

Track trends by page family and locale, not only site-wide totals.

Do not use a single keyword rank as the definition of success.

## 10. Execution phases

### Phase 0 — Governance & baseline
- Freeze this standard as canonical.
- Record production baseline.
- Add executable SEO/AI release checks.
- Preserve current approved UX/content architecture.

Acceptance:
- canonical rules committed;
- search checks run in release verification;
- crawler policy explicit.

### Phase 1 — Technical discoverability
- audit generated production HTML;
- titles/descriptions/H1/canonical/hreflang;
- sitemap/robots;
- status codes/redirects;
- internal links/orphans;
- image metadata;
- performance/search delivery;
- crawler accessibility.

Acceptance:
- zero critical crawl/index defects;
- automated release gates green.

### Phase 2 — Entity + structured data
- strengthen Organization/WebSite identity;
- normalize `sameAs`;
- validate Service/Article/Breadcrumb/FAQ/CreativeWork schema;
- verify publisher/author identities and social links;
- validate structured data against visible content.

Acceptance:
- parseable evidence-safe JSON-LD across supported route families.

### Phase 3 — Intent & topical architecture
Create a bilingual intent map for:
- website development;
- mobile apps;
- ecommerce;
- custom software;
- technical solutions;
- company profiles;
- brand design;
- digital marketing.

Classify intents:
- commercial;
- comparison;
- planning;
- cost/effort questions where facts can be stated without fake pricing;
- problem/solution;
- local/regional only when truly relevant.

Acceptance:
- every target intent has one canonical owner page;
- no cannibalizing duplicate pages.

### Phase 4 — Service-page authority
For each of the eight services:
- improve answer-first clarity;
- deepen decision content only where useful;
- add verified related work;
- strengthen service-specific FAQs;
- connect relevant articles;
- review Arabic/English search metadata.

Acceptance:
- each service is the strongest canonical Wasl page for its topic without keyword stuffing.

### Phase 5 — Evidence / case studies
- upgrade project records only from verified evidence;
- clarify problem/context, what Wasl built and deliverables;
- link services ↔ work ↔ articles;
- never invent outcomes.

Acceptance:
- proof supports service claims.

### Phase 6 — Insights / topic clusters
Publish only high-value articles answering real questions.
Initial cluster types:
- planning a website/app/store;
- choosing between approaches;
- preparation checklists;
- UX/performance/SEO guidance;
- business-facing technical explanations.

Acceptance:
- each article serves one real intent and links naturally into the service/evidence graph.

### Phase 7 — AI answer readiness
- review pages for concise extractable answers;
- support factual claims with evidence/sources;
- verify OAI-SearchBot access;
- inspect Bing AI Performance;
- improve topics/pages with weak citation visibility based on evidence.

Acceptance:
- no AI-specific hacks; pages remain useful to humans and machines.

### Phase 8 — External authority & entity consistency
- align official social/business profiles;
- earn relevant editorial/partner mentions and legitimate backlinks;
- avoid paid/spam link schemes;
- keep canonical brand/contact identity consistent.

Acceptance:
- external entity signals are accurate and verifiable.

### Phase 9 — Webmaster integrations
- Google Search Console property + sitemap + monitoring.
- Bing Webmaster Tools property + sitemap + AI Performance.
- IndexNow implementation if it adds reliable freshness value.
- analytics conversion measurement.

Credentials/ownership verification remain user-controlled.

### Phase 10 — Continuous optimization
Monthly/quarterly:
- index coverage;
- query/page trends;
- content decay/freshness;
- AI citations;
- CWV/performance;
- broken links/redirects;
- schema errors;
- conversion paths;
- new intent opportunities from real data.

Changes are driven by evidence, not SEO superstition.

## 11. Release gate

A change affecting public search surfaces cannot be called complete until:
- build/release checks pass;
- search-visibility checks pass;
- no indexability regression;
- structured data remains valid;
- performance/accessibility gates relevant to the change pass;
- visible content remains factually supported;
- generated HTML is inspected, not only source templates.

## 12. Current priority

The immediate priority is Phase 0 → Phase 1.

Do not jump to mass content production before technical discoverability and measurement foundations are verified.
