# تدقيق عناوين وأوصاف وكلمات وصل تك — عربي وإنجليزي

تاريخ التدقيق: 17 أكتوبر 2026، فرع `seo/phase1-verified-onpage-20261017`، طلب مراجعة #65. **هذه التغييرات على فرع المعاينة، وليست منشورة على main عند كتابة هذا الملف.**

## نطاق التحقق والمنهجية

- استخراج SEO title وMeta description من ملفات المصدر للمجموعات: {"pages":24,"services":16,"projects":32,"articles":16}، بواقع **88 صفحة**.
- مطابقة 88/88 مع Google Indexing Tracker (84 indexed، أربع غير مفهرسة حسب آخر فحص محفوظ بتاريخ 16–17 أكتوبر 2026). جميع العناوين والأوصاف فريدة بحسب التحقق النصي من ملفات المصدر؛ لا فراغات أو مسارات خارج الجرد.
- إجراء تدقيق On-page مباشر مستقل على **88/88 رابطًا منشورًا (Production قبل هذه التغييرات)** باستخدام أداة GSC Wizard: 88 HTTP 200 وقابلة للفهرسة وفق الأداة؛ **0 Critical، 0 High، 0 Medium، و27 ملاحظة Low**. لا تُعد هذه الأداة حكمًا نهائيًا على الجودة أو ترتيب النتائج، ولا تُثبت تحويلات 301.
- فحص صفحات الخدمة الست عشرة (8 خدمات × عربي/إنجليزي) على Production أعطى **صفر ملاحظات**؛ لذلك التحسينات الحالية تستهدف وضوح نية البحث والعبارات المستخدمة، لا إصلاح أخطاء تقنية مفتعلة.
- تحليل GSC الحالي: ظهور العلامة ومتغيراتها موجود لكن الكلمات التجارية العامة منخفضة؛ تقرير Cannibalization كشف إشارات من **www وروابط .html القديمة**؛ يجب فحص سلاسل التحويلات وCanonical بدليل HTTP قبل اعتبارها خطأً.

## ما تغير فعليًا

1. إعادة صياغة عنوان ووصف الصفحات الرئيسية ذات نية بحث واضحة (الرئيسية، من نحن، الخدمات، الأعمال، طريقة العمل، التواصل، ابدأ مشروعك، الأسئلة، المقالات)، عربي وإنجليزي. ترك صفحات السياسة والشروط والوظائف ذات العناوين الوظيفية دون حشو كلمات تجارية.
2. تحسين Title/Description لجميع **الخدمات الثماني** باللغتين، كل خدمة تتملك قصدًا تجاريًا مميزًا. التفاصيل/الخدمات الفرعية موجودة فعليًا في HTML داخل صفحة الخدمة الأم، وأصبح لها معرفات ثابتة `#subservice-id` ورابط قسم من قائمة التنقل؛ **ليست صفحات منفصلة، ولا ندّعي فهرستها كـURL مستقل**.
3. تحسين عناوين جميع **16 مشروعًا** باللغتين لتجمع اسم المشروع ونوع الحل، مع وصف موجز يبدأ بتوصيف دراسة الحالة حيث يلائم. لم تُضف نتائج مبيعات/أرقام أو شهادات غير مثبتة.
4. إثبات علاقة الكتابة الرسمية «وصل تك» والكتابة الشائعة «وصلتك» في الصفحة الرئيسية/من نحن والبيانات المنظمة Organization/WebSite. لا يتم استخدام وصلتك على نحو متكرر في جميع تفاصيل الخدمات والمقالات حتى لا يصبح حشوًا للعلامة.
5. لم نغير عناوين المقالات الثمانية بعد مراجعتها: عناوينها الحالية تصف **أسئلة بحث معلوماتية** ذات قصد مختلف عن صفحة شراء الخدمة.

## خريطة الكلمات الأساسية / Intent ownership

| خدمة | URL عربي + EN | Primary intent | مرادفات طبيعية مفيدة في السياق | خدمات فرعية ضمن الصفحة نفسها |
|---|---|---|---|---|
| تطوير المواقع الإلكترونية | `/services/web-development/` + EN | تصميم وتطوير مواقع إلكترونية | تصميم مواقع إلكترونية، تصميم موقع شركة، تطوير مواقع، صفحات الهبوط | تصميم صفحات الهبوط (#subservice-landing-pages)؛ تصميم مواقع ومعارض الأعمال (#subservice-portfolio-websites) |
| تطوير تطبيقات الجوال | `/services/mobile-app-development/` + EN | برمجة وتطوير تطبيقات الجوال | برمجة تطبيقات، تطوير تطبيق جوال، تطبيق أندرويد وآيفون، تطبيق حجوزات | تطبيقات Android (#subservice-android-apps)؛ تطبيقات iOS (#subservice-ios-apps)؛ تطبيقات متعددة المنصات (#subservice-cross-platform-apps)؛ تطبيقات الخدمات والحجوزات (#subservice-service-booking-apps)؛ تطبيقات الأعمال الداخلية (#subservice-internal-business-apps) |
| المتاجر الإلكترونية | `/services/ecommerce/` + EN | تصميم وتطوير متجر إلكتروني | تصميم متجر إلكتروني، إنشاء متجر، تطوير متجر، ربط الدفع والشحن | إنشاء متجر إلكتروني (#subservice-online-store)؛ متاجر متعددة البائعين (#subservice-multi-vendor-store)؛ ربط الدفع والشحن (#subservice-payment-shipping-integration)؛ إدارة المنتجات والطلبات (#subservice-products-orders-management)؛ تطوير وتحسين متجر قائم (#subservice-store-redesign-optimization) |
| البرمجة وتطوير الأنظمة | `/services/custom-software/` + EN | برمجة أنظمة ولوحات تحكم مخصصة | برمجة أنظمة، نظام إدارة مخصص، لوحة تحكم، أتمتة العمليات | أنظمة الإدارة (#subservice-management-systems)؛ أنظمة مخصصة (#subservice-custom-systems)؛ لوحات التحكم (#subservice-dashboards)؛ أتمتة العمليات (#subservice-process-automation)؛ واجهات API والتكاملات (#subservice-apis-integrations) |
| الحلول التقنية | `/services/technical-solutions/` + EN | حلول تقنية وربط وأتمتة الأنظمة | حلول تقنية، ربط الأنظمة، تكامل خدمات، تحسين نظام قائم | تكامل الأنظمة (#subservice-systems-integration)؛ الحلول السحابية (#subservice-cloud-solutions)؛ ربط خدمات الطرف الثالث (#subservice-third-party-services)؛ الاستشارات والحلول التقنية (#subservice-technical-consulting)؛ تحسين الأنظمة والحلول القائمة (#subservice-technical-improvements) |
| تصميم البروفايلات | `/services/company-profiles/` + EN | تصميم بروفايل شركة | تصميم بروفايل شركة، ملف تعريفي للمؤسسة، عرض تقديمي | بروفايل شركة (#subservice-company-profile)؛ بروفايل مؤسسة (#subservice-organization-profile)؛ بروفايل خدمات (#subservice-services-profile)؛ عروض تقديمية للشركات (#subservice-corporate-presentations) |
| الهوية البصرية والتصميم الجرافيكي | `/services/brand-design/` + EN | تصميم هوية بصرية | تصميم هوية بصرية، تصميم شعار، قوالب الهوية | تصميم الشعار (#subservice-logo-design)؛ تصميم الهوية البصرية (#subservice-visual-identity)؛ قوالب السوشيال ميديا (#subservice-social-media-templates)؛ تصميم المطبوعات (#subservice-print-design)؛ تطبيقات ومواد الهوية (#subservice-brand-assets) |
| التسويق الرقمي وإدارة المحتوى | `/services/digital-marketing/` + EN | تسويق رقمي وإدارة محتوى | التسويق الرقمي، إدارة حسابات التواصل، الحملات الإعلانية، صناعة المحتوى | إدارة حسابات التواصل (#subservice-social-media-management)؛ صناعة المحتوى (#subservice-content-creation)؛ الحملات الإعلانية (#subservice-ad-campaigns)؛ الخطط التسويقية (#subservice-marketing-plans)؛ تحسين الحضور الرقمي (#subservice-digital-presence-optimization) |

**توزيع القصد:** الصفحة الرئيسية للتعريف بخدمات وصل تك ككل، صفحة الخدمات كدليل، كل صفحة خدمة للتحويل التجاري، كل مشروع كدليل خبرة خاص بنوع العمل، وكل مقال للإجابة عن سؤال معلوماتي. لا تنافس بين الصفحة التجارية والمقال بمجرد تشارك كلمة؛ تتحدد المنافسة الفعلية ببيانات query×URL مع مرور الوقت.

## ملاحظات أداة التدقيق منخفضة الخطورة (Production قبل التعديل)

| URL | التشخيص الآلي | تفسير أو إجراء مقترح |
|---|---|---|
| /careers/ | Low: short title; short content; no JSON-LD | لا يوجد شاغر مفتوح؛ لا تُضف JobPosting اصطناعيًا |
| /en/careers/ | Low: short title; short content; no JSON-LD | نفس سبب عدم الإضافة |
| /en/privacy/ | Low: short title; no JSON-LD | صفحة قانونية، لا يلزم Schema إضافية |
| /en/terms/ | Low: short title; short content; no JSON-LD | لا تُضف نصوصًا لا تعكس السياسة |
| /privacy/ | Low: short content; no JSON-LD | محتوى قانوني وظيفي |
| /terms/ | Low: short content; no JSON-LD | محتوى قانوني وظيفي |
| /portfolio/fakhri-marketing-campaign/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/albenaa-almotqin/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/alhobari-law-office/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/almalaki-brand-identity/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/aroma-cafe/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/elite-electronics/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/mikrotik-dashboard/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/fakhri-perfumes-store/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/kiddy-clothing-store/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/milano-brand-identity/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /portfolio/tech-zone/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر صور وحقائق موثقة |
| /en/portfolio/fakhri-marketing-campaign/ | Low: thin-content heuristic | أثر منخفض؛ إثراء الدراسة عند توفر حقائق موثقة |

الملاحظات الـ27 تشمل تكرار 2–3 ملاحظات على الصفحة الواحدة. **قصر النص عددياً ليس خطأ SEO بحد ذاته**؛ لا تُنشأ فقرات إضافية لتلبية حد كلمات آلي فقط.

## نتائج الاختبارات والقياس

- Vercel Preview على فرع العمل جُهز للاختبار. نتائج GitHub Actions وPreview النهائي تسجل بعد آخر Commit، وليس اعتمادًا على نجاح إصدار سابق.
- في آخر GSC baseline مستقر حتى 14 أكتوبر 2026: 30 نقرة، 514 ظهورًا، CTR 5.84%، متوسط ترتيب 8.85 خلال 28 يومًا. هذه الأرقام **قبل هذه التعديلات**.
- GA4 لم يُظهر إحالات AI قابلة للتحديد في الفترة المفحوصة. Google AI Overviews/AI Mode ليسا عادة مصدر إحالة منفصلاً هنا.
- لم نعد بفهرسة أو ظهور في «كل النتائج»؛ الترتيب يخضع لملاءمة البحث والمنافسة وتقييم Google، وقد تعيد Google كتابة عنوان النتيجة.

## الفجوات المفتوحة P1/P2

- **P1:** تشخيص عدم فهرسة Aroma Café AR، Elite Electronics AR، CMS Dashboard EN، مقال Website vs System AR. جميعها HTTP 200 في التدقيق؛ سبب Google لم يُحسم، والتحسين النصي وحده لا يعني حل المشكلة.
- **P1:** اختبار فعلي لكل legacy redirect: www → apex و/about.html و/contact.html و/service-web?id؛ السجلات القديمة تظهر في GSC ويجب إثبات 301 والوجهة النهائية بلا حلقات أو soft 404.
- **P2:** محتوى دراسات الحالة ذات عمق الإثبات المحدود يحتاج مصادر صور ووقائع أصلية، خاصة المشاريع ذات تنبيه thin-content المنخفض.
- **P2:** قياس الكلمات التجارية حسب اليمن والسعودية والإمارات وCTR بحسب صفحة/عبارة وجهاز؛ الحكم ببيانات ما بعد النشر وليس بمجرد تغيير metadata.
- **P2:** التحقق من أداء Core Web Vitals وزحف AI Search مع أدلة فعلية؛ لا تعتمد ملفات AI خاصة غير موصى بها أو Schema وهمية.

## جرد SEO لكل URL، من المصدر بعد التحسين

> أعمدة Title/Description تعكس **الفرع الحالي**، وعمود Google يعكس آخر فحص للأصل المنشور **قبل الدمج**.

| URL | لغة | SEO title | Meta description | Google status (baseline) |
|---|---|---|---|---|
| https://wasl-tech.com/ | AR | تصميم مواقع وتطبيقات ومتاجر وأنظمة / وصل تك | وصل تك (وصلتك) لتصميم وتطوير مواقع إلكترونية وتطبيقات الجوال والمتاجر والأنظمة، مع خدمات الهوية والتسويق الرقمي للمشاريع في اليمن والخليج. | indexed |
| https://wasl-tech.com/about/ | AR | من نحن / وصل تك لتصميم المواقع والبرمجة والحلول الرقمية | تعرف على فريق وصل تك (وصلتك)، الذي يصمم المواقع ويبرمج التطبيقات والمتاجر والأنظمة المخصصة ويقدم حلول الهوية البصرية والتسويق في اليمن والخليج. | indexed |
| https://wasl-tech.com/careers/ | AR | الوظائف / وصل تك — Wasl Tech | تابع فرص العمل المنشورة لدى وصل تك، مع تفاصيل الدور والمتطلبات وطريقة التقديم عند توفر أي فرصة. | indexed |
| https://wasl-tech.com/contact/ | AR | تواصل مع وصل تك (وصلتك) / تصميم مواقع وبرمجة تطبيقات | تواصل مع وصل تك (وصلتك) لمناقشة تصميم موقع إلكتروني أو برمجة تطبيق أو متجر أو نظام مخصص. طرق التواصل عبر واتساب والبريد الإلكتروني ومخطط المشروع. | indexed |
| https://wasl-tech.com/en/ | EN | Website, App & E-commerce Development / Wasl Tech | Wasl Tech designs websites, mobile apps, online stores and custom software, with branding and digital marketing for projects in Yemen and the Gulf. | indexed |
| https://wasl-tech.com/en/about/ | EN | About Wasl Tech / Web, Apps & Digital Solutions Team | Meet the Wasl Tech team building websites, mobile apps, e-commerce, custom systems and brand experiences for projects in Yemen and the Gulf. | indexed |
| https://wasl-tech.com/en/careers/ | EN | Careers / Wasl Tech | View published career opportunities at Wasl Tech, including role details, requirements, and the application process when positions are available. | indexed |
| https://wasl-tech.com/en/contact/ | EN | Contact Wasl Tech / Website & App Development | Contact Wasl Tech to discuss your website, mobile app, online store, custom software or brand project via WhatsApp, email or the project planner. | indexed |
| https://wasl-tech.com/en/faq/ | EN | Web Design, Apps, Stores & Software FAQs / Wasl Tech | Practical answers about websites, mobile apps, online stores, custom systems, integrations, branding and starting a digital project with Wasl Tech. | indexed |
| https://wasl-tech.com/en/insights/ | EN | Website, App, Store & Branding Guides / Wasl Tech | Guides to help you plan a website, mobile app, e-commerce store or custom system, with practical advice about brand identity, content and digital marketing. | indexed |
| https://wasl-tech.com/en/insights/before-building-ecommerce-store/ | EN | Before Building an E-commerce Store / Wasl Tech | A practical guide to defining the selling model, catalog, inventory, payments, shipping, and order states before e-commerce design and development starts. | indexed |
| https://wasl-tech.com/en/insights/digital-marketing-content-plan/ | EN | How to Build a Digital Marketing & Content Plan / Wasl Tech | Build a content and digital marketing plan from goals, audience, messaging, pillars, channels, and performance signals instead of random publishing. | indexed |
| https://wasl-tech.com/en/insights/plan-mobile-app-before-development/ | EN | Before Mobile App Development / Wasl Tech | A practical guide to defining users, the core journey, data, integrations, and first-release scope before mobile app design and development begins. | indexed |
| https://wasl-tech.com/en/insights/prepare-brand-identity-brief/ | EN | Prepare a Brand Identity Brief / Wasl Tech | Prepare a brand identity brief covering the project, audience, personality, applications, and references before logo and visual-system design. | indexed |
| https://wasl-tech.com/en/insights/prepare-website-content-before-design/ | EN | Prepare Website Content Before Design / Wasl Tech | Practical steps to organize the project message, page goals, facts, and imagery before website design so the experience stays clear and consistent. | indexed |
| https://wasl-tech.com/en/insights/profile-content-checklist/ | EN | Business Profile Content Checklist / Wasl Tech | A practical checklist for profile content: introduction, services, work, capabilities, key information, and contact details before presentation design starts. | indexed |
| https://wasl-tech.com/en/insights/website-or-web-system/ | EN | Website or Web System? Choose the Right Fit / Wasl Tech | Compare a website and web system, and learn when a project needs content pages versus accounts, permissions, data, and operational workflows. | indexed |
| https://wasl-tech.com/en/insights/when-you-need-custom-system/ | EN | When Do You Need a Custom System or Dashboard? / Wasl Tech | A practical guide to deciding when a project needs custom software, dashboards, permissions, data workflows, and integrations instead of an off-the-shelf tool. | indexed |
| https://wasl-tech.com/en/portfolio/ | EN | Web, App & E-commerce Case Studies / Wasl Tech | Browse Wasl Tech case studies covering websites, mobile apps, online stores, systems, brand identities and campaigns, with project scope and delivered work. | indexed |
| https://wasl-tech.com/en/portfolio/albenaa-almotqin/ | EN | Al Benaa Al Motqin / Construction Website / Wasl Tech | Case study: A construction and engineering company website that presents services and projects and makes quotation requests easier. | indexed |
| https://wasl-tech.com/en/portfolio/alhobari-law-office/ | EN | Al Hobari / Law Firm Website Design / Wasl Tech | Case study: A website for a law and legal consulting office that presents services and information in a clear, organized experience. | indexed |
| https://wasl-tech.com/en/portfolio/almalaki-brand-identity/ | EN | Al Malaki Restaurant / Brand Identity Design / Wasl Tech | Case study: A visual identity for Al Malaki Restaurant covering logo, colors, printed materials, and packaging. | indexed |
| https://wasl-tech.com/en/portfolio/aroma-cafe/ | EN | Aroma Cafe / Coffee Ordering & Loyalty App / Wasl Tech | Case study: A mobile coffee ordering app with a loyalty program and branch maps in one customer experience. | indexed |
| https://wasl-tech.com/en/portfolio/cms-dashboard/ | EN | CMS / Content Management Dashboard Development / Wasl Tech | Case study: A centralized CMS dashboard for managing and updating website content dynamically from one administration interface. | not_indexed |
| https://wasl-tech.com/en/portfolio/elite-electronics/ | EN | Elite Electronics / Online Electronics Store / Wasl Tech | Case study: An electronics e-commerce store with organized categories and a clear experience from browsing to ordering. | indexed |
| https://wasl-tech.com/en/portfolio/fakhri-marketing-campaign/ | EN | Fakhri Perfumes / Digital Campaign & Content / Wasl Tech | Case study: A digital campaign for Fakhri Perfumes covering content strategy, advertising design, and social media presence. | indexed |
| https://wasl-tech.com/en/portfolio/fakhri-perfumes-store/ | EN | Fakhri Perfumes / Online Perfume Store Design / Wasl Tech | Case study: An online perfume store with a product-focused experience for clear browsing and purchasing. | indexed |
| https://wasl-tech.com/en/portfolio/himma-learning-platform/ | EN | Himma / Reading & Writing Learning Platform / Wasl Tech | Case study: An interactive reading and writing learning platform with initial assessment, activities, student journeys, and progress tracking. | indexed |
| https://wasl-tech.com/en/portfolio/kiddy-clothing-store/ | EN | Kiddy / Children's Clothing E-commerce Store / Wasl Tech | Case study: An online children's clothing store with clear categories and an organized product browsing and ordering experience. | indexed |
| https://wasl-tech.com/en/portfolio/mikrotik-dashboard/ | EN | MikroTik / Network & Cards Admin Dashboard / Wasl Tech | Case study: A system for managing Wi-Fi network users, generating cards, and monitoring sessions from one control dashboard. | indexed |
| https://wasl-tech.com/en/portfolio/milano-brand-identity/ | EN | Milano / Company Logo & Brand Identity / Wasl Tech | Case study: A visual identity for Milano including a logo and modern technical visual system. | indexed |
| https://wasl-tech.com/en/portfolio/suwarikum-platform/ | EN | Suwarikum / Photo Delivery Platform Development / Wasl Tech | Case study: A digital platform for managing, delivering, and sharing photos between photographers and clients through organized private access. | indexed |
| https://wasl-tech.com/en/portfolio/tech-zone/ | EN | Tech Zone / Mobile E-commerce App Development / Wasl Tech | Case study: A mobile e-commerce experience covering product browsing, cart, and order tracking in one clear journey. | indexed |
| https://wasl-tech.com/en/portfolio/update-card-digital-services/ | EN | Update Card Website Design & Development / Wasl Tech | Case study of the Update Card website design and development in Yemen: organized top-up, card and subscription services, responsive pages and clear contact paths. | indexed |
| https://wasl-tech.com/en/portfolio/wasl-freelance-platform/ | EN | Wasl Freelance / Marketplace Web Platform / Wasl Tech | Case study: An Arabic freelance platform connecting clients with service providers while bringing communication and payments into one digital experience. | indexed |
| https://wasl-tech.com/en/privacy/ | EN | Privacy Policy / Wasl Tech | How the current Wasl Tech site handles the project planner, external contact channels, analytics, and cookies. | indexed |
| https://wasl-tech.com/en/process/ | EN | Website & App Development Process / Wasl Tech | See how Wasl Tech plans and develops websites, mobile apps, online stores and systems, from discovery and scope to design, development, testing and launch. | indexed |
| https://wasl-tech.com/en/services/ | EN | Websites, Mobile Apps, E-commerce & Software / Wasl Tech | Explore Wasl Tech services for web design, mobile apps, e-commerce, custom systems, system integration, business profiles, brand design and digital marketing. | indexed |
| https://wasl-tech.com/en/services/brand-design/ | EN | Logo & Brand Identity Design for Businesses / Wasl Tech | Logo and brand identity design covering color, typography, social media templates, print materials and consistent visual applications. | indexed |
| https://wasl-tech.com/en/services/company-profiles/ | EN | Company Profile & Corporate Presentation Design / Wasl Tech | Company profiles, organization profiles and corporate presentations with organized services, work and brand identity for digital and print. | indexed |
| https://wasl-tech.com/en/services/custom-software/ | EN | Custom Software, Business Systems & Dashboards / Wasl Tech | Custom software and business dashboards using databases, user roles, APIs, integrations and workflow automation built around team operations. | indexed |
| https://wasl-tech.com/en/services/digital-marketing/ | EN | Digital Marketing, Social Media & Content / Wasl Tech | Digital marketing services for social media management, content creation, campaigns and marketing plans built around audience needs. | indexed |
| https://wasl-tech.com/en/services/ecommerce/ | EN | Online Store Design & E-commerce Development / Wasl Tech | Build an online store with product catalogs, cart, checkout, order management and payment or delivery integrations suited to your business. | indexed |
| https://wasl-tech.com/en/services/mobile-app-development/ | EN | Android, iOS & Cross-Platform App Development / Wasl Tech | Mobile app development for Android, iOS and cross-platform products: booking, business apps, user accounts, API integrations and administration. | indexed |
| https://wasl-tech.com/en/services/technical-solutions/ | EN | System Integration, Automation & IT Solutions / Wasl Tech | Technical solutions for system integration, cloud services, workflow automation and improving existing systems based on your business needs. | indexed |
| https://wasl-tech.com/en/services/web-development/ | EN | Business Website Design & Web Development / Wasl Tech | Responsive business websites, landing pages and portfolios with organized content, usability and web development for Yemen and the Gulf. | indexed |
| https://wasl-tech.com/en/start-project/ | EN | Start a Website, App or Online Store Project / Wasl Tech | Plan a website, mobile app, e-commerce store or custom system with Wasl Tech by clarifying the goal, essential features and priorities before development. | indexed |
| https://wasl-tech.com/en/terms/ | EN | Website Terms / Wasl Tech | Terms for using the Wasl Tech website, project planner, service and project content, and external links. | indexed |
| https://wasl-tech.com/faq/ | AR | أسئلة تصميم المواقع والتطبيقات والمتاجر والأنظمة / وصل تك | إجابات عن تصميم المواقع وبرمجة التطبيقات وإنشاء المتاجر والأنظمة والتكاملات والهوية وخطوات بدء المشروع وتنفيذه مع وصل تك. | indexed |
| https://wasl-tech.com/insights/ | AR | أدلة تصميم المواقع والتطبيقات والمتاجر والهوية / وصل تك | مقالات تساعدك قبل تصميم موقع أو برمجة تطبيق أو إنشاء متجر أو نظام مخصص، مع أدلة عملية للهوية البصرية والمحتوى والتسويق الرقمي. | indexed |
| https://wasl-tech.com/insights/before-building-ecommerce-store/ | AR | قبل إنشاء متجر إلكتروني: ما الذي يجب حسمه؟ / وصل تك | دليل عملي قبل إنشاء متجر إلكتروني لتحديد نموذج البيع والكتالوج والمخزون والدفع والشحن وحالات الطلب قبل بدء التصميم والتطوير. | indexed |
| https://wasl-tech.com/insights/digital-marketing-content-plan/ | AR | كيف تبني خطة محتوى وتسويق رقمي لمشروعك؟ / وصل تك | دليل عملي لبناء خطة محتوى وتسويق رقمي تبدأ من الهدف والجمهور والرسالة والمحاور والقنوات ومؤشرات الأداء بدل النشر العشوائي. | indexed |
| https://wasl-tech.com/insights/plan-mobile-app-before-development/ | AR | قبل برمجة تطبيق جوال: ماذا تجهز للمشروع؟ / وصل تك | دليل عملي قبل برمجة تطبيق جوال لتحديد المستخدمين والرحلة الأساسية والبيانات والتكاملات والنسخة الأولى قبل بدء تصميم وتطوير التطبيق. | indexed |
| https://wasl-tech.com/insights/prepare-brand-identity-brief/ | AR | قبل تصميم الهوية البصرية: ماذا تجهز؟ / وصل تك | دليل عملي لتجهيز بريف الهوية البصرية: تعريف المشروع والجمهور وشخصية العلامة والاستخدامات والمراجع قبل تصميم الشعار والنظام البصري. | indexed |
| https://wasl-tech.com/insights/prepare-website-content-before-design/ | AR | تجهيز محتوى الموقع قبل التصميم: خطوات عملية / وصل تك | خطوات عملية لتجهيز محتوى الموقع وترتيب رسالة المشروع ووظيفة الصفحات والمعلومات والصور قبل التصميم، حتى تكون التجربة أوضح وأكثر اتساقًا. | indexed |
| https://wasl-tech.com/insights/profile-content-checklist/ | AR | محتوى البروفايل والملف التعريفي: ماذا يجب أن يتضمن؟ / وصل تك | قائمة عملية لمحتوى البروفايل والملف التعريفي: النبذة والخدمات والأعمال والقدرات والمعلومات الأساسية والتواصل قبل بدء التصميم. | indexed |
| https://wasl-tech.com/insights/website-or-web-system/ | AR | موقع إلكتروني أم نظام ويب؟ كيف تختار المناسب؟ / وصل تك | الفرق العملي بين الموقع الإلكتروني ونظام الويب، ومتى يحتاج مشروعك محتوى وصفحات تعريفية أو حسابات وصلاحيات وبيانات وعمليات تشغيلية. | not_indexed |
| https://wasl-tech.com/insights/when-you-need-custom-system/ | AR | متى تحتاج نظامًا مخصصًا ولوحة تحكم؟ / وصل تك | كيف تعرف أن مشروعك يحتاج نظامًا مخصصًا أو لوحة تحكم؟ دليل لفهم سير العمل والبيانات والصلاحيات والتكاملات قبل بدء البرمجة. | indexed |
| https://wasl-tech.com/portfolio/ | AR | أعمال تصميم المواقع والتطبيقات والمتاجر / وصل تك | استكشف مشاريع وصل تك ودراسات الحالة في المواقع وتطبيقات الجوال والمتاجر والأنظمة والهوية والتسويق، مع تفاصيل نطاق التنفيذ والمخرجات. | indexed |
| https://wasl-tech.com/portfolio/albenaa-almotqin/ | AR | البناء المتقن / تصميم موقع شركة مقاولات / وصل تك | دراسة حالة: موقع تعريفي لشركة مقاولات وهندسة يعرض الخدمات والمشاريع ويسهّل طلب عروض الأسعار. | indexed |
| https://wasl-tech.com/portfolio/alhobari-law-office/ | AR | مكتب الحباري / تصميم موقع مكتب محاماة / وصل تك | دراسة حالة: موقع تعريفي لمكتب محاماة واستشارات قانونية يعرض الخدمات والمعلومات ضمن تجربة واضحة ومنظمة. | indexed |
| https://wasl-tech.com/portfolio/almalaki-brand-identity/ | AR | مطعم الملكي / تصميم شعار وهوية بصرية / وصل تك | دراسة حالة: هوية بصرية لمطعم الملكي تشمل الشعار والألوان والمطبوعات والتغليف ضمن نظام بصري واحد يعكس طابع العلامة. | indexed |
| https://wasl-tech.com/portfolio/aroma-cafe/ | AR | أروما كافيه / تطوير تطبيق طلب القهوة والولاء / وصل تك | دراسة حالة: تطبيق جوال لأروما كافيه يجمع طلب القهوة وبرنامج الولاء ومعلومات الفروع داخل تجربة واحدة واضحة وسهلة الاستخدام. | not_indexed |
| https://wasl-tech.com/portfolio/cms-dashboard/ | AR | نظام إدارة محتوى CMS / برمجة لوحة تحكم / وصل تك | دراسة حالة: لوحة CMS مركزية لإدارة وتحديث محتوى المواقع ديناميكيًا من واجهة تحكم واحدة. | indexed |
| https://wasl-tech.com/portfolio/elite-electronics/ | AR | النخبة للإلكترونيات / تصميم متجر إلكتروني / وصل تك | دراسة حالة: متجر إلكتروني للأجهزة والإلكترونيات بتصنيفات منظمة وتجربة واضحة من التصفح إلى الطلب. | not_indexed |
| https://wasl-tech.com/portfolio/fakhri-marketing-campaign/ | AR | فخري للعطور / تصميم حملة تسويق رقمي ومحتوى / وصل تك | دراسة حالة: حملة رقمية لمتجر فخري للعطور تشمل استراتيجية المحتوى والتصميم الإعلاني وحضور شبكات التواصل. | indexed |
| https://wasl-tech.com/portfolio/fakhri-perfumes-store/ | AR | فخري للعطور / تصميم متجر إلكتروني للعطور / وصل تك | دراسة حالة: متجر إلكتروني للعطور بتجربة تركز على عرض المنتجات والتصفح والشراء بوضوح. | indexed |
| https://wasl-tech.com/portfolio/himma-learning-platform/ | AR | هِمّة / تطوير منصة تعليمية للقراءة والكتابة / وصل تك | دراسة حالة: منصة تعليمية تفاعلية لتطوير القراءة والكتابة تجمع التقييم القبلي والأنشطة ومسار تعلم الطالب ولوحة المتابعة. | indexed |
| https://wasl-tech.com/portfolio/kiddy-clothing-store/ | AR | كيدي / تصميم متجر إلكتروني لملابس الأطفال / وصل تك | دراسة حالة: متجر إلكتروني لملابس الأطفال بتصنيفات واضحة وتجربة منظمة لتصفح المنتجات والطلب. | indexed |
| https://wasl-tech.com/portfolio/mikrotik-dashboard/ | AR | ميكروتيك / برمجة لوحة إدارة الشبكات والكروت / وصل تك | دراسة حالة: نظام لإدارة مستخدمي شبكات الواي فاي وتوليد الكروت ومتابعة الجلسات من لوحة تحكم واحدة. | indexed |
| https://wasl-tech.com/portfolio/milano-brand-identity/ | AR | ميلانو / تصميم شعار وهوية بصرية لشركة / وصل تك | دراسة حالة: هوية بصرية لشركة ميلانو تشمل الشعار والنظام البصري وتطبيقات العلامة ضمن اتجاه تقني حديث ومتناسق. | indexed |
| https://wasl-tech.com/portfolio/suwarikum-platform/ | AR | صوركم / تطوير منصة إدارة وتسليم الصور / وصل تك | دراسة حالة: منصة رقمية لإدارة وتسليم ومشاركة الصور بين المصورين والعملاء ضمن تجربة وصول منظمة. | indexed |
| https://wasl-tech.com/portfolio/tech-zone/ | AR | تيك زون / تطوير تطبيق متجر إلكتروني للجوال / وصل تك | دراسة حالة: تجربة متجر إلكتروني عبر الجوال تشمل تصفح المنتجات والسلة ومتابعة الطلبات. | indexed |
| https://wasl-tech.com/portfolio/update-card-digital-services/ | AR | تصميم وتطوير موقع أبديت كارد للخدمات الرقمية / وصل تك | دراسة حالة تصميم وتطوير موقع أبديت كارد للخدمات الرقمية في اليمن: تنظيم خدمات الشحن والبطاقات والاشتراكات، وواجهات متجاوبة ومسار تواصل واضح. | indexed |
| https://wasl-tech.com/portfolio/wasl-freelance-platform/ | AR | منصة وصّل للعمل الحر / تصميم وتطوير منصة ويب / وصل تك | دراسة حالة: منصة عربية للعمل الحر تربط العملاء بمقدمي الخدمات وتجمع التواصل والمدفوعات داخل تجربة رقمية واحدة. | indexed |
| https://wasl-tech.com/privacy/ | AR | سياسة الخصوصية / وصل تك — Wasl Tech | كيف تتعامل نسخة موقع وصل تك الحالية مع مخطط المشروع، القنوات الخارجية، التحليلات وملفات تعريف الارتباط. | indexed |
| https://wasl-tech.com/process/ | AR | مراحل تصميم وتطوير المواقع والتطبيقات / وصل تك | كيف ننفذ مشاريع المواقع والتطبيقات والمتاجر والأنظمة؟ اطلع على مراحل فهم المتطلبات وتحديد النطاق والتصميم والبرمجة والاختبار والإطلاق مع وصل تك. | indexed |
| https://wasl-tech.com/services/ | AR | خدمات تصميم المواقع والتطبيقات والمتاجر والأنظمة / وصل تك | خدمات وصل تك تشمل تصميم المواقع والتطبيقات والمتاجر والأنظمة، وربط الأنظمة، وتصميم الهوية والبروفايلات والتسويق الرقمي في اليمن والخليج. | indexed |
| https://wasl-tech.com/services/brand-design/ | AR | تصميم هوية بصرية وشعار احترافي للشركات / وصل تك | تصميم شعار وهوية بصرية متكاملة تتضمن الألوان والخطوط وقوالب التواصل والمطبوعات وتطبيقات الهوية في نظام بصري متناسق. | indexed |
| https://wasl-tech.com/services/company-profiles/ | AR | تصميم بروفايل شركة وملف تعريفي احترافي / وصل تك | تصميم بروفايلات الشركات والمؤسسات وملفات الخدمات والعروض التقديمية مع تنظيم النبذة والأعمال والهوية للمشاركة الرقمية والطباعة. | indexed |
| https://wasl-tech.com/services/custom-software/ | AR | برمجة أنظمة مخصصة ولوحات تحكم للشركات / وصل تك | تطوير أنظمة إدارة وبرامج أعمال مخصصة ولوحات تحكم، مع قواعد البيانات والصلاحيات وواجهات API وأتمتة الإجراءات حسب سير العمل. | indexed |
| https://wasl-tech.com/services/digital-marketing/ | AR | خدمات التسويق الرقمي وإدارة حسابات التواصل / وصل تك | التسويق الرقمي وإدارة حسابات التواصل وصناعة المحتوى والحملات الإعلانية بخطة ورسائل تلائم جمهور المشروع ومؤشرات أداء واضحة. | indexed |
| https://wasl-tech.com/services/ecommerce/ | AR | تصميم متاجر إلكترونية وتطوير متجر احترافي / وصل تك | إنشاء متجر إلكتروني وتطوير تجربة التسوق مع إدارة المنتجات والسلة والطلبات وتكاملات الدفع والشحن وفق احتياج المتجر في اليمن والخليج. | indexed |
| https://wasl-tech.com/services/mobile-app-development/ | AR | برمجة تطبيقات الجوال Android وiOS / وصل تك | تصميم وبرمجة تطبيقات أندرويد وآيفون ومتعددة المنصات للحجوزات والخدمات والأعمال مع API والحسابات ولوحات الإدارة حسب المشروع. | indexed |
| https://wasl-tech.com/services/technical-solutions/ | AR | حلول تقنية وربط الأنظمة وأتمتة الأعمال / وصل تك | حلول تقنية لتكامل الأنظمة وربط الخدمات السحابية وأتمتة العمليات وتحسين البرامج القائمة؛ نبدأ بفهم المشكلة قبل اختيار التقنية. | indexed |
| https://wasl-tech.com/services/web-development/ | AR | تصميم مواقع إلكترونية للشركات وتطوير الويب / وصل تك | تصميم وتطوير مواقع الشركات وصفحات الهبوط ومعارض الأعمال في اليمن والخليج، بتصميم متجاوب وتنظيم المحتوى وتجربة مستخدم واضحة. | indexed |
| https://wasl-tech.com/start-project/ | AR | ابدأ مشروع موقع أو تطبيق أو متجر إلكتروني / وصل تك | ابدأ مع وصل تك مشروع تصميم موقع إلكتروني أو تطبيق جوال أو متجر أو نظام أعمال، وحدد أهدافك والمتطلبات والوظائف والأولويات قبل التنفيذ. | indexed |
| https://wasl-tech.com/terms/ | AR | شروط استخدام الموقع / وصل تك — Wasl Tech | حدود استخدام موقع وصل تك، مخطط المشروع، محتوى الخدمات والأعمال، والروابط الخارجية. | indexed |

## شرط إغلاق الدفعة

VNext verify وVNext release checks وVercel Preview على آخر commit، ثم موافقة المستخدم على طلب الدمج. لا يُدمج قبل ذلك. بعد النشر قارن HTML الإنتاج مع هذا الجرد وقِس تغير أداء البحث بعد فترة مناسبة، دون استنتاج سببية فورية.
