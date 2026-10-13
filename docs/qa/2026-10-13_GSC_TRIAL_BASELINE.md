# GSC Trial Baseline — 2026-10-13

## Purpose

Persist the useful Search Console / GSC Wizard findings from the temporary trial period so the SEO program is not dependent on a paid third-party dashboard later.

Canonical production host: `https://wasl-tech.com`

Release event: SEO canonical release merged and deployed on 2026-10-13. The `www` host permanently redirects to the apex host. The apex sitemap was re-submitted to Google Search Console on the same date.

## Search Console baseline

Property: `sc-domain:wasl-tech.com`

Last 28 settled days through 2026-10-11:
- Clicks: 19
- Impressions: 418
- CTR: 4.55%
- Average position: 7.76

Last 90 settled days through 2026-10-11:
- Clicks: 44
- Impressions: 1,139
- CTR: 3.86%
- Average position: 8.78

Most historical clicks still belong to the former `www` homepage in Search Console data. This is expected during canonical migration because Google data reflects crawls and clicks that predate the 2026-10-13 release.

## Sitemap state

Active sitemap:
- `https://wasl-tech.com/sitemap.xml`
- 74 URLs
- Re-submitted to Google Search Console on 2026-10-13
- Initial submission was pending download with zero reported errors.

The old `https://www.wasl-tech.com/sitemap.xml` entry was removed from Search Console.

All 74 sitemap URLs were added to the GSC Wizard Indexing Tracker during the trial to establish an indexing baseline.

## Immediate URL Inspection sample

Ten high-priority URLs were inspected immediately after the release. The results reflect Google's most recent crawl, which for most pages occurred before the canonical release.

Indexed at inspection time:
- `https://wasl-tech.com/en/`
- `https://wasl-tech.com/services/`
- `https://wasl-tech.com/services/web-development/`
- `https://wasl-tech.com/services/mobile-app-development/`
- `https://wasl-tech.com/services/ecommerce/`
- `https://wasl-tech.com/services/custom-software/`
- `https://wasl-tech.com/services/digital-marketing/`

Not indexed / migration-state at inspection time:
- `https://wasl-tech.com/` — Google still selected the former `www` homepage canonical from a crawl before release.
- `https://wasl-tech.com/services/technical-solutions/` — Google still selected the former `www` canonical from a crawl before release.
- `https://wasl-tech.com/services/company-profiles/` — URL was still unknown to Google.

Do not treat the old user-declared `www` canonicals in these inspection records as current source-code defects until Google re-crawls the post-release HTML. Re-inspection after a fresh crawl is required.

## Search opportunities observed before migration settles

The highest low-CTR query opportunities in the last 28 settled days were:
- `موقع وصلك` — 87 impressions, position ~6.6, 0 clicks.
- `وصلك موقع` — 26 impressions, position ~3.6, 0 clicks.
- `wasl tech` — 11 impressions, position ~3.45, 0 clicks.
- `شركة وصل` — 6 impressions, position ~17.5, 0 clicks.
- `موقع وصل` — 7 impressions, position ~21.7, 0 clicks.

These are discovery signals, not target keywords to stuff into pages. Intent relevance must be verified before content changes.

## Cannibalization signals observed before migration settles

Queries with multiple historical landing URLs included:
- `wasl tech`
- `صلة تك`
- `موقع وصل`

Most competing URLs were legacy `www` / old-route pages, so the first remediation is canonical and redirect consolidation. Re-evaluate cannibalization only after Google has re-crawled the new canonical URL set.

## Trial-only actions completed

- Full 90-day SEO report generated.
- Search opportunity scoring generated.
- Cannibalization analysis generated.
- CTR-vs-benchmark analysis generated.
- Sitemap performance snapshot generated.
- All 74 sitemap URLs added to Indexing Tracker.
- Release annotation created for 2026-10-13.
- Immediate inspection run on 10 high-priority URLs.

## GA4 / Bing dependency

As of the final trial snapshot on 2026-10-13, the GSC Wizard connector still did not expose a Google Analytics scope to this session even though the user completed a GA4 connection step in the UI. Verify the Analytics permission/connection before relying on Wizard GA4 reports.

Bing Webmaster data was not configured in GSC Wizard at this snapshot.

## Independence plan after the trial

The SEO program must remain operable without GSC Wizard.

Primary free sources:
1. Google Search Console — indexing, sitemap, search queries, pages, countries, devices, canonicals and URL Inspection.
2. Google Analytics 4 — sessions, landing pages, engagement, events and conversions.
3. Bing Webmaster Tools — Bing indexing, queries and crawl diagnostics when connected.

GSC Wizard should be treated as an optional analysis accelerator, not a source of truth or a required production dependency.

## Next verification gates

1. Confirm Google downloads the apex sitemap without warnings/errors.
2. Re-inspect the homepage and priority service URLs after fresh post-release crawls.
3. Confirm Google's selected canonical migrates from `www` to `https://wasl-tech.com`.
4. Confirm new sitemap URLs begin appearing in Search Console performance/indexing data.
5. Re-run opportunity and cannibalization analysis only after canonical migration has had time to settle.
6. Verify GA4 independently of GSC Wizard.
