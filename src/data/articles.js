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
    updatedAt: "2026-10-19",
    relatedServiceIds: ["web", "programming"],
    relatedProjectIds: ["project-07","project-04"],
    content: {
      ar: {
        categoryLabel: "تخطيط رقمي",
        title: "موقع أم نظام ويب؟ كيف تختار المسار المناسب لمشروعك",
        summary: "الفرق ليس في شكل الواجهة فقط؛ الاختيار يعتمد على ما يجب أن ينجزه المستخدم وما الذي يحتاج المشروع إلى إدارته خلف الواجهة.",
        intro: "هل يحتاج مشروعك موقعًا يعرض خدماته، أم نظام ويب يشغّل أعماله؟ الفرق يتجاوز شكل التصميم أو اللغة البرمجية: إنه مرتبط بما سيفعله المستخدم، وما يجب حفظه من بيانات وصلاحيات وعمليات. هذا دليل عملي للتمييز بينهما وتحديد النطاق قبل طلب تنفيذ المشروع.",
        sections: [
          {
                    "heading": "الإجابة المختصرة: موقع للعرض، ونظام لإدارة العمليات",
                    "paragraphs": [
                              "الموقع الإلكتروني ينظم المعلومات التي يحتاج الزائر إلى قراءتها: تعريف الشركة وخدماتها وأعمالها، ثم مسار التواصل أو طلب عرض السعر. نظام الويب يُستخدم لتنفيذ مهام متكررة، مثل تسجيل الطلبات وتغيير حالتها وإدارة حسابات المستخدمين وسجلات العمل.",
                              "الفرق ليس في وجود لوحة تحكم بحد ذاته؛ فقد يحتوي موقع بسيط على إدارة محتوى لتحديث المقالات والصور. الأهم هو ما إذا كانت بيانات وعمليات المستخدمين جزءًا أساسيًا من المنتج."
                    ],
                    "bullets": [
                              "الهدف تعريف العملاء واستقبال الاستفسارات: موقع.",
                              "الهدف تنفيذ إجراءات محفوظة بصلاحيات متعددة: نظام ويب.",
                              "الحاجة إلى التسويق والتشغيل معًا: موقع عام ونظام تشغيلي يمكن أن يتكاملا."
                    ]
          },
          {
                    "heading": "متى يكون الموقع الإلكتروني أنسب؟",
                    "paragraphs": [
                              "اختر الموقع التعريفي عندما يكون المحتوى عامًا: من نحن، الخدمات، معرض الأعمال، الأسئلة الشائعة ووسائل التواصل. ركّز على وضوح الرسالة، وسهولة التصفح على الهاتف، وتنظيم المحتوى والعناوين، وسرعة ظهور الصفحات لمحركات البحث.",
                              "مثال قريب: موقع «البناء المتقن» يعرض خدمات المقاولات والمشاريع ويوجه الزائر نحو طلب عرض سعر. هذا النوع يحتاج تجربة محتوى مقنعة أكثر مما يحتاج حسابات مستخدمين أو إجراءات داخلية معقدة."
                    ],
                    "bullets": [
                              "موقع شركة أو مؤسسة مهنية.",
                              "موقع يعرض أعمالًا سابقة ودراسات حالة.",
                              "صفحات هبوط وحملات تعريفية.",
                              "مقالات وخدمات يسهل تحديثها عبر نظام إدارة محتوى عند الحاجة."
                    ]
          },
          {
                    "heading": "متى تحتاج نظام ويب؟",
                    "paragraphs": [
                              "اختر النظام عندما يتطلب العمل سجلات تتغير باستمرار، وأدوارًا مختلفة للموظفين والعملاء، ومتابعة إجراءات من بدايتها إلى نهايتها. هنا يصبح تصميم قاعدة البيانات والصلاحيات وحالات الأخطاء وأمن المعلومات جزءًا من المنتج.",
                              "مثل لوحة إدارة المحتوى CMS التي تتيح تحديث بيانات الصفحات من مكان واحد، أو لوحة الميكروتيك التي تجمع المستخدمين والكروت والجلسات؛ القيمة الأساسية في هذه الأمثلة هي إدارة عملية لا مجرد قراءة صفحة."
                    ],
                    "bullets": [
                              "حسابات وأدوار وصلاحيات مختلفة.",
                              "إدارة بيانات وطلبات ومهام قابلة للتحديث.",
                              "لوحات تشغيل وتقارير عند الحاجة الفعلية.",
                              "تكاملات محددة مع خدمات أخرى.",
                              "توثيق للإجراءات والنسخ الاحتياطي والاختبار."
                    ]
          },
          {
                    "heading": "هل يحتاج المشروع الخيارين معًا؟",
                    "paragraphs": [
                              "نعم، قد يعرض الموقع العام المنتج والمزايا والأسئلة الشائعة، ثم يدخل العملاء إلى حساباتهم لإجراء الطلبات، ويستخدم الفريق لوحة داخلية لإدارتها. يمكن بناء التجربتين بصورة مترابطة مع فصل واضح بين المحتوى العام والعمليات الخاصة.",
                              "لكن لا تضف حسابات أو لوحة إدارة لمجرد أن الاسم يبدو أكثر احترافية. ابدأ بأقل عدد من الوظائف التي يثبت احتياج المستخدم إليها، ثم توسّع بعد اختبار المسار الأساسي."
                    ]
          },
          {
                    "heading": "كيف يختلف التخطيط والتكلفة؟",
                    "paragraphs": [
                              "في الموقع تكون الأولوية لبنية الصفحات، كتابة المحتوى، تجربة التنقل، التصميم المتجاوب، الأداء ومحركات البحث. أما نظام الويب فيحتاج فوق ذلك إلى توصيف حالات الاستخدام، وقواعد البيانات، وصلاحيات الوصول، وسير العمل، والتحقق من المدخلات واختبار العمليات.",
                              "لا توجد تكلفة ثابتة لمجرد أن المشروع «موقع» أو «نظام». الحجم الحقيقي يتحدد بعدد الصفحات والوظائف والمستخدمين والتكاملات والاختبارات والدعم المطلوب. اطلب نطاقًا محددًا يبين ما سيدخل في الإصدار الأول وما سيُؤجل.",
                              "من المهم كذلك الاتفاق على ملكية البيانات، والاستضافة والنسخ الاحتياطية، وكيف ستُنقل المعرفة إلى فريق التشغيل بعد التسليم."
                    ]
          },
          {
                    "heading": "سبعة أسئلة تساعدك في اتخاذ القرار",
                    "paragraphs": [
                              "دوّن إجابات واضحة قبل طلب عرض السعر؛ هذا يساعد على اختيار نوع الحل وتجنّب إضافة خصائص لا تخدم هدف المشروع."
                    ],
                    "bullets": [
                              "هل المستخدم يقرأ معلومات أم ينفذ مهمة؟",
                              "هل يحتاج تسجيل دخول، ولماذا؟",
                              "ما البيانات التي يجب حفظها وتحديثها؟",
                              "من المسموح له رؤية هذه البيانات وتغييرها؟",
                              "هل توجد حالات طلب أو موافقات أو خطوات تتكرر؟",
                              "ما أصغر نسخة يمكن اختبارها مع المستخدمين؟",
                              "من سيُدير المحتوى والعمليات بعد الإطلاق؟"
                    ]
          },
          {
                    "heading": "خطوة عملية قبل البدء",
                    "paragraphs": [
                              "إذا كانت الإجابات تدور حول إبراز خدماتك وجذب العملاء، ابدأ بخريطة صفحات ومحتوى ومسار تواصل واضح. وإذا كانت تدور حول سجلات ومستخدمين وصلاحيات، ابدأ برسم رحلة المستخدم وحالات البيانات ثم ضع تصور الواجهات.",
                              "يمكن أن تحتاج الجهتان معًا؛ الأهم تحديد الحدود بدقة. في أعمال وصل تك أمثلة على مواقع الشركات ولوحات الإدارة، ويمكن الاستفادة منها لفهم الفرق ثم مشاركة متطلبات مشروعك لتحديد الحل الأقرب لاحتياجك."
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
        summary: "The difference is not just the interface. The right choice depends on what users must accomplish and what the business needs to manage behind the screen.",
        intro: "Do you need a website that explains your business, or a web system that runs part of it? The difference goes beyond design or programming language: it depends on what users must do and what data, permissions and workflows you must manage. This guide helps you choose and scope the work before commissioning development.",
        sections: [
          {
                    "heading": "The short answer: information versus operations",
                    "paragraphs": [
                              "A website organizes information visitors need to read: your company, services, projects, and a clear route to contact you. A web system supports repeatable tasks, such as creating and updating requests, managing user accounts, or tracking work records.",
                              "Having a dashboard does not automatically turn a simple website into a complex operational system. A content editor may only update public pages. Ask whether managing users' records and processes is central to the product."
                    ],
                    "bullets": [
                              "Present your offer and receive inquiries: assess a website.",
                              "Perform tasks with stored records and distinct roles: assess a web system.",
                              "Need public marketing and private operations: both can work together."
                    ]
          },
          {
                    "heading": "When a website is the better choice",
                    "paragraphs": [
                              "Choose a business website when most content is public: about pages, services, portfolio, FAQs and contact options. Focus on clear language, mobile navigation, well-organized pages, loading performance and search visibility.",
                              "For example, the Al Benaa Al Motqin project presents construction services and work examples before guiding visitors toward requesting a quotation. The priority is helping people understand the offer rather than running complex internal procedures."
                    ],
                    "bullets": [
                              "Company and professional service websites.",
                              "Published work and case studies.",
                              "Marketing or landing pages.",
                              "Articles and public content, with optional content editing tools."
                    ]
          },
          {
                    "heading": "When an operational web system makes sense",
                    "paragraphs": [
                              "A web system fits when records change over time, several user roles interact with them, and tasks have a start, status and completion. Data models, access controls, error handling and security become central to the work.",
                              "The CMS dashboard in the portfolio focuses on editing site content from an administrative space. The MikroTik dashboard groups users, cards and sessions. These illustrate operational workflows rather than pages intended only for visitors to read."
                    ],
                    "bullets": [
                              "Accounts with different roles and permissions.",
                              "Requests, tasks and records that must be updated.",
                              "Dashboards and reporting when genuinely required.",
                              "Specific service integrations.",
                              "Operational testing, backups and appropriate data protection."
                    ]
          },
          {
                    "heading": "Can you combine a website and web system?",
                    "paragraphs": [
                              "Yes. Public pages can explain the service and answer common questions, while customers sign in to submit requests and employees manage them through a private interface. The experiences can share a product while retaining clear data and permission boundaries.",
                              "Do not add accounts or an administration dashboard simply to make the proposal look advanced. Start with the smallest useful flow, validate it and expand based on real needs."
                    ]
          },
          {
                    "heading": "Planning, cost and maintenance differences",
                    "paragraphs": [
                              "A website focuses on content structure, UX, responsiveness, search visibility and speed. A web system additionally needs workflow rules, database design, access policies, input validation, operational test cases and safe updates.",
                              "Neither label has a standard price. Complexity depends on pages, users, features, integrations, testing and support. Ask for a scoped proposal describing what is delivered in the first release and what can wait.",
                              "Agree on data ownership, hosting, backups, maintenance responsibilities and how staff will learn to operate the system."
                    ]
          },
          {
                    "heading": "Seven questions to settle before development",
                    "paragraphs": [
                              "Write down concise answers before asking for a quote. Clear business requirements are more valuable than choosing a framework too early."
                    ],
                    "bullets": [
                              "Will people mostly read content or complete tasks?",
                              "Does anyone need to sign in, and why?",
                              "Which information must be saved or changed?",
                              "Who is allowed to see and edit it?",
                              "Are there repeated tasks, approvals or request states?",
                              "What is the smallest version you can test?",
                              "Who will manage content and operations after launch?"
                    ]
          },
          {
                    "heading": "A practical next step",
                    "paragraphs": [
                              "If the goal is presenting services and attracting inquiries, start with a sitemap, content and contact journey. If the goal is managing work across users, start with user roles, task flows and record states before designing screens.",
                              "Sometimes both are needed. Define their boundaries and review relevant examples in the Wasl Tech portfolio before choosing an implementation direction."
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
