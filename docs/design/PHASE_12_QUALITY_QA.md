# Phase 12 — Motion, Accessibility, Performance & SEO QA

Date: 2026-09-19  
Branch: `quality/phase12-motion-a11y-perf-seo-20260919`  
Base `main` at start: `c5a89a8842f59bfa80bce060a2fdc6a0189a44c1`

## Scope

Phase 12 reviews and corrects the current public site without redesigning completed Phases 1–11:

- functional motion only,
- WCAG 2.2 AA-oriented keyboard/focus/semantic behavior,
- asset/loading/runtime discipline,
- SEO/crawlability/structured-data integrity,
- repeatable executable static QA.

Public pages in scope:

- `index.html`
- `services.html`
- `service-web.html`
- `portfolio.html`
- `about.html`
- `process.html`
- `contact.html`
- `faq.html`
- `blog.html`
- `404.html`

Dynamic service ids remain:

`web`, `app`, `store`, `programming`, `tech`, `profiles`, `design`, `marketing`.

## Findings and fixes

### 1. Motion

#### Finding
The shared runtime still used an `IntersectionObserver` reveal system for `.fade-up`. Content started hidden and waited for scroll intersection even though this movement was decorative rather than functional.

#### Fix
- Removed the reveal observer and its runtime initialization from `js/main.js`.
- `.fade-up` is now a static compatibility hook; content is visible immediately.
- Removed old hidden/translate/delay reveal rules from `css/base.css`.
- Removed old continuous `floatMascot` and `floatWhatsApp` keyframes.
- Deleted unused `js/particles.js`, which contained a continuous `requestAnimationFrame` particle loop and was not loaded by current public pages.
- Kept short functional transitions for menu/drawer/control state changes.
- Kept smooth back-to-top scrolling, with the existing `prefers-reduced-motion` fallback to instant scrolling.

Evidence after fix:
- `js/main.js`: no `IntersectionObserver`.
- `css/base.css`: no `@keyframes` and no `animation:`.
- `js/particles.js`: removed.

### 2. Accessibility

#### Finding — closed mobile navigation remained focusable
At <=900px the mobile navigation was moved off canvas using `transform`, but its links remained in the keyboard focus order while the drawer was closed.

#### Fix
`js/main.js` now synchronizes drawer availability:
- closed mobile drawer: `inert` + `aria-hidden="true"`,
- open mobile drawer: both removed,
- desktop mode: both removed,
- Escape closes the drawer,
- focus returns to the opening control,
- Tab remains contained while the drawer is open.

#### Finding — no keyboard bypass link
The shared shell had no skip-to-main link.

#### Fix
- Added a shared “تجاوز إلى المحتوى الرئيسي” skip link in `js/components.js`.
- It targets the actual main landmark id and creates `main-content` only when needed.
- Added a focused-only visual treatment in `css/shell.css`.

#### Additional accessibility corrections
- Mobile quick-contact wrapper now exposes an explicit `role="group"` with its accessible label.
- Corrected the undefined placeholder color token in `css/responsive-normalization.css` from `--wt-text-muted` to the existing `--wt-text-secondary`.
- Existing focus-visible treatment, 44px mobile target normalization, form labels, native `details/summary`, Escape handling, portfolio focus trap and focus restoration were retained.

Static page checks confirm:
- exactly one `h1` on every public page,
- exactly one `main` landmark on every public page,
- no literal dead `href="#"`,
- every static `img` has `alt`, `width` and `height`.

Runtime assistive-technology verification remains part of Phase 13.

### 3. Performance / resource discipline

#### Finding — broken global icon dependency
Every public page loaded:

`assets/fontawesome/css/all.min.css`

That file is 102,526 bytes and references `../webfonts/*.woff2`, while the live repository contains no `assets/fontawesome/webfonts` directory. This created a real missing-resource path.

#### Fix
- Added `css/icons.css`, a 1,940-byte Font Awesome Free 6.5.0 subset containing only icon classes used by the current site.
- All ten public pages now load this subset instead of the 102KB all-icons stylesheet.
- Required icon fonts are referenced through cdnjs and pages preconnect to that origin.
- Legacy Font Awesome CSS files remain in the repository but are not loaded by the current public site.

#### Finding — Google Fonts import waterfall
`css/fonts.css` used `@import` to load IBM Plex Sans Arabic / IBM Plex Sans.

#### Fix
- Replaced the extra CSS import hop with direct Google Fonts stylesheet links.
- Added preconnects to `fonts.googleapis.com` and `fonts.gstatic.com`.
- Removed obsolete `css/fonts.css`.

#### Current image/resource evidence
- Current services and portfolio data use the verified `assets/works/project_*.jpg` set.
- Large `assets/gen/*.png` files (roughly 1.7–2.5MB each) are present in repository history but are not referenced by the current public-page runtime paths reviewed here, so they were not deleted without stronger evidence.
- `assets/about_4.png` is approximately 254KB and remains the current About visual.
- Current static page images retain explicit dimensions.
- Above-fold page visuals that already used `fetchpriority="high"` were retained.
- Below-fold static images retain lazy loading where already applicable.

No numeric LCP / INP / CLS claim is made in this phase. They have not been measured in a trustworthy production-equivalent browser session yet.

### 4. SEO / semantics

#### Finding — wrong server 404 target
The repository already has a branded `404.html`, but `.htaccess` mapped HTTP 404 handling to `/index.html`.

#### Fix
- `ErrorDocument 404 /404.html`.
- The directive now sits outside the `mod_rewrite` conditional so it does not depend on that module being enabled.

#### Robots / sitemap
- Removed obsolete `Disallow: /assets/fonts/` from `robots.txt`; that path does not exist.
- Sitemap keeps the indexable core pages and all eight dynamic service URLs.
- Blog placeholder and 404 are not in sitemap.
- Blog placeholder remains `noindex,follow`.
- 404 remains `noindex,follow`.

#### Metadata / structured data
Static inspection confirms:
- indexable public pages have title, meta description and canonical,
- current Open Graph metadata is preserved,
- dynamic service runtime updates title, description, OG title/description/image and canonical based on the service id,
- Home Organization JSON-LD contains only repository-supported organization/contact/social facts,
- FAQ visible questions and FAQPage JSON-LD questions match one-for-one.

No unsupported prices, results, SLA, testimonials, technologies, sales figures or delivery durations were introduced.

## Executable quality gate

Added:

- `scripts/site_quality_check.py`
- `.github/workflows/site-quality.yml`

The gate uses only Python/Node standard tooling and checks:

- all ten public pages,
- Arabic/RTL root semantics,
- single H1 and main landmark,
- descriptions/canonicals/noindex policy,
- image alt + explicit dimensions,
- dead fragments and local file references,
- required stylesheet order,
- absence of the broken full Font Awesome bundle,
- absence of the old Google Fonts import path,
- absence of decorative reveal/particle runtime,
- dynamic service metadata hooks,
- sitemap coverage of all eight service ids,
- exclusion of blog/404 from sitemap,
- visible FAQ questions vs FAQPage JSON-LD,
- JavaScript syntax via `node --check`.

### CI execution result

PR #28 triggered the new `Site quality` workflow twice. Both attempts ended before any workflow step started:

- attempt 1: `runner_id: 0`, no Checkout/Setup/Test steps,
- attempt 2: `runner_id: 0`, no Checkout/Setup/Test steps.

This is an execution-environment / GitHub Actions runner failure, not a reported assertion failure from `site_quality_check.py`.

Because the runner never executed the repository code, the same invariants were re-run directly against PR head `86ee48a7b6da3efed7c750cab9518673194ca0ae` through the live repository contents:

- 10/10 public pages: expected H1/main/meta/canonical/noindex policy passed,
- local resource-reference check: 0 missing references,
- static images: required alt/width/height checks passed,
- legacy Font Awesome and `css/fonts.css`: not loaded,
- `responsive-normalization.css`: last stylesheet on all public pages,
- motion invariants: no reveal observer, no base keyframes/animation,
- sitemap: all 8 approved service ids present; blog/404 absent,
- FAQ: 12 visible questions = 12 FAQPage schema questions,
- JavaScript source syntax check performed directly on all current `js/*.js` files: passed.

The workflow file remains in the repository so CI will become executable automatically once GitHub-hosted runner execution is available.

## Measured vs not measured

Measured / statically verified:
- loaded icon CSS reduced from 102,526 bytes to 1,940 bytes,
- current repository asset file sizes,
- public HTML metadata/landmark/image attributes,
- public local resource references,
- motion/runtime source invariants,
- sitemap and structured-data consistency.

NOT VERIFIED in this phase:
- production LCP,
- production INP,
- production CLS,
- real network waterfall,
- third-party font response behavior in the final hosting environment,
- visual rendering at all Phase 13 viewport/theme combinations,
- assistive-technology behavior with a real screen reader.

## Known remaining issues / boundaries

1. `css/brand-v2.css` remains approximately 81KB and is still loaded globally. It was not selector-pruned because exact cross-page runtime selector coverage has not yet been proven; deleting rules speculatively would risk regressions from Phases 1–11.
2. Large legacy/generated repository assets were not deleted solely because they are large; current runtime references were prioritized.
3. Production visual/runtime approval remains the Phase 13 gate.
4. If the connected/hosted browser cannot prove that production is running the merged commit, Phase 13 must record the visual production gate as open rather than claiming approval.

## Phase 12 decision

Code/static quality gate: PASS on PR head via direct repository verification.  
GitHub-hosted runner execution: BLOCKED BY ENVIRONMENT — no job steps started in two attempts.  
Production visual/CWV gate: NOT VERIFIED — intentionally deferred to Phase 13 runtime QA.
