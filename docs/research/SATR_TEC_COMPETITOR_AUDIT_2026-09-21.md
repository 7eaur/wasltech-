# SATR TECHNOLOGY Competitor Audit
## مرجع منافس لبناء Wasl Tech بصورة أقوى

**Competitor:** SATR TECHNOLOGY — https://satr-tec.com/  
**Audit date:** 2026-09-21  
**Wasl repository:** `7eaur/wasltech-`  
**Purpose:** فهم البنية، أسلوب العرض، مسار التحويل، المحتوى، التقنيات المعلنة، ونقاط القوة والضعف في موقع سطر تكنولوجي، ثم تحويل ذلك إلى قواعد تنفيذية لوصل تك دون نسخ التصميم أو النصوص أو الهوية.

---

# 1. قواعد استخدام هذا الملف

هذا الملف **Benchmark / Research Reference** وليس Template للنسخ.

نستخدمه بهذه الطريقة:

1. نفهم لماذا يعمل العنصر.
2. نفصل الفكرة عن شكلها.
3. نبني تنفيذًا خاصًا بوصل تك متوافقًا مع هويتها.
4. لا ننسخ النصوص أو الصور أو ترتيبًا بصريًا حرفيًا.
5. لا ننقل أي ادعاء أو سعر أو مدة أو ضمان من المنافس.
6. أي تقنية غير مثبتة تُكتب `NOT VERIFIED`.
7. Source of Truth لوصل تك يبقى: الكود الحي + الهوية المعتمدة + المحتوى المثبت + الاختبارات.

---

# 2. نطاق الفحص

تم فحص الصفحات/المسارات العامة التالية من المنافس:

- Homepage: `/`
- English homepage: `/en`
- About: `/about`, `/en/about`
- Services: `/services`, `/en/services`
- Service detail examples:
  - `/services/websites-platforms`
  - `/services/mobile-applications`
  - `/services/management-systems`
  - `/services/accounting-systems`
- Portfolio: `/portfolio`, `/en/portfolio`
- Contact / Project Planner: `/contact`, `/contact?form=planner`
- English project planner examples under `/en/contact?... `
- Blog: `/blog`
- Careers: `/careers`
- Privacy / Terms were linked but direct source retrieval was not available in the audit environment.
- `robots.txt` and `sitemap.xml` could not be fetched by the audit tool, so their contents are **NOT VERIFIED**.

---

# 3. Executive Summary — لماذا الموقع يبدو منظمًا؟

قوة موقع SATR ليست في تأثير بصري واحد، بل في نظام متكامل من أربع طبقات:

## 3.1 طبقة العرض
- Hero مباشر جدًا: وعد واضح + Supporting line + CTA رئيسي + CTA ثانوي.
- الصور تُستخدم كدليل على المنتج/العمل، لا كزخرفة فقط.
- الأقسام متسلسلة وتجيب سؤالًا واحدًا في كل مرة.

## 3.2 طبقة الثقة
- صفحة About تشرح طريقة التفكير وليس تاريخ الشركة فقط.
- مبادئ عمل محددة: الدقة، سهولة الاستخدام، الأمن/الخصوصية، الشراكة.
- الأعمال مرتبطة بمشاريع حية ودراسات حالة.
- صفحات الخدمة تعرض نطاقًا وتسليمات وتكاملات ومراحل وFAQ.

## 3.3 طبقة التحويل
- CTA ثابت وواضح: بدء مشروع / تخطيط مشروع.
- Contact ليست نموذجًا واحدًا فقط؛ فيها General Message وProject Planner.
- Project Planner يسأل نوع الحل ثم الميزانية ثم تفاصيل العميل/المشروع.

## 3.4 طبقة المحتوى/SEO
- لكل خدمة صفحة مستقلة بمسار نظيف.
- أعمال منفصلة ويمكن ربطها بمشروع حي.
- عربي + إنجليزي بمسارات واضحة.
- Blog وCareers وLegal موجودة ضمن IA حتى إن كان بعضها قليل المحتوى.

**القاعدة المستفادة:** الموقع لا يعتمد على الصفحة الرئيسية وحدها. كل صفحة لها وظيفة Conversion/Trust مستقلة.

---

# 4. Information Architecture

## 4.1 Navigation الرئيسية

العناصر المرصودة:

- الرئيسية
- من نحن
- خدماتنا
- أعمالنا
- المدونة
- الوظائف
- اتصل بنا
- CTA منفصل: طلب مشروع جديد
- Language switch: English
- بيانات اتصال ظاهرة: هاتف + بريد

### ما نتعلمه لوصل تك
- التنقل يعرض بنية الشركة، وليس صفحات عامة فقط.
- CTA "طلب مشروع" منفصل بصريًا عن Navigation.
- Language switch موجود كمكوّن منتج وليس Footer-only.
- Contact info قريب من نقطة القرار.

### ما لا ننسخه حرفيًا
- عدد العناصر نفسه ليس هدفًا.
- لا نضيف Blog/Careers لوصل تك لمجرد التقليد بدون خطة محتوى أو توظيف حقيقية.

---

# 5. Homepage Architecture

الترتيب المرصود على الصفحة الرئيسية:

1. Header / Navigation / Project CTA / Language.
2. Hero:
   - Value proposition.
   - Supporting copy.
   - Start project CTA.
   - View work CTA.
   - Hero visual.
3. About teaser.
4. Work values / principles.
5. Services overview.
6. Selected portfolio / case studies.
7. Latest articles.
8. Closing CTA.
9. Footer.
10. Privacy/measurement preference UI.

## لماذا هذا التسلسل قوي؟
لأنه يبني رحلة عقلية:

**من أنتم؟ → ماذا تفعلون؟ → كيف تعملون؟ → ما دليلكم؟ → ماذا أعرف أكثر؟ → كيف أبدأ؟**

### Wasl rule
صفحتنا الرئيسية يجب أن تحتوي Proof قبل أن تطلب من المستخدم التواصل، وألا تتحول إلى قائمة خدمات طويلة فقط.

---

# 6. Hero Analysis

## بنية Hero عند المنافس

- H1 يحمل وعدًا واحدًا.
- Supporting line يشرح الميزة/طريقة العمل.
- CTA أساسي لبدء مشروع.
- CTA ثانوي لرؤية الأعمال.
- Visual داعم.

## المبدأ الجيد
المستخدم يفهم خلال ثوانٍ:
- ماذا تفعل الشركة؟
- كيف تختلف؟
- ماذا أفعل الآن؟

## Wasl Upgrade Rule
Hero وصل تك يجب أن يكون:
- أقصر من المنافس لغويًا.
- أكثر تميزًا بصريًا.
- مرتبطًا مباشرة بعبارة الهوية: **نبني حضورك الرقمي باحتراف**.
- لا يحتوي ادعاءات مثل "الأفضل" أو "الأكثر".
- يربط CTA مباشرة بمسار Project Planner/WhatsApp المنظم.

---

# 7. About / Positioning

المنافس لا يستخدم About كـ"نبذة شركة" فقط. الصفحة تشرح:

- الجمع بين software engineering + design + requirements analysis.
- فهم workflow والأهداف والمستخدمين.
- تحويل ذلك إلى scope + UX + maintainable architecture.
- رؤية ورسالة.
- مبادئ تنفيذ.
- Team section.

## نقطة قوة
هذا positioning يجعله يبدو **شريكًا تقنيًا** وليس مجرد جهة "تصمم مواقع".

## Wasl Upgrade
وصل تك يجب أن تصف نفسها بوضوح كجهة تجمع:

- UX/UI
- Development
- Product thinking
- Brand presence
- Content presentation
- QA/Performance

لكن بدون تعقيد أو ادعاءات غير مثبتة.

---

# 8. Services Architecture

## الخدمات الرئيسية المرصودة

المنافس يعرض 6 خطوط خدمات أساسية:

1. الأنظمة المحاسبية المتكاملة.
2. تطبيقات الجوال.
3. المواقع والمنصات.
4. المتاجر الإلكترونية.
5. ERP.
6. الأنظمة الإدارية المخصصة.

## ما يميز صفحة الخدمات العامة

- Service title.
- Brief value statement.
- "View service details" لكل خدمة.
- CTA لحل مخصص إذا لم تنطبق خدمة جاهزة.

## Wasl difference
وصل تك لديها 8 خدمات معتمدة:

1. المواقع
2. التطبيقات
3. المتاجر
4. البرمجة
5. الحلول التقنية
6. البروفايلات
7. الهوية/التصميم
8. التسويق

نحافظ على الثمانية، لكن ننظمها في مجموعات إدراكية بدل عرضها كمجموعة متساوية بدون سياق.

### Suggested groups
**Digital Products**
- مواقع
- تطبيقات
- متاجر

**Systems & Engineering**
- برمجة
- حلول تقنية

**Brand & Presence**
- هوية وتصميم
- بروفايلات
- تسويق

---

# 9. Service Detail Template — أهم نقطة في المنافس

صفحة الخدمة عند SATR من أقوى أجزاء الموقع.

## البنية المرصودة

1. Breadcrumb.
2. Service title.
3. Short promise / summary.
4. Service image.
5. Details / dimensions of service.
6. Estimated duration.
7. Starting price / range في بعض الخدمات.
8. Post-launch support في بعض الخدمات.
9. "What you receive" deliverables.
10. Available integrations.
11. Implementation phases.
12. FAQ.
13. Service-specific CTA.

## مثال مواقع/منصات
الصفحة تذكر:
- مدة تقريبية حسب نطاق المشروع.
- سعر بداية.
- دعم بعد الإطلاق.
- Deliverables مثل UI، responsive pages، CMS عند الحاجة، performance، basic SEO، forms، security basics.
- Integrations مثل WhatsApp، email، analytics/search tools، payments، maps، booking، CRM/ERP، APIs.
- Process من التحليل حتى الإطلاق.

## سبب القوة
العميل لا يرى "خدمة تطوير موقع" فقط؛ يرى **شكل التعاقد والنتيجة التي سيستلمها**.

## Wasl Upgrade Rule
كل خدمة في وصل تك يجب أن تتحول من:
> وصف تسويقي + بطاقات

إلى:
> المشكلة التي تحلها + لمن تناسب + ماذا يشمل النطاق + ماذا تستلم + تكاملات ممكنة + خطوات + FAQ + CTA.

### Important
لا نظهر سعرًا أو مدة إلا إذا اعتمدنا Business Rule حقيقية لوصل تك.

---

# 10. Project Planner / Contact Funnel

المنافس لديه مساران:

## 10.1 General message
- Name
- Email
- Phone
- Message

## 10.2 Project Planner
Step-based flow:

1. اختيار نوع الحل.
2. اختيار الميزانية.
3. بيانات التواصل.
4. تفاصيل وأهداف المشروع.
5. Submit.

## لماذا هذه الفكرة ممتازة؟
- تقلل السؤال المفتوح "كم السعر؟".
- تجمع معلومات قبل الحديث.
- تساعد على qualification.
- تحول Contact من صفحة ثابتة إلى **Lead Funnel**.

## Wasl Upgrade Proposal

نبني Project Planner خاص بوصل تك:

### Step 1 — ماذا تريد؟
- موقع
- تطبيق
- متجر
- نظام/برمجة
- هوية
- بروفايل
- تسويق
- غير متأكد

### Step 2 — حالة المشروع
- فكرة جديدة
- موجود ويحتاج تطوير
- إعادة تصميم
- إضافة وظيفة
- لا أعرف

### Step 3 — نطاق الأولوية
- إطلاق سريع
- MVP
- نسخة كاملة
- تطوير مرحلي
- استشارة أولًا

### Step 4 — بيانات المشروع
- Name
- WhatsApp
- Company/project
- Short brief
- Current URL optional

### Step 5
Generate structured WhatsApp message or server-side lead if backend is later approved.

### Wasl rule
لا ننسخ Budget ranges الخاصة بالمنافس. الميزانية تكون اختيارية أو مبنية على نطاقات معتمدة من وصل تك فقط.

---

# 11. Portfolio Architecture

## Portfolio listing

المنافس يستخدم:
- Filter by category.
- Project count.
- Year.
- Short project summary.
- Read case study.
- Visit live project.
- Some entries include technology tags.

## Homepage portfolio
- Selected projects.
- Horizontal exploration.
- Project numbers / year.
- Case-study framing rather than image gallery.

## لماذا هذا أقوى من Gallery؟
لأن كل مشروع يجيب:
- ماذا كان المنتج؟
- ما نوعه؟
- ماذا يفعل؟
- هل يمكنني رؤيته؟
- هل توجد دراسة حالة؟

## Wasl Upgrade

Portfolio في وصل تك يجب أن يدعم:

- Project title
- Category
- Year if verified
- Client/brand if public
- One-sentence outcome/scope
- Services involved
- Screens/images
- Live URL if public
- Case study
- Technology only if verified
- Related service CTA

### Project Detail ideal structure
1. Hero screenshot
2. Project identity
3. Brief
4. Problem/context
5. Scope
6. What was built
7. Key screens
8. Service tags
9. Technology (verified only)
10. Result / delivered output (not invented metric)
11. Next project CTA

---

# 12. Bilingual Architecture

Observed:
- Arabic root.
- English under `/en`.
- English About/Portfolio/Services/Contact variants.

## Strength
Language is part of IA, useful for Yemen + Gulf + broader B2B market.

## Weakness observed
Some English pages still surfaced Arabic labels/content for certain service/category values.

## Wasl Rule
If Wasl becomes bilingual:
- Locale must affect Navigation, service data, project labels, forms, validation, metadata and structured data.
- No mixed-language labels unless intentionally part of a brand/project name.
- Use one canonical content model with translations rather than two manually drifting page trees.

---

# 13. Content Strategy

SATR uses four content layers:

1. Sales pages.
2. Service education.
3. Case studies.
4. Blog/insights.

Homepage also promotes latest articles.

## Wasl opportunity
وصل تك currently benefits more from:
- Strong service pages.
- Case studies.
- FAQ.
- Process content.

Blog should not be promoted until it contains genuinely useful, maintained content.

---

# 14. SEO Architecture Observed

Evidence supports:

- Descriptive page-specific titles.
- Descriptive meta/search snippets.
- Clean service routes.
- Dedicated service landing pages.
- Dedicated portfolio route.
- Dedicated project URLs are linked from Portfolio.
- Arabic + English route structure.
- Breadcrumb-like structure on service detail.
- Content-rich service pages.
- FAQ content.
- Internal linking between services, portfolio, contact and content.

## NOT VERIFIED
The audit environment did not verify:
- sitemap.xml contents.
- robots.txt contents.
- exact canonical/hreflang implementation on every page.
- JSON-LD/schema types.
- actual Core Web Vitals.
- server cache headers.
- CDN.
- image optimization pipeline.

---

# 15. Privacy / Measurement UX

Observed:
- Privacy / Terms links.
- Measurement preference button.
- Consent UI with choices roughly equivalent to continue without measurement or allow measurement.
- Copy claims anonymous measurement and says IP is not stored or shared with advertisers.

## Wasl Rule
We can adopt the **pattern** only if implementation matches the claim.

Never copy privacy language before:
- deciding analytics provider,
- verifying data collection,
- implementing consent behavior,
- updating Privacy Policy.

---

# 16. Accessibility / UX Signals Observed

Positive signals from extracted markup/content:

- Skip-to-main-content link.
- Hierarchical headings.
- Form labels.
- Required indicators.
- Buttons with explicit actions.
- Empty states for no jobs/no content.
- Descriptive navigation labels.

## NOT VERIFIED
- Color contrast.
- Focus states.
- keyboard operation of all components.
- screen-reader behavior of sliders.
- reduced-motion handling.
- touch target sizes.
- exact mobile overflow behavior.

These require a real browser accessibility/visual pass.

---

# 17. Motion / Interaction Strategy

## Direct evidence
The website-services copy explicitly markets GSAP-based motion for web projects.

## Important distinction
This does **not** prove the current SATR website itself loads GSAP.

### Technology status
- GSAP as a capability/approach offered by SATR: **VERIFIED from service copy**.
- GSAP loaded by satr-tec.com itself: **NOT VERIFIED**.

## Interaction patterns observed from content
- Horizontal project browsing / carousel.
- Filterable portfolio.
- Multi-step project planner.
- Accordion FAQ.
- Contact mode switch.
- Language switch.
- Consent preferences.

## Wasl Rule
Motion must support:
- orientation,
- state transition,
- content reveal,
- carousel feedback.

No motion purely for decoration.

---

# 18. Technology Evidence Matrix

This is intentionally strict.

| Technology / capability | Evidence | Confidence | What it means |
|---|---|---:|---|
| Arabic + English localized routes | Live `/` + `/en` pages | High | Site architecture is bilingual |
| Multi-step form | Contact/Planner content | High | Project qualification funnel exists |
| Portfolio filters | Portfolio content | High | Interactive category filtering exists |
| Horizontal project exploration | Homepage copy instructs horizontal scrolling/arrows | High | Carousel/slider pattern exists |
| FAQ accordion pattern | Service pages | High | Service FAQ is interactive |
| Privacy/measurement preference UI | Footer/consent content | High | Consent controls exist |
| GSAP | Mentioned by their web-service page | Medium | Offered/claimed as a web animation approach; current site usage NOT VERIFIED |
| Flutter | Service copy | High as capability | Offered for app projects, not site frontend |
| React Native | Service copy | High as capability | Offered for app projects, not site frontend |
| Native iOS/Android | Service copy | High as capability | Offered for app projects |
| PHP / Laravel / CSS3 / HTML5 | Tags shown on at least one portfolio project | High for that project | Does not prove satr-tec.com uses Laravel |
| Google Analytics | Listed as available integration | Medium | Offered integration; current site use NOT VERIFIED |
| Google Search Console | Listed as available integration | Medium | Offered integration |
| Maps / payments / booking / CRM / ERP / external APIs | Listed integrations | High as offered capabilities | Not evidence of current site stack |
| Current satr-tec.com backend framework | No direct bundle/server evidence | **NOT VERIFIED** | Do not claim Laravel/Next/WordPress |
| Current satr-tec.com frontend framework | No direct bundle evidence | **NOT VERIFIED** | Do not claim React/Vue/Next |
| Hosting/CDN | Not exposed by available evidence | **NOT VERIFIED** | Needs network/header tooling |
| Database | No evidence | **NOT VERIFIED** | Do not infer |
| CMS | No evidence | **NOT VERIFIED** | Do not infer |

---

# 19. What SATR Does Well

## 19.1 Clear positioning
The language repeatedly frames them as a technology partner and product builder.

## 19.2 Service depth
Service pages answer commercial questions, not only design questions.

## 19.3 Conversion architecture
The Project Planner is stronger than a generic contact form.

## 19.4 Portfolio proof
Projects can link to live systems and case studies.

## 19.5 Bilingual intent
Arabic/English is integrated into navigation and content architecture.

## 19.6 Trust through specificity
Deliverables, integrations, phases and support make service scope easier to understand.

## 19.7 Content ecosystem
Homepage, services, portfolio, insights/blog, careers and legal pages create a larger-company perception.

---

# 20. Weaknesses / Gaps Found in SATR

These are important because Wasl should improve on them.

## 20.1 Marketing overstatement
Some service copy uses strong superlatives/absolutes such as concepts equivalent to:
- absolute security,
- exceptional/highest performance,
- stunning designs,
- total compatibility.

### Wasl rule
Prefer measurable or scoped wording:
- "responsive across target breakpoints"
- "performance is tested"
- "security controls appropriate to scope"
instead of absolute claims.

## 20.2 Content QA issue in Portfolio
At least one portfolio record showed garbled/duplicated Arabic text around the project description/category.

### Wasl rule
Portfolio data must come from structured records and pass content validation.

## 20.3 Homepage/Blog inconsistency
The homepage crawl surfaced recent articles, while the Blog page crawl reported no published articles.

Possible causes:
- cache/state mismatch,
- different data query,
- timing of publication,
- indexing lag.

### Wasl rule
One content source of truth. Homepage latest articles and Blog listing must use the same published dataset.

## 20.4 Budget localization inconsistency
Arabic project planner exposed low ranges (e.g. hundreds to low thousands USD), while the English planner exposed materially different ranges starting higher.

### Wasl rule
Budget ranges must be one business rule translated by locale, not independently authored.

## 20.5 Mixed-language content
English portfolio/planner results still surface some Arabic service/category labels.

### Wasl rule
Translate structured taxonomies centrally.

## 20.6 Empty/placeholder surfaces
- Careers has no openings.
- Team section says profiles will be added later.

These pages are acceptable as honest empty states, but too many incomplete areas can reduce perceived maturity.

### Wasl rule
Do not place a surface in primary navigation until it has real ongoing value, unless the empty state itself is strategically needed.

---

# 21. What Wasl Should Copy as PRINCIPLES

Not visuals. Not text. Principles:

1. **Every service gets a conversion-ready detail page.**
2. **Portfolio is evidence, not decoration.**
3. **Contact becomes a planner/funnel.**
4. **The homepage connects positioning → services → proof → CTA.**
5. **Use structured deliverables.**
6. **Show process in context, not as generic 4-step decoration.**
7. **FAQ belongs near the decision.**
8. **Link services to relevant projects.**
9. **Use clean, semantic URLs.**
10. **Bilingual architecture should come from shared content models.**
11. **Legal/measurement UX must match actual behavior.**
12. **Specificity builds trust more than adjectives.**

---

# 22. What Wasl Should NOT Copy

1. Competitor wording.
2. Competitor project names/images.
3. Exact visual composition.
4. Exact pricing.
5. Exact durations.
6. Exact support periods.
7. Absolute claims.
8. Mixed-language taxonomy.
9. Placeholder navigation without content.
10. Any technology assumption not verified.

---

# 23. Proposed Wasl Site Architecture VNext

## Primary navigation
- الرئيسية
- الخدمات
- الأعمال
- من نحن
- كيف نعمل
- تواصل / ابدأ مشروعك

Possible later:
- المعرفة / المدونة only after content exists.
- English only when translations are complete.

## Homepage
1. Hero.
2. Compact trust/positioning strip.
3. Services grouped into 3 solution families.
4. Selected projects/case studies.
5. Why Wasl / operating principles.
6. How we work.
7. Optional service-to-project proof.
8. Project Planner CTA.
9. Compact Footer.

## Services
- Grouped services.
- Each card has visual + one-sentence purpose + audience/use case.
- Custom needs CTA.

## Service detail
1. Integrated hero.
2. Who this is for.
3. What problem it solves.
4. Deliverables.
5. Possible integrations.
6. Relevant project proof.
7. Process specific to service.
8. FAQ.
9. Planner CTA.

## Portfolio
- Filter.
- Cards 2-up mobile / responsive grid desktop.
- Case-study details.
- Live project links where public.
- Technologies verified only.

## Contact / Planner
- Direct channels.
- General message.
- Structured planner.
- WhatsApp handoff or backend later.

---

# 24. Proposed Wasl Design Rules Learned from the Benchmark

## Layout
- Keep sections purposeful, not equal-height template blocks.
- Alternate image-led and text-led proof.
- Avoid a page made entirely of cards.
- Use card grids when comparing similar objects only.
- Use horizontal content when it shortens mobile pages without hiding information.

## Typography
- One main H1.
- Short section titles.
- Supporting lines no more than needed.
- Body copy built for scanning.
- Avoid adjective stacking.

## Images
- Hero image must prove context.
- Service images must describe the service category.
- Portfolio screenshots should be real project UI.
- Maintain consistent aspect ratios.
- Keep focal point stable on mobile.

## Buttons
Primary CTA:
- ابدأ مشروعك / خطط مشروعك.

Secondary:
- شاهد الأعمال / تفاصيل الخدمة.

Avoid 3+ competing CTAs in one viewport.

## Mobile
- Two cards per row where readability remains acceptable.
- Short descriptions with line clamp.
- Compact Footer.
- Buttons stay horizontal where touch width allows.
- Avoid vertical stacks that turn the page into 7000+ px unless content genuinely requires it.

---

# 25. Proposed Wasl Engineering Rules

1. Shared shell components.
2. One service data model powering list + details + planner.
3. One portfolio data source powering homepage + portfolio + related work.
4. Locale-ready data schema.
5. No duplicated service copy in HTML.
6. Semantic HTML.
7. Static crawlable content for essential sales content.
8. Responsive images with dimensions.
9. Lazy-load non-critical media.
10. Do not lazy-load LCP image.
11. Accessible forms.
12. Reduced-motion support.
13. Performance budget.
14. CI screenshot QA at desktop + 390 + 360.
15. Structured content QA guards:
   - no missing title,
   - no malformed Arabic,
   - no unverified metrics,
   - no broken project URL,
   - no duplicated slug.
16. Service and portfolio pages must pass same header/footer/design tokens.
17. Content schema and visible FAQ must stay synchronized if structured data is added.

---

# 26. Suggested Data Models for Wasl

## Service
```text
id
slug
group
title_ar
title_en?
short_description
hero_image
problem
audiences[]
deliverables[]
integrations[]
process_steps[]
faq[]
related_project_ids[]
cta
seo_title
seo_description
status
```

## Project
```text
id
slug
title
category
year?
client?
summary
cover_image
gallery[]
service_ids[]
technology_tags[]  // VERIFIED only
live_url?
case_study
status
publication_state
```

## Planner submission
```text
service_interest
project_stage
scope_priority
budget?           // optional until business ranges are approved
name
phone_or_whatsapp
email?
company?
current_url?
details
locale
source_page
```

---

# 27. Proposed Wasl Differentiators Beyond SATR

To be better, Wasl should emphasize:

## A. Better evidence discipline
No fake metrics, no absolute promises, no unverifiable tech tags.

## B. Better visual system
Consistent image quality, crop, typography and mobile density.

## C. Better case studies
Show context, what was built, real UI and scope instead of generic project descriptions.

## D. Better mobile architecture
Design mobile intentionally, not desktop stacked vertically.

## E. Better localization
One content model with locale fields and QA against mixed-language leaks.

## F. Better engineering transparency
Service pages can explain the process without naming technologies unless they matter to the client.

## G. Better planner
Use project stage + need + scope before budget, so the funnel feels consultative rather than purely price-led.

---

# 28. Priority Roadmap for Applying the Research to Wasl

## P0 — Content architecture
- Normalize service data.
- Normalize portfolio data.
- Define group taxonomy.
- Remove duplicated hardcoded copy.

## P1 — Homepage VNext
- Rework around positioning → services → project proof → process → planner.
- Preserve Wasl identity, not SATR visual style.

## P2 — Service detail VNext
- Deliverables.
- Integrations.
- Related projects.
- Service-specific process.
- FAQ.

## P3 — Portfolio / Case Studies
- Structured filters.
- Case-study page/template.
- Live links.
- Real screenshots.

## P4 — Project Planner
- Multi-step.
- WhatsApp handoff first.
- Backend later if needed.

## P5 — Bilingual readiness
- Prepare schema first.
- Publish English only when complete.

## P6 — SEO / Content system
- Service metadata.
- Project metadata.
- Internal links.
- Blog only when maintained.

## P7 — QA
- mobile/desktop screenshots,
- accessibility,
- content consistency,
- broken links,
- performance.

---

# 29. Evidence Sources

Primary public sources reviewed on 2026-09-21:

- https://satr-tec.com/
- https://satr-tec.com/en
- https://satr-tec.com/about
- https://satr-tec.com/en/about
- https://satr-tec.com/services
- https://satr-tec.com/en/services
- https://satr-tec.com/services/websites-platforms
- https://satr-tec.com/services/mobile-applications
- https://satr-tec.com/services/management-systems
- https://satr-tec.com/services/accounting-systems
- https://satr-tec.com/portfolio
- https://satr-tec.com/en/portfolio
- https://satr-tec.com/contact
- https://satr-tec.com/contact?form=planner
- https://satr-tec.com/blog
- https://satr-tec.com/careers

External technology lookup services were searched, but no domain-specific stack result was available without authenticated/paid lookup. Therefore the current SATR runtime framework/CMS/hosting remain **NOT VERIFIED**.

---

# 30. Final Benchmark Principle

> **Do not build Wasl to look like SATR. Build Wasl to be as structurally intentional as SATR, with stronger evidence, stronger mobile UX, cleaner content, and a distinct Wasl visual identity.**

This is the rule that should govern future implementation decisions derived from this audit.
