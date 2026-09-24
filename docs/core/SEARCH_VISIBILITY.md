# Wasl Tech — Search & AI Visibility Standard

Status: CANONICAL SEARCH VISIBILITY AUTHORITY  
Repository: `7eaur/wasltech-`  
Adopted: 2026-09-25

## 1. Mission

Wasl Tech must be technically eligible, clearly understood, useful enough to rank, and trustworthy enough to be cited across:

- Google Search, Images and AI features;
- Bing Search and Microsoft Copilot surfaces;
- ChatGPT Search;
- other search/answer systems that discover public web content.

The goal is durable discoverability and qualified business traffic. No implementation may promise a specific rank, citation count, traffic volume, or lead volume.

## 2. Governing principle

Search visibility is a product quality outcome, not a metadata trick.

Required order:

**Real user intent → verified expertise/evidence → useful page → crawl/index eligibility → internal discovery → entity clarity → external authority → measurement → iteration**

SEO, AEO and GEO are treated as one coordinated discipline. Vendor labels never override the fundamentals.

## 3. Non-negotiable rules

### 3.1 People-first and evidence-first

- Create content because a real prospect needs it.
- Prefer first-hand examples, real project evidence, process knowledge, screenshots, decisions, trade-offs and verified facts.
- Never create filler to hit a word count.
- Never create mass AI pages, spun pages, doorway pages, fake city pages or near-duplicate service pages.
- Never change dates only to simulate freshness.
- Never invent testimonials, clients, metrics, awards, certifications, outcomes, prices, durations, technologies or team members.
- AI-assisted drafting is allowed only when the final content is useful, fact-checked, edited and owned by Wasl Tech.

### 3.2 Technical eligibility

Every indexable page must have:

- server/build-time crawlable HTML with the primary content present;
- exactly one meaningful H1;
- useful title and meta description;
- self canonical;
- intentional `index/follow` state;
- correct reciprocal hreflang for published translations;
- crawlable internal links;
- valid status and no accidental soft-404 behavior;
- usable mobile layout;
- no critical resource/console errors;
- meaningful image alt text when the image conveys content;
- stable URLs.

Preview/internal routes remain noindex.

### 3.3 Crawler policy

Production must:

- allow normal public crawling;
- expose the production sitemap;
- explicitly allow `OAI-SearchBot` for ChatGPT Search discovery;
- avoid CDN/WAF rules that silently return 403/429 to legitimate search crawlers;
- keep preview environments blocked from indexing.

`GPTBot` is independent from `OAI-SearchBot`; training access is not treated as a Search ranking requirement.

### 3.4 No mythical AI shortcuts

- Google AI features use normal Search eligibility and SEO fundamentals.
- Do not add special AI markup merely because it is marketed as a ranking hack.
- `llms.txt` may be maintained only for a system that actually consumes it; it is not a Google ranking/visibility requirement.
- FAQ structured data is not a Google rich-result strategy in 2026; visible FAQ content may still be useful to users and other parsers.
- Structured data helps describe verified page entities; it does not create authority by itself.

### 3.5 Indexing and discovery

- Sitemap is generated only from publishable canonical routes.
- Draft/noindex URLs never enter the sitemap.
- `lastmod` may be emitted only from a real significant content/structured-data/link update timestamp.
- IndexNow is used for genuine add/update/delete events after production changes, not repeated submission spam.
- Important service, article and case-study pages must not be orphaned.

## 4. Entity authority

Wasl Tech must be represented consistently as one entity.

Canonical identity:

- Arabic name: وصل تك
- English name: Wasl Tech
- Canonical domain: `https://www.wasl-tech.com`
- Market: Yemen + Gulf
- Verified contact and social profiles come only from `src/config/site.js`.

Requirements:

- Organization schema uses one stable `@id`;
- Service/Article/CreativeWork/Job publisher or provider references the same organization where appropriate;
- `sameAs` uses only verified official profiles;
- site name, logo, contact details and brand naming remain consistent on-site and on external official profiles;
- no fake local address is created to chase local results.

## 5. Structured data policy

Use only schema that matches visible, verified content.

Current useful types include:

- Organization;
- WebSite;
- Service;
- BreadcrumbList;
- Article;
- CreativeWork;
- JobPosting when a real role is open;
- FAQPage only as descriptive schema when its visible questions/answers match exactly, not as a Google rich-result expectation.

Rules:

- no fake ratings/reviews;
- no fake pricing/availability;
- no hidden schema-only claims;
- validate JSON-LD syntax in CI;
- validate important templates against Schema.org and relevant search-engine tools before release.

## 6. Bilingual search architecture

Arabic is default at `/`; English lives under `/en/`.

Rules:

- same stable entity/slug across translations;
- translations must be publication-ready before hreflang/indexing;
- Arabic and English copy may target different phrasing when search intent differs;
- never machine-duplicate wording merely to create an English URL;
- x-default points to the Arabic default only while that remains the approved default experience.

## 7. Information architecture and internal linking

Search growth must follow the real service architecture.

Primary commercial topic owners are the eight canonical services. Supporting articles answer real decisions around those services.

Internal-link rules:

- Home and Services directory discover all core service paths;
- each service links to relevant real work and useful supporting articles when available;
- articles link back to the service or decision path they support;
- case studies link to relevant services;
- anchor text describes the destination naturally;
- no sitewide keyword-stuffed footer links;
- every high-value indexable page must have at least one meaningful internal discovery path.

## 8. Content authority system

### 8.1 Commercial pages

Each service page should answer, when verified:

- what need it solves;
- who it fits;
- what Wasl Tech can deliver;
- what depends on project scope;
- how the work progresses;
- relevant real work;
- real objections/FAQ;
- clear next action.

Do not create separate pages for tiny keyword variants.

### 8.2 Insights

Articles are published only when they answer a real planning/buying/implementation question.

Priority clusters:

- websites and web systems;
- mobile applications;
- e-commerce;
- custom software;
- technical solutions;
- company profiles;
- brand identity/design;
- digital marketing;
- cross-cutting topics such as UX, performance, SEO, security, content, integrations and project planning where Wasl has legitimate expertise.

Good formats:

- decision guides;
- comparisons;
- checklists;
- implementation explainers;
- cost/scope factor explanations without invented prices;
- migration/redesign guidance;
- lessons grounded in real delivery experience.

### 8.3 Case studies

Real case studies are authority assets.

Prefer:

**Context → need/problem → what Wasl built → verified evidence → useful lessons → related service → next step**

Do not turn incomplete projects into fabricated success stories.

## 9. AI-answer citation readiness

Pages that are likely to be cited should be easy to extract correctly.

Prefer:

- descriptive H2/H3 headings;
- direct answer paragraphs near the relevant heading;
- concise definitions before deeper detail;
- clearly scoped lists and tables when they improve understanding;
- named entities and terms used consistently;
- claims supported by first-party evidence or cited reliable sources;
- dates on genuinely time-sensitive content;
- visible authorship/editorial ownership where readers would expect it.

Do not write unnatural “AI bait” paragraphs.

## 10. Images and multimodal discovery

- Use real/custom project and service visuals where possible.
- Important images need descriptive filenames, useful alt text and correct dimensions.
- Hero/LCP images remain optimized and responsive.
- Production indexable pages allow large image previews.
- Article and case-study visual assets should reinforce the same entity/topic as the text.
- Essential information must not exist only inside an image.

## 11. External authority

Off-site work must be legitimate.

Priorities:

- consistent official social profiles;
- relevant business/profile listings where factually eligible;
- real mentions, partnerships, portfolios and references;
- useful public GitHub/project evidence when appropriate;
- earned editorial links and citations from relevant sources.

Forbidden:

- purchased spam backlinks;
- link farms;
- mass directory submission;
- fake reviews;
- private blog networks;
- reciprocal-link schemes built only for ranking.

## 12. Measurement

No SEO change is judged by impressions alone.

Track when available:

### Google Search Console
- indexed pages and exclusions;
- crawl/index errors;
- impressions;
- clicks;
- CTR;
- query/page performance;
- image/multimodal and generative-AI reporting when surfaced in the account.

### Bing Webmaster Tools
- crawl/index health;
- search performance;
- AI Performance citations;
- cited pages;
- grounding queries;
- topics/intents/citation-share views when available.

### Analytics/business outcomes
- organic landing pages;
- ChatGPT/Bing/AI referrers where detectable;
- project-planner starts;
- WhatsApp/contact actions;
- qualified leads;
- conversion quality.

Baseline → change → observation window → decision. Never claim causation from one metric movement alone.

## 13. Execution phases

### S0 — Baseline and source-of-truth audit
- inspect live main;
- inventory current technical SEO;
- record missing controls, schemas, measurement and content gaps.

Gate: factual baseline exists.

### S1 — Technical search foundation
- canonical rules documented;
- crawl policy hardened;
- OAI-SearchBot explicitly allowed;
- rich preview permissions reviewed;
- organization entity graph strengthened;
- executable search-visibility CI added.

Gate: release checks pass on generated production output.

### S2 — Webmaster, indexing and freshness
- verify Google Search Console ownership;
- verify Bing Webmaster Tools ownership;
- submit sitemap;
- inspect domain variants and canonical redirects;
- implement/verify IndexNow for production change notifications;
- inspect crawler/firewall accessibility;
- establish baseline exports.

Gate: both webmaster platforms can see the canonical production site and sitemap.

### S3 — Intent and query map
Build an Arabic/English map for Yemen + Gulf covering:

- brand queries;
- service/commercial queries;
- problem/need queries;
- comparison queries;
- planning/cost-factor queries;
- informational support topics.

Every target query maps to one canonical page owner. No cannibalizing duplicates.

Gate: approved query-to-page map.

### S4 — Commercial page authority
Improve the eight service pages and key directories against the intent map without bloating them.

Gate: each commercial topic has one strong canonical page with useful proof and internal links.

### S5 — Topic clusters and editorial authority
Publish a small number of high-value articles in prioritized clusters, then expand from measured demand and real expertise.

Gate: each article has unique value, internal links, authorship, useful visuals where relevant, and no filler.

### S6 — Proof and case-study authority
Strengthen real project pages with verifiable context, delivery evidence and related service relationships.

Gate: claims are evidence-safe and useful to prospects.

### S7 — Entity and external authority
Align official profiles/listings and pursue legitimate relevant mentions/citations.

Gate: public identity is consistent; no spam link tactics.

### S8 — AI citation optimization and iteration
Use Search Console, Bing AI Performance and referral/conversion data to:

- find pages already earning visibility;
- improve ambiguous or shallow sections;
- expand topics with demonstrated demand;
- refresh genuinely outdated content;
- strengthen source/evidence quality.

Gate: changes are data-led and documented.

## 14. Phase discipline

Do not rush through all phases at once.

For each phase:

**Audit → plan → implement → build → automated checks → production/runtime evidence when applicable → document**

A phase advances only after its acceptance gate is satisfied and the current project workflow approves moving forward.

## 15. Current official guidance baseline

This standard is aligned to the official guidance reviewed on 2026-09-25 from:

- Google Search Central — Search Essentials, people-first content, AI features, robots meta and sitemap guidance;
- OpenAI — OAI-SearchBot / GPTBot crawler controls;
- Bing Webmaster Tools — AI Performance;
- IndexNow — official protocol and verification documentation.

When vendor guidance changes, update this document only when the stable project rule actually needs to change.
