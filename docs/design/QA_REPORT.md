# Wasl Tech Website Refresh — QA Report

Branch: `design/tech-forward-partner-20260919`
Date: 2026-09-19

## Verification status

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

### CI
No GitHub Actions workflow/status checks were attached to the branch head during verification.

### RUNTIME PREVIEW REQUIRED
A visual browser run of this branch is still required before merging to production/main because the private repository branch was not available as a runnable preview in this environment.

Required viewports:
- 1920×1080
- 1366×768
- 1024×768
- 768×1024
- 390×844
- 360×740

Required states:
- light / dark
- RTL
- mobile drawer open/closed
- keyboard navigation
- project drawer
- all six dynamic service ids
- contact-form validation and WhatsApp preparation
- reduced motion
- horizontal overflow check

## Known content/asset boundaries
- No project metrics/results/technologies were invented.
- Dedicated service hero artwork was not fabricated; existing verified project imagery is used as a fallback.
- New dedicated service imagery can be supplied later as `ASSET REQUIRED` if desired.
- Blog articles remain `CONTENT REQUIRED` before the blog returns to primary navigation.
- There is no new backend form delivery in this refresh.

## Merge recommendation
Do not treat static verification as visual runtime verification. Run a preview/browser QA pass before merging to production.
