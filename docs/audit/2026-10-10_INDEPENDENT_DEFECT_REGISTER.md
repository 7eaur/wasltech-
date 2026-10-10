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

كل عنصر يحتاج: ID، الشدة، المسار/ملف/سطر أو screenshot، إثبات إعادة إنتاج، سبب جذري (أو «غير مؤكد»)، نتيجة إصلاح متوقعة، اختبار يتعطل قبل الإصلاح وينجح بعده، صور Before/After حيث يلزم، commit SHA، CI status، هل وصل main/production، تاريخ الاعتماد. أي عنصر جديد يحصل على أحدث معرف بعد WT-IA-75 دون حذف أو تغيير المعرفات السابقة.

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

هذا لا يعني أن كامل الموقع يصبح غير قابل للاستخدام عند توقف JavaScript؛ المشكلة محددة بتنقل الهيدر على مقاسات الهاتف، ويجب اختبارها من منظور المستخدم. بعد انتهاء جولة الموبايل والمحتوى، معرّف المشكلة الجديدة التالي هو WT-IA-76.


## H. توثيق جولة التدقيق البصري/المحتوى/الموبايل — WT-IA-48..75

**النسخة:** Preview integration/site-stabilization-20261010 عند 971c7d31. **المرجع المرئي:** GitHub Actions screenshots Artifact #11677911173 (390px هاتف، 1440px ديسكتوب AR/EN). **تفاصيل الحلول:** `docs/audit/2026-10-10_VISUAL_DESIGN_AND_MOBILE_AUDIT.md` و`docs/audit/2026-10-10_CONTENT_MARKETING_AND_COPY_GAPS.md`.

الحالات التالية **OPEN / PROPOSED**. كل درجة ثقة تخص نوع الدليل المذكور فقط، ولا تعني أن Production يحمل المشكلة. `SCREENSHOT` = ظهر في Preview، و`SOURCE` = سبب برمجي مثبت، و`REVIEW` = قرار UX/تحسين تجريبي لا Bug قاطع، و`TEST` = غير مثبت دون تجربة متصفح/جهاز.

| ID | شدة + دليل | الموضع/أثر العميل | الجذر / الحل المقترح | معيار إغلاق قابل للتحقق |
|---|---|---|---|---|
| WT-IA-48 | P1 SCREENSHOT | **عنّا:** قصة الشركة تعرض مساحات كبيرة ونصوص منفصلة، بلا ترتيب تسويقي مصور | `about-story` شكل editorial نصي ثنائي لا يكفي للفصل بين الرسائل؛ أنشئ editorial split بمثال واقعي/أصل مرئي مع الحفاظ على المعنى | عينة AR/EN 390+1440 تقارن الفهم السريع، لا نص زائف |
| WT-IA-49 | P2 SCREENSHOT | **الرؤية والرسالة والقيم:** كتل شبيهة بجدول رقيق لا وحدات ذات شخصيات واضحة | `about-direction__grid`, `about-values__list` تعتمد خطوط الفصل؛ 2 أو 4 panels بحد ناعم، تمايز أصغر، لا كل فقرة كارت | مقارنة before/after + فحص mobile/reflow |
| WT-IA-50 | P1 SOURCE/CONTENT | **عنّا:** لغة احتراف/إبداع/حلول عامة تتكرر، لا تشرح طريقة العمل بما يكفي | تحرير copy مرتبط بمخرجات وخبرة يمكن إثباتها وإظهار الأدوار الحقيقية عند الموافقة | مراجعة موافقة العميل، تجنب الأرقام غير الموثقة، AR/EN |
| WT-IA-51 | P1 SCREENSHOT | **كيف نعمل:** أربع شرائط نصية بفواصل متماثلة تعطي إحساس تقرير رسمي | `process-phase` قائمة grid؛ تحويل إلى 4 مراحل متمايزة وOutcome ضمن كل مرحلة | 390/768/1440؛ تسلسل مراحل واضح في لقطة 5 ثوانٍ |
| WT-IA-52 | P2 SCREENSHOT | **ما الذي يصبح أوضح:** صندوق النتيجة منفصل ذهنيًا عن فعل كل مرحلة | outcome يحتاج ارتباطًا مباشرًا بنفس step card/الرقم | اختبار التزامن البصري بين النص والناتج AR/EN |
| WT-IA-53 | P1 SCREENSHOT | **تفاصيل الخدمة:** المخرجات الثمانية تظهر صفوفًا صغيرة وخطوطًا بلا تقسيم وظيفي، «جريدة» | `service-detail.css` قوائم متعددة + issue أوصاف WT-IA-03؛ مجموعة بطاقات/فئات مخرجات ذات معنى | نموذج خدمة واحدة يقبله المالك ثم تعميم 8 دون نسخ CSS مرتجل |
| WT-IA-54 | P1 SCREENSHOT | **الخدمات / الهاتف:** 8 بطاقات طويلة تتكرر فيها 4 ميزات مع الملخص وزر المزيد | تعقيد بطاقات directory بدل تلخيص؛ عرض أبرز 2–3 فوائد والباقي في التفاصيل | مراجعة scroll length وقراءة أول بطاقة 390 AR/EN |
| WT-IA-55 | P1 SCREENSHOT | **الأعمال / الكمبيوتر:** شبكة كبيرة صورها قوية لكن نصوص المشاريع الصغيرة والروابط متشابهة؛ صعوبة تمييز المشروع المميز | غياب هرمية featured vs regular داخل العرض | Cards featured مثبتة + عناوين واضحة دون تزاحم 1440 |
| WT-IA-56 | P2 SCREENSHOT | **الأعمال / الهاتف:** لقطة 390 تتجاوز 7100px؛ تكرار صور/نص مع كل مشروع | طول القائمة وغياب مفاتيح اختصار فعالة؛ إعادة توازن عرض المميز/التصنيف بدون إخفاء discoverability | scroll scan test، filters وظيفية/keyboard، لا حذف مشاريع |
| WT-IA-57 | P1 SCREENSHOT+CONTENT | **دراسة الحالة:** «المشروع/السياق/ما نفذناه» 3 فقرات كبيرة لا تعرض مراحل القرار أو الشاشات المنفذة | template أقرب لمستند سرد؛ storyboard حقيقي مع لقطات واقعية ونتيجة قابلة للإثبات | 1 case study نموذجية، صورة أصلية بإذن، لا claims غير مثبتة |
| WT-IA-58 | P2 SCREENSHOT | **المقالة:** المقدمة في عمود جانبي مفصول عن المتن وقياسات السطور/الفراغ واسعة | تصميم article-content__layout ثنائي يعزل intro؛ عمود قراءة رئيسي مع intro متصل أو aside مفيد | AR/EN mobile/desktop، انسيابية النص وheaders |
| WT-IA-59 | P2 CONTENT | **المقالات:** تكثر النصائح النصية دون وسيلة تطبيق عملية واحدة في بعض المقالات | قالب content.sections paragraphs/bullets فقط؛ أضف callout أو checklist/decision aid عندما يساعد القرار | مراجعة محرر مقال نموذجي؛ لا padding كروت داخل كل عنوان |
| WT-IA-60 | P2 SCREENSHOT | **FAQ:** كل الأسئلة صفوف خطوط ولها نفس الوزن، الفئات لا تكوّن وحدات بصرية واضحة | `faq` grouped accordion يحتاج panel/heading hierarchy، لا 13 card | مجموعات 4 واضحة على شاشة 1440 و390، keyboard |
| WT-IA-61 | P2 SCREENSHOT | **التواصل:** دعوتان لمخطط المشروع وتواصل مجاور ثم CTA ختامية تعيد الوعد نفسه | duplication في IA والمحتوى؛ مساران مختلفان «سؤال سريع» و«مشروع مفصل» | مستخدم يحدد المسار الصحيح خلال ثوانٍ؛ links صحيحة |
| WT-IA-62 | P1 REVIEW/TEST | **مخطط المشروع:** توضيح «المراجعة لا ترسل» موجود لكنه بعد إدخالات عديدة؛ قد يظن المستخدم أن زر المتابعة يرسل | إفصاح واضح قرب intro + خطوات شديدة البساطة + معالجة no-JS WT-IA-36 | user test JS on/off مع ظهور المعلومة قبل البيانات وعدم أي GET |
| WT-IA-63 | P1 SCREENSHOT | **Footer الجوال:** عريض وطويل نسبة للمحتوى، قوائم واتصالات متتابعة تأخذ مساحة كبيرة | mobile footer يعيد قائمة تنقل كاملة ومعلومات وصفية؛ اختصار بصري يحفظ روابط أساسية | 390/320، links + phone/email visible بدون تضخم |
| WT-IA-64 | P2 SCREENSHOT | **عنّا / الهاتف:** قصة/رؤية/رسالة/قيم ضمن تدفق طويل فقرة-فاصل-فقرة | panels قليلة ومحتوى أوضح، لا رسوم زخرفية | اختبار المسح البصري والعناوين في 390 |
| WT-IA-65 | P1 SCREENSHOT | **تفاصيل الخدمة / الهاتف:** صفحات 6492px طويلة كثيرة الشرائط النصية؛ يصعب العثور على المخرجات | IA وتكرار headings/benefits؛ تبويب بصري للأقسام **دون إخفائها** وتبسيط البطاقات/القوائم | 390 وEnglish؛ العثور على 3 معلومات أساسية سريعا |
| WT-IA-66 | P2 REVIEW | **Hero جوال:** صور عرضها كامل في صفحات كثيرة وتتطلب تمريرًا قبل رؤية الفائدة التالية | استخدام صورة موحد لكل الصفحة رغم اختلاف نية الزيارة؛ راجع نسبة مساحة الهيرو حسب الصفحة | 390/320 وslow network؛ first viewport shows proposition and next step |
| WT-IA-67 | P1 SCREENSHOT+SOURCE | **الخطوط الثانوية:** وصف صغير وشارات دقيقة في الأقسام والفوتر مع رمادي فاتح يصعب مسحه | font-size بعض العناصر .66–.7rem، مع neutrals خفيفة | متن >=15px حيث يلزم وlabels المقروءة، contrast/zoom tests |
| WT-IA-68 | P2 CONTRAST RISK | **اللون الفيروزي الخام #0E8889** على أبيض ~4.28:1 أقل من 4.5 للنص العادي | استخدم #096B70 للنص الصغير، واحتفظ بالـbrand accent للأيقونات/السطوح؛ لا تغير الهوية | فحص computed color للأجزاء الفعلية، WCAG text thresholds |
| WT-IA-69 | P1 SCREENSHOT | **فراغ أبيض + حدود متكررة:** صفحات About/Process/Service/Project تظهر أقرب لنشرات نصية | نفس separators والـbackground يتكرر بلا إيقاع مكونات | أنماط cards/timeline/editorial/prose متنوعة بحساب، visual consistency QA |
| WT-IA-70 | P3 SCREENSHOT/REVIEW | **صورة الخصوصية:** cloud/data center أزرق ساطع بصريًا مقابل محتوى قانوني هادئ؛ لا تقدم دليلاً على سياسة البيانات | اختيار media غير متصل بنية الصفحة؛ راجع استخدام رسمة/صورة زخرفية أخف أو تقليل الهيرو | لا تبديل الصور المعتمدة بلا اعتماد؛ لا معلومات خاطئة |
| WT-IA-71 | P2 SCREENSHOT | **الوظائف:** عند غياب شاغر تظل صفحة قصيرة تفضي سريعًا إلى Footer ثقيل | empty state له صياغة ودور بصري ضعيف | رسالة صادقة مع خطوة معتمدة فقط، موازنة فراغ الصفحة |
| WT-IA-72 | P1 CONTENT/REVIEW | **الثقة التسويقية:** صور أغلفة ممتازة لكن غالبية الحالات تفتقر إلى الأدلة/صور الشاشات/دور الفريق | بيانات مشاريع لا تربط problem→solution→deliverables→evidence | دراسة حالة واحدة موثقة ثم الاثنتان الأهم؛ لا أرقام/شهادات مختلقة |
| WT-IA-73 | P2 DESIGN SYSTEM | **التشابه المفرط:** Cards في بعض المواضع، Lines في غيرها بلا معيار لما يستحق بطاقة | لا توجد مجموعة أنماط محتوى واضحة تغطي الثقة/العملية/المخرجات/النص التحريري | مكتبة 6–8 patterns ومراجعة بصريّة قبل تعميم المكونات |
| WT-IA-74 | P2 INTERACTION TEST | **Feedback التفاعلي:** لا تُظهر اللقطات كيف يتغير focus/pressed/filter/accordion، وقد يُفهم الجمود رغم نجاح الروابط | المصدر يعرّف بعض hover/transitions لكن لا دليل UX كامل | keyboard/touch screen recording؛ focus visible + feedback <=200ms عند اللزوم |
| WT-IA-75 | P1 PERFORMANCE TEST | **الحركة والسلاسة:** source يمتلك reveal/low-device bypass، لكن لا قياس FPS/INP أو slow-device لحظة الظهور | `src/client/motion.js`, `src/styles/motion.css`; اختبر perceived speed، لا تزد animation بلا قياس | actual device video + throttling+reduced-motion+Save-Data وقياسات على build المحدد |

**تداخلات مقصودة وليست عيوبًا جديدة مستقلة:** Home 4 steps/Why 5+1 = WT-IA-07/39/40؛ CTA الصحيحة = WT-IA-01/21؛ إخفاء أزرار Hero = WT-IA-02/10؛ خطأ وصف مخرجات الخدمة = WT-IA-03؛ بطاقات أعمال بلا روابط = WT-IA-11؛ كروت خدمات الهاتف بدون أوصاف = WT-IA-15؛ no-JS = WT-IA-36/37/47؛ صور مؤقتة = WT-IA-06/WT-003..005؛ عدم حفظ الأدلة = WT-IA-46.

**الإجمالي الجاري:** 75 معرف تدقيق مستقل WT-IA-01..75 + 20 معرف إغلاق قديم WT-001..020، **ليس 95 عيبًا مؤكدًا**. تنتمي المشاهدات إلى «مؤكد بصري Preview»، «سبب برمجي» و«تحسين مقترح»، مع cross-reference قبل احتساب العمل. **المعرف الجديد التالي WT-IA-76**.

## I. حدود الاعتماد

- **اللون:** هوية كحلي/فيروزي جيدة ولا تحتاج تغييرًا شاملاً؛ عالج تباين النصوص وتوزيع الأسطح.
- **التصميم:** لا ننفذ Card لكل سطر؛ المقالات والقانون تظل نصوص قراءة مقروءة؛ بطاقات فقط للمقارنة/النتائج.
- **الهاتف:** 390px عينة، لا يدّعي أن 320px/zoom PASS.
- **الحركة:** لم نقس FPS/INP؛ تحسين UX لا يشمل أنميشن الشعار المسلّم لفرع مستقل.
- **النسخ التسويقية:** مقترحات للمراجعة ولا يجوز نشر ادعاء أو رقم دون دليل.
- **الحالة:** جميع WT-IA-48..75 OPEN/PROPOSED في سجل التدقيق؛ لا commit إصلاح Runtime ولا Merge ولا Production في هذه الجولة.
