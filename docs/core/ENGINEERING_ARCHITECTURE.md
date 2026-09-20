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

```text
src/
  config/
    site.js
    navigation.js
  data/
    services.js
    projects.js
    faq.js
  components/
    Header.js
    Footer.js
    PageHero.js
    SectionHeader.js
    ResponsiveImage.js
    ServiceCard.js
    ProjectCard.js
    ContactCTA.js
    icons.js
  templates/
    document.js
  pages/
    home.js
    services.js
    serviceDetail.js
    portfolio.js
    about.js
    process.js
    contact.js
    faq.js
    notFound.js
  styles/
    tokens.css
    base.css
    layout.css
    components.css
    media.css
    pages/
      home.css
      services.css
      service-detail.css
      portfolio.css
      about.css
      process.css
      contact.css
  client/
    navigation.js
    portfolio.js
    planner.js
scripts/
  build.mjs
  check.mjs
  visual-qa.mjs
public/
  assets/
dist/
docs/
```

The exact file list may evolve, but responsibility boundaries must not collapse.

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

Business/contact configuration:
`src/config/site.js`

Services:
`src/data/services.js`

Projects:
`src/data/projects.js`

FAQ:
`src/data/faq.js`

Navigation:
`src/config/navigation.js`

Do not duplicate those values in page modules.

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

VNext should prefer clean crawlable routes.

Proposed final routes:
- `/`
- `/services/`
- `/services/<service-slug>/`
- `/portfolio/`
- `/portfolio/<project-slug>/` when case studies are ready
- `/about/`
- `/process/`
- `/contact/`
- `/faq/`

Legacy `*.html` and `service-web.html?id=...` URLs must receive redirects at cutover if routes change.

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

Every indexable page:
- unique title;
- unique meta description;
- canonical;
- one H1;
- semantic headings;
- crawlable main copy;
- internal links;
- Open Graph baseline.

Site-level:
- sitemap;
- robots;
- Organization/LocalBusiness schema only if supported;
- FAQ schema only when visible FAQ matches;
- service/project schema only if accurate;
- redirects tested;
- noindex for unfinished/private/utility content.

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
