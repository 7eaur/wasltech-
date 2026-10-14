# Wasl Tech — Current Status

Updated: 2026-10-14 (Asia/Aden)

## Repository state

- Production/main SHA at audit start: `14cdd1de7a6c2112cd053e9c7be1561be38e40d7`.
- Active technical branch: `perf/site-audit-hardening-20261013`.
- Draft review: [PR #58](https://github.com/7eaur/wasltech-/pull/58).
- SEO/search-engine branches and logo-motion branches remain separate and untouched.
- Production has not been changed by this branch.

## Completed on the active branch

- Self-hosted IBM Plex fonts and removed Google Fonts from the critical path.
- Added responsive AVIF delivery with WebP fallback for the active raster set.
- Added image/font/CSS/JS/HTML budgets and integrity checks.
- Improved Homepage decision copy and corrected confirmed accessibility findings.
- Split the former all-page stylesheet into one shared bundle and one route-family bundle per page.
- Moved the repeated executable GA bootstrap into one local deferred, cacheable client while preserving denied-by-default storage.
- Removed non-runtime legacy root HTML/CSS/JS, temporary/generated legacy assets and stale duplicated QA records.
- Preserved final source media, active optimized media and `wasl-social-poster-system/`.
- Closed superseded Draft PRs #42 and #43; their relevant implementation is already represented by the released integration line.
- Restored the approved CSS cascade after route splitting and moved FAQ/service jump navigation to its real shared owner.

## Current performance evidence

- Previous Production PageSpeed baseline: mobile 82, LCP 3.6s, TBT 0ms, CLS 0; desktop 99, LCP 0.8s.
- Exact implementation matrix on SHA `64c0e84`: 84 indexable routes, seven widths, 76 screenshots, zero automated axe findings.
- Synthetic constrained mobile trace: LCP 1,504ms, CLS 0, no interaction/scroll long tasks.
- AVIF set is 23.5% smaller than the equivalent WebP set.
- Route CSS split reduced the maximum page CSS transfer from 14,676 to 10,030 gzip bytes (31.7%); all owned browser JS is 4,784 gzip bytes.

## Open technical gates

1. Run public PageSpeed after an explicitly approved Production release.
2. Complete physical-device 200%/400% zoom and screen-reader checks.
3. Confirm one owner-approved Planner-to-WhatsApp receipt test.
4. Add only authentic case-study proof supplied or approved by the owner.
5. Validate CSP in report-only/Preview before enforcement; privacy-safe conversion events remain a separate approval.
6. Review field CWV when sufficient CrUX traffic exists.
7. Delete the 48 reviewed obsolete remote branches when authenticated browser access is available.

Canonical issue register: `docs/qa/2026-10-14_PERFORMANCE_UX_CONTENT_AUDIT.md`.
