# Wasl Tech — Webmaster & Search Measurement Plan

Date: 2026-09-25  
Phase: 9 — Webmaster integrations and measurement  
Status: PRE-PUBLICATION READY / EXTERNAL VERIFICATION PENDING

## 1. Principle

Webmaster measurement is separate from client-side analytics.

Google Search Console and Bing Webmaster Tools can be connected without adding tracking JavaScript to the public site, so the current privacy/runtime behavior does not need to change merely to measure search performance.

Do not add GA4, advertising pixels, session recording, or other client tracking as part of this phase unless the business separately approves it and the privacy/legal implementation is updated first.

## 2. Publication order

When the new Wasl Tech release is approved:

1. deploy the exact approved SHA to Production;
2. connect `www.wasl-tech.com` to that Production deployment;
3. make HTTPS `www.wasl-tech.com` the canonical public host;
4. redirect apex `wasl-tech.com` to `https://www.wasl-tech.com/`;
5. ensure HTTP redirects to HTTPS;
6. run `npm run vnext:check:production-search`;
7. verify robots/sitemap/canonical/hreflang on the real domain;
8. only then submit/refresh webmaster properties and sitemaps.

Do not submit the protected Vercel Preview URL as the canonical site.

## 3. Google Search Console

Preferred property:
- **Domain property:** `wasl-tech.com`
- do not include protocol or `www`;
- verify through the DNS TXT value supplied by Search Console.

Reason:
a Domain property covers protocol and subdomain variants, so it can show whether non-www or other variants are leaking search signals.

After verification:
- submit `https://www.wasl-tech.com/sitemap.xml`;
- inspect the Homepage and representative service/article URLs;
- confirm canonical selection;
- review Page indexing;
- review Search performance by Query, Page, Country and Device;
- review Core Web Vitals;
- monitor enhancements/structured-data issues where shown.

Do not mass-request indexing for every page. Sitemap + internal links + normal crawling remain the primary discovery system.

## 4. Bing Webmaster Tools

Preferred setup:
- first verify the Google Search Console Domain property;
- then import the verified site into Bing Webmaster Tools where available;
- confirm the sitemap after import;
- run Site Scan / URL inspection after production is stable;
- review Search Performance;
- review **AI Performance** for citations, cited pages, grounding queries, topics/intents and citation share when data is available.

AI citation counts are measurement signals, not a ranking score.

## 5. IndexNow

IndexNow is useful for notifying participating search engines about URLs that were actually added, updated, or deleted.

Current decision:
**do not activate automatic IndexNow submissions before the real production deployment trigger exists.**

When enabled later:
- host one stable IndexNow key file on the canonical production host;
- submit only changed URLs;
- trigger submission after a successful Production deployment, not merely after a Git commit;
- keep sitemap generation in place;
- treat IndexNow as discovery notification, never as an indexing guarantee.

## 6. Search Console platform properties

Google is gradually supporting Search Console platform properties for some social accounts.

If the feature is available to this account, it may later be useful for measuring how the official Wasl Tech Instagram/TikTok/X presence appears in Google Search. It is supplemental; the website Domain property remains the primary property.

## 7. Baseline measurement

Record the first stable baseline after production publication.

### Day 0
- deployed SHA;
- canonical domain/redirect status;
- sitemap URL count;
- GSC ownership + sitemap status;
- Bing ownership/import + sitemap status;
- known indexing errors;
- Core Web Vitals state.

### Day 7
- indexed-page coverage;
- first impressions/clicks/queries;
- pages receiving discovery;
- crawler/index errors;
- Bing search/AI data if populated.

### Day 28
- query clusters by service;
- Arabic vs English landing-page visibility;
- Yemen/Gulf country visibility where data exists;
- service pages vs articles vs case studies;
- Bing citation/cited-page patterns;
- pages with impressions but weak CTR;
- pages with strong queries but weak internal support.

### Ongoing monthly
- indexing regressions;
- canonical/hreflang issues;
- CWV;
- broken routes;
- organic query/page trends;
- AI citations;
- content freshness based on actual query evidence;
- conversion measurement only after an approved analytics/privacy implementation exists.

## 8. Decision rules

Do:
- improve pages based on query/citation evidence;
- consolidate overlapping intent;
- deepen pages that earn relevant impressions but fail to answer the intent well;
- add content only when a real uncovered question appears.

Do not:
- chase daily rank fluctuations;
- rewrite strong pages because of one keyword;
- manufacture location pages from country/city impressions;
- publish at arbitrary volume;
- treat citation counts as a score to game.

## 9. Production search smoke

Executable command after domain cutover:

`npm run vnext:check:production-search`

The smoke verifies representative live surfaces:
- robots;
- sitemap;
- index/follow;
- canonical URLs;
- HTTPS;
- apex → www redirect;
- Homepage;
- English Homepage;
- Services;
- service detail;
- Portfolio;
- one published Article.

This script intentionally is not part of pre-publication CI because the user will connect the canonical domain only at publication.
