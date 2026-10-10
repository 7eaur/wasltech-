# وصل تك — سجل التدقيق المستقل الشامل (Source-level + Preview visual evidence)

**التاريخ:** 2026-10-10  
**المستودع:** 7eaur/wasltech-  
**فرع التدقيق (توثيق فقط):** audit/independent-root-cause-register-20261010  
**أساس الفحص:** main = 1cb5d939b58c1e03ff63fce5b27d476d116e7a90  
**مرشح الإصلاح:** integration/site-stabilization-20261010 = 971c7d3164bc66d0a1704ee82395ffca64f07138، PR #45 (Draft)  
**Production المحدد من Vercel:** c775391550e8359eda4d4eb4ec47b3dba23aa419، READY، ولم يثبت دمج PR #45 إلى main.  

> هذا سجل تدقيق مستقل، وليس إعلان اكتمال التنفيذ أو تصريحًا لدمج/حذف/نشر شيء. يحفظ سجل WT القديم دون اعتبار حالاته صالحة تلقائيًا بعد تغيّر GitHub وVercel. يحتوي المعرفات WT القديمة وWT-IA من مراجعة 2026-10-10 ومعرفات جديدة WT-IA-36+. يوثق كل عيب مستقل مرة واحدة ويشير إلى المتداخل بدلاً من مضاعفة العد.

## A. طريقة إثبات الحالة

- **CODE-CONFIRMED:** ملاحظة مثبتة من مصدر محدد ورأس commit معلوم. إثبات سلوك المصدر ليس بالضرورة إثبات انكسار في المتصفح/الإنتاج.
- **SCREENSHOT-CONFIRMED (PREVIEW):** تمت مشاهدة لقطة Playwright مأخوذة من GitHub Actions للفرع التكاملي؛ لا تُنسب إلى Production.
- **INTEGRATION-IMPLEMENTED:** يوجد تغيير على PR #45 وفحص CI أخضر للـSHA المذكور؛ ليس RELEASED ولا CLOSED.
- **VISUAL-RISK:** توجد قاعدة أو تصميم يستدعي اختبارًا بصريًا ولا يُحكم بانكساره قبل التحقق.
- **LIVE-UNVERIFIED:** HTTP/تدفق تفاعلي/أجهزة فعلية/قياسات RUM غير مفحوصة في هذا التدقيق.
- **PROPOSED:** تحسين تحريري أو UX ليس تصحيح bug مؤكد.
- **CLOSED:** إصلاح مثبت على رأس الهدف + اختبار موجه + اعتماد بصري/وظيفي + تطابق الإنتاج إن كان متعلقًا بالمنشور.
- **P0:** خصوصية، انقطاع وظيفة حرجة أو مانع إطلاق؛ **P1:** استخدام/محتوى/ثقة؛ **P2:** جودة وتناسق وتطوير؛ **P3:** تحسين اختياري.

## B. إعادة تقييم سجل WT-001 إلى WT-020 المرسل من العميل

| القديم | الحالة في السجل القديم | التدقيق الحالي الفعلي | القرار التالي |
|---|---|---|---|
| WT-001 | VERIFIED plan branch only | ملفات الحالة القديمة في main لم تُستبدل؛ خطة PR #42 توثيقية | OPEN: توحيد الحالة على رأس العمل النهائي بعد الاعتماد |
| WT-002 | VERIFIED plan branch only | استقلال PRs: SEO #36/#37، Logo #41، Stability #42–#45 | OPEN: خريطة تعارضات قبل الدمج، لا نلمس الفروع المستقلة |
| WT-003 | 2/8 صور، OPEN | مقارنة main→PR45 تثبت وجود ملفات WebP الثمانية | INTEGRATION-IMPLEMENTED؛ لم تصل production |
| WT-004 | أصول PNG مفقودة | PR45 يحوي 8 PNG جديدة ومانيفست/فحص hashes؛ CI media pass | INTEGRATION-IMPLEMENTED؛ قبول الصور بصريًا قبل الإغلاق |
| WT-005 | ENOENT + staging | PR45 يستكمل النسخ ويتضمن cleanup؛ VNext verify + media CI success | INTEGRATION-IMPLEMENTED؛ إعادة تحقق production بعد الدمج |
| WT-006 | CTA الرئيسية غير صحيحة | الخطأ ثابت على main، والتصحيح في PR45 | INTEGRATION-IMPLEMENTED؛ اختبار كل النصوص/الأزرار |
| WT-007 | 404 غير مكتملة | PR45 يتضمن صفحة مستقلة؛ صور AR/EN mobile/desktop موجودة؛ HTTP unknown route غير مقاس خارجيًا | SCREENSHOT-CONFIRMED PREVIEW؛ LIVE-UNVERIFIED |
| WT-008 | مسارات وتفاعل | Playwright CI يغطي عائلات من المسارات والنموذج؛ ليس كل تكوين/سيناريو | PARTIALLY TESTED؛ اختبار no-JS/privacy ضروري |
| WT-009 | Visual QA | Artifact 11677911173 يحوي 72 PNG للـPreview؛ فحص بشري جزئي اكتشف orphan step | PARTIALLY REVIEWED؛ لا إغلاق Production |
| WT-010 | إتاحة المحتوى بالتحميل الأول | اختبار degraded runtime في GitHub CI؛ لا قياس site حقيقي cold load/loader | OPEN |
| WT-011 | الخط/CLS | Google Fonts خارجية؛ لا قيم Core Web Vitals حقيقية في التقرير | OPEN |
| WT-012 | الصور/LCP/INP | وزن WebP يخضع لاختبار؛ غياب RUM وsrcset responsive | OPEN |
| WT-013 | build+release | CI الثلاثة ناجحة لـ PR45 SHA 971c7d31؛ ليس ضمان deployment production | INTEGRATION-VERIFIED؛ LIVE-UNVERIFIED |
| WT-014 | Node غير مثبت | package.json مثبت على 24.x داخل PR45 فقط؛ main يستعمل >=24 | INTEGRATION-IMPLEMENTED |
| WT-015 | جرد الفروع | عدة فروع قديمة متوازية، main protected=false | OPEN؛ لا حذف تلقائي |
| WT-016 | الدومين غير موجود في مشروع Vercel | **هذه المعلومة قديمة**: الآن كلا www وapex ضمن wasltech، verified=true، get_domain_config misconfigured=false | DOMAIN ASSOCIATION VERIFIED؛ إعادة التوجيه بين المضيفين وHTTP تحتاج تحقق |
| WT-017 | prod SHA ≠ main | prod=c775391 وmain=1cb5d939 (بعده تغييرات QA)، PR45 منفصل | OPEN لبوابة الإصدار الجديد |
| WT-018 | تحويلات الروابط القديمة | root HTML القديم موجود بالمستودع لكن build يعتمد src؛ rewrite/redirect قواعد legacy غير ظاهرة في vercel.json | LIVE-UNVERIFIED |
| WT-019 | QA النهائي | لقطات Preview موجودة، لكنها ليست اختبارًا يدويًا لكل التفاعلات أو no-JS أو إنتاج | OPEN |
| WT-020 | handoff | خطط متداخلة + حالات ليست محدثة على main | OPEN إلى حين اعتماد هذا السجل وخطة الإصلاح |

**الأدلة الحية:** GitHub PR #45 draft/head 971c7d31؛ CI الثلاثة Completed/success (runs 38073282108/100/131)؛ Vercel list_project_domains يظهر www.wasl-tech.com وwasl-tech.com verified true وredirect=null؛ main branch protected=false. معلومات العقد القديمة لا تُنسخ كحقائق راهنة.

## C. ترحيل تدقيق 35 فجوة مستقلة سابقًا — WT-IA-01..35

المعرفات التالية محفوظة لتستمر أي مناقشة مستقبلية دون فقدان المشكلة. ليست كلها bugs؛ بعضها مخاطر أو تحسينات:

| ID | درجة/إثبات | القضية الموجزة | المصدر / التداخل |
|---|---|---|---|
| WT-IA-01 | P1 CODE; PR45 | نص CTA الرئيسية لا يطابق المسار (AR/EN) | src/pages/home.js + src/data/pages.js؛ WT-006 |
| WT-IA-02 | P1 CODE/UX decision | إخفاء أزرار Hero الداخلية عالميًا بالـCSS | src/styles/hero-responsive.css |
| WT-IA-03 | P1 CODE | عناوين مخرجات خدمة المواقع لها أوصاف متبادلة غير مطابقة | src/data/services.js؛ مراجعة AR/EN وثماني خدمات |
| WT-IA-04 | P1 CODE; PR45 | صفحة 404 القديمة مزدحمة في main | src/pages/not-found.js؛ WT-007 |
| WT-IA-05 | P1 RELEASE | حلول preview/PR45 لا تعني إصلاح Production | GitHub main/PR45/Vercel |
| WT-IA-06 | P2 CODE; PR45 partly | تكرار/مؤقتات صور hero بين صفحات مختلفة | src/config/hero-media.js؛ WT-003 |
| WT-IA-07 | P1 CODE+SCREENSHOT | 4 خطوات في 3 أعمدة بـ1440px؛ البطاقة الرابعة منفردة | src/styles/home.css + src/pages/home.js |
| WT-IA-08 | P2 VISUAL | خطوط مساعدة 10–12px صعبة القراءة في مناطق صغيرة | src/styles/hero-home.css, hero-pages.css, layout.css |
| WT-IA-09 | P2 CODE | line-clamp 3 يخفي جزءًا من وصف الخدمة | src/styles/hero-pages.css |
| WT-IA-10 | P1 CODE/UX | CTA الهيدر مخفية على الجوال مع إخفاء CTA بعض Hero | src/styles/layout.css + hero-responsive.css |
| WT-IA-11 | P1 CODE | بطاقات أعمال مرتبطة بالخدمات لا تفتح المشاريع مباشرة | src/pages/service-detail.js، MediaCard بلا href |
| WT-IA-12 | P2 PROPOSED | دراسات حالة بصور/أدلة تنفيذ محدودة | src/pages/project-detail.js، src/data/projects.js |
| WT-IA-13 | P2 CODE/EDITORIAL | H1 عام (kicker) وH2 وصفي في عدة صفحات | services/portfolio/contact/faq وغيرها؛ تدقيق SEO مستقل |
| WT-IA-14 | P2 VISUAL | قواعد cover/crop مشتركة قد تقص عناصر مفيدة | src/styles/hero-pages.css |
| WT-IA-15 | P2 CODE/UX | إخفاء وصف بطاقات الخدمات في الرئيسية على الجوال | src/styles/components.css |
| WT-IA-16 | P2 A11Y RISK | min-width:20rem يمكنه كسر إعادة التدفق في 320px أو عند التكبير | src/styles/base.css |
| WT-IA-17 | P2 PERF RISK | كل HeroMedia eager/high دون سياسة قياس LCP | src/components/HeroMedia.js |
| WT-IA-18 | P2 PRODUCT | لا يوجد إرسال lead فعلي؛ واتساب يحتاج إكمال من المستخدم | src/client/project-planner.js؛ لا ندعي أن المستخدم أرسل |
| WT-IA-19 | P2 EDITORIAL | تقارب أسئلة FAQ وعبارات متكررة | src/data/faq.js؛ يحتاج مراجعة تحريرية |
| WT-IA-20 | P2 EDITORIAL | ادعاءات احتراف/مرونة عامة أكثر من أدلة موثقة | src/pages/home.js |
| WT-IA-21 | P1 CODE | CTA أخرى «تواصل» ترسل إلى مخطط مشروع لا تواصل مباشر | src/pages/services.js؛ تدقيق mapping |
| WT-IA-22 | P1 REPO | main unprotected=false | GitHub branches/main |
| WT-IA-23 | P2 REPO | كثرة فروع وPRs متوازية وعدم جرد الاندماجات | GitHub branch list; WT-015 |
| WT-IA-24 | P2 REPO | gitignore يحتوي .git فقط | .gitignore |
| WT-IA-25 | P2 REPO | بقايا صفحات/CSS/JS وأصول legacy بجانب src الحقيقي | tree/main و scripts/build.mjs |
| WT-IA-26 | P2 SECURITY RISK | vercel.json لا يفرض headers؛ افحص الرؤوس أولًا | vercel.json (لا نعني ثغرة مؤكدة) |
| WT-IA-27 | P1 QA | اختبارات مصادر وبناء لا تغطي كل رحلة إنتاج أو axe/zoom | scripts/check-*.mjs, workflows |
| WT-IA-28 | P2 PERF RISK | اعتماد CSS موحد كبير وخطوط Google خارجية | src/templates/document.js, scripts/build.mjs |
| WT-IA-29 | P2 PERF RISK | reveal يتأخر لما بعد load/idle، تجنب تراجع الرؤية | src/client/motion.js |
| WT-IA-30 | P1 LIVE-UNVERIFIED | site.origin www بينما لا redirect مخصص ظاهر بين النطاقين | src/config/site.js, Vercel domains؛ WT-016 |
| WT-IA-31 | P2 OWNERSHIP | أعمال SEO في PR #36/#37 مستقلة ولم تُدمج | مراجعة وعدم تعديل فروعها |
| WT-IA-32 | P1 LIVE-UNVERIFIED | التحقق من استقبال البريد وعمل social links لا يكفي الكود | src/config/site.js, footer |
| WT-IA-33 | P2 A11Y RISK | HeroMedia alt فارغ لجميع ترويسات داخلية (زخرفي فقط إذا لا معلومات) | src/config/hero-media.js |
| WT-IA-34 | P2 MEASUREMENT | لا دليل قابل للقياس هنا عن leads أو تحول CTR | لا تفعيل تتبع دون موافقة |
| WT-IA-35 | P1 EVIDENCE | QA إنتاج بصري/HTTP/مقاييس شبكة لم يكن مثبتًا | تحسّن دليل Preview الآن، لا يثبت Production |

## D. اكتشافات إضافية متعلقة بالجذور والترقيعات — WT-IA-36..46

| ID | الشدة والحالة | العيب الحقيقي / الفرضية | الدليل المحدد | اتجاه الحل الجذري واختبار الإغلاق |
|---|---|---|---|---|
| WT-IA-36 | **P0 CODE-CONFIRMED** | نموذج بدء المشروع بدون JavaScript يمكن أن يرسل الاسم والهاتف والتفاصيل في عنوان URL بطريقة GET رغم عبارة «لم يتم إرسال بيانات»؛ form بدون action/method وبخاصية novalidate وزر submit | src/pages/project-planner.js + src/client/project-planner.js | تأمين no-JS fail-closed أو fallback آمن لا يضع البيانات في URL؛ اختبار تعطيل JS وإرسال حقل تجريبي وتأكيد صفر query params وnetwork leaks |
| WT-IA-37 | **P1 CODE-CONFIRMED** | اختبارات مخطط المشروع تمنع method=post/action لكنها لا تمنع مسار GET الافتراضي ولا تفحص JS disabled؛ اختبار أخضر مع مسار بيانات غير آمن | scripts/check-contact-planner.mjs + .github/workflows/capture-vnext-route-matrix.yml | صياغة invariant «no personal input in URL» واختبار E2E محلي no-JS ومقارنة نص سياسة الخصوصية مع السلوك |
| WT-IA-38 | **P1 CODE-CONFIRMED** | إعادة تغطية CSS للـHero أربع مرات: base/page ثم hero-home/pages/responsive ثم text-flow؛ قواعد إخفاء متأخرة بدل إصلاح المكوّن | scripts/build.mjs cssSources + src/styles/{home,hero-home,hero-pages,hero-responsive,text-flow}.css | ترتيب طبقات CSS صريح لكل component وإزالة overrides الزائدة تدريجيًا مع screenshot regression؛ لا إضافة display:none أخرى |
| WT-IA-39 | **P1 SCREENSHOT-CONFIRMED PREVIEW** | في الرئيسية/كمبيوتر 1440، بطاقة «نطلق وندعم» في سطر وحيد أسفل 3 خطوات، مع مساحة كبيرة غير متوازنة | screenshot home-ar-desktop-1440.png، Artifact 11677911173 | grid 4 أعمدة/Timeline حقيقي بحسب المحتوى، لقطات 1024/1366/1440 وبالإنجليزية |
| WT-IA-40 | **P2 SCREENSHOT-CONFIRMED PREVIEW** | قسم «ما يميز طريقة عملنا» تظهر 5 ميزات في صف وواحدة منفردة بالثاني على عرض 1440، يولّد فراغًا وتشويشًا بالتوازن | screenshot home-ar-desktop-1440.png، src/styles/home.css (.home-why__grid auto-fit minmax) | تخطيط 3x2 متزن/عدد أعمدة صريح عند هذا المقاس؛ فحص الصيغ الإنجليزية |
| WT-IA-41 | **P1 INTEGRATION PATCH-RISK** | 404 إنجليزية للمسارات المفقودة تعتمد على كود inline يبدّل النص/اللغة client-side داخل وثيقة 404 عربية؛ عند JS disabled تبقى عربية | src/pages/not-found.js على PR45، englishFallback | تحديد fallback HTTP حقيقي مستقل حسب المسار (server/edge إن تدعمه منصة النشر) أو قبول صريح للحالة مع اختبار HTTP/status/lang عند no-JS؛ تجنب redirect 200 خاطئ |
| WT-IA-42 | **P2 A11Y CODE** | scrollIntoView مع behavior smooth يعمل حتى عند prefers-reduced-motion:reduce | src/client/project-planner.js في submit/edit | respect matchMedia للـreduced-motion؛ keyboard+motion tests |
| WT-IA-43 | **P1 QA GAP** | CI route-matrix تراجع عينة: خدمة web واحدة، مشروع wasl واحد، مقالة واحدة في القائمة الأساسية؛ لا تغطي جميع التفاصيل الفريدة/تداخل العناوين | .github/workflows/capture-vnext-route-matrix.yml routeFamilies | Matrix data-driven لكل 8 خدمات وكل صفحات المشاريع والمقالات المنشورة مع عينات أحجام/لغات؛ لا تكرر الفحص اليدوي بلا أولوية |
| WT-IA-44 | **P2 RELEASE GAP** | Workflow VNext verify يخضع لمرشح PR paths لا يشمل assets/**؛ قد تنجح تغييرات صور بدون تشغيل كامل verify، مع وجود media workflow إضافي على PR45 | .github/workflows/vnext-verify.yml ومقارنات PR45 | توحيد مدخلات الاختبارات بحسب الملفات المؤثرة والتحقق على merge HEAD مع artifact/data integrity |
| WT-IA-45 | **P3 CODE** | سنة الفوتر تحسب أثناء build الثابت (new Date)، ولا تتغير في أول يناير إلا مع إعادة بناء | src/components/Footer.js + scripts/build.mjs | تقرير ما إذا يجب جعلها بيانات مستمرة أو جدولة build بداية السنة؛ اختبار السنة عند بيئة البناء |
| WT-IA-46 | **P2 EVIDENCE/GOVERNANCE** | لقطات Playwright Artifact مؤقتة تنتهي 2026-10-13؛ لا يجوز وصف «Visual QA نهائي» عند غياب تقرير إنساني قبل/بعد محفوظ | GitHub Actions run 38073282131، Artifact 11677911173 | حفظ لقطات مهمة ودليل المعاينة المعتمد خارج artifact محدود الأجل، مع صفحة وسجل وتاريخ وحجم الشاشة وقرار قبول |

## E. خطة العمل الجذرية وتبعياتها

| دفعة | المتطلبات | المخرجات المطلوبة |
|---|---|---|
| A — منع الأذى الوظيفي | WT-IA-36/37، WT-006 وWT-IA-01/21، WT-IA-11 | GET/no-JS آمن، CTA مطابقة لمعانيها، روابط دراسات الحالة قابلة للنقر، اختبارات سلوك |
| B — منع الترقيع البصري | WT-IA-38/39/40، WT-IA-02/08/09/10/14/15 | نموذج Hero وGrid مضبوط على مصدر CSS واحد، دون سلاسل override، صور AR/EN 320–1440 |
| C — اتساق المعلومات | WT-IA-03/12/19/20/13 | مراجعة محتوى خدمات ثمان بالعربي/الإنجليزي وقصص مشاريع، بلا ادعاءات غير مثبتة |
| D — استقرار الإنتاج | WT-003..005/007/013/014/016..019، WT-IA-41/43/44 | فحص PR45 كامل قبل أي اعتماد، مسارات HTTP ودومين، اختبارات SSR/404/no-JS، إصدار معلوم SHA |
| E — دين المستودع | WT-001/002/015/020، WT-IA-22..29/45/46 | branch map، حماية main، CI متسق، أرشفة أو إزالة مكررات بعد إثبات عدم استخدامها، توثيق نظيف |

كل عنصر يحتاج: ID، الشدة، المسار/ملف/سطر أو screenshot، إثبات إعادة إنتاج، سبب جذري (أو «غير مؤكد»)، نتيجة إصلاح متوقعة، اختبار يتعطل قبل الإصلاح وينجح بعده، صور Before/After حيث يلزم، commit SHA، CI status، هل وصل main/production، تاريخ الاعتماد. أي عنصر جديد يحصل على WT-IA-47 وما بعده دون حذف أو تغيير المعرفات السابقة.

## F. قفل التغيير

- هذا الفرع توثيقي فقط، أساسه main؛ **لم نعدّل runtime أو deploy أو DNS أو PRs المستقلة**.
- لا ننسخ إصلاح PR45 بالكامل إلى هذا الفرع تلقائيًا؛ نفحصه بالاختبارات وندمجه بعد حل التعارض مع المسارات الأخرى.
- تحقق الدومين «verified» ليس إثبات redirect، والـCI الأخضر ليس إثبات صحة إنتاج.
- عيوب CSS المصنفة VISUAL-RISK لا تتحول CONFIRMED بلا لقطة أو اختبار؛ حفظنا بالفعل دليل Preview للـorphan step.
- راجع ملف 2026-10-10_ROOT_CAUSE_REVIEW.md للأسباب الهندسية التي تمنع تكرار الترقيع، و2026-10-10_VISUAL_EVIDENCE.md لدليل اللقطات.

**مسؤول سجل التحقق:** تدقيق مستقل؛ كل تبديل حالة يجب أن يرفق الدليل لا التاريخ فقط.


## G. اكتشاف تالٍ لمراجعة JS-disabled

| ID | الشدة والحالة | المشكلة | الدليل / العلاج |
|---|---|---|---|
| WT-IA-47 | P1 CODE-CONFIRMED / UX | على الجوال، قائمة التنقل الرئيسية مخفية CSS: .primary-nav {display:none} وفتحها يعتمد على src/client/navigation.js. عند غياب JavaScript قد تختفي كل روابط القائمة من الهيدر، ولو بقيت روابط الفوتر؛ لا يوجد fallback تنقل علوي | src/styles/layout.css + src/components/Header.js + src/client/navigation.js؛ فحص Browser no-JS فعلي AR/EN، والحل جعل التنقل الأساسي متاحًا دون JS أو توفير بديل واضح ثم enhanced overlay عند تفعيل JS |

هذا لا يعني أن كامل الموقع يصبح غير قابل للاستخدام عند توقف JavaScript؛ المشكلة محددة بتنقل الهيدر على مقاسات الهاتف، ويجب اختبارها من منظور المستخدم. اجعل آخر معرّف تالٍ WT-IA-48.
