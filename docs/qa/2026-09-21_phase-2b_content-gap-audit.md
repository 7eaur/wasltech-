# Phase 2B — Content Architecture & Evidence Completion

Date: 2026-09-21  
Branch: `rebuild/vnext-foundation-20260921`  
Status: **COMPLETE**

## Result

Phase 2B moved Wasl Tech VNext from normalized legacy evidence to a reviewed bilingual content and SEO baseline suitable for design implementation.

Verified baseline:
- Services: 8
- Projects: 14
- General FAQ: 13
- Articles: 0 — honest empty state
- Jobs: 0 — honest empty state
- Arabic public content: **READY**
- English public content: **READY**
- Privacy / Terms: **CONTENT REQUIRED** until final implementation/legal facts exist

## Services

All 8 services now include:
- stable identity and slug;
- Arabic + English title, value line and description;
- problem/need and scope summary;
- audiences;
- deliverables;
- capabilities/integration context;
- process;
- FAQ;
- constraints/dependencies;
- CTA;
- related article topics;
- Arabic + English SEO;
- Open Graph copy.

Related project proof is used where real evidence exists. Services without mapped portfolio proof do not invent it.

## Projects

All 14 projects use the locked simplified presentation model:
- stable id and slug;
- category / localized platform type;
- exactly one primary image;
- Arabic + English title and summary;
- highlights;
- overview;
- context;
- Wasl contribution;
- scope;
- delivered outputs;
- Arabic + English SEO;
- related service.

No project year, public live link, technology stack or image gallery is required by the VNext model.

## Page content

Reviewed bilingual content exists for:
- Home;
- About;
- Services;
- Portfolio;
- Process;
- Contact;
- Start Project;
- FAQ;
- Insights empty state;
- Careers empty state;
- 404.

Privacy and Terms remain intentionally incomplete until the final form/data/analytics/cookie/third-party behavior can be described truthfully.

## SEO / search-engine architecture

Implemented from the foundation:
- Arabic at `/`;
- English at `/en/`;
- stable slugs across locales;
- locale-aware `lang` / `dir`;
- canonical URL support;
- `hreflang` for Arabic and English;
- `x-default`;
- Open Graph metadata;
- Twitter card metadata;
- reusable structured-data builders for Organization, WebSite, Service, BreadcrumbList, FAQPage and CreativeWork;
- indexing helper tied to locale readiness;
- safe preview `robots.txt`;
- production robots and sitemap renderers;
- bilingual generated preview routes;
- CI guards for canonical/hreflang/social metadata and noindex preview behavior.

## Verification

Workflow: `VNext verify`  
Run: `35557088166`  
SHA: `6f0863a1b4a8490522c6df41e9b3be896432dcc0`  
Result: **SUCCESS**

- Build: PASS
- Structure: PASS
- Data/content integrity: PASS
- bilingual generated routes: PASS
- canonical/hreflang guards: PASS
- preview robots guard: PASS

## Gate

Phase 3 may now use realistic Arabic and English content lengths.

No final page should duplicate content outside the canonical data owners.

Legal copy remains deferred by design and does not block the design-system phase.
