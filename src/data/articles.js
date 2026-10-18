/**
 * Wasl Tech VNext — Published article records.
 *
 * Articles answer real planning/search questions tied to Wasl Tech services.
 * Each translation shares one stable slug and publication identity.
 */

function article(record) {
  return Object.freeze({
    ...record,
    localeStatus: Object.freeze(record.localeStatus),
    author: Object.freeze(record.author),
    relatedServiceIds: Object.freeze(record.relatedServiceIds ?? []),
    relatedProjectIds: Object.freeze(record.relatedProjectIds ?? []),
    content: Object.freeze({
      ar: Object.freeze(record.content.ar),
      en: Object.freeze(record.content.en)
    })
  });
}

export const articles = Object.freeze([
  article({
    id: "article-website-or-system",
    slug: "website-or-web-system",
    category: "planning",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/media/article-website-or-web-system.webp",
    coverWidth: 1536,
    coverHeight: 961,
    coverTemporary: false,
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    relatedServiceIds: ["web", "programming"],
    relatedProjectIds: ["project-07","project-04"],
    content: {
      ar: {
        categoryLabel: "تخطيط رقمي",
        title: "موقع أم نظام ويب؟ كيف تختار المسار المناسب لمشروعك",
        summary: "اختر موقعًا عندما يكون الهدف التعريف والخدمات والمحتوى والتواصل. واختر نظام ويب عندما يكون جوهر المشروع مستخدمين وصلاحيات وبيانات وعمليات متكررة. وقد تحتاج إلى الاثنين معًا.",
        intro: "الجواب المختصر: إذا كان الزائر سيقرأ معلومات ويستكشف خدماتك ثم يتواصل، فأنت غالبًا تحتاج موقعًا إلكترونيًا. وإذا كان سيُسجّل الدخول وينفّذ أعمالًا تُحفظ وتُتابَع وتختلف حسب دوره، فأنت تحتاج نظام ويب. هذا دليل لاتخاذ القرار قبل طلب عرض السعر، مع أمثلة من أنواع المشاريع الموجودة في معرض أعمال وصل تك.",
        sections: [
          {
            "heading": "ما الفرق الحقيقي بين الموقع الإلكتروني ونظام الويب؟",
            "paragraphs": [
              "الموقع الإلكتروني يقدّم محتوى منظّمًا للجمهور: تعريف الشركة، صفحات الخدمات، الأعمال، المقالات، ووسائل التواصل أو الاستفسار. يمكن أن يحتوي على نموذج طلب بسيط أو لوحة تحرير محتوى دون أن يتحول تلقائيًا إلى نظام تشغيلي معقّد.",
              "نظام الويب ينجز عمليات ذات حالة مستمرة: مستخدمون بأدوار مختلفة، سجلات محفوظة، موافقات، متابعة طلبات، وتقارير. لا يحدّد الاسم أو لغة البرمجة نوع المنتج؛ المهم هو طبيعة ما يجب أن يحدث بعد الضغط على الأزرار."
            ]
          },
          {
            "heading": "متى تختار موقعًا إلكترونيًا؟",
            "paragraphs": [
              "اختر الموقع عندما تكون المشكلة الأساسية أن العملاء لا يعرفون نشاطك جيدًا، أو يصعب عليهم العثور على الخدمات والأعمال والمعلومات الأساسية، أو لا توجد نقطة تواصل واضحة. تبدأ الخطة بهيكل صفحات مختصر، ورسالة واضحة لكل صفحة، وصور وأعمال موثوقة، ومسار تواصل يُختبر على الجوال.",
              "المثال الأقرب في أعمال وصل تك هو «البناء المتقن»: يعرض خدمات شركة مقاولات ومشاريعها ويساعد الزائر في الوصول إلى طلب عرض سعر. هذا مثال على وظيفة موقع شركة، وليس ادعاءً بنتائج مبيعات أو أرقام زيارات."
            ],
            "bullets": [
              "الصفحات الأساسية: الرئيسية، الخدمات، الأعمال، من نحن، والتواصل.",
              "إدارة محتوى النصوص والصور والمشاريع وتحديثها.",
              "توضيح الإجراء التالي: اتصال، استفسار، أو طلب عرض سعر.",
              "تهيئة أساسية لمحركات البحث وقابلية استخدام مناسبة للجوال."
            ]
          },
          {
            "heading": "متى تختار نظام ويب مخصصًا؟",
            "paragraphs": [
              "اختر نظامًا إذا كانت القيمة الأساسية تتولد داخل التطبيق بعد تسجيل الدخول: موظف يعالج طلبًا، مدير يغيّر حالة مهمة، مسؤول يضبط صلاحيات، أو مستخدم يرى بياناته الخاصة. عندها يجب تصميم نموذج البيانات وسير العمليات قبل ترتيب البطاقات والألوان.",
              "ومن أعمالنا «لوحة إدارة محتوى CMS»، وهي مثال على واجهة لإدارة النصوص وأقسام الصفحات من مكان مركزي. تختلف غايتها عن موقع الشركة الذي يراه العميل، حتى وإن كان النظام والموقع مرتبطين."
            ],
            "bullets": [
              "حسابات وأدوار وصلاحيات واضحة لكل إجراء.",
              "بيانات تتغير لكل مستخدم أو عملية وتتطلب حفظًا وتتبعًا.",
              "حالات عمل مثل جديد، قيد المراجعة، مكتمل، أو ملغي بحسب المشروع.",
              "لوحة إدارة، وسجل تغييرات أو تقارير عندما تكون ضرورية فعلًا."
            ]
          },
          {
            "heading": "هل يمكن أن يجمع المشروع موقعًا عامًا ونظامًا داخليًا؟",
            "paragraphs": [
              "نعم، وهذا غالبًا حل عملي عندما تحتاج إلى عرض الخدمة للجمهور وإدارة الطلبات أو المحتوى خلف الواجهة. مثال تصوري: موقع شركة تظهر فيه الخدمات ونموذج الاستفسار، ولوحة داخلية تحفظ الاستفسارات وتوزعها على الموظفين. لا ينبغي بناء هذه اللوحة لمجرد وجود النموذج؛ القرار يتوقف على حجم العمل الحقيقي ومتطلبات المتابعة.",
              "يمكن فصل واجهة الزوار عن لوحة الإدارة بصلاحيات ومسارات محددة، مع المحافظة على تجربة تبدو موحدة. من المفيد تحديد صاحب القرار لكل مرحلة قبل الاتفاق على بناء النظام."
            ]
          },
          {
            "heading": "جدول قرار سريع قبل طلب التطوير",
            "paragraphs": [
              "اعتمد على السلوك المطلوب، لا على كثرة الصفحات أو شكل التصميم. إذا كانت الإجابات مختلطة فدوّن الجزأين منفصلين وابدأ بالأهم."
            ],
            "bullets": [
              "هل الهدف عرض معلومات الشركة وخدماتها؟ غالبًا موقع.",
              "هل يحتاج كل مستخدم حسابًا وبيانات مختلفة؟ غالبًا نظام ويب.",
              "هل يوجد فريق يراجع العمليات ويغيّر حالاتها باستمرار؟ نظام أو لوحة إدارة.",
              "هل تريد نشر مقالات وعرض مشاريع وتلقي طلبات بسيطة فقط؟ موقع مع إدارة محتوى ونموذج مناسب.",
              "هل توجد مدفوعات وطلبات ومنتجات؟ راجع أيضًا احتياج المتجر الإلكتروني؛ فالمتجر ليس مجرد موقع تعريفي.",
              "هل المشروع يبدأ بصفحات عامة ثم يتوسع إلى وظائف تشغيلية؟ خطط للتوسع دون بناء كل الوظائف من البداية."
            ]
          },
          {
            "heading": "خمسة أسئلة تحدد النطاق والتكلفة بصورة أدق",
            "paragraphs": [
              "سعر التطوير لا يُحسم من الاسم «موقع» أو «نظام» وحده؛ فالوقت يتأثر بوضوح المحتوى والأدوار وربط الخدمات الخارجية، واختبارات الأمان، والصيانة المطلوبة. قبل التواصل مع فريق التنفيذ أجب كتابةً:"
            ],
            "bullets": [
              "من يستخدم الحل: زائر، عميل، موظف، أم مدير؟",
              "ما أهم ثلاثة إجراءات يجب أن يتمكن كل نوع مستخدم من تنفيذها؟",
              "ما البيانات التي يجب حفظها، ومن يحق له رؤيتها أو تعديلها؟",
              "هل لديك أنظمة أو وسائل دفع أو جهات خارجية يجب الربط معها فعلًا؟",
              "ما الحد الأدنى الذي يجعل النسخة الأولى مفيدة، وكيف ستقيس نجاح استخدامها؟"
            ]
          },
          {
            "heading": "أخطاء شائعة وكيف تتجنبها",
            "paragraphs": [
              "الخطأ الأول هو طلب لوحة إدارة كاملة بينما لا يوجد سوى محتوى ثابت واستفسارات قليلة. والخطأ الثاني هو اختيار موقع تعريفي مع أن المشروع يحتاج ملفات مستخدمين وصلاحيات وسير عمل يومي. في الحالتين تبدأ التكلفة الحقيقية من غموض المتطلبات لا من التقنية المختارة.",
              "من الأخطاء أيضًا تأجيل إعداد المحتوى إلى ما بعد التصميم، أو اعتبار شكل لوحة التحكم دليلًا على أمان النظام، أو وعد العميل بربط خدمات خارجية قبل فحص واجهاتها وشروطها. الحل هو وثيقة نطاق قصيرة ومسارات استخدام واختبارات قبول قبل التنفيذ."
            ]
          },
          {
            "heading": "كيف تبدأ خطوة عملية هذا الأسبوع؟",
            "paragraphs": [
              "اكتب هدف المشروع في سطر واحد، ثم ارسم رحلة مستخدم واحدة من البداية للنهاية. احذف الوظائف التي لا تساعده على إكمال هدفه في النسخة الأولى. جهز الصفحات أو البيانات المطلوبة وصور الأعمال المتاحة، ثم اطلب من فريق التطوير مقارنة خيار الموقع وخيار النظام على نفس المتطلبات.",
              "في وصل تك نستخدم هذه الأسئلة لتحديد ما إذا كان الأنسب صفحة أو موقع شركة، متجرًا، أو نظامًا مخصصًا. القرار النهائي يحتاج مراجعة فعلية لنطاقك، وليس قالبًا واحدًا لجميع المشاريع."
            ]
          },
          {
            "heading": "الخلاصة: اختر بناءً على عمل المستخدم",
            "paragraphs": [
              "الموقع الإلكتروني مناسب لتوضيح خدماتك وبناء حضور قابل للاكتشاف والتواصل؛ ونظام الويب مناسب لإدارة العمليات والصلاحيات والبيانات المتغيرة. قد يلتقيان في منتج واحد، لكن الأفضل تحديد دور كل جزء بوضوح قبل التصميم. ابدأ بالمهمة التي تحل مشكلة حقيقية، ثم وسّع المشروع على أساس نتائج الاستخدام ومتطلبات التشغيل."
            ]
          }
        ],
        seo: {
          title: "موقع إلكتروني أم نظام ويب؟ كيف تختار المناسب؟ | وصل تك",
          description: "الفرق العملي بين الموقع الإلكتروني ونظام الويب، ومتى يحتاج مشروعك محتوى وصفحات تعريفية أو حسابات وصلاحيات وبيانات وعمليات تشغيلية."
        }
      },
      en: {
        categoryLabel: "Digital planning",
        title: "Website or web system? How to choose the right path for your project",
        summary: "Choose a website for public content, service discovery and enquiries. Choose a web system when accounts, permissions, stored records and ongoing workflows are the product. Some projects need both.",
        intro: "The short answer: if people mostly read about your business, explore services and contact you, start with a website. If they sign in, manage records, complete tasks and see information according to their role, you are planning a web system. This guide gives you a practical decision framework and examples drawn from the types of work in Wasl Tech's portfolio.",
        sections: [
          {
            "heading": "What actually separates a website from a web system?",
            "paragraphs": [
              "A business website presents organized public content: who you are, what you offer, your work, useful guides and contact options. It can include an enquiry form or a content editor without becoming a complex operational product.",
              "A web system manages persistent work. Different people have roles, records have states, users act on saved data, and someone is responsible for each step. The technology stack and visual appearance do not determine the category; the work the product performs does."
            ]
          },
          {
            "heading": "When is a business website enough?",
            "paragraphs": [
              "Choose a website when the main gap is clarity or discoverability: visitors cannot easily learn what you offer, review past work or find how to contact you. A good scope starts with a clear page structure, accurate content, trusted images and an easy contact path on mobile.",
              "For example, Wasl Tech's Al Benaa Al Motqin portfolio entry describes a construction company website that presents services and projects and provides a quotation enquiry path. This illustrates a business website's purpose; it is not a claim about conversions or revenue."
            ],
            "bullets": [
              "A clear home page, service pages, work examples and contact details.",
              "An accessible way to update public content as it changes.",
              "One identifiable action visitors can take after reading.",
              "Basic search discoverability and a usable mobile layout."
            ]
          },
          {
            "heading": "When do you need a custom web system?",
            "paragraphs": [
              "A system is appropriate when most of the value happens after sign-in: staff process requests, managers adjust workflow states, and users see their own records. Define data structures and permissions before designing the dashboard.",
              "Wasl Tech's CMS dashboard is an example of the different purpose: enabling a team to manage website sections and text from one interface. This is separate from the public website those visitors see."
            ],
            "bullets": [
              "Accounts, roles and permissions for different actions.",
              "Records that change by user or task and need to persist.",
              "Review, approval or processing steps with meaningful states.",
              "Administration screens or reporting where justified by actual operations."
            ]
          },
          {
            "heading": "Can one project include both?",
            "paragraphs": [
              "Yes. A public website can explain a service while a private system handles the resulting requests. Imagine a company website with an enquiry form and a staff interface for assigning enquiries. This is an illustrative scenario, not a feature claim about a particular client project.",
              "Build the operational layer only when the workload and process justify it. Public pages and a private dashboard can share a coherent experience while applying different permissions and responsibilities."
            ]
          },
          {
            "heading": "A practical decision checklist",
            "paragraphs": [
              "Make the choice by the actions people must take, not by the number of screens. If both sets of requirements apply, describe them separately."
            ],
            "bullets": [
              "Present the business and receive simple enquiries: usually a website.",
              "Let users sign in and manage distinct personal records: usually a web system.",
              "Have staff continuously process and approve work: an operational system.",
              "Publish work and articles with a simple contact form: a website and content management.",
              "Sell products through carts, orders and payments: evaluate an e-commerce store.",
              "Need a public presence now and workflows later: plan the boundary, but avoid building everything upfront."
            ]
          },
          {
            "heading": "Five questions that make scope and cost clearer",
            "paragraphs": [
              "The names 'website' and 'system' do not define a reliable quote. Time and cost depend on roles, data, external integrations, security and ongoing maintenance. Write down these answers before requesting a proposal:"
            ],
            "bullets": [
              "Who will use it: visitors, customers, staff or managers?",
              "What three tasks must each role be able to complete?",
              "What data must be stored, and who may view or edit it?",
              "Which integrations, payment services or external systems are actually required?",
              "What makes the first release useful, and how will that be evaluated?"
            ]
          },
          {
            "heading": "Common scoping mistakes",
            "paragraphs": [
              "The first mistake is ordering an elaborate dashboard when the need is mostly static content and occasional enquiries. The opposite mistake is starting with a brochure site when staff need secure records, individual permissions and daily workflow processing. Both waste effort because the underlying job was not defined.",
              "Other risks include preparing content too late, assuming an attractive dashboard is inherently secure, and promising integrations before checking available APIs and terms. A short requirements document, user journeys and acceptance criteria are better starting points."
            ]
          },
          {
            "heading": "A useful first step",
            "paragraphs": [
              "Write one sentence explaining the objective, then map one user journey from entry to successful completion. Remove tasks that do not support the first release. Gather the content, data and real portfolio examples you already have, then ask your development team to compare the website and system approaches against the same requirements.",
              "At Wasl Tech these questions help distinguish a company site, store or custom platform. The right implementation depends on a review of your actual scope, not a one-size-fits-all template."
            ]
          },
          {
            "heading": "The takeaway: choose by what users need to do",
            "paragraphs": [
              "A website makes a service understandable, discoverable and reachable. A web system enables people to manage ongoing data and workflows. They can work together, but each part needs a clear responsibility. Start with the genuine problem and grow based on operational needs and what you learn from usage."
            ]
          }
        ],
        seo: {
          title: "Website or Web System? Choose the Right Fit | Wasl Tech",
          description: "Compare a website and web system, and learn when a project needs content pages versus accounts, permissions, data, and operational workflows."
        }
      }
    }
  }),
  article({
    id: "article-ecommerce-readiness",
    slug: "before-building-ecommerce-store",
    category: "ecommerce",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/media/article-ecommerce-store-prep.webp",
    coverWidth: 1536,
    coverHeight: 961,
    coverTemporary: false,
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    relatedServiceIds: ["store"],
    relatedProjectIds: ["project-08","project-12"],
    content: {
      ar: {
        categoryLabel: "التجارة الإلكترونية",
        title: "ما الذي يجب حسمه قبل بناء متجر إلكتروني؟",
        summary: "المتجر ليس صفحات منتجات وسلة فقط. وضوح الكتالوج والدفع والشحن والمخزون وخدمة العميل قبل التطوير يمنع تعقيدًا كبيرًا لاحقًا.",
        intro: "أفضل نقطة بداية للمتجر ليست اختيار القالب أو شكل الصفحة الرئيسية، بل رسم رحلة الطلب كاملة من اكتشاف المنتج حتى الاستلام وما يحدث عند الإلغاء أو الاسترجاع.",
        sections: [
          {
            heading: "حدد نموذج البيع أولًا",
            paragraphs: ["هل المتجر يبيع منتجات جهة واحدة أم يسمح لعدة بائعين؟ وهل المخزون مركزي أم لكل بائع أو فرع؟ هذه القرارات تغيّر قاعدة البيانات ولوحة الإدارة والعمولة والطلب من أساسها."]
          },
          {
            heading: "رتب الكتالوج قبل التصميم",
            paragraphs: ["التصنيفات والخصائص والمتغيرات ليست تفاصيل لاحقة؛ هي التي تحدد البحث والفلاتر وصفحة المنتج وإدارة المخزون."],
            bullets: [
              "التصنيفات الرئيسية والفرعية.",
              "المقاسات أو الألوان أو الخيارات إن وجدت.",
              "سياسة السعر والخصومات.",
              "المخزون المتاح وطريقة تحديثه.",
              "المعلومات والصور التي يجب أن تظهر لكل منتج."
            ]
          },
          {
            heading: "ارسم الطلب كمسار كامل",
            paragraphs: ["اكتب الحالات التي يمر بها الطلب ومن المسؤول عن كل انتقال. هذا يجعل الإشعارات ولوحة الإدارة وتجربة العميل متناسقة."],
            bullets: [
              "تم إنشاء الطلب.",
              "بانتظار الدفع أو التأكيد.",
              "قيد التجهيز.",
              "خرج للتوصيل.",
              "تم التسليم.",
              "ملغي أو مسترجع عند الحاجة."
            ]
          },
          {
            heading: "الدفع والشحن قراران معماريان",
            paragraphs: [
              "طرق الدفع المتاحة تختلف حسب السوق ومزود الخدمة، وكذلك الشحن قد يكون داخليًا أو عبر شركة خارجية. يجب تحديد التكاملات الواقعية قبل تثبيت تجربة الدفع.",
              "إذا كانت الخدمة الخارجية غير محسومة، صمم النظام بحيث يظل المسار قابلًا للتبديل دون ربط كل منطق المتجر بمزود واحد."
            ]
          },
          {
            heading: "ابدأ بنطاق تشغيلي واضح",
            paragraphs: ["المهم في النسخة الأولى أن يستطيع العميل الطلب وأن يستطيع الفريق إدارة المنتج والطلب والمخزون بوضوح. الإضافات التسويقية المتقدمة يمكن ترتيبها بعد استقرار المسار الأساسي."]
          }
        ],
        seo: {
          title: "قبل إنشاء متجر إلكتروني: ما الذي يجب حسمه؟ | وصل تك",
          description: "دليل عملي قبل إنشاء متجر إلكتروني لتحديد نموذج البيع والكتالوج والمخزون والدفع والشحن وحالات الطلب قبل بدء التصميم والتطوير."
        }
      },
      en: {
        categoryLabel: "E-commerce",
        title: "What should be decided before building an e-commerce store?",
        summary: "A store is more than product pages and a cart. Clarifying catalog, payments, shipping, inventory, and customer operations before development prevents major complexity later.",
        intro: "The best starting point is not choosing a theme or homepage style. Map the full order journey from product discovery to delivery, including what happens when an order is cancelled or returned.",
        sections: [
          {
            heading: "Define the selling model first",
            paragraphs: ["Is the store selling products from one business or supporting multiple sellers? Is inventory centralized or managed per seller or branch? These decisions change the data model, admin tools, commission logic, and checkout flow."]
          },
          {
            heading: "Organize the catalog before design",
            paragraphs: ["Categories, attributes, and variants are not later details. They shape search, filters, product pages, and inventory management."],
            bullets: [
              "Main and sub-categories.",
              "Sizes, colors, or other variants.",
              "Pricing and discount rules.",
              "Available stock and how it is updated.",
              "The information and images required for every product."
            ]
          },
          {
            heading: "Map the order as a complete workflow",
            paragraphs: ["Write down the states an order passes through and who controls each transition. This keeps notifications, admin tools, and customer experience aligned."],
            bullets: [
              "Order created.",
              "Waiting for payment or confirmation.",
              "Preparing the order.",
              "Out for delivery.",
              "Delivered.",
              "Cancelled or returned when applicable."
            ]
          },
          {
            heading: "Payments and shipping are architecture decisions",
            paragraphs: [
              "Available payment methods depend on the market and provider, and shipping may be internal or handled by an external company. Real integrations should be clarified before the checkout experience is finalized.",
              "If a provider is not yet decided, keep the system modular so the store is not tightly coupled to one service."
            ]
          },
          {
            heading: "Start with a clear operational scope",
            paragraphs: ["The first version should let customers place orders and let the team manage products, orders, and stock clearly. More advanced growth features can be layered on after the core flow is stable."]
          }
        ],
        seo: {
          title: "Before Building an E-commerce Store | Wasl Tech",
          description: "A practical guide to defining the selling model, catalog, inventory, payments, shipping, and order states before e-commerce design and development starts."
        }
      }
    }
  }),
  article({
    id: "article-prepare-website-content",
    slug: "prepare-website-content-before-design",
    category: "content",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/media/article-content-before-design.webp",
    coverWidth: 1536,
    coverHeight: 961,
    coverTemporary: false,
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    relatedServiceIds: ["web", "profiles", "design"],
    relatedProjectIds: ["project-07","project-14"],
    content: {
      ar: {
        categoryLabel: "المحتوى والهوية",
        title: "كيف تجهز محتوى موقعك قبل بدء التصميم؟",
        summary: "كلما كان هدف الصفحات ورسالتها أوضح، أصبح التصميم أسرع وأكثر اتساقًا. المحتوى ليس خطوة تأتي بعد الواجهة؛ هو جزء من المعمارية.",
        intro: "التصميم الجيد لا يعوّض رسالة غير واضحة. قبل اختيار شكل البطاقات والصور، اجمع المعلومات التي يحتاجها الزائر ورتبها حسب القرار الذي تريد منه اتخاذه.",
        sections: [
          {
            heading: "اكتب الجملة التي تشرح مشروعك",
            paragraphs: ["حاول شرح المشروع بجملة واضحة لشخص لا يعرفه: ماذا تقدم، لمن، وما القيمة التي يحصل عليها؟ هذه الجملة لا يلزم أن تصبح عنوان الهيرو حرفيًا، لكنها تكشف إن كانت الرسالة الأساسية مفهومة."]
          },
          {
            heading: "حدد وظيفة كل صفحة",
            paragraphs: ["لا تنشئ صفحة لأن المواقع الأخرى تملكها. حدد السؤال الذي تجيب عنه الصفحة والخطوة التي يجب أن يصل إليها الزائر."],
            bullets: [
              "الرئيسية: تكوين صورة سريعة وقيادة الزائر للمسار المناسب.",
              "الخدمات: توضيح الاحتياج والحل والنطاق.",
              "من نحن: بناء فهم لطريقة التفكير والعمل.",
              "الأعمال: إعطاء أمثلة تساعد على تقييم نوع التنفيذ.",
              "التواصل: إزالة الاحتكاك من الخطوة التالية."
            ]
          },
          {
            heading: "اجمع الأدلة والمعلومات قبل الكتابة",
            paragraphs: ["اجمع الخدمات الفعلية، أمثلة الأعمال، طرق التواصل، الأسئلة المتكررة، الصور المتاحة، وأي معلومات يجب ألا تُفهم بشكل خاطئ. هذا يمنع إضافة ادعاءات أو أرقام لمجرد ملء التصميم."]
          },
          {
            heading: "رتب المحتوى من المهم إلى المساند",
            paragraphs: ["الهيرو ليس مكانًا لكل شيء. ضع الرسالة الأساسية والإجراء الأول، ثم وزع التفاصيل على الأقسام حسب حاجة الزائر. إذا احتاج النص إلى شرح طويل ليصبح مفهومًا، فغالبًا المعمارية تحتاج تبسيطًا."]
          },
          {
            heading: "اترك مساحة للتطوير دون إفساد النسخة الأولى",
            paragraphs: ["يمكن إطلاق موقع واضح بمحتوى مركز ثم توسيعه بالمقالات ودراسات الحالة والصفحات المتخصصة. المهم أن تكون البنية من البداية قابلة لهذا التوسع دون إعادة بناء التنقل والمحتوى من الصفر."]
          }
        ],
        seo: {
          title: "تجهيز محتوى الموقع قبل التصميم: خطوات عملية | وصل تك",
          description: "خطوات عملية لتجهيز محتوى الموقع وترتيب رسالة المشروع ووظيفة الصفحات والمعلومات والصور قبل التصميم، حتى تكون التجربة أوضح وأكثر اتساقًا."
        }
      },
      en: {
        categoryLabel: "Content & brand",
        title: "How to prepare website content before design starts",
        summary: "When page goals and messaging are clear, design becomes faster and more coherent. Content is not something added after the interface; it is part of the architecture.",
        intro: "Good visual design cannot compensate for an unclear message. Before choosing cards, layouts, and imagery, gather the information visitors need and organize it around the decisions you want them to make.",
        sections: [
          {
            heading: "Write the sentence that explains the business",
            paragraphs: ["Try explaining the project in one clear sentence to someone who does not know it: what do you offer, for whom, and what value do they receive? It does not have to become the final hero headline, but it reveals whether the core message is understandable."]
          },
          {
            heading: "Give every page a job",
            paragraphs: ["Do not create a page simply because other websites have it. Define the question it answers and the next step it should support."],
            bullets: [
              "Home: create a fast understanding and guide visitors to the right path.",
              "Services: explain the need, solution, and scope.",
              "About: build understanding of how the team thinks and works.",
              "Work: provide examples that help visitors evaluate the type of execution.",
              "Contact: reduce friction from the next step."
            ]
          },
          {
            heading: "Gather evidence and facts before writing",
            paragraphs: ["Collect actual services, project examples, contact methods, common questions, available imagery, and anything that must not be misunderstood. This prevents unsupported claims or numbers being added just to fill a design."]
          },
          {
            heading: "Order content from essential to supporting",
            paragraphs: ["The hero is not a place for everything. Put the core message and primary action first, then distribute detail according to visitor needs. If copy needs a long explanation to become understandable, the architecture probably needs simplification."]
          },
          {
            heading: "Leave room to grow without weakening the first version",
            paragraphs: ["A focused website can launch with clear core content and later expand with articles, case studies, and specialized pages. The important part is building a structure that can grow without rebuilding navigation and content from scratch."]
          }
        ],
        seo: {
          title: "Prepare Website Content Before Design | Wasl Tech",
          description: "Practical steps to organize the project message, page goals, facts, and imagery before website design so the experience stays clear and consistent."
        }
      }
    }
  }),
  article({
    id: "article-mobile-app-planning",
    slug: "plan-mobile-app-before-development",
    category: "mobile-apps",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/mobile-app-development.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverTemporary: false,
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    relatedServiceIds: ["app"],
    relatedProjectIds: ["project-06","project-05"],
    content: {
      ar: {
        categoryLabel: "تطبيقات الجوال",
        title: "ماذا تجهز قبل برمجة تطبيق جوال؟",
        summary: "وضوح المستخدمين والرحلة الأساسية والبيانات والتكاملات قبل البرمجة يقلل إعادة العمل ويجعل النسخة الأولى أقرب لهدف المشروع.",
        intro: "قبل التفكير في عدد الشاشات أو التقنية المستخدمة، حدد ما الذي يجب أن ينجزه المستخدم داخل التطبيق. هذه الخطوة تساعد على ضبط النطاق، ترتيب الأولويات، ومعرفة ما إذا كانت النسخة الأولى تحتاج كل الخصائص المقترحة فعلًا.",
        sections: [
          {
            heading: "حدد المستخدم والهدف الرئيسي",
            paragraphs: ["اكتب من سيستخدم التطبيق وما النتيجة الأساسية التي يجب أن يصل إليها. إذا كان هناك أكثر من نوع مستخدم، وضح ما الذي يختلف في صلاحياته أو رحلته."],
            bullets: [
              "من هو المستخدم الأساسي؟",
              "ما المهمة الأكثر أهمية داخل التطبيق؟",
              "ما الذي يجب أن يحدث بعد إكمال هذه المهمة؟",
              "هل توجد أدوار مختلفة مثل مستخدم ومدير أو مزود خدمة؟"
            ]
          },
          {
            heading: "ارسم الرحلة قبل رسم الشاشات",
            paragraphs: ["رتب الخطوات من فتح التطبيق حتى إكمال المهمة الأساسية. الرحلة الواضحة تكشف الشاشات الضرورية وتمنع إضافة واجهات لا تخدم هدفًا مباشرًا."]
          },
          {
            heading: "حدد البيانات التي يحتاجها التطبيق",
            paragraphs: ["الحسابات والطلبات والملفات والإشعارات ليست مجرد عناصر واجهة؛ كل عنصر منها يحتاج بيانات وحالات وصلاحيات. حدد ما يجب حفظه ومن يستطيع قراءته أو تعديله."]
          },
          {
            heading: "احسم التكاملات مبكرًا",
            paragraphs: ["إذا كان التطبيق يحتاج دفعًا أو خرائط أو رسائل أو تسجيل دخول أو API خارجي، دوّن هذه الخدمات قبل تثبيت النطاق لأن توفرها وسياساتها يؤثران على التنفيذ والاختبار."]
          },
          {
            heading: "ابدأ بنسخة أولى لها قيمة واضحة",
            paragraphs: ["النسخة الأولى لا تحتاج كل فكرة محتملة. اختر أقل نطاق يتيح للمستخدم إكمال الرحلة الأساسية بصورة سليمة، ثم وسّع التطبيق بعد معرفة ما يحتاجه الاستخدام الفعلي."]
          }
        ],
        seo: {
          title: "قبل برمجة تطبيق جوال: ماذا تجهز للمشروع؟ | وصل تك",
          description: "دليل عملي قبل برمجة تطبيق جوال لتحديد المستخدمين والرحلة الأساسية والبيانات والتكاملات والنسخة الأولى قبل بدء تصميم وتطوير التطبيق."
        }
      },
      en: {
        categoryLabel: "Mobile apps",
        title: "What should you prepare before mobile app development?",
        summary: "Clarifying users, the core journey, data, and integrations before development reduces rework and keeps the first release focused on the real project goal.",
        intro: "Before counting screens or choosing technology, define what users must accomplish inside the app. This helps shape scope, prioritize features, and decide what the first release actually needs.",
        sections: [
          {
            heading: "Define the primary user and goal",
            paragraphs: ["Write down who will use the app and the main outcome they should reach. If there are multiple user types, clarify how permissions or journeys differ."],
            bullets: [
              "Who is the primary user?",
              "What is the most important task in the app?",
              "What should happen after that task is completed?",
              "Are there different roles such as user, admin, or provider?"
            ]
          },
          {
            heading: "Map the journey before the screens",
            paragraphs: ["Arrange the steps from opening the app to completing the core task. A clear journey reveals which screens are necessary and which ideas can wait."]
          },
          {
            heading: "Define the data the app needs",
            paragraphs: ["Accounts, orders, files, and notifications are not only interface elements. Each requires data, states, and permissions. Define what must be stored and who can view or change it."]
          },
          {
            heading: "Clarify integrations early",
            paragraphs: ["If the app needs payments, maps, messaging, authentication, or an external API, identify those services before scope is fixed because availability and provider rules affect delivery and testing."]
          },
          {
            heading: "Start with a first version that has clear value",
            paragraphs: ["The first release does not need every possible idea. Choose the smallest scope that lets users complete the core journey reliably, then expand from real usage signals."]
          }
        ],
        seo: {
          title: "Before Mobile App Development | Wasl Tech",
          description: "A practical guide to defining users, the core journey, data, integrations, and first-release scope before mobile app design and development begins."
        }
      }
    }
  }),
  article({
    id: "article-custom-system-decision",
    slug: "when-you-need-custom-system",
    category: "systems",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/custom-software.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverTemporary: false,
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    relatedServiceIds: ["programming", "tech"],
    relatedProjectIds: ["project-03","project-04"],
    content: {
      ar: {
        categoryLabel: "الأنظمة والحلول التقنية",
        title: "متى تحتاج نظامًا مخصصًا بدل الأدوات الجاهزة؟",
        summary: "النظام المخصص يكون منطقيًا عندما تكون المشكلة في سير العمل والبيانات والصلاحيات والتكاملات، لا لمجرد الرغبة في برمجة شيء من الصفر.",
        intro: "الأداة الجاهزة قد تكون أفضل عندما تغطي احتياجك بوضوح. أما النظام المخصص فيصبح مناسبًا عندما تضطر إلى تغيير طريقة عملك لتناسب الأداة، أو عندما تتكرر خطوات يدوية وتكاملات لا يمكن تنظيمها بصورة عملية.",
        sections: [
          {
            heading: "ابدأ من العملية التي تسبب المشكلة",
            paragraphs: ["اكتب كيف تتم المهمة اليوم: من يبدأها، ما البيانات المطلوبة، من يراجعها، وما الذي يسبب التأخير أو التكرار. هذا يوضح إن كانت المشكلة تحتاج إعداد أداة جاهزة أم بناء مسار مخصص."]
          },
          {
            heading: "راقب علامات الحاجة إلى نظام مخصص",
            bullets: [
              "تكرار إدخال نفس البيانات في أكثر من مكان.",
              "صلاحيات معقدة لا تغطيها الأدوات الحالية.",
              "حاجة إلى لوحات تحكم وتقارير مرتبطة ببيانات داخلية.",
              "تكاملات بين خدمات متعددة لا تعمل ضمن مسار واحد.",
              "اعتماد كبير على ملفات وجداول ورسائل يدوية لتشغيل عملية أساسية."
            ]
          },
          {
            heading: "حدد المستخدمين والصلاحيات قبل الواجهات",
            paragraphs: ["النظام لا يبدأ من شكل لوحة التحكم. يبدأ من من يرى ماذا، من يستطيع إنشاء أو تعديل أو اعتماد البيانات، وما الحالات التي تنتقل بينها العملية."]
          },
          {
            heading: "اجعل التكاملات وحدود المسؤولية واضحة",
            paragraphs: ["أي ربط مع خدمة خارجية يعتمد على توفر API والصلاحيات والقيود الخاصة بالمزود. توثيق هذه الاعتماديات مبكرًا يمنع بناء جزء أساسي على افتراض غير مؤكد."]
          },
          {
            heading: "ابنِ أولًا الجزء الذي يحل المشكلة الأساسية",
            paragraphs: ["يمكن أن يكون النظام كبيرًا لاحقًا، لكن البداية الأفضل هي المسار الذي يوفر أكبر تقليل للعمل اليدوي أو أكبر وضوح للبيانات، ثم توسيعه بصورة مدروسة."]
          }
        ],
        seo: {
          title: "متى تحتاج نظامًا مخصصًا ولوحة تحكم؟ | وصل تك",
          description: "كيف تعرف أن مشروعك يحتاج نظامًا مخصصًا أو لوحة تحكم؟ دليل لفهم سير العمل والبيانات والصلاحيات والتكاملات قبل بدء البرمجة."
        }
      },
      en: {
        categoryLabel: "Systems & technical solutions",
        title: "When do you need a custom system instead of an off-the-shelf tool?",
        summary: "Custom software makes sense when the real problem is workflow, data, permissions, and integrations—not simply because you want something built from scratch.",
        intro: "An off-the-shelf tool may be the better choice when it already covers the need clearly. A custom system becomes useful when the team must reshape its workflow around the tool or when repeated manual steps and disconnected integrations become operational problems.",
        sections: [
          {
            heading: "Start with the process causing the problem",
            paragraphs: ["Write down how the task works today: who starts it, which data is needed, who reviews it, and where delay or duplication happens. This shows whether configuration is enough or a custom workflow is justified."]
          },
          {
            heading: "Look for signs that custom software may fit",
            bullets: [
              "The same data is entered repeatedly in different places.",
              "Permission rules are more complex than current tools support.",
              "Dashboards and reports depend on internal data.",
              "Several services must work together in one workflow.",
              "Critical operations rely heavily on spreadsheets, files, and manual messages."
            ]
          },
          {
            heading: "Define users and permissions before interfaces",
            paragraphs: ["A system does not start with the dashboard layout. It starts with who can see, create, edit, approve, and move data through each workflow state."]
          },
          {
            heading: "Make integrations and dependencies explicit",
            paragraphs: ["External integrations depend on APIs, access, and provider limits. Clarifying these early prevents core features from being built around assumptions that may not hold."]
          },
          {
            heading: "Build the part that solves the core problem first",
            paragraphs: ["The system can grow later. Start with the workflow that removes the most manual work or creates the clearest operational value, then expand from a stable base."]
          }
        ],
        seo: {
          title: "When Do You Need a Custom System or Dashboard? | Wasl Tech",
          description: "A practical guide to deciding when a project needs custom software, dashboards, permissions, data workflows, and integrations instead of an off-the-shelf tool."
        }
      }
    }
  }),
  article({
    id: "article-brand-identity-brief",
    slug: "prepare-brand-identity-brief",
    category: "branding",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/brand-design.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverTemporary: false,
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    relatedServiceIds: ["design"],
    relatedProjectIds: ["project-09","project-10"],
    content: {
      ar: {
        categoryLabel: "الهوية البصرية",
        title: "ماذا تجهز قبل تصميم الهوية البصرية؟",
        summary: "وضوح طبيعة المشروع والجمهور وشخصية العلامة والاستخدامات الفعلية يجعل قرارات الشعار والألوان والخطوط أكثر منطقية واتساقًا.",
        intro: "الهوية البصرية ليست اختيار لون وشعار بمعزل عن المشروع. قبل التصميم، جهز معلومات تساعد المصمم على فهم ما الذي يجب أن تعبر عنه العلامة وأين ستُستخدم عناصرها.",
        sections: [
          {
            heading: "عرّف المشروع بجملة واضحة",
            paragraphs: ["اكتب ماذا يقدم المشروع، لمن، وما الذي يميزه أو يريد أن يُعرف به. هذه الجملة تساعد على تقييم الاتجاهات البصرية بدل اختيارها بالذوق فقط."]
          },
          {
            heading: "حدد الجمهور وسياق الاستخدام",
            paragraphs: ["هوية تظهر أساسًا في تطبيق تختلف احتياجاتها عن هوية تعتمد على الطباعة أو التغليف أو اللوحات. حدد أهم نقاط الظهور حتى تُختبر الهوية في ظروفها الحقيقية."]
          },
          {
            heading: "صف شخصية العلامة بكلمات محددة",
            bullets: [
              "حديثة أم تقليدية؟",
              "هادئة أم جريئة؟",
              "تقنية أم إنسانية؟",
              "رسمية أم قريبة؟",
              "ما الصفات التي لا تريد أن توحي بها الهوية؟"
            ]
          },
          {
            heading: "اجمع المراجع للمناقشة لا للنسخ",
            paragraphs: ["المراجع المفيدة توضح ما الذي يعجبك ولماذا: بساطة الشعار، أسلوب الخط، ترتيب العناصر، أو مرونة النظام. الهدف فهم الاتجاه لا إعادة إنتاج هوية موجودة."]
          },
          {
            heading: "فكر في النظام لا الشعار وحده",
            paragraphs: ["الهوية الجيدة تحتاج قواعد للألوان والخطوط والقوالب وطريقة استخدام الشعار والعناصر، حتى يبقى المظهر متسقًا عندما تتوسع المواد والمنصات."]
          }
        ],
        seo: {
          title: "قبل تصميم الهوية البصرية: ماذا تجهز؟ | وصل تك",
          description: "دليل عملي لتجهيز بريف الهوية البصرية: تعريف المشروع والجمهور وشخصية العلامة والاستخدامات والمراجع قبل تصميم الشعار والنظام البصري."
        }
      },
      en: {
        categoryLabel: "Brand identity",
        title: "What should you prepare before brand identity design?",
        summary: "Clarity about the project, audience, brand personality, and real applications makes logo, color, and typography decisions more coherent and useful.",
        intro: "Brand identity is not choosing a logo and color in isolation. Before design begins, prepare the information that helps explain what the brand should express and where the visual system must work.",
        sections: [
          {
            heading: "Explain the project in one clear sentence",
            paragraphs: ["Write what the project offers, who it serves, and what it wants to be known for. This gives visual directions something concrete to be evaluated against."]
          },
          {
            heading: "Define the audience and usage context",
            paragraphs: ["An identity used mostly in an app has different demands from one built around print, packaging, or signage. Identify the most important touchpoints so the system can be tested in real use."]
          },
          {
            heading: "Describe the brand personality with specific words",
            bullets: [
              "Modern or traditional?",
              "Calm or bold?",
              "Technical or human?",
              "Formal or approachable?",
              "Which qualities should the identity avoid suggesting?"
            ]
          },
          {
            heading: "Collect references for discussion, not copying",
            paragraphs: ["Useful references show what you like and why: simplicity, typography, layout, or flexibility. The goal is to understand direction, not reproduce an existing identity."]
          },
          {
            heading: "Think about the system, not only the logo",
            paragraphs: ["A useful identity needs rules for color, typography, templates, logo usage, and supporting elements so the brand stays consistent as materials and channels expand."]
          }
        ],
        seo: {
          title: "Prepare a Brand Identity Brief | Wasl Tech",
          description: "Prepare a brand identity brief covering the project, audience, personality, applications, and references before logo and visual-system design."
        }
      }
    }
  }),
  article({
    id: "article-profile-content",
    slug: "profile-content-checklist",
    category: "profiles",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/company-profiles.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverTemporary: false,
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    relatedServiceIds: ["profiles"],
    relatedProjectIds: [],
    content: {
      ar: {
        categoryLabel: "البروفايلات والملفات التعريفية",
        title: "ماذا يجب أن يحتوي الملف التعريفي الاحترافي؟",
        summary: "الملف التعريفي الجيد لا يجمع المعلومات فقط؛ يرتبها بحيث يفهم القارئ النشاط والخدمات والأعمال والقيمة بسرعة ومن دون تكرار.",
        intro: "قبل تصميم البروفايل، اجمع المحتوى الحقيقي أولًا. كل قسم يجب أن يجيب عن سؤال لدى القارئ، وأن يقود إلى صورة أوضح عن النشاط وما يمكن تنفيذه وكيف يمكن التواصل.",
        sections: [
          {
            heading: "ابدأ بنبذة قصيرة وواضحة",
            paragraphs: ["النبذة لا تحتاج تاريخًا طويلًا. يكفي أن توضح النشاط، نطاق العمل، وما الذي يميز طريقة تقديم الخدمة أو الحل بصورة يمكن فهمها سريعًا."]
          },
          {
            heading: "رتب الخدمات حسب ما يحتاجه القارئ",
            paragraphs: ["استخدم أسماء واضحة للخدمات مع وصف قصير يشرح النتيجة أو الاستخدام. تجنب تحويل الصفحة إلى قائمة مصطلحات بلا سياق."]
          },
          {
            heading: "استخدم الأعمال أو الأدلة عندما تكون متاحة",
            paragraphs: ["صور المشاريع أو نماذج التنفيذ أو الحالات المختصرة تساعد القارئ على تقييم نوع العمل أكثر من العبارات العامة. استخدم فقط ما يمكن إثباته وعرضه بوضوح."]
          },
          {
            heading: "ضع المعلومات المؤسسية في مكانها الصحيح",
            bullets: [
              "الرؤية أو الرسالة إذا كانت معتمدة ومفيدة.",
              "مجالات العمل أو القطاعات.",
              "القدرات أو نقاط القوة القابلة للتوضيح.",
              "الفريق أو الهيكل عندما يكون ذلك مهمًا.",
              "بيانات التواصل والقنوات الرسمية."
            ]
          },
          {
            heading: "صمم تسلسلًا يساعد القارئ على الفهم",
            paragraphs: ["الغلاف ثم التعريف ثم الخدمات ثم الأعمال أو القدرات ثم التواصل هو تسلسل شائع، لكن الترتيب النهائي يجب أن يخدم الهدف من الملف وليس قالبًا ثابتًا للجميع."]
          }
        ],
        seo: {
          title: "محتوى البروفايل والملف التعريفي: ماذا يجب أن يتضمن؟ | وصل تك",
          description: "قائمة عملية لمحتوى البروفايل والملف التعريفي: النبذة والخدمات والأعمال والقدرات والمعلومات الأساسية والتواصل قبل بدء التصميم."
        }
      },
      en: {
        categoryLabel: "Profiles & presentations",
        title: "What should a professional business profile include?",
        summary: "A strong profile does more than collect information. It organizes the story, services, work, and value so readers can understand the offering quickly without repetition.",
        intro: "Before profile design begins, gather the real content first. Every section should answer a reader question and move toward a clearer understanding of the work and how to get in touch.",
        sections: [
          {
            heading: "Start with a short, clear introduction",
            paragraphs: ["The introduction does not need to be a long history. Explain the activity, scope, and what is distinctive about the way the work or service is delivered."]
          },
          {
            heading: "Organize services around reader needs",
            paragraphs: ["Use clear service names with a short explanation of the result or use case. Avoid turning the profile into a list of unexplained terms."]
          },
          {
            heading: "Use work examples or evidence when available",
            paragraphs: ["Project visuals, selected outputs, or short cases help readers evaluate the work more than broad claims. Include only evidence that can be shown clearly."]
          },
          {
            heading: "Place organizational information where it helps",
            bullets: [
              "Vision or mission when it is approved and useful.",
              "Areas of work or sectors.",
              "Capabilities that can be explained clearly.",
              "Team or structure when relevant.",
              "Official contact details and channels."
            ]
          },
          {
            heading: "Design a sequence that supports understanding",
            paragraphs: ["Cover, introduction, services, work or capabilities, and contact is a common sequence, but the final order should serve the purpose of the profile rather than follow a fixed template."]
          }
        ],
        seo: {
          title: "Business Profile Content Checklist | Wasl Tech",
          description: "A practical checklist for profile content: introduction, services, work, capabilities, key information, and contact details before presentation design starts."
        }
      }
    }
  }),
  article({
    id: "article-digital-marketing-plan",
    slug: "digital-marketing-content-plan",
    category: "marketing",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/digital-marketing.webp",
    coverWidth: 1280,
    coverHeight: 720,
    coverTemporary: false,
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    relatedServiceIds: ["marketing"],
    relatedProjectIds: ["project-11"],
    content: {
      ar: {
        categoryLabel: "التسويق والمحتوى",
        title: "كيف تبني خطة محتوى مرتبطة بهدف مشروعك؟",
        summary: "خطة المحتوى الجيدة تبدأ من الهدف والجمهور والرسالة، ثم تختار القنوات والأشكال والمؤشرات المناسبة بدل نشر محتوى متفرق بلا اتجاه.",
        intro: "قبل تحديد عدد المنشورات أو شكل التصاميم، حدد ما الذي تريد من المحتوى أن يغيّره: هل الهدف تعريف الجمهور بالخدمة، بناء ثقة، دعم الإطلاق، زيادة الاستفسارات، أم شرح منتج يحتاج إلى فهم؟",
        sections: [
          {
            heading: "حدد هدفًا يمكن ربطه بالمحتوى",
            paragraphs: ["اكتب النتيجة المطلوبة خلال فترة محددة بصورة تساعد على اتخاذ قرارات. الهدف الواضح يسهل معرفة أي موضوع أو قناة أو صيغة تخدمه وأيها لا تضيف قيمة."]
          },
          {
            heading: "افهم ما الذي يحتاج الجمهور إلى معرفته",
            paragraphs: ["رتب الأسئلة والاعتراضات والمعلومات التي تمنع الجمهور من فهم العرض أو اتخاذ الخطوة التالية. هذه الأسئلة تتحول إلى محاور محتوى أقوى من البدء بقائمة أفكار عشوائية."]
          },
          {
            heading: "ابنِ محاور ثابتة تسمح بالتنوع",
            bullets: [
              "محتوى يشرح الخدمة أو المنتج.",
              "أمثلة وأعمال أو حالات استخدام.",
              "محتوى تعليمي يساعد على اتخاذ القرار.",
              "أسئلة واعتراضات متكررة.",
              "محتوى مرتبط بالهوية والثقافة عند الحاجة."
            ]
          },
          {
            heading: "اختر القناة حسب السلوك لا حسب الشهرة",
            paragraphs: ["ليست كل منصة ضرورية لكل مشروع. اختر القنوات التي يوجد فيها الجمهور ويمكن إنتاج محتوى مناسب لها باستمرار، ثم وسّع الحضور عندما تصبح العملية قابلة للإدارة."]
          },
          {
            heading: "راقب المؤشرات التي تساعد على القرار",
            paragraphs: ["المشاهدات وحدها لا تكفي. راقب الوصول، الحفظ، النقر، الرسائل، الاستفسارات، ونوعية التفاعل بحسب الهدف. استخدم النتائج لتعديل الرسائل والموضوعات والإيقاع، لا لمجرد زيادة عدد المنشورات."]
          }
        ],
        seo: {
          title: "كيف تبني خطة محتوى وتسويق رقمي لمشروعك؟ | وصل تك",
          description: "دليل عملي لبناء خطة محتوى وتسويق رقمي تبدأ من الهدف والجمهور والرسالة والمحاور والقنوات ومؤشرات الأداء بدل النشر العشوائي."
        }
      },
      en: {
        categoryLabel: "Digital marketing & content",
        title: "How do you build a content plan around a real project goal?",
        summary: "A useful content plan starts with the goal, audience, and message, then chooses channels, formats, and signals instead of publishing disconnected content.",
        intro: "Before deciding how many posts to publish or what the designs should look like, define what the content needs to change: awareness, trust, launch support, inquiries, or understanding of an offer that needs explanation.",
        sections: [
          {
            heading: "Define a goal the content can support",
            paragraphs: ["Write the desired outcome in a way that can guide decisions during a defined period. A clear goal makes it easier to decide which topics, channels, and formats are relevant."]
          },
          {
            heading: "Understand what the audience needs to know",
            paragraphs: ["List the questions, objections, and missing information that stop people from understanding the offer or taking the next step. These become stronger content pillars than a random list of post ideas."]
          },
          {
            heading: "Build stable pillars that still allow variety",
            bullets: [
              "Content that explains the service or product.",
              "Work examples and use cases.",
              "Educational content that supports decisions.",
              "Common questions and objections.",
              "Brand and culture content when it serves the objective."
            ]
          },
          {
            heading: "Choose channels based on behavior, not popularity",
            paragraphs: ["Not every platform is necessary for every project. Choose the channels where the audience can actually be reached and where suitable content can be produced consistently, then expand when the workflow is manageable."]
          },
          {
            heading: "Track signals that help you make decisions",
            paragraphs: ["Views alone are not enough. Depending on the goal, track reach, saves, clicks, messages, inquiries, and the quality of interaction. Use the results to refine messages, topics, and rhythm rather than simply increasing volume."]
          }
        ],
        seo: {
          title: "How to Build a Digital Marketing & Content Plan | Wasl Tech",
          description: "Build a content and digital marketing plan from goals, audience, messaging, pillars, channels, and performance signals instead of random publishing."
        }
      }
    }
  })
]);

export function getArticleBySlug(slug) {
  return articles.find((item) => item.slug === slug) ?? null;
}

export function getPublishedArticles() {
  return articles.filter((item) => item.publishedAt && item.localeStatus.ar === "ready");
}

export function getPublishedArticlesByService(serviceId, locale = "ar") {
  return articles.filter((item) =>
    item.publishedAt &&
    item.localeStatus?.[locale] === "ready" &&
    item.content?.[locale] &&
    item.relatedServiceIds.includes(serviceId)
  );
}
