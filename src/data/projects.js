/**
 * Wasl Tech VNext — Canonical project data.
 * Source: verified legacy portfolio records normalized on 2026-09-21.
 * Arabic portfolio summaries, case-study overviews/scopes and SEO are VNext editorial drafts.
 * Each project intentionally uses one primary image only.
 */

import { CONTENT_STATE, createFieldState, projectFieldKeys } from "./content-contracts.js";

const projectRecords = [
  {
    "id": "project-15",
    "slug": "himma-learning-platform",
    "category": "app",
    "image": "/assets/works/himma.webp",
    "serviceIds": [
      "web",
      "app",
      "programming"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "منصة هِمّة التعليمية",
        "categoryLabel": "تطبيقات تعليمية",
        "summary": "بيئة تعلم تفاعلية لتطوير مهارات القراءة والكتابة، تجمع تقييم مستوى الطالب والأنشطة التعليمية والمتابعة في تجربة واحدة.",
        "highlights": [
          "تقييم قبلي لتحديد المستوى",
          "أنشطة للقراءة والكتابة",
          "لوحة لإدارة الطلاب ومتابعة التقدم"
        ],
        "caseStudy": {
          "overview": "تجمع منصة هِمّة ضمن تجربتها التعليمية بين معرفة مستوى الطالب، وتقديم أنشطة موجهة لمهارات القراءة والكتابة، وإتاحة متابعة التقدم من جهة الإدارة. قيمة المشروع في ترابط هذه المحطات: تقييم يساعد على توجيه المسار، ثم تفاعل تعليمي، ثم متابعة بدلاً من أن تكون كل وظيفة صفحة منفصلة.",
          "context": "لا يبدأ كل طالب من المستوى نفسه، ولا تحقق الأنشطة غرضها إذا قُدمت دون مسار مفهوم. لذلك يتمحور التحدي حول تقديم تعليم متدرج يمكن للطالب التعامل معه بسهولة، مع وضوح ما يحتاجه القائم على التعليم من معلومات عن المسار والتقدم.",
          "contribution": "يتناول نطاق العمل تجربة الطالب والأنشطة ومسار التقييم المبدئي ولوحة الإدارة المرتبطة بها. صُممت أقسام العمل لتمييز مهمة المتعلم عن مهمة المشرف، ولجعل المحتوى التعليمي والوظائف الإدارية جزءًا من تجربة واحدة قابلة للمراجعة والتطوير.",
          "scope": [
            "التقييم القبلي ومسار الطالب",
            "أنشطة القراءة والكتابة والتدريبات",
            "لوحة إدارة الطلاب والمتابعة"
          ],
          "deliveredOutputs": [
            "واجهة تعلم تفاعلية للطالب",
            "مسار مهارات وأنشطة تعليمية",
            "لوحة إدارة لمتابعة الطلاب"
          ],
          "decisions": [
            {
              "title": "فصل تجربة الطالب عن الإدارة",
              "reason": "الطالب يحتاج خطوات قصيرة ولغة مباشرة، بينما يحتاج المشرف إلى تنظيم المعلومات ومتابعة الأنشطة.",
              "implementation": "تخصيص واجهة للتفاعل التعليمي ومسار إدارة مستقل يرتبط بالأنشطة والتقدم."
            },
            {
              "title": "ربط التقييم بالأنشطة",
              "reason": "التقييم الأولي أكثر فائدة عندما يكون مدخلاً لمسار التعلم وليس شاشة منفصلة بلا وظيفة تالية.",
              "implementation": "تنظيم نطاق المشروع حول تقييم قبلي يتبعه نشاط تعليمي ومسار متابعة."
            }
          ]
        },
        "seo": {
          "title": "هِمّة | تطوير منصة تعليمية للقراءة والكتابة | وصل تك",
          "description": "دراسة حالة: منصة تعليمية تفاعلية لتطوير القراءة والكتابة تجمع التقييم القبلي والأنشطة ومسار تعلم الطالب ولوحة المتابعة."
        }
      },
      "en": {
        "title": "Himma Learning Platform",
        "categoryLabel": "Educational apps",
        "summary": "An interactive learning environment for reading and writing skills, bringing together student assessment, learning activities, and progress tracking.",
        "highlights": [
          "Initial student-level assessment",
          "Reading and writing activities",
          "Student management and progress tracking"
        ],
        "caseStudy": {
          "overview": "Himma brings together initial learning assessment, reading and writing activities, and administration-side progress tracking. Its product scope is the connection between these parts: an assessment informs the learning journey, learners interact with activities, and the team can review progress rather than treating each step as an unrelated screen.",
          "context": "Students begin with different skill levels. A useful learning experience needs approachable, progressively organized activities and a clear distinction between the learner's tasks and the information a supervisor needs to manage.",
          "contribution": "The presented work covers the student experience, the initial assessment path, interactive activities and the related administration interface. The scope separates learning interactions from management tasks while keeping them part of one reviewable platform.",
          "scope": [
            "Initial assessment and student journey",
            "Reading and writing learning activities",
            "Student management and progress tracking"
          ],
          "deliveredOutputs": [
            "Interactive student learning interface",
            "Structured skills and activities",
            "Student administration interface"
          ],
          "decisions": [
            {
              "title": "Separate student and administrative journeys",
              "reason": "Learners need direct steps while administrators need visibility and organization.",
              "implementation": "Structure a learner-facing path alongside a distinct management experience connected to activity tracking."
            },
            {
              "title": "Connect assessment with practice",
              "reason": "An initial assessment is most useful when it leads into a learning journey rather than stopping at a result screen.",
              "implementation": "Organize the scope around assessment followed by practice activities and progress monitoring."
            }
          ]
        },
        "seo": {
          "title": "Himma | Reading & Writing Learning Platform | Wasl Tech",
          "description": "Case study: An interactive reading and writing learning platform with initial assessment, activities, student journeys, and progress tracking."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تطوير منصة تعليمية مشابهة لهِمّة."
    },
    "evidenceSources": [
      "Owner-provided Himma showcase image (2026-10-15)",
      "main:/assets/works/himma.webp"
    ]
  },
  {
    "id": "project-16",
    "slug": "update-card-digital-services",
    "category": "web",
    "image": "/assets/works/update-card.webp",
    "serviceIds": [
      "web"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "أبديت كارد للخدمات الرقمية",
        "categoryLabel": "مواقع",
        "summary": "موقع لخدمات الشحن والبطاقات والاشتراكات الرقمية في اليمن، يعرض فئات الخدمات بوضوح ويسهّل استكشافها والتواصل بشأنها.",
        "highlights": [
          "عرض خدمات الشحن والاشتراكات",
          "تنظيم الخدمات حسب الفئات",
          "واجهة متجاوبة للهاتف والكمبيوتر"
        ],
        "caseStudy": {
          "overview": "أبديت كارد موقع لعرض خدمات الشحن الرقمي والبطاقات والاشتراكات في اليمن. تتمثل وظيفة الموقع في مساعدة الزائر على استكشاف أصناف الخدمات ضمن فئات واضحة، بدلاً من التعامل مع كل خدمة على أنها صفحة معزولة؛ وتوضح الواجهة كيفية الوصول إلى التواصل بعد اختيار ما يناسبه.",
          "context": "الخدمات المعروضة ليست من نوع واحد: فخدمات الشحن تختلف عن البطاقات والاشتراكات في طريقة بحث الزائر عنها. لذلك كان التحدي تنظيم هذا التنوع دون ازدحام بصري، مع إبقاء أسماء الفئات والخطوة التالية مفهومة على شاشة الهاتف كما على الكمبيوتر.",
          "contribution": "شمل عمل وصل تك تصميم واجهة الموقع وتطوير عرض الفئات والخدمات وربطها بمسار تواصل واضح، مع تهيئة توزيع العناصر للشاشات الصغيرة والكبيرة. نطاق دراسة الحالة هنا هو تصميم تجربة عرض الخدمات والوصول إليها؛ ولا تنسب للمشروع نتائج مبيعات أو أنظمة دفع أو تسليم لم تُوثق.",
          "scope": [
            "تنظيم أقسام وخدمات الشحن الرقمي",
            "واجهة عرض للخدمات والفئات",
            "تجربة متجاوبة ومسار تواصل واضح"
          ],
          "deliveredOutputs": [
            "موقع لخدمات الشحن والبطاقات الرقمية",
            "عرض منظم لفئات الخدمات",
            "واجهات مناسبة للجوال والكمبيوتر"
          ],
          "decisions": [
            {
              "title": "فصل أنواع الخدمات",
              "reason": "تجميع الشحن والبطاقات والاشتراكات في قائمة واحدة يجعل المقارنة والاستكشاف أصعب.",
              "implementation": "تنظيم الخدمات ضمن فئات معروضة بوضوح داخل تجربة الموقع."
            },
            {
              "title": "مسار تواصل مفهوم",
              "reason": "الزائر يريد أن يعرف الخدمة أولاً ثم يجد كيفية الاستفسار عنها.",
              "implementation": "عرض الخدمات مع خطوة تواصل واضحة دون الادعاء بوجود نظام دفع أو طلبات لم يوثّق."
            },
            {
              "title": "قراءة مناسبة للجوال",
              "reason": "تعدد عناصر الخدمات يحتاج توزيعًا قابلًا للقراءة على الشاشات الصغيرة.",
              "implementation": "واجهات متجاوبة للحاسوب والهاتف تراعي تنظيم المحتوى وأولوية الفئات."
            }
          ]
        },
        "seo": {
          "title": "تصميم وتطوير موقع أبديت كارد للخدمات الرقمية | وصل تك",
          "description": "دراسة حالة تصميم وتطوير موقع أبديت كارد للخدمات الرقمية في اليمن: تنظيم خدمات الشحن والبطاقات والاشتراكات، وواجهات متجاوبة ومسار تواصل واضح."
        }
      },
      "en": {
        "title": "Update Card Digital Services",
        "categoryLabel": "Websites",
        "summary": "A website for digital top-ups, cards, and subscriptions in Yemen, with clearly organized service categories and accessible contact paths.",
        "highlights": [
          "Top-up and subscription services",
          "Organized service categories",
          "Responsive desktop and mobile experience"
        ],
        "caseStudy": {
          "overview": "Update Card is a website presenting digital top-ups, cards, and subscriptions in Yemen. It helps visitors browse distinct kinds of services through recognizable categories and find a clear contact path once they know what they need, rather than treating every offering as an isolated page.",
          "context": "Top-ups, cards, and subscriptions serve different visitor needs and are not interchangeable search tasks. The design challenge was to keep that variety understandable without overwhelming visitors, while making category names and the next step clear on both phone and desktop screens.",
          "contribution": "Wasl Tech designed and developed the site's service presentation and category browsing experience, with responsive layouts and a clear path to contact. This case study documents the presentation and navigation work; it does not claim unverified sales growth, checkout systems or automated digital delivery.",
          "scope": [
            "Digital service category structure",
            "Service browsing and presentation",
            "Responsive layout and clear contact path"
          ],
          "deliveredOutputs": [
            "Digital top-up and cards website",
            "Organized service categories",
            "Mobile and desktop interfaces"
          ],
          "decisions": [
            {
              "title": "Distinct service categories",
              "reason": "Putting top-ups, cards and subscriptions in one undifferentiated list would make browsing harder.",
              "implementation": "Service groups presented in clear categories within the website interface."
            },
            {
              "title": "Clear contact path",
              "reason": "Visitors need to identify the right offering before knowing where to enquire.",
              "implementation": "Service presentation with a visible way to reach out, without claiming an unverified payment or ordering system."
            },
            {
              "title": "Readable on mobile",
              "reason": "A varied service catalog needs a layout visitors can scan on smaller screens.",
              "implementation": "Responsive arrangements for phone and desktop that prioritize categories and readable content."
            }
          ]
        },
        "seo": {
          "title": "Update Card Website Design & Development | Wasl Tech",
          "description": "Case study of the Update Card website design and development in Yemen: organized top-up, card and subscription services, responsive pages and clear contact paths."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن موقع خدمات رقمية مشابه لأبديت كارد."
    },
    "evidenceSources": [
      "Owner-provided Update Card showcase image (2026-10-15)",
      "main:/assets/works/update-card.webp"
    ]
  },
  {
    "id": "project-01",
    "legacyId": 1,
    "slug": "suwarikum-platform",
    "category": "web",
    "image": "/assets/works/project_1.webp",
    "serviceIds": [
      "web"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "منصة صوركم الرقمية",
        "categoryLabel": "مواقع",
        "summary": "منصة رقمية تنظّم تسليم الصور ومشاركتها بين المصور والعميل ضمن وصول مخصص لكل مستخدم.",
        "highlights": [
          "إدارة وتسليم الصور",
          "وصول خاص للعملاء",
          "تجربة مخصصة للمصور والعميل"
        ],
        "caseStudy": {
          "overview": "صوركم منصة لتنظيم علاقة تسليم الصور بين المصور والعميل. بدل إرسال مجموعات الملفات عبر قنوات متفرقة، يقدّم نطاق المشروع مساحة تعرض المجموعات وتربطها بوصول مخصص، بحيث يعرف كل طرف أين يجد الصور المرتبطة به وكيف يتعامل معها.",
          "context": "تسليم الصور ليس مجرد رفع ملف؛ هناك مجموعات ومستخدمون وحاجة إلى تنظيم الوصول، خصوصًا عندما يعمل المصور على أكثر من جلسة أو عميل. التحدي هو جعل تجربة التسليم قابلة للفهم دون أن تتحول الواجهة إلى قوائم تقنية مربكة.",
          "contribution": "يتضمن نطاق التنفيذ تنظيم مجموعات الصور وطرق مشاركتها ووصول العملاء إليها. ترتبط واجهة المصور الخاصة بالإدارة بمسار عرض أبسط للعميل، مع تركيز دراسة الحالة على تنظيم التبادل والوصول بدلاً من الادعاء بخدمات تخزين أو حماية غير موثقة.",
          "scope": [
            "إدارة مجموعات الصور",
            "مشاركة المحتوى مع العملاء",
            "تنظيم الوصول لكل مستخدم"
          ],
          "deliveredOutputs": [
            "إدارة مجموعات الصور",
            "وصول مخصص للعملاء",
            "تجربة تسليم ومشاركة داخل المنصة"
          ],
          "decisions": [
            {
              "title": "مجموعات واضحة بدل ملفات متفرقة",
              "reason": "البحث عن الصور داخل رسائل ومجلدات متعددة يضعف تجربة التسليم.",
              "implementation": "اعتماد تنظيم المجموعات باعتباره نقطة البداية في استكشاف الصور."
            },
            {
              "title": "رحلة خاصة للعميل",
              "reason": "العميل يحتاج الوصول إلى صوره دون المرور بمهام إدارة المصور.",
              "implementation": "فصل مهمة عرض الصور للعميل عن أدوات إدارتها لدى المصور ضمن نطاق المنصة."
            }
          ]
        },
        "seo": {
          "title": "صوركم | تطوير منصة إدارة وتسليم الصور | وصل تك",
          "description": "دراسة حالة: منصة رقمية لإدارة وتسليم ومشاركة الصور بين المصورين والعملاء ضمن تجربة وصول منظمة."
        }
      },
      "en": {
        "title": "Suwarikum Digital Platform",
        "categoryLabel": "Web",
        "summary": "A digital platform that organizes photo delivery and sharing between photographers and clients through dedicated access for each user.",
        "highlights": [
          "Photo management and delivery",
          "Private client access",
          "A dedicated photographer-client experience"
        ],
        "caseStudy": {
          "overview": "Suwarikum is a platform for organizing photo delivery between photographers and clients. Instead of scattering galleries across separate channels, its documented scope brings collections and dedicated client access into one experience so each side knows where relevant images belong.",
          "context": "Photo delivery is not merely uploading files. It involves collections, users and clear access, especially when a photographer works across multiple sessions or clients. The challenge is to make delivery understandable without exposing customers to unnecessarily complex management controls.",
          "contribution": "The project scope covers organizing photo collections, sharing them and providing dedicated client access. It distinguishes the photographer's management tasks from a simpler client viewing journey, without claiming unverified storage or security features.",
          "scope": [
            "Manage photo collections",
            "Share content with clients",
            "Organize access per user"
          ],
          "deliveredOutputs": [
            "Photo collection management",
            "Dedicated client access",
            "In-platform sharing and delivery experience"
          ],
          "decisions": [
            {
              "title": "Collections rather than scattered files",
              "reason": "Finding photos across messages and folders makes delivery harder to navigate.",
              "implementation": "Make organized photo collections the primary way to browse delivered work."
            },
            {
              "title": "A dedicated client journey",
              "reason": "Clients need their images without using the photographer's management tools.",
              "implementation": "Separate client-facing viewing from collection management within the platform experience."
            }
          ]
        },
        "seo": {
          "title": "Suwarikum | Photo Delivery Platform Development | Wasl Tech",
          "description": "Case study: A digital platform for managing, delivering, and sharing photos between photographers and clients through organized private access."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع منصة مشابهة لصوركم الرقمية."
    },
    "evidenceSources": [
      "main:/assets/works/project_1.webp"
    ]
  },
  {
    "id": "project-02",
    "legacyId": 2,
    "slug": "wasl-freelance-platform",
    "category": "web",
    "image": "/assets/works/project_2.webp",
    "serviceIds": [
      "web"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "منصة وصّل للعمل الحر",
        "categoryLabel": "مواقع",
        "summary": "منصة عمل حر تجمع مقدمي الخدمات والعملاء داخل تجربة واحدة تشمل الاستكشاف والتواصل والدفع ضمن المنصة.",
        "highlights": [
          "ربط العملاء بمقدمي الخدمات",
          "محادثات داخل المنصة",
          "مدفوعات مرتبطة بالمعاملات"
        ],
        "caseStudy": {
          "overview": "منصة وصّل للعمل الحر تجربة تجمع العميل ومقدم الخدمة حول مهمة واضحة: الوصول إلى الخدمة، التواصل بشأنها، ثم متابعة التعامل المرتبط بها. لا تقتصر الفكرة على قائمة خدمات، بل تربط طرفين يحتاج كل منهما إلى أدوار وخطوات مختلفة.",
          "context": "التعامل بين طرفين يخلق حاجة إلى تنظيم حسابات المستخدمين، وتوضيح مسار المحادثة والتعامل، ووضع خطوات الدفع ضمن السياق الصحيح. عندما تتوزع هذه المهام على واجهات غير مترابطة يصبح فهم حالة التعامل أصعب.",
          "contribution": "يشمل نطاق المشروع حسابات طرفي المنصة، عرض الخدمات، محادثات داخلية وتدفق المدفوعات كما ورد في تعريف العمل. تناول التصميم المسار من البحث عن الخدمة إلى التواصل والمتابعة، دون إضافة ادعاءات عن عدد المعاملات أو مزودي الدفع أو مؤشرات السوق.",
          "scope": [
            "حسابات لمقدمي الخدمات والعملاء",
            "تواصل ومحادثات",
            "تدفق دفع داخل المنصة"
          ],
          "deliveredOutputs": [
            "حسابات للعملاء ومقدمي الخدمات",
            "نظام محادثات",
            "تدفق مدفوعات داخل المنصة"
          ],
          "decisions": [
            {
              "title": "رحلتان مترابطتان",
              "reason": "مقدم الخدمة والعميل لا يدخلان المنصة للغرض نفسه.",
              "implementation": "تنظيم الواجهات حول اكتشاف الخدمة من جهة العميل وإدارتها من جهة مقدمها."
            },
            {
              "title": "المحادثة ضمن سياق الخدمة",
              "reason": "التواصل يصبح أوضح عندما يكون مرتبطًا بالخدمة محل التعامل.",
              "implementation": "وضع التواصل والمتابعة ضمن المسار الرئيسي بدل التعامل معهما كصفحات معزولة."
            }
          ]
        },
        "seo": {
          "title": "منصة وصّل للعمل الحر | تصميم وتطوير منصة ويب | وصل تك",
          "description": "دراسة حالة: منصة عربية للعمل الحر تربط العملاء بمقدمي الخدمات وتجمع التواصل والمدفوعات داخل تجربة رقمية واحدة."
        }
      },
      "en": {
        "title": "Wasl Freelance Platform",
        "categoryLabel": "Web",
        "summary": "A freelance platform that brings service providers and clients into one experience covering discovery, communication, and in-platform payments.",
        "highlights": [
          "Connect clients with service providers",
          "In-platform messaging",
          "Payments tied to transactions"
        ],
        "caseStudy": {
          "overview": "Wasl's freelance marketplace brings clients and service providers into one workflow: discover an offering, discuss it and follow the engagement. It is more than a directory because the two parties have different responsibilities and steps.",
          "context": "A two-sided product must organize accounts, clarify conversations and keep payment flow in the context of an engagement. When these steps are disconnected, it becomes harder to understand what is happening with a request.",
          "contribution": "The recorded scope includes accounts for both sides, service discovery, in-platform conversations and a payment flow. The product journey connects these elements without claiming transaction volume, specific payment processors or marketplace performance.",
          "scope": [
            "Accounts for clients and service providers",
            "Communication and messaging",
            "In-platform payment flow"
          ],
          "deliveredOutputs": [
            "Client and provider accounts",
            "Messaging system",
            "Transaction payment flow"
          ],
          "decisions": [
            {
              "title": "Two connected user journeys",
              "reason": "Clients and service providers come to the platform for different tasks.",
              "implementation": "Organize discovery for clients and service management for providers within one product."
            },
            {
              "title": "Conversations connected to work",
              "reason": "Communication makes more sense when it stays tied to the service being discussed.",
              "implementation": "Position messaging and follow-up within the engagement journey rather than as unrelated screens."
            }
          ]
        },
        "seo": {
          "title": "Wasl Freelance | Marketplace Web Platform | Wasl Tech",
          "description": "Case study: An Arabic freelance platform connecting clients with service providers while bringing communication and payments into one digital experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع منصة مشابهة لوصّل."
    },
    "evidenceSources": [
      "main:/assets/works/project_2.webp"
    ]
  },
  {
    "id": "project-03",
    "legacyId": 3,
    "slug": "mikrotik-dashboard",
    "category": "web",
    "image": "/assets/works/project_3.webp",
    "serviceIds": [
      "programming"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "لوحة تحكم الميكروتيك",
        "categoryLabel": "مواقع (أنظمة)",
        "summary": "لوحة تحكم لإدارة مستخدمي شبكات الواي فاي والكروت والجلسات ضمن واجهة تجمع العمليات اليومية في مكان واحد.",
        "highlights": [
          "إدارة مستخدمي الشبكة",
          "توليد وإدارة الكروت",
          "متابعة الجلسات"
        ],
        "caseStudy": {
          "overview": "لوحة الميكروتيك مشروع إداري يستهدف المشرف على الشبكة، ويجمع التعامل مع المستخدمين والكروت والجلسات في واجهة واحدة. المحور هنا ليس عرض معلومات تسويقية، بل تقليل تشتت الإجراءات المتكررة داخل بيئة إدارة الشبكة.",
          "context": "تعدد العمليات اليومية يفرض على المسؤول الانتقال بين بيانات مختلفة؛ إدارة المستخدم مرتبطة بالكرت والجلسة، وتحتاج هذه العلاقات إلى تنظيم بصري ووظيفي. لذلك يبدأ التفكير في الشاشة مما يريد المشرف إنجازه وليس من كثرة المؤشرات الممكن عرضها.",
          "contribution": "تضمن نطاق التطوير أدوات إدارة المستخدمين والكروت ومتابعة الجلسات. ركّز ترتيب الواجهة على جمع العمليات ذات العلاقة وإظهار مدخل واضح لكل وظيفة، دون نسبة مزايا محاسبية أو أتمتة متقدمة لم ترد ضمن سجل المشروع.",
          "scope": [
            "إدارة المستخدمين",
            "توليد الكروت",
            "متابعة الجلسات والعمليات"
          ],
          "deliveredOutputs": [
            "إدارة المستخدمين",
            "توليد وإدارة الكروت",
            "متابعة الجلسات"
          ],
          "decisions": [
            {
              "title": "جمع المهام المتصلة",
              "reason": "المستخدم والكرت والجلسة عناصر مرتبطة في العمل اليومي للشبكات.",
              "implementation": "عرض وظائف الإدارة والمتابعة في مساحة واحدة ذات أقسام مفهومة."
            },
            {
              "title": "أولوية الإجراءات اليومية",
              "reason": "لوحة مزدحمة قد تعيق الوصول للوظائف المتكررة.",
              "implementation": "تنظيم أدوات الإدارة بحسب نوع العملية بدل تقديمها كقائمة تقنية واحدة."
            }
          ]
        },
        "seo": {
          "title": "ميكروتيك | برمجة لوحة إدارة الشبكات والكروت | وصل تك",
          "description": "دراسة حالة: نظام لإدارة مستخدمي شبكات الواي فاي وتوليد الكروت ومتابعة الجلسات من لوحة تحكم واحدة."
        }
      },
      "en": {
        "title": "MikroTik Control Dashboard",
        "categoryLabel": "Web Systems",
        "summary": "A control dashboard for managing Wi-Fi network users, cards, and sessions through one interface for day-to-day operations.",
        "highlights": [
          "Network user management",
          "Card generation and management",
          "Session monitoring"
        ],
        "caseStudy": {
          "overview": "The MikroTik dashboard is an administrative project for network operators. It groups user management, cards and sessions in one interface, with day-to-day operations rather than public marketing content at its center.",
          "context": "Network administration involves related information across several tasks. Users, cards and session details need a structure that lets an operator find the next action without navigating an unorganized mass of controls.",
          "contribution": "The documented scope covers managing users and cards and reviewing sessions. The interface groups related operations into understandable areas without claiming unrelated accounting capabilities or advanced automation that was not part of the project record.",
          "scope": [
            "User management",
            "Card generation",
            "Session and operation monitoring"
          ],
          "deliveredOutputs": [
            "User management",
            "Card generation and management",
            "Session monitoring"
          ],
          "decisions": [
            {
              "title": "Bring related operations together",
              "reason": "Users, cards and sessions belong to the same operational context.",
              "implementation": "Present management and monitoring functions in one structured workspace."
            },
            {
              "title": "Prioritize recurring work",
              "reason": "A crowded dashboard can make routine actions harder to reach.",
              "implementation": "Group controls by the operator's task rather than displaying every technical field at once."
            }
          ]
        },
        "seo": {
          "title": "MikroTik | Network & Cards Admin Dashboard | Wasl Tech",
          "description": "Case study: A system for managing Wi-Fi network users, generating cards, and monitoring sessions from one control dashboard."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع نظام مشابه للوحة الميكروتيك."
    },
    "evidenceSources": [
      "main:/assets/works/project_3.webp"
    ]
  },
  {
    "id": "project-04",
    "legacyId": 4,
    "slug": "cms-dashboard",
    "category": "web",
    "image": "/assets/works/project_4.webp",
    "serviceIds": [
      "programming"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "لوحة إدارة محتوى (CMS)",
        "categoryLabel": "مواقع (أنظمة)",
        "summary": "لوحة إدارة محتوى مركزية تتيح تحديث صفحات ومحتوى الموقع من مكان واحد بدل تعديل كل جزء يدويًا.",
        "highlights": [
          "إدارة مركزية للمحتوى",
          "تحديث ديناميكي للصفحات",
          "واجهة تحكم للإدارة"
        ],
        "caseStudy": {
          "overview": "لوحة إدارة المحتوى CMS تعالج جانبًا مختلفًا من مواقع الويب: كيف يحدّث فريق العمل المعلومات بعد إطلاق الموقع؟ يجمع المشروع تحرير الصفحات والبيانات في واجهة مركزية، بدل الاعتماد على تعديل الملفات البرمجية مع كل تغيير بسيط.",
          "context": "الفريق الذي يدير موقعًا يحتاج إلى تحديث العناوين والأقسام والمعلومات دون الدخول في تفاصيل التطوير. التحدي هو تحويل بنية المحتوى إلى مهام إدارية مفهومة، مع الحفاظ على العلاقة بين الجزء الذي يحرَّر والصفحة التي يظهر فيها.",
          "contribution": "يشمل نطاق المشروع إدارة محتوى الصفحات وتحديث البيانات من لوحة موحدة. يعرض هذا المثال جانبًا تشغيليًا لنظام الويب من خلال مهمة التحرير والإدارة، ولا يفترض وظائف غير مذكورة مثل سير موافقات متعدد المراحل أو أدوار تفصيلية.",
          "scope": [
            "إدارة محتوى الصفحات",
            "تحديث البيانات ديناميكيًا",
            "لوحة تحكم للإدارة"
          ],
          "deliveredOutputs": [
            "إدارة محتوى الصفحات",
            "تحديثات ديناميكية",
            "واجهة تحكم مركزية"
          ],
          "decisions": [
            {
              "title": "التركيز على مهمة المحرر",
              "reason": "المستخدم الإداري يحتاج معرفة مكان النص أو البيانات وكيف يغيّرها.",
              "implementation": "تنظيم الواجهة حول أقسام المحتوى بدل الحاجة إلى تعديل الكود."
            },
            {
              "title": "ربط الإدارة بالواجهة المعروضة",
              "reason": "قيمة نظام المحتوى في استمرار إمكانية تحديث الموقع.",
              "implementation": "بناء مساحة مركزية تربط إدارة البيانات بعناصر الموقع ذات الصلة."
            }
          ]
        },
        "seo": {
          "title": "نظام إدارة محتوى CMS | برمجة لوحة تحكم | وصل تك",
          "description": "دراسة حالة: لوحة CMS مركزية لإدارة وتحديث محتوى المواقع ديناميكيًا من واجهة تحكم واحدة."
        }
      },
      "en": {
        "title": "Content Management Dashboard (CMS)",
        "categoryLabel": "Web Systems",
        "summary": "A centralized content management dashboard that lets teams update website pages and content from one place instead of editing each part manually.",
        "highlights": [
          "Centralized content management",
          "Dynamic page updates",
          "Administration dashboard"
        ],
        "caseStudy": {
          "overview": "The CMS dashboard addresses the ongoing work behind a website: how a team updates content after launch. It brings pages and information into a central editing experience instead of requiring code changes for routine updates.",
          "context": "Content managers need an understandable way to change headings, sections and information. The design challenge is translating the structure of a site into editorial tasks while keeping the relationship between editable fields and their public presentation clear.",
          "contribution": "The documented scope includes page content administration and data updates from a unified dashboard. It illustrates an operational web-system use case without assuming unrecorded features such as multi-stage approval processes or detailed role hierarchies.",
          "scope": [
            "Page content management",
            "Dynamic data updates",
            "Administration dashboard"
          ],
          "deliveredOutputs": [
            "Page content management",
            "Dynamic updates",
            "Centralized administration"
          ],
          "decisions": [
            {
              "title": "Make editing tasks understandable",
              "reason": "Editorial users need to find the field they want to update.",
              "implementation": "Organize the management interface around content sections rather than code files."
            },
            {
              "title": "Connect content to presentation",
              "reason": "A CMS is valuable when the public site can be maintained consistently.",
              "implementation": "Provide a central editing area related to the corresponding website content."
            }
          ]
        },
        "seo": {
          "title": "CMS | Content Management Dashboard Development | Wasl Tech",
          "description": "Case study: A centralized CMS dashboard for managing and updating website content dynamically from one administration interface."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن نظام لوحة تحكم CMS مشابهة."
    },
    "evidenceSources": [
      "main:/assets/works/project_4.webp"
    ]
  },
  {
    "id": "project-05",
    "legacyId": 5,
    "slug": "tech-zone",
    "category": "app",
    "image": "/assets/works/project_5.webp",
    "serviceIds": [
      "app"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "تيك زون الإلكتروني",
        "categoryLabel": "تطبيقات",
        "summary": "تجربة متجر إلكتروني على الجوال تجمع تصفح المنتجات والسلة ومتابعة الطلبات داخل مسار شراء واضح.",
        "highlights": [
          "تصفح منتجات عبر التطبيق",
          "سلة مشتريات",
          "متابعة حالة الطلب"
        ],
        "caseStudy": {
          "overview": "تيك زون تجربة تسوق عبر الجوال ترتب علاقة المستخدم بالمنتج من الاكتشاف إلى السلة ومتابعة الطلب. في هذا النوع من التطبيقات تتشكل جودة الاستخدام من ترابط الخطوات الصغيرة، لا من عرض منتجات كثيرة على الشاشة الرئيسية فحسب.",
          "context": "عند التسوق على الهاتف، يتنقل العميل بين قائمة المنتجات وصفحة المنتج والسلة وحالة الطلب ضمن مساحة شاشة محدودة. التحدي هو الحفاظ على فهم مكانه في هذه الرحلة وأن تكون كل خطوة ذات غرض واضح، لا الانتقال إلى شاشة جديدة من دون سياق.",
          "contribution": "ركز نطاق التنفيذ على كتالوج المنتجات وسلة المشتريات ومتابعة الطلبات، مع ربط هذه الوظائف في مسار واحد داخل التطبيق. تصف الدراسة تجربة التسوق الموثقة بالمشروع، دون الادعاء بتكاملات دفع معينة أو أحجام مبيعات غير متاحة.",
          "scope": [
            "عرض وتصفح المنتجات",
            "إدارة السلة",
            "متابعة الطلبات"
          ],
          "deliveredOutputs": [
            "كتالوج منتجات",
            "سلة مشتريات",
            "متابعة حالة الطلب"
          ],
          "decisions": [
            {
              "title": "تدرج رحلة الشراء",
              "reason": "الدخول مباشرة إلى السلة قبل معرفة المنتجات يجعل المسار أقل وضوحًا.",
              "implementation": "تنظيم الرحلة حول استكشاف المنتج ثم اختياره وإضافته للسلة ومتابعة الطلب."
            },
            {
              "title": "متابعة الطلب ضمن التطبيق",
              "reason": "لا تنتهي تجربة المتجر بمجرد اختيار المنتجات.",
              "implementation": "إبراز متابعة حالة الطلب كجزء من تجربة المستخدم المسجلة في نطاق المشروع."
            }
          ]
        },
        "seo": {
          "title": "تيك زون | تطوير تطبيق متجر إلكتروني للجوال | وصل تك",
          "description": "دراسة حالة: تجربة متجر إلكتروني عبر الجوال تشمل تصفح المنتجات والسلة ومتابعة الطلبات."
        }
      },
      "en": {
        "title": "Tech Zone E-commerce App",
        "categoryLabel": "Apps",
        "summary": "A mobile e-commerce experience that combines product browsing, cart, and order tracking in one clear shopping flow.",
        "highlights": [
          "Product browsing in the app",
          "Shopping cart",
          "Order status tracking"
        ],
        "caseStudy": {
          "overview": "Tech Zone is a mobile shopping experience connecting product discovery, cart management and order tracking. The value of the app lies in a coherent sequence of everyday shopping actions, not merely the number of products displayed on its home screen.",
          "context": "On a phone, customers move between the catalog, product details, cart and order status with limited screen space. The challenge is maintaining a clear sense of progress so that each screen serves an understandable step.",
          "contribution": "The documented implementation covers a product catalog, shopping cart and order tracking, organized as one app journey. This description does not assert specific payment integrations or sales volumes that have not been evidenced.",
          "scope": [
            "Product browsing",
            "Cart management",
            "Order tracking"
          ],
          "deliveredOutputs": [
            "Product catalog",
            "Shopping cart",
            "Order status tracking"
          ],
          "decisions": [
            {
              "title": "A clear purchase sequence",
              "reason": "A cart only makes sense once customers can discover and select the right products.",
              "implementation": "Structure the journey from browsing and selection to the cart and order tracking."
            },
            {
              "title": "Follow-up after selection",
              "reason": "A shopping experience continues after products have been chosen.",
              "implementation": "Include order status tracking as part of the documented mobile journey."
            }
          ]
        },
        "seo": {
          "title": "Tech Zone | Mobile E-commerce App Development | Wasl Tech",
          "description": "Case study: A mobile e-commerce experience covering product browsing, cart, and order tracking in one clear journey."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم متجر إلكتروني مشابه لتيك زون."
    },
    "evidenceSources": [
      "main:/assets/works/project_5.webp"
    ]
  },
  {
    "id": "project-06",
    "legacyId": 6,
    "slug": "aroma-cafe",
    "category": "app",
    "image": "/assets/works/project_6.webp",
    "serviceIds": [
      "app"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "أروما كافيه",
        "categoryLabel": "تطبيقات",
        "summary": "تطبيق لطلب القهوة يربط تجربة الطلب ببرنامج ولاء ومعلومات الفروع داخل واجهة مخصصة لعملاء المقهى.",
        "highlights": [
          "طلب القهوة عبر التطبيق",
          "برنامج ولاء",
          "خرائط ومعلومات الفروع"
        ],
        "caseStudy": {
          "overview": "أروما كافيه تطبيق جوال يجمع خدمات مرتبطة بزيارة المقهى والطلب منه: استكشاف المنتجات وطلب القهوة وبرنامج الولاء ومعرفة مواقع الفروع. الفكرة أن يجد العميل احتياجاته المتكررة في تجربة واحدة بدلاً من البحث عن كل خدمة في قناة مختلفة.",
          "context": "سلوك عميل المقهى يختلف عن التسوق العام؛ قد يرغب في طلب منتج سريعًا، أو معرفة أقرب فرع، أو متابعة مزايا الولاء. التحدي هو جمع هذه المهام دون أن تربك الوظائف الإضافية المسار الأساسي الخاص بالطلب.",
          "contribution": "يتناول نطاق العمل تجربة طلب المنتجات وبرنامج الولاء وعرض الفروع على الخريطة. ركز وصف التنفيذ على تنظيم هذه المحاور في تطبيق واحد، ولا يقدم ادعاءً عن حجم الطلبات أو تكاملات الدفع أو آليات احتساب نقاط لم تُثبت تفاصيلها.",
          "scope": [
            "طلب المنتجات",
            "برنامج ولاء",
            "عرض الفروع على الخريطة"
          ],
          "deliveredOutputs": [
            "طلب القهوة عبر التطبيق",
            "برنامج ولاء",
            "خرائط الفروع"
          ],
          "decisions": [
            {
              "title": "جعل الطلب مهمة واضحة",
              "reason": "عميل المقهى يريد الوصول إلى المنتج وإتمام خطوة الطلب دون تنقل غير ضروري.",
              "implementation": "تخصيص مسار مفهوم للمنتجات والطلب باعتباره المحور الرئيسي للتجربة."
            },
            {
              "title": "الولاء والفروع في السياق المناسب",
              "reason": "برنامج الولاء ومعلومات الفروع وظيفتان مساندتان للطلب وليستا بديلًا عنه.",
              "implementation": "تقديم الوظائف المرتبطة بالولاء والفروع ضمن تجربة العميل نفسها."
            }
          ]
        },
        "seo": {
          "title": "أروما كافيه | تطوير تطبيق طلب القهوة والولاء | وصل تك",
          "description": "دراسة حالة: تطبيق جوال لأروما كافيه يجمع طلب القهوة وبرنامج الولاء ومعلومات الفروع داخل تجربة واحدة واضحة وسهلة الاستخدام."
        }
      },
      "en": {
        "title": "Aroma Cafe App",
        "categoryLabel": "Apps",
        "summary": "A coffee ordering app that combines ordering, a loyalty program, and branch information in one customer experience.",
        "highlights": [
          "Coffee ordering in the app",
          "Loyalty program",
          "Branch maps and information"
        ],
        "caseStudy": {
          "overview": "Aroma Cafe is a mobile experience combining coffee ordering, a loyalty program and branch information. It brings recurring cafe-related tasks into one product instead of leaving customers to find each function through a separate channel.",
          "context": "Cafe customers may want to place an order quickly, find a branch or access loyalty features. The challenge is accommodating these distinct needs without letting supporting features overwhelm the central ordering journey.",
          "contribution": "The recorded scope covers product ordering, loyalty features and branches on a map. The case study describes how these areas relate within the app, without asserting unverified order volume, payment integrations or loyalty-point calculation rules.",
          "scope": [
            "Product ordering",
            "Loyalty program",
            "Branch map display"
          ],
          "deliveredOutputs": [
            "In-app coffee ordering",
            "Loyalty program",
            "Branch maps"
          ],
          "decisions": [
            {
              "title": "Keep ordering easy to find",
              "reason": "Customers need a clear route from product selection to the ordering step.",
              "implementation": "Make the product and order journey a primary part of the app."
            },
            {
              "title": "Support the visit beyond ordering",
              "reason": "Loyalty and branch details address different customer questions.",
              "implementation": "Keep those supporting functions accessible within the same experience."
            }
          ]
        },
        "seo": {
          "title": "Aroma Cafe | Coffee Ordering & Loyalty App | Wasl Tech",
          "description": "Case study: A mobile coffee ordering app with a loyalty program and branch maps in one customer experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة تطبيق مشابه لأروما كافيه."
    },
    "evidenceSources": [
      "main:/assets/works/project_6.webp"
    ]
  },
  {
    "id": "project-07",
    "legacyId": 7,
    "slug": "albenaa-almotqin",
    "category": "web",
    "image": "/assets/works/project_13.webp",
    "serviceIds": [
      "web"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "البناء المتقن",
        "categoryLabel": "مواقع",
        "summary": "موقع تعريفي لشركة مقاولات وهندسة يعرض الخدمات والمشاريع ويهيئ مسارًا واضحًا لطلب عرض سعر.",
        "highlights": [
          "عرض الخدمات والمشاريع",
          "تجربة متجاوبة",
          "مسار لطلب عرض سعر"
        ],
        "caseStudy": {
          "overview": "البناء المتقن موقع تعريفي لشركة تعمل في المقاولات والهندسة، وينظّم تقديم الخدمات والمشاريع السابقة ومعلومات التواصل. دوره أن يساعد الزائر على تكوين صورة واضحة عن نطاق نشاط الشركة قبل الانتقال إلى طلب عرض سعر.",
          "context": "في قطاع المقاولات يهتم العميل بفهم أنواع الخدمات وطبيعة الأعمال المعروضة قبل التواصل. عرض هذه المعلومات في صفحات متفرقة دون تسلسل واضح قد يجعل العثور على المشروع أو الخدمة المطلوبة أصعب.",
          "contribution": "يشمل نطاق تصميم الموقع صفحات الخدمات ومعرض المشاريع ومسار طلب عرض السعر. ركزت بنية المحتوى على تقديم النشاط ثم إبراز الأعمال المرتبطة به وفتح خطوة تواصل واضحة، دون إضافة اعتماد هندسي أو تفاصيل مشاريع لم يقدمها السجل.",
          "scope": [
            "عرض الخدمات",
            "معرض المشاريع",
            "طلب عرض سعر"
          ],
          "deliveredOutputs": [
            "صفحات للخدمات",
            "عرض المشاريع",
            "طلب عرض سعر"
          ],
          "decisions": [
            {
              "title": "ربط الخدمات بالأعمال",
              "reason": "الأمثلة البصرية تساعد في فهم طبيعة خدمة المقاولات المعروضة.",
              "implementation": "تنظيم تجربة التصفح بحيث يمكن الانتقال بين الخدمات ومعرض المشاريع."
            },
            {
              "title": "خطوة تواصل محددة",
              "reason": "مجرد عرض الأعمال لا يوضح للزائر ماذا يفعل عندما يريد مناقشة مشروعه.",
              "implementation": "توفير مسار لطلب عرض سعر متصل بتجربة التعرف على الشركة."
            }
          ]
        },
        "seo": {
          "title": "البناء المتقن | تصميم موقع شركة مقاولات | وصل تك",
          "description": "دراسة حالة: موقع تعريفي لشركة مقاولات وهندسة يعرض الخدمات والمشاريع ويسهّل طلب عروض الأسعار."
        }
      },
      "en": {
        "title": "Al Benaa Al Motqin Website",
        "categoryLabel": "Web",
        "summary": "A company website for a construction and engineering business that presents services and projects and creates a clear path to requesting a quotation.",
        "highlights": [
          "Services and project showcase",
          "Responsive experience",
          "Quotation request path"
        ],
        "caseStudy": {
          "overview": "Al Benaa Al Motqin is a company website for construction and engineering services. It organizes the business introduction, services, project examples and contact information so visitors can understand the offer before requesting a quotation.",
          "context": "Construction clients often want to understand the types of work and services involved before making contact. Scattered pages without a clear sequence can make it harder to connect a service with the relevant project examples.",
          "contribution": "The published scope includes service pages, a project portfolio and a quotation enquiry path. The site content was organized around introducing the work and guiding visitors toward contact, without inventing certifications or project details not present in the record.",
          "scope": [
            "Service presentation",
            "Project showcase",
            "Quotation requests"
          ],
          "deliveredOutputs": [
            "Service pages",
            "Project showcase",
            "Quotation request flow"
          ],
          "decisions": [
            {
              "title": "Connect services with examples",
              "reason": "Project examples help visitors understand the character of a construction service.",
              "implementation": "Organize navigation between the service descriptions and the portfolio."
            },
            {
              "title": "Provide a next step",
              "reason": "Showing work alone does not tell someone how to discuss their project.",
              "implementation": "Connect the company introduction with a clear quotation enquiry route."
            }
          ]
        },
        "seo": {
          "title": "Al Benaa Al Motqin | Construction Website | Wasl Tech",
          "description": "Case study: A construction and engineering company website that presents services and projects and makes quotation requests easier."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع موقع مشابه للبناء المتقن."
    },
    "evidenceSources": [
      "main:/assets/works/project_13.webp"
    ]
  },
  {
    "id": "project-08",
    "legacyId": 8,
    "slug": "elite-electronics",
    "category": "store",
    "image": "/assets/works/project_10.webp",
    "serviceIds": [
      "store"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "النخبة للإلكترونيات",
        "categoryLabel": "متاجر",
        "summary": "متجر إلكتروني للأجهزة والإلكترونيات ينظم المنتجات ضمن تصنيفات واضحة ويوجه العميل من التصفح إلى إتمام الطلب.",
        "highlights": [
          "كتالوج أجهزة وإلكترونيات",
          "تصنيفات منظمة",
          "مسار لإتمام الطلب"
        ],
        "caseStudy": {
          "overview": "النخبة للإلكترونيات متجر يعرض الأجهزة ومنتجات الإلكترونيات في تصنيفات منظمة، ويقود العميل من البحث عن المنتج إلى مسار الطلب. نجاح التجربة هنا يعتمد على أن يفهم المتسوق أين يجد النوع الذي يبحث عنه وكيف يصل إلى تفاصيله.",
          "context": "المنتجات الإلكترونية قد تتشابه بصريًا لكنها تختلف في النوع والاستخدام؛ لذلك يحتاج المتجر إلى تصنيفات قابلة للتصفح وعرض منتج واضح. التحدي هو الموازنة بين كثافة الكتالوج وبساطة الانتقال إلى الطلب دون افتراض خصائص تقنية لم يثبت وجودها.",
          "contribution": "يشمل النطاق عرض المنتجات والتصنيفات وتجربة الطلب. بُني وصف الحالة حول رحلة استكشاف الكتالوج والانتقال إلى المنتج ثم إتمام الخطوة المطلوبة، دون ذكر بوابات دفع أو مخزون لحظي أو مؤشرات تحويل لم توثق.",
          "scope": [
            "عرض المنتجات",
            "التصنيفات",
            "تجربة الطلب"
          ],
          "deliveredOutputs": [
            "كتالوج إلكترونيات",
            "تصنيفات منتجات",
            "تجربة إتمام الطلب"
          ],
          "decisions": [
            {
              "title": "توضيح فئات الأجهزة",
              "reason": "التصفح يصبح أصعب إذا ظهرت الأنواع المختلفة ضمن قائمة واحدة طويلة.",
              "implementation": "استخدام تصنيفات تساعد على تضييق مساحة البحث والوصول إلى المنتج."
            },
            {
              "title": "المنتج ثم الطلب",
              "reason": "المتسوق يحتاج أن يفهم ما اختاره قبل الانتقال للإجراء التالي.",
              "implementation": "ربط عرض تفاصيل المنتج بمسار الطلب ضمن نطاق المتجر."
            }
          ]
        },
        "seo": {
          "title": "النخبة للإلكترونيات | تصميم متجر إلكتروني | وصل تك",
          "description": "دراسة حالة: متجر إلكتروني للأجهزة والإلكترونيات بتصنيفات منظمة وتجربة واضحة من التصفح إلى الطلب."
        }
      },
      "en": {
        "title": "Elite Electronics Store",
        "categoryLabel": "E-commerce",
        "summary": "An electronics e-commerce store that organizes products into clear categories and guides customers from browsing to placing an order.",
        "highlights": [
          "Electronics catalog",
          "Organized categories",
          "Order completion flow"
        ],
        "caseStudy": {
          "overview": "Elite Electronics is an online store presenting devices and electronics through organized product categories. Its journey takes shoppers from discovering a product to the ordering step, with discoverability and clear product presentation at the center.",
          "context": "Electronic products can look similar while serving different purposes. Shoppers need understandable categories and product information, and the store must balance a broad catalog with straightforward navigation toward an order.",
          "contribution": "The documented scope consists of catalog display, categories and the ordering experience. This case study follows that journey without claiming unverified payment providers, live inventory integrations or conversion metrics.",
          "scope": [
            "Product display",
            "Categories",
            "Ordering experience"
          ],
          "deliveredOutputs": [
            "Electronics catalog",
            "Product categories",
            "Order completion experience"
          ],
          "decisions": [
            {
              "title": "Make device categories understandable",
              "reason": "Finding products is difficult when unlike items appear in one long unstructured list.",
              "implementation": "Use browsing categories that help shoppers narrow their search."
            },
            {
              "title": "Connect product information to ordering",
              "reason": "Shoppers need to understand their selection before moving to the next action.",
              "implementation": "Keep the product presentation connected to the documented order journey."
            }
          ]
        },
        "seo": {
          "title": "Elite Electronics | Online Electronics Store | Wasl Tech",
          "description": "Case study: An electronics e-commerce store with organized categories and a clear experience from browsing to ordering."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع متجر إلكتروني مشابه."
    },
    "evidenceSources": [
      "main:/assets/works/project_10.webp"
    ]
  },
  {
    "id": "project-09",
    "legacyId": 9,
    "slug": "almalaki-brand-identity",
    "category": "brand",
    "image": "/assets/works/project_7.webp",
    "serviceIds": [
      "design"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "هوية بصرية لمطعم الملكي",
        "categoryLabel": "هوية بصرية",
        "summary": "هوية بصرية لمطعم الملكي تشمل الشعار والنظام اللوني وتطبيقات مطبوعة وتغليف ضمن اتجاه بصري واحد.",
        "highlights": [
          "شعار وهوية بصرية",
          "نظام ألوان",
          "مطبوعات وتغليف"
        ],
        "caseStudy": {
          "overview": "هوية مطعم الملكي مشروع تصميم يربط الشعار بالألوان والتطبيقات المطبوعة والتغليف ضمن مظهر واحد للعلامة. لا يقتصر أثر الهوية على ملف الشعار، بل يظهر في المواد المختلفة التي يراها الزائر أو يحملها معه.",
          "context": "يحتاج المطعم إلى صورة يمكن التعرف عليها في الواجهة والمطبوعات والتغليف، وإلا أصبحت كل مادة تعبيرًا منفصلًا عن النشاط. التحدي هو جعل عناصر الهوية متسقة دون أن تفقد مرونتها بين المقاسات والاستخدامات.",
          "contribution": "يضم نطاق المشروع تصميم الشعار والنظام اللوني وتطبيقات مطبوعة وتغليف. تتناول الدراسة كيفية التعامل مع الهوية كنظام مترابط من عناصر مرئية، ولا تنسب للطباعة أو التغليف مواصفات تصنيع أو نتائج تسويقية لم توثق.",
          "scope": [
            "تصميم الشعار",
            "بناء النظام اللوني",
            "تطبيقات مطبوعة وتغليف"
          ],
          "deliveredOutputs": [
            "تصميم الشعار",
            "نظام ألوان",
            "مطبوعات وتغليف"
          ],
          "decisions": [
            {
              "title": "الشعار ضمن نظام بصري",
              "reason": "الشعار وحده لا يضمن أن تظهر المواد المختلفة كعلامة واحدة.",
              "implementation": "وضع الشعار والألوان في اتجاه تصميمي واحد يدعم تطبيقات الهوية."
            },
            {
              "title": "الهوية عبر نقاط التواصل",
              "reason": "اختلاف مساحة الاستخدام بين المطبوعات والتغليف يحتاج اتساقًا مرنًا.",
              "implementation": "تطبيق الاتجاه البصري على مواد مطبوعة وتغليف ضمن نطاق التصميم."
            }
          ]
        },
        "seo": {
          "title": "مطعم الملكي | تصميم شعار وهوية بصرية | وصل تك",
          "description": "دراسة حالة: هوية بصرية لمطعم الملكي تشمل الشعار والألوان والمطبوعات والتغليف ضمن نظام بصري واحد يعكس طابع العلامة."
        }
      },
      "en": {
        "title": "Al Malaki Restaurant Brand Identity",
        "categoryLabel": "Brand Identity",
        "summary": "A visual identity for Al Malaki Restaurant covering the logo, color system, printed applications, and packaging within one visual direction.",
        "highlights": [
          "Logo and visual identity",
          "Color system",
          "Print and packaging"
        ],
        "caseStudy": {
          "overview": "Al Malaki restaurant identity work connects the logo, color system, printed materials and packaging into one visual direction. A brand identity extends beyond the logo file to the different materials customers encounter.",
          "context": "Restaurants need recognizable presentation across signage, printed items and packaging. When each surface is treated separately, the visual system can become inconsistent. The challenge is to keep a coherent character across different formats.",
          "contribution": "The recorded deliverables include a logo, color system, print applications and packaging designs. This account treats identity as a connected design system without claiming manufacturing specifications or marketing outcomes that are not documented.",
          "scope": [
            "Logo design",
            "Color system",
            "Print and packaging applications"
          ],
          "deliveredOutputs": [
            "Logo design",
            "Color system",
            "Print and packaging"
          ],
          "decisions": [
            {
              "title": "A logo supported by a visual system",
              "reason": "A logo alone cannot ensure consistency across every brand material.",
              "implementation": "Develop the logo and colors as one recognizable design direction."
            },
            {
              "title": "Consistency across touchpoints",
              "reason": "Packaging and printed materials have different spatial constraints.",
              "implementation": "Apply the visual direction to the documented print and packaging outputs."
            }
          ]
        },
        "seo": {
          "title": "Al Malaki Restaurant | Brand Identity Design | Wasl Tech",
          "description": "Case study: A visual identity for Al Malaki Restaurant covering logo, colors, printed materials, and packaging."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم هوية بصرية."
    },
    "evidenceSources": [
      "main:/assets/works/project_7.webp"
    ]
  },
  {
    "id": "project-10",
    "legacyId": 10,
    "slug": "milano-brand-identity",
    "category": "brand",
    "image": "/assets/works/project_9.webp",
    "serviceIds": [
      "design"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "هوية بصرية لشركة ميلانو",
        "categoryLabel": "هوية بصرية",
        "summary": "هوية بصرية لشركة ميلانو تعتمد أسلوبًا تقنيًا حديثًا مع شعار ونظام مرئي متناسق لاستخدامات العلامة المختلفة.",
        "highlights": [
          "تصميم الشعار",
          "نظام بصري متكامل",
          "طابع تقني حديث"
        ],
        "caseStudy": {
          "overview": "هوية شركة ميلانو صُممت حول طابع بصري تقني يساعد على توحيد تقديم الشركة عبر استخدامات مختلفة. يتمثل نطاقها في شعار ونظام مرئي وتطبيقات للعلامة، بما يجعل المواد امتدادًا لأسلوب واحد بدل تصاميم متباعدة.",
          "context": "عندما تظهر شركة تقنية عبر قنوات ومواد متعددة، لا يكفي أن يبدو كل تصميم جيدًا منفردًا؛ المهم أن يتعرف المتلقي على العلامة من عنصر إلى آخر. كان التحدي تحديد لغة مرئية قابلة للاستمرار وليست مرتبطة بتصميم منشور واحد.",
          "contribution": "شمل العمل تصميم الشعار وبناء نظام بصري وتطبيقات الهوية الموصوفة في نطاق المشروع. ركزت المعالجة على الترابط بين العلامة وعناصرها، ولم تُضف افتراضات عن نتائج إعادة العلامة أو حجم نشاط الشركة.",
          "scope": [
            "تصميم الشعار",
            "النظام البصري",
            "تطبيقات الهوية"
          ],
          "deliveredOutputs": [
            "تصميم الشعار",
            "النظام البصري",
            "تطبيقات الهوية"
          ],
          "decisions": [
            {
              "title": "اتجاه تقني واضح",
              "reason": "المظهر التقني يحتاج هوية يمكن التعرف عليها لا زخارف عشوائية.",
              "implementation": "وضع الشعار ضمن لغة بصرية موحدة تلائم طبيعة الشركة الموصوفة."
            },
            {
              "title": "قابلية إعادة الاستخدام",
              "reason": "الهوية الجيدة يجب أن تبقى متسقة عبر مواد أكثر من نموذج واحد.",
              "implementation": "تنظيم الألوان والعناصر والتطبيقات ضمن اتجاه متكرر الاستخدام."
            }
          ]
        },
        "seo": {
          "title": "ميلانو | تصميم شعار وهوية بصرية لشركة | وصل تك",
          "description": "دراسة حالة: هوية بصرية لشركة ميلانو تشمل الشعار والنظام البصري وتطبيقات العلامة ضمن اتجاه تقني حديث ومتناسق."
        }
      },
      "en": {
        "title": "Milano Company Brand Identity",
        "categoryLabel": "Brand Identity",
        "summary": "A visual identity for Milano built around a modern technical direction with a logo and consistent visual system for different brand applications.",
        "highlights": [
          "Logo design",
          "Integrated visual system",
          "Modern technical character"
        ],
        "caseStudy": {
          "overview": "The Milano company identity uses a technology-oriented visual language to present the business consistently across different applications. Its scope includes a logo, visual system and identity materials rather than a collection of unrelated designs.",
          "context": "When a technology business appears across multiple channels and materials, each asset should remain recognizable as part of the same brand. The challenge is a design language that can outlast a single campaign or post.",
          "contribution": "The project covers logo creation, a visual system and documented identity applications. This case study focuses on their consistency without assuming measurable rebranding outcomes or claims about the company's scale.",
          "scope": [
            "Logo design",
            "Visual system",
            "Brand applications"
          ],
          "deliveredOutputs": [
            "Logo design",
            "Visual system",
            "Brand applications"
          ],
          "decisions": [
            {
              "title": "A recognizable technology character",
              "reason": "A technical look should be coherent, not a collection of decorative effects.",
              "implementation": "Connect the logo with a consistent visual direction reflecting the recorded business category."
            },
            {
              "title": "Reusable identity elements",
              "reason": "The brand must remain recognizable in more than one layout.",
              "implementation": "Organize colors, graphic elements and applications for consistent repeated use."
            }
          ]
        },
        "seo": {
          "title": "Milano | Company Logo & Brand Identity | Wasl Tech",
          "description": "Case study: A visual identity for Milano including a logo and modern technical visual system."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم هوية بصرية."
    },
    "evidenceSources": [
      "main:/assets/works/project_9.webp"
    ]
  },
  {
    "id": "project-11",
    "legacyId": 11,
    "slug": "fakhri-marketing-campaign",
    "category": "marketing",
    "image": "/assets/works/project_12.webp",
    "serviceIds": [
      "marketing"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "الحملة التسويقية لمتجر فخري للعطور",
        "categoryLabel": "تسويق",
        "summary": "حملة رقمية لمتجر فخري للعطور جمعت استراتيجية المحتوى والتصميم الإعلاني وحضور شبكات التواصل ضمن اتجاه واحد.",
        "highlights": [
          "استراتيجية محتوى",
          "تصاميم للحملات",
          "محتوى لشبكات التواصل"
        ],
        "caseStudy": {
          "overview": "حملة فخري للعطور مشروع تسويقي يربط الرسالة بمحتوى شبكات التواصل والتصاميم الإعلانية. الفكرة الأساسية أن يكون تقديم منتجات العطور واضحًا ومتسقًا، بدل إنتاج منشورات منفصلة دون علاقة بين موضوعاتها وأسلوب عرضها.",
          "context": "المحتوى التسويقي المتكرر يحتاج إلى اتجاه معروف يمكن تنويعه دون فقدان شخصية المتجر. التحدي هو الموازنة بين تقديم المنتج ورسائل المحتوى وعناصر التصميم، حتى تبدو الحملة سلسلة مترابطة لا مجموعة مواد عشوائية.",
          "contribution": "تناول نطاق العمل تخطيط المحتوى، والتصميم الإعلاني، ومواد الحملات والتواصل الاجتماعي. يشرح هذا العرض منهج تنظيم الرسائل والمخرجات البصرية فقط؛ فلا توجد في سجل المشروع أرقام وصول أو إنفاق إعلاني أو مبيعات تسمح بنسب نتائج محددة.",
          "scope": [
            "تخطيط المحتوى",
            "تصميم الإعلانات",
            "حملات ومحتوى اجتماعي"
          ],
          "deliveredOutputs": [
            "استراتيجية محتوى",
            "تصاميم إعلانية",
            "محتوى وحملات اجتماعية"
          ],
          "decisions": [
            {
              "title": "رسائل متسقة",
              "reason": "الحملة تفقد وضوحها عندما يتغير أسلوب المنتج والرسالة في كل منشور دون اتجاه.",
              "implementation": "ربط موضوعات المحتوى بإطار بصري ورسائلي واضح للحملة."
            },
            {
              "title": "قابلية تنويع المحتوى",
              "reason": "الاكتفاء بنموذج منشور واحد قد يضعف تنوع العرض.",
              "implementation": "توزيع المخرجات على تصاميم ومواد اجتماعية مرتبطة بخطة المحتوى."
            }
          ]
        },
        "seo": {
          "title": "فخري للعطور | تصميم حملة تسويق رقمي ومحتوى | وصل تك",
          "description": "دراسة حالة: حملة رقمية لمتجر فخري للعطور تشمل استراتيجية المحتوى والتصميم الإعلاني وحضور شبكات التواصل."
        }
      },
      "en": {
        "title": "Fakhri Perfumes Digital Campaign",
        "categoryLabel": "Marketing",
        "summary": "A digital campaign for Fakhri Perfumes combining content strategy, campaign design, and social media presence within one direction.",
        "highlights": [
          "Content strategy",
          "Campaign creatives",
          "Social media content"
        ],
        "caseStudy": {
          "overview": "The Fakhri Perfumes marketing campaign brings together messaging, social content and advertising visuals. Its purpose in the documented scope is to present perfume products through a coherent communication direction rather than as unrelated posts.",
          "context": "Repeated marketing content needs a recognizable approach that can vary from post to post without losing the store's character. The challenge is balancing product presentation, messages and visual assets as parts of the same campaign.",
          "contribution": "The recorded work includes content planning, promotional designs and social campaign assets. This case study explains how those outputs are related; it does not attribute reach, advertising spend, sales or return-on-investment figures without evidence.",
          "scope": [
            "Content planning",
            "Advertising design",
            "Social content and campaigns"
          ],
          "deliveredOutputs": [
            "Content strategy",
            "Advertising creatives",
            "Social content and campaigns"
          ],
          "decisions": [
            {
              "title": "Consistent campaign messages",
              "reason": "Unrelated presentation styles can obscure what a campaign is trying to communicate.",
              "implementation": "Connect content themes to one recognizable messaging and visual direction."
            },
            {
              "title": "Variation within a plan",
              "reason": "Repeating only one template may limit the range of content.",
              "implementation": "Prepare varied social and promotional outputs under the documented content plan."
            }
          ]
        },
        "seo": {
          "title": "Fakhri Perfumes | Digital Campaign & Content | Wasl Tech",
          "description": "Case study: A digital campaign for Fakhri Perfumes covering content strategy, advertising design, and social media presence."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن حملة تسويقية."
    },
    "evidenceSources": [
      "main:/assets/works/project_12.webp"
    ]
  },
  {
    "id": "project-12",
    "legacyId": 12,
    "slug": "fakhri-perfumes-store",
    "category": "store",
    "image": "/assets/works/project_8.webp",
    "serviceIds": [
      "store"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "فخري للعطور",
        "categoryLabel": "متاجر",
        "summary": "متجر إلكتروني للعطور يضع المنتجات في الواجهة ضمن تجربة تصفح وشراء تركز على وضوح العرض وسهولة الوصول.",
        "highlights": [
          "عرض منتجات العطور",
          "تجربة تصفح وشراء",
          "واجهة تركز على المنتج"
        ],
        "caseStudy": {
          "overview": "متجر فخري للعطور تجربة تجارة إلكترونية تضع المنتج في مركز قرار الشراء. يهتم المشروع بتنظيم عرض أصناف العطور وانتقال الزائر بينها، ثم الوصول إلى مسار الطلب بصورة متصلة ومفهومة.",
          "context": "منتجات العطور تتطلب عرضًا يساعد الزائر على التمييز بين الأصناف، من دون أن تضيع تفاصيل المنتج وسط ازدحام الواجهة. التحدي أن يظل استكشاف المنتجات واضحًا وأن تكون خطوة الانتقال للشراء امتدادًا طبيعيًا للتصفح.",
          "contribution": "يشمل نطاق المتجر صفحات عرض المنتجات وتنظيم التصفح ومسار الشراء. يعكس وصف التنفيذ وظيفة الواجهة والكتالوج كما هي مسجلة في المشروع، ولا يضيف ادعاءات عن طرق الدفع أو إدارة المخزون أو نتائج المبيعات لم يتم توثيقها.",
          "scope": [
            "عرض المنتجات",
            "تنظيم التصفح",
            "مسار الشراء"
          ],
          "deliveredOutputs": [
            "عرض منتجات العطور",
            "تنظيم التصفح",
            "مسار شراء"
          ],
          "decisions": [
            {
              "title": "المنتج أولًا",
              "reason": "في متجر العطور تؤثر طريقة عرض الأصناف في قدرة العميل على الاستكشاف.",
              "implementation": "إعطاء عرض المنتج ومسارات التنقل بين الأصناف أولوية داخل المتجر."
            },
            {
              "title": "الانتقال الطبيعي للطلب",
              "reason": "انفصال مسار الطلب عن تجربة العرض يجعل الخطوة التالية أقل وضوحًا.",
              "implementation": "ربط تصفح العطور بمرحلة الشراء ضمن نطاق المتجر الموثق."
            }
          ]
        },
        "seo": {
          "title": "فخري للعطور | تصميم متجر إلكتروني للعطور | وصل تك",
          "description": "دراسة حالة: متجر إلكتروني للعطور بتجربة تركز على عرض المنتجات والتصفح والشراء بوضوح."
        }
      },
      "en": {
        "title": "Fakhri Perfumes Store",
        "categoryLabel": "E-commerce",
        "summary": "An online perfume store that puts products at the center of a clear browsing and buying experience.",
        "highlights": [
          "Perfume product presentation",
          "Browsing and buying experience",
          "Product-focused interface"
        ],
        "caseStudy": {
          "overview": "Fakhri Perfumes is an e-commerce experience built around the product as the center of the buying decision. Its documented scope organizes perfume presentation and browsing before guiding a visitor toward the order journey.",
          "context": "Perfume products benefit from presentation that helps customers distinguish offerings without burying the product under a crowded interface. The challenge is keeping discovery understandable and the next step to purchase connected to browsing.",
          "contribution": "The recorded work covers product presentation, browsing structure and the purchase path. This description does not claim specific payment methods, inventory integrations or sales outcomes that have not been documented.",
          "scope": [
            "Product presentation",
            "Browsing organization",
            "Buying journey"
          ],
          "deliveredOutputs": [
            "Perfume product presentation",
            "Organized browsing",
            "Purchase flow"
          ],
          "decisions": [
            {
              "title": "Let the products lead",
              "reason": "Shoppers need to explore perfume offerings without unnecessary interface clutter.",
              "implementation": "Prioritize clear product presentation and category browsing."
            },
            {
              "title": "A connected purchase step",
              "reason": "Ordering is easier to understand when it follows logically from product selection.",
              "implementation": "Link browsing and the documented checkout journey within the store scope."
            }
          ]
        },
        "seo": {
          "title": "Fakhri Perfumes | Online Perfume Store Design | Wasl Tech",
          "description": "Case study: An online perfume store with a product-focused experience for clear browsing and purchasing."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن متجر إلكتروني."
    },
    "evidenceSources": [
      "main:/assets/works/project_8.webp"
    ]
  },
  {
    "id": "project-13",
    "legacyId": 13,
    "slug": "kiddy-clothing-store",
    "category": "store",
    "image": "/assets/works/project_14.webp",
    "serviceIds": [
      "store"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "كيدي للملابس",
        "categoryLabel": "متاجر",
        "summary": "متجر إلكتروني لملابس الأطفال ينظم المنتجات ضمن تصنيفات واضحة ويسهّل الانتقال من التصفح إلى اختيار المنتج والطلب.",
        "highlights": [
          "تصنيفات لملابس الأطفال",
          "عرض واضح للمنتجات",
          "تجربة تصفح وطلب"
        ],
        "caseStudy": {
          "overview": "كيدي متجر إلكتروني لملابس الأطفال ينظم رحلة العميل من استكشاف الأقسام إلى اختيار المنتج ثم الطلب. تتمثل القيمة الوظيفية في مساعدة المتسوق على الانتقال بين أنواع الملابس دون أن يضيع في كتالوج طويل.",
          "context": "منتجات الملابس قد تتنوع بحسب الفئة والمقاس واللون والمناسبة؛ لكن لا يجوز افتراض أن جميع أدوات التصفية متاحة في المشروع ما لم توثق. التحدي الظاهر هو تصنيف المنتجات وعرضها بطريقة يسهل تصفحها ويُفهم معها أين يبدأ اختيار المنتج.",
          "contribution": "يتناول النطاق تصنيفات المنتجات وعرض الكتالوج وتجربة الطلب. استند تنظيم الدراسة إلى هذه المخرجات المسجلة، دون نسبة تكاملات شحن أو مخزون أو فلاتر متقدمة لم يؤكدها وصف المشروع.",
          "scope": [
            "تصنيفات المنتجات",
            "عرض الكتالوج",
            "تجربة الطلب"
          ],
          "deliveredOutputs": [
            "تصنيفات للمنتجات",
            "عرض الكتالوج",
            "تجربة طلب"
          ],
          "decisions": [
            {
              "title": "بداية من التصنيفات",
              "reason": "التصفح عبر قائمة طويلة لا يساعد العميل على الوصول السريع إلى نوع الملابس.",
              "implementation": "تقديم أقسام المنتجات باعتبارها مدخلًا واضحًا للكتالوج."
            },
            {
              "title": "مسار اختيار ثم طلب",
              "reason": "صفحة المنتج هي نقطة فهم الاختيار قبل إتمام الإجراء.",
              "implementation": "ربط الكتالوج بعرض المنتج وتجربة الطلب ضمن المسار الموصوف."
            }
          ]
        },
        "seo": {
          "title": "كيدي | تصميم متجر إلكتروني لملابس الأطفال | وصل تك",
          "description": "دراسة حالة: متجر إلكتروني لملابس الأطفال بتصنيفات واضحة وتجربة منظمة لتصفح المنتجات والطلب."
        }
      },
      "en": {
        "title": "Kiddy Clothing Store",
        "categoryLabel": "E-commerce",
        "summary": "An online children's clothing store that organizes products into clear categories and makes the journey from browsing to selection and ordering easier.",
        "highlights": [
          "Children's clothing categories",
          "Clear product presentation",
          "Browsing and ordering experience"
        ],
        "caseStudy": {
          "overview": "Kiddy is an online children's clothing store structured around moving from categories to products and then an order. The practical goal is to let shoppers explore clothing types without getting lost in a long catalog.",
          "context": "Clothing can vary by type, size, color and use, but specific filtering capabilities should not be assumed without project evidence. The documented challenge centers on category organization and a product presentation journey that is easy to follow.",
          "contribution": "The published scope includes product categories, catalog display and an ordering experience. This account does not add unverified shipping integrations, inventory systems or advanced filters.",
          "scope": [
            "Product categories",
            "Catalog display",
            "Ordering experience"
          ],
          "deliveredOutputs": [
            "Product categories",
            "Catalog display",
            "Ordering flow"
          ],
          "decisions": [
            {
              "title": "Start with categories",
              "reason": "An unstructured product list makes it harder to find relevant items.",
              "implementation": "Use clothing categories as the primary entrance to the catalog."
            },
            {
              "title": "Selection before ordering",
              "reason": "Customers need a clear product view before they take the next step.",
              "implementation": "Connect catalog browsing, product viewing and the documented order journey."
            }
          ]
        },
        "seo": {
          "title": "Kiddy | Children's Clothing E-commerce Store | Wasl Tech",
          "description": "Case study: An online children's clothing store with clear categories and an organized product browsing and ordering experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن متجر إلكتروني مشابه لكيدي."
    },
    "evidenceSources": [
      "main:/assets/works/project_14.webp"
    ]
  },
  {
    "id": "project-14",
    "legacyId": 14,
    "slug": "alhobari-law-office",
    "category": "web",
    "image": "/assets/works/project_11.webp",
    "serviceIds": [
      "web"
    ],
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "مكتب الحباري للمحاماة",
        "categoryLabel": "مواقع",
        "summary": "موقع لمكتب محاماة واستشارات قانونية ينظم عرض الخدمات والمعلومات ضمن واجهة هادئة تركز على الوضوح والثقة.",
        "highlights": [
          "عرض الخدمات القانونية",
          "هوية واجهة رسمية",
          "تجربة واضحة للتصفح والتواصل"
        ],
        "caseStudy": {
          "overview": "موقع مكتب الحباري للمحاماة يعرض الخدمات والمعلومات القانونية الأساسية في تجربة تعريفية هادئة. وظيفة الموقع هنا مساعدة الزائر على فهم مجالات خدمة المكتب وكيف يصل إلى التواصل، دون أن يحل الموقع محل المشورة القانونية المهنية.",
          "context": "الخدمات القانونية تحتاج صياغة واضحة وواجهة تمنح المحتوى المساحة المناسبة بعيدًا عن ازدحام المؤثرات. التحدي هو تقديم العناوين والمعلومات بصورة منظمة تساعد الزائر على معرفة الخطوة التالية مع المحافظة على الطابع المهني للنشاط.",
          "contribution": "تضمن نطاق التطوير صفحات عرض الخدمات القانونية وتنظيم المعلومات ومسار التواصل مع المكتب. ركز التصميم على القراءة والتنقل ومكان معلومات الاتصال، دون تضمين استشارات آلية أو وعود بنتائج قضايا أو معلومات قانونية جديدة خارج المراجع المعتمدة.",
          "scope": [
            "عرض الخدمات القانونية",
            "تنظيم المعلومات",
            "مسار تواصل واضح"
          ],
          "deliveredOutputs": [
            "عرض الخدمات القانونية",
            "تنظيم المعلومات",
            "مسار تواصل واضح"
          ],
          "decisions": [
            {
              "title": "المعلومة قبل الزخرفة",
              "reason": "الزائر يحتاج معرفة نوع الخدمة وكيفية التواصل أكثر من حاجته إلى مؤثرات مشتتة.",
              "implementation": "استخدام عرض هادئ للمعلومات والخدمات ضمن واجهة رسمية."
            },
            {
              "title": "تواصل واضح ومهني",
              "reason": "بعد قراءة الخدمة يجب معرفة الطريق الصحيح لبدء الاستفسار.",
              "implementation": "ربط صفحات التعريف بمسار تواصل واضح دون تقديم استشارات قانونية داخل الواجهة."
            }
          ]
        },
        "seo": {
          "title": "مكتب الحباري | تصميم موقع مكتب محاماة | وصل تك",
          "description": "دراسة حالة: موقع تعريفي لمكتب محاماة واستشارات قانونية يعرض الخدمات والمعلومات ضمن تجربة واضحة ومنظمة."
        }
      },
      "en": {
        "title": "Al Hobari Law Office Website",
        "categoryLabel": "Web",
        "summary": "A website for a law and legal consulting office that organizes services and information in a calm, professional interface focused on clarity and trust.",
        "highlights": [
          "Legal service presentation",
          "Professional visual direction",
          "Clear browsing and contact experience"
        ],
        "caseStudy": {
          "overview": "The Al Hobari Law Office website presents legal services and essential office information through a restrained professional experience. Its role is to help visitors understand what the office offers and how to make contact, not to replace professional legal advice.",
          "context": "Legal service pages benefit from clear wording and focused layouts rather than distracting visual effects. The challenge is to present information in a recognizable structure and make the next step evident without weakening the professional tone.",
          "contribution": "The documented scope includes service presentation, organized office information and contact paths. It emphasizes readability and navigation without inventing legal advisory automation, case outcomes or legal claims outside the original project record.",
          "scope": [
            "Legal service presentation",
            "Information organization",
            "Clear contact path"
          ],
          "deliveredOutputs": [
            "Legal service presentation",
            "Information organization",
            "Clear contact path"
          ],
          "decisions": [
            {
              "title": "Put information first",
              "reason": "Visitors need to understand the available services more than they need decorative effects.",
              "implementation": "Use a calm, structured layout for service descriptions and office information."
            },
            {
              "title": "A professional contact journey",
              "reason": "After reading about a service, visitors need a clear way to ask questions.",
              "implementation": "Connect service pages to a visible contact path without pretending to provide legal advice in the interface."
            }
          ]
        },
        "seo": {
          "title": "Al Hobari | Law Firm Website Design | Wasl Tech",
          "description": "Case study: A website for a law and legal consulting office that presents services and information in a clear, organized experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة موقع مشابه لمكتب الحباري."
    },
    "evidenceSources": [
      "main:/assets/works/project_11.webp"
    ]
  }
];

const PROJECT_IMAGE_DIMENSIONS = Object.freeze({
  "project-01": Object.freeze({ width: 800, height: 510 }),
  "project-02": Object.freeze({ width: 800, height: 541 }),
  "project-03": Object.freeze({ width: 800, height: 521 }),
  "project-04": Object.freeze({ width: 800, height: 520 }),
  "project-05": Object.freeze({ width: 800, height: 533 }),
  "project-06": Object.freeze({ width: 800, height: 608 }),
  "project-07": Object.freeze({ width: 800, height: 800 }),
  "project-08": Object.freeze({ width: 800, height: 533 }),
  "project-09": Object.freeze({ width: 800, height: 800 }),
  "project-10": Object.freeze({ width: 800, height: 640 }),
  "project-11": Object.freeze({ width: 800, height: 533 }),
  "project-12": Object.freeze({ width: 800, height: 533 }),
  "project-13": Object.freeze({ width: 800, height: 640 }),
  "project-14": Object.freeze({ width: 800, height: 533 }),
  "project-15": Object.freeze({ width: 800, height: 600 }),
  "project-16": Object.freeze({ width: 800, height: 533 })
});

const PROJECT_PLATFORM_TYPES = Object.freeze({
  "project-01": Object.freeze({ ar: "منصة ويب", en: "Web platform" }),
  "project-02": Object.freeze({ ar: "منصة ويب", en: "Web platform" }),
  "project-03": Object.freeze({ ar: "نظام إدارة ويب", en: "Web management system" }),
  "project-04": Object.freeze({ ar: "لوحة إدارة محتوى", en: "Content management dashboard" }),
  "project-05": Object.freeze({ ar: "تطبيق متجر إلكتروني", en: "E-commerce app" }),
  "project-06": Object.freeze({ ar: "تطبيق جوال", en: "Mobile app" }),
  "project-07": Object.freeze({ ar: "موقع شركة", en: "Company website" }),
  "project-08": Object.freeze({ ar: "متجر إلكتروني", en: "E-commerce store" }),
  "project-09": Object.freeze({ ar: "هوية بصرية", en: "Brand identity" }),
  "project-10": Object.freeze({ ar: "هوية بصرية", en: "Brand identity" }),
  "project-11": Object.freeze({ ar: "حملة تسويق رقمي", en: "Digital marketing campaign" }),
  "project-12": Object.freeze({ ar: "متجر إلكتروني", en: "E-commerce store" }),
  "project-13": Object.freeze({ ar: "متجر إلكتروني", en: "E-commerce store" }),
  "project-14": Object.freeze({ ar: "موقع شركة", en: "Company website" }),
  "project-15": Object.freeze({ ar: "منصة تعليمية وتطبيق", en: "Learning platform & app" }),
  "project-16": Object.freeze({ ar: "موقع خدمات رقمية", en: "Digital services website" })
});

function phase2bProjectRecord(project) {
  return Object.freeze({
    ...project,
    platformType: PROJECT_PLATFORM_TYPES[project.id] ?? null,
    imageDimensions: PROJECT_IMAGE_DIMENSIONS[project.id] ?? null,
    contentState: CONTENT_STATE.READY,
    fieldState: createFieldState(projectFieldKeys, {
      identity: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      cover: CONTENT_STATE.READY,
      platformType: CONTENT_STATE.READY,
      scope: CONTENT_STATE.READY,
      waslContribution: CONTENT_STATE.READY,
      contextChallenge: CONTENT_STATE.READY,
      deliveredOutputs: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    }),
    evidenceSources: Object.freeze(project.evidenceSources ?? [
      "main:js/portfolio.js",
      `main:${project.image}`
    ])
  });
}

export const projects = Object.freeze(projectRecords.map(phase2bProjectRecord));

export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectsByService(serviceId) {
  return projects.filter((project) => project.serviceIds.includes(serviceId));
}

export function getProjectsByCategory(category) {
  return projects.filter((project) => project.category === category);
}
