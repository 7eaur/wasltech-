# وصل تك — سجل تنفيذ الإصلاحات على الفرع المستقل (2026-10-10)

> **تحديث لاحق مهم:** هذا سجل المرحلة الأولى. حالة المرحلة الثانية والتحقق وآخر اكتشافات Production في [تقرير 2026-10-11](2026-10-11_RECOVERY_STAGE2_AND_REMAINING.md). لا تعتمد وصف «المتبقي 7 خدمات» أدناه بعد إصلاح 80 وصفًا في المرحلة الثانية.

**الفرع:** `fix/independent-site-recovery-20261010`، انطلق من `integration/site-stabilization-20261010` SHA `971c7d3164bc66d0a1704ee82395ffca64f07138` (Draft PR45). لا تعديل على `main` أو Production ولا على فروع SEO #36/#37 وأنميشن الشعار #41.

**المرجع:** خطة `docs/audit/2026-10-10_MASTER_EXECUTION_PLAN_AND_ACCEPTANCE.md` وسجل `docs/audit/2026-10-10_INDEPENDENT_DEFECT_REGISTER.md` على فرع `audit/independent-root-cause-register-20261010`. المعرفات 75 WT-IA و20 WT، وبعضها مكرر أو تحسينات لا Bugs مؤكدة. هذا الملف شهادة عن الشيفرة على فرع التنفيذ، لا عن Production.

## مراحل التنفيذ الحالية

| المرحلة | تم تنفيذه | المتبقي / حكم الإغلاق |
|---|---|---|
| P0 — الأساس والملكية | فرع مستقل من تكامل PR45، تحديد فرق SEO والشعار المنفصلة | تنسيق دمج نهائي لاحقًا. لا تغيير للـmain. |
| P1 — السلامة | نموذج Planner no-JS يعرض تعليمات واتصالًا بديلًا؛ كل الحقول معطلة حتى تهيئة JS والأزرار من نوع button، لا مسار GET للبيانات. قائمة هاتف `noscript` مستقلة. Reduced-motion يعطل scroll animation. | اختبارات AR/EN Chrome نجحت على Preview SHA `39af1591296f7302b0d88e49ee977368fec7d542`، لكن الإغلاق الإنتاجي غير مستحق بعد. |
| P2 — المسارات | بطاقات أعمال الخدمة أصبحت مرتبطة بصفحات المشاريع، عُدّل الاختبار ليطلب الرابط بدل أن يمنعه. CTA/404 الأساسيان موروثان من PR45. | تكوين Vercel الجديد يقرأ الملفات أولاً ثم يعيد صفحات 404 بالعربية/الإنجليزية مع رمز 404، دون تبديل لغة الصفحة بـJavaScript؛ **بانتظار دليل HTTP حقيقي** على Preview، ثم فحص الروابط وwww↔apex على Production. |
| P3 — المظهر والهاتف | 4 خطوات Home في صف واحد، 6 مزايا في 3×2؛ About/Process/مخرجات الخدمة panels مفيدة، حجم نص بطاقة/hero/footer هاتف محسّن؛ إضافة Apricot #E6A36A وCream #FFF5EA كـtokens مع نص داكن. حذف 13 Hero declarations متراكبة للحفاظ على gzip budget بدون رفع الحد. | استكمال باقي أقسام/صفحات الخدمة والأعمال والـCSS التراكمي بعد مراجعة نماذج Preview على 320px/zoom. |
| P4 — المحتوى | تصحيح 8 عناوين/أوصاف مخرجات الويب AR و8 EN، تقليل teaser بطاقة الخدمات لـ3، «لماذا وصل تك» أصبحت ست رسائل عملية بلا وعود زائفة. | تدقيق مخرجات بقية 7 خدمات، ومحتوى 14 مشروع مع صور/أدلة واقعية وموافقة مالكها. |
| P5 — الجودة | npm build/structure/links/media/release/quality + عرض اللغتين على 360/390/768/1024/1366/1440، فحص sitemap ومخطط المشروع وفلاتر الأعمال وno-JS/degraded runtime. | LCP/INP/CLS الحقيقية، اختبار أجهزة ومقاسات/لوحة مفاتيح أوسع؛ لا قياس حقيقي للأنميشن من لقطات ثابتة. |
| P6 — التكامل | Preview مستقل READY، وGitHub CI نجاح على SHA `39af159...` | لا Merge/Production/DNS قبل تفويض واضح وتحقيق موافقة التصميم واختبار الإصدار. |

## أدلة مؤكدة قبل هذا التحديث التوثيقي

- GitHub VNext verify **SUCCESS**: [run #38080541794](https://github.com/7eaur/wasltech-/actions/runs/38080541794) عند SHA `39af1591296f7302b0d88e49ee977368fec7d542`. Preview/Release build واختبارات QA وCSS gzip ضمن الميزانية.
- GitHub Capture VNext route matrix **SUCCESS**: [run #38080541801](https://github.com/7eaur/wasltech-/actions/runs/38080541801) في نفس SHA؛ اختبارات AR/EN no-JS وbrowser/ responsive. Artifact 72 PNG #`11680063198` ينتهي 2026-10-13.
- Vercel branch Preview READY: `wasltech-6ewy2muaa-wasl15.vercel.app`, deployment `dpl_DLC6FRhA3nqSF5giU4nhEvckGQqr`, SHA `39af159...`. هذا ليس الرابط الرسمي `www.wasl-tech.com`.
- المراجعة البصرية قبل/بعد للقطات 1440 و390: Home 4+6 balanced، About حوّل القصة/الرسالة/القيم إلى لوحات، Process أربع بطاقات، Service Web mobile مخرجات مرقمة كبطاقات. بعض الصفحات أصبحت **أطول** من السابق بسبب الفصل؛ لا نعلن انتهاء تحسين طول التمرير.

## بوابة الاختبار بعد هذا التحديث

أضيفت اختبارات ثابتة لمنع تراجع Home grids 4/3 أعمدة وتباين نص الـWarm Apricot. يجب إعادة تشغيل نفس CI على HEAD الجديد؛ لا تُنسب نتائج SHA القديم إلى SHA جديد دون تشغيل.

## توقف العمل/المخاطر المعروفة

1. WT-IA-41 أصبح له حل على فرع التنفيذ لكن لا يغلق حتى إثبات HTTP 404/لغة صحيحة بدون JS؛ WT-IA-30/32 live routing/contact غير مغلقة.
2. صفحات الأعمال والخدمات الثمان والموبايل 320px والـzoom والمحتوى المعتمد تحتاج توسعة تحقق لاحقة.
3. فرق SEO/AI Search وشعار الـLoader مستقلون؛ لا نغير فروعهم ولا ندمج دون تنسيق.
4. لا تنشر Production أو تحذف أصولاً/فروعًا أو تغير DNS دون موافقة المستخدم.
5. اطلب أي لقطات أعمال حقيقية وبيانات العملاء قبل إدراج نتائج تسويقية غير موثقة.

**حكم المرحلة:** `BRANCH CODE IMPLEMENTED / PREVIEW CI VERIFIED / MAIN AND PRODUCTION UNCHANGED / FULL CLOSURE PENDING`.
