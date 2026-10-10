# وصل تك — تسليم المرحلة الثانية من الإصلاحات المستقلة

**التاريخ المحلي:** 2026-10-11 (Asia/Aden)  
**الفرع المستقل:** `fix/independent-site-recovery-20261010`  
**الكود المختبَر:** `7873aefcbbea4c720cb6d0b4bd323014d42b9306`  
**مسار المراجعة:** Draft [PR #46](https://github.com/7eaur/wasltech-/pull/46) نحو `integration/site-stabilization-20261010`؛ **ليس نحو main**.  
**حالة الدمج والنشر:** `main` وProduction لم يتغيرا من هذا العمل، ولم نغيّر DNS أو فروع فريق SEO/Logo.  
**المرجع العام:** `docs/audit/2026-10-10_MASTER_EXECUTION_PLAN_AND_ACCEPTANCE.md` و`docs/audit/2026-10-10_INDEPENDENT_DEFECT_REGISTER.md` على فرع `audit/independent-root-cause-register-20261010`.

## 1. أعمال تمت، لا تساوي الإغلاق على Production

| دفعة | التنفيذ الفعلي | دليل / حالة |
|---|---|---|
| P0 | **مزامنة كاملة مع تحديث الوسائط الحديث** من فرع التكامل `7366ed3c`: merge commit `bdbcfa38` يجلب 130 إدخال تغيير من المصدر، يشمل نسخ WebP المتجاوبة والأصول والخدمات وتحسين مراجعات الجودة، مع الاحتفاظ بإصلاحات فرعنا. | compare: `integration → recovery` ahead ولا behind عند عمل المزامنة، لا تعارض متروك |
| P1 | Planner لا يتيح إرسال GET افتراضي عند غياب JS؛ fieldset disabled وأزرار button، تفعيل بعد تركيب JS، direct Contact no-JS. mobile header يملك noscript nav. | فحص Node + Playwright سابق مع اللغتين؛ لا تثبت حماية Production حتى دمج الإصلاح |
| P2 | Service proof cards ترتبط بالمشاريع الأصلية؛ 404 بالعربية/الإنجليزية يُعاد عبر Vercel برمز HTTP 404 دون JavaScript. | `GET /not-here-1234` =404 Arabic و`GET /en/not-here-1234` =404 English على Preview الحديث |
| P3 | Home 4 خطوات بصف واحد و6 مزايا بشبكة 3×2؛ About/Process/Service Deliverables مفهومة بصريًا؛ **Project Detail** أصبح مقدمة/سياق/ما نفذناه بنمط حالات استخدام حقيقي بدل نص كبير كعنوان؛ **Services Directory mobile** بطاقات أفقية مختصرة بشريط صورة ثابت ووصف teaser فقط ومعلومات كاملة داخل صفحة الخدمة؛ **Portfolio** يعرض 6 مشاريع مبدئيًا مع «عرض بقية الأعمال» ومن ثم كل المشاريع (14)، والفلاتر مستمرة؛ بدون JS يعرض الجميع. | `scripts/check-home.mjs`, `check-project-details.mjs`, `check-services.mjs`, `check-portfolio.mjs` + Playwright، وQA البصري |
| P3 الهوية والأداء | اعتماد Warm Apricot #E6A36A وCream #FFF5EA أدوارًا ثانوية مع ink #8A4B1C للتباين؛ لا تغيير للشعار، حذف 13 قاعدة Home Hero قديمة وقواعد Hero متعددة من Services/Portfolio/Project/Contact بدل رفع حد CSS gzip. | CI quality يحافظ على `site.css` gzip ≤16KiB |
| P4 | تصحيح 16 وصفًا ثنائي اللغة لخدمة الويب سابقًا، ثم **80 وصفًا إضافيًا** بالعربية والإنجليزية في ست فئات: تطبيقات، متاجر، حلول تقنية، بروفايلات، هوية بصرية، تسويق. ظلت البرمجة المخصصة لأنها متوافقة أصلاً؛ إعادة كتابة 6 «لماذا وصل تك» ونص الإطلاق بهدف تقليل الوعود العامة. | فحص توليد جميع خدمات AR/EN في `vnext:verify` |
| P5 | نسخ WebP `480/768/1024` موجودة ومستخدمة عبر responsive srcset/sizes؛ مع ميزانيات أصل/صورة أشد ومعايير تباين دافئ وReduced Motion وdegraded JS tests. | GitHub VNext [run #38087186811](https://github.com/7eaur/wasltech-/actions/runs/38087186811) و[run #38087190505](https://github.com/7eaur/wasltech-/actions/runs/38087190505): **SUCCESS** لنفس كود `7873aefc`. |
| P5 Preview | المتصفحات تُختبر في `Capture VNext route matrix` بالعربية/الإنجليزية ومقاسات `320/360/390/768/1024/1366/1440`; ومسارات Sitemap، JS-disabled، تفاعل قائمة الهاتف والفلاتر ومخطط المشروع، حركة منخفضة. | Run [#38087186794](https://github.com/7eaur/wasltech-/actions/runs/38087186794) أُطلق عند SHA `7873aefc`؛ **لا تُعلن نتيجته PASS حتى يظهر success** |
| P6 | إنشاء Draft PR #46 إلى فرع التكامل مع بقاء `main` وProduction دون تغيير. | merge/release يحتاجان قبول Preview والتنسيق مع SEO واللودر |

## 2. فحص الـHTTP المؤكد على Preview (ليس Production)

المعاينة التي اختُبرت:
`https://wasltech-mtrv5ztt1-wasl15.vercel.app`، بناء `7873aefc` بحالة Vercel **READY**.

- `/not-here-1234` → **404**، الصفحة `lang=ar`.
- `/en/not-here-1234` → **404**، الصفحة `lang=en`.
- `/portfolio/` و`/en/portfolio/` → **200** و`data-portfolio-more-wrap hidden` مُتاح للتفعيل بـJS.
- `/services/` → **200** والصور تشير إلى `srcset`.

هذه الاختبارات تثبت الاستجابة المحددة، وليست شهادة عامة على كل النطاقات أو معدلات التحويل.

## 3. اكتشاف إنتاجي مهم خارج ملكية هذا الفرع — WT-IA-30

الاختبار الحي بتاريخ 2026-10-11 أثبت **تعارض canonical مع اتجاه إعادة التوجيه**:

- `https://www.wasl-tech.com/` يوجّه HTTP **308 إلى `https://wasl-tech.com/`**.
- `https://wasl-tech.com/` يعيد **200** لكنه يعلن `<link rel="canonical" href="https://www.wasl-tech.com/">` و`og:url` على www.
- نفس النمط يظهر في `/services/web-development/`.

**الحالة:** `CONFIRMED / P1 / BLOCKED ON SEO+DOMAIN OWNER`. لا تغييرات DNS أو canonical في فرعنا احترامًا لفريقي SEO/محركات البحث ومالك الدومين. **يجب توحيد هوست الاستجابة وcanonical وأسماء النطاقات** مع مالك PRs #36/#37 قبل إغلاق release gate. المرجع: `WT-IA-30` في سجل التدقيق المستقل المُحدّث.

## 4. مهام متبقية تحتاج موافقة/إثبات

1. مراجعة نتائج **320px** ومرور آخر Playwright matrix ثم لقطات Before/After موثقة للهاتف/الكمبيوتر AR/EN؛ لا نعتمد screenshot كقياس FPS.
2. **اختبار 200%/400% zoom، قارئات الشاشة، وتصفح لوحة المفاتيح** والتنقل الفعلي على أجهزة متنوعة؛ لا نُصنّف WCAG compliant من CSS فقط.
3. **تحقق قياسات Web Vitals حقيقية** على اتصال وأجهزة مستهدفة: LCP/INP/CLS وخدمات الصور/CDN؛ لا وعد برقم دون تقرير قياس.
4. **إثبات المحتوى الحقيقي**: عناوين وأوصاف دراسات الحالة والصور والمخرجات والادعاءات التسويقية لا تنشر كحقائق جديدة بلا مواد معتمدة.
5. **تغطية الصفحات الثانوية** بصريًا عند التحديثات اللاحقة: FAQ والمقالات وContact/Planner وLegal وإعادة الاختبار في كافة locales/breakpoints.
6. **تنسيق دمج** PR #46 إلى PR45 ومع SEO PRs #36/#37 واللودر #41 ثم توقيع Release QA.
7. **حل التوجيه canonical على Production** (WT-IA-30) بواسطة المسؤول عنه، وفحص البريد/روابط التواصل والنماذج على البيئة الحية.
8. لا تعديل `main`، لا نشر Production، لا حذف فروع أو DNS حتى إذن المستخدم بعد المراجعة.

## 5. تعريف الإنجاز الدقيق

`CODE IMPLEMENTED` على فرع مستقل، `VNext verify PASSED` للكود الذي تم التحقق منه، `Preview READY` واختبارات HTTP 404 محددة. **ما زال P6/UAT/field-performance والدمج والإغلاق على Production غير مكتملين**. سجل عيوب تدقيق الموقع الأصلي لا يُحوَّل إلى CLOSED بالجملة لمجرد نجاح CI.
