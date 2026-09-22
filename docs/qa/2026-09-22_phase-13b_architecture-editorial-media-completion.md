# Phase 13B — Architecture, Editorial & Hero Media Completion — 2026-09-22

## Why this phase was reopened

After cross-page visual normalization, the user added stable requirements that changed the pre-cutover completion gate:

- public pages must not present service-count or project-count counters;
- every public page family must have Hero imagery;
- current Hero imagery may be temporary while architecture is completed;
- Insights must be a real bilingual editorial surface, not an empty state;
- article/detail architecture, bilingual SEO, and search-engine output must be complete before requesting final imagery;
- Careers must remain honest when no role is open while keeping a reusable Job detail architecture ready for future real openings.

Phase 14 remains blocked until these requirements and the final media gate pass.

## Architecture completed

### Hero media contract
Added:
- `src/config/hero-media.js`
- `src/components/HeroMedia.js`

Hero media is now used by:
- Home;
- Services;
- Service Detail;
- Portfolio;
- Project Detail;
- About;
- Process;
- Contact;
- Project Planner;
- FAQ;
- Insights;
- Careers;
- Privacy;
- Terms;
- Article Detail;
- future Job Detail;
- 404.

Current editorial assets are temporary layout assets. Project detail continues to use its canonical project cover.

### Public counters removed
Removed the public service-count and project-count Hero treatments.

About now uses qualitative positioning cues instead of service/project totals.

Guard:
`scripts/check-public-surfaces.mjs`

### Insights / articles
Implemented bilingual published editorial architecture:
- `src/data/articles.js`
- `src/pages/insights.js`
- `src/pages/article-detail.js`
- `src/styles/insights-careers.css`

Published records use stable slugs, localized content, covers, author/date metadata, related-service links, SEO metadata, canonical/hreflang, Open Graph and structured data.

### Careers / jobs
Implemented:
- `src/pages/careers.js`
- `src/pages/job-detail.js`

No job opening was invented. Careers renders an honest empty state until a real open job record exists. Job detail and JobPosting schema are ready for future published records.

### SEO
Added:
- Article structured data;
- JobPosting structured-data builder;
- Breadcrumb data for article/job detail;
- Hero imagery reused as Open Graph/Twitter imagery across indexable page families;
- automatic sitemap generation for published articles and future open jobs;
- reciprocal Arabic/English canonical/hreflang contracts preserved.

### Cleanup
Removed:
- obsolete `src/pages/secondary-empty.js`;
- obsolete duplicate project primary-media renderer;
- obsolete About project-count dependency.

## Verification

### Runtime implementation checkpoint
`aea64eb0f4339a610fa8f035b8650e12bdbbd8cf`

### VNext verify
Run:
`35682925238`

Result:
**SUCCESS**

This covers preview and release verification after the architecture cleanup.

### Responsive route-family matrix
Run:
`35682925234`

Result:
**SUCCESS**

Artifact:
`10675451706`

Matrix includes a published article detail route and checks representative page families at:
- 360
- 390
- 768
- 1024
- 1366
- 1440

For both:
- Arabic RTL
- English LTR

Assertions:
- no horizontal overflow;
- one usable H1;
- IBM Plex family active;
- no page JavaScript errors.

Arabic full-page screenshots are captured at Desktop 1440 and Mobile 390.

### Documentation-head verification
Run:
`35682982991`

Result:
**SUCCESS**

## Visual review

Reviewed representative screenshots after the image-led Hero change.

Confirmed:
- Hero image integration preserves the calm profile-inspired direction;
- service directory remains compact on mobile;
- service detail keeps decision/support content readable after moving media into Hero;
- Insights listing uses a compact editorial grid;
- Article detail remains readable on Mobile 390 and keeps a clear long-form hierarchy;
- Footer and CTA separation remain intact;
- temporary imagery is visually sufficient for architecture review but is not the final media set.

## Remaining before Phase 14

1. Receive final page/service/article imagery from the user.
2. Replace temporary editorial media without changing the approved layout roles.
3. Optimize final media for web delivery.
4. Review focal crop at Mobile 390 and Desktop 1440.
5. Verify final Open Graph images.
6. Run final Preview/Release/SEO/quality checks.
7. Run final AR/EN responsive screenshot matrix.
8. Get final user visual acceptance.
9. Only then start Phase 14 production cutover.

## Production state

`main` remains unchanged as the legacy/current production branch.

No VNext cutover or production merge was performed.
