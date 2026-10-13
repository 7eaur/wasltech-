# تسليم محادثة جديدة — وصل تك | إغلاق إصلاحات الفرع بالتسلسل ودون ترقيع

**تاريخ التسليم:** 2026-10-12 (Asia/Aden)  
**المستودع:** `7eaur/wasltech-`  
**الفرع المعتمد للتنفيذ:** `fix/independent-site-recovery-20261010`  
**آخر HEAD شوهد أثناء إعداد التسليم:** `f8e5f070db9506444c0d06378facd1c243dbd2fe` — **تحقق من HEAD الحي عند الاستلام؛ قد يتغير بسبب Commit هذا التسليم أو عمل آخر**.  
**PR الفرع:** [#46 — Draft](https://github.com/7eaur/wasltech-/pull/46) إلى `integration/site-stabilization-20261010` (PR [#45](https://github.com/7eaur/wasltech-/pull/45) إلى `main`).  
**Vercel المشروع:** `wasltech` (`prj_tp7lDumOID2XusRHkPvYayybihVe`). آخر Preview رُصد READY لنفس HEAD قبل تسليم هذا الملف: `https://wasltech-9hjpbcwnl-wasl15.vercel.app`. **قد يكون محميًا**؛ اطلب رابط مشاركة معاينة مستقلاً بدل تغيير حماية المشروع كلها. رابط المشاركة السابق `wasltech-3tt8lc353` يخص SHA أقدم، ليس آخر نسخة.

## المهمة والتفويض

المستخدم اعتمد **إكمال جميع مهام/قرارات فرع الإصلاح والتحسينات بالترتيب**، لا الاقتصار على U1–U4، ويرفض «الترقيع»: لكل مشكلة أثبت السبب الجذري، أصلح مالك الكود/البيانات، أزل القواعد أو المسارات المتعارضة بعد إثبات أنها زائدة، وثبت Regression test؛ لا تجمع CSS overrides أو تختبئ خلف `display:none` أو ترفع الميزانيات لتتجاوز الفشل. هذا تفويض لاستكمال مراحل **الفرع المعزول**، لا تفويض لنشر Production أو تغيير DNS/SEO/Logo أو إتلاف أصول حقيقية.

### Source of Truth حسب الأولوية

1. **GitHub HEAD الحي** للفرع، آخر Commit/فرق/CI، Vercel Preview المطابق للـSHA.
2. `AGENTS.md`، `PROJECT_STATUS.md`، `PROJECT_HANDOFF.md` (أحدث قسم 2026-10-12 فقط للقرارات المعاصرة؛ سبتمبر تاريخ).
3. **[مصفوفة الإغلاق الحالية](2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md)**: `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md`.
4. **الخطة الأصلية** `docs/audit/2026-10-10_MASTER_EXECUTION_PLAN_AND_ACCEPTANCE.md` + **سجل العيوب** `docs/audit/2026-10-10_INDEPENDENT_DEFECT_REGISTER.md` على فرع **`audit/independent-root-cause-register-20261010`**؛ لا توجد نسخ ضمن فرع الإصلاح بالضرورة.
5. تقارير التنفيذ: `docs/qa/2026-10-10_RECOVERY_IMPLEMENTATION_CHECKPOINT.md`، `docs/qa/2026-10-11_RECOVERY_STAGE2_AND_REMAINING.md`، `docs/qa/2026-10-11_RECOVERY_STAGE3_ACCESSIBILITY_EDITORIAL.md`، `docs/qa/2026-10-11_UX_UI_EXPERT_AUDIT_V4.md`، `docs/qa/2026-10-12_U2_U3_U4_FUNCTIONAL_FIRST_RELEASE_READINESS.md`.
6. `docs/core/DESIGN_SYSTEM.md`, `docs/core/CONTENT_IA.md`, `docs/core/QA_RELEASE.md`, `docs/qa/FINAL_MEDIA_INVENTORY.md` مع مراعاة أن بعض أقسامها تاريخية.

الخطة الأصلية تغطي **WT-IA-01..75 (75 معرفًا)** و **WT-001..020 (20 معرفًا)**، مع **UXR-01..12**. **ليست 107 مشكلة مستقلة**، فبعضها متداخل وتحسينات ومخاطر وقرارات. لا تعلن «95 مشكلة CLOSED» من نجاح CI.

## ما تم تنفيذه بالفعل — لا تبدأه من الصفر

- **P0/P1:** branch ownership، إصلاح Planner fail-closed مع JS معطل ومنع إدخال بيانات في GET، والتنقل على الموبايل وnoscript fallback، و404 مستقل/HTTP 404 ثنائي اللغة.
- **P2:** ربط مشاريع الخدمة بالعمل الفعلي ومسارات CTA والروابط، والتحقق من SEO/schema/روابط قائمة التصفح في CI على Preview.
- **P3/U1:** ترتيب الشبكات في Services Desktop 3/2/3 وPortfolio initial/featured، تحسين عرض الخدمات كقوائم واضحة على الجوال، Home الأربع خطوات/ست مزايا، About/Process، ألوان Apricot/Cream الثانوية المنضبطة، الحد من Card walls.
- **P3/U2/U3:** بطاقتا اختيار Contact «سؤال سريع» و«لدي مشروع» قبل القنوات الأخرى؛ إظهار المخرجات والأعمال الحقيقية أولًا في **8 خدمات × AR/EN** مع `<details>` الأصلي والـJump Navigation؛ FAQ الأربع فئات مع روابط قفز؛ مقدمات صفحات Legal نصية؛ المقالات بمسار قراءة؛ تحسين تسميات النصوص الصغيرة.
- **P4:** تصحيح مخرجات خدمات ثنائية اللغة، وبعدها 80 وصفًا إضافيًا، وتخفيف العبارات والوعود غير المثبتة؛ **الأدلة الحقيقية لدراسات الحالات ما زالت غير مكتملة**.
- **P5:** WebP وخيارات Responsive `srcset/sizes`، أصول الخدمات الثمانية ومصادرها محفوظة؛ صور المشاريع 14 ومشتقاتها؛ ميزانيات CSS/JS/الصور ثابتة. آخر Code check على SHA `51eb0e61` حقق CSS gzip **16,376 / 16,384** قبل إصلاح إزالة أزرار Hero.
- **السبب الجذري الأخير (مهم):** HTML لـ6 صفحات ثانوية كان يولّد Hero CTA تفاعلية مخفية بالـCSS. Commit `535f7f7239f6a0eab6eab727137448768c7f161d` أزال ActionLinks المخفية من `services.js`, `service-detail.js`, `contact.js`, `process.js`, `faq.js`, `insights.js` وأزال قواعد CSS القديمة من `hero-pages.css` و`hero-responsive.css`. Commit `e5d8ff82b17b321df29928b11e95787bee75479b` أضاف guard في `scripts/check-cta.mjs`. لا تعيد تلك الأزرار ولا تخفها من جديد.

## أدلة تقنية حالية؛ لا تنسب نتائج SHA قديم إلى SHA أحدث

- HEAD التشغيلي الأخير `e5d8ff82` يتبعه **توثيق فقط** `bc4495b4` و`f8e5f070` عند فحص هذا التسليم.
- آخر **VNext verify** ناجح على HEAD `f8e5f070`: [run #38181180546](https://github.com/7eaur/wasltech-/actions/runs/38181180546)، [run #38181184052](https://github.com/7eaur/wasltech-/actions/runs/38181184052).
- آخر **Capture VNext route matrix** على التغيير البرمجي `535f7f72`: [run #38181038785](https://github.com/7eaur/wasltech-/actions/runs/38181038785) **SUCCESS**؛ بعده Guard وتوثيق فقط. أعده عند أي تعديل تشغيلي جديد، وعلى آخر SHA نهائي.
- Preview آخر HEAD `f8e5f070`: READY على Vercel، ليس Production. لا تدعي Performance field أو WCAG 2.2 AA من CI/Playwright وحده.
- PR46 ما زال **Draft**؛ لا Merge إلى PR45 أو `main` ولا DNS/Production.

## المتبقي — المسار التالي بالترتيب (أولوية العمل)

### الدفعة A — مالكية الكود / إزالة الجذور القديمة (داخل الفرع)
1. تحقق من آخر HEAD وأضف Snapshot نتائج CI/Matrix والتبعيات في مصفوفة الإغلاق دون قلب الحالات إلى CLOSED عشوائيًا.
2. **WT-IA-25/38/WT-015/020**: ارسم dependency/ownership graph من `scripts/build.mjs` لمداخل CSS/JS/legacy؛ حدد القواعد الميتة والمتكررة بالبحث عن المستهلك والتحقق بصريًا/بالتشغيل. **لا تحذف legacy أو `.htaccess` أو source originals إلا بعد إثبات أنها غير مستخدمة**. أصلح سبب تداخل القواعد في المكوّن الأصلي، ثم Regression test والتأكد من gzip.
3. أجرِ اختبار AR/EN على Preview وBrowser matrix بعد كل دفعة فعلية؛ لا Push منفصل لكل تعديل بسيط (Vercel ينشر Preview تلقائيًا وقد يستنفد الحد).

### الدفعة B — المحتوى وتجربة المستخدم
4. **UXR-03 / WT-IA-53/65**: تفاصيل الخدمات لا تزال طويلة؛ عالج **تكرار المعنى** بين Signals/Audience/Subservices/Constraints والـFAQ بناءً على معنى محتوى `src/data/services.js` لا بمجرد CSS أو إخفاء المحتوى؛ لا تسقط المخرجات الأساسية أو الأسعار/الاستثناءات المعتمدة. اختبر Time-to-answer واكتشاف المخرجات والتواصل في 320/390/1440 AR/EN، no-JS.
5. **UXR-04/08/06**: ميّز Heroes وفق وظيفة الصفحة بدل القالب الواحد أو صور وهمية، راجع طول/قابلية مسح Home على الجوال، وضبط النصوص الصغيرة والتباين وفق computed styles. احتفظ بـFunctional-First UI؛ **ليس Card لكل فقرة**.
6. **WT-IA-19/20/50/59 وUXR-07**: راجع FAQ/الأعمال التسويقية دون اختلاق نتائج أو شهادات. **دراسة الحالة الحقيقية BLOCKED ON EXTERNAL EVIDENCE**؛ جهز عقد المحتوى وأبلغ بما يلزم ولا تخترع صورًا أو تعد الإنجاز مكتملًا.

### الدفعة C — الوصولية والأداء والبيئة الواقعية
7. **WT-IA-27/74/UXR-12:** Keyboard focus, menus, FAQ, filters, planner, skip link, 200/400% Browser Zoom، ألوان/Contrast حقيقية، NVDA/VoiceOver، Safari/iPhone وChrome/Android حيث متاح. ميّز محاكاة Chromium عن أجهزة/Screen Readers فعلية.
8. **WT-IA-28/75 وWT-010/011/012:** اختبارات cold load وSlow network/CPU والصور وfonts، وLCP/INP/CLS الفعلية إن توفرت أداة قياس موثوقة. بدون بيانات field اتركها Open ووضح التبعيات.
9. **WT-IA-32:** تحقق الروابط الرسمية؛ البريد/WhatsApp/Instagram يستلزم اختبار استقبال حقيقي بموافقة صاحب الحساب، فلا تسجل Success افتراضيًا.

### الدفعة D — تكامل Release دون نشر تلقائي
10. **WT-IA-30** تعارض Production `www → apex` مقابل canonical على `www` مسجل بتاريخ 2026-10-11؛ **تحقق مجددًا من HTTP الحي** قبل تقرير أي وضع حالي؛ مسؤول SEO/Domain، لا تعدل DNS أو PR #36/#37 من هذا الفرع.
11. راجع PR46→PR45→main وبقية Draft PR #42–44 وSEO #36/#37 وأنميشن Logo #41، وابنِ تعارضات واضحة من مقارنة HEAD. لا تدمج أو تحذف أو تروّج لأي بيئة قبل تصريح منفصل.
12. وحّد `PROJECT_STATUS.md`, `PROJECT_HANDOFF.md`, `docs/qa/FINAL_MEDIA_INVENTORY.md` وآخر إغلاق التذاكر؛ الحفاظ على التاريخ دون السماح بأن تتصدر توصيات سبتمبر على قرارات أكتوبر. أرفق لكل بند commit + tests + preview + حالة `OPEN/TRIAGED/IN_PROGRESS/VERIFIED_PREVIEW/BLOCKED/VERIFIED_PRODUCTION/CLOSED`.

## المبادئ غير القابلة للتنازل

- لا ترقيع ولا selectors متراكبة أو `display:none` لإخفاء عناصر غير مرغوبة من DOM. راجع السبب/المالك أولًا، لا تغيّر أسماء الدوال دون داع.
- توازن تصميم راقٍ ونظيف وسريع، IBM Plex Sans، Navy #14305F، Teal #0E8889، Apricot #E6A36A المحدود؛ دعم RTL/LTR وWCAG، تجنب 3D/glow/gradients/stock.
- كامل خدمات وصل تك الثمان وبيانات الاتصال المعتمدة والصفحات والتسليمات، دون أرقام ثقة مختلقة، ودون حذف أقسام واقعية لمجرد تقليل الطول.
- حماية الأسرار والمعلومات الشخصية، لا ترسل بيانات النموذج تلقائيًا ولا تدعِ وجود backend لاستقبالها.
- لا تمس `main`/Production/DNS/SEO/Logo بدون تنسيق. هذا تسليم للعمل داخل الفرع وليس إذن Cutover.
- اختبر Commit التشغيلي بالـNode24 `npm run vnext:verify` و`npm run vnext:verify:release` و`check-*.mjs` وRoute Matrix (آخر اختبارات على SHA)، واحفظ دليل QA. Vercel preview `READY` وليس إطلاقًا رسميًا.
- المستخدم **وافق على إكمال جميع مراحل الفرع بالترتيب**، ولا تحتاج إعادة طلب موافقة لكل دفعة داخل هذا النطاق. اسأل فقط عند حاجة حقيقية لأصول/أسرار/اعتماد يؤثر على الإنتاج أو دمج خارجي.

## كيف تبدأ المحادثة الجديدة فورًا

1. GitHub: Fetch HEAD/PR46 وأحدث CI/Matrix/Preview، وافحص وجود تغييرات أحدث من `f8e5f070`.
2. اقرأ هذا التسليم، ثم **مصفوفة الإغلاق** والخطة/السجل الأصلي من فرع التدقيق؛ قائمة الإجراءات الواردة هنا نقطة بدء وليست بدل الجرد التفصيلي.
3. ابدأ بتنفيذ **الدفعة A — جرد الملكية وإزالة CSS/JS/legacy المتعارضة**، لا توثيق فقط؛ اختبر أن السلوك قبل وبعد متطابق حيث يجب.
4. أكمل بعدها B→C→D وفق الجذور والأولوية، وحدّث المصفوفة بعد كل دفعة مع عدم تزوير حالة إغلاق.
5. في كل تقرير أظهر بوضوح: `Not Started / Implemented / Verified Preview / Needs External Evidence / Blocked / Ready for Owner Review`، واترك الدمج والنشر الرسمي إلى موافقة منفصلة.

**الخلاصة:** المعاينة الحالية جيدة وآلية CI خضراء، لكن UXR-03 وUXR-04/06/08، الأدلة الحقيقية للمشاريع، قياسات field، الوصولية الفعلية، تنظيف legacy المثبت، WHOIS/SEO-domain reconciliation وP6 ليست مغلقة. استمر بالحلول الجذرية وفق هذه القائمة والمرجع الأدق داخل المستودع.
