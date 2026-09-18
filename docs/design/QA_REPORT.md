# Wasl Tech Website Refresh — QA Report

Branch: `design/tech-forward-partner-20260919`
Date: 2026-09-19

## Verification status

### Final PR sanitation
- Removed accidental literal `\\n` artifacts from all rebuilt HTML files, shared component markup, portfolio JS and `brand-v2.css`.
- Re-scanned all rebuilt HTML: literal escaped-newline artifacts = 0.
- The only remaining `\\n` is intentional inside `contact-v2.js` to format the generated WhatsApp message.
- Normalized four inline heading colors to `--wt-text-primary` so they preserve contrast in Dark Mode.
- Re-verified the dynamic service schema: all six services contain `heroCards`, `targets`, `features`, `steps`, `faqs` and `cta`.

### VERIFIED — repository/static
- All primary rebuilt pages contain exactly one `h1`.
- All primary rebuilt pages use `css/brand-v2.css`.
- All primary rebuilt pages use the approved SVG favicon.
- Main published journeys contain zero literal `href="#"` dead links.
- Rebuilt pages contain no detected mojibake/replacement characters.
- Particles and floating decorative icons are removed from page markup.
- Current service taxonomy is preserved exactly from `js/services-data.js`: `web`, `app`, `store`, `tech`, `design`, `marketing`.
- Dynamic service architecture remains `service-web.html?id=...`.
- Service page UTF-8 corruption was removed by rebuilding the page.
- Six missing service hero asset references (`assets/21.png` … `assets/26.png`) were replaced with verified existing portfolio images appropriate to each category.
- Portfolio dataset remains 14 projects with its existing id/title/category/categoryName/image/description/link fields.
- All 14 referenced portfolio image files exist in the repository.
- Approved identity SVG lockups and favicon exist in `assets/brand/`.
- Sitemap removes the noindex placeholder blog and includes published core/service journeys.
- Blog is removed from primary navigation and marked `noindex,follow` until real content exists.
- Contact form does not claim backend delivery; it validates fields and prepares a structured WhatsApp message.
- Reduced-motion handling exists in both runtime JS and CSS.
- Mobile navigation has explicit aria state, Escape close behavior, scrim and body scroll lock.
- Portfolio drawer returns focus to its trigger and closes via Escape/backdrop.

## Visual Runtime QA — desktop + mobile

A local browser QA harness was built from the branch's current layout/CSS and official identity assets. Project screenshots were represented with same-ratio placeholders because private-repository binary assets could not be directly materialized into the browser container; the real referenced project image files were separately verified to exist in GitHub.

### Viewports reviewed
- Desktop: 1440×900
- Mobile: 390×844

### Themes reviewed
- Light
- Dark

### Surfaces visually reviewed
- Homepage
- Services overview
- Representative service detail
- Portfolio
- Contact

### Runtime layout checks
- No horizontal overflow was observed at 1440px or 390px in reviewed surfaces.
- Desktop header composition is balanced with five primary navigation links and a distinct CTA.
- Mobile header cleanly reduces to logo + theme + menu controls.
- Homepage hero retains clear hierarchy in both themes and stacks intentionally on mobile.
- Credibility strip, grouped services, work showcase, process, FAQ and final CTA remain legible in both themes.
- Services grouping remains understandable on mobile without reverting to a 3-column card grid.
- Service detail hierarchy remains readable on mobile; highlights, audience chips, deliverables and steps collapse without horizontal overflow.
- Portfolio cards retain clear image → category → title → action hierarchy on mobile and desktop.
- Contact hero, direct-contact option, contact channels and form remain visually separated and readable on mobile.
- Dark mode preserves hierarchy and the approved white logo; no dark-mode icon/label collision observed in reviewed layouts.

### Visual critique result
- The refresh no longer reads as a generic particles + floating-icon SaaS template.
- Navy leads the composition and teal is used as a controlled accent.
- Card usage is limited to meaningful groups and interactive surfaces rather than every content item.
- Mobile vertical length is still substantial on the homepage, but the sequence has distinct purpose and no repeated decorative sections; no carousel/accordion was introduced solely to shorten the page.
- Bright project screenshots will naturally create stronger light/dark contrast than placeholders; this is acceptable because project imagery is proof content rather than a decorative surface.

## CI
No GitHub Actions workflow/status checks were attached to the branch head during verification.

## Preview deployment boundary
No hosted preview deployment was available through the connected deployment tools for this repository. Therefore this report distinguishes:
- `VERIFIED STATIC / LOCAL VISUAL QA`
- from a future hosted-preview/network verification.

A hosted preview, if later configured, should repeat the same checks at:
- 1920×1080
- 1366×768
- 1024×768
- 768×1024
- 390×844
- 360×740

and verify:
- light / dark
- RTL
- mobile drawer open/closed
- keyboard navigation
- project drawer
- all six dynamic service ids
- contact-form validation and WhatsApp preparation
- reduced motion
- zero horizontal overflow
- zero console/network errors.

## Known content/asset boundaries
- No project metrics/results/technologies were invented.
- Dedicated service hero artwork was not fabricated; existing verified project imagery is used as a fallback.
- New dedicated service imagery can be supplied later as `ASSET REQUIRED` if desired.
- Blog articles remain `CONTENT REQUIRED` before the blog returns to primary navigation.
- There is no new backend form delivery in this refresh.

## Merge recommendation
The branch is visually and structurally coherent enough to open for review. Merge should still be treated as a production decision because the repository currently has no automated CI or hosted branch preview.
