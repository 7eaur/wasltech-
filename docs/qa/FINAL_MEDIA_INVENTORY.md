# Wasl Tech VNext — Final Media Inventory

## 2026-09-25 — Performance-safe fallback + remaining final images

The current release no longer depends on the multi-megabyte temporary PNG Hero/article assets at runtime. Until final user imagery is supplied, the affected surfaces intentionally reuse existing optimized WebP media already approved in the project.

Already complete — do not request again:
- Homepage Hero.
- Homepage/About supporting image.
- About page Hero.
- All 8 service images, including service-detail Hero reuse.
- All project/portfolio record images.

### Remaining final media to request

A practical final set is **8 unique images**:

| ID | Final use | Reuse |
|---|---|---|
| FINAL-01 | Services directory Hero | unique |
| FINAL-02 | Portfolio directory Hero | unique |
| FINAL-03 | Process / How we work Hero | unique |
| FINAL-04 | Contact + Project Planner Hero | shared |
| FINAL-05 | FAQ + Insights Hero | shared |
| FINAL-06 | Article cover — Website or web system? | unique |
| FINAL-07 | Article cover — Before building an e-commerce store | unique |
| FINAL-08 | Article cover — Prepare website content before design | unique |

No additional image is required for Careers at this stage; it may intentionally reuse the approved About/workplace image. Privacy, Terms, and 404 may also reuse neutral existing media and do not require dedicated user-supplied assets unless a later visual review proves otherwise.

Preferred source for FINAL-01 through FINAL-08:
- horizontal and crop-safe;
- ideally at least 1600 × 1000;
- no embedded headings, buttons, or essential text;
- important subject kept away from extreme edges;
- suitable for Arabic and English reuse.

Runtime derivatives must remain optimized and should not replace the preserved original source file.

## 2026-09-24 — Current integration checkpoint
- All 8 service source JPEGs are present under `assets/services/source/`.
- All 8 runtime WebP derivatives are present under `assets/services/`.
- `src/data/services.js` owns their canonical mappings.
- Home, Services and service-detail Hero surfaces share the same service image ownership.
- Home Hero runtime media: `assets/media/home-hero.webp`.
- Home/About runtime media: `assets/media/about-us.webp`.
- Corresponding source originals are preserved under `assets/media/source/`.
- These integrated media items are **not pending**.
- Any remaining “pending media” in this inventory refers only to other editorial Hero/article slots not explicitly marked integrated.


Status: **PARTIAL MEDIA RECEIVED — SERVICE SET + HOME/ABOUT MEDIA INTEGRATED; OTHER EDITORIAL MEDIA PENDING**
Phase: 13B — final media gate
Branch: `rebuild/vnext-foundation-20260921`

This file is the exact media handoff contract for the final pre-cutover image stage.

## 2026-09-24 intake update — service set received

Section C is now **integrated**: user originals are preserved, optimized WebP derivatives are committed, and the canonical service mapping is wired through the public surfaces.

Locked service-image mapping and intended filenames:

| Service slot | Slug | Supplied subject | Web derivative | Current repo status |
|---|---|---|---|---|
| SERVICE-01 | `web-development` | Wasl website on laptop | `web-development.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-02 | `mobile-app-development` | Wasl mobile app / phone | `mobile-app-development.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-03 | `ecommerce` | e-commerce storefront on laptop | `ecommerce.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-04 | `custom-software` | source-code editor on laptop | `custom-software.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-05 | `technical-solutions` | cloud/server infrastructure | `technical-solutions.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-06 | `company-profiles` | printed profile/brochure | `company-profiles.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-07 | `brand-design` | Wasl identity/stationery mockup | `brand-design.webp` | **INTEGRATED — source JPEG + runtime WebP** |
| SERVICE-08 | `digital-marketing` | analytics/dashboard screen | `digital-marketing.webp` | **INTEGRATED — source JPEG + runtime WebP** |

Prepared derivative specification:
- WebP
- `1280 × 720`
- approximately `52–103 KB` per file
- same canonical image should feed the service card/listing and service-detail Hero wherever the current architecture consumes `service.image`.

The user's explicit storage requirement is:
- keep/upload the **original user files unchanged** as source;
- separately keep optimized WebP derivatives for runtime use;
- verify GitHub contains all eight originals after the commit.

Recommended paths:
- originals: `assets/services/source/<service-slug>.jpeg`
- derivatives: `assets/services/<service-slug>.webp`

Current integration state:
- originals: **8/8 in GitHub**
- derivatives: **8/8 in GitHub**
- `src/data/services.js`: **updated to canonical WebP paths**
- Homepage / Services directory / service-detail Hero: **wired to the same service.image**
- user mapping: **approved**
- manual Vercel deployment: **deferred by user request**
- technical verification: **GitHub VNext verify required after this integration commit**

The service originals no longer need to be re-requested; they are preserved in the repository.

Homepage Hero, Homepage About, and the About page Hero have also been supplied and integrated. Remaining page-Hero/article slots in Sections B and D remain pending unless separately supplied.

## Rules

- Do not redesign page composition while replacing media.
- User-supplied originals are the source of truth.
- Prefer text-free imagery so one asset can serve Arabic and English.
- Hero/service/article sources should be horizontal and crop-safe.
- Preferred source size: at least **1600 × 1000** for 16:10 media.
- Home About/supporting team image may use **1600 × 1200** or another crop-safe 4:3 source.
- Keep important subjects away from extreme edges.
- Do not embed essential labels, headings, or calls to action inside images.
- Final implementation should use appropriate responsive web formats/sizes, intrinsic dimensions, and preserve only one eager/high-priority content image per page.
- Below-fold imagery remains lazy-loaded.
- Open Graph/Twitter media must resolve after replacement.
- Final acceptance requires visual crop review at 390 and 1440 plus full VNext verify and route matrix.

---

## A. Home — 2 slots

| Slot | Role | Current temporary source | Preferred final source |
|---|---|---|---|
| HOME-01 | Homepage Hero | `/assets/media/home-hero.webp` **FINAL** | User-approved digital devices/interfaces composition; source: `assets/media/source/home-hero.jpeg` |
| HOME-02 | Homepage About supporting image | `/assets/media/about-us.webp` **FINAL** | User-approved Wasl Tech workplace/identity image; source: `assets/media/source/about-us.jpeg` |

Both assets are shared by Arabic and English.

---

## B. Primary / secondary page Heroes — 12 slots

| Slot | Page | Current temporary source | Notes |
|---|---|---|---|
| HERO-01 | Services directory | `/assets/gen/hero_portfolio.png` | Digital services / connected work |
| HERO-02 | Portfolio | `/assets/gen/hero_portfolio.png` | Work / portfolio context |
| HERO-03 | About | `/assets/media/about-us.webp` **FINAL** | User-approved Wasl Tech workplace/identity image |
| HERO-04 | Process | `/assets/gen/hero_process.png` | Planning / process / workflow |
| HERO-05 | Contact | `/assets/gen/hero_contact.png` | Communication / contact |
| HERO-06 | Project Planner | `/assets/gen/hero_contact.png` | Project discussion / briefing |
| HERO-07 | FAQ | `/assets/gen/hero_blog.png` | Guidance / questions / knowledge |
| HERO-08 | Insights | `/assets/gen/hero_blog.png` | Editorial / knowledge |
| HERO-09 | Careers | `/assets/about_2.png` | Team / workplace; no fake hiring scene required |
| HERO-10 | Privacy | `/assets/gen/hero_blog.png` | Neutral technology/privacy context |
| HERO-11 | Terms | `/assets/gen/hero_process.png` | Neutral agreement/process context |
| HERO-12 | 404 | `/assets/gen/hero_contact.png` | Neutral navigation/recovery context |

### Reuse allowance

These are 12 page slots, but they do **not** require 12 unique files.

Safe intentional reuse groups are allowed if the final image genuinely fits both pages:
- Contact + Project Planner
- FAQ + Insights
- About + Careers
- Privacy + Terms/utility pages only when the visual remains neutral

Services and Portfolio should normally have distinct final Hero images.

---

## C. Service-detail Heroes — 8 slots

Each service detail currently reuses a service/card image and is explicitly marked temporary as Hero media.

| Slot | Service | Route |
|---|---|---|
| SERVICE-01 | Website Design & Development / تطوير المواقع الإلكترونية | `/services/web-development/` |
| SERVICE-02 | Mobile App Development / تطوير تطبيقات الجوال | `/services/mobile-app-development/` |
| SERVICE-03 | E-commerce Development / المتاجر الإلكترونية | `/services/ecommerce/` |
| SERVICE-04 | Custom Software & Systems / البرمجة وتطوير الأنظمة | `/services/custom-software/` |
| SERVICE-05 | Technical Solutions / الحلول التقنية | `/services/technical-solutions/` |
| SERVICE-06 | Company Profiles / تصميم البروفايلات | `/services/company-profiles/` |
| SERVICE-07 | Brand Design / الهوية البصرية والتصميم | `/services/brand-design/` |
| SERVICE-08 | Digital Marketing & Content / التسويق الرقمي وإدارة المحتوى | `/services/digital-marketing/` |

Preferred final source for each: 16:10 horizontal, specific to the service, no embedded marketing text, strong enough for Hero crop at both 390 and 1440.

---

## D. Published article covers — 3 slots

| Slot | Article | Current temporary source |
|---|---|---|
| ARTICLE-01 | Website or web system? / موقع أم نظام ويب؟ | `/assets/gen/blog_web.png` |
| ARTICLE-02 | Before building an e-commerce store / ما الذي يجب حسمه قبل بناء متجر إلكتروني؟ | `/assets/gen/blog_ecommerce.png` |
| ARTICLE-03 | Prepare website content before design / كيف تجهز محتوى موقعك قبل بدء التصميم؟ | `/assets/gen/blog_brand.png` |

Preferred final source: editorial 16:10, text-free, suitable for article card + article Hero + social preview.

---

## E. Project media — no replacement required in this gate

Canonical project images are **not** part of the pending final-media request.

They already have:
- one primary image per project;
- intrinsic dimensions;
- project-specific identity;
- controlled build inclusion.

Do not replace project images unless the user explicitly requests it later.

---

## Final count

- Home slots: **2**
- Page-Hero slots: **12**
- Service-Hero slots: **8**
- Article-cover slots: **3**
- Total logical slots: **25**

Because page-Hero reuse is allowed, the user may provide fewer than 25 unique files.

A practical minimum set that still avoids obvious repetition is:
- 2 Home assets
- 7–9 primary/secondary page Hero assets with intentional reuse
- 8 service Hero assets
- 3 article covers

Expected practical unique-file range: **20–22 images**.

---

## Intake workflow

Images may be sent one by one or in batches; ZIP is not required.

For every received file:
1. identify the intended slot from this inventory;
2. keep the original unchanged as source;
3. confirm crop/focal point;
4. prepare responsive web derivative(s);
5. update the centralized media mapping/data owner;
6. verify intrinsic dimensions;
7. verify LCP/lazy-loading contract;
8. review 390 + 1440;
9. verify social preview where applicable;
10. mark the slot complete in this file or the final-media QA record.

No Phase 14 cutover is permitted until all accepted final-media slots are complete and the user explicitly approves the final visual result.
