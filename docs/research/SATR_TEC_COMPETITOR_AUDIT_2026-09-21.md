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


---

# 31. Deep Visual Design Reading — كيف يصنع الموقع إحساس الأناقة

هذا القسم لا ينسخ CSS أو أبعاداً غير متاحة لنا كدليل مباشر؛ بل يوثق **القرارات التصميمية المرصودة من ترتيب المحتوى، طريقة العرض، الصور، التسلسل، وأنماط التفاعل العامة**.

## 31.1 الأناقة ليست في عنصر واحد

الانطباع العام للموقع ناتج من تكرار قواعد ثابتة:

- كل قسم يحمل فكرة واحدة.
- العنوان كبير وواضح، لكن النص المساعد مختصر.
- هناك توازن بين النص والصورة بدل ازدحام الاثنين معاً.
- الأعمال تُستخدم كدليل بصري حقيقي.
- الأرقام والسنة والتصنيف تُعرض كمعلومات ثانوية، لا كعناوين منافسة.
- CTA لا يظهر كزر عشوائي؛ يأتي بعد منطق يقود إليه.
- الأقسام تتناوب بين تعريف، شرح، إثبات، ثم تحويل.
- المساحات البيضاء جزء من التصميم وليست فراغاً ضائعاً.

### قاعدة Wasl
الأناقة = **وضوح hierarchy + ضبط spacing + تقليل المنافسة البصرية + إثبات حقيقي بالصور**.

---

# 32. Visual Hierarchy System

## 32.1 طبقات النص المتكررة

يمكن استخلاص نظام هرمي شبه ثابت:

1. **Eyebrow / Orientation label**
   - مثال وظيفي: من نحن، خدماتنا، معرض المشاريع، دراسة حالة، قبل التنفيذ، ما قمنا به، الأثر.
   - دوره: تعريف نوع القسم، لا حمل الرسالة الرئيسية.

2. **Main heading**
   - يحمل الفكرة أو الوعد.
   - غالباً جملة قصيرة لها معنى، لا مجرد اسم القسم.

3. **Supporting copy**
   - يشرح كيف أو لماذا.
   - غالباً فقرة واحدة أو فقرتان قصيرتان.

4. **Metadata**
   - سنة، تصنيف، عميل، مدة، فئة.

5. **Action**
   - "تفاصيل المشروع"، "مشاهدة تفاصيل الخدمة"، "خطط لمشروعك"، إلخ.

### قاعدة Wasl
لا نستخدم H2 مثل "خدماتنا" إذا كان الـeyebrow يقول "الخدمات".  
الأفضل:
- Eyebrow: الخدمات
- H2: حلول رقمية مرتبة حول احتياج مشروعك

---

# 33. Hero System — دراسة عميقة

## 33.1 Homepage Hero

وظيفته الرئيسية **Positioning + Direction**:

- H1 = ماذا تفعل الشركة بصورة عامة.
- Supporting = كيف تفعل ذلك / ما الذي يجمع تخصصاتها.
- Primary CTA = بدء المشروع.
- Secondary CTA = دليل الثقة / الأعمال.
- Visual = يمثل "المنتج الرقمي" أو مخرجات الشركة.

الـHero لا يحاول شرح كل الخدمات أو كل المزايا.

### Writing formula
**[تحويل/نتيجة] + [الشيء الذي نبنيه]**

ثم:
**[كيف نعمل] + [لماذا يفيد العميل]**

ثم CTA:
- ابدأ
- شاهد الدليل

## 33.2 Inner-page Hero

من الصفحات الداخلية يتضح أن وظيفة Hero تختلف حسب الصفحة:

### Services hero
- يعرّف نطاق الحلول.
- يشرح أن الخدمات مرتبطة بالأهداف.
- يدفع للاستكشاف.

### Service detail hero
- اسم الخدمة.
- جملة قيمة قصيرة.
- صورة/visual للخدمة.
- Breadcrumb للتوجيه.

### Portfolio hero
- يضع المستخدم في وضع "استكشاف أعمال".
- يوضح أن المعروض مشاريع/دراسات حالة، لا مجرد Gallery.

### Case study hero
- Badge/eyebrow: دراسة حالة.
- اسم المشروع.
- وصف واحد مركز.
- Metadata مباشر بعد العنوان.
- Hero screenshot.

### Contact hero
- "ابدأ الخطوة الأولى".
- عنوان يدعو للتخطيط لا للإرسال فقط.
- سطر يخفف الغموض ويوضح أن الفريق سيصيغ الحل مع العميل.

### Careers hero
- توظيف/انضمام.
- رسالة ثقافية أكثر من كونها خدمة.

## 33.3 قاعدة Wasl للـHero

يجب ألا يكون لدينا **Hero واحد يُنسخ في كل الصفحات**.

نعتمد 5 أنواع:

1. Brand Hero — الرئيسية.
2. Directory Hero — الخدمات/الأعمال.
3. Detail Hero — الخدمة.
4. Evidence Hero — دراسة الحالة.
5. Action Hero — التواصل/Project Planner.

لكنها تشترك في:
- نفس typography.
- نفس spacing grammar.
- نفس CTA language.
- نفس الهوية.
- نفس طريقة التعامل مع الصور.

---

# 34. Section Sequencing — لماذا التسلسل يبدو طبيعياً

## 34.1 Homepage

التسلسل المرصود:

1. Positioning.
2. About preview.
3. Values.
4. Services.
5. Selected work.
6. Knowledge/articles.
7. Final CTA.
8. Footer.

### المنطق
**اعرفنا → افهم كيف نعمل → ماذا نقدم → شاهد الدليل → تعلم أكثر → ابدأ.**

## 34.2 Service Detail

التسلسل المرصود:

1. Breadcrumb.
2. Hero.
3. Scope/details.
4. Duration / pricing / support where present.
5. Deliverables.
6. Integrations.
7. Delivery process.
8. Related work where present.
9. FAQ.
10. Service CTA.

### المنطق
**ما الخدمة؟ → ماذا تعني؟ → ماذا سأستلم؟ → ما الذي يمكن ربطه؟ → كيف ستنفذ؟ → هل فعلتم شيئاً شبيهاً؟ → أسئلتي؟ → ابدأ.**

## 34.3 Case Study

1. Breadcrumb.
2. Case-study label.
3. Project title.
4. One-paragraph summary.
5. Metadata.
6. Hero image.
7. Overview.
8. Challenge.
9. Solution.
10. Verified results.
11. Live project.
12. Related studies.
13. Similar-project CTA.

### المنطق
**ما المشروع؟ → ما السياق؟ → ما المشكلة؟ → ماذا صنعنا؟ → ماذا تحقق؟ → شاهد/قارن → ابدأ مشروعاً مشابهاً.**

## 34.4 Contact / Planner

1. Orientation.
2. Title + reassurance.
3. Direct channels.
4. Choice between general message / project request.
5. Planner Step 1: type.
6. Step 2: budget.
7. Step 3: details + contact.
8. Consent statement.
9. Submit.

### المنطق
**اعرف طريقة التواصل → اختر مستوى الجدية → حدّد نوع الطلب → أعط سياقاً → أرسل.**

---

# 35. Page-by-Page Anatomy Reference

## 35.1 Home
**Purpose:** Positioning + proof + conversion.

Must contain:
- Brand statement.
- concise support line.
- dual CTA.
- about teaser.
- operating values.
- service families.
- selected proof.
- optional knowledge section only when maintained.
- final project CTA.

## 35.2 About
**Purpose:** Explain how the company thinks.

Strong content types:
- origin/evolution.
- working method.
- principles.
- vision.
- mission.
- team.

Avoid:
- generic "we are a leading company".
- long history with no relevance.
- invented milestones.

## 35.3 Services Directory
**Purpose:** Help user identify the correct solution family.

Strong content:
- category headline.
- one sentence per service.
- service detail link.
- custom-needs CTA.

## 35.4 Service Detail
**Purpose:** Reduce purchase uncertainty.

Strong content:
- short promise.
- service scope.
- estimated duration only if approved.
- price/range only if approved.
- support only if contractual.
- deliverables.
- integrations.
- phases.
- related work.
- FAQ.
- service CTA.

## 35.5 Portfolio Listing
**Purpose:** Evidence browser.

Strong content:
- category filters.
- count.
- project title.
- category/year.
- short summary.
- case-study link.
- live link where allowed.

## 35.6 Case Study
**Purpose:** Convert work into evidence.

Strong content:
- project identity.
- context.
- challenge.
- solution.
- verified outcomes.
- screenshots.
- related work.
- project-specific CTA.

## 35.7 Contact
**Purpose:** Minimize friction while gathering enough context.

Strong content:
- phone/email/location.
- general inquiry.
- project planner.
- progressive questions.
- privacy consent.

## 35.8 Blog
**Purpose:** Decision education and SEO support.

Strong content:
- search.
- category.
- article cards.
- reading time.
- author/date.
- useful CTA tied to topic.

## 35.9 Careers
**Purpose:** Employer brand / hiring.

Even empty state is written as:
- culture/ambition first.
- current opportunities second.
- honest "no openings" state.

---

# 36. Writing System — كيف يكتبون

## 36.1 النبرة الأساسية

النبرة تميل إلى:
- B2B.
- مباشرة.
- تقنية لكن مفهومة.
- تستخدم كلمات business + engineering معاً.
- تربط كل تقنية بنتيجة أو استخدام.
- تتجنب الفكاهة واللغة غير الرسمية.
- تستخدم أفعالاً واضحة: نصمم، نطور، نحلل، نربط، ننشر، ندرب.

## 36.2 بنية الجملة

النمط المتكرر:

**فعل + مفعول واضح + سبب/نتيجة**

مثال منهجي غير منقول:
> نطوّر نظاماً مخصصاً لإدارة العمليات، مع صلاحيات وتقارير تساعد الفريق على متابعة العمل.

بدل:
> نقدم حلولاً مبتكرة وفريدة بأعلى جودة.

## 36.3 كيف يكتبون الـH1

H1 غالباً واحد من الأنواع التالية:

### Transformational
تحويل فكرة إلى نتيجة رقمية.

### Category + value
اسم الخدمة + قيمتها.

### Action
دعوة لتخطيط/بدء المشروع.

### Story
قصة الشركة / دراسة الحالة.

## 36.4 كيف يكتبون Supporting line

وظيفته ليست إعادة H1.

H1 يذكر **ماذا**.
Supporting يشرح:
- كيف،
- لمن،
- أو ما الفائدة.

### Wasl rule
إذا لم يضف supporting معلومة، احذفه.

---

# 37. Service Copy Formula

صياغة صفحة الخدمة يمكن تحويلها إلى نظام:

## 37.1 Service title
اسم مفهوم للسوق.

## 37.2 Promise line
**ما الذي سنبنيه + ما السمة الأساسية التي تهم العميل.**

## 37.3 Scope paragraph
ثلاثة مكونات:
1. من نخدم.
2. ماذا نبني.
3. ما الذي نركز عليه.

## 37.4 Deliverables
تكتب كـ **أشياء قابلة للتسليم**:
- واجهات.
- صفحات.
- لوحة تحكم.
- API.
- إعداد SEO.
- ربط.
- ملفات نهائية.

لا تكتب:
- "احترافية".
- "إبداع".
- "جودة".
كأنها Deliverables.

## 37.5 Integrations
تنظم كأسماء أنظمة/قنوات:
- payment.
- maps.
- email.
- WhatsApp.
- analytics.
- CRM/ERP.
- external API.

## 37.6 Process copy
كل خطوة:
**اسم مرحلة + ماذا نفعل فيها + ما الناتج.**

## 37.7 FAQ
السؤال يجب أن يعكس اعتراضاً حقيقياً:
- هل يعمل على الهاتف؟
- هل أستطيع التعديل؟
- هل يمكن إضافة خصائص؟
- هل ترفعون التطبيق؟
- هل أحتاج لوحة تحكم؟

---

# 38. Portfolio Writing Formula

## 38.1 Listing card

Card =

**Category/year → title → one-sentence project definition → action**

لا يحتاج card إلى قصة كاملة.

## 38.2 Case-study summary

يشرح المنتج في سطر أو سطرين:
- ما هو.
- لمن.
- ماذا يدير/يسمح.

## 38.3 Overview

يجيب:
- ما الهدف؟
- من المستخدم؟
- ما النطاق العام؟

## 38.4 Challenge

يكتب بصيغة **قبل التنفيذ**:
- ما المشكلة الحالية؟
- ما التعقيد؟
- ما الذي كان يجب تحسينه؟

## 38.5 Solution

يكتب بصيغة **ما قمنا به**:
- architecture/technology only if relevant.
- flows.
- modules.
- UX.
- responsive.
- data organization.

## 38.6 Results

النتائج الجيدة عندهم غالباً **مخرجات قابلة للتحقق**:
- إطلاق الموقع.
- دعم RTL.
- نشر التطبيق.
- إضافة بحث.
- توحيد العمليات.
- تفعيل تقارير.

### Wasl rule
نفضل output evidence على claims مثل:
- "رفع المبيعات 200%".
- "حسن الكفاءة 70%".
إلا إذا لدينا قياس مثبت.

---

# 39. Microcopy System

## 39.1 Eyebrows
تستخدم للتوجيه:
- من نحن
- خدماتنا
- معرض المشاريع
- المعرفة والخبرة
- دراسة حالة
- قبل التنفيذ
- ما قمنا به
- الأثر
- ابدأ خطوتك الأولى

## 39.2 CTA language

الـCTA عندهم مبني على intent:

### Explore
- مشاهدة الأعمال
- تصفح الأعمال
- تفاصيل المشروع
- تفاصيل الخدمة

### Start
- ابدأ مشروعك
- طلب مشروع
- خطط لمشروعك
- اطلب دراسة مشروعك

### Learn
- اقرأ القصة
- اقرأ المقال

### Form progression
- الخطوة التالية
- السابق
- تقديم الطلب

### Wasl rule
CTA يجب أن يصف **الخطوة التالية** وليس كلمة عامة مثل "المزيد".

---

# 40. How Skills / Technologies Are Organized

المنافس لا يضع في الرئيسية "مهاراتنا: Laravel, Flutter, React..." كشبكة شعارات.

بدلاً من ذلك تظهر التقنية في سياق:

## A. Service context
Flutter / React Native / native كخيارات تنفيذ للتطبيق.

## B. Integration context
Maps, payment, API, analytics etc.

## C. Case study context
Laravel عند وصف ما بُني فعلاً.

### لماذا هذا أفضل؟
لأن العميل يهتم أولاً بالحل، ثم يهتم بالتقنية إذا أثرت على:
- التكامل،
- التوسع،
- الأداء،
- الصيانة،
- المنصة المستهدفة.

### Wasl Rule
لا ننشئ "Tech Logo Wall" كقسم رئيسي إلا إذا كان له هدف بيع واضح.

بدلاً منه:
- service page → technology approach.
- project case study → verified stack.
- about/process → engineering principles.

---

# 41. Data Organization Model Inferred from Public Pages

من تكرار الأنماط يمكن استنتاج أن المحتوى العام **يبدو منظماً ككيانات متكررة**، حتى لو backend الفعلي غير معروف.

## Service entity likely needs
- slug
- locale
- title
- promise
- description
- image
- duration
- price
- support
- deliverables
- integrations
- process
- related projects
- FAQ
- CTA

## Project entity likely needs
- slug
- locale
- title
- summary
- client
- year
- duration
- category
- cover
- overview
- challenge
- solution
- outcomes
- live URL
- related projects

## Article entity likely needs
- slug
- category
- title
- summary
- author
- date
- read time
- body
- CTA

### Important
هذا **استنتاج من بنية الصفحات العامة** وليس إثباتاً لبنية قاعدة البيانات الفعلية.

---

# 42. Editorial Design — كيف يجعلون النص يبدو أجمل

حتى النص الجيد ينهار إذا عرض ككتلة.

الأسلوب المرصود يعتمد على:

- عنوان قوي ثم مساحة.
- paragraph قصير.
- metadata في كتلة مستقلة.
- lists للتسليمات/النتائج.
- cards للعناصر المتساوية.
- horizontal browsing للأعمال.
- accordion للأسئلة.
- multi-step forms للمعلومات الطويلة.
- small labels لتقسيم القصة.

### Wasl rule
**نحوّل المحتوى إلى شكل العرض المناسب لنوعه.**

لا نحول:
- Process إلى فقرة.
- FAQ إلى 12 بطاقة.
- Portfolio إلى جريدة.
- Deliverables إلى paragraph.
- Metadata إلى description.

---

# 43. Elegance Rules To Port Into Wasl

1. لا تجعل كل الأقسام لها نفس layout.
2. لا تجعل كل المحتوى داخل cards.
3. استخدم صورة واحدة قوية بدلاً من عدة decorations.
4. حافظ على hierarchy واضح.
5. اجعل كل Section يجيب سؤالاً واحداً.
6. العنوان يحمل الفكرة؛ الـeyebrow يحمل اسم النوع.
7. الـCTA يأتي بعد سبب منطقي.
8. الأعمال تُعرض كدليل.
9. الـmetadata secondary.
10. الأرقام تستخدم للتوجيه، لا للاستعراض.
11. الحركة تخدم الاستكشاف.
12. المحتوى الطويل يتجزأ إلى مراحل.
13. لا تضع التقنية قبل حاجة العميل.
14. Footer يختم الرحلة بدل تكرار الصفحة.
15. Empty states صريحة وليست fake content.

---

# 44. Wasl Content Voice Standard Derived from the Benchmark

هذه ليست نبرة SATR نفسها، بل النسخة المناسبة لوصل تك.

## 44.1 Wasl voice
- واثقة بدون مبالغة.
- تقنية بدون استعراض.
- مختصرة.
- بشرية.
- تشرح القرار.
- تربط التنفيذ بالهدف.
- تستخدم مفردات واضحة لليمن والخليج.

## 44.2 كلمات نفضلها
- واضح
- منظم
- متجاوب
- مترابط
- مناسب للنطاق
- قابل للتطوير
- تجربة استخدام
- مسار
- احتياج
- هدف
- تنفيذ
- مراجعة
- إطلاق

## 44.3 كلمات نستخدمها بحذر
- احترافي
- مبتكر
- متكامل
- ذكي
- قوي
- فاخر
- مذهل
- الأفضل
- ضمان

تستخدم فقط عندما يكون لها معنى محدد أو دليل.

---

# 45. Wasl Headline Writing Patterns

## Homepage
**نبني [نتيجة/حضور/منتج] يخدم [الهدف].**

## Services
**حلول رقمية مرتبة حول [احتياج العميل].**

## Service
**[الخدمة] تساعدك على [نتيجة عملية].**

## Portfolio
**أعمال منفذة تشرح ما بنيناه، لا صور للعرض فقط.**

## Case study
**[اسم المشروع] — [تعريف وظيفي قصير].**

## About
**نربط [التصميم] بـ[التقنية] حتى يعمل المشروع كمنظومة واحدة.**

## Process
**مسار واضح من [الفهم] إلى [الإطلاق].**

## Contact
**شاركنا [الفكرة/الاحتياج] ونرتب معك نقطة البداية.**

---

# 46. Wasl Supporting Copy Rules

Supporting line يجب أن يحقق واحداً فقط من التالي:

1. يحدد الجمهور.
2. يشرح كيف.
3. يوضح النطاق.
4. يقلل الغموض.
5. يربط العنوان بالخطوة التالية.

### Length
- Hero: جملة أو جملتان قصيرتان.
- Section: جملة واحدة غالباً.
- Card: 1–2 lines.
- Case study: يمكن أن يطول عند الحاجة.

---

# 47. Content Density Rules

## Hero
- H1
- supporting
- 1–2 CTA
- optional visual/meta

## Service card
- title
- one sentence
- action

## Project card
- category/year
- title
- one sentence
- action

## Feature/value
- short title
- one sentence

## CTA band
- one heading
- one support line
- one/two actions

### Anti-pattern
لا نكرر:
- headline
- paragraph
- 3 bullets
- 2 buttons
داخل كل Card.

---

# 48. Page Flow Questions — اختبار أي صفحة قبل اعتمادها

قبل اعتماد الصفحة، يجب أن نعرف هل تجيب بالترتيب:

1. أين أنا؟
2. لماذا هذه الصفحة مهمة؟
3. ماذا تقدم؟
4. هل هذا يناسبني؟
5. ماذا سأحصل؟
6. هل عندكم دليل؟
7. كيف يتم التنفيذ؟
8. ما الأسئلة المتبقية؟
9. ما الخطوة التالية؟

إذا أجابت الصفحة كل الأسئلة لكن بترتيب عشوائي، فهي ما زالت ضعيفة.

---

# 49. Visual Proof Rules

من المنافس نتعلم أن proof يمكن أن يكون:

- project screenshot.
- case study.
- live project.
- structured outcome.
- process specificity.
- deliverables.
- integrations.
- exact scope.

### Wasl priority
Proof hierarchy:

1. Real project screenshot.
2. Case study.
3. Verified deliverable.
4. Verified process.
5. Client/public project metadata.
6. Technology only when verified.

---

# 50. Mobile Content Interpretation

لا يوجد لدينا في هذا التدقيق قياسات CSS مؤكدة لكل breakpoint في SATR، لذلك لا ننسخ أبعاداً.

لكن من بنية المحتوى يمكن اعتماد:

- horizontal portfolio is intentional.
- long project form is converted to steps.
- FAQ is collapsed.
- cards carry limited copy.
- navigation has dedicated project CTA.

### Wasl improvement
نستمر بقاعدة:
- two-up cards where readable.
- no horizontal page overflow.
- shorter footer.
- line clamp.
- dedicated mobile crop.
- no desktop section stacked blindly.

---

# 51. Blog Writing Lessons

المقال الذي تم فحصه يستخدم أسلوباً تعليمياً منظماً:

1. Context/problem.
2. Why it matters.
3. Numbered sections.
4. Questions to ask.
5. Lists.
6. Practical summary.
7. CTA tied to article topic.
8. About author/team.

## Good principle
المقال يشرح **كيف يقرر صاحب المشروع**، وليس مجرد "10 أسباب تحتاج موقعاً".

### Wasl rule
إذا أطلقنا Blog:
- guides for decisions.
- checklists.
- comparisons.
- project planning.
- UX/content/business system explanations.

ولا نكتب SEO filler.

---

# 52. Contact Writing Lessons

نبرة Contact مهمة لأنها تقلل الخوف من التواصل.

الصفحة تستخدم:
- orientation: بداية الخطوة.
- action title: تواصل + خطط.
- reassurance: نستمع ونصيغ الحل.
- direct channels.
- choice of inquiry type.
- progressive form.
- small explanatory line before each step.

### Wasl rule
كل خطوة في planner يجب أن تحتوي:
**Question + why we ask it.**

مثال:
- ما نوع المشروع؟
- يساعدنا ذلك على ترتيب الأسئلة التالية.

---

# 53. Empty-State Writing Lessons

Careers وBlog يوضحان نمطاً مفيداً:

بدل صفحة فارغة:
- page context.
- heading.
- honest empty message.
- next useful action.

### Wasl rule
لا نخترع محتوى لسد الفراغ.

Empty state:
**ما الموجود الآن + ماذا يفعل المستخدم بعد ذلك.**

---

# 54. Footer Information Architecture

Footer المرصود ليس مجرد روابط قانونية.

هو يقسم الاستخدام إلى:

## Quick links
معلومات/تصفح.

## Start with us
خدمات، أعمال، Planner، وظائف.

## Contact
هاتف، بريد، موقع.

## Legal
Privacy + Terms + measurement preferences.

### Wasl adaptation
Footer يمكن أن يكون:

**وصل تك**
- slogan

**استكشف**
- الخدمات
- الأعمال
- من نحن
- كيف نعمل

**ابدأ**
- خطط مشروعك
- واتساب
- تواصل

**تواصل**
- phone
- email
- domain

**Legal**
- Privacy عند وجود analytics/forms policy.
- Terms when needed.

---

# 55. Design Review Checklist Inspired by SATR, Improved for Wasl

## Hero
- هل H1 يحمل فكرة لا اسم صفحة فقط؟
- هل supporting يضيف معلومة؟
- هل CTA الأول واضح؟
- هل الـvisual له وظيفة؟

## Sections
- هل كل section له سؤال واحد؟
- هل يوجد تكرار؟
- هل نوع العرض مناسب لنوع البيانات؟

## Services
- هل الخدمة تشرح scope؟
- هل هناك deliverables؟
- هل هناك proof؟
- هل FAQ حقيقي؟

## Portfolio
- هل المشروع مكتوب كقصة؟
- هل النتائج موثقة؟
- هل الصور حقيقية؟
- هل الرابط يعمل؟

## Mobile
- هل الصفحة صارت جريدة؟
- هل البطاقات مختصرة؟
- هل touch targets واضحة؟
- هل الصور مقصوصة بشكل سليم؟

## Copy
- هل هناك مبالغة؟
- هل كل adjective له معنى؟
- هل CTA واضح؟
- هل paragraph يمكن اختصاره؟

## Trust
- هل أي رقم أو مدة أو سعر معتمد؟
- هل stack verified؟
- هل privacy copy يطابق التنفيذ؟

---

# 56. Final Deep-Learning Rule

الشيء الأهم الذي نتعلمه من SATR ليس لوناً أو Radius أو Hero بعينه.

هو أن الموقع يعامل كل صفحة كـ **منتج مصغر له هدف ومسار محتوى وتحويل**:

- الرئيسية = Positioning.
- About = Philosophy.
- Services = Decision directory.
- Service = Scope & confidence.
- Portfolio = Evidence.
- Case study = Story + proof.
- Blog = Education.
- Contact = Qualification.
- Careers = Employer signal.
- Footer = Navigation closure.

## معيار Wasl النهائي
نبني كل صفحة بناءً على **وظيفتها**، ثم نجعل الهوية البصرية توحّدها.

لا نبني Template واحداً ونضع داخله نصوصاً مختلفة.
