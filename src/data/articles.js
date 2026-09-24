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
    coverDimensions: record.coverDimensions ? Object.freeze(record.coverDimensions) : undefined,
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
    coverImage: "/assets/gen/blog_web.png",
    coverTemporary: true,
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    relatedServiceIds: ["web", "programming"],
    relatedProjectIds: [],
    content: {
      ar: {
        categoryLabel: "تخطيط رقمي",
        title: "موقع أم نظام ويب؟ كيف تختار المسار المناسب لمشروعك",
        summary: "الفرق ليس في شكل الواجهة فقط؛ الاختيار يعتمد على ما يجب أن ينجزه المستخدم وما الذي يحتاج المشروع إلى إدارته خلف الواجهة.",
        intro: "قبل أن تبدأ بالتصميم أو تسأل عن التقنية، حدد أولًا وظيفة المنتج. أحيانًا يحتاج المشروع موقعًا واضحًا يشرح الخدمة ويقود الزائر إلى التواصل، وأحيانًا يحتاج نظامًا يدير بيانات وصلاحيات وعمليات متكررة.",
        sections: [
          {
            heading: "ابدأ من الوظيفة وليس من الاسم",
            paragraphs: [
              "كلمة «موقع» قد تُستخدم لوصف أشياء مختلفة جدًا. لذلك السؤال الأدق هو: ماذا يجب أن يستطيع المستخدم أن يفعل بعد الدخول؟",
              "إذا كانت المهمة الأساسية هي فهم المشروع والخدمات والوصول إلى تواصل أو طلب بسيط، فغالبًا أنت أقرب إلى موقع. أما إذا كانت هناك حسابات وصلاحيات وحالات عمل وبيانات تتغير باستمرار، فأنت أقرب إلى نظام ويب."
            ]
          },
          {
            heading: "متى يكون الموقع هو الخيار الأنسب؟",
            paragraphs: ["الموقع مناسب عندما تكون الأولوية للحضور الواضح والمحتوى وسهولة الوصول إلى الإجراء التالي."],
            bullets: [
              "تعريف الشركة أو المشروع والخدمات.",
              "عرض أعمال أو حالات استخدام.",
              "محتوى يمكن إدارته وتحديثه.",
              "نماذج تواصل أو طلب مبدئي.",
              "صفحات تسويقية أو معلوماتية مهيأة للبحث."
            ]
          },
          {
            heading: "ومتى يتحول الاحتياج إلى نظام ويب؟",
            paragraphs: ["النظام يصبح منطقيًا عندما تكون القيمة الأساسية في تنفيذ عمليات متكررة وإدارة بيانات، لا في عرض المعلومات فقط."],
            bullets: [
              "تسجيل مستخدمين وحسابات متعددة.",
              "صلاحيات مختلفة بين الإدارة والموظفين والعملاء.",
              "لوحات متابعة وتقارير وحالات عمل.",
              "ربط بيانات أو خدمات خارجية.",
              "عمليات تحتاج حفظًا ومراجعةً وتحديثًا مستمرًا."
            ]
          },
          {
            heading: "أسئلة تساعدك على حسم الاتجاه",
            paragraphs: ["اكتب الإجابة على هذه الأسئلة قبل تحديد النطاق، لأنها تكشف بسرعة إن كان المطلوب حضورًا رقميًا أم منتجًا تشغيليًا."],
            bullets: [
              "هل سيقرأ المستخدم معلومات أم سينفذ مهمة داخل المنصة؟",
              "هل يحتاج إلى حساب وتسجيل دخول؟",
              "هل توجد بيانات تتغير لكل مستخدم أو لكل عملية؟",
              "هل هناك فريق داخلي يحتاج لوحة إدارة؟",
              "هل نجاح المشروع يعتمد على تدفق عمل مستمر بعد أول زيارة؟"
            ]
          },
          {
            heading: "لا تبدأ بنظام أكبر مما تحتاج",
            paragraphs: [
              "قد يكون المشروع النهائي كبيرًا، لكن هذا لا يعني أن النسخة الأولى يجب أن تحتوي كل شيء. الأفضل تحديد الجزء الذي يثبت الفكرة أو يحل المشكلة الأساسية ثم بناء بقية النطاق على أساس واضح.",
              "اختيار المسار الصحيح من البداية يقلل إعادة العمل ويجعل التصميم والتطوير مرتبطين بهدف مفهوم بدل تجميع خصائص لا يحتاجها المستخدم."
            ]
          }
        ],
        seo: {
          title: "موقع أم نظام ويب؟ دليل اختيار المسار المناسب | وصل تك",
          description: "تعرف على الفرق العملي بين الموقع الإلكتروني ونظام الويب، ومتى يحتاج مشروعك صفحات تعريفية ومحتوى أو حسابات وصلاحيات وعمليات تشغيلية."
        }
      },
      en: {
        categoryLabel: "Digital planning",
        title: "Website or web system? How to choose the right path for your project",
        summary: "The difference is not just the interface. The right choice depends on what users must accomplish and what the business needs to manage behind the screen.",
        intro: "Before choosing a design style or technology, define the product's job. Some projects need a clear website that explains the offer and guides visitors to an action. Others need a system that manages data, roles, and repeatable workflows.",
        sections: [
          {
            heading: "Start with the job, not the label",
            paragraphs: [
              "The word “website” is often used for very different products. A better question is: what should a user be able to do after arriving?",
              "If the main task is understanding the business, exploring services, and reaching a simple contact or request path, you are likely closer to a website. If the product needs accounts, roles, changing records, and repeatable workflows, you are closer to a web system."
            ]
          },
          {
            heading: "When is a website the better fit?",
            paragraphs: ["A website fits when the priority is clear presence, content, discovery, and moving visitors toward the next action."],
            bullets: [
              "Present the business and its services.",
              "Show work or use cases.",
              "Publish and manage content.",
              "Collect simple inquiries or requests.",
              "Support search-focused informational and marketing pages."
            ]
          },
          {
            heading: "When does the need become a web system?",
            paragraphs: ["A system makes sense when the core value comes from managing ongoing operations and data rather than mainly presenting information."],
            bullets: [
              "User registration and multiple account types.",
              "Different permissions for admins, staff, and customers.",
              "Dashboards, reports, and workflow states.",
              "External data or service integrations.",
              "Processes that need to be saved, reviewed, and updated continuously."
            ]
          },
          {
            heading: "Questions that clarify the direction",
            paragraphs: ["Answer these before fixing the scope. They quickly reveal whether you need a digital presence or an operational product."],
            bullets: [
              "Will users mainly read information or complete tasks inside the product?",
              "Do they need accounts and sign-in?",
              "Does the data change per user or transaction?",
              "Does an internal team need an admin area?",
              "Does success depend on an ongoing workflow after the first visit?"
            ]
          },
          {
            heading: "Do not start with a system larger than the need",
            paragraphs: [
              "The final product may be large, but the first version does not need to contain everything. Define the part that proves the idea or solves the core problem, then expand from a clearer base.",
              "Choosing the right path early reduces rework and keeps design and development tied to a real objective instead of accumulating features."
            ]
          }
        ],
        seo: {
          title: "Website or Web System? How to Choose | Wasl Tech",
          description: "Learn the practical difference between a business website and a web system, and when your project needs content pages versus accounts, permissions, data, and workflows."
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
    coverImage: "/assets/gen/blog_ecommerce.png",
    coverTemporary: true,
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    relatedServiceIds: ["store"],
    relatedProjectIds: [],
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
          title: "قبل بناء متجر إلكتروني: ما الذي يجب حسمه؟ | وصل تك",
          description: "دليل عملي لتحديد نموذج البيع والكتالوج والمخزون والدفع والشحن وحالات الطلب قبل بدء تصميم وتطوير متجر إلكتروني."
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
          title: "Before Building an E-commerce Store: What to Decide | Wasl Tech",
          description: "A practical guide to defining your selling model, catalog, inventory, payments, shipping, and order states before e-commerce design and development begins."
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
    coverImage: "/assets/gen/blog_brand.png",
    coverTemporary: true,
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    relatedServiceIds: ["web", "profiles", "design"],
    relatedProjectIds: [],
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
          title: "كيف تجهز محتوى موقعك قبل التصميم؟ | وصل تك",
          description: "خطوات عملية لترتيب رسالة المشروع ووظيفة الصفحات والمعلومات والصور قبل بدء تصميم الموقع، حتى تكون التجربة أوضح وأكثر اتساقًا."
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
          title: "How to Prepare Website Content Before Design | Wasl Tech",
          description: "Practical steps for organizing your business message, page goals, facts, and imagery before website design begins so the experience is clearer and more consistent."
        }
      }
    }
  }),

  article({
    id: "article-scope-mobile-app",
    slug: "turn-app-idea-into-buildable-scope",
    category: "planning",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/mobile-app-development.webp",
    coverDimensions: { width: 1280, height: 720 },
    coverTemporary: false,
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    relatedServiceIds: ["app"],
    relatedProjectIds: [],
    content: {
      ar: {
        categoryLabel: "تخطيط التطبيقات",
        title: "كيف تحوّل فكرة التطبيق إلى نطاق قابل للتنفيذ؟",
        summary: "الفكرة تصبح مشروعًا قابلًا للتنفيذ عندما تتحول من قائمة أمنيات إلى مستخدمين واضحين، ومهام أساسية، وبيانات، وحالات عمل يمكن تصميمها واختبارها.",
        intro: "قبل اختيار التقنية أو رسم عشرات الشاشات، اكتب ما الذي يجب أن ينجزه التطبيق فعلًا. هذه الخطوة تفصل بين فكرة عامة ونطاق يمكن لفريق التصميم والتطوير مراجعته وبناؤه على مراحل.",
        sections: [
          {
            heading: "ابدأ بالمستخدم والمهمة الأساسية",
            paragraphs: [
              "اكتب من سيستخدم التطبيق وما المهمة التي يعود من أجلها. قد يكون المستخدم عميلًا يطلب خدمة، أو موظفًا يتابع عمليات، أو بائعًا يدير منتجات. وضوح الدور يمنع خلط احتياجات مختلفة داخل شاشة واحدة.",
              "إذا كان التطبيق يخدم أكثر من نوع مستخدم، اكتب لكل نوع ما الذي يمكنه رؤيته وما الذي يمكنه تنفيذه."
            ]
          },
          {
            heading: "حوّل الخصائص إلى مسارات استخدام",
            paragraphs: ["بدل كتابة «تسجيل، دفع، إشعارات» كقائمة منفصلة، اربط كل خاصية بمسار مكتمل من البداية إلى النتيجة."],
            bullets: [
              "كيف يبدأ المستخدم؟",
              "ما البيانات التي يدخلها أو يختارها؟",
              "ما الخطوة التي تؤكد نجاح العملية؟",
              "ما الذي يحدث عند الخطأ أو الإلغاء؟",
              "هل تحتاج الإدارة إلى مراجعة أو اعتماد؟"
            ]
          },
          {
            heading: "حدد ما يحتاج إلى إدارة خلف التطبيق",
            paragraphs: ["أي تطبيق يحتوي بيانات متغيرة يحتاج قرارًا واضحًا حول مصدرها وطريقة إدارتها. قد تحتاج لوحة إدارة، أو API، أو تكاملًا مع خدمة خارجية، أو مزيجًا من ذلك."],
            bullets: [
              "المستخدمون والصلاحيات.",
              "المحتوى أو المنتجات أو الخدمات.",
              "الطلبات والحالات.",
              "الإشعارات والرسائل.",
              "التقارير أو المتابعة التشغيلية عند الحاجة."
            ]
          },
          {
            heading: "افصل النسخة الأولى عن الأفكار اللاحقة",
            paragraphs: [
              "ليس كل ما قد يحتاجه التطبيق مستقبلًا يجب أن يدخل في أول إصدار. رتب الخصائص إلى: ضروري لتشغيل الفكرة، مهم بعد ثبات المسار، وتحسين يمكن إضافته لاحقًا.",
              "هذا التقسيم لا يعني بناء منتج ناقص؛ بل يمنع أن يصبح النطاق الأول خليطًا من مسارات لم تُختبر بعد."
            ]
          },
          {
            heading: "ما الذي يجب أن يكون واضحًا قبل بدء التصميم؟",
            paragraphs: ["عندما تستطيع الإجابة عن النقاط التالية يصبح من السهل تحويل الفكرة إلى تدفق شاشات ونطاق فني قابل للمراجعة."],
            bullets: [
              "أنواع المستخدمين.",
              "المهمة الأساسية لكل مستخدم.",
              "المسارات الرئيسية.",
              "البيانات التي تُحفظ أو تُعرض.",
              "ما الذي تديره لوحة الإدارة.",
              "التكاملات الخارجية المعروفة.",
              "حدود النسخة الأولى."
            ]
          }
        ],
        seo: {
          title: "كيف تحوّل فكرة التطبيق إلى نطاق قابل للتنفيذ؟ | وصل تك",
          description: "دليل عملي لتحويل فكرة تطبيق الجوال إلى مستخدمين ومسارات وبيانات ولوحة إدارة ونطاق واضح يمكن تصميمه وتطويره على مراحل."
        }
      },
      en: {
        categoryLabel: "App planning",
        title: "How do you turn an app idea into a buildable scope?",
        summary: "An app idea becomes buildable when it is translated from a wish list into clear users, core tasks, data, and workflows that a team can design and test.",
        intro: "Before choosing technology or drawing dozens of screens, define what the app must actually help people accomplish. This separates a broad idea from a scope that design and engineering can review and deliver in stages.",
        sections: [
          {
            heading: "Start with the user and the core task",
            paragraphs: [
              "Write down who will use the app and the task they return to complete. The user may be a customer requesting a service, an employee following operations, or a seller managing products. A clear role keeps different needs from being mixed into the same flow.",
              "If the app serves multiple user types, define what each role can see and do."
            ]
          },
          {
            heading: "Turn features into complete user flows",
            paragraphs: ["Instead of listing “sign in, payments, notifications” as isolated features, connect each capability to a complete path from entry to outcome."],
            bullets: [
              "How does the user start?",
              "What data do they enter or choose?",
              "What confirms that the action succeeded?",
              "What happens when something fails or is cancelled?",
              "Does an administrator need to review or approve anything?"
            ]
          },
          {
            heading: "Define what must be managed behind the app",
            paragraphs: ["Any app with changing data needs a clear source of truth and a way to manage it. That may require an admin dashboard, APIs, external services, or a combination of them."],
            bullets: [
              "Users and permissions.",
              "Content, products, or services.",
              "Orders and workflow states.",
              "Notifications and messages.",
              "Operational reporting when needed."
            ]
          },
          {
            heading: "Separate the first release from later ideas",
            paragraphs: [
              "Not every future idea belongs in the first release. Group features into what is required to operate the core idea, what matters after the main flow is proven, and what can be added later.",
              "This does not mean shipping an incomplete product. It prevents the first scope from becoming a collection of untested workflows."
            ]
          },
          {
            heading: "What should be clear before design starts?",
            paragraphs: ["When you can answer the following points, the idea can be turned into screen flows and an implementation scope that is easier to review."],
            bullets: [
              "User types.",
              "The core task for each user.",
              "Primary workflows.",
              "Data that is stored or displayed.",
              "What the admin area controls.",
              "Known external integrations.",
              "Boundaries of the first release."
            ]
          }
        ],
        seo: {
          title: "Turn an App Idea Into a Buildable Scope | Wasl Tech",
          description: "A practical guide to defining app users, workflows, data, admin needs, integrations, and a clear first-release scope before design and development."
        }
      }
    }
  }),
  article({
    id: "article-integrate-or-replace",
    slug: "integrate-systems-or-replace-them",
    category: "technical",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/technical-solutions.webp",
    coverDimensions: { width: 1280, height: 720 },
    coverTemporary: false,
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    relatedServiceIds: ["technical"],
    relatedProjectIds: [],
    content: {
      ar: {
        categoryLabel: "حلول وتكامل",
        title: "متى يكون ربط الأنظمة أفضل من استبدالها؟",
        summary: "ليست كل مشكلة تقنية سببًا لإعادة بناء النظام. أحيانًا تكون القيمة في ربط الأدوات الحالية وتوحيد انتقال البيانات بدل استبدال ما يعمل بالفعل.",
        intro: "عندما تستخدم الشركة أكثر من نظام أو خدمة، يظهر السؤال: هل نبني كل شيء من جديد أم نربط الموجود؟ القرار الصحيح يبدأ من المشكلة التشغيلية والبيانات التي يجب أن تنتقل، وليس من الرغبة في تغيير التقنية فقط.",
        sections: [
          {
            heading: "ابدأ بما يعمل اليوم",
            paragraphs: [
              "حدد الأنظمة التي يعتمد عليها الفريق فعلًا، وما الذي ينجح فيها، وما الذي يسبب تكرارًا أو تأخيرًا. استبدال نظام مستقر قد يخلق مشروع ترحيل كبير بدون أن يحل المشكلة الأصلية.",
              "إذا كانت المشكلة هي نقل بيانات أو تكرار إدخالها بين أداتين، فقد يكون التكامل هو المسار الأبسط."
            ]
          },
          {
            heading: "متى يكون التكامل منطقيًا؟",
            paragraphs: ["الربط مناسب عندما تستطيع الأنظمة الحالية الاستمرار في أدوارها لكن تحتاج إلى تبادل بيانات أو تشغيل خطوة تلقائيًا."],
            bullets: [
              "وجود API أو وسيلة موثوقة لتبادل البيانات.",
              "وضوح النظام الذي يملك كل نوع من البيانات.",
              "الحاجة إلى تقليل الإدخال اليدوي المتكرر.",
              "الحاجة إلى مزامنة حالة أو حدث بين نظامين.",
              "إمكانية مراقبة الأخطاء وإعادة المحاولة."
            ]
          },
          {
            heading: "ومتى يصبح الاستبدال أقرب للمنطق؟",
            paragraphs: ["التكامل لا يصلح كل شيء. إذا كان النظام الأساسي نفسه يعطل العمل أو لا يوفر وصولًا مناسبًا للبيانات، فقد يتحول الربط إلى طبقة إضافية فوق مشكلة أعمق."],
            bullets: [
              "النظام لا يدعم العمليات الأساسية المطلوبة.",
              "البيانات غير قابلة للاستخراج أو الاعتماد.",
              "تعدد الحلول الجزئية أصبح أصعب من نظام موحد.",
              "قيود الأمان أو الصلاحيات لا يمكن معالجتها بصورة مناسبة.",
              "تكلفة الصيانة والتعقيد أصبحت جزءًا من المشكلة."
            ]
          },
          {
            heading: "حدد مصدر الحقيقة لكل معلومة",
            paragraphs: [
              "قبل بناء أي تكامل، حدد أين تُنشأ المعلومة وأي نظام يملك النسخة الأساسية منها. من دون ذلك قد تتحول المزامنة إلى تعارض بين نسخ مختلفة من نفس البيانات.",
              "بعد تحديد الملكية يمكن رسم اتجاه انتقال البيانات: من يرسل، من يستقبل، وماذا يحدث عند الفشل أو التكرار."
            ]
          },
          {
            heading: "قرار الربط يبدأ من عملية واحدة",
            paragraphs: ["بدل محاولة ربط كل الأنظمة دفعة واحدة، اختر عملية واضحة تسبب وقتًا أو تكرارًا، وارسمها من البداية للنهاية. إذا أثبت الربط قيمته وأصبح قابلًا للمراقبة، يمكن توسيع التكامل إلى العمليات التالية."]
          }
        ],
        seo: {
          title: "متى يكون ربط الأنظمة أفضل من استبدالها؟ | وصل تك",
          description: "دليل لاتخاذ قرار بين تكامل الأنظمة الحالية واستبدالها، من خلال العمليات والبيانات وواجهات API ومصدر الحقيقة والتعقيد التشغيلي."
        }
      },
      en: {
        categoryLabel: "Integration & solutions",
        title: "When is system integration better than replacement?",
        summary: "Not every technical problem requires rebuilding the system. Sometimes the better move is connecting existing tools and improving data flow instead of replacing what already works.",
        intro: "When a business relies on several systems or services, the question becomes whether to rebuild everything or connect what exists. The decision should start with the operational problem and the data that must move, not with a desire to change technology for its own sake.",
        sections: [
          {
            heading: "Start with what already works",
            paragraphs: [
              "Identify the systems the team actually depends on, what works well, and where duplication or delay appears. Replacing a stable system can create a major migration project without solving the original issue.",
              "If the main problem is moving the same data or entering it repeatedly across tools, integration may be the simpler path."
            ]
          },
          {
            heading: "When does integration make sense?",
            paragraphs: ["Integration fits when existing systems can keep their roles but need to exchange data or trigger steps automatically."],
            bullets: [
              "An API or another reliable data-exchange method exists.",
              "Ownership of each type of data is clear.",
              "Repeated manual entry needs to be reduced.",
              "A status or event needs to move between systems.",
              "Failures can be monitored and retried."
            ]
          },
          {
            heading: "When is replacement more reasonable?",
            paragraphs: ["Integration cannot fix every foundation problem. If the core system blocks the work or does not provide dependable access to data, another connection may only add complexity."],
            bullets: [
              "The system cannot support required core operations.",
              "Data cannot be extracted or trusted.",
              "Multiple partial workarounds are harder than one coherent system.",
              "Security or permission limitations cannot be addressed appropriately.",
              "Maintenance complexity has become part of the problem."
            ]
          },
          {
            heading: "Define the source of truth for every data type",
            paragraphs: [
              "Before building an integration, decide where each record is created and which system owns the authoritative version. Without this, synchronization can become a conflict between different copies of the same data.",
              "Once ownership is clear, map the direction of data flow: who sends, who receives, and what happens when a request fails or repeats."
            ]
          },
          {
            heading: "Start integration with one clear process",
            paragraphs: ["Instead of connecting every system at once, choose one workflow that causes duplication or delay and map it from beginning to end. If the integration is reliable and observable, the same pattern can expand to the next process."]
          }
        ],
        seo: {
          title: "System Integration or Replacement? How to Decide | Wasl Tech",
          description: "A practical guide to deciding whether to integrate existing systems or replace them by examining workflows, APIs, data ownership, and operational complexity."
        }
      }
    }
  }),
  article({
    id: "article-company-profile-content",
    slug: "what-should-company-profile-include",
    category: "profiles",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/company-profiles.webp",
    coverDimensions: { width: 1280, height: 720 },
    coverTemporary: false,
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    relatedServiceIds: ["profiles"],
    relatedProjectIds: [],
    content: {
      ar: {
        categoryLabel: "بروفايلات الشركات",
        title: "ما الذي يجب أن يحتويه بروفايل الشركة؟",
        summary: "البروفايل الجيد ليس تجميعًا لكل معلومات الشركة؛ هو ترتيب لما يحتاج القارئ أن يعرفه كي يفهم الجهة وخدماتها ويثق بالخطوة التالية.",
        intro: "قبل البدء بالتصميم، حدد من سيقرأ البروفايل ولماذا. ملف يُرسل إلى عميل محتمل يحتاج ترتيبًا مختلفًا عن عرض يستخدم في اجتماع أو ملف يُرفق بمناقصة، حتى لو شاركت جميع النسخ نفس الهوية الأساسية.",
        sections: [
          {
            heading: "ابدأ برسالة تعريف قصيرة",
            paragraphs: ["القارئ يحتاج أولًا إلى فهم من أنتم، ماذا تقدمون، ولمن. يمكن بعد ذلك توسيع القصة في قسم «من نحن»، لكن البداية يجب أن تكون مباشرة ولا تحتاج صفحات طويلة لفهم النشاط."]
          },
          {
            heading: "رتب الخدمات حسب قرار العميل",
            paragraphs: ["لا تضع أسماء الخدمات فقط. لكل خدمة اشرح الاحتياج الذي تعالجه وما الذي يحصل عليه العميل بصورة موجزة."],
            bullets: [
              "اسم الخدمة.",
              "ما المشكلة أو الحاجة التي تخدمها.",
              "النطاق أو المخرجات الرئيسية.",
              "ما الذي يميز طريقة تقديمها عندما توجد حقيقة يمكن إثباتها."
            ]
          },
          {
            heading: "استخدم الأعمال كدليل لا كزينة",
            paragraphs: [
              "إذا كانت هناك مشاريع أو صور يمكن نشرها، اربطها بالخدمة أو القدرة التي تثبتها. لا تحتاج كل صفحة إلى عدد كبير من الأعمال؛ يكفي الدليل المرتبط بالرسالة.",
              "تجنب إضافة أرقام نتائج أو أسماء عملاء أو شعارات لا يوجد اعتماد واضح لنشرها."
            ]
          },
          {
            heading: "أضف ما يحتاجه القارئ للتواصل",
            paragraphs: ["الملف يجب أن يقود إلى خطوة واضحة. اجمع قنوات التواصل المعتمدة واترك مساحة مناسبة لبيانات الشركة التي يحتاجها نوع الجمهور المستهدف."],
            bullets: [
              "الهاتف أو واتساب.",
              "البريد الإلكتروني.",
              "الموقع الإلكتروني.",
              "حسابات التواصل الرسمية عند الحاجة.",
              "العنوان أو بيانات قانونية فقط إذا كانت مطلوبة ومعتمدة."
            ]
          },
          {
            heading: "فكر في نسخة الاستخدام قبل مقاس التصميم",
            paragraphs: [
              "حدد هل البروفايل سيُقرأ على الهاتف، يُرسل PDF، يُطبع، أو يُعرض على شاشة. نفس المحتوى قد يحتاج ترتيبًا مختلفًا حسب الاستخدام.",
              "عندما يكون المحتوى معتمدًا قبل التصميم، يصبح من الأسهل ضبط عدد الصفحات والتسلسل والصور بدون حشو أو اختصار يضر بالرسالة."
            ]
          }
        ],
        seo: {
          title: "ما الذي يجب أن يحتويه بروفايل الشركة؟ | وصل تك",
          description: "دليل لترتيب محتوى بروفايل الشركة من التعريف والخدمات والأعمال إلى بيانات التواصل ونسخة الاستخدام قبل بدء التصميم."
        }
      },
      en: {
        categoryLabel: "Company profiles",
        title: "What should a company profile include?",
        summary: "A strong company profile is not a dump of every company fact. It organizes what a reader needs to understand the business, its services, and the next step.",
        intro: "Before design starts, define who will read the profile and why. A document sent to a prospective client may need a different sequence from a presentation used in a meeting or a profile attached to a formal proposal, even when they share the same brand system.",
        sections: [
          {
            heading: "Start with a short positioning statement",
            paragraphs: ["The reader first needs to understand who you are, what you provide, and who it is for. The story can expand later in an About section, but the opening should make the business understandable without several pages of context."]
          },
          {
            heading: "Organize services around the client decision",
            paragraphs: ["Do not list service names alone. For each service, explain the need it addresses and what the client receives in concise terms."],
            bullets: [
              "Service name.",
              "The problem or need it addresses.",
              "Primary scope or deliverables.",
              "A differentiator only when it is a fact you can support."
            ]
          },
          {
            heading: "Use work as evidence, not decoration",
            paragraphs: [
              "When projects or approved images are available, connect them to the service or capability they demonstrate. A profile does not need a large gallery if a smaller set provides clearer evidence.",
              "Avoid outcome numbers, client names, or logos when publication has not been approved."
            ]
          },
          {
            heading: "Include what the reader needs to contact you",
            paragraphs: ["The profile should lead to a clear next step. Include approved contact channels and the company information that matters to the intended audience."],
            bullets: [
              "Phone or WhatsApp.",
              "Email.",
              "Website.",
              "Official social accounts when useful.",
              "Address or legal details only when required and approved."
            ]
          },
          {
            heading: "Decide the use format before the page size",
            paragraphs: [
              "Clarify whether the profile will be read on phones, sent as a PDF, printed, or presented on a screen. The same content may need a different sequence depending on how it will be used.",
              "When content is approved before design, page count, hierarchy, and imagery can be shaped without filler or harmful compression."
            ]
          }
        ],
        seo: {
          title: "What Should a Company Profile Include? | Wasl Tech",
          description: "A practical guide to organizing company profile content from positioning and services to work evidence, contact information, and the intended use format."
        }
      }
    }
  }),
  article({
    id: "article-content-plan-goal",
    slug: "build-content-plan-around-business-goal",
    category: "marketing",
    localeStatus: { ar: "ready", en: "ready" },
    author: { ar: "فريق وصل تك", en: "Wasl Tech team" },
    coverImage: "/assets/services/digital-marketing.webp",
    coverDimensions: { width: 1280, height: 720 },
    coverTemporary: false,
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    relatedServiceIds: ["marketing"],
    relatedProjectIds: [],
    content: {
      ar: {
        categoryLabel: "تسويق ومحتوى",
        title: "كيف تبني خطة محتوى مرتبطة بهدف مشروعك؟",
        summary: "خطة المحتوى لا تبدأ بعدد المنشورات. تبدأ بالهدف والجمهور والرسائل التي تساعد الشخص على الانتقال من المعرفة إلى الفهم ثم اتخاذ خطوة مناسبة.",
        intro: "عندما تُبنى الخطة على «ننشر كل يوم» فقط، يصبح المحتوى جدولًا يحتاج التعبئة. الأفضل أن تبدأ بالنتيجة التي تريد دعمها، ثم تحدد أنواع المحتوى والقنوات التي تخدمها.",
        sections: [
          {
            heading: "حدد الهدف الذي يخدمه المحتوى",
            paragraphs: ["لا تستخدم كلمة «انتشار» كهدف وحيد. اكتب ما الذي تريد أن يتغير عند الجمهور: أن يفهم خدمة جديدة، يطلب عرضًا، يعود للمتجر، أو يعرف طريقة استخدام منتج."],
            bullets: [
              "زيادة وضوح خدمة أو منتج.",
              "دعم قرار قبل الشراء.",
              "إجابة أسئلة متكررة.",
              "إعادة تذكير جمهور يعرف العلامة.",
              "توجيه الجمهور إلى صفحة أو إجراء محدد."
            ]
          },
          {
            heading: "قسم الجمهور حسب الحاجة لا حسب العمر فقط",
            paragraphs: ["الجمهور المفيد للمحتوى هو مجموعة تشترك في سؤال أو مشكلة أو مرحلة قرار. قد يكون شخصًا يتعرف على الخدمة لأول مرة، أو يقارن بين خيارات، أو يحتاج دليلًا قبل البدء."]
          },
          {
            heading: "حوّل الرسائل إلى محاور مستمرة",
            paragraphs: ["المحور الجيد يعطيك أكثر من فكرة بدون تكرار نفس المنشور. اربط كل محور بجانب يريد الجمهور فهمه."],
            bullets: [
              "المشكلة أو الحاجة.",
              "طريقة الحل.",
              "أمثلة أو أعمال حقيقية.",
              "أسئلة واعتراضات قبل القرار.",
              "طريقة العمل وما يحتاجه العميل للاستعداد."
            ]
          },
          {
            heading: "اختر القناة حسب طبيعة الرسالة",
            paragraphs: [
              "ليست كل فكرة مناسبة لكل منصة. المحتوى القصير قد يلفت الانتباه إلى سؤال، بينما الموقع أو المقال يناسب شرحًا يحتاج سياقًا وتفاصيل يمكن الرجوع إليها.",
              "استخدم القناة لتقديم الرسالة بالشكل الذي يساعد المستخدم، لا لمجرد نسخ نفس المحتوى في كل مكان."
            ]
          },
          {
            heading: "راجع الخطة على أساس الجودة والنتيجة",
            paragraphs: [
              "في نهاية كل دورة، راجع أي موضوع جذب أسئلة حقيقية أو زيارات ذات صلة أو تواصلًا مفيدًا، وأي محتوى لم يخدم هدفًا واضحًا.",
              "الهدف من المراجعة ليس مطاردة رقم واحد، بل فهم الرسائل التي تساعد الجمهور وتحسين ما تنشره بعد ذلك."
            ]
          }
        ],
        seo: {
          title: "كيف تبني خطة محتوى مرتبطة بهدف مشروعك؟ | وصل تك",
          description: "دليل لبناء خطة محتوى تبدأ بالهدف والجمهور والرسائل والمحاور والقنوات بدل الاعتماد على عدد المنشورات فقط."
        }
      },
      en: {
        categoryLabel: "Marketing & content",
        title: "How do you build a content plan around a business goal?",
        summary: "A content plan should not start with a post count. It starts with the goal, audience, and messages that help people move from awareness to understanding and an appropriate next step.",
        intro: "When the plan begins with “we need to post every day,” content becomes a calendar that needs filling. A stronger approach starts with the outcome you want to support, then selects the content types and channels that serve it.",
        sections: [
          {
            heading: "Define the goal the content should support",
            paragraphs: ["Do not use “reach” as the only goal. Write down what should change for the audience: understand a new service, request a proposal, return to a store, or learn how to use a product."],
            bullets: [
              "Make a service or product clearer.",
              "Support a decision before purchase.",
              "Answer recurring questions.",
              "Reconnect with an audience that already knows the brand.",
              "Move people to a specific page or action."
            ]
          },
          {
            heading: "Segment the audience by need, not age alone",
            paragraphs: ["A useful content audience is a group that shares a question, problem, or decision stage. It may be someone discovering the service, comparing options, or preparing to start."]
          },
          {
            heading: "Turn messages into repeatable themes",
            paragraphs: ["A useful theme can produce multiple ideas without repeating the same post. Tie each theme to something the audience needs to understand."],
            bullets: [
              "The problem or need.",
              "How the solution works.",
              "Real work or examples.",
              "Questions and objections before a decision.",
              "The working process and what the client should prepare."
            ]
          },
          {
            heading: "Choose the channel around the message",
            paragraphs: [
              "Not every idea belongs on every platform. Short content can introduce a question, while a website or article is better for explanations that need context and a durable reference.",
              "Use each channel in the format that helps the user instead of copying the same content everywhere."
            ]
          },
          {
            heading: "Review the plan for quality and outcome",
            paragraphs: [
              "At the end of a cycle, review which topics generated real questions, relevant visits, or useful conversations, and which content had no clear purpose.",
              "The goal is not to chase one metric. It is to learn which messages help the audience and improve what you publish next."
            ]
          }
        ],
        seo: {
          title: "Build a Content Plan Around a Business Goal | Wasl Tech",
          description: "A practical guide to planning content around goals, audience needs, message themes, and channel fit instead of starting with a posting quota."
        }
      }
    }
  }),

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
