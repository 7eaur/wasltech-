# Wasl Tech — Performance, UX, Content and Runtime Audit

Date: 2026-10-14 (Asia/Aden)

Working branch: `perf/site-audit-hardening-20261013`

Base reconciled from live `main`: `14cdd1de7a6c2112cd053e9c7be1561be38e40d7`

Verified implementation SHA: `64c0e842c6b51a02367fbbfc5f34960f96740b55` — Draft PR [#58](https://github.com/7eaur/wasltech-/pull/58)

Scope exclusion: no work was performed on SEO/search-engine branches, DNS, Search Console, Bing or logo-motion branches.

## 1. Evidence inspected

- Live GitHub `main` and its 56 commits after the former production snapshot.
- Vercel Production deployment `dpl_B78dqVSJ9c23YHYjKeFeD4QPdFxZ`, READY on exact SHA `14cdd1d`.
- Vercel runtime error clusters for the preceding seven days: none reported.
- Official-domain HTTP response and security headers on `https://wasl-tech.com/`.
- Public Homepage structure and rendered Arabic copy in a real browser.
- PageSpeed Insights mobile and desktop lab report created 2026-10-13 at 21:21 Asia/Aden. It had no CrUX field data.
- Source/build/data/quality/release/search/AI/entity/media checks after reconciling current `main`.
- UPDATE CARD implementation as a reference only. No UPDATE CARD source or repository was changed or copied wholesale.

## 2. Verified production baseline

| Area | Verified state |
|---|---|
| Production SHA | `14cdd1d` |
| Vercel state | READY |
| Runtime errors | None reported over seven days |
| HTTP | Official apex returns `200`; Vercel cache HIT observed |
| Security headers | HSTS, `nosniff`, strict-origin referrer policy, restricted permissions policy and SAMEORIGIN framing present |
| Field CWV | No CrUX data available |
| Mobile lab | Performance 82, Accessibility 96, Best Practices 100, SEO 100 |
| Mobile metrics | FCP 3.0s, LCP 3.6s, TBT 0ms, CLS 0, Speed Index 4.5s |
| Desktop lab | Performance 99, Accessibility 95, Best Practices 100, SEO 100 |
| Desktop metrics | FCP 0.8s, LCP 0.8s, TBT 0ms, CLS 0.005, Speed Index 0.8s |

The laboratory report predates the final `14cdd1d` content merge by a few hours. A new exact-production run was requested at `zztu7zfoxy`, but PageSpeed remained in its loading state during this audit. Therefore the old lab result is a useful baseline, not proof for the latest SHA.

## 3. Findings closed on this branch

| ID | Priority | Finding | Root-cause correction | State |
|---|---:|---|---|---|
| PERF-01 | P1 | Google Fonts CSS was a render-blocking third-party request with an estimated 780ms lab cost. | Self-hosted the approved IBM Plex Sans Arabic/Latin WOFF2 files, embedded `@font-face`, localized the preload and removed Google Fonts requests. | CLOSED_LOCAL |
| PERF-02 | P1 | Mobile image delivery showed about 120KiB potential savings on the Homepage. | Added AVIF candidates to all 100 active runtime raster variants through `<picture>`, retaining responsive WebP fallback. | CLOSED_LOCAL |
| PERF-03 | P2 | Runtime CSS was shipped with source whitespace/comments while near its gzip budget. | Added conservative build-time CSS minification. Preview CSS gzip is 15,209 bytes; Release CSS gzip is about 14.7KiB. | CLOSED_LOCAL |
| PERF-04 | P2 | Local font assets had no explicit long-lived browser-cache contract. | Added an immutable one-year font cache route and an executable ownership assertion. | CLOSED_LOCAL |
| A11Y-01 | P1 | Homepage process step numbers failed contrast in Lighthouse. | Replaced the muted token with the verified secondary-text token at the owning selector. | CLOSED_LOCAL |
| A11Y-02 | P1 | Two visible links named “اكتشف خدماتنا” led to different destinations. | The project-planner action is now “خطّط مشروعك / Plan your project”; the Hero paths and labels now disclose their destinations. | CLOSED_LOCAL |
| MKT-01 | P1 | Hero support and trust statements were generic and did not clarify the next step. | Preserved the official slogan, made the support outcome/service-specific, replaced generic claims with goal/scope/support signals, and made Planner/Portfolio the primary decision paths. | CLOSED_LOCAL |
| QA-01 | P1 | `perf/**` pushes were not covered by all relevant GitHub workflows. | Added `perf/**` to VNext verify, Chromium route matrix and media-integrity push triggers. | CLOSED_LOCAL |
| QA-02 | P1 | AVIF or local-font regressions could pass the old quality gate. | Added file-signature, size, pairing, preload and no-external-font checks. | CLOSED_LOCAL |
| PRIV-01 | P1 | Privacy copy said the browser requested fonts from Google after fonts became local. | Updated the bilingual external-channel disclosure and added a regression check that rejects the obsolete Google Fonts statement. | CLOSED_LOCAL |
| DOC-01 | P1 | Status/handoff still named an obsolete Production SHA after newer releases. | Reconciled current Production SHA/deployment and made this audit the active non-SEO baton. | CLOSED_LOCAL |
| DOC-02 | P2 | The working tree contained dozens of superseded phase reports and competing handoffs after their decisions had already been integrated. | Kept the canonical core documents and current evidence, removed the stale working copies, and retained their recoverable history in Git. | CLOSED_LOCAL |
| PERF-07 | P2 | Every page loaded the full cross-site stylesheet; PageSpeed estimated roughly 12KiB unused CSS on the Homepage. | Split CSS into one shared bundle plus exactly one route-family bundle. The maximum per-page transfer fell from 14,676 to 10,030 gzip bytes (31.7%) without duplicating page implementations. | CLOSED_REMOTE |
| LEGACY-01 | P3 | Pre-VNext root HTML/CSS/JS, generated media, Font Awesome files and obsolete image copies remained alongside the active build. | Removed only paths proved outside the VNext build graph, preserved final source media and the requested marketing system, and added an executable guard that rejects restoration of retired runtime paths. | CLOSED_LOCAL |
| BRANCH-01 | P2 | Two stale Draft PRs represented already-integrated recovery work. | Closed Draft PRs #42 and #43 after verifying that their relevant implementation was superseded by the released integration line. | CLOSED_REMOTE |
| SEC-02 | P2 | The GA bootstrap was executable inline code duplicated into every non-404 page, complicating CSP and adding repeated HTML. | Moved it into one local deferred client, kept production-host gating and denied-by-default storage, and added checks rejecting executable inline scripts other than declarative JSON-LD. | CLOSED_LOCAL |
| QA-03 | P1 | The first route-split matrix exposed lost FAQ target sizing, then an inverted route/refinement cascade exposed 12.16px service decision labels. | Moved the shared jump-navigation rules to `components.css`, restored the original approved cascade order in every route bundle, and added ownership/order assertions. The final matrix reports zero axe findings and passes critical label sizing in both locales. | CLOSED_REMOTE |
| REL-02 | P0 gate | The cleanup/CSS-split batch required new exact-SHA evidence after repository removal and cascade corrections. | On `64c0e842`, GitHub VNext verify [#38533129350](https://github.com/7eaur/wasltech-/actions/runs/38533129350), media integrity [#38533129335](https://github.com/7eaur/wasltech-/actions/runs/38533129335) and Chromium matrix [#38533129396](https://github.com/7eaur/wasltech-/actions/runs/38533129396) succeeded; Vercel Preview `dpl_FREkoDgjhGeqYYUgaWNxNV4obsgX` is READY on the same SHA. | CLOSED_REMOTE |
| REL-01 | P0 gate | The branch needed exact-SHA remote build and deployment evidence. | GitHub VNext verify [#38483010731](https://github.com/7eaur/wasltech-/actions/runs/38483010731), media integrity [#38483010980](https://github.com/7eaur/wasltech-/actions/runs/38483010980), and Chromium matrix [#38483010739](https://github.com/7eaur/wasltech-/actions/runs/38483010739) succeeded on `3ff0c86`; Vercel Preview `dpl_EnrLco3oH4kcFVypvTPEBCjDYkYF` is READY on the same SHA. | CLOSED_REMOTE |
| VIS-01 | P0 gate | The optimized output needed responsive AR/EN verification. | The exact-SHA matrix passed all 84 indexable routes at 320, 360, 390, 768, 1024, 1366 and 1440px; 76 AR/EN screenshots were generated and the mobile/desktop contact sheets plus representative full-resolution Home/Process captures were manually inspected without a confirmed crop, wrap or overflow regression. | CLOSED_REMOTE |

### Payload evidence

- 100 active WebP files: 2,898,190 bytes.
- Equivalent 100 AVIF files: 2,216,532 bytes.
- Format saving when AVIF is selected: 681,658 bytes, or 23.5% across the active set.
- PageSpeed-flagged Homepage-related family: 147,176 bytes smaller across its stored candidates.
- Largest AVIF is 70,226 bytes, below the new 80KiB AVIF ceiling.
- Project WebP set: 636,796 bytes; Project AVIF set: 497,339 bytes.
- All five owned browser clients total 4,784 gzip bytes; the GA bootstrap is now cacheable instead of repeated inline. TBT remained 0ms in the production baseline.

## 4. Open register

These are the remaining real gaps. They must not be marked closed from source review alone.

| ID | Priority | Gap / risk | Required closure evidence | State |
|---|---:|---|---|---|
| PERF-05 | P1 | The protected Preview cannot be submitted directly to public PageSpeed, so the current 82/3.6s mobile values remain the latest public baseline. Exact-SHA local throttled diagnostics improved to LCP 1,504ms and CLS 0, but are not field data or a substitute for Lighthouse/PageSpeed. | Run mobile/desktop PageSpeed against Production after approved release; require LCP ≤2.5s or document the next bottleneck. | BLOCKED_UNTIL_RELEASE |
| PERF-06 | P1 | There is still no CrUX/field CWV dataset. | Accumulate real traffic and review p75 LCP/INP/CLS in Search Console/CrUX when available. | BLOCKED_EXTERNAL |
| CONTACT-01 | P1 | Code truthfully opens WhatsApp but actual receipt on the business account is not evidenced. | Send one owner-approved test message from the Planner and confirm receipt/content on the real business account. | BLOCKED_OWNER |
| PROOF-01 | P1 | Portfolio pages describe work, but verified case-study outcomes/evidence are still limited. | Provide authentic project screenshots, role/scope and approved outcome evidence; never invent metrics. | BLOCKED_CONTENT |
| A11Y-03 | P1 | Automated axe/reflow does not replace device accessibility. | Physical 200%/400% zoom plus VoiceOver/TalkBack/NVDA keyboard/read-order checks on representative AR/EN routes. | BLOCKED_DEVICE |
| SEC-01 | P2 | Production has strong baseline headers but no Content-Security-Policy. Executable analytics is now local, but inline JSON-LD and GA endpoints still require a carefully validated policy. | Design a report-only CSP compatible with JSON-LD and GA endpoints, inspect Preview violations, then enforce only after clean evidence. | OPEN_PREVIEW_VALIDATION |
| ANALYTICS-01 | P2 | GA4 loads with denied storage, but the conversion path has no approved explicit events. | After privacy approval, define minimal events for Planner start/review and outbound WhatsApp clicks without sending form values or message contents. | BLOCKED_APPROVAL |
| OPS-01 | P2 | Exact GitHub Actions workflow runs were not returned for current Production merge SHA; only Vercel success was visible through the connector. | Confirm the exact main SHA VNext/matrix runs in GitHub, or rerun before the next release. | OPEN |
| OPS-02 | P3 | Vercel build succeeds but npm 11 warns that inherited config `cache-dir` is unknown and will stop working in the next npm major. The project has no matching repo file or Vercel project environment variable. | Treat as runner/platform configuration; recheck after a Vercel/npm image update and escalate only if install caching or builds regress. | MONITOR_EXTERNAL |
| BRANCH-02 | P2 | Forty-eight obsolete remote branches still exist after their PRs were merged, closed or superseded. The preserved set is `main`, current technical, `vnext`, every `seo/**` and both `design/wasl-logo-motion-*` branches. | GitHub's connected API has no branch-delete operation and browser authentication was not completed. Delete only the reviewed set after authenticated access, then refetch and prove all 15 protected branches remain. | BLOCKED_AUTH |

## 5. UPDATE CARD decisions

Adopted because they solve measured Wasl Tech needs:

- local approved fonts and preload;
- modern image format with fallback;
- image/font budgets and integrity guards;
- lazy loading, dimensions and async decoding already present in Wasl Tech and retained.

Rejected for Wasl Tech:

- first-visit blocking logo intro: current mobile FCP/LCP already need improvement, so delaying access to content would be harmful;
- persistent “intro completed” storage: unnecessary when the intro itself is not justified;
- navigation animation/loader: TBT is 0ms and native navigation is already fast;
- copying UPDATE CARD’s thresholds or file structure without measuring Wasl Tech assets.

## 6. Verification completed locally

- `npm run vnext:verify` — PASS.
- `npm run vnext:verify:release` — PASS.
- `node scripts/check-final-media.mjs` — PASS.
- `git diff --check` — PASS.
- 86 public Preview HTML files link-checked.
- 84 indexable Release routes checked.
- Search visibility, AI-answer readiness and entity consistency checks all pass after merging current `main`.

## 7. Exact-SHA remote verification

- Verified implementation SHA `64c0e842c6b51a02367fbbfc5f34960f96740b55`; Draft PR [#58](https://github.com/7eaur/wasltech-/pull/58).
- Vercel Preview `dpl_FREkoDgjhGeqYYUgaWNxNV4obsgX` — READY on that exact SHA.
- GitHub VNext verify, final-media integrity and Chromium route matrix all succeeded on the exact SHA.
- The matrix passed all 84 indexable routes at 390px and 1440px plus the seven-width route-family captures, keyboard/no-JS/degraded-runtime checks and bilingual layout contracts.
- Current constrained diagnostics: DOM ready 1,054ms, startup long task 132ms, interaction long task 0ms and scroll long task 61ms. The earlier LCP trace remains a synthetic baseline, not field CWV.
- axe-core 4.10.3 mobile WCAG A/AA automated audit reported zero findings in Arabic and English. Physical zoom and assistive-technology checks remain A11Y-03.
- Screenshot artifact `11878718807` contains 76 AR/EN desktop/mobile PNGs plus accessibility and lab evidence; it expires after the workflow's three-day retention.

## 8. Next execution order

1. Delete only the 48 reviewed obsolete remote branches when authenticated branch-delete access is available; preserve the documented 15-branch set.
2. Perform A11Y-03 on physical devices and assistive technologies.
3. Confirm CONTACT-01 with an owner-approved real WhatsApp receipt test.
4. Supply authentic material for PROOF-01; do not invent outcomes or metrics.
5. Scope SEC-01 separately; ANALYTICS-01 remains outside this technical cleanup pending privacy approval.
6. After explicit merge/release approval, rerun public PageSpeed and close PERF-05 from the official domain.
7. Do not merge or publish Production without owner approval.
