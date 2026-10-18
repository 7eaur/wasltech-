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
        summary: "هل تحتاج موقعًا يعرض نشاطك ويجلب الاستفسارات، أم نظام ويب يدير مستخدمين وبيانات وعمليات؟ تعرّف على الفرق ومعايير القرار ونطاق البداية المناسب.",
        intro: "الجواب المختصر: اختر موقعًا إلكترونيًا عندما تكون مهمة الزائر الأساسية التعرف على خدماتك أو أعمالك أو التواصل معك. واختر نظام ويب عندما يحتاج المستخدم إلى تسجيل الدخول وتنفيذ مهام مستمرة تتعامل مع بيانات وصلاحيات وحالات عمل. قد يجمع المشروع بينهما، لكن فصل وظيفتهما قبل كتابة الكود يوفر عليك قرارات مكلفة لاحقًا. في هذا الدليل نقارن الحالتين بأسئلة وأمثلة واضحة، ثم نرتب ما يجب تجهيزه قبل طلب عرض تنفيذ.",
        sections: [
          {
            "heading": "الفرق الأساسي: ما الذي يحدث بعد فتح الصفحة؟",
            "paragraphs": [
              "الموقع الإلكتروني يتمحور غالبًا حول النشر والعرض والوصول إلى إجراء واضح: قراءة خدمة، مشاهدة مشروع، إرسال استفسار أو الاطلاع على معلومات الشركة. يمكنه استخدام لوحة إدارة للمحتوى ونموذج تواصل دون أن يتحول تلقائيًا إلى نظام أعمال متكامل.",
              "نظام الويب يتمحور حول عملية يجب تنفيذها وحفظ نتيجتها: إنشاء طلب، تعيينه لموظف، تغيير حالته، السماح لمسؤول بمراجعته وإظهار تقرير عند الحاجة. الفرق إذن في عمق التشغيل والبيانات، لا في وجود تصميم جميل أو لوحة تحكم."
            ]
          },
          {
            "heading": "متى يكفي موقع تعريفي احترافي؟",
            "paragraphs": [
              "إذا كنت تدير مكتبًا أو شركة خدمات أو مشروعًا يريد إثبات حضوره الرقمي، فقد يبدأ الحل بموقع يوضح من أنت وما تقدمه ولمن، ويعرض أعمالًا مختارة وطريقة موثوقة للتواصل. الأهم أن يصل الزائر إلى المعلومة دون تعقيد، خاصة على الهاتف.",
              "قبل توسيع النطاق، راجع المحتوى المطلوب: الخدمات، الأسئلة المتكررة، نماذج طلب عرض سعر، سياسة الخصوصية، ووسيلة تحديث النصوص. وجود نموذج استفسار أو مدونة لا يتطلب بالضرورة منصة إدارة عمليات واسعة."
            ],
            "bullets": [
              "موقع شركة مقاولات يعرض الخدمات والمشاريع ويتيح طلب عرض سعر.",
              "موقع مكتب مهني يشرح التخصصات وطرق التواصل.",
              "صفحات هبوط لحملة تسويقية تعرض عرضًا محددًا وتقود إلى إجراء واحد."
            ]
          },
          {
            "heading": "متى تحتاج نظام ويب مخصصًا؟",
            "paragraphs": [
              "عندما تتكرر العملية بين عدة مستخدمين أو تمر بحالات وصلاحيات ومراجعات، يبدأ الاحتياج إلى نظام. مثال ذلك إدارة مستخدمين وكروت وجلسات في شبكة، أو إدارة طلبات داخلية ومتابعة من يملك حق الاطلاع أو التعديل.",
              "لكي لا يتحول النظام إلى مجموعة شاشات لا ترتبط ببعضها، حدد من يبدأ العملية، وما البيانات المطلوبة، ومتى تتغير الحالة، ومن يراجعها، وما الذي يجب الاحتفاظ به في السجل. هذه التفاصيل تحدد قاعدة البيانات والتصميم والصلاحيات بدرجة أكبر من شكل الواجهة."
            ],
            "bullets": [
              "حسابات وأدوار مختلفة مثل العميل والموظف والمشرف.",
              "بيانات قابلة للتحديث مع سجل للحالات والمهام.",
              "تقارير أو إجراءات متكررة أو ربط مع أنظمة أخرى."
            ]
          },
          {
            "heading": "هل المتجر الإلكتروني موقع أم نظام؟",
            "paragraphs": [
              "المتجر مثال مفيد على أن الحدود ليست حادة دائمًا. لدى المتجر صفحات تعرض المنتجات والمعلومات مثل أي موقع، لكنه يحتاج كذلك إلى إدارة منتجات وسلة وطلبات وحالات شراء، وقد يحتاج مخزونًا وشحنًا ودفعًا وفق نطاق العمل الفعلي.",
              "لا تطلب جميع وظائف التجارة دفعة واحدة. ابدأ بتحديد طريقة وصول العميل إلى المنتج، وطريقة تسجيل الطلب، ومن يستلمه، وكيف تتم متابعة حالته. بعد ذلك يتضح هل تحتاج متجرًا جاهزًا قابلًا للتخصيص، أم وظائف تشغيلية خاصة."
            ]
          },
          {
            "heading": "أمثلة عملية من أنواع مشاريع وصل تك",
            "paragraphs": [
              "يساعد النظر إلى أعمال مختلفة على فهم القرار. موقع «البناء المتقن» يمثل مسار عرض الخدمات والمشاريع وطلب التواصل؛ ولوحة إدارة المحتوى CMS تمثل مسارًا داخليًا لتعديل معلومات الصفحات. اختلاف الهدف بين الزائر ومسؤول المحتوى يفسر اختلاف طبيعة الحل، لا يعني تفوق أحدهما.",
              "أما لوحة إدارة الميكروتيك فتندرج ضمن أدوات التشغيل لأنها تتعامل مع المستخدمين والكروت والجلسات، في حين أن مواقع الخدمات التعريفية تركز على وضوح المحتوى والاتصال. هذه أمثلة على نطاق الأعمال الموصوف في معرضنا؛ وليست ادعاءً بنتائج مالية أو أرقام استخدام."
            ]
          },
          {
            "heading": "ستة أسئلة تحدد اتجاه مشروعك",
            "paragraphs": [
              "قبل السؤال عن لغة البرمجة أو التكلفة، حاول وصف العملية من البداية للنهاية بلغة بسيطة. إذا كانت الإجابات تدور حول محتوى وصفحات وتواصل، فابدأ بتصميم موقع. وإذا كانت تتمحور حول مستخدمين وقواعد بيانات وتنفيذ عمليات، فاطلب تحليل نظام."
            ],
            "bullets": [
              "من هم المستخدمون؟ زائر فقط أم عملاء وموظفون ومشرفون؟",
              "ما المهمة الأهم؟ قراءة معلومات أم إنشاء طلب أو تحديث سجل؟",
              "هل تحتاج تسجيل دخول وصلاحيات تختلف حسب الدور؟",
              "هل البيانات ثابتة نسبيًا أم تتغير يوميًا مع كل عملية؟",
              "هل توجد موافقات وتقارير وتكاملات مع أدوات أخرى؟",
              "ما أبسط نتيجة يمكن اختبارها في أول إصدار؟"
            ]
          },
          {
            "heading": "ما الذي يؤثر في التكلفة والوقت؟",
            "paragraphs": [
              "لا يمكن مقارنة سعر موقع من خمس صفحات بسعر نظام يحتوي أدوارًا وصلاحيات وتدفقات عمل بمجرد عدّ الشاشات. تتأثر التقديرات بالمحتوى الجاهز، وتصميم الواجهات، والتكاملات، وحماية البيانات، والاختبارات، والاستضافة، وما إذا كانت هناك إدارة محتوى أو لوحة تشغيل.",
              "اطلب عرضًا يفصل نطاق التصميم والتطوير والمراجعات والتشغيل والصيانة. واذكر بوضوح ما هو داخل الإصدار الأول وما يؤجل إلى إصدار لاحق. ليس الهدف تقليل الميزانية بأي ثمن، بل منع تكلفة بناء جزء لا يخدم الاستخدام الحقيقي."
            ]
          },
          {
            "heading": "كيف تبدأ دون بناء نظام أكبر من احتياجك؟",
            "paragraphs": [
              "ابدأ بورقة تحدد المشكلة، والجهة التي تواجهها، والخطوة الحالية التي تريد تحسينها. اكتب ثلاثة سيناريوهات حقيقية بدل قائمة طويلة من الميزات: كيف يكتشف العميل الخدمة، وكيف ينفذ المستخدم المهمة، وكيف يعرف المسؤول أن العملية انتهت.",
              "يمكن أن تبدأ بموقع قوي ثم تضيف وظائف تشغيلية عندما تتضح الحاجة، ويمكن أن يكون النظام منذ اليوم الأول ضرورة إذا كانت البيانات والصلاحيات في صميم المنتج. القرار السليم لا يختار الحل الأبسط دائمًا؛ بل يختار أقل نطاق متكامل يؤدي المهمة المطلوبة."
            ],
            "bullets": [
              "وثّق هدف المشروع والفئات المستخدمة قبل طلب التصميم.",
              "حدد البيانات اللازمة ومالكيها وصلاحيات الوصول إليها.",
              "رتب الوظائف إلى أساسية للإطلاق ومؤجلة.",
              "اطلب اختبار رحلة المستخدم كاملة قبل اعتماد التسليم."
            ]
          },
          {
            "heading": "أخطاء شائعة ينبغي تجنبها",
            "paragraphs": [
              "من الأخطاء طلب «موقع متكامل» ثم اكتشاف أن المطلوب نظام حجوزات وموافقات متعددة، أو طلب «نظام ضخم» لعرض بعض الخدمات فقط. ومن الأخطاء أيضًا عدم تجهيز النصوص أو ترك مسؤولية تحديث البيانات غامضة، ثم تغيير النطاق أثناء التنفيذ.",
              "وجود لوحة تحكم لا يثبت وحده أن المشروع نظام مخصص، واستخدام تقنية معينة لا يجعل الحل أفضل تلقائيًا. ما يهم هو وضوح الهدف، وإمكانية التوسع عند الحاجة، وتجربة الاستخدام، والصيانة بعد الإطلاق."
            ]
          },
          {
            "heading": "الخلاصة: اختر الحل بناءً على العملية لا التسمية",
            "paragraphs": [
              "إذا كان النجاح يعني أن يفهم الزائر نشاطك ويصل إلى التواصل، فابدأ بتخطيط موقع إلكتروني واضح. وإذا كان النجاح يعني أن ينفّذ فريقك أو عملاؤك خطوات تشغيلية محفوظة وقابلة للمتابعة، فالأقرب نظام ويب. ويمكن الفصل بين واجهة عامة للموقع ونظام داخلي عندما يتطلب النشاط الأمرين.",
              "عند مناقشة مشروعك مع فريق التطوير، أرسل مثالًا للعمليات والمستخدمين والمخرجات المتوقعة بدل الاكتفاء بعبارة «نريد منصة». هذا يمنحك عرضًا أدق ومسار تنفيذ قابلًا للفحص."
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
        summary: "Need a website that explains your business or a web system that handles users, records and operations? Compare the options, decision criteria and practical first steps.",
        intro: "In short, choose a website when visitors mainly need to understand your services, explore your work and get in touch. Choose a web system when people must sign in and carry out ongoing tasks involving records, permissions and workflow states. Some products need both, but defining their roles before development avoids building the wrong thing. This guide offers practical distinctions, realistic examples and a scope checklist.",
        sections: [
          {
            "heading": "The core distinction: what happens after someone arrives?",
            "paragraphs": [
              "A website usually helps someone discover information and take a straightforward action: understand a service, explore a project, send an enquiry or learn about a company. It can have editable content and forms without becoming a custom operations system.",
              "A web system centers on work that must be performed and recorded: creating a request, assigning it, changing its state, authorizing another user to review it and reporting on what happened. The distinction is operational depth and data behavior, not the presence of an attractive interface."
            ]
          },
          {
            "heading": "When is a business website enough?",
            "paragraphs": [
              "For a professional practice, contractor or services company, a website can establish a clear public presence: who you serve, what you provide, relevant work and an obvious way to enquire. Making those steps straightforward on mobile may be more valuable than adding complex features.",
              "Prepare the real content first: service descriptions, selected work, questions, enquiry flow, privacy information and a way to maintain published information. Neither a contact form nor a blog automatically calls for a bespoke management platform."
            ],
            "bullets": [
              "A contractor's website presenting services, work and quotation enquiries.",
              "A professional firm's website describing specialisms and contact options.",
              "Campaign landing pages centered on one specific action."
            ]
          },
          {
            "heading": "When does the requirement become a web system?",
            "paragraphs": [
              "If several users carry out repeatable tasks with roles, records, approvals or changing statuses, the core need is likely a web system. Think of managing network subscribers, access cards and sessions, or coordinating internal tasks across employees.",
              "Define who starts a process, which information is required, when its status changes, who can review it and which records must be retained. Those decisions shape the database, permissions and workflows more than the visual layout does."
            ],
            "bullets": [
              "Different accounts and roles for customers, employees and administrators.",
              "Records that change over time, with workflow states and responsibilities.",
              "Reports, repeatable operations or integration with other software."
            ]
          },
          {
            "heading": "Is an online store a website or a system?",
            "paragraphs": [
              "An online store shows product pages like a website but usually also handles catalogs, carts, orders and purchase states. Stock, shipping and payments may be required depending on the actual business model and agreed scope.",
              "Start by describing how people find products, place an order, who receives it and how its progress is handled. That will reveal whether a configurable store is sufficient or additional operational software is justified."
            ]
          },
          {
            "heading": "Examples from Wasl Tech's work categories",
            "paragraphs": [
              "The Al Benaa Al Motqin company website illustrates presenting services, projects and enquiry paths, while a content management dashboard illustrates the separate operational task of maintaining site information. Their purposes differ because public visitors and internal editors have different jobs to do.",
              "A MikroTik management dashboard illustrates ongoing operational tasks involving users, cards and sessions. These examples reflect the scope described in our portfolio; they are not claims of verified commercial growth or usage figures."
            ]
          },
          {
            "heading": "Six questions before choosing",
            "paragraphs": [
              "Describe the complete user task before selecting a programming language or requesting a price. When answers revolve around content and enquiries, start with a website brief. When they revolve around roles, records and processing, start with workflow analysis."
            ],
            "bullets": [
              "Who will use it: anonymous visitors, customers, staff or administrators?",
              "Will someone read content, create a request or update a record?",
              "Are sign-ins and role-specific permissions essential?",
              "Does data change every day or remain relatively stable?",
              "Are there approvals, reports or external integrations?",
              "What is the smallest complete outcome the first release can demonstrate?"
            ]
          },
          {
            "heading": "What changes cost and delivery time?",
            "paragraphs": [
              "A five-page website and an operational platform with permissions cannot be compared by counting screens. Costs depend on content readiness, interfaces, integrations, data protection, testing, hosting, and the type of administration required.",
              "Ask for a proposal that separates design, development, review cycles, launch and maintenance, and defines what is deliberately outside the first version. The goal is not the smallest quote but avoiding investment in functionality that does not solve the actual problem."
            ]
          },
          {
            "heading": "Start with a complete, manageable first scope",
            "paragraphs": [
              "Write down the problem, who experiences it and the current process you want to improve. Map three realistic journeys rather than producing a long feature wish list: how someone finds the service, how the task is completed and how an administrator knows it is finished.",
              "A strong website can precede deeper automation, while some businesses need a system from day one because records and permissions are essential. Choose the smallest coherent scope that delivers the required result, not automatically the simplest technology."
            ],
            "bullets": [
              "Define the project's goal and user groups.",
              "List essential records, owners and access rights.",
              "Separate release-one essentials from later enhancements.",
              "Test the full user journey before accepting delivery."
            ]
          },
          {
            "heading": "Common planning mistakes",
            "paragraphs": [
              "One common mistake is requesting a ‘complete website’ only to discover the real requirement is a booking workflow with multiple approvals. Another is commissioning a large system to present a handful of services. Missing content ownership and undefined change requests also create costly rework.",
              "Having an admin panel does not by itself make a product bespoke business software. A trendy technology stack is not evidence that the proposed solution fits. Clear goals, maintainability and real-world usability matter more."
            ]
          },
          {
            "heading": "The decision in one sentence",
            "paragraphs": [
              "If success means visitors understand what you offer and contact you, plan a focused website. If success means your customers or team complete repeatable, recorded operations, you probably need a web system. Some businesses need a public website connected to an internal system.",
              "Send your development team examples of real users, actions and expected outputs rather than a vague request for a ‘platform’. That makes the scope easier to estimate, implement and validate."
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
