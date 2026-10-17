# تقرير تنفيذ المرحلة 00 — اعتماد إصلاحات SEO السابقة قبل الدمج

**التاريخ:** 2026-10-17، توقيت اليمن.  
**الحالة:** **مكتملة فنيًا في فرع المراجعة، تنتظر الموافقة بالدمج**.  
**فرع الإصلاحات:** `seo/phase1-verified-onpage-20261017`، **PR #65 (Draft)**.  
**آخر SHA مُختبَر على PR #65:** `bebfb9be14e805dee4d5cffe0ecb6d0ee89500ad`.  
**HEAD إنتاج `main` عند الفحص:** `371a23a4c845e0a5ed952935a7e6501491b56cbf` (إضافة المراجعة المستقلة).  
**فرع توثيق الخطة:** `docs/seo-unified-roadmap-20261017`، **PR #66 (Draft)**.

## 1. ما كان ناقصًا

رغم نجاح بناء VNext وRelease ومعاينة Vercel قبل المرحلة، كان اختبار **Capture VNext route matrix** فاشلًا على SHA سابق `a8d01117`: `ar: keyboard anchor did not navigate to deliverables` في `run 38984458056`.

**السبب الجذري المثبت:** أضافت تحسينات SEO عنصر `#service-subservices` كأول رابط في `.section-jump-nav` بينما القالب يعرض قسم `#service-deliverables` أولًا ثم المشاريع المرتبطة ثم الخدمات الفرعية. اختبار الانتقال باستخدام لوحة المفاتيح يفحص الرابط الأول ويشترط `#service-deliverables`. ترتيب روابط القراءة كان قد أصبح غير موافق لترتيب الأقسام، وبالتالي فشل الاختبار بشكل صحيح.

## 2. ما نُفّذ فعليًا داخل PR #65

1. `src/pages/service-detail.js`: ترتيب روابط الأقسام أصبح (المخرجات → الأعمال المرتبطة عند وجودها → الخدمات الفرعية → عملية العمل → FAQ)، متوافقًا مع DOM، دون تغيير التصميم أو إزالة أجزاء المحتوى.
2. `.github/workflows/capture-vnext-route-matrix.yml`: اختبار Keyboard للانتقال إلى **المخرجات والخدمات الفرعية** بالعربية والإنجليزية، مع التحقق من الأهداف وترتيب الروابط.
3. `scripts/check-service-details.mjs`: فحوص تلقائية لـ16 صفحة خدمة ثنائية اللغة تشمل ترتيب القائمة، تطابق المرابط مع ID فريد لكل خدمة فرعية، واتساق ترتيب DOM.
4. `.github/workflows/vnext-verify.yml`: فحص وسائط الموقع `node scripts/check-final-media.mjs` جزء إلزامي من التحقق قبل النشر.
5. تدقيق diff لـPR #65: 13 ملفًا متأثرًا؛ تحسينات Title/Meta باللغتين للصفحات الرئيسية/الخدمات الثماني/المشاريع الستة عشر، كتابة العلامة الرسمية «وصل تك» والصيغة البحثية «وصلتك»، بيانات كيان منظمة، توثيق جرد 88 رابطًا. لا إدعاء بأن هذه التحسينات منشورة أو أن محتوى دراسات الحالات اكتمل.
6. تمت مراجعة اختلاف `ogTitle/ogDescription` عن `title/description` في بيانات الخدمات: **مقصود** لعرض مشاركة اجتماعية مخصص، وليس خطأ canonical أو SEO ولا سببًا لإجبار تطابق حرفي بينهما.

## 3. أدلة نجاح الفحوص — نفس SHA

| التحقق | مصدره | النتيجة |
|---|---|---|
| Build + Preview Check + Release SEO/AI/Entity | GitHub `38988199214` و`38988194753` | **SUCCESS** |
| Integrity of media sources | خطوة `Verify final media sources` في `38988199214` | **SUCCESS** |
| Capture responsive and keyboard route matrix | GitHub `38988199029`، job `117264521884` | **SUCCESS** |
| AR + EN Keyboard/FAQ/Skip link | سجلات `38988199029` | **PASSED** |
| No-JS Service options + Planner + Nav | سجلات `38988199029` | **PASSED** |
| 88 صفحة من Sitemap | `VNEXT ALL INDEXABLE ROUTES @ 390/1440: PASSED (88 routes)` | **PASSED** |
| Reflow وContrast وResponsive Services/Portfolio | سجلات `38988199029` | **PASSED** |
| Vercel Preview | `wasltech-bzwaxfy2e-wasl15.vercel.app`؛ SHA مطابق | **READY** |
| فحص HTML لعينة عربية/إنجليزية | Home/About/Web/Mobile/Update Card من المعاينة | **HTTP 200 + Title/Canonical/Hreflang سليم** |
| screenshots/accessibility-audit artifact | `12083643220`، 41,655,645 بايت، انتهاء صلاحية 20 أكتوبر 2026 | **مرفوع** |

**روابط مباشرة:** [PR #65](https://github.com/7eaur/wasltech-/pull/65) · [VNext Verify](https://github.com/7eaur/wasltech-/actions/runs/38988199214) · [Capture Route Matrix](https://github.com/7eaur/wasltech-/actions/runs/38988199029) · [ملف لقطات الاختبار](https://github.com/7eaur/wasltech-/actions/runs/38988199029/artifacts/12083643220) · [Vercel Preview](https://wasltech-bzwaxfy2e-wasl15.vercel.app).

## 4. حالة Google الحالية غير مرتبطة بإنهاء المرحلة

أحدث GSC Tracker متاح وقت الفحص: **88 URL، 84 indexed، 4 not-indexed**، وآخر فحص مسجل `2026-10-16T23:23:28.493+00:00`. هذا قياس إنتاجي **قبل دمج PR #65**. لا يُفسَّر نجاح Preview أو CI على أنه تحسن فهرسة أو ترتيب.

الروابط غير المفهرسة ضمن أعمال **المرحلة 02**: Aroma Cafe AR، Elite Electronics AR، CMS Dashboard EN، ومقال website-or-web-system AR. روابط legacy وindex.html ضمن **المرحلة 01**. لم نبدأ أيًا من المرحلتين.

## 5. القرار وخطوات ما بعد موافقة المستخدم

**قفل المرحلة 00 فنيًا: نعم.** `REL-01` أصلح واختبر؛ `REL-02` جاهز للدمج عند موافقة المستخدم، لكن لم يُدمج بعد.

1. انتظار قول المستخدم **«تم»** للموافقة على دمج تحسينات PR #65 بعد نجاح الاختبارات، وليس الاكتفاء بقول «اكمل».
2. بعد الموافقة: تحقق SHA و`main` مجددًا؛ ادمج PR #65 دون حذف ملف المراجعة المستقلة في main، وافحص Vercel Production، وتأكّد من نشر عناوين وخدمات 88 صفحة.
3. وثّق نتيجة الدمج وProduction/GSC كنقطة أساس جديدة؛ ثم حسب الموافقة، ابدأ **المرحلة 01** لتحويلات الروابط القديمة بفرع مستقل.
4. تُدمج خطة التوثيق **PR #66** بالموافقة المناسبة وبلا تعديلات Runtime. لا تخلط دمج وثائقها مع تغيير الإنتاج.
5. أي تغيير جديد في SHA الخاص بـ PR #65 قبل الدمج يستلزم إعادة التحقق من CI/Preview على SHA الجديد.

**مخاطر أو تحفظات:** مصفوفة CI مختبر آلي وليست ضمانًا مطلقًا لتجربة المستخدم، ولا تثبت نتائج ترتيب Google. لا توجد نتائج قياس حي للترتيب بعد نشر تحسينات الميتاداتا لأنها لم تُنشر بعد.
