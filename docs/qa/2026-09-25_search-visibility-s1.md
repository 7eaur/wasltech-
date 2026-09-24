# Wasl Tech — Search Visibility Phase S1 QA

Date: 2026-09-25  
Repository: `7eaur/wasltech-`  
Branch: `seo/search-visibility-foundation-20260925-v2`  
Implementation SHA: `982da1c51ddf7fd6dd958a386b2038718d27a357`  
Draft PR: `#36`

## Scope

Close S0 baseline and S1 technical search foundation without changing the approved visual/page architecture or publishing to production.

## Canonical rules established

`docs/core/SEARCH_VISIBILITY.md` is now the authority for:

- classic SEO + AI-search visibility;
- people-first/evidence-first content;
- crawler/index policy;
- entity consistency;
- structured data;
- bilingual search architecture;
- internal linking;
- content authority/topic clusters;
- case-study proof;
- multimodal discovery;
- external authority;
- Search Console/Bing/AI measurement;
- phased execution S0–S8.

## Technical changes verified

- indexable production robots meta includes:
  - `index`
  - `follow`
  - `max-image-preview:large`
  - unrestricted snippet/video preview directives;
- `robots.txt` explicitly allows `OAI-SearchBot`;
- preview builds remain crawler-blocked;
- Organization schema has stable `@id`;
- verified phone/email contact point included;
- official verified social URLs feed `sameAs`;
- WebSite/Service/CreativeWork/Article/Job organization references use the same entity id where applicable;
- release verification includes `scripts/check-search-visibility.mjs`.

## Search visibility CI contract

The new check covers every generated indexable release route and fails on:

- missing title;
- missing meta description;
- not exactly one H1;
- wrong canonical;
- missing `index` / `follow` / large-image preview directive;
- leaked `NOT VERIFIED` / `CONTENT REQUIRED`;
- invalid JSON-LD;
- missing expected schema on Home, service detail, project detail and article detail routes;
- duplicate page titles;
- high-value indexable URLs with zero internal inbound discovery links.

Duplicate meta descriptions currently warn rather than fail so they can be reviewed without masking more severe release defects.

## Verification evidence

GitHub Actions:
- workflow: `VNext verify`
- run: `36065213520`
- job: `107853271441`
- conclusion: **SUCCESS**

Log evidence:
- `VNEXT RELEASE CHECK: PASSED`
- `SEARCH VISIBILITY CHECK: PASSED`
- `Indexable routes checked: 74`
- `Crawler eligibility, metadata, entity schema and internal discovery guards: PASSED`

## External baseline observations

Current public-search evidence still exposes legacy Wasl Tech content and old URL forms. An old query-style service URL is discoverable and shows broken Arabic encoding in parts of its indexed/rendered text.

This is not reopened inside S1. It is an explicit S2 priority: canonical-domain/runtime verification, legacy URL inventory, 301 mapping, stale-index cleanup, Search Console/Bing validation and IndexNow.

## Gate

S1: **PASS**

No production merge/deploy was performed.

Next permitted phase:
**S2 — Webmaster, indexing and freshness**, only when explicitly started under the project phase discipline.
