# Wasl Tech VNext — Quality, Performance, SEO & Release Gates

Status: CANONICAL QA/RELEASE AUTHORITY

## 1. Definition

Quality is executable evidence, not confidence.

No "done" claim without passing the gates relevant to the change.

## 2. Static/content gate

Must verify:
- required routes exist;
- one H1 per public page;
- semantic landmarks;
- local assets resolve;
- no dead `href="#"`;
- fragment targets resolve;
- images have alt and dimensions;
- no indexable page missing title/description/canonical;
- no noindex page in sitemap;
- service ids/slugs match data;
- FAQ visible data matches schema;
- no duplicate slugs;
- no `NOT VERIFIED` accidentally published as customer-facing copy.

## 3. JavaScript gate

- syntax check;
- no uncaught console errors;
- no missing runtime modules;
- navigation works;
- portfolio filtering/detail works;
- planner works;
- theme behavior works if exposed;
- no essential content depends on JS reveal;
- no decorative continuous runtime.

## 4. Responsive visual matrix

Required widths:
- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 390×844
- 360×740

Review:
- no horizontal overflow;
- no clipping;
- no overlap;
- correct RTL;
- text wrapping;
- image crop/focal point;
- card density;
- header/menu;
- footer;
- forms;
- drawers/dialogs;
- sticky/fixed UI.

## 5. Accessibility gate

Target WCAG 2.2 AA.

Check:
- keyboard navigation;
- visible focus;
- logical tab order;
- skip link;
- menu/dialog focus behavior;
- labels/errors;
- contrast;
- touch targets;
- reduced motion;
- alt purpose;
- headings/landmarks;
- no hover-only essential info.

## 6. Performance budgets

Product targets:
- LCP ≤ 2.5s
- INP < 200ms
- CLS < 0.1

Build review:
- minimize JS;
- inspect total critical CSS/JS;
- no unused large library;
- explicit image dimensions;
- correct responsive formats;
- LCP image eager/fetch priority when justified;
- below-fold images lazy;
- avoid duplicate fonts;
- no unneeded third-party requests.

Regression budgets should become executable CI limits after Phase 1/3 establishes the new build.

## 7. SEO gate

SEO is verified as generated output, not assumed from architecture.

Check every indexable route:
- crawlable HTML contains its primary content without client rendering;
- unique title;
- useful meta description;
- canonical;
- one H1;
- semantic heading order;
- internal links;
- Open Graph baseline;
- image alt/dimensions where required.

Bilingual checks:
- Arabic default route and English `/en/` route map to the same stable entity identity;
- reciprocal `hreflang="ar"` / `hreflang="en"` exist when both translations are published;
- no incomplete locale is exposed as a normal indexable page;
- no mixed-language taxonomy leak;
- canonical never points one language at the other incorrectly.

Discovery checks:
- sitemap is generated from publishable routes/data;
- sitemap excludes drafts/noindex;
- robots policy is explicit and valid;
- newly published services/projects/articles/jobs enter sitemap automatically;
- redirects from legacy URLs are verified;
- internal related-content links resolve;
- no orphan high-value service/article page where avoidable.

Structured-data checks:
- Organization/LocalBusiness only with supported facts;
- BreadcrumbList matches visible route hierarchy;
- Article matches visible article data;
- FAQPage only when visible FAQ content matches exactly;
- no fabricated ratings/reviews/prices/availability.

Content/search checks:
- no duplicate slugs;
- no accidentally duplicated page titles at scale;
- no thin service/article pages created only for keywords;
- no `NOT VERIFIED` / `CONTENT REQUIRED` published;
- useful intent-specific copy exists for service/article pages;
- project/service/article relationships are valid.

Performance/search delivery:
- LCP asset strategy reviewed;
- responsive images;
- minimal JavaScript;
- no indexing-critical content hidden behind interaction;
- Core Web Vitals budgets remain in force.

## 8. Content/design gate

Check:
- no invented claims;
- no unsupported numbers;
- no generic AI copy;
- no repeated filler;
- heading/support are not duplicates;
- CTA describes next step;
- cards are justified;
- proof precedes claims where possible;
- each section has one purpose;
- page flow answers user questions in order.

## 9. Anti-patch gate

Before merge:
- no new override-only stylesheet;
- no duplicated component;
- no repeated service/project data;
- no unexplained `!important`;
- no dead legacy rule left after replacement;
- no mega-file created to avoid architecture decisions.

## 10. Branch/merge gate

Every implementation PR should state:
- scope;
- affected owners/modules;
- checks run;
- screenshot evidence where visual;
- known limitations;
- no unrelated changes.

## 11. Production release gate

Repository success and production success are separate.

Production is updated only when:
- exact deployed SHA is known;
- deployment state is READY;
- aliases/domains point to it;
- critical routes return successfully;
- no critical runtime error appears;
- visual smoke check passes on real production;
- redirects are verified after routing changes.

## 11B. Final editorial media gate

Before production cutover:
- every public route family must retain its Hero media surface;
- temporary editorial images must be replaced with approved final imagery where requested;
- final Hero/article images must be optimized for web delivery;
- LCP Hero image must remain the only eager content image on the page unless a documented exception exists;
- intrinsic dimensions must remain present;
- crop/focal point must be reviewed at 390 and 1440;
- social preview images must resolve;
- public UI must not expose service-count or project-count counters.

The current temporary editorial assets are valid only for architecture/layout verification and do not satisfy the final media-performance gate.

## 12. Documentation closeout

After a verified batch:
- update `PROJECT_STATUS.md`;
- update `PROJECT_HANDOFF.md`;
- add a dated `docs/qa/*` report only for meaningful phase/release evidence;
- do not create duplicate status documents.
