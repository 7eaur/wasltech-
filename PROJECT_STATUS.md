# Wasl Tech VNext — Current Project Status

## 2026-10-14 — Performance/UX/content hardening active

- Current live GitHub/Production `main` is `14cdd1de7a6c2112cd053e9c7be1561be38e40d7`, not the older `abbbe9e` snapshot recorded below. Vercel deployment `dpl_B78dqVSJ9c23YHYjKeFeD4QPdFxZ` is READY on that exact SHA; no runtime error clusters were reported over seven days.
- Active non-SEO branch: `perf/site-audit-hardening-20261013`, reconciled cleanly with current `main`. No SEO/search-engine, DNS, Search Console, Bing or logo-motion branch was edited.
- Implemented locally: self-hosted IBM Plex fonts, localized font preload, AVIF + WebP responsive picture delivery for 100 active raster candidates, build-time CSS minification, font caching, contrast/link-purpose corrections, sharper bilingual Homepage conversion copy and stronger performance/asset regression checks.
- Local evidence passes: `npm run vnext:verify`, `npm run vnext:verify:release`, `node scripts/check-final-media.mjs`, `git diff --check`; 86 Preview HTML files and 84 indexable Release routes are covered. Preview CSS gzip is 15,209 bytes, JS gzip 4,330 bytes, and the AVIF set is 23.5% smaller than its equivalent WebP set.
- Full finding/closure/open register: [`docs/qa/2026-10-14_PERFORMANCE_UX_CONTENT_AUDIT.md`](docs/qa/2026-10-14_PERFORMANCE_UX_CONTENT_AUDIT.md).
- Remaining gates: remote branch push, exact-SHA GitHub/Vercel Preview, full AR/EN visual matrix, Preview PageSpeed, real-device accessibility, field CWV, real contact receipt and authentic case-study evidence. No merge or Production release is authorized by this status entry.

## 2026-10-13 — SEO/Main reconciliation in progress

- Current Production `main` remains `abbbe9e9e51533a4a8c9d75104f86805f8870bad`; this SEO work does **not** change Production.
- Historical SEO PR #37 is superseded for implementation: it is 48 commits ahead / 163 behind current `main` and must not be merged directly.
- Active clean branch: `seo/search-visibility-reconciled-20261013`, created from current Production `main`.
- October UX/media/security/404/Planner/accessibility work is preserved. Only still-valid Search/AI/Entity/measurement changes are carried forward.
- Production already has both `wasl-tech.com` and `www.wasl-tech.com` verified on Vercel; approved canonical is now `https://wasl-tech.com`. `www`→apex redirect is the remaining host-normalization release gate.
- The four article records that existed only in the old Draft SEO branch are not carried into the active runtime article collection; they remain historical candidate content in PR #37 until a real publication decision/date exists.
- Canonical reconciliation evidence: `docs/qa/2026-10-13_SEO_MAIN_RECONCILIATION.md`.
- No merge to `main`, Production cutover, DNS change, Search Console submission or Bing submission is authorized by this branch work alone.

## 2026-10-13 — Verified integration released to Production

- PR [#46](https://github.com/7eaur/wasltech-/pull/46) was reviewed, marked ready, and merged into `integration/site-stabilization-20261010` at merge SHA `2458c380c192cc263cb57376646bf12fab493f3a`.
- PR [#45](https://github.com/7eaur/wasltech-/pull/45) was then merged into `main` at `43c7de6176defacf3f0c6da70ba239fe67a74b4e`.
- The merge result passes local `npm run vnext:verify`, `npm run vnext:verify:release`, GitHub VNext verify [#38441618751](https://github.com/7eaur/wasltech-/actions/runs/38441618751), final-media integrity [#38441619031](https://github.com/7eaur/wasltech-/actions/runs/38441619031), and Chromium route matrix [#38441618748](https://github.com/7eaur/wasltech-/actions/runs/38441618748).
- Exact integration Preview `https://wasltech-oztdhsve0-wasl15.vercel.app/` is READY. Live authenticated HTTP checks returned AR/EN `200`, localized AR/EN unknown-route `404`, CSS `200`, and all four expected protection headers.
- Visual evidence artifact `11836411339` contains the exact merge-SHA route matrix. Representative AR/EN 390/1440 screenshots were reviewed; no new blocking layout defect was confirmed.
- Vercel Production deployment `dpl_CvzRn4pJ6zXJ2MVFgsMigNxgnZNy` is READY on the exact `main` merge SHA. Post-release checks on the official domain returned AR/EN and critical public routes `200`, localized AR/EN unknown-route `404`, and CSS `200`.
- SEO PRs/branches and logo-motion work remain untouched and were not part of this release.
- Current merge evidence and remaining post-release/external gates: [`docs/qa/2026-10-13_INTEGRATION_MERGE_VERIFICATION.md`](docs/qa/2026-10-13_INTEGRATION_MERGE_VERIFICATION.md).

## 2026-10-13 — فرع الإصلاح: مرجع شامل للحالة والمتبقي (الحالي)

- المرجع التفصيلي الواحد للحالة، المنجز، البواقي وأولوية/مالك/دليل قبول كل بند R01–R10: [`docs/qa/2026-10-13_BRANCH_RECOVERY_FINAL_HANDOFF.md`](docs/qa/2026-10-13_BRANCH_RECOVERY_FINAL_HANDOFF.md). **اقرأ أول قسم «الحالة الحالية المعتمدة»؛ ما بعد «الأدلة التاريخية» مجرد سجل سابق.**
- Snapshot قبل توثيق هذه الدفعة: `df7690f2e745b0575a1057926f59081273c7e848`، PR [#46 Draft](https://github.com/7eaur/wasltech-/pull/46) → `integration/site-stabilization-20261010` (لا merge). GitHub Node24 VNext [push #38436026753](https://github.com/7eaur/wasltech-/actions/runs/38436026753) و[PR #38436035428](https://github.com/7eaur/wasltech-/actions/runs/38436035428) **PASS**؛ Preview [READY](https://wasltech-k2ew1c6l9-wasl15.vercel.app/)، رؤوس حماية الأربعة و200/404 مُثبتة بالـHTTP. مصفوفة Chromium على كود `9c9cdb73` [#38338784657](https://github.com/7eaur/wasltech-/actions/runs/38338784657) PASS، ليست اختبار Matrix جديدًا للإعداد اللاحق.
- **الإنجاز:** 8 خدمات/14 مشروع بلغتين، Browser/source QA، no-JS Planner/Nav، إصلاح Hero/CSS، تنظيم القراءة/FAQ، WebP responsive، فحص axe على عينة AR/EN، تجربة LCP/CLS مخبرية، إصلاح رؤوس الحماية التشغيلية. **المتبقي:** R01 visual UAT، R02 real reading UX، R03 devices/zoom/screen readers، R04 field performance، R05 actual contact receipt، R06 documented case study، R07 Legacy cutover audit، R08 cross-branch SEO/Logo/Integration، R09 owner production approval، R10 production smoke؛ راجع الجدول التفصيلي بدل تكراره.
- ملفات التشغيل القديمة تُحفظ حتى Cutover، ولا تدخل في «أشياء زائدة احذفها الآن». الصور النهائية الثمان **موجودة**؛ المطلوب الحقيقي مختلف وهو أدلة دراسة حالة. PR46 يبقى Draft، ولا تغيير `main`، DNS، SEO #36/#37 أو Loader #41.

## 2026-10-13 — Preview HTTP headers now VERIFIED (root-cause recovery continuation)

- **Real defect discovered through HTTP, not by CI:** on prior Preview `9c9cdb73` (and `9ac6ca02`), top-level `vercel.json.headers` existed but **four declared security headers were missing from actual responses**. This happened with the explicit legacy `routes` routing graph for localized 404s.
- **Fixed on recovery branch only**: `5c79956c` relocates the exact four header values to a catch-all `routes[0]` with `continue:true` before `handle:filesystem`; `6aef6002` updates the 404 regression test for this valid new route graph. Header owner and terminal bilingual 404 fallbacks are guarded by source tests.
- **Live verified** on Preview `https://wasltech-847go1o5z-wasl15.vercel.app/`: AR and EN pages return 200; unknown Arabic/English paths return **404**, with correct localized HTML and `x-robots-tag:noindex`; `/assets/css/site.css` returns **200 text/css**. **All four** `x-content-type-options:nosniff`, `referrer-policy:strict-origin-when-cross-origin`, `permissions-policy:camera=(), microphone=(), geolocation=()`, `x-frame-options:SAMEORIGIN` are present on tested HTML/404/CSS responses. Subsequent exact `6aef6002` Preview `https://wasltech-fx9wod2f4-wasl15.vercel.app/` also returned **200 + all four headers**.
- Node24 VNext verify on exact `6aef6002`: [push #38435559796](https://github.com/7eaur/wasltech-/actions/runs/38435559796) and [PR #38435567455](https://github.com/7eaur/wasltech-/actions/runs/38435567455) **SUCCESS**. Initial intermediate `5c79956c` verify failed because an older test assumed the filesystem route was always first; this *test expectation* was corrected without changing the safe deployed runtime configuration. Maintain failure evidence.
- **WT-IA-26: VERIFIED_PREVIEW (HTTP)**, *not verified on Production*. PR46 stays Draft → integration. No change to `main`, Production/DNS or SEO/Logo branches. Remaining real-device/field tests, genuine case-study proof, contact receipt, and release consent retain their OPEN/BLOCKED states.

## 2026-10-13 — Recovery branch scope implementation checkpoint (latest)

- Repository: `7eaur/wasltech-`. **ONLY** working branch `fix/independent-site-recovery-20261010`; Draft PR [#46](https://github.com/7eaur/wasltech-/pull/46) → `integration/site-stabilization-20261010` (Draft #45 → main). **No merge/Production/DNS/SEO #36/#37/Logo #41 action**. Latest tested implementation SHA: `9c9cdb73db69e743e0eda5be1037c8e1886f10e1`.
- **Branch-only code fixes completed:** native bilingual service-type disclosures C3; single JS client owner graph; redundant FAQ integration question `product-3` removed while Homepage maps to `product-2` (12 distinct FAQ records + 3 Home questions); 24px English/Arabic footer link targets; safe Vercel static-site headers; browser axe/reflow and synthetic LCP/CLS diagnostics. No 8-service or 14-project catalog assets were deleted.
- **GitHub Actions on exact implementation SHA:** [VNext verify #38338784632](https://github.com/7eaur/wasltech-/actions/runs/38338784632), [PR verify #38338789292](https://github.com/7eaur/wasltech-/actions/runs/38338789292), [Chromium matrix #38338784657](https://github.com/7eaur/wasltech-/actions/runs/38338784657): **SUCCESS**. Vercel branch **Preview READY** `https://wasltech-jkvs0roe3-wasl15.vercel.app/`. The new screenshot/diagnostic [artifact #11786181079](https://github.com/7eaur/wasltech-/actions/runs/38338784657) has 76 PNGs + axe/lab JSON and expires 2026-10-16.
- **Automated a11y:** axe-core 4.10.3 ran on 8 representative routes × 2 languages at 390px: **0 reported violations** after fixing the initial serious English-footer target-size finding. Existing sampled computed foreground/background contrast >= 4.5:1. Equivalent narrow reflow at 640/320px passed for 6 route families per locale (not physical 200/400% zoom or NVDA/VoiceOver).
- **Single synthetic lab sample, NOT Field CWV:** DOM 1197ms, LCP 1476ms, CLS 0.0313, startup max long task 232ms, scroll max 58ms (local static server, 390px, 180ms RTT emulation, 4x CPU). **No real INP field p75/CrUX data or Production evidence**.
- **Canonical completion/gate map:** [2026-10-13_BRANCH_RECOVERY_FINAL_HANDOFF.md](docs/qa/2026-10-13_BRANCH_RECOVERY_FINAL_HANDOFF.md). QA-only docs commit may advance branch HEAD; code validation belongs to exact SHA above. Pending only human/external release acceptance, real-device/field tests, authentic case-study evidence, recipient contact receipt, legacy-Production-dependency approval, cross-branch integration/SEO/domain and production go/no-go. Source-reviewed CI is not owner UAT.

## 2026-10-12 — Independent recovery C3 / JS owner graph (latest checked implementation)

- Working branch: `fix/independent-site-recovery-20261010`; PR #46 remains Draft to integration, **never main**. Implementation HEAD **`af46af71c9bfe4065d5a9e54d0cf0a98d1a9e371`** before this QA-only workflow/docs commit.
- **UXR-03 C3** (`00651e8ccd0260ab4817a8dc1a2de943860dcc2c`): long (4–5 item) service-type lists now retain visible headings, the first open example and keyboard/no-JS native description toggles; two-option web service stays fully expanded. Shared one CSS disclosure owner. [Bilingual Node24 VNext verification successful](https://github.com/7eaur/wasltech-/actions/runs/38187340392), [Chromium 320–1440 route matrix successful](https://github.com/7eaur/wasltech-/actions/runs/38187340370). [C3 notes](docs/qa/2026-10-12_UXR03_SERVICE_DISCLOSURE_C3.md).
- **WT-IA-25/38** (`af46af71`): strengthened dependency ownership test: each public JS module must have one declared page/shell owner; exact commit VNext verify push/PR runs [38187398707](https://github.com/7eaur/wasltech-/actions/runs/38187398707), [38187401848](https://github.com/7eaur/wasltech-/actions/runs/38187401848) **successful**. Vercel Preview commit status **success**. No root production legacy deleted.
- **UXR-12:** computed 4.5:1 sampled AR/EN contrast, Portfolio filter live context and FAQ native open-before-sample are **matrix-verified** by the successful C3 run (superseding historical "CI pending" entries below). These are selective Chromium checks, not full WCAG or real devices.
- Manually inspected representative AR/EN 390px Contact/FAQ and AR mobile Home/Services/Service-web/Portfolio plus desktop top-fold baseline screenshots from previous matrix `38183610738`; **not** a proof of full new app disclosure appearance. This follow-up workflow expands screenshots to include app details and validates native toggles when JS is disabled.
- **Branch-only outstanding:** owner final visual/UAT and service reading task, real 200/400% browser zoom and screen readers on devices, field CWV and cold networks, real project images/evidence, real contact receipt, legacy Production dependency confirmation. SEO canonical/domain and PR45/main/logo integration are **outside this branch scope**, blocked pending respective owners/approval; no merge/deploy/DNS changes.

## 2026-10-12 — UXR-12 contrast test setup correction

- The first Chromium contrast run #38183339587 failed on the closed FAQ native disclosure: measured ratio 7.25:1, element intentionally hidden until expanded. Updated browser test to activate summary via keyboard before sampling. Real 4.5:1 threshold is unchanged. No runtime styles/content altered; rerun outcome pending. See `docs/qa/2026-10-12_UXR12_COMPUTED_CONTRAST_AND_PORTFOLIO_A11Y.md`.

## 2026-10-12 — UXR-12 computed contrast and Portfolio screen-reader context

- Previous task-led Contact/FAQ and Home narrow reflow implementation `ea18821c` passed [VNext verify](https://github.com/7eaur/wasltech-/actions/runs/38182973138) and [route matrix](https://github.com/7eaur/wasltech-/actions/runs/38182973178). AR/EN 390/1440 screenshots inspected.
- Latest candidate adds count-free Portfolio active-filter live context and computed text contrast (selected UI, AR/EN 390px), [test details](docs/qa/2026-10-12_UXR12_COMPUTED_CONTRAST_AND_PORTFOLIO_A11Y.md). **IMPLEMENTED; exact HEAD CI pending.** Physical zoom, screen readers and field performance OPEN.

## 2026-10-12 — UXR-04/06 functional-first hero and information reflow

- Contact/FAQ now use text-first `PageIntro` and place decision cards/category navigation directly below, rather than loading a redundant large visual hero. Supplied images and OG references remain. Mobile Home supporting values no longer hidden at 320–390, with logical FAQ inline-end spacing.
- Code and browser regression checks added. [Implementation QA](docs/qa/2026-10-12_UXR04_UXR06_FUNCTIONAL_INTROS_AND_REFLOW.md). **IMPLEMENTED / latest CI and visual review pending**, not Production-verified.


## 2026-10-12 — Semantic B2 and release overlap review

- **UXR-03 B2:** 8 scoped description refinements across programming, design and marketing, in AR/EN, distinguish actual deliverables from overlapping service types without removing any substantive list item. Evidence: `docs/qa/2026-10-12_SERVICE_DATA_SEMANTIC_B2.md`; exact new commit CI pending. Remaining user scanning-task proof OPEN.
- **P6 compatibility (review only):** `docs/qa/2026-10-12_RELEASE_BRANCH_COMPATIBILITY.md`. Recovery PR46 remains Draft to integration PR45; SEO PR37 overlaps 11 changed files, SEO PR36 overlaps 4, Logo PR41 overlaps 2; these are edit-overlap risks, not confirmed merge conflicts. External coordination and separate Production acceptance needed.


## 2026-10-12 — Independent recovery service copy B1

- `UXR-03 / WT-IA-53/65`: removed four generic repeating `SectionHeader.supporting` paragraphs from the shared service detail template (AR/EN; all eight services). No canonical deliverables, decisions, subservices, audiences, constraints, work examples, process, FAQ or data records removed.
- Added preservation checks to `scripts/check-service-details.mjs`. Evidence: `docs/qa/2026-10-12_SERVICE_DETAIL_EDITORIAL_DEDUP_B1.md`; status **IMPLEMENTED, new-SHA CI + human reading review pending**. Semantic overlap within `src/data/services.js` remains open for B2.


## 2026-10-12 — Independent recovery A1 and ownership inventory

- Branch `fix/independent-site-recovery-20261010`, Draft PR #46; A1 source fix: `5b11b7613e88e43e4e71250fbe2bdb99368bfc65`. GitHub Actions VNext verify on the source-fix SHA succeeded for push and PR (runs 38181793065 and 38181796013); Vercel Preview status reported success; browser route matrix remained under inspection when this note was authored.
- Dependency ownership safeguard: `scripts/check-source-ownership.mjs` classifies build-owned CSS, preview-only showcase CSS, the comment-only `hero-system.css` marker and browser clients; it is wired into the standard structural verifier. It prevents silent accumulation of unowned new VNext styles, without deleting legacy production files.
- See `docs/qa/2026-10-12_RECOVERY_ROOT_CSS_A1.md` and `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md`. This is CI-confirmed source correction, **not** Production/real-device acceptance. Remaining UXR-03, visual and P6 gates are OPEN.


## 2026-10-12 — Latest independent recovery UX closure checkpoint

- Live recovery branch: `fix/independent-site-recovery-20261010`; latest implementation and QA evidence must be read from its GitHub HEAD, not older historical VNext baton entries below.
- Current actionable closure matrix: [`docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md`](docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md); reconciles P0–P6, WT-IA-01..75, WT-001..020, and UXR-01..12 and explicitly distinguishes code vs Preview vs Production acceptance.
- Root-cause UX cleanup: removed hidden inner-page Hero ActionLinks from 6 page sources, removed overriding CSS declarations, added regression guard in `scripts/check-cta.mjs`. Existing final page CTAs and contextual navigation paths remain.
- Verified build/quality evidence on implementation commit `e5d8ff82b17b321df29928b11e95787bee75479b`: VNext verify SUCCESS; the current visual route matrix must be checked independently on its exact tested SHA.
- P6 remains **BLOCKED**: SEO/domain canonical (WT-IA-30), real project case-study proof, real-device zoom/screen-reader and field Web Vitals, account-level contact receipt check, final PR46→PR45 merge review, production cutover approval.
- Do not change `main`, Production, DNS, SEO #36/#37 or Logo #41 as part of isolated UX work.
- Older 2026-09 and earlier 2026-10 status entries are historical snapshots and must not override this checkpoint.


## 2026-10-10 — Responsive image performance pass

- Active integration branch: `integration/site-stabilization-20261010`; `main`, SEO work, and logo-animation work remain untouched.
- Audited the release asset graph rather than bulk-editing unused archive files. Preserved JPEG originals remain in the repository and are excluded from the release output.
- Converted all 14 project runtime images from JPEG to WebP. Their canonical payload fell from 1,026,583 to 427,420 bytes (**58.4% smaller**); 480 px card variants total 209,376 bytes.
- Re-encoded the eight 1280 px service WebPs from their preserved sources. Their canonical payload fell from 525,266 to 373,434 bytes (**28.9% smaller**); 480 px variants total 103,330 bytes.
- Added generated 480/768/1024 px WebP candidates for shared editorial and service imagery, plus 480 px candidates for 800 px project imagery.
- Every public raster content image now emits intrinsic dimensions, `srcset`, and `sizes`; the one page Hero remains eager/high priority and below-fold media remains lazy/async.
- The release builder copies only canonical runtime files and their declared responsive candidates. The quality gate now rejects a runtime raster above 120 KiB, a project asset above 60 KiB, a project set above 700 KiB, or any public raster missing responsive markup.
- Local gates pass: `npm run vnext:verify`, `npm run vnext:verify:release`, `node scripts/check-final-media.mjs`, and `git diff --check`.

## 2026-10-10 — Final editorial media source refresh

- Active integration branch: `integration/site-stabilization-20261010`.
- All eight final user-supplied images are preserved as canonical JPEG sources under `assets/media/source/`.
- Eight WebP runtime derivatives are connected to Services, Portfolio, Process, Contact/Project Planner, FAQ/Insights, and the three published articles.
- Runtime files range from 39,230 to 93,794 bytes at `1536 × 961`; all stay below the 180 KiB media budget.
- Media dimensions in `src/config/hero-media.js` and `src/data/articles.js` match the final files.
- The checksum manifest and media-integrity guard now validate JPEG sources and WebP derivatives.
- `node scripts/check-final-media.mjs`, `npm run vnext:verify`, and `npm run vnext:verify:release` pass for this batch.
- `main`, SEO branches, and the logo-animation branch remain untouched by this batch.

## 2026-09-24 — AUTHORITATIVE CURRENT BATON

This section is the current execution truth. It supersedes older historical checkpoint text below when there is any conflict.

### Live repository truth
- Repository: `7eaur/wasltech-`
- Production branch: `main`
- Production HEAD: `a4ed507defe5e7831f3459e12752a89fe0d225fc`
- Active VNext branch: `rebuild/vnext-foundation-20260921`
- Current VNext implementation HEAD before this documentation commit: `93b7fc58f104da20a1818ad7e9ff4147922d37ce`
- Latest implementation message: `fix(content): preserve case-study polish after rewrite alignment`
- Production cutover: **NOT STARTED**
- `main` has not been merged with VNext.

### Canonical marketing content
- Canonical marketing source commit: `b87872d12adcc836018fe61a7ef1556f04aa5b86`
- Canonical source file: `إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md`
- The source file is preserved on the active VNext branch.
- The no-packages / no-public-pricing direction is adopted.
- Current public marketing copy follows the outcome-led rewrite across Home, Services, all eight service records, About, Process, Portfolio/case-study surfaces, Contact, Project Planner and core FAQ in Arabic and English.
- Trust remains evidence-led: no invented counters, testimonials, numerical results, guarantees, timelines or SLAs.
- Case-study CTAs and project language must remain contextual rather than generic “more” wording.
- Home public journey: **Hero → Services → Work/Trust → About → Process → FAQ → Final CTA → Footer**.
- Service-detail public journey: **need/problem → audience → deliverables → scope-dependent items → process → related work → FAQ → CTA**.

### Current visual system
- Update Card remains a craft/reference source for hero density, spacing and mobile sequencing; Wasl Tech identity/copy remain independent.
- Home mobile Hero order is locked as: **copy → image → actions → trust/signals**.
- Inner-page Heroes are informational and do not show Hero action buttons; primary actions remain in page CTA surfaces.
- Site-wide typography uses flexible responsive sizing/measure rather than narrow hard-coded text widths.
- Card system has been rebalanced to reduce “card walls”, improve hierarchy and increase readability across Home, Services, service details, Portfolio, Project detail, Insights, Contact, Process and secondary pages.
- Footer contact information is compact text-only rows without contact icons; social icons remain.

### Final media currently integrated
All service originals and runtime derivatives are already committed and wired.

Canonical service mapping:
1. `web-development` → `assets/services/web-development.webp`
2. `mobile-app-development` → `assets/services/mobile-app-development.webp`
3. `ecommerce` → `assets/services/ecommerce.webp`
4. `custom-software` → `assets/services/custom-software.webp`
5. `technical-solutions` → `assets/services/technical-solutions.webp`
6. `company-profiles` → `assets/services/company-profiles.webp`
7. `brand-design` → `assets/services/brand-design.webp`
8. `digital-marketing` → `assets/services/digital-marketing.webp`

Original service JPEGs are preserved under:
`assets/services/source/<slug>.jpeg`

Shared media ownership:
- Home Hero: `assets/media/home-hero.webp`
- Home/About image: `assets/media/about-us.webp`
- originals preserved under `assets/media/source/`
- `src/data/services.js` owns canonical service-image paths used by Home, Services and service-detail Hero surfaces.

### Current verification and preview
- VNext verify run: `36052391480` — **SUCCESS**
- Responsive route matrix run: `36052391498` — **SUCCESS**
- Vercel deployment: `dpl_8j8ebNEuqtSW2kp9UMLpj8hFoz5K` — **READY**
- Vercel preview URL: `https://wasltech-472tnx2s9-wasl15.vercel.app`
- Latest verified deployment is tied to implementation HEAD `93b7fc58f104da20a1818ad7e9ff4147922d37ce`.
- Vercel Git integration may automatically create previews on branch pushes. Do not add manual deployments unless the user explicitly asks to publish/review.

### Remaining work
- Do **not** restart architecture, media integration, Footer, typography, About or marketing rewrite from zero.
- First inspect live HEAD and the latest preview.
- Continue only from new user feedback or a newly observed regression.
- Final subjective visual review is still valuable after any future content/design change, especially at mobile and desktop breakpoints.
- Some non-project editorial Hero/article media may still be temporary; `docs/qa/FINAL_MEDIA_INVENTORY.md` remains the media source of truth for anything not explicitly marked integrated.
- Before production cutover: full final-media review, VNext verify, full route matrix, SEO/OG verification, explicit user acceptance, then explicit cutover approval.

### Working rules that remain locked
- Do not merge VNext into `main` without explicit approval.
- Do not perform production cutover without explicit approval.
- Batch edits; avoid one small commit per visual tweak because Git integration can consume Vercel preview quota.
- Run `npm run vnext:verify` after meaningful batches.
- Run the full route matrix at major review points, not every tiny edit.
- “Ready locally” ≠ “committed” ≠ “verified” ≠ “deployed”; report status precisely.
- Never claim Vercel is published until the deployment is actually `READY`.

Reference handoff:
`docs/qa/2026-09-24_final-conversation-handoff.md`


## 2026-09-24 — Final marketing rewrite baseline adopted
- Canonical marketing source: `إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md` from source commit `b87872d12adcc836018fe61a7ef1556f04aa5b86`.
- The exact source document is preserved on the active VNext branch for reference.
- Home, Services, all 8 service records, About, Process, Portfolio, Contact, Project Planner, and core FAQ copy follow the new outcome-led baseline in Arabic and English.
- Packages/pricing are not part of the public sales path.
- Trust remains evidence-led: no invented metrics, testimonials, results, durations, SLAs, or guarantees.
- Process uses the six-stage flow: Understand → Decide → Design → Build → Test → Launch & Evolve.
- Project/portfolio CTAs use case-study language rather than generic “more” wording.
- Production `main` remains unchanged; no cutover has started.

## 2026-09-24 — Final marketing rewrite alignment
- Canonical content source: `b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md`.
- Adopted the no-packages/no-pricing marketing baseline across Home, Services, all eight service records, About, Process, and FAQ in Arabic and English.
- Final Home journey: Hero → Services → Work/Trust → About → Process → FAQ → Final CTA.
- Service-detail order: need/problem → audience → deliverables → scope-dependent constraints → process → related work → FAQ → CTA.
- No unverified counters, testimonials, or numerical outcome claims were introduced.

## 2026-09-24 — Footer, typography, and About refresh
- Footer contact details are compact text rows without contact icons; social links remain unchanged.
- Site-wide text flow now uses available layout width more naturally across mobile and desktop instead of narrow fixed heading measures.
- About page content and IA refreshed around: story, vision, mission, principles, what we build, and final CTA.
- About copy is adapted from the legacy Wasl Tech About direction and reviewed reference patterns, while keeping Wasl Tech's own brand voice and current scope.
- No production cutover or merge to main.

Last updated: 2026-09-24  
Repository: `7eaur/wasltech-`  
Official/legacy branch: `main`  
Current live `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc`  
Active VNext branch: `rebuild/vnext-foundation-20260921`  
Latest verified VNext implementation checkpoint: `aea64eb0f4339a610fa8f035b8650e12bdbbd8cf`

## 2026-09-24 — Service + Home/About media integration

- All 8 approved service originals are stored under `assets/services/source/<slug>.jpeg`.
- All 8 runtime WebP derivatives are stored under `assets/services/<slug>.webp` and are the canonical `service.image` values.
- The same canonical service image feeds Homepage service cards, the Services directory, and each service-detail Hero.
- Homepage Hero uses `/assets/media/home-hero.webp`; source preserved at `assets/media/source/home-hero.jpeg`.
- Homepage About and the About page Hero use `/assets/media/about-us.webp`; source preserved at `assets/media/source/about-us.jpeg`.
- Build ownership copies runtime service/site media without shipping source originals.
- Service + Home/About media integration is complete and covered by current verification. Manual Vercel deployments should still be avoided unless the user explicitly requests publishing/review.

## 2026-09-24 — Current execution update

This section is the newest execution truth and overrides stale historical “next phase” text below when there is a conflict.

### Live branch / verification truth
- Active VNext branch: `rebuild/vnext-foundation-20260921`
- Implementation HEAD before this documentation handoff: `4e11e5e9c13e4f9a8c477a21ce62a0e1f21d8d4f`
- Latest VNext verify run: `35990862213` — **SUCCESS**
- Latest responsive route matrix run: `35990862361` — **SUCCESS**
- Current VNext preview for that implementation SHA: `dpl_76PAUqyTasFFvTgHUzLCzQGnn1GH` — **READY**
- Production remains unchanged on `main`: `a4ed507defe5e7831f3459e12752a89fe0d225fc`
- Production deployment remains `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9` — **READY**
- **No Phase 14 cutover has started.**

### Footer batch — implemented and verified
The shared VNext Footer was rebuilt from the legacy/live Wasl contact evidence and the user-provided long brand copy.

Approved Arabic Footer description:
`وصل تك وجهتك لبناء حضور رقمي احترافي. نساعدك على تحويل أفكارك إلى مشاريع ناجحة بجمع التقنية، التصميم، التسويق، والابتكار.`

English counterpart:
`Wasl Tech is your destination for building a professional digital presence. We help turn ideas into successful projects by bringing technology, design, marketing, and innovation together.`

Current Footer contact truth:
- WhatsApp / phone: `+967 775 377 979`
- WhatsApp URL: `https://wa.me/967775377979`
- Email: `info@wasl-tech.com`
- Website: `www.wasl-tech.com`
- Instagram: `@wasltech.yem`
- Social icon links restored from the legacy shared Footer: Facebook, X, Instagram, Telegram, TikTok.

Important evidence decision:
- legacy `main` still contained `wasltechp@gmail.com`;
- the user explicitly asked to take contact data from the old live site `wasl-tech.com`;
- the live old site exposed `info@wasl-tech.com`, so that address is now the VNext contact email.

Files changed by the Footer batch include:
- `src/config/site.js`
- `src/components/icons.js`
- `src/components/Footer.js`
- `src/styles/layout.css`
- `scripts/check-shell.mjs`
- `scripts/check-public-surfaces.mjs`

The final Footer implementation is covered by the green verify + responsive matrix runs above.

### Service media batch — COMPLETE; older pending note superseded
The eight service-image originals and WebP derivatives are committed and verified. Canonical runtime mappings are owned by `src/data/services.js` and shared by Home, Services and service-detail surfaces. See the authoritative baton at the top of this file and `docs/qa/FINAL_MEDIA_INVENTORY.md` for current media truth.

### Publishing / commit policy from the user
The user explicitly requested: **do not publish every small change because of deployment limits.**

From now on:
- do not manually deploy Vercel for each edit;
- batch multiple edits and publish only when the user says `انشر` or explicitly requests a review deployment;
- because Vercel Git integration may automatically create a Preview for every pushed branch commit, avoid one-commit-per-small-edit;
- prefer one consolidated Git commit per approved batch;
- do not touch `main` or Production without explicit cutover approval.

### Immediate next implementation task
There is no pending service-media upload task. Resume from the live VNext HEAD, inspect the current preview, and continue only from the user's next requested design/content change or a newly observed regression.

Detailed dated evidence:
`docs/qa/2026-09-24_footer-service-media-handoff.md`

## Current state

**VNext clean rebuild is ACTIVE.**

**Active phase: Phase 13B — Architecture, Editorial & Final Media Preparation.**

**Latest final audit:** Stages 0–18 PASS. Current audit evidence: `docs/qa/2026-09-23_comprehensive-pre-final-media-audit.md`. Exact pending image contract: `docs/qa/FINAL_MEDIA_INVENTORY.md`. Stage 19 final media is the only planned gate before explicit Phase 14 approval.

Homepage visual redesign is implemented, verified, and **USER ACCEPTED**. The approved calm, elegant, profile-inspired direction has now been extended across the remaining VNext route families without copying legacy architecture or wording.

Approved Home sequence:
`Hero → Services → Selected Work → About Team → Why Wasl Tech → Process → 3 FAQ → Compact CTA → Footer`.

Important approved constraints:
- all canonical service offerings remain visible on Home without exposing a public service-count counter;
- About and Why Wasl Tech stay separate;
- narrative copy says `فريق وصل تك / Wasl Tech team`;
- no unsupported numeric marketing counters;
- use concise qualitative trust cues instead;
- project imagery stays restrained; no giant portfolio showcase on Home;
- final CTA is smaller than the Hero;
- Home FAQ is exactly 3 decision-support questions.

Current architecture/editorial verification checkpoint:
- runtime/design checkpoint SHA: `aea64eb0f4339a610fa8f035b8650e12bdbbd8cf`;
- VNext verify run: `35682925238` — **SUCCESS**;
- responsive route-family matrix run: `35682925234` — **SUCCESS**;
- matrix screenshot artifact: `10675451706` (`wasltech-vnext-route-matrix-screenshots`);
- documentation-head verify run: `35682982991` — **SUCCESS**;
- matrix covers representative route families, including a published Article detail page, at 360/390/768/1024/1366/1440 in Arabic and English;
- no horizontal overflow, missing H1, IBM Plex contract failure, or page JavaScript error;
- page/service/project/article Hero media contracts are implemented;
- public service/project count counters are removed and guarded;
- bilingual Insights listing + Article detail architecture is live in VNext;
- Careers remains an honest no-opening surface with future Job detail architecture ready;
- Article/Job structured-data builders and automatic sitemap publication contracts are implemented;
- QA record: `docs/qa/2026-09-22_phase-13b_architecture-editorial-media-completion.md`.

Architecture, bilingual public routes, editorial surfaces and technical SEO are **COMPLETE BEFORE FINAL MEDIA**. Phase 13B remains open only for replacing temporary editorial Hero/article imagery, web optimization, final visual matrix and user acceptance. Phase 14 / production cutover has not started.

The published website remains the legacy/current implementation from `main`. VNext is developed separately and must not replace production until the final cutover gates pass.

Current verified Vercel production:
- project: `wasltech`
- deployment: `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9`
- state: **READY**
- target: **production**
- Git branch: `main`
- Git SHA: `a4ed507defe5e7831f3459e12752a89fe0d225fc`
- alias: `wasltech.vercel.app`

That `main` commit added VNext documentation only and did **not** replace the legacy runtime implementation.

VNext branch deployments/previews must never be confused with production.

## Why VNext exists

The project deliberately moved away from repeatedly patching the existing site.

VNext is a clean architecture rebuild with:
- build-time static multipage output;
- Node 24;
- minimal runtime JavaScript;
- centralized config/data;
- reusable components/templates;
- Arabic default at `/`;
- English under `/en/`;
- generated service/project/article/job routes;
- SEO as a build-time concern;
- strict content integrity and no invented claims.

The legacy published site remains useful as evidence for verified content/assets/behavior, but it is **not** the architecture to continue patching.

## Reference hierarchy

### 1. Wasl Tech identity — authoritative
Use only the original identity/assets in this repository:
- `assets/brand/wasl-tech-horizontal.svg`
- `assets/brand/wasl-tech-horizontal-white.svg`
- `assets/brand/favicon.svg`

Locked:
- IBM Plex Sans Arabic / IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- approved Navy/Teal scales + supporting neutral palette.

### 2. Current published Wasl site — evidence/reference
Use it to recover:
- verified business facts and operating behavior;
- current service/project identities and factual scope evidence;
- real images/assets;
- current contact behavior;
- existing public expectations.

**Do not treat Legacy wording as canonical VNext copy.** Old headings, descriptions, CTAs, FAQ wording and section order are evidence/context only unless deliberately rewritten and approved.

Do not copy its legacy CSS/JS architecture into VNext.

### 3. UPDATE CARD — craft reference only
Repository:
`7eaur/update_card`

Use it for:
- design discipline;
- compact density;
- spacing;
- controlled surfaces;
- restrained shadows/radii;
- image-led storytelling;
- intentional mobile composition;
- shared component contracts.

Do **not** copy its branding, colors, content or literal layout.

### 4. SATR Technology — structural/writing benchmark only
Public reference:
`https://satr-tec.com/`

Canonical audit:
`docs/research/SATR_TEC_COMPETITOR_AUDIT_2026-09-21.md`

Use it for:
- page purpose;
- hero/page sequencing;
- service-detail depth;
- case-study storytelling;
- project-planner structure;
- content hierarchy;
- writing/microcopy lessons;
- SEO/content architecture ideas.

Do **not** copy its text, brand, images, code or literal visual design.

## Completed

### Phase 0 — Canonical Foundation
**COMPLETE**

Canonical docs, status/handoff protocol and operating rules established.

### Phase 1 — Build System & Repository Skeleton
**COMPLETE**

Implemented:
- Node 24 ESM build-time static pipeline;
- centralized config/component/template foundation;
- separated VNext CSS layers;
- minimal navigation runtime;
- generated noindex preview routes;
- VNext CI workflow.

Original Phase 1 evidence:
- run: `35543509588`
- SHA: `e18e906817b1550a4ccaa56e438e0187340b6524`
- result: **SUCCESS**

### Brand + Bilingual + SEO Architecture Freeze
**COMPLETE**

Locked:
- original Wasl brand assets;
- bilingual IBM Plex typography;
- official palette + semantic tokens;
- Arabic `/`, English `/en/`;
- stable shared entity slugs;
- service/project/article/job route builders;
- Insights, Careers, Privacy, Terms, FAQ and Start Project surfaces;
- SEO-first canonical/hreflang/sitemap/robots/structured-data direction;
- automated brand/locale/route guards.

### Phase 2 — Bilingual Data & Content Normalization
**COMPLETE**

Normalized:
- 8 official services → `src/data/services.js`;
- 14 verified projects → `src/data/projects.js`;
- 13 general FAQ items / 4 groups → `src/data/faq.js`;
- article contract → `src/data/articles.js`;
- careers contract → `src/data/jobs.js`;
- data integrity checks → `scripts/check-data.mjs`.

Final Phase 2 evidence:
- workflow: `VNext verify`
- run: `35552059884`
- SHA: `b7412a4a5143404a9169857b4ef844a7765cfa83`
- result: **SUCCESS**
- `Services: 8 | Projects: 14 | FAQ: 13 | Articles: 0 | Jobs: 0`

QA:
`docs/qa/2026-09-21_phase-2_data-normalization.md`

## Phase 2B — Content Architecture & Evidence Completion
**COMPLETE**

The content baseline is now ready for design work.

Completed:
- original Arabic VNext copy for public pages, all 8 services, all 14 projects and general FAQ;
- reviewed English copy for the same public content;
- 14-project model locked to one primary image + project story;
- service decision copy, deliverables, process, FAQ, constraints and topic planning;
- project context, contribution, scope and delivered outputs;
- Arabic + English SEO titles/descriptions;
- service Open Graph copy;
- Arabic `/` + English `/en/` route architecture;
- locale-aware Header/Footer/navigation foundation;
- canonical, hreflang and x-default helpers;
- Open Graph + Twitter metadata support;
- Organization/WebSite and reusable Service/FAQ/Breadcrumb/CreativeWork structured-data builders;
- preview robots protection;
- sitemap/production robots renderers;
- CI guards for bilingual content and SEO output.

Intentional deferrals:
- Privacy and Terms remain `CONTENT REQUIRED` until form, analytics/cookie and third-party behavior is final;
- Insights has an honest empty state until real articles are authored;
- Careers has an honest empty state until a real role exists.

Verification:
- workflow: `VNext verify`
- run: `35557088166`
- SHA: `6f0863a1b4a8490522c6df41e9b3be896432dcc0`
- result: **SUCCESS**
- Build: **PASS**
- Structure: **PASS**
- Data: **PASS**

### Next phase — Phase 3: Design Tokens & Shared Primitives

Phase 3 is ready to start, but final page composition has not started yet.

The next implementation work is:
- refine semantic design tokens;
- spacing and layout primitives;
- bilingual typography behavior;
- buttons, links and form primitives;
- card/media contracts;
- focus/accessibility states;
- responsive primitives;
- component showcase review on desktop + mobile.

The original Wasl Tech identity remains authoritative, and the approved content/data layer must be consumed rather than duplicated in page markup.

## Phase 3 — Design Tokens & Shared Primitives
**COMPLETE**

Completed:
- canonical design token grammar and semantic color roles;
- bilingual typography hierarchy;
- responsive layout primitives;
- buttons/links/cards/forms/media primitives;
- focus-visible + reduced-motion baseline;
- bilingual internal component showcase;
- shared ActionLink / SurfaceCard / FormField / MediaFrame components;
- CSS custom-property integrity guard;
- real Chromium review at 1440 and 390 for Arabic and English;
- no horizontal overflow;
- RTL/LTR correct;
- mobile touch/control targets normalized to 46px;
- mobile header CTA conflict discovered visually and fixed.

Verification:
- final branch HEAD: `b1b2e14968dd5e9fc2f33405e5f106b547ac24c4`
- workflow run: `35559468184`
- result: **SUCCESS**
- final input-height design SHA `0d97f4930059052d695706d0998fdb9658e76765`
- run `35559252091`: **SUCCESS**

Exact IBM Plex glyph rendering remains a later live-preview confirmation item because local environment could not load the binary font files, but the canonical font contract is unchanged.

## Phase 4 — Shared Shell
**COMPLETE**

Completed:
- route-family-aware primary navigation;
- bilingual Header and Footer;
- language switch preserving route identity;
- reusable header project CTA;
- responsive mobile navigation drawer;
- accessible open/close labels;
- animated menu icon without decorative excess;
- Escape handling with focus return;
- outside-click close behavior;
- desktop-resize close behavior;
- mobile active-state treatment;
- four-column desktop Footer with responsive collapse;
- dedicated `check-shell.mjs` gate;
- ready public shell routes generated for Arabic and English.

Visual verification:
- Arabic desktop: 1440px;
- Arabic mobile: 390px;
- English desktop: 1440px;
- English mobile: 390px;
- open mobile navigation reviewed in both locales;
- no horizontal overflow;
- mobile navigation width: 366px at 390px viewport;
- mobile header CTA hidden correctly;
- active navigation verified for Services in Arabic and English;
- Footer responsive behavior verified.

Interaction verification:
- menu open/close state: PASS;
- `aria-expanded`: PASS;
- localized `aria-label` open/close: PASS;
- Escape closes + restores focus: PASS;
- outside pointer closes: PASS;
- resize to desktop closes: PASS.

Verification:
- workflow: `VNext verify`
- run: `35562217299`
- SHA: `c2640be27fb76dca4232c134df86ff1d0269d496`
- result: **SUCCESS**
- Build: PASS
- Structure: PASS
- Shared Shell Gate: PASS
- Data: PASS

### Next phase — Phase 5: Homepage

Phase 5 is ready but **not started**.

Do not compose the Homepage until the next explicit continuation point.

## Phase 5 — Homepage
**COMPLETE**

Implemented:
- canonical bilingual Homepage at `/` and `/en/`;
- editorial Hero with one clear promise and two actions;
- three service-decision paths instead of an eight-card wall;
- selected real work using canonical project records and project images;
- approach section built as editorial principles, not icon cards;
- four-step process summary;
- three decision-support FAQ items;
- final project CTA;
- dedicated `home.css`;
- dedicated `check-home.mjs`;
- portfolio assets copied into the build;
- intrinsic dimensions for featured project images to reduce CLS;
- project images lazy-loaded because Home LCP is text-led.

Visual review completed:
- Arabic desktop 1440px;
- Arabic mobile 390px;
- English desktop 1440px;
- English mobile 390px;
- no horizontal overflow;
- RTL/LTR hierarchy reviewed;
- featured work image crops reviewed;
- mobile section stacking reviewed;
- Hero density reviewed in both locales.

Verification:
- workflow: `VNext verify`
- run: `35562768516`
- SHA: `eae58343daa539e295ce209b3bb442fc0e14647d`
- result: **SUCCESS**
- Build: PASS
- Structure: PASS
- Shared Shell Gate: PASS
- Homepage Gate: PASS
- Data: PASS

### Next phase — Phase 6: Services Directory

Ready to start.

## Phase 6 — Services Directory
**COMPLETE**

Implemented:
- canonical bilingual Services Directory;
- all 8 services grouped into the 3 approved families;
- decision-led service rows instead of equal generic cards;
- problem/need and scope summary exposed for comparison;
- canonical links prepared for service detail routes;
- dedicated `services.css`;
- dedicated `check-services.mjs`;
- Services route removed from the placeholder build.

Visual review:
- Arabic desktop 1440px;
- Arabic mobile 390px;
- English desktop 1440px;
- English mobile 390px;
- no horizontal overflow;
- all 8 services visible in both locales;
- service-family hierarchy retained on mobile;
- desktop comparison density reviewed;
- long English content remained readable without taxonomy loss.

Verification:
- workflow: `VNext verify`
- run: `35567035544`
- SHA: `054113b9bb2e7d3c832129a56a75894cf6102227`
- result: **SUCCESS**
- Build: PASS
- Structure: PASS
- Shell: PASS
- Home: PASS
- Services Directory: PASS
- Data: PASS

### Next phase — Phase 7: Service Detail System

Ready to start.

## Phase 7 — Service Detail System
**COMPLETE**

Implemented:
- one reusable bilingual service-detail architecture;
- all 8 services rendered from canonical data;
- 16 generated detail routes;
- Breadcrumb → Hero → problem/scope → service signals → audience → deliverables → verified proof → process → FAQ → constraints → CTA;
- Service, BreadcrumbList and FAQPage structured data;
- related proof only when verified projects exist;
- no project-detail links before Phase 8;
- dedicated `service-detail.css`;
- dedicated `check-service-details.mjs`.

Representative visual review:
- Web service: Arabic/English desktop + mobile;
- Technical Solutions: Arabic/English desktop + mobile;
- proof-present and proof-absent states reviewed;
- no horizontal overflow;
- long content remained structured;
- RTL/LTR reviewed.

Verification:
- workflow: `VNext verify`
- run: `35567508172`
- SHA: `1b3ec7fe20c03ab8f3a00887d7ccea4decd7a8f3`
- result: **SUCCESS**
- 16 detail routes: PASS
- structured data: PASS
- distinct service content: PASS
- related proof visibility: PASS
- no future project-detail links: PASS

### Next phase — Phase 8: Portfolio & Case-study Foundation

Ready to start.

## Phase 8 — Portfolio & Case-study Foundation
**COMPLETE**

Implemented:
- bilingual Portfolio directory;
- 14 canonical projects;
- 5 filters derived from real categories only;
- progressive-enhancement filtering with aria-pressed state;
- one primary image per project;
- one reusable case-study architecture;
- 28 localized project detail routes;
- project context, contribution, scope and delivered outputs;
- related services;
- related projects from real category relationships;
- CreativeWork + Breadcrumb structured data;
- canonical SEO and social metadata;
- dedicated `portfolio.css` and `project-detail.css`;
- dedicated Portfolio and Project Detail gates.

Project presentation stays intentionally free of:
- year;
- live/public project URL;
- technology stack;
- gallery/additional project images.

Filter verification in both locales:
- all: 14;
- web/systems: 6;
- apps: 2;
- e-commerce: 3;
- brand identity: 2;
- marketing: 1.

Visual review:
- Portfolio Arabic/English at 1440 and 390;
- no horizontal overflow;
- all 14 projects visible by default;
- filter interaction reviewed;
- Arabic Wasl Freelance case study reviewed desktop/mobile;
- English Al Malaki Brand Identity case study reviewed desktop/mobile;
- one-image case-study layout preserved;
- related service/project sections reviewed.

Verification:
- workflow: `VNext verify`
- run: `35568080827`
- SHA: `5b29dba17ca789a31512c3788ee8e388b40d9346`
- result: **SUCCESS**
- Portfolio Gate: PASS
- Project Detail Gate: PASS
- 28 localized detail routes: PASS
- structured data: PASS
- all earlier gates remained green.

### Next phase — Phase 9: About + Process

Ready to start.

## Phase 9 — About + Process
**COMPLETE**

Implemented:
- canonical bilingual About page;
- canonical bilingual Process page;
- About focused on operating philosophy, what Wasl combines, decision principles and Yemen + Gulf market;
- Process focused on four execution phases and what becomes clearer after each phase;
- no duplicated filler between the two pages;
- no invented timeline promises;
- dedicated shared `about-process.css`;
- dedicated `check-about-process.mjs`.

Visual review:
- About Arabic/English desktop + mobile;
- Process Arabic/English desktop + mobile;
- no horizontal overflow;
- About retained editorial/positioning character;
- Process retained sequential execution character;
- RTL/LTR hierarchy reviewed.

Verification:
- workflow: `VNext verify`
- run: `35568496733`
- SHA: `3942c6da3ad0cc8e435324bbe195909b09972493`
- result: **SUCCESS**
- About/Process Gate: PASS
- all previous gates remained green.

### Next phase — Phase 10: Project Planner + Contact

Ready to start.

## Phase 10 — Project Planner + Contact
**COMPLETE**

Implemented:
- bilingual low-friction Contact page;
- verified WhatsApp, email and Instagram channels only;
- bilingual structured Project Planner;
- need → stage → priority → context → review workflow;
- all 8 services + unsure option;
- truthful client-side validation;
- review summary before WhatsApp;
- generated WhatsApp message only;
- no backend POST;
- no fetch/XHR;
- no localStorage/sessionStorage;
- no fake success state;
- LTR-safe rendering for phone/email/URL values inside RTL pages;
- dedicated `contact-planner.css`;
- dedicated `check-contact-planner.mjs`.

Visual/interaction review:
- Contact Arabic/English desktop/mobile;
- Planner Arabic/English desktop/mobile;
- invalid state reviewed;
- valid review state reviewed;
- WhatsApp URL generation reviewed;
- Edit flow reviewed;
- no horizontal overflow;
- RTL phone and URL direction fixed.

Verification:
- workflow: `VNext verify`
- run: `35644999070`
- SHA: `f3a841bb6a1af80fd4b2461dd475d76331d76ae8`
- result: **SUCCESS**
- Contact/Planner Gate: PASS
- all previous gates remained green.

### Next phase — Phase 11: FAQ + Insights + Careers + Legal + Localization Completion

Ready to start.

## Phase 11 — FAQ + Insights + Careers + Legal + Localization Completion
**COMPLETE**

Implemented:
- bilingual FAQ page with all 13 canonical questions across 4 groups;
- FAQPage structured data;
- honest bilingual Insights empty state with 0 published articles;
- honest bilingual Careers empty state with 0 published jobs;
- bilingual Privacy page based on verified runtime behavior;
- bilingual Terms page based on verified website/service behavior;
- no invented retention period;
- no invented processors;
- no invented analytics, tracking, cookies or legal guarantees;
- runtime privacy behavior checked against actual VNext clients;
- dedicated `secondary.css`;
- dedicated `check-secondary-legal.mjs`.

Verified privacy/runtime facts:
- Project Planner prepares data locally in the browser;
- Planner does not POST/fetch to a Wasl Tech backend;
- Planner does not use localStorage or sessionStorage;
- WhatsApp opens only after user review/action;
- Contact uses verified WhatsApp, email and Instagram channels;
- VNext currently includes no Google Analytics, GTM, Meta Pixel or tracking-cookie logic.

Visual review:
- FAQ Arabic/English desktop + mobile;
- Privacy Arabic/English desktop + mobile;
- Terms mobile reviewed;
- Insights/Careers empty states reviewed;
- no horizontal overflow;
- long legal copy remained readable on mobile;
- RTL/LTR hierarchy reviewed.

Verification:
- workflow: `VNext verify`
- run: `35645517860`
- SHA: `b99372dd54ae21bce2aa6fc48da383b6eb954d6e`
- result: **SUCCESS**
- Secondary/Legal Gate: PASS
- all previous gates remained green.

## Phase 12 — SEO + Performance + Accessibility
**COMPLETE**

Implemented:
- explicit Preview vs Production build modes;
- Preview stays `noindex,follow` + `Disallow: /`;
- isolated Production build in `dist-release/`;
- Production outputs `index,follow`, crawlable `robots.txt`, and `sitemap.xml`;
- sitemap/hreflang/x-default derived from publishable canonical data;
- 68 indexable localized release routes;
- localized Arabic + English 404 pages, both permanently noindex;
- internal design-system showcase omitted from Production;
- dedicated release crawl gate;
- performance/accessibility quality gate;
- intrinsic width/height for canonical project images;
- only referenced project images copied into builds;
- accessible primary-action and focus colors separated from decorative brand accent;
- Light and Dark contrast checks;
- reduced-motion guard;
- font preconnect + display=swap guard;
- buttons/links/image structural accessibility checks;
- gzip transfer budgets for CSS/JS/HTML;
- image size/asset-count budgets;
- no positive tabindex;
- target=_blank noopener checks;
- dependency audit remains zero runtime dependencies.

Measured CI budgets:
- CSS: **11,119 bytes gzip**;
- combined client JS: **2,678 bytes gzip**;
- referenced project images: **1,026,583 bytes total**;
- project-image build set: exactly **14 referenced images**;
- Release indexable routes: **68**.

Runtime Chromium smoke:
- Home mobile menu: PASS;
- localized open/close aria labels: PASS;
- Escape + focus return: PASS;
- Portfolio filter: PASS;
- Planner validation/review/WhatsApp/Edit: PASS;
- FAQ disclosure interaction: PASS;
- representative service/project/legal pages: PASS;
- console errors: **0**;
- page errors: **0**;
- representative horizontal overflow: **0**;
- form controls without labels: **0**.

Privacy correction discovered during Phase 12:
- Google Fonts is an external request and is now explicitly disclosed in Privacy;
- Privacy/legal gate synchronizes that disclosure with the current runtime.

Verification:
- workflow: `VNext verify`
- run: `35647059021`
- SHA: `0831418f497b860cb0650c51b7b5f1665fb85147`
- result: **SUCCESS**
- Preview build/check: PASS
- Quality/A11y gate: PASS
- Production release build/check: PASS
- Release artifact: PASS.

CWV policy:
- project targets remain LCP ≤2.5s, INP <200ms, CLS <0.1;
- deterministic transfer/layout budgets are enforced in CI;
- final field/runtime CWV measurement is still required on the exact production deployment in Phase 14, because a deployment URL was not reliably retrievable from the connector during this phase.

## Phase 13 — Cross-page Visual Normalization
**IN PROGRESS**

Homepage redesign checkpoint:
- latest visual refinement runtime SHA: `c2687ce94f7fa52ecf502c585a336fb0f16b4bcc`;
- VNext verify run `35679856561`: **SUCCESS**;
- capture run `35679856535`: **SUCCESS**;
- screenshot artifact `10674775774`: Desktop 1440 + Mobile 390 full-page;
- final CTA is now a separate Teal card on canvas, visually distinct from the Navy footer;
- mobile Footer is compact two-column navigation with verified WhatsApp/email/Instagram icon links;
- Home Selected Work heading is neutralized and project cards now include concise verified summaries;
- mobile service cards now stay two-per-row, selected work uses an edited two-up/horizontal composition, Why is two-up, and Process stays compact/horizontal;
- decorative hero markers were replaced by restrained inline SVG cues and Process received matching lightweight visual cues;
- homepage section rhythm was tightened by removing stacked header/grid spacing;
- mobile typography and image crops were retuned without changing the approved information sequence;
- approved sequence implemented;
- marketing copy rewritten away from internal evidence/justification language;
- Hero now uses a calm supporting image;
- all 8 services shown as concise service cards;
- Selected Work reduced to 3 restrained project cards;
- About Team and Why Wasl Tech are separate;
- About trust cues are qualitative, not numeric;
- Process remains 4 steps;
- Home FAQ remains 3 questions;
- final CTA reduced to a compact closing band;
- `scripts/check-home.mjs` guards service count, section order, media and FAQ count;
- homepage editorial media included deterministically in build.

Verification:
- implementation/capture checkpoint SHA: `4c034ec2276ab3ba96436d35d263db915236043a`;
- VNext verify run `35677121641`: **SUCCESS**;
- capture run `35677121570`: **SUCCESS**;
- screenshot artifact `10674085957`: Desktop 1440 + Mobile 390 full-page.

Current gate:
- homepage latest screenshots still need user visual acceptance;
- then normalize the same visual language across the rest of the site;
- full breakpoint matrix is still pending;
- Phase 14 cutover is not allowed yet.

### Exact next work

1. Fetch live branch HEAD and confirm runtime files have not changed after the documented checkpoint.
2. Retrieve/regenerate artifact `10674085957` and show the user the latest 1440/390 homepage implementation.
3. Fix any visual issue from root cause.
4. Once Home is accepted, normalize Services, service details, Portfolio, project details, About, Process, Contact, Planner, secondary/legal pages, Header and Footer.
5. Review Arabic + English at 360 / 390 / 768 / 1024 / 1366 / 1440.
6. Rerun preview, quality and production-release checks.
7. Document Phase 13 completion before Phase 14.



## Production separation

VNext is **not production**.

Do not merge/cut over or alter production routing until the final release phase.


## 2026-09-25 — Production Motion & Performance Hardening

This checkpoint supersedes the older production-separation text above for the current live VNext release.

Production state:
- VNext has been cut over to `main`.
- Motion/performance PR: #39.
- Verified motion/performance source head: `a788addffa95bacaff80791ada4b2ef105ed63d7`.
- Merge commit: `8b461e5b361dc5f0d1885a697ce29f826aae0ce2`.
- Production alias remains `https://wasltech.vercel.app`.

Motion policy:
- no animation library or runtime framework;
- opacity/transform only;
- one IntersectionObserver for below-fold reveals;
- reveal setup deferred until page load + browser idle;
- content remains readable before reveal;
- optional reveal motion disabled for reduced-motion, Save-Data, <=4 GB device memory, <=4 logical CPUs, and 2G/slow-2G connections;
- mobile sticky-header backdrop blur removed.

Performance/media hardening:
- heavyweight temporary PNG Hero/article assets removed from generated runtime output;
- temporary public surfaces reuse approved lightweight WebP fallbacks until final imagery is supplied;
- homepage social image uses the optimized Home Hero;
- referenced runtime raster budget: <=180 KiB each;
- CSS gzip budget: <=16 KiB;
- all client JS gzip budget: <=8 KiB;
- project image budget remains <=150 KiB each and <=1.2 MiB total.

Latest verified measurements:
- CSS gzip: 15,934 bytes;
- all client JS gzip: 3,500 bytes;
- referenced project images: 1,026,583 bytes total;
- VNext verify: SUCCESS;
- full browser matrix: SUCCESS;
- indexable routes at 390/1440: 74 PASS;
- degraded-runtime test: 4x CPU, 180 ms latency, 180 KiB/s down, 80 KiB/s up;
- degraded DOMContentLoaded: 1,391 ms;
- max startup long task: 189 ms;
- interaction long task: 0 ms;
- scroll long task: 0 ms.

Remaining final media:
- 8 unique final images are documented in `docs/qa/FINAL_MEDIA_INVENTORY.md`.
- Existing Home, About, eight service images, and project/portfolio imagery must not be requested again.
