# وصل تك — مصفوفة الإغلاق الجذري المتسلسل (2026-10-12)

> **Source of Truth للتنفيذ:** فرع `fix/independent-site-recovery-20261010`، ويجب مراجعة GitHub HEAD ونتائج CI الحالية. لا تستبدل الخطة الأصلية، بل تربطها بتنفيذ قابل للإثبات.
> **مرجع جميع المعرفات:** `docs/audit/2026-10-10_MASTER_EXECUTION_PLAN_AND_ACCEPTANCE.md` و`docs/audit/2026-10-10_INDEPENDENT_DEFECT_REGISTER.md` على فرع `audit/independent-root-cause-register-20261010`. يحتوي السجل 75 معرف WT-IA و20 WT، بينها تداخل؛ ليست 95 عيبًا مستقلًا. 
> **قاعدة الإغلاق:** إصلاح سبب الجذر + إزالة الترقيع + اختبار انحدار + Visual/UAT + Production evidence بحسب نوع المشكلة. لا يعني نجاح CI إغلاق الإنتاج.
> **حدود الملكية:** لا تعديل لــ `main`، أو DNS، أو SEO #36/#37، أو Logo #41. التنسيق لاحقًا قبل PR46 → PR45.

## دفعة 1 — الأمان ومسارات القرار P0/P1/P2

| المعرفات | السبب/القرار | الدليل من الفرع | حالة الإغلاق |
|---|---|---|---|
| WT-IA-36/37، WT-008/019 | إرسال تلقائي أو GET عند تعطيل JS في Planner | no-JS fail-closed مع disabled fieldset + اختبارات المصدر والمتصفح `check-contact-planner` | VERIFIED_PREVIEW؛ Production UAT مفتوح |
| WT-IA-10/47/62 | الوصول للقائمة/المسار على الهاتف وبدون JS | fallback تنقل وCTA في القائمة + route matrix | VERIFIED_PREVIEW |
| WT-IA-11، WT-006/007 | روابط بطاقات المشروع، 404 AR/EN وحالة HTTP | `check-service-details` + `check-secondary-legal` + Preview HTTP سابق | VERIFIED_PREVIEW |
| WT-IA-02/38 | **السبب الجذري لأزرار Hero الداخلية:** كود HTML يولّد روابط تفاعلية ثم يخفيها CSS نهائيًا؛ selectors مربوطة في 3 CSS مواضع | حُذفت عناصر ActionLink المخفية فعليًا من 6 صفحات، وأُزيلت قواعد CSS المتعارضة، وأُضيف guard بـ `scripts/check-cta.mjs` | IMPLEMENTED + CI؛ راجع آخر HEAD وroute matrix |

## دفعة 2 — القراءة والهوية P3/U1–U3

| المعرفات/القرارات | التنفيذ الموجود | العمل غير المغلق |
|---|---|---|
| UXR-01/02 وWT-IA-07/39 | شبكات Services 3/2/3 وPortfolio featured متوازنة، مع CI/browser snapshots | قبول بصري نهائي عند مقاسات أكبر/تكبير |
| UXR-05 وWT-IA-10 | بطاقتا «سؤال سريع» و«لديك مشروع»، قنوات الاتصال تحتهما | اختبار رحلة مستخدم حقيقي وWhatsApp |
| UXR-03 وWT-IA-53/65 | كل الخدمات الثمان تعرض المخرجات أولًا ثم الأدلة؛ jump links وnative details | **OPEN**: تقليل تكرار العبارات بين `signals`/`audience`/`subservices`/`constraints` بمراجعة تحريرية لا تحذف تسليمات، مع مقارنة زمن العثور على المعلومة؛ صفحة الخدمة ما زالت طويلة |
| UXR-04/09 | Hero نصي في Legal، والـHome/Service/Portfolio تبقي المحتوى البصري المناسب | **PARTIAL**: تنويع بقية Hero بناء على غرض الصفحة، بلا طلب صور وهمية |
| UXR-06 وWT-IA-08/16 | معالجة بعض microcopy/RTL والـ320px CSS reflow | **OPEN**: computed contrast + 200/400% zoom الفعلي + قارئات الشاشة |
| UXR-08 | Homepage أربع خطوات و6 مميزات/خدمات/أعمال | **OPEN**: اختبار قابلية مسح الصفحة على الهاتف مقابل طول التمرير |
| UXR-10 | FAQ 4 مجموعات + jump navigation وروابط قابلة للفتح أصلًا | VERIFIED_PREVIEW؛ راجع focus وkeyboard الحقيقي |
| WT-IA-19/20/50/59 | إعادة كتابة النصوص العامة ومعالجة 80 وصفًا ثنائي اللغة | **PARTIAL**: فحص تكرار FAQ والادعاءات والسياق التحريري على كل صفحة قبل الإغلاق |

## دفعة 3 — المصداقية/الأصول والـLegacy P4

| معرفات | الحالة | الإجراء الجذري |
|---|---|---|
| UXR-07 وWT-IA-12/57/72 | **BLOCKED ON EVIDENCE** | دراسة حالة واحدة على الأقل بلقطات نظام حقيقية واسم/دور وسياق وعمل مثبت؛ لا صنع نتائج أو شهادات، ولا ادعاء نشرها |
| WT-IA-25/38، WT-015/020 | **PARTIAL** | إثبات مالك كل CSS/module وملفات legacy وروابط build/deploy قبل حذف أي ملف تاريخي، وتحديث handoff/status المرجعيين وفق Live HEAD |
| WT-003/004/005 وميديا PR44/45 | VERIFIED_PREVIEW بصور WebP ومشتقات responsive | قبول قصّ الصور/مصادر الملفات الحقيقة في العرض النهائي؛ لا تكرار رفع الدفعة المنجزة |

## دفعة 4 — قياس وتشغيل P5/P6/U4

| معرفات | الحالة | تعريف الإغلاق |
|---|---|---|
| WT-IA-28/75، WT-010/011/012 | **OPEN** | قياسات LCP/INP/CLS على أجهزة/شبكات مستهدفة؛ baseline & after؛ فحص cold-load وذاكرة الصور |
| WT-IA-27/74، UXR-12 | **PARTIAL** | Zoom 200/400%، NVDA/VoiceOver، Safari/Android، forms/tab order/skip link، تفاوت خطوط ولغة؛ لا نعلن WCAG 2.2 AA دون قياسات |
| WT-IA-32 | **OPEN** | اختبار استقبال البريد وWhatsApp وحساب Instagram بإشراف الحسابات الفعلية |
| WT-IA-30 | **BLOCKED ON SEO/DOMAIN OWNER** | توحيد WWW vs apex: redirect, canonical, OG, sitemap/hreflang، ثم فحص HTTP واقعي؛ لا تعديل DNS أو `main` من هذا الفرع |
| WT-001/002/005/013/014/017/020 وPR42–46 | **OPEN P6 RELEASE** | مصفوفة تغييرات حية، حل التداخل بين PR46→PR45 وSEO/Logo، CI+matrix على merge result، تثبيت SHA، UAT وإذن نشر، Production HTTP/QA |

## تنفيذ موثّق — A1 وملكية CSS/JS

- **WT-IA-02/09/38:** Commit [`5b11b761`](https://github.com/7eaur/wasltech-/commit/5b11b7613e88e43e4e71250fbe2bdb99368bfc65) يزيل رابط Planner Hero المخفي وقص وصف الخدمة على الجوال من المالك الأساسي، مع اختبارات منع التكرار. اختبارات VNext verify ناجحة على الـSHA ذاته: [Push run 38181793065](https://github.com/7eaur/wasltech-/actions/runs/38181793065) و[PR run 38181796013](https://github.com/7eaur/wasltech-/actions/runs/38181796013). **CI VERIFIED؛ Visual/production pending**.
- **WT-IA-25/38، WT-015/020:** حارس ملكية مصدر البناء `scripts/check-source-ownership.mjs` يربط 4 ملفات عميل وكل CSS مدرج بالبناء، ويميز Showcase وملف marker التعليقي. Root-level legacy HTML/CSS/JS و`.htaccess` خارج بناء VNext لكن لا تُحذف قبل إثبات استخدامها في Production أو قطع الخدمة رسميًا. الحالة **PARTIAL**.

## ترتيب التنفيذ التالي

1. إثبات سلامة إزالة Hero-hidden overrides على SHA الحالي: Node24 verify + Chromium route matrix، ثم مراجعة Screenshots.
2. جرد CSS/JS غير المستخدمة وسببها الجذري عبر build entry graph وvisual regression؛ لا حذف بغير إثبات ملكية.
3. معالجة تكرار/طول service-details بمراجعة معنى النصوص والـprogressive disclosure والتجارب، دون التضحية بالحقائق.
4. إغلاق اختبارات browser/contrast/performance التي تسمح الأدوات بها؛ ميّزها عن اختبارات الأجهزة الحقيقية.
5. إعداد release merge/owner compatibility matrix مع SEO/domain/Logo؛ ليس دمجًا تلقائيًا.
6. تدقيق `PROJECT_STATUS.md` و`PROJECT_HANDOFF.md` وجرد الصور وتوحيد المرجع؛ لا محو للتاريخ أو تحديث حالات مجهولة.
7. إيقاف الإغلاق النهائي عند أي بند يحتاج مالك الحساب/أصول حالة حقيقية/اختبار field واقعي، مع توثيق السبب والتبعية.

## تقرير القرار الحالي

العمل البرمجي داخل الفرع مستمر على دفعات، **ولا يمكن التصريح بإغلاق كل P0–P6** قبل معالجة البنود المفتوحة والبراهين العملية والتنسيق مع الفرق الأخرى. نجاح المعاينة هو `VERIFIED_PREVIEW` فقط.