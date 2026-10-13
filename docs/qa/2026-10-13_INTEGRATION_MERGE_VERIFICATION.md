# Wasl Tech — Integration Merge Verification

Date: 2026-10-13 (Asia/Aden)  
Repository: `7eaur/wasltech-`  
Integration branch: `integration/site-stabilization-20261010`  
Verified merge SHA: `2458c380c192cc263cb57376646bf12fab493f3a`

## Decision and scope

PR #46 was reviewed and merged into the integration branch. This step consolidated the recovery UX, responsive media, bilingual 404, safe Planner/no-JS behavior, accessibility corrections, source ownership checks and response-header fix. PR #45 then promoted that verified result to `main` and Production. DNS, SEO branches/PRs, and logo-motion work were not modified.

## Evidence on the exact merge SHA

| Gate | Result |
|---|---|
| Local `npm run vnext:verify` | PASS |
| Local `npm run vnext:verify:release` | PASS; 74 indexable routes |
| GitHub VNext verify | [Run 38441618751](https://github.com/7eaur/wasltech-/actions/runs/38441618751) — SUCCESS |
| Final media integrity | [Run 38441619031](https://github.com/7eaur/wasltech-/actions/runs/38441619031) — SUCCESS |
| Chromium AR/EN route matrix | [Run 38441618748](https://github.com/7eaur/wasltech-/actions/runs/38441618748) — SUCCESS |
| Screenshot/diagnostic artifact | `11836411339`, exact SHA, 76 PNGs plus accessibility/lab JSON |
| Vercel Preview | `dpl_7zR7MKw311aethFdnTEWUVBBnYne` — READY |
| Preview URL | `https://wasltech-oztdhsve0-wasl15.vercel.app/` |
| HTTP smoke | AR/EN `200`; localized AR/EN unknown routes `404`; CSS `200` |
| Response policy | `nosniff`, strict-origin referrer policy, camera/microphone/geolocation disabled, SAMEORIGIN present |

Quality output at the merge SHA: 8 services, 14 projects, 13 page records, 12 FAQ records, 3 published articles, 0 published jobs; CSS gzip 16,295 bytes, JS gzip 4,330 bytes, project image set 636,796 bytes.

## Visual review result

The exact route matrix covers representative public routes in Arabic and English at mobile and desktop breakpoints, including Home, Services, service details, Portfolio, project detail, About, Process, Contact, Planner, FAQ, Insights/articles, Careers, legal pages and standalone 404. Representative 390/1440 captures were manually reviewed. No new blocking crop, overflow, overlap, missing-content, broken RTL/LTR, or wrong 404 composition was confirmed.

This is source/Preview evidence, not a claim of full WCAG certification, real user conversion, or field Core Web Vitals.

## Production release

- PR #45 was merged to `main` at `43c7de6176defacf3f0c6da70ba239fe67a74b4e`.
- Vercel Production deployment `dpl_CvzRn4pJ6zXJ2MVFgsMigNxgnZNy` is READY on that exact SHA.
- Post-release checks on `https://wasl-tech.com/` returned `200` for `/`, `/en/`, `/contact/`, `/start-project/`, `/portfolio/` and `/assets/css/site.css`.
- Unknown Arabic and English routes returned localized `404` documents with `noindex,follow`.
- The previously published deployment was `dpl_5R9RFVYhWtCVbdQ6t6HhhodvUkno` from SHA `c775391550e8359eda4d4eb4ec47b3dba23aa419`; it remains the identified rollback point.

## Remaining gates

### External evidence that remains open after the technically successful release

- Physical iPhone Safari and Android Chrome review, real 200%/400% zoom and VoiceOver/NVDA.
- Field LCP/INP/CLS from real traffic rather than the existing synthetic lab sample.
- Actual receipt of WhatsApp/email and confirmation of social account ownership.
- At least one owner-approved case study with genuine screenshots, role/scope and verifiable outcomes.
- SEO/domain canonical work remains owned by its separate branch and is intentionally not modified here.

## Current release state

`PRODUCTION RELEASED / TECHNICAL SMOKE PASSED`. The external evidence listed above remains open and must not be presented as completed testing.
