# وصل تك — تقرير المرحلة الثالثة: تحسين القراءة والوصول والتفاعل

**التاريخ:** 2026-10-11 (Asia/Aden)  
**المستودع:** `7eaur/wasltech-`  
**فرع التنفيذ المنفصل:** `fix/independent-site-recovery-20261010`  
**آخر SHA تشغيلي خضع للاختبارات:** `862dd3735be3bbe38172dfed61623fd8172918f2`  
**PR:** [#46](https://github.com/7eaur/wasltech-/pull/46) (Draft) إلى `integration/site-stabilization-20261010`، **ليس main**.  
**حالة Production:** لم تتغير من فرعنا؛ لا merge، ولا DNS، ولا تعديل فروع SEO/AI Search #36/#37 أو شعار التحميل #41.  
**المرجع السابق:** [تقرير Stage 2](2026-10-11_RECOVERY_STAGE2_AND_REMAINING.md) والخطة `docs/audit/2026-10-10_MASTER_EXECUTION_PLAN_AND_ACCEPTANCE.md` في فرع التدقيق المستقل.

## 1. التغييرات الجديدة التي نُفِّذت

| البند | التغيير | لماذا؟ | مصدر الاختبار |
|---|---|---|---|
| WT-IA-65/53 — تفاصيل الخدمة | إضافة Navigation داخل الصفحة: المخرجات، كيف نعمل، الأعمال المرتبطة إن وجدت، والأسئلة. تغيير كل وصف مخرجات إلى disclosure أصلي `<details><summary>`، أول مخرج مفتوح ليعطي نموذجًا؛ جميع العناوين ظاهرة ويمكن فتح أي وصف بدون JavaScript. | الوصول السريع للمعلومة دون قطع أي وصف أو إضافة مكتبة JS. | `scripts/check-service-details.mjs` + Playwright keyboard AR/EN |
| WT-IA-10 — تحويل الجوال | إضافة رابطين واضحين «تواصل معنا» و«ابدأ مشروعك» داخل قائمة الهاتف، وكذلك fallback عند تعطيل JavaScript. **لا إعادة أزرار Hero الداخلية**. | بعد إخفاء CTA الهيدر على الجوال، لم يعد بدء المشروع متاحًا قرب أعلى الصفحة. | `scripts/check-shell.mjs` + browser route QA |
| WT-IA-60 — FAQ | تجميع مجموعات الأسئلة في 4 مناطق خفيفة عوض شرائط خطوط دون شخصية، مع رقم فئة وتباين دافئ محدد؛ إصلاح padding باتجاه `inline-end` حتى لا تتراكب علامة + مع النص بالعربية/الإنجليزية. | تمييز الفئة بسرعة، والمحافظة على Accordion أصلي يعمل بالكيبورد بدون JS. | `scripts/check-secondary-legal.mjs` + Playwright keyboard FAQ AR/EN |
| WT-IA-58 — المقالة | تحويل المقدمة السابقة في Sidebar منفصل إلى بداية متصلة داخل عمود قراءة بعرض أقصاه 52rem، مع accent بسيط ثم العناوين والفقرات. | قراءة طبيعية مثل مقال، لا نص منفصل على حافة الشاشة. | `scripts/check-secondary-legal.mjs` + visual screenshots AR/EN |
| WT-IA-67/16 — الهاتف | جعل عمود متطلبات/تفاصيل الوظائف واحدًا في المقاسات الضيقة، بدلاً من نص مقسم على عمودين عند 390px، وضبط حجم النص. | تقليل التكسّر وضيق القراءة. | `vnext:verify` + matrix 320..1440 |
| WT-IA-74 — keyboard / labels | إعطاء landmark `main` `tabindex="-1"` لتفعيل Skip to Main Content فعلًا، إضافة `role="group"` لفلاتر المشاريع. اختبارات انتقال Enter إلى روابط الخدمة، فتح/إغلاق Details/FAQ، وعمل Skip Link بالعربية والإنجليزية عند 320px. | لا تقتصر الوصولية على الشكل والصور. | Playwright matrix + static contract |
| WT-IA-38/28 — CSS | إزالة 18 rule قديم من Hero CSS بعدما أثبت المصدر أن المالك الحالي هو `hero-pages.css` و`hero-responsive.css`. **لم نرفع حد CSS gzip**. | التخلص من قواعد تتغلب عليها طبقات أخرى وحماية أداء النقل. | GitHub Node24 quality budget |
| WT-IA-24 — نظافة المستودع | تحسين `.gitignore` لحظر `node_modules` و`dist` ونتائج الاختبارات و`.env` والأسرار المحلية والمجلدات المؤقتة، دون حذف ملفات فعلية. | حماية المصدر من إضافة build أو secrets بالخطأ. | Git diff على فرع التنفيذ |

## 2. الاختبارات والأدلة المربوطة بالكود

**SHA التشغيلي المقاس `862dd3735be3bbe38172dfed61623fd8172918f2`:**

- [Node24 VNext verify #38169567407](https://github.com/7eaur/wasltech-/actions/runs/38169567407): **SUCCESS**. Preview + Release build، data/links/media/quality.
- [Browser Matrix #38169567365](https://github.com/7eaur/wasltech-/actions/runs/38169567365): **SUCCESS**. AR/EN route families على 320/360/390/768/1024/1366/1440، فحص العرض الأفقي والسجلات، JS/no-JS، تفاعل القائمة والفلاتر والنموذج، اختبارات Enter للـdisclosures والـFAQ، Skip Link، slow CPU/network، reduced motion.
- Screenshot artifact **#11713158054** (72 PNG، `390px mobile` و`1440px desktop`) ينتهي بتاريخ **2026-10-14**؛ رابط [نتيجة التشغيل](https://github.com/7eaur/wasltech-/actions/runs/38169567365).
- جودة النقل: **CSS gzip = 16,306 bytes (الحد 16,384)**، **JS gzip إجمالي = 4,224 bytes (الحد 8,192)**؛ الميزانية موجودة وليست دليل field performance.
- Vercel Preview `https://wasltech-rhbxlk98t-wasl15.vercel.app/`، الحالة **READY** وSHA `862dd...`؛ لا يساوي إنتاج الموقع الرسمي.
- مراجعة 390px للصور: FAQ واضحة على هيئة مجموعات فئات، مقال واحد متصل للتصفح، عنصر الـservice jump موجود بعد قسم القرار. **صفحة خدمة الويب حوالى 6,452px** بعد التحسين؛ طويلة نسبيًا، لكن الوصول للمخرجات والأسئلة صار مباشرًا. لا نعلن أنها أصبحت قصيرة بالكامل.

## 3. ما لم نغلقه — موافقات وقياسات حقيقية

1. **WT-IA-30 — DNS / canonical:** الإنتاج الحالي يوجه `www → apex` برمز 308، بينما صفحات `apex` تعلن canonical على `www`. مسؤولية فريق SEO/الدومين، لا تغيير هنا حتى توحيد مصدر الحقيقة.
2. **WT-IA-12/57/72 — الأدلة الفعلية:** صور الشاشات والنتائج الموثقة لكل مشروع ودور وصل تك الحقيقي؛ نحتاج مصادر وصلاحيات، لا اختلاق نتائج أو شهادات.
3. **WT-IA-28/75 — Field Core Web Vitals:** لا يوجد قياس RUM موثوق أو اختبار فعلي على عدد كافٍ من أجهزة المستخدمين. تحتاج LCP/INP/CLS وslow cellular/device واقعي.
4. **WCAG وZoom:** اختبار 320px تم بنجاح ويمكنه **محاكاة reflow CSS** على 1280@400%؛ **لا يكفي** لإعلان أن تكبير المتصفح الفعلي 200/400% أو قارئ الشاشة اجتاز. يلزم اختبار يدوي/تقني مختلف.
5. **WT-IA-32:** التأكد من وصول بريد التواصل الحقيقي والروابط الاجتماعية على الإنتاج والرقم بمساعدة صاحب الحسابات.
6. **WT-IA-46:** اللقطات مؤقتة؛ يُنصح تثبيت عينات معتمدة طويلة المدى في الوثائق قبل حذف Artifact. لا نقول إن 72 لقطة تعني قبولًا بصريًا نهائيًا لجميع المواقف.
7. **P6 الدمج:** PR #46 → #45 فقط بعد مراجعة، ثم الدمج التدريجي لـSEO واللودر بإشراف مسؤوليها؛ QA Production بموافقة المستخدم.

## 4. Gate decision

**P1/P2 CORE VERIFIED IN PREVIEW، P3/P4 DESIGN AND CONTENT IMPROVED، P5 AUTOMATED PASS، P6 RELEASE BLOCKED.**  
**لا يوجد أي Merge إلى `main` أو ترويج إلى Production من هذا العمل.** لا تُغيّر حالات التذاكر إلى `CLOSED` إنتاجيًا بناءً على CI وحده.
