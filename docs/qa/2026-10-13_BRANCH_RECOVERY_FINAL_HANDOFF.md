# وصل تك | إغلاق مهام فرع الإصلاح تقنيًا — التقرير المرجعي وبوابات القبول

## الحالة الحالية المعتمدة — تحديث 13 أكتوبر 2026 (اقرأ هذا القسم أولًا)

> **هذه هي نقطة الاستلام الوحيدة للحالة الحالية والمتبقي.** الأقسام التي تأتي بعد عنوان «الأدلة التاريخية» محفوظة لإثبات مراحل التنفيذ وتواريخها؛ أي حالة `OPEN` أو `CI pending` أو SHA قديم فيها لا تتغلب على هذه النسخة أو نتائج GitHub المباشرة.

| البند | الحقيقة التي تم التحقق منها |
|---|---|
| المستودع | `7eaur/wasltech-` |
| فرع التعديلات الوحيد | `fix/independent-site-recovery-20261010` |
| HEAD قبل دفعة تحديث التوثيق هذه | `df7690f2e745b0575a1057926f59081273c7e848`؛ يتحرك HEAD بتوثيق الحالة، فلا تعتبره رأس الفرع الأبدي |
| آخر تغييرات تنفيذ/اختبارات | `5c79956c` إصلاح تطبيق رؤوس الحماية، `6aef6002` إصلاح توقع اختبار ترتيب الـ404 |
| PR | [#46 Draft](https://github.com/7eaur/wasltech-/pull/46) → `integration/site-stabilization-20261010`؛ `mergeable=true` لحظة القراءة، **لم يندمج** |
| الإصدار الرسمي | `main` غير متأثر؛ لا دمج أو قطع إنتاج أو DNS أو تعديل لفروع SEO والشعار |
| أحدث اختبارات Node24 على HEAD قبل توثيقنا | [GitHub push #38436026753](https://github.com/7eaur/wasltech-/actions/runs/38436026753) و[PR #38436035428](https://github.com/7eaur/wasltech-/actions/runs/38436035428): **SUCCESS** |
| أحدث مصفوفة Chromium كاملة مثبتة | [run #38338784657](https://github.com/7eaur/wasltech-/actions/runs/38338784657) على `9c9cdb73`: **SUCCESS**؛ لا تنسب هذا التشغيل آليًا إلى SHA أحدث تغيّر فيه `vercel.json` واختباراته |
| معاينة آخر رأس قبل توثيقنا | [Vercel Preview](https://wasltech-k2ew1c6l9-wasl15.vercel.app/)؛ READY وHTTP 200 + رؤوس الحماية الأربعة متحققة بالفعل |
| الحالة المهنية الدقيقة | **SOURCE QA / PREVIEW VERIFIED للتغييرات المثبتة**؛ **ليس قبول أجهزة حقيقية، ولا اعتماد WCAG كامل، ولا إطلاق Production** |

### ما المقصود بالحالات؟

- `IMPLEMENTED`: الكود/الإعداد تغيّر؛ قد لا يكون اختُبر على إصدار مطابق.
- `VERIFIED_SOURCE`: اختبارات المصدر والبناء على SHA محدد ناجحة.
- `VERIFIED_PREVIEW`: اختبار المتصفح/HTTP على المعاينة مع دليل مطابق؛ قد يكون جزئيًا حسب نطاق الاختبار.
- `OPEN`: يحتاج إجراء اختبار أو قرار أو إصلاح عند اكتشاف عيب.
- `BLOCKED_EXTERNAL`: يعتمد على صاحب حساب، مواد حقيقية، جهاز، حركة مستخدمين، أو فريق آخر؛ **ليس افتراض وجود خلل برمجي**.
- `CLOSED_PRODUCTION`: لا تمنح هذه الحالة إلا بعد دمج معتمد ونشر وفحص إنتاج حقيقي.

## 1) سجل المكتمل ضمن فرع الإصلاح (مع مصدر الإثبات)

| المجموعة | العمل المنجز | ما الذي أثبته الاختبار؟ | حدود الادعاء |
|---|---|---|---|
| P0 ضبط العمل | فرع مستقل + PR #46 Draft + فصل ملكية SEO/Logo/Integration | GitHub HEAD/PR والمرجع حيّان | الموافقة على الدمج ليست جزءًا من الاختبار |
| P1 الخصوصية والتنقل | مخطط المشروع لا يرسل بيانات عند تعطيل JavaScript؛ تنقل الجوال وبديل no-JS؛ مراجعة واتساب لا ترسل تلقائيًا | Static check + Chromium AR/EN | وصول الرسالة للجهة المستقبلة لم يُختبر |
| P2 الروابط والـ404 | صفحات 404 مستقلة بلغتين، روابط CTA ومشاريع، رموز HTTP 404 للخارج عن المسارات | مصدر + HTTP معاينة | ليس اختبار Production |
| P3 الصفحة الرئيسية/الخدمات/المعرض | شبكات CSS متوازنة، تعارض Hero المخفي أُزيل من مصدره، وصف الخدمات لم يعد مقصوصًا، تدفق Contact/FAQ وظيفي نصي، دعم موبايل | فحوص 320–1440 ولغتين وصور مختارة | القبول البصري لكل شاشة وقراءة المستخدم ما زال مفتوحًا |
| P4 المحتوى | 8 خدمات × AR/EN، المخرجات قبل التفاصيل، native `details` للأنواع الطويلة دون JavaScript، إزالة مقدمات عامة مكررة، FAQ من 13 إلى 12 سؤالًا فريدًا | 16 مسار تفاصيل خدمة + فحص FAQ/Home | ليس ضمان خلو جميع النصوص من تقارب دلالي أو رضا الزوار |
| P4 ملكية الموارد | 22 ملف CSS runtime + 1 Preview و1 marker، و4 JS clients ذات مالك ربط واحد؛ فحص اعتماد البناء | `scripts/check-source-ownership.mjs` PASS | ملفات Legacy الإنتاجية محفوظة حتى ثبوت زوال الحاجة إليها |
| P5 الصور والسرعة المصدرية | أصول الصور النهائية الثمان + 8 خدمات + Home/About + صور 14 عمل، تحويلات WebP/srcset/sizes وأحجام مضبوطة | Quality/Media/Release CI PASS | صور البطاقات ليست «لقطات إثبات دراسة حالة» موثقة |
| P5 الوصولية الآلية | إصلاح حجم نقر روابط Footer الإنجليزية، إعلانات تصنيف Portfolio، اختبار تباين ومفاتيح التنقل | axe 4.10.3 على 8 مسارات × لغتين ب390px أعاد **0 مخالفات في العينة** | لا شهادة WCAG 2.2 AA، ولا بديل لقارئ شاشة |
| P5 الأداء التجريبي | فحص شبكة/CPU محاكى وLCP/CLS محلي + long tasks ولقطات الصفحات | تجربة واحدة: DOM 1197ms؛ LCP 1476ms؛ CLS 0.031262؛ مهمة بدء 232ms، تمرير 58ms | **لا** توجد قياسات p75 فعلية أو INP ميداني |
| P5 الأمان التشغيلي | اكتشاف غياب رؤوس HTTP الحقيقية رغم وجود الإعداد، إصلاح `vercel.json` بوضع قاعدة `continue:true` قبل filesystem، إبقاء 404 محليين، حراسة بالاختبار | معاينة AR/EN 200 و404 الصحيح وCSS 200؛ رؤوس `nosniff`، Referrer، Permissions، SAMEORIGIN كلها وصلت فعليًا؛ CI على `6aef6002` وعلى `df7690f2` PASS | إنتاج حيّ لم يُختبر |
| P6 التنسيق | وثيقة تقاطع الملفات ومسارات PRs، ولم يتم تعديل فرع الغير | PRات مباشرة تمت مراجعتها | التكامل والقرار النهائي عند مالكيهما |

**أدلة التنفيذ التفصيلية:** [مصفوفة الجذور](2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md)، [UXR-03](2026-10-12_UXR03_SERVICE_DISCLOSURE_C3.md)، [FAQ/Accessibility](2026-10-13_FAQ_DEDUP_AND_FOOTER_A11Y.md)، [HTTP/Lab](2026-10-13_RESPONSE_HEADERS_AND_LAB_DIAGNOSTICS.md)، [جرد الصور](FINAL_MEDIA_INVENTORY.md).

## 2) المتبقي التفصيلي — بوابات القبول الفعلية (لا تحسب «عيوبًا مكتشفة»)

**مهم:** لا يوجد في فحوص المصدر الحالية عيب مكسور مؤكد آخر داخل نطاق الفرع. البنود أدناه **اختبارات قبول أو مستلزمات نشر**؛ أي عيوب ملموسة تظهر منها تُصلح في مالك الكود المناسب بعد تسجيل نتيجة الفشل.

| المعرّف | الأولوية | المهمة والخطوات العملية | دليل القبول المطلوب | المالك / الاعتمادية | الحالة |
|---|---|---|---|---|---|
| R01 — Visual/UAT | P1 | مراجعة Home/Services/8 Service Details/Portfolio/Project Detail/About/Process/Contact/Planner/FAQ/Insights/Articles/Careers/Legal/404 في **AR/EN** على 320 و390 و768 و1024 و1440؛ ملاحظة قص النص/الصور، كثافة البطاقات، العناوين، التباعد، RTL/LTR، أزرار التفاعل. ابدأ بمراجعة الصفحة الرئيسية الطويلة وصفحات الخدمات الأكثر تشعبًا. | سجل صفحة/مقاس/لغة + لقطة قبل وبعد لأي عيب + نتيجة PASS/FAIL واضحة لكل مجموعة؛ قبول مالك الموقع | مراجع UX + صاحب المنتج؛ يمكن إصلاح أي خلل مؤكد **داخل الفرع** | `PARTIAL`: لقطات Chromium واختبارات ناجحة، لم يتم اعتماد **كل** الصفحات بشريًا |
| R02 — Scannability | P1 | تنفيذ مهام قراءة على 390 و1440 بالعربي/الإنجليزي: «اعرف مخرجات خدمة خلال دقائق»، «اعثر على دليل عمل ذي صلة»، «انتقل للتواصل»، «استخدم صفحة FAQ». تحقق من تكرار الدلالة بين signals/audience/subservices/constraints؛ لا تحذف معلومات أصلية لتحقيق صفحة قصيرة ظاهريًا. | سيناريو المهمة، نتيجة الزائر ومواطن التعثر، قرار تحرير دقيق لكل خلل ولقطة تحقق بعد الإصلاح | صاحب المنتج/مراجع بشري؛ تعديل الكود فقط عند وجود دليل | `OPEN` — لا توجد دراسة مستخدم حقيقية |
| R03 — أجهزة ووصولية | P1 | اختبار **Safari فعليًا على iPhone** و**Chrome Android**، عرض الجوال مع تكبير المتصفح الحقيقي 200% و400%، لوحة المفاتيح، التحول اللغوي، ترتيب Tab والـfocus، skip link، disclosure، reduced-motion، VoiceOver/NVDA (أو اختبار من مراجع يستخدم قارئ شاشة). | أسماء الأجهزة/أنظمة التشغيل، خطوات وأدلة Screenshots/Video، أخطاء قابلة للتكرار وإغلاقها؛ إعلان النجاح لكل اختبار منفصل | أجهزة/مختبر أو مراجع وصولية؛ لا يكفي emulated viewport | `OPEN`، الآلي axe/reflow ليس بديلًا |
| R04 — أداء الشبكات الفعلي | P1 | اختبار cold cache + اتصال بطيء وجهاز محدود + الصفحات الأثقل وصور WebP، ثم جمع `LCP p75 <= 2.5s` و`INP p75 < 200ms` و`CLS p75 < 0.1` من RUM/CrUX عندما تتوفر عيّنة مستخدمين موثوقة؛ سجّل mobile/desktop ونطاق الوقت. | تقرير أداء بتاريخ/أجهزة/منطقة/حجم عينة؛ baseline مقابل after؛ لا تُحوّل تجربة Chromium الواحدة إلى field metric | صاحب أدوات القياس/النشر وبيانات حقيقية؛ يمكن عمل lab إضافي دون الادعاء بالإغلاق | `OPEN FIELD`، lab المحاكى مثبت فقط |
| R05 — قنوات التواصل | P1 | اختبار رابط رقم WhatsApp + رسالة تصل **فعليًا** لحساب الاستقبال، إرسال البريد واستلامه، صحة Instagram، مسار Planner AR/EN، وأنه لا يتم إرسال بيانات دون فعل المستخدم. | تأكيد مالك الحساب **بالاستلام** ونتيجة الرابط/التطبيق، دون نشر بيانات شخصية في QA | مالك الأرقام والبريد والحسابات | `BLOCKED_EXTERNAL`: الرابط/الرسالة الآليان يختلفان عن استلام فعلي |
| R06 — إثبات مشروع حقيقي | P2 | اختيار Case Study واحدة على الأقل، إضافة لقطات حقيقية مأذون بنشرها، اسم/نوع المشروع، دور وصل تك، المشكلة والحل والنتيجة **إن كانت مثبتة**، ربطها ببطاقة العمل وعدم اختلاق أرقام/شهادات أو شاشات وهمية. | أصل الصورة + إذن استخدامها + بيانات موثقة + موافقة على النص قبل الربط | مالك المشروع/الحقوق | `BLOCKED_EXTERNAL` — صور الكتالوج الـ14 موجودة، الإثبات التفصيلي مختلف |
| R07 — Legacy/Cutover inventory | P2 | توثيق ملف-ملف أي CSS/JS/HTML تاريخي خارج Build VNext؛ مراجعة اعتماد الموقع الحالي و`.htaccess` وإعادة التوجيه؛ لا تحذف ما قد تحتاجه Production. **بعد** اعتماد cutover والنسخ الاحتياطي فقط أزِل المثبت أنه مهجور. | جدول: الملف، مالكه، أين يُستخدم، دليل عدم الاستخدام، قرار keep/archive/remove ونتيجة smoke | مسؤول الإصدار والإنتاج؛ مراجعة أكواد الفرع ممكنة الآن، **الحذف محجوز لما بعد cutover** | `PARTIAL/BLOCKED` |
| R08 — تكامل فروع الآخرين وSEO | P1 وقت الإطلاق | التحقق من PR #45 (integration) ثم PR #46، ومقارنة تغييرات SEO #36/#37 وLogo #41 وبقية PRs؛ تعارض `www` مقابل apex في redirect/canonical/hreflang/sitemap/OG يُحل بواسطة فريق SEO/domain. اختبر **نتيجة الدمج** وليس كل فرع منفردًا. | قرار مسؤول كل فرع، سجل حل تعارضات فعلية إن وجدت، CI + Chromium + SEO على SHA الدمج، لا تكرار محتوى/صور | المسؤولون الآخرون/Release owner | `BLOCKED_CROSS_BRANCH` — **خارج تعديلات فرعنا الحالي** |
| R09 — اعتماد ونشر | P0 قبل go-live | بعد R01–R08 حسب ما يتعلق بالإصدار، حسم قابلية الدمج، موافقة مالك الموقع الصريحة، ترتيب PR46 → PR45 → main وفق خطة Release، تشغيل فحوص بعد الدمج، معاينة نهائية ثم نشر مصرّح به مع خطة تراجع. | موافقة صريحة + SHA مصادق عليه + checks ناجحة + سجل قرار GO/NO-GO | مالك المنتج/النشر | `BLOCKED_APPROVAL` — لا دمج ولا إنتاج حتى الآن |
| R10 — إنتاج Post-release QA | P0 بعد النشر | طلبات HTTP لكل من / و/en/ والروابط الداخلية و404، رؤوس الحماية، التحويل canonical والميديا، تشغيل/استلام التواصل، تأكيد فهرسة صحيحة ورفض indexing للـ404 فقط، إعادة قياس LCP/INP/CLS. | تقرير HTTP/التواصل/الأداء على الدومين الرسمي مع SHA وسجلات النتائج وقابلية rollback | مسؤول الإطلاق والفروع المالكة | `NOT STARTED`؛ لا يُنفّذ قبل R09 |

### فرز العمل حسب إمكانية التنفيذ الآن

- **داخل فرعنا دون انتظار نشر:** فحص أي اختلاف بصري مؤكد، اختبارات المتصفح الآلية والتصحيحات الناتجة، مراجعة تحرير النصوص الثمانية بلغتين، تحسين source regression، جرد ملفات Legacy دون حذفها. يمكن إكمال كل حالة ذات دليل وفحص CI على SHA جديد.
- **يحتاج شخصًا/جهازًا/حسابًا أو بيانات خارجية:** R01 قبول صاحب الموقع، R02 جلسات قراءة، R03 الأجهزة الحقيقية وقارئات الشاشة، R04 قياس Field، R05 إثبات استلام قنوات التواصل، R06 أصول Cases مرخّصة.
- **ليس من اختصاص فرع الإصلاح ولا يُغير هنا:** قرار SEO وWWW، تعديل PR #36/#37/#41، دمج #46/#45 و`main`، DNS، نشر Production وإزالة legacy التي قد تخدم الإصدار القديم.

## 3) خريطة الفروع الحالية وفصل المسؤوليات — تحقق GitHub بتاريخ 2026-10-13

| PR | الرأس المختصر | الهدف | حالة القراءة | الإجراء المطلوب |
|---|---|---|---|---|
| [#46](https://github.com/7eaur/wasltech-/pull/46) | `df7690f2e745` قبل تحديث التوثيق | `integration/site-stabilization-20261010` | Draft, open, `mergeable=true` | يبقى Draft حتى اعتماد التحقق وتجهيز نتيجة الدمج |
| [#45](https://github.com/7eaur/wasltech-/pull/45) | `7366ed3c2dd8` | `main` | Draft, open, mergeable=true | فريق التكامل قبل main |
| [#36](https://github.com/7eaur/wasltech-/pull/36) | `18ca23ec4e12` | `main` | Draft, open, mergeable=true | فريق SEO يحدد مرجع العمل |
| [#37](https://github.com/7eaur/wasltech-/pull/37) | `373c2a0ca942` | `main` | Draft, open, **mergeable=false** وقت الفحص | فريق SEO يعالج حالة التعارض قبل أي Merge |
| [#41](https://github.com/7eaur/wasltech-/pull/41) | `47f1baa4060c` | VNext foundation | Draft, open, mergeable=true | مراجعة الشعار/Loader مستقلة |
| [#42](https://github.com/7eaur/wasltech-/pull/42) | `b460bbe004f2` | `main` | Draft | فريق الخطة |
| [#43](https://github.com/7eaur/wasltech-/pull/43) | `7aad92ffb4f4` | `main` | Draft | فريق Runtime |
| [#44](https://github.com/7eaur/wasltech-/pull/44) | `72b6745fa716` | `main` | Draft | فريق الوسائط |

ملاحظة: `mergeable=true` على GitHub **قابلية دمج تقنية لحظية لا موافقة**، وتشابه الملفات بين الفروع **مؤشر مراجعة وليس تعارضًا مثبتًا**. عند أي تسليم جديد اقرأ رؤوس PRs ثانية.

## 4) الأدلة والروابط وسير الاختبار

1. تحقق الحالة أولًا من [فرع GitHub](https://github.com/7eaur/wasltech-/tree/fix/independent-site-recovery-20261010) و[#46](https://github.com/7eaur/wasltech-/pull/46)، ولا تعتمد SHA محادثة قديمة.
2. للتكرار في Node24: `npm run vnext:verify` (preview build + structure/data)، ثم `npm run vnext:verify:release` (release build + release checks). تشغيل Chromium عبر [GitHub Actions — Capture VNext route matrix](https://github.com/7eaur/wasltech-/actions/workflows/capture-vnext-route-matrix.yml) على SHA مسجل.
3. أحدث فحص Source/Docs للـHEAD السابق: [push #38436026753](https://github.com/7eaur/wasltech-/actions/runs/38436026753) و[PR #38436035428](https://github.com/7eaur/wasltech-/actions/runs/38436035428) نجحا. أحدث مصفوفة route تغطي 76 PNG وaxe/Lab JSON على `9c9cdb73`، [run #38338784657](https://github.com/7eaur/wasltech-/actions/runs/38338784657)، artifact `11786181079` **ينتهي 2026-10-16**. لا يعتبر artifact مرجعًا دائمًا، واحفظ المراجع الهامة/أعد الإنشاء عند اللزوم.
4. HTTP Preview الذي أُثبت: [المعاينة](https://wasltech-k2ew1c6l9-wasl15.vercel.app/) صفحة 200 والرؤوس الأربعة موجودة؛ مسارا 404 عربي/إنجليزي 404؛ ملفات CSS 200. `x-robots-tag: noindex` على Preview أمر مقصود؛ لا تخلطه مع حكم فهرسة Production.
5. سجلات المشاكل والأدلة: `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md` ومراجعها في `docs/audit` على فرع التدقيق؛ `docs/qa/2026-10-13_RESPONSE_HEADERS_AND_LAB_DIAGNOSTICS.md`؛ `docs/qa/FINAL_MEDIA_INVENTORY.md`؛ وتاريخ QA أدناه.

## 5) تعليمات الاستلام والتنفيذ القادم

1. اقرأ بالتسلسل: هذا التقرير → `PROJECT_STATUS.md` → `PROJECT_HANDOFF.md` → `docs/README.md` → `AGENTS.md`، ثم اجلب GitHub HEAD/PR/CI الحقيقي. إذا تعارض توثيق قديم مع حيّ GitHub، قدّم المصدر والاختبار الحديث.
2. **لا تبدأ بإعادة إصلاح ما اجتاز الاختبارات** أو بطلب «الثمان صور النهائية»؛ هي مرفوعة ومحسنة. لا تزل ملفات Legacy عشوائيًا.
3. العمل التالي داخل الفرع حسب الأولوية هو **R01 وR02 وR03** قدر ما تسمح الأدوات والأجهزة، وسجّل لكل عيب `path/locale/viewport → expected/actual → root cause → code/test/evidence → result`. لا تتوسع إلى SEO أو Logo.
4. اختبر R04 بصورة مخبرية إضافية إن توفرت الأدوات، لكن اترك Field p75 مفتوحًا حتى توجد حركة بيانات حقيقية. لا تدّعِ وصول WhatsApp/Email/Instagram حتى يؤكده المستلم.
5. بعد كل تغيير كود: نفّذ Source/Release ثم Matrix، افحص نشر Preview على **نفس SHA**، حدّث هذا المرجع و`PROJECT_STATUS.md` و`PROJECT_HANDOFF.md`. الوثائق وحدها لا تعيد تعريف نتيجة اختبارات برنامج.
6. أوقف الدمج/Production عند R08–R10 إلى أن تحصل موافقة مستقلة موثقة من المالك؛ تبقى #46 Draft على فرع الإصلاح.

**ملخص قرار الفرع:** يمكن تسليم الأعمال البرمجية الحالية للمراجعة على Preview، **لكن لا يمكن إعلان «كل مهام الموقع انتهت»، ولا «أداء حقيقي معتمد»، ولا «جاهز للإنتاج»**. كل المتبقي أعلاه محدد بمخرجات قبول قابلة للإثبات، والملفات التاريخية التالية محفوظة للتتبع.

---

## الأدلة التاريخية المفصلة حتى 2026-10-13 — مرجع زمني، لا تتقدم حالاتها على القسم الحالي


**التاريخ:** 2026-10-13 (Asia/Aden)  
**المستودع:** `7eaur/wasltech-`  
**فرع العمل الوحيد:** `fix/independent-site-recovery-20261010`  
**طلب دمج:** [#46 Draft](https://github.com/7eaur/wasltech-/pull/46) → `integration/site-stabilization-20261010`، و[#45 Draft](https://github.com/7eaur/wasltech-/pull/45) → `main`. **لم يحدث دمج أو نشر رسمي أو تعديل DNS أو فروع SEO/الشعار.**  
**آخر SHA للتطبيق والاختبارات:** `9c9cdb73db69e743e0eda5be1037c8e1886f10e1` (الـHEAD قد يتحرك لاحقًا بتحديثات توثيق فقط).  
**معاينة التطبيق المتحقق منها:** `https://wasltech-jkvs0roe3-wasl15.vercel.app/`، حالة Vercel **READY**.  
**الفرق بين الحالات:** `IMPLEMENTED` ≠ `VERIFIED_PREVIEW` ≠ `VERIFIED_PRODUCTION` ≠ `CLOSED`.

## 2026-10-13 — Live Preview HTTP mismatch found and remediated in branch

The previous checkpoint marked headers **CONFIG VERIFIED** only. Read-only Vercel Preview HTTP inspection on `https://wasltech-jkvs0roe3-wasl15.vercel.app/` and a localized unknown route observed that the actual responses **did not include** `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` or `X-Frame-Options` although these existed in top-level `headers` in `vercel.json`. The localized unknown route correctly returned 404. This is a **real runtime/config mismatch**, not a source-check pass.

**Root cause:** the release uses explicit legacy Vercel `routes` with `handle: "filesystem"` for localized 404s. Under that routing mode, attach the shared headers as a `src: "/(.*)"`, `headers: {...}`, `continue: true` **route before** the filesystem handler. Remove ineffective top-level headers and have `check-source-ownership.mjs` assert the ordering and preserve both 404 fallbacks. Source: Vercel official project configuration docs (2026). No Production/DNS/SEO/Logo change.

**Verification rule:** Re-fetch the *new deployment* HTML, AR/EN 404 and a static asset, confirm HTTP status (200 or 404) and **all four actual response headers**. Only then mark `VERIFIED_PREVIEW`. Code CI success alone is insufficient. If live headers still absent, keep issue OPEN and investigate project-level config instead of asserting success.

### Root-cause correction verification — exact deployment and observed headers

- `5c79956c`: first safe configuration commit, Vercel Preview `https://wasltech-847go1o5z-wasl15.vercel.app/` READY. HTTP requests confirmed four declared headers on Arabic/English document responses and on the static CSS asset; unknown paths responded **404** with localized AR/EN document and the same headers. `X-Robots-Tag: noindex` stays on Preview/404.
- `6aef6002`: updated a *test* in `scripts/check-secondary-legal.mjs` that had hard-coded old `routes` indexes; terminal 404 + header-first filesystem behavior now jointly asserted. Verified [GitHub push #38435559796](https://github.com/7eaur/wasltech-/actions/runs/38435559796) and [PR #38435567455](https://github.com/7eaur/wasltech-/actions/runs/38435567455) **SUCCESS**, Vercel Preview `https://wasltech-fx9wod2f4-wasl15.vercel.app/` READY with HTML **200** + four response headers confirmed.
- Intermediate [5c799 VNext verify #38435349144](https://github.com/7eaur/wasltech-/actions/runs/38435349144) **FAILED on stale test assumptions**, not on deployment response; retained for audit, fixed by `6aef6002`.
- Change status from `CONFIG VERIFIED / HTTP OPEN` to **`VERIFIED_PREVIEW HTTP`**. Still **not Production verified**, do not change release/dns/seo/logo ownership.

## 1. ما أُنجز ضمن هذا الفرع

| الدفعة | التنفيذ والسبب الجذري | الدليل وحالة قبول المصدر |
|---|---|---|
| P0 — ملكية العمل | HEAD حي، فرع معزول وDraft PR، تمييز SEO/Logo/Main والتداخل دون دمج | VERIFIED_PREVIEW للحالة المرجعية |
| P1 — حماية البيانات والتنقل | Planner no-JS لا يرسل البيانات بطريقة GET، تفعيل المدخلات فقط بعد ربط السلوك، بديل تواصل مباشر وقائمة جوال تعمل بلا JS | اختبارات المصدر والمتصفح AR/EN PASS |
| P2 — روابط/404 | روابط المشروع/الخدمة وCTA، صفحة 404 مستقلة باللغتين وحالة Preview HTTP 404 والتحويلات داخل النطاق | VERIFIED_PREVIEW؛ إنتاج ليس ضمن الاختبار |
| P3 — تصميم المصدر | تصحيح CSS Hero الذي كان يخفي CTA موجودة بالـDOM، إزالة القص المفروض على وصف الخدمة، ضبط شبكات Home/Services/Portfolio، Contact/FAQ نصّيان وظيفيًا، الهوية محفوظة | Node24 + bilingual Chromium + لقطات مختارة PASS |
| P4 — محتوى | جميع الخدمات الثمان AR/EN والمخرجات + `<details>` بدون JS، اختيار 4–5 أنواع بصورة قابلة للفتح، منع تكرار الوصف العام، حذف تكرار سؤال الربط بين الأنظمة (FAQ 13→12 مع تحديث Home) | 16 service detail routes + FAQ/Home contracts PASS؛ قبول قراءة زائر حقيقي مفتوح |
| P4 — ملكية المصدر | 22 مصدر CSS runtime + Preview CSS واحد + marker تعليقي، أربعة JS clients لكل منها Owner واحد؛ عدم حذف legacy المنتج قبل قطع الإنتاج | `scripts/check-source-ownership.mjs` PASS؛ legacy historical cleanup BLOCKED |
| P5 — وسائط | صور 8 خدمات + 8 تحريري + Home/About + 14 عمل، WebP وsrcset/sizes وقيود الحجم، الأصول الأصلية محفوظة | media + release quality tests PASS؛ **دليل Case Study مستقل ومفقود** |
| P5 — وصولية | بعد كشف axe `target-size` على روابط Footer الإنجليزية (8 صفحات)، أصلح المالك الواحد في `layout.css`، ومعه `check-shell.mjs`؛ إعلان فلتر Portfolio باسم الفئة، قياسات تباين عيّنة | axe 8 route families × 2 locales: **0 violations** في أحدث run؛ ليست شهادة WCAG |
| P5 — أداء وبيئة | Emulated 320–1440، فحص no-JS/keyboard/reduced-motion/CPU 4x ونتائج LCP/CLS محلية، browser reflow ما يعادل 200/400% على عرض مرجعي 1280 | PASS للمحاكاة؛ real zoom/field CrUX/INP **OPEN** |
| P5 — رؤوس الحماية | أُصلح ترتيب `routes` بعد اكتشاف غياب رؤوس الحماية عن HTTP الحقيقي؛ ذات الأربع قيم + 404 AR/EN محفوظة | **VERIFIED_PREVIEW HTTP** على نسختي `5c799`/`6aef`، Production مفتوح |
| P6 — Release | تدقيق GitHub PR overlap، توثيق كل التبعيات دون تجاوز صلاحيات الفروع | **BLOCKED/OWNER REVIEW**؛ لا Production إطلاقًا |

## 2. نتائج تشغيل محددة لا تُنسب إلى إنتاج حقيقي

- Commit `00651e8c`: خدمة التطبيق والأجزاء الطويلة في `<details>`، [Chromium #38187340370 PASS](https://github.com/7eaur/wasltech-/actions/runs/38187340370).
- Commit `af46af71`: ملكية JS client مرتبطة بمصدر HTML واحد؛ GitHub VNext [#38187398707](https://github.com/7eaur/wasltech-/actions/runs/38187398707) PASS.
- Commit `a5581e66`: تشغيل axe لأول مرة أظهر عيبًا حقيقيًا في روابط Footer EN (8 حالات في 8 مسارات)، [#38338005768 FAILED](https://github.com/7eaur/wasltech-/actions/runs/38338005768) على معيار الوصولية.
- Commit `b7b17cc6`: عالج targets من CSS المالك، وأزال FAQ duplicate؛ [#38338401184 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338401184)، axe AR/EN 0 في العينة.
- Commit `9c9cdb73db69e743e0eda5be1037c8e1886f10e1`: أضاف رؤوس الحماية وLCP/CLS المخبرية؛ [VNext push #38338784632 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338784632)، [VNext PR #38338789292 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338789292)، [bilingual route matrix #38338784657 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338784657).
- Latest artifact **#11786181079** contains **76 full-page PNG captures + `accessibility-audit.json` and `lab-diagnostics.json`**; scheduled expiry **2026-10-16**; not permanent source or manual acceptance.
- `accessibility-audit.json`: **0 automated violations** over selected Home/Services/App/Portfolio/Contact/Planner/FAQ/Privacy pages, AR+EN at 390px. Axe is an automated sample and does **not** cover all WCAG criteria or real screen readers.
- `lab-diagnostics.json`: **one synthetic local run**, 390px, modeled 180ms RTT and 4x CPU: DOM **1197ms**, LCP **1476ms**, CLS **0.031262**, max startup task **232ms**, max scroll task **58ms**. Not field LCP/INP/CLS, not speed guarantee, not real mobile measurements.
- 320/360/390/768/1024/1366/1440 AR/EN route families and full indexable routes at 390/1440, keyboard interactions, Portfolio show-more/filters, no-JS Planner, FAQ/service native `<details>`, computed selected contrast, and 640/320 effective reflow tests pass. 640/320 is **not physical browser zoom**.
- Screenshot review: inspected 390 Home/Contact/FAQ/Services/Portfolio/App and 1440 Home representative captures, plus contact-sheet overview of route families. No blocking crop/overlap observed in those samples; **not 100% human visual approval of every image**. Baseline full-page heights (older `f9dd09`, not speed metrics): Home 6841px AR / 7407px EN, Services 3513/3987, Portfolio 3627/3675; long Home is an intentional 8-service/featured work/approach/process/FAQ journey, not a diagnosed speed defect.

## 3. الفروع المتوازية وملكية الدمج — تم فحص HEAD في 2026-10-13

| PR | الحالة/المسؤولية | الملفات المتداخلة مع قائمة PR46 | القرار |
|---|---|---:|---|
| #36 — SEO v2 | Draft→main | 4 | REVIEW BEFORE MERGE |
| #37 — SEO | Draft→main، GitHub `mergeable=false` وقت الفحص | 9 | BLOCKED/OWNER REBASE؛ هذه ليست موافقة على دمج |
| #41 — Logo | Draft→VNext foundation | 1 | REVIEW BEFORE MERGE |
| #42 — plan | Draft→main | 3 | مالك الخطة |
| #43 — runtime | Draft→main | 10 | مراجعة مشتركة إن تقرر دمجه |
| #44 — media | Draft→main | 1 | تأكد من عدم إعادة رفع ملفات سبق استلامها |
| #45 — integration | Draft→main | 14 | PR46 مبني عليه؛ لا تمثل المشاركة conflict مؤكدًا |
| #46 — recovery | Draft→integration | — | **فرعنا الوحيد؛ لا دمج آلي** |

الأرقام أعلاه من تقاطع قوائم الملفات التي غيرتها PRs، وليست إثبات Git merge conflict. قد تتغير HEADs، ولذلك يلزم جلبها من جديد قبل أي Merge.

## 4. الأعمال التي لا يجوز الادعاء بأنها «مكتملة» دون طرف خارجي

| البوابة | ما ينقص بالضبط | مالك الدليل / شرط القبول |
|---|---|---|
| UXR-07 + WT-IA-12/57/72 | لقطة حقيقية لنظام منشور أو نسخة عمل + وصف الدور والسياق وحق استخدام الصورة + نتيجة قابلة للإثبات إن ذُكرت | صاحب المشروع؛ ممنوع اختلاق حالة/رقم/شهادة |
| UXR-03/08 — مسح فعلي | تجربة مستخدم يتوصل إلى المخرجات والتواصل خلال مهمة محددة، وملاحظات قراءة 390/1440 | صاحب المنتج/مراجع UX بشري؛ لا تحسب طول PNG مؤشر الأداء |
| WT-IA-27/74 + UXR-12 | **تكبير Browser حقيقي 200% و400%، NVDA/VoiceOver، Safari على iPhone وChrome/Android**، اختبار tab order ومجالات تلامس يدويًا | جهاز حقيقي/مراجع وصولية؛ CI Chromium المعادل ليس بديلًا |
| WT-IA-28/75 + WT-010/011/012 | field Core Web Vitals **LCP p75 / INP p75 / CLS p75**، cold cache وslow network على المستخدمين المستهدفين | RUM/CrUX بعد الإطلاق أو جلسة اختبار جهاز وشبكة موثقة |
| WT-IA-32 | نجاح **استلام** رسالة واتساب والبريد وصحة حساب Instagram بالفعل، لا مجرد صحة الرابط | مالك أرقام وحسابات التواصل |
| WT-IA-26 | فحص HTTP headers الفعلية من نسخة **Production** فقط (Preview مثبتة) | **Preview VERIFIED 2026-10-13**؛ Production pending cutover permission |
| WT-IA-25/38 + WT-015/020 | مسح ملفات legacy وحذف/أرشفة ما ثبت عدم استخدامه فعليًا في Production | مالك الإصدار بعد Cutover؛ إبقاؤها الآن حماية للموقع الحالي |
| WT-IA-30 | اختيار وتوحيد WWW vs apex redirect مع canonical/hreflang/OG/sitemap، وفحص HTTP بعد الدمج | مسؤول SEO/domain؛ **ليس عمل فرع recovery** |
| P6 | نتيجة Merge Preview تشمل #45/#46 وSEO/Logo/الأصول، اعتماد العميل/UAT، إذن صريح بالدمج والنشر، Production SHA/HTTP smoke | مالك release/فروع PR الأخرى |

## 5. حالة القرار النهائي

**ما يمكن غلقه داخل نطاق الفرع:** إصلاحات المصدر المنفذة + فحوص Node24 + Playwright/axe/reflow/lab + جرد الوسائط المصدرية + توثيق العمل/الملكية: **VERIFIED_PREVIEW / SOURCE QA COMPLETE** للـSHA المحدد أعلاه.

**ما لا يُغلق:** قبول التصميم من صاحب الموقع، الأجهزة الحقيقية، field performance، حقوق/صور المشروع الحقيقية، استقبال رسائل التواصل، توافق SEO/logo، تعارض Canonical المضيف الرئيسي، حذف legacy المنتج، الدمج والنشر الرسمي: **OPEN / NEEDS EXTERNAL EVIDENCE / BLOCKED** حسب الجدول.

لا تدعِ أن PR #46 أو الموقع الرسمي «مكتمل للإطلاق» قبل تحقق تلك البوابات. لا تغيّر `main` أو DNS أو PR #36/#37/#41، ولا تحذف/تدمج الفروع. يمكن تسليم الفرع للمراجعة أو إتمام الاختبارات الخارجية لاحقًا دون إعادة إصلاح المراحل المنفذة.

**المراجع التشغيلية:** `PROJECT_STATUS.md`، `PROJECT_HANDOFF.md`، `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md`، `docs/qa/FINAL_MEDIA_INVENTORY.md`، `AGENTS.md`.
