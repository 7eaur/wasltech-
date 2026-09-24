# Wasl Tech VNext — Engineering Architecture

Status: CANONICAL ENGINEERING AUTHORITY

## 1. Architecture decision

VNext is rebuilt as a **build-time static multi-page site**.

Goals:
- crawlable HTML;
- minimal runtime JavaScript;
- no runtime frontend framework unless a future requirement proves it necessary;
- minimal dependencies;
- shared components;
- centralized data;
- deterministic build;
- strong performance;
- easy QA;
- easy handoff between engineers/conversations.

Node target: 24.

## 2. Target repository structure

VNext is bilingual from the architecture level. Arabic and English share the same entities, templates and build pipeline.

```text
src/
  config/
    site.js
    brand.js
    locales.js
    routes.js
    navigation.js
  data/
    services.js
    projects.js
    faq.js
    jobs.js
  content/
    pages/
      ar/
      en/
    articles/
      ar/
      en/
    legal/
      ar/
      en/
  components/
    Header.js
    Footer.js
    LanguageSwitcher.js
    Breadcrumbs.js
    PageHero.js
    SectionHeader.js
    ResponsiveImage.js
    ServiceCard.js
    ProjectCard.js
    ArticleCard.js
    JobCard.js
    FAQ.js
    ContactCTA.js
    ProjectPlanner.js
  templates/
    document.js
    standardPage.js
    articlePage.js
    legalPage.js
  pages/
    home.js
    services.js
    serviceDetail.js
    portfolio.js
    projectDetail.js
    about.js
    process.js
    contact.js
    startProject.js
    faq.js
    insights.js
    articleDetail.js
    careers.js
    jobDetail.js
    privacy.js
    terms.js
    notFound.js
  styles/
    tokens.css
    brand.css
    typography.css
    base.css
    layout.css
    components.css
    media.css
    pages/
  client/
    navigation.js
    portfolio.js
    planner.js
    accordion.js
    privacy-preferences.js
  lib/
    html.js
    i18n.js
    urls.js
    seo.js
    validation.js
scripts/
  build.mjs
  check.mjs
  sitemap.mjs
  visual-qa.mjs
public/
  assets/
dist/
docs/
```

Files are created only when a real responsibility exists. The structure is a responsibility map, not permission to create empty abstraction layers.

Dynamic entities such as services, projects, articles and jobs are data/content records. Page templates render them; adding one record must not require copying a page implementation.

## 3. No-patching rule

**Patching is prohibited as an implementation strategy.**

Forbidden patterns:
- appending a later CSS block only to override an earlier mistake;
- `final-fix.css`, `responsive-fix-v2.css`, or equivalent override layers;
- duplicating a component to avoid fixing its API;
- copying service/project content into multiple pages;
- adding `!important` to win specificity battles without root-cause analysis;
- page-specific rules inside global token/base files;
- keeping dead legacy code "just in case";
- monkey-patching runtime behavior from unrelated modules.

Required flow:
1. identify the owner module/layer;
2. identify root cause;
3. fix the owner;
4. remove obsolete rule/code;
5. run affected checks;
6. visually verify.

`!important` requires a documented reason and should be exceptional.

## 4. Single source of truth rules

Brand identity/assets:
`src/config/brand.js` + `src/styles/tokens.css` + `src/styles/brand.css` + `src/styles/typography.css`

Business/contact configuration:
`src/config/site.js`

Locales:
`src/config/locales.js`

Route builders:
`src/config/routes.js`

Navigation:
`src/config/navigation.js`

Services:
`src/data/services.js`

Projects:
`src/data/projects.js`

FAQ:
`src/data/faq.js`

Jobs:
`src/data/jobs.js` when job content exists.

Long-form localized content:
`src/content/*`

Do not duplicate the same entity in Arabic and English files as separate identities. One service/project/job record owns one stable id/slug and localized fields.

Articles may use localized source files because their bodies are long-form content, but each translation must share a stable article identity and translation relationship.

Do not duplicate business facts inside page modules.

## 5. Component rules

Create a shared component when:
- it appears in 2+ places with the same responsibility; or
- consistency is product-critical.

Do not abstract merely to reduce three lines of code.

Components receive data and render markup. They do not secretly fetch or mutate unrelated global state.

A page composes components. A page should not redefine component markup.

## 6. File-size discipline

Soft review thresholds:
- normal JS module: target under ~250 LOC;
- page module: review/split around ~300 LOC;
- CSS responsibility file: target under ~350 LOC;
- large data files are allowed when they are primarily data.

Crossing a threshold is not automatically wrong, but requires asking whether responsibilities have been mixed.

No mega-file may own shell + page + data + runtime behavior.

## 7. CSS architecture

Order:
1. tokens;
2. base/reset/type;
3. global layout primitives;
4. shared components;
5. media contracts;
6. page-specific composition.

Responsive rules live with the layer/component they own. Avoid a final "normalization" stylesheet that compensates for earlier architecture.

Rules:
- use tokens for repeated spacing/color/radius/shadow values;
- low specificity by default;
- no ID selectors for styling;
- no style attributes for normal production layout;
- no duplicate selector wars;
- page selectors scoped by page root when needed.

## 8. JavaScript architecture

Runtime JavaScript only for behavior that HTML/CSS cannot provide well:
- mobile navigation;
- portfolio filtering/detail interaction;
- project planner;
- optional theme control;
- progressive enhancements.

No JavaScript for basic page content rendering after load if build-time HTML can provide it.

No decorative animation runtime.

## 9. Routing / URL strategy

Arabic is the default locale.

Arabic examples:
- `/`
- `/services/`
- `/services/<service-slug>/`
- `/portfolio/`
- `/portfolio/<project-slug>/`
- `/insights/`
- `/insights/<article-slug>/`
- `/careers/`
- `/careers/<job-slug>/`
- `/about/`
- `/process/`
- `/contact/`
- `/start-project/`
- `/faq/`
- `/privacy/`
- `/terms/`

English mirrors the same stable slug identities under `/en/`:
- `/en/`
- `/en/services/`
- `/en/services/<service-slug>/`
- etc.

Stable entity slugs do not change by locale. The visible title changes; the identity does not.

This simplifies:
- translation relationships;
- canonical/hreflang generation;
- sitemap generation;
- analytics;
- related-content relationships;
- redirects.

Legacy `*.html` and `service-web.html?id=...` URLs must receive verified redirects at cutover.

No SEO-breaking URL migration without redirect verification.

## 10. Performance architecture

Core targets:
- LCP ≤ 2.5s
- INP < 200ms
- CLS < 0.1

Engineering rules:
- minimal JS;
- no unnecessary framework runtime;
- explicit image dimensions;
- responsive `srcset/sizes` where useful;
- AVIF/WebP/JPEG/PNG chosen by content;
- SVG for appropriate vector brand/icons;
- primary LCP image not lazy-loaded;
- non-critical images lazy-loaded;
- preconnect/preload only when evidence justifies it;
- avoid duplicate font requests;
- self-host fonts only if licensing/asset policy permits and it improves delivery; otherwise optimized Google Fonts loading;
- no third-party script without a documented product need.

## 11. Accessibility architecture

Target WCAG 2.2 AA.

Mandatory:
- semantic landmarks;
- correct heading structure;
- keyboard operability;
- visible `:focus-visible`;
- labels for controls;
- dialogs/drawers manage focus;
- minimum practical touch targets;
- alt text based on image purpose;
- reduced-motion support;
- logical DOM order;
- no essential hover-only interaction.

## 12. SEO architecture

SEO is a build concern, not a final-page patch.

Every indexable page must generate crawlable HTML containing its primary content without requiring client JavaScript.

Every indexable page:
- unique title;
- useful meta description;
- canonical URL;
- one H1;
- semantic heading structure;
- crawlable body copy;
- Open Graph baseline;
- internal links;
- language metadata.

Bilingual pages:
- self canonical;
- reciprocal `hreflang="ar"` and `hreflang="en"` when both translations are published;
- optional `x-default` according to final locale strategy;
- never publish an incomplete translation as if complete.

Build-generated discovery:
- `sitemap.xml` generated from published routes/data;
- `robots.txt` generated/validated;
- draft/noindex content excluded from sitemap;
- new published service/project/article/job records automatically enter the correct listing and sitemap.

Structured data only when truthful:
- Organization/LocalBusiness;
- BreadcrumbList;
- Article;
- FAQPage when visible FAQ matches;
- Service/project-related schema only when fields are supported.

Internal-link graph:
- service → relevant verified projects/articles;
- project → services used;
- article → relevant services/projects;
- related content derived from stable ids rather than copied links where practical.

Search performance depends on useful content and authority as well as architecture. VNext must not create thin pages merely to target keywords.

SEO checks must validate:
- duplicate slugs;
- duplicate titles where avoidable;
- missing canonical;
- missing hreflang pairs;
- broken internal links;
- missing image alt/dimensions;
- published `NOT VERIFIED` markers;
- sitemap/indexability mismatch.

## 13. Build and release discipline

VNext is developed on branches and must not replace production until:
- build passes;
- content checks pass;
- route/asset checks pass;
- accessibility/static checks pass;
- visual QA passes;
- production deployment exact SHA is verified.

The existing site stays available until VNext passes the cutover gate.

## 14. Clean-code definition

Clean code here means:
- one responsibility per module;
- names reflect product concepts;
- no unexplained constants;
- no duplicated business content;
- no dead code;
- no patch layers;
- comments explain why, not obvious syntax;
- components are small enough to reason about;
- changes are easy to test and revert.

The simplest architecture that meets the requirement wins.
