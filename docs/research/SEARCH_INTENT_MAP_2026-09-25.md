# Wasl Tech — Search Intent & Topic Ownership Map

Date: 2026-09-25  
Status: ACTIVE RESEARCH / PHASE 3 AUTHORITY  
Canonical rules: `docs/core/SEARCH_VISIBILITY.md`

## 1. Purpose

This map prevents keyword cannibalization and thin SEO expansion.

Rule:
**one primary search intent → one canonical owner page.**

Supporting articles may answer adjacent questions, but must link back to the canonical commercial owner and must not imitate a second service landing page.

This map is refined later using Google Search Console and Bing Webmaster evidence. Until then it uses:
- current Wasl Tech service architecture;
- current published article records;
- current Arabic search-result patterns in the Yemen market;
- verified Wasl Tech market scope: Yemen + Gulf.

No search-volume numbers are invented.

## 2. Local-market policy

Wasl Tech serves Yemen + Gulf.

Current search results show meaningful Yemen-local commercial phrasing around website design/development, mobile apps, ecommerce and software companies.

Implementation policy:
- keep the real service page as the canonical commercial owner;
- use Yemen + Gulf naturally in entity/about/home/service context where useful;
- do not create duplicated city pages such as Sana'a/Aden/Taiz pages without real differentiated local value;
- do not use “best”, “#1”, guaranteed ranking, invented project counts or unsupported review statistics;
- local expansion must come from real evidence and Search Console/Bing query data after launch.

## 3. Canonical commercial ownership

| Intent family | Canonical owner | Primary topic | Commercial variants the page may satisfy |
|---|---|---|---|
| Brand / digital partner | `/` | Wasl Tech digital solutions | شركة برمجة، شركة تصميم مواقع وتطبيقات، حلول رقمية في اليمن والخليج |
| Website design & development | `/services/web-development/` | تصميم وتطوير مواقع إلكترونية | تصميم مواقع، تطوير مواقع، موقع شركة، شركة تصميم مواقع |
| Mobile apps | `/services/mobile-app-development/` | تطوير تطبيقات الجوال | برمجة تطبيقات، Android وiOS، شركة تطوير تطبيقات |
| Ecommerce | `/services/ecommerce/` | تصميم وتطوير متاجر إلكترونية | إنشاء متجر، تصميم متجر، تطوير متجر إلكتروني |
| Custom software | `/services/custom-software/` | برمجة أنظمة مخصصة | تطوير أنظمة، نظام مخصص، لوحة إدارة، نظام ويب |
| Technical solutions | `/services/technical-solutions/` | حلول تقنية وربط الأنظمة | API، تكامل أنظمة، أتمتة عمليات، ربط خدمات |
| Company profiles | `/services/company-profiles/` | تصميم بروفايل شركة | ملف تعريفي، Company Profile، بروفايل شركات |
| Brand identity | `/services/brand-design/` | تصميم هوية بصرية | هوية بصرية، تصميم شعار ضمن نظام هوية، تطبيقات الهوية |
| Digital marketing | `/services/digital-marketing/` | تسويق رقمي وإدارة محتوى | إدارة محتوى، خطة محتوى، حملات رقمية |

English mirrors the same entity ownership under `/en/`.

## 3A. Subservice ownership policy

The current subservices inside the eight primary service pages are **supporting intent sections**, not standalone indexable landing pages.

Examples include landing pages, Android/iOS apps, multi-vendor stores, dashboards, APIs/integrations, company profiles, logo/identity work and social/content services.

Rules:
- keep each subservice under its canonical parent service by default;
- use its descriptive heading/body to expand parent-page topical coverage naturally;
- do not create a standalone URL only because a subservice name can be used as a keyword;
- a dedicated subservice page is justified only when Search Console/Bing evidence or a clear business requirement shows materially distinct intent **and** Wasl can provide substantial unique scope, evidence, FAQs and internal links;
- when a standalone page is justified later, update this ownership map first so the new page does not cannibalize its parent.

This preserves the current main implementation while preventing thin-page expansion.

## 4. Existing informational owners

### Published
1. `/insights/website-or-web-system/`
   - owns the comparison intent: موقع أم نظام ويب؟
   - supports: Web Development + Custom Software.
   - must not become a duplicate commercial “software development” landing page.

2. `/insights/before-building-ecommerce-store/`
   - owns pre-build ecommerce planning intent.
   - supports: Ecommerce.

3. `/insights/prepare-website-content-before-design/`
   - owns website-content preparation intent.
   - supports: Web Development, Company Profiles, Brand Design.

## 5. Approved supporting clusters

These are topic candidates, not automatic publishing orders.

### Website Development
Canonical owner: `/services/web-development/`
- كيف تحدد صفحات موقع شركتك قبل بدء التصميم؟
- متى تحتاج لوحة تحكم في موقعك؟
- ما الذي يجعل موقع الشركة واضحًا وسهل الاستخدام؟
- existing: موقع أم نظام ويب؟
- existing: كيف تجهز محتوى موقعك قبل بدء التصميم؟

### Mobile App Development
Canonical owner: `/services/mobile-app-development/`
- كيف تحوّل فكرة التطبيق إلى نطاق قابل للتنفيذ؟
- هل تبدأ بـ Android أم Android وiOS؟
- متى يحتاج التطبيق إلى Backend ولوحة إدارة؟

### Ecommerce
Canonical owner: `/services/ecommerce/`
- existing: ما الذي يجب حسمه قبل بناء متجر إلكتروني؟
- كيف تختار طريقة الدفع والتوصيل لمتجرك؟
- كيف تبني تصنيفات منتجات تسهّل على العميل الشراء؟

### Custom Software
Canonical owner: `/services/custom-software/`
- متى تحتاج نظامًا مخصصًا بدل برنامج جاهز؟
- كيف تقسّم مشروع النظام إلى مراحل بدون فقدان الصورة الكاملة؟
- ما الفرق بين لوحة التحكم والنظام المتكامل؟
- existing cross-cluster: موقع أم نظام ويب؟

### Technical Solutions
Canonical owner: `/services/technical-solutions/`
- متى يكون ربط الأنظمة أفضل من استبدالها؟
- كيف تعرف أن عملية يدوية تستحق الأتمتة؟
- كيف تبدأ تحليل مشكلة تقنية قبل اختيار الأداة؟

### Company Profiles
Canonical owner: `/services/company-profiles/`
- ما الذي يجب أن يحتويه بروفايل الشركة؟
- كيف ترتب خدمات شركتك داخل البروفايل؟
- ما الفرق بين بروفايل العرض ونسخة الطباعة؟
- existing cross-cluster: تجهيز محتوى الموقع قبل التصميم.

### Brand Identity
Canonical owner: `/services/brand-design/`
- متى تحتاج هوية بصرية كاملة وليس شعارًا فقط؟
- كيف تختار تطبيقات الهوية التي يحتاجها مشروعك فعلًا؟
- لماذا تحتاج العلامة إلى نظام ألوان وخطوط واضح؟

### Digital Marketing
Canonical owner: `/services/digital-marketing/`
- كيف تبني خطة محتوى مرتبطة بهدف مشروعك؟
- متى تحتاج إدارة محتوى كاملة ومتى تكفيك خطة؟
- كيف تفرق بين المحتوى العضوي والحملة المدفوعة؟

## 6. Content creation gate

A new article/page may be created only when all are true:
1. one real user question is clear;
2. the canonical owner is identified;
3. the article adds information that is not already adequately answered;
4. Wasl can provide a useful, factual answer;
5. the page can link naturally to a relevant service or evidence page;
6. it does not exist solely to repeat a city, keyword or synonym;
7. Arabic and English publication state is explicit;
8. title/description/schema/internal links pass the search visibility gate.

## 7. Keyword / title policy

Use natural language, not exact-match repetition.

Good:
- تصميم وتطوير مواقع إلكترونية
- تطوير تطبيقات الجوال Android وiOS
- برمجة وتطوير أنظمة مخصصة

Avoid:
- repeating “أفضل شركة تصميم مواقع في اليمن صنعاء عدن…”;
- forcing city names into every H1;
- replacing clear customer-facing copy with keyword lists;
- separate pages for synonyms that solve the same intent.

Geographic terms may appear in:
- Home/entity context;
- service support copy when it genuinely helps;
- metadata when useful and readable;
- future market-specific content only when materially differentiated.

## 8. Internal-link model

Required direction:
- Home → each canonical service.
- Service → relevant verified projects.
- Service → supporting articles.
- Article → its canonical service owner(s).
- Project → related services.
- Directory → detail pages.
- Footer → essential corporate/legal pages.

Anchor text must describe the destination naturally. Do not mass-repeat one exact-match anchor.

## 9. Phase 3 acceptance

Phase 3 is complete when:
- all eight services have one unique primary topic and commercial owner;
- Home owns broad brand/agency intent rather than competing with service detail pages;
- published articles have explicit supporting roles;
- planned article topics are assigned without duplication;
- no city/doorway page is approved without real differentiated value;
- future Search Console/Bing data can refine this map without changing entity identity.
