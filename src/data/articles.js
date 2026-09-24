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
    coverImage: "/assets/services/web-development.webp",
    coverWidth: 1280,
    coverHeight: 720,
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
    coverImage: "/assets/services/ecommerce.webp",
    coverWidth: 1280,
    coverHeight: 720,
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
    coverImage: "/assets/services/brand-design.webp",
    coverWidth: 1280,
    coverHeight: 720,
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
  })
]);

export function getArticleBySlug(slug) {
  return articles.find((item) => item.slug === slug) ?? null;
}

export function getPublishedArticles() {
  return articles.filter((item) => item.publishedAt && item.localeStatus.ar === "ready");
}
