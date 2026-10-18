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
          "overview": "منصة «هِمّة» التعليمية مشروع رقمي عربي يركز على دعم مهارات القراءة والكتابة عبر رحلة تعليمية تتدرج من التعرف على مستوى الطالب إلى الأنشطة والتدريب والمتابعة. لا تُعامل التجربة التعليمية كمجموعة أسئلة منعزلة؛ بل تربط ما يحتاج الطالب تعلمه بطريقة تقديم المحتوى ووسائل مراجعة تقدمه. تستند هذه الدراسة إلى النطاق المعروض في المشروع وصورة العرض المقدمة، ولا تدّعي نتائج تعليمية مثبتة باختبارات ميدانية أو اعتمادًا تربويًا رسميًا.",
          "context": "لا يبدأ كل طالب من المستوى نفسه، وقد تختلف صعوبة المهارات بين القراءة والكتابة. لذلك تحتاج المنصة إلى تنظيم التقييم القبلي وتتابع الأنشطة وإشارات التقدم بصورة تسمح بفهم المسار. وفي الوقت نفسه يحتاج المسؤول عن المحتوى أو متابعة الطلاب إلى واجهة مستقلة عن واجهة الطفل، لأن طبيعة المهمتين مختلفة. هذا يجعل وضوح الرحلة التعليمية والمتابعة أكثر أهمية من زيادة عدد الأنشطة دون هدف محدد.",
          "contribution": "يشمل نطاق العمل المسجل بناء واجهة للتعلم التفاعلي والتقييم القبلي ومسار المهارات والأنشطة ولوحة لإدارة الطلاب ومتابعة تقدمهم. نظّمنا دراسة الحالة بحسب انتقال الطالب من التقييم إلى التدريب ثم المتابعة، مع إبراز اختلاف واجهة الطالب عن واجهة الإدارة. أية تفاصيل دقيقة عن خوارزمية تحليل القراءة أو جودة التصنيف أو عدد المهارات والنسخة النهائية تحتاج الرجوع إلى النسخة المعتمدة من المشروع قبل تقديمها كخصائص منشورة.",
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
          "decisions": [{"title":"البدء بمعرفة المستوى","reason":"النشاط نفسه لا يناسب بالضرورة جميع الطلاب قبل تحديد مهاراتهم.","implementation":"ربط المسار بفكرة التقييم القبلي المسجلة في نطاق المنصة."},{"title":"أنشطة ضمن تسلسل تعلّم","reason":"أسئلة متفرقة وحدها لا تشرح تقدم الطالب بين المهارات.","implementation":"تنظيم الأنشطة في رحلة تدريبية واضحة."},{"title":"فصل تجربة الطالب والإدارة","reason":"الطالب ينجز أنشطة، بينما الإدارة تتابع الأشخاص ومساراتهم.","implementation":"تقديم تجربة تعلم ولوحة متابعة بوظيفتين متميزتين."}]
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
          "overview": "Himma is an Arabic learning platform focused on reading and writing skills through a structured journey from initial assessment to learning activities and progress tracking. The experience is not presented as a random collection of exercises: it connects identified needs with activities and the way progress can be reviewed. This case draws from the published project scope and supplied showcase image, without claiming independently measured learning gains or formal educational certification.",
          "context": "Students do not necessarily begin at the same skill level, and reading and writing difficulties can vary. The platform therefore needs a coherent relationship between an initial assessment, a sequence of activities and progress information. Administrators also have tasks that differ from those of children using the learning interface. The design question is how to make these journeys understandable without equating a larger exercise count with better learning.",
          "contribution": "The recorded work includes an interactive student interface, an initial assessment journey, learning skills and activities, and a dashboard for managing students and reviewing progress. We explain the experience from assessment through practice and follow-up while distinguishing student and administration areas. Specific speech-analysis algorithms, diagnostic accuracy, final skill counts and production rollout status require current project evidence before being presented as delivered results.",
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
          "decisions": [{"title":"Start from an initial assessment","reason":"The same activity sequence may not suit students with different starting skills.","implementation":"Connect the learning path to the documented initial assessment."},{"title":"Sequence learning activities","reason":"Unrelated questions do not by themselves provide a clear skill progression.","implementation":"Present practice within a structured learning journey."},{"title":"Separate learners and administrators","reason":"Students complete activities while staff oversee people and their progress.","implementation":"Design learning and management journeys for their distinct responsibilities."}]
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
          "overview": "تعالج «صوركم» جانبًا عمليًا من عمل المصور: كيف ينتقل المحتوى من جلسة التصوير إلى العميل دون ضياع الصور بين روابط ورسائل وملفات متفرقة؟ يعرض المشروع مفهوم منصة ويب تجمع مجموعات الصور ومسار المشاركة والتسليم في تجربة واحدة، مع فصل ما يديره المصور عما يصل إليه العميل. التركيز هنا على تنظيم الرحلة ووضوح المسؤوليات، وليس على الادعاء بوجود تخزين سحابي أو خصائص حماية لم يتم توثيقها.",
          "context": "عند مشاركة الصور بصورة يدوية قد يصعب معرفة المجموعة المرسلة أو الشخص المقصود بها أو أين يعود العميل لاحقًا إلى المحتوى. يحتاج المصور واجهة تمكنه من تنظيم المجموعات، بينما يحتاج العميل طريقًا مباشرًا إلى الصور المخصصة له. التحدي التصميمي يتمثل في تبسيط عمليتين مختلفتين داخل تجربة مترابطة: الإدارة من جهة والاستلام من جهة أخرى.",
          "contribution": "يركز نطاق العمل المسجل على تصميم تجربة منصة تضم إدارة مجموعات الصور ومشاركة المحتوى مع العملاء وتنظيم الوصول بحسب المستخدم. وفي عرض دراسة الحالة فصلنا مسار إدارة المحتوى عن مسار الاستلام حتى يكون الغرض من كل شاشة مفهومًا. تظهر المخرجات في سجل المشروع بوصفها إدارة للمجموعات، ووصولًا مخصصًا للعملاء، وتجربة لتسليم الصور ومشاركتها. أما آليات الصلاحيات التفصيلية وطرق تخزين الملفات فتحتاج مراجعة قبل وصفها باعتبارها منفذة.",
          "scope": ["إدارة مجموعات الصور","مشاركة المحتوى مع العملاء","تنظيم الوصول لكل مستخدم"],
          "deliveredOutputs": ["إدارة مجموعات الصور","وصول مخصص للعملاء","تجربة تسليم ومشاركة داخل المنصة"],
          "decisions": [{"title":"تجميع الصور في مجموعات","reason":"التسليم يعتمد على معرفة الصور المرتبطة بكل عميل أو جلسة بدل البحث بين ملفات مشتتة.","implementation":"يعرض نطاق المشروع إدارة مجموعات يمكن تقديمها كوحدات واضحة داخل واجهة المصور."},{"title":"تمييز دور المصور والعميل","reason":"احتياجات منشئ المجموعة تختلف عن احتياجات الشخص الذي يراجع الصور ويتسلمها.","implementation":"تنظيم مسارين مفهومين للإدارة والوصول المخصص ضمن تجربة واحدة."},{"title":"تبسيط خطوة التسليم","reason":"العميل يحتاج معرفة أين يجد المحتوى المرتبط به بعد استلام رابط المشاركة.","implementation":"ربط إدارة المجموعات بمسار وصول ومشاركة بدلاً من عرض ملفات بلا سياق."}]
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
          "overview": "Suwarikum addresses a practical photography workflow: getting images from the photographer to the right client without scattering them across messages, links and folders. The recorded product concept is a web platform that brings photo groups, controlled client access and sharing into one experience. The case focuses on a clear hand-off between the person managing the collection and the person receiving it; it does not assert an unverified storage provider or security certification.",
          "context": "Manual file sharing can make it hard to track which collection was delivered or where a client should return to view it. Photographers need to organize collections, while clients need straightforward access to the material intended for them. The product challenge is to connect these different tasks without forcing both audiences through the same management-heavy interface.",
          "contribution": "The documented scope covers photo collection management, sharing with customers and organizing access for each user. Our presentation of the work separates the management journey from the delivery journey, giving each screen a defined purpose. Recorded outputs include organized photo groups, client-specific access and an in-platform sharing experience. Exact authorization controls, file hosting technology and delivery outcomes require independent confirmation before being stated as verified implementation details.",
          "scope": ["Manage photo collections","Share content with clients","Organize access per user"],
          "deliveredOutputs": ["Photo collection management","Dedicated client access","In-platform sharing and delivery experience"],
          "decisions": [{"title":"Group related images","reason":"A hand-off is easier to understand when images for one customer or session are kept together.","implementation":"Structure the experience around manageable photo collections rather than scattered files."},{"title":"Separate user journeys","reason":"Photographers manage collections; clients primarily locate and receive selected content.","implementation":"Provide distinct management and client-access flows within the same product concept."},{"title":"Make delivery understandable","reason":"Recipients need a clear destination for the collection shared with them.","implementation":"Connect collection management to a recognizable sharing and access path."}]
        },
        "seo": {
          "title": "Suwarikum | Photo Delivery Platform Development | Wasl Tech",
          "description": "Case study: A digital platform for managing, delivering, and sharing photos between photographers and clients through organized private access."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع منصة مشابهة لصوركم الرقمية."
    }
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
          "overview": "تقدم منصة «وصّل» للعمل الحر تصورًا لتجميع خطوات التعامل بين طالب الخدمة ومقدمها ضمن مساحة واحدة: اكتشاف الخدمة، وإنشاء الحساب، والتواصل، ثم متابعة التعامل. ليست قيمة المشروع في صفحة تعرض أسماء المستقلين فحسب، بل في فهم احتياجات طرفين يختلفان في أهدافهما وصلاحياتهما خلال رحلة الاتفاق والتنفيذ. تصف دراسة الحالة النطاق المسجل في المشروع دون نسب حجم مستخدمين أو معاملات تشغيلية فعلية إليه.",
          "context": "في سوق الخدمات المستقلة يحتاج العميل إلى الوصول إلى مقدم خدمة مناسب وفهم كيفية بدء التواصل، بينما يحتاج مقدم الخدمة إلى عرض ما يقدمه وإدارة التفاعلات الواردة. وإذا توزعت المحادثات والمتابعة على أكثر من مكان تتعقد تجربة الطرفين. من هنا تبرز أهمية تصميم تدفق واضح للحسابات والاتصال والمتابعة مع تحديد ما تنجزه النسخة المعروضة فعليًا وما يحتاج إثباتًا إضافيًا.",
          "contribution": "يشمل النطاق المدون حسابات للعملاء ومقدمي الخدمات ونظامًا للمحادثات ومسارًا للمدفوعات داخل المنصة. تُعرض هذه العناصر بوصفها أجزاء من رحلة مترابطة: اكتشاف الخدمة، بدء العلاقة، ثم متابعة تفاصيلها. لا نفترض من وجود مسار دفع أنه مرتبط ببوابة مالية بعينها أو اجتاز اختبارات معاملات حقيقية؛ فهذه التفاصيل تحتاج دليلًا فنيًا منفصلًا قبل نشرها.",
          "scope": ["حسابات لمقدمي الخدمات والعملاء","تواصل ومحادثات","تدفق دفع داخل المنصة"],
          "deliveredOutputs": ["حسابات للعملاء ومقدمي الخدمات","نظام محادثات","تدفق مدفوعات داخل المنصة"],
          "decisions": [{"title":"تنظيم الطرفين","reason":"العميل يطلب خدمة، ومقدم الخدمة يعرض مهاراته ويتعامل مع الطلبات.","implementation":"صياغة تجربة حسابات تراعي اختلاف أهداف كل طرف."},{"title":"ربط الاكتشاف بالتواصل","reason":"العثور على خدمة لا يكفي إذا كانت الخطوة التالية غير واضحة.","implementation":"وضع المراسلة ضمن رحلة التعامل بدل جعلها نشاطًا منفصلًا عن الخدمة."},{"title":"تحديد حدود التدفق المالي","reason":"النطاق يذكر وجود تدفق دفع، لكن تفاصيل مزود الدفع وحالة تشغيله ليست موثقة هنا.","implementation":"عرض مسار المدفوعات ضمن نطاق المشروع مع ترك تكاملاته ونتائجه للمراجعة."}]
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
          "overview": "Wasl Freelance is a platform concept that brings the relationship between customers and independent providers into one structured journey: finding a service, accessing an account, communicating and following the engagement. Its purpose is broader than a directory of freelancers because the two participants have different goals and responsibilities. This case describes the project scope on record without inventing active-user figures or completed financial transactions.",
          "context": "A customer needs to understand what a provider offers and how to start an enquiry; a provider needs a way to present their services and manage incoming interactions. When conversation and follow-up are scattered, neither side has a clear journey. The design question is how to connect discovery, accounts and conversations while distinguishing documented features from integration claims that still need proof.",
          "contribution": "The current project record lists accounts for customers and providers, conversations and a payment flow. The intended experience connects these pieces into a coherent service relationship, from discovery through follow-up. Mentioning a payment path does not establish which gateway was integrated or whether real transactions were tested; those points require technical verification before being treated as delivered operational evidence.",
          "scope": ["Accounts for clients and service providers","Communication and messaging","In-platform payment flow"],
          "deliveredOutputs": ["Client and provider accounts","Messaging system","Transaction payment flow"],
          "decisions": [{"title":"Design for two audiences","reason":"Buyers and service providers perform different tasks and need different views.","implementation":"Organize account journeys around each participant's responsibility."},{"title":"Connect discovery to dialogue","reason":"Finding a provider is incomplete without a recognizable next step.","implementation":"Place conversations within the service journey instead of isolating them."},{"title":"Describe payments precisely","reason":"A recorded payment flow is not proof of a live gateway or verified transactions.","implementation":"Include the payment stage in scope while leaving its provider and status for validation."}]
        },
        "seo": {
          "title": "Wasl Freelance | Marketplace Web Platform | Wasl Tech",
          "description": "Case study: An Arabic freelance platform connecting clients with service providers while bringing communication and payments into one digital experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع منصة مشابهة لوصّل."
    }
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
          "overview": "لوحة تحكم الميكروتيك مشروع إداري يستهدف جمع الإجراءات المتكررة لإدارة الشبكة في واجهة واحدة. يتضمن نطاقه التعامل مع المستخدمين والكروت والجلسات، وهي عناصر يحتاجها المشرف للوصول إلى المعلومة وتنفيذ الإجراء المناسب دون التنقل المستمر بين مسارات متفرقة. يركز عرض المشروع على تنظيم العمل الإداري وإبراز الوظائف المسجلة، من غير ادعاء زيادة سرعة الشبكة أو خفض الأعطال دون قياس.",
          "context": "تحتاج إدارة مستخدمي الشبكات إلى متابعة سجلات مختلفة وتنفيذ مهام متكررة في سياق واحد، مثل إنشاء كرت أو مراجعة حالة جلسة. عندما تكون الخطوات غير مترابطة يصعب على المشرف الحفاظ على صورة واضحة للعمل. المشكلة التي تتناولها هذه الواجهة هي تحسين وضوح الأدوات وتنظيمها بحسب مهمة المشرف، لا تغيير بنية أجهزة الشبكة أو ضمان استقرار الاتصال.",
          "contribution": "يشمل نطاق الحل لوحة تجمع إدارة المستخدمين وتوليد وإدارة الكروت ومتابعة الجلسات والعمليات. وقد نُظمت دراسة الحالة بحسب هذه المسؤوليات حتى يكون كل جزء مرتبطًا بإجراء مفهوم للمشرف. تفاصيل ربط الواجهة بواجهات MikroTik أو النظام المحاسبي، وآليات الصلاحيات الدقيقة، وأثر الحل على الوقت والتشغيل، تحتاج الرجوع إلى الكود أو صور التشغيل قبل اعتماد ادعاءات محددة عنها.",
          "scope": ["إدارة المستخدمين","توليد الكروت","متابعة الجلسات والعمليات"],
          "deliveredOutputs": ["إدارة المستخدمين","توليد وإدارة الكروت","متابعة الجلسات"],
          "decisions": [{"title":"واجهة موحدة للمهام","reason":"المشرف يحتاج رؤية المستخدمين والكروت والجلسات بوصفها أجزاء من عمل إداري واحد.","implementation":"تجميع الوظائف المسجلة داخل لوحة إدارة مترابطة."},{"title":"ترتيب العمليات حسب وظيفتها","reason":"إنشاء الكروت يختلف عن مراجعة الجلسات أو إدارة حساب مستخدم.","implementation":"فصل المجموعات الوظيفية مع إبقاء الوصول بينها مباشرًا."},{"title":"عدم المبالغة في القياس","reason":"وجود لوحة تحكم لا يثبت تحسن أداء الشبكة أو تخفيض وقت العمل.","implementation":"وصف الوظائف والمخرجات الظاهرة فقط حتى تتوفر مؤشرات موثقة."}]
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
          "overview": "The MikroTik Dashboard is an administrative interface intended to collect recurring network-management tasks in one place. Its documented scope includes users, access cards and session monitoring—areas an administrator needs to navigate while carrying out daily operations. The case study is about organizing those tasks and making the recorded functions understandable, not claiming unmeasured network speed or uptime improvements.",
          "context": "Running a network service involves different kinds of records and repeatable actions, such as creating a card or reviewing a user session. When these tasks are spread across unrelated screens, administrators can lose track of the operational context. The interface addresses clarity of navigation and task grouping; it is not evidence of modifications to the network infrastructure itself.",
          "contribution": "The recorded deliverables cover user management, card generation and management, and visibility into sessions. The presentation groups these activities by administrator intent so their purpose is understandable. The exact MikroTik integration mechanism, accounting-system connection, granular access rules and measurable operational impact need source-code or runtime evidence before stronger claims can be made.",
          "scope": ["User management","Card generation","Session and operation monitoring"],
          "deliveredOutputs": ["User management","Card generation and management","Session monitoring"],
          "decisions": [{"title":"One place for related tasks","reason":"Users, cards and sessions form connected parts of network administration.","implementation":"Organize the documented functions in a coherent management dashboard."},{"title":"Separate operational functions","reason":"Creating cards is different from reviewing sessions or maintaining user records.","implementation":"Give each function a recognizable area while keeping navigation direct."},{"title":"Keep performance claims evidence-based","reason":"A management interface by itself does not demonstrate faster networks or reduced downtime.","implementation":"Describe observable capabilities without inventing performance improvements."}]
        },
        "seo": {
          "title": "MikroTik | Network & Cards Admin Dashboard | Wasl Tech",
          "description": "Case study: A system for managing Wi-Fi network users, generating cards, and monitoring sessions from one control dashboard."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع نظام مشابه للوحة الميكروتيك."
    }
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
          "overview": "لوحة إدارة المحتوى CMS تحوّل تحديث نصوص الموقع وأقسامه من تعديل مباشر في الملفات البرمجية إلى مهمة يمكن تنفيذها من مساحة إدارية مخصصة. يركز هذا النوع من الحلول على فصل المحتوى عن طريقة عرضه، حتى تكون مراجعة البيانات وتحديثها أكثر وضوحًا لمن يدير الموقع. دراسة الحالة تتناول إدارة الصفحات والتحديثات الديناميكية ولوحة التحكم المركزية وفق نطاق المشروع، ولا تنسب لها نظام نشر معقدًا أو صلاحيات تفصيلية غير موثقة.",
          "context": "عندما يحتاج فريق العمل إلى تعديل عنوان أو وصف أو معلومات خدمة بصورة متكررة، يصبح ربط كل تحديث بتعديل كود أمرًا مرهقًا للتشغيل. المطلوب هو مسار إداري مفهوم يساعد المسؤول على العثور على المحتوى المطلوب وتغييره ثم مشاهدة أثره في الموقع. وهذا يختلف عن موقع ثابت لا يتغير محتواه، كما يختلف عن منصة تشغيلية تشمل معاملات العملاء.",
          "contribution": "بُنيت واجهة لإدارة محتوى الصفحات وتحديث البيانات ديناميكيًا من لوحة تحكم مركزية بحسب سجل المشروع. في عرض التجربة نميّز بين المحتوى الذي يديره المسؤول وبين الواجهة العامة التي يراه فيها الزائر. أما تفاصيل سجل النسخ والموافقات وتعدد الأدوار فلا نعدها جزءًا منفذًا قبل التحقق من وجودها في الكود أو صور لوحة الإدارة.",
          "scope": ["إدارة محتوى الصفحات","تحديث البيانات ديناميكيًا","لوحة تحكم للإدارة"],
          "deliveredOutputs": ["إدارة محتوى الصفحات","تحديثات ديناميكية","واجهة تحكم مركزية"],
          "decisions": [{"title":"فصل التحرير عن العرض","reason":"المسؤول يريد تحديث المعلومة دون الدخول إلى بنية ملفات الموقع.","implementation":"تخصيص واجهة إدارة للمحتوى مرتبطة بالصفحات المعروضة."},{"title":"تجميع الأقسام في مكان واحد","reason":"تعديل أجزاء متفرقة من الموقع يحتاج نقطة تحكم مفهومة.","implementation":"تصميم لوحة مركزية لإدارة بيانات وأقسام الصفحات."},{"title":"تحديد الصلاحيات بدقة","reason":"مصطلح CMS لا يثبت تلقائيًا وجود مراجعات نشر متعددة أو سجل نسخ.","implementation":"حصر العرض في قدرات التحرير والتحديث التي يشير إليها نطاق المشروع."}]
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
          "overview": "The CMS Dashboard makes website content maintenance an administrative task rather than requiring code edits for each headline, description or page section. This kind of project separates editable content from its public presentation so responsible staff can locate and update information more directly. The recorded scope includes page content management, dynamic updates and a central dashboard; it does not establish an unverified publishing approval workflow or extensive role system.",
          "context": "Frequent content changes become difficult to maintain when every adjustment depends on editing source files. Teams need a clear place to locate content, make changes and understand what the public page will show. This is a different problem from a mostly static informational site and also different from a transaction-heavy customer operations platform.",
          "contribution": "The project record documents an administration screen for page content, dynamic data updates and a centralized control surface. Our presentation distinguishes the editor's task from the visitor-facing page and focuses on the documented editing journey. Version history, approval chains and detailed access permissions would need evidence from the implemented dashboard before being described as delivered features.",
          "scope": ["Page content management","Dynamic data updates","Administration dashboard"],
          "deliveredOutputs": ["Page content management","Dynamic updates","Centralized administration"],
          "decisions": [{"title":"Separate editing from presentation","reason":"Content owners need to change information without navigating the codebase.","implementation":"Provide a dedicated management interface connected to public page content."},{"title":"Centralize related page sections","reason":"Distributed edits are hard to track without a recognizable control point.","implementation":"Organize content and page data within a single dashboard."},{"title":"Avoid unsupported workflow claims","reason":"Having a CMS does not automatically mean there are review gates or version histories.","implementation":"Describe confirmed management and update functions rather than assumed enterprise features."}]
        },
        "seo": {
          "title": "CMS | Content Management Dashboard Development | Wasl Tech",
          "description": "Case study: A centralized CMS dashboard for managing and updating website content dynamically from one administration interface."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن نظام لوحة تحكم CMS مشابهة."
    }
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
          "overview": "تيك زون تطبيق للتسوق عبر الجوال يركز على رحلة متصلة تبدأ من استعراض المنتجات وتمر بالسلة ثم متابعة حالة الطلب. في هذا المشروع لا يكفي عرض صور المنتجات بصورة جميلة؛ فالمستخدم يحتاج معرفة ما اختاره، وكيف ينتقل للخطوة التالية، وأين يعود لمراجعة طلبه. تتناول دراسة الحالة تنظيم هذه الرحلة كما يصفها نطاق المشروع، دون افتراض طرق دفع أو شحن أو إشعارات لم تُوثق.",
          "context": "قد ينتقل المتسوق بين عدة منتجات قبل اتخاذ القرار، ولذلك يحتاج إلى فئات وواجهات عرض واضحة، مع سلة تجمع اختياراته. وبعد إنشاء الطلب تتغير حاجته من البحث إلى المتابعة. التحدي هنا تنظيم انتقال المستخدم بين ثلاث حالات مختلفة من دون فقد السياق: الاكتشاف والاختيار والمتابعة.",
          "contribution": "يشمل سجل المشروع تصميم وتطوير تجربة تطبيق متجر، وكتالوج منتجات، وسلة مشتريات، وآلية لعرض حالة الطلب. تركّز صياغة الدراسة على ترتيب المهام حسب رحلة المستخدم بدل حشد كل وظائف التجارة في شاشة واحدة. ولم نضف ادعاءات عن التكامل مع شركات توصيل أو بوابات دفع أو تحقيق مبيعات؛ أي من ذلك يحتاج شهادة تشغيل موثقة.",
          "scope": ["عرض وتصفح المنتجات","إدارة السلة","متابعة الطلبات"],
          "deliveredOutputs": ["كتالوج منتجات","سلة مشتريات","متابعة حالة الطلب"],
          "decisions": [{"title":"كتالوج موجه للاكتشاف","reason":"العميل يقرر بناءً على فهم المنتجات والتنقل بينها.","implementation":"إبراز عرض المنتجات قبل الانتقال إلى خطوة السلة."},{"title":"سلة تحفظ سياق الاختيار","reason":"الانتقال من منتج إلى آخر يجب ألا يجعل اختيارات العميل غير واضحة.","implementation":"جعل السلة خطوة مستقلة ومفهومة ضمن رحلة الشراء."},{"title":"متابعة بعد الطلب","reason":"اهتمام العميل لا ينتهي عند تأكيد الاختيار بل يستمر بالسؤال عن الحالة.","implementation":"تقديم مسار لعرض حالة الطلب بحسب النطاق المسجل."}]
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
          "overview": "Tech Zone is a mobile shopping application built around a continuous journey: discovering products, reviewing a cart and following an order. A useful shopping experience does more than display product images; users need to understand their selections, move to the next step and return for updates. The case study covers the journey recorded in the project scope, without assuming payment methods, shipping partnerships or notifications that have not been verified.",
          "context": "Shoppers may compare several items before deciding, so category browsing and product presentation need to connect naturally to a cart. Once an order is placed, their main question changes from what to buy to what happens next. The design challenge is keeping discovery, selection and order follow-up distinct but connected.",
          "contribution": "The recorded work includes a mobile store interface, a product catalog, a cart and order-status tracking. The project story explains the responsibilities of these steps rather than listing unrelated commerce features. No sales figures, payment gateway providers or delivery integrations are claimed without separate implementation evidence.",
          "scope": ["Product browsing","Cart management","Order tracking"],
          "deliveredOutputs": ["Product catalog","Shopping cart","Order status tracking"],
          "decisions": [{"title":"Present products for discovery","reason":"People need to understand the catalog before deciding what belongs in the cart.","implementation":"Make product browsing the starting point of the shopping journey."},{"title":"Keep selections clear","reason":"Moving between products should not obscure what the shopper has chosen.","implementation":"Give the cart a recognizable step within the experience."},{"title":"Support post-order follow-up","reason":"A customer needs information after submitting an order, not only before it.","implementation":"Include an order-status journey as documented in the scope."}]
        },
        "seo": {
          "title": "Tech Zone | Mobile E-commerce App Development | Wasl Tech",
          "description": "Case study: A mobile e-commerce experience covering product browsing, cart, and order tracking in one clear journey."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم متجر إلكتروني مشابه لتيك زون."
    }
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
          "overview": "أروما كافيه تجربة تطبيق جوال مخصصة لعميل المقهى، تجمع الاطلاع على المنتجات والطلب وبرنامج الولاء والوصول إلى معلومات الفروع. يركز المشروع على جعل الخدمات التي يحتاجها الزائر أثناء التعامل مع المقهى متاحة من مكان واحد، بدل أن يبحث عن قائمة المنتجات في مكان، والموقع الجغرافي في مكان آخر. تصف هذه الدراسة المجالات الثلاثة المدرجة في سجل العمل؛ ولا تنسب للتطبيق انتشارًا أو معدلات استخدام لا تتوفر قياساتها.",
          "context": "تختلف حاجة زائر المقهى بحسب اللحظة: قد يريد اختيار طلب، أو معرفة ما يتاح له في الولاء، أو الوصول إلى فرع قريب. جمع هذه الاحتياجات في تطبيق واحد يتطلب وضوحًا في بداية الرحلة، وفي المسار الذي يتبعه المستخدم للوصول إلى المهمة دون تشتيت. التحدي هنا ليس تعدد الشاشات بحد ذاته، بل تنظيم خدمات المقهى حول أهداف مفهومة.",
          "contribution": "يتضمن النطاق المسجل واجهة لطلب المنتجات، وبرنامجًا للولاء، وعرض الفروع على الخريطة. تناول التصميم رحلة استخدام الجوال بوصفها مجموعة مهام واضحة: التصفح والطلب، مراجعة ما يخص الولاء، ثم استكشاف الفروع. تفاصيل الدفع داخل التطبيق، وطريقة حساب نقاط الولاء، والتكاملات مع نظام نقاط البيع لا تُنشر باعتبارها حقائق دون مراجعة التطبيق أو وثائقه.",
          "scope": ["طلب المنتجات","برنامج ولاء","عرض الفروع على الخريطة"],
          "deliveredOutputs": ["طلب القهوة عبر التطبيق","برنامج ولاء","خرائط الفروع"],
          "decisions": [{"title":"ترتيب نقطة بدء الاستخدام","reason":"زائر المقهى غالبًا ما يبحث عن مهمة مباشرة، لا قائمة طويلة من خصائص التطبيق.","implementation":"تقديم مسارات الطلب والولاء والفروع بوصفها خيارات خدمة واضحة."},{"title":"فصل الولاء عن الطلب","reason":"متابعة مزايا الولاء تختلف عن اختيار المنتجات وإرسال الطلب.","implementation":"إبقاء برنامج الولاء مجالًا مفهومًا داخل تجربة التطبيق."},{"title":"إظهار الفروع في سياقها","reason":"قد يرغب العميل بالوصول إلى فرع قبل أن يقرر الاستفادة من الخدمة.","implementation":"ربط معلومات الفروع بواجهة مناسبة للاستكشاف عبر الخريطة."}]
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
          "overview": "Aroma Cafe is a mobile experience connecting the tasks a café customer may need: viewing products and ordering, accessing a loyalty program and finding branches. The project aims to keep these related activities together instead of making visitors look in separate places for a menu, rewards or locations. The case describes the three areas present in the source record, not unmeasured adoption figures or customer behavior.",
          "context": "A café visitor's immediate goal can change: placing an order, checking loyalty information or locating a branch. Bringing these experiences into one app requires a clear starting point and routes to individual tasks. The design challenge is not the number of screens but how naturally customers can identify the function they came to use.",
          "contribution": "The recorded work includes a mobile ordering experience, loyalty functions and a branch map. This case organizes the contribution around product selection, loyalty access and location discovery. Details of in-app payments, reward calculations and point-of-sale integrations need a demonstrable app flow or technical source before they are presented as confirmed features.",
          "scope": ["Product ordering","Loyalty program","Branch map display"],
          "deliveredOutputs": ["In-app coffee ordering","Loyalty program","Branch maps"],
          "decisions": [{"title":"Lead with user tasks","reason":"Customers generally arrive with an immediate need, not to inspect every app capability.","implementation":"Present ordering, loyalty and branch discovery as understandable service journeys."},{"title":"Keep loyalty distinct","reason":"Reward information serves a different purpose from composing a product order.","implementation":"Give the loyalty experience a recognizable place within the application."},{"title":"Make branches discoverable","reason":"Visitors may need a location before choosing how to use a café service.","implementation":"Connect branch information to an accessible map-focused discovery path."}]
        },
        "seo": {
          "title": "Aroma Cafe | Coffee Ordering & Loyalty App | Wasl Tech",
          "description": "Case study: A mobile coffee ordering app with a loyalty program and branch maps in one customer experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة تطبيق مشابه لأروما كافيه."
    }
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
          "overview": "«البناء المتقن» موقع تعريفي لشركة مقاولات وخدمات هندسية. تتمثل وظيفته في مساعدة الزائر على فهم مجالات عمل الشركة، والاطلاع على نماذج مشاريعها، ثم الوصول إلى إجراء طلب عرض سعر أو تواصل. لهذا يركز عرض المشروع على المحتوى والخدمات والأعمال بدل وصفه كنظام تشغيل داخلي لمشاريع المقاولات. قيمة التجربة هنا في ترتيب المعلومات التي يحتاجها العميل قبل التواصل.",
          "context": "في قطاع المقاولات لا يكتفي العميل غالبًا باسم الخدمة؛ فهو يريد تصور طبيعة الأعمال المنفذة، والتمييز بين أنواع الخدمات الهندسية، ومعرفة كيف يبدأ الاستفسار. إذا توزعت هذه المعلومات دون ترابط سيصعب تكوين صورة واضحة عن الشركة. لذلك يحتاج الموقع إلى مسار يصل التعريف والخدمات بالأعمال ثم يعرض خطوة تواصل مناسبة.",
          "contribution": "يشمل النطاق المسجل تصميم وتطوير صفحات للخدمات، ومعرضًا للمشاريع، ومسار طلب عرض سعر. بنيت قصة المشروع حول انتقال الزائر من الاطلاع على الخدمة إلى الاستدلال على نوع العمل ثم التواصل. لا ندّعي أن الموقع ينفذ إدارة عقود أو حساب كميات أو متابعة مواقع البناء؛ إذ لا يتضمن السجل دليلًا على تلك الأنظمة.",
          "scope": ["عرض الخدمات","معرض المشاريع","طلب عرض سعر"],
          "deliveredOutputs": ["صفحات للخدمات","عرض المشاريع","طلب عرض سعر"],
          "decisions": [{"title":"إيضاح مجال الخدمات","reason":"العنوان العام «مقاولات» لا يوضح وحده ما يمكن للعميل طلبه.","implementation":"تنظيم خدمات الشركة في صفحات قابلة للاكتشاف."},{"title":"جعل الأعمال دليلًا بصريًا","reason":"العميل يحتاج الاطلاع على أمثلة من طبيعة أعمال الشركة.","implementation":"ربط عرض المشاريع بسياق الخدمات المقدمة."},{"title":"وضوح طريق عرض السعر","reason":"المعلومات لا تحقق هدفها إذا لم يعرف المهتم كيف يبدأ الاستفسار.","implementation":"تهيئة مسار تواصل وطلب عرض سعر بعد استكشاف المحتوى."}]
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
          "overview": "Al Benaa Al Motqin is a company website for construction and engineering services. It helps visitors understand the firm's work, explore projects and reach a quote or contact path. The project is presented as a content and enquiry experience rather than an internal construction management platform. The value of the website lies in organizing the information a prospective client may want before making contact.",
          "context": "In construction, a service name alone rarely answers every question. Prospective clients may want to understand the types of work the firm does, review project examples and find a clear starting point for a conversation. If these details are spread across unrelated pages, the business is harder to understand. The design challenge is connecting services, proof of work and enquiries.",
          "contribution": "The recorded scope covers service pages, a portfolio section and a quote-request route. The case story follows the visitor from service discovery through browsing relevant work to the next contact step. It does not attribute contract administration, quantity surveying or on-site construction tracking systems to this website without supporting records.",
          "scope": ["Service presentation","Project showcase","Quotation requests"],
          "deliveredOutputs": ["Service pages","Project showcase","Quotation request flow"],
          "decisions": [{"title":"Make services legible","reason":"The broad term 'construction' does not tell visitors which work they can request.","implementation":"Give individual service areas clear places in the site."},{"title":"Use projects as context","reason":"Prospective clients often need examples to understand the firm's type of work.","implementation":"Connect portfolio presentation to the service story."},{"title":"Provide a quote pathway","reason":"Useful information needs an equally clear next action.","implementation":"Place enquiry and quotation access after discovery and evaluation."}]
        },
        "seo": {
          "title": "Al Benaa Al Motqin | Construction Website | Wasl Tech",
          "description": "Case study: A construction and engineering company website that presents services and projects and makes quotation requests easier."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع موقع مشابه للبناء المتقن."
    }
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
          "overview": "«النخبة للإلكترونيات» متجر إلكتروني يعتمد على تنظيم كتالوج الأجهزة والإلكترونيات داخل تجربة تسوق مفهومة. يواجه هذا النوع من المتاجر تحديًا في تنوع المنتجات والفئات والمواصفات، ولذلك تبرز أهمية انتقال الزائر من اختيار التصنيف إلى معاينة المنتج ثم متابعة الطلب. تصف الدراسة نطاق العرض والتصنيف ومسار الطلب كما ورد في بيانات المشروع، ولا تدّعي وجود تكامل مخزون أو مدفوعات لم تُوثق.",
          "context": "قد يدخل العميل وهو يعرف فئة المنتج لا اسمه النهائي؛ وقد يحتاج مقارنة أكثر من خيار قبل الطلب. عرض المنتجات دون تصنيف واضح يستهلك وقت التصفح ويجعل الوصول للمنتج المناسب أصعب. من هنا يتمحور التحدي حول ترتيب الأقسام وتوفير تسلسل مفهوم للانتقال إلى تفاصيل المنتج والإجراء التالي.",
          "contribution": "يشمل العمل تصميم وبناء متجر ينظم الكتالوج في تصنيفات مع تجربة وصول إلى الطلب. وقد فُصّلت دراسة الحالة لتوضح وظيفة كل جزء من الرحلة: استكشاف الفئة، فهم ما تعرضه صفحة المنتج، ثم الاتجاه إلى خطوة الطلب. لا نضيف إلى هذا النطاق نظام مخزون مباشرًا أو شروط شحن ودفع أو نتائج مبيعات بلا دليل.",
          "scope": ["عرض المنتجات","التصنيفات","تجربة الطلب"],
          "deliveredOutputs": ["كتالوج إلكترونيات","تصنيفات منتجات","تجربة إتمام الطلب"],
          "decisions": [{"title":"تصنيفات تسبق التفاصيل","reason":"كثرة أنواع الأجهزة تجعل التصنيف نقطة دخول عملية للمتسوق.","implementation":"عرض كتالوج الإلكترونيات ضمن فئات مفهومة."},{"title":"تفاصيل واضحة للمنتج","reason":"العميل يحتاج معرفة العنصر الذي اختاره قبل طلبه.","implementation":"جعل صفحة العرض امتدادًا طبيعيًا للانتقال من القسم إلى المنتج."},{"title":"مسار طلب متصل","reason":"بعد اختيار المنتج لا ينبغي أن تنقطع رحلة المستخدم عن الهدف.","implementation":"ربط الاستكشاف بخطوة الطلب المسجلة في نطاق المتجر."}]
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
          "overview": "Elite Electronics is an e-commerce storefront organized around a catalog of electronic devices and related products. This kind of store needs visitors to move from broad categories to individual products and then toward an order. The case focuses on browsing structure, product presentation and the documented ordering journey; it does not claim a live inventory integration, payment provider or sales result that has not been verified.",
          "context": "A shopper may know which category they need without knowing the exact model, or may explore several alternatives before deciding. A large catalog becomes harder to use when categories do not support discovery. The design challenge is to arrange the offering in a way that makes navigation, product selection and the next step understandable.",
          "contribution": "The recorded work covers building a categorized electronics catalog and an order experience. Our case study explains the purpose of each stage—category exploration, product review and movement toward a request. Warehouse synchronization, shipping rules, payment gateway details and conversion performance are outside the demonstrated source record.",
          "scope": ["Product display","Categories","Ordering experience"],
          "deliveredOutputs": ["Electronics catalog","Product categories","Order completion experience"],
          "decisions": [{"title":"Organize by category","reason":"Different device types make category navigation a useful starting point.","implementation":"Present the electronics catalog within clear product groups."},{"title":"Maintain product context","reason":"Customers should know what they selected before moving on.","implementation":"Connect category browsing to an understandable product presentation."},{"title":"Keep ordering connected","reason":"Once an item is selected, the journey needs a recognizable next action.","implementation":"Link catalog discovery to the documented ordering experience."}]
        },
        "seo": {
          "title": "Elite Electronics | Online Electronics Store | Wasl Tech",
          "description": "Case study: An electronics e-commerce store with organized categories and a clear experience from browsing to ordering."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع متجر إلكتروني مشابه."
    }
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
          "overview": "هوية مطعم «الملكي» مشروع تصميم يهدف إلى بناء حضور بصري متسق يتجاوز تصميم شعار منفرد. يركز نطاقه على الشعار والألوان والتطبيقات المطبوعة والتغليف، وهي عناصر يراها العميل في سياقات مختلفة ولكن يفترض أن يتعرف عليها بوصفها علامة واحدة. تسلط دراسة الحالة الضوء على نظام الاستخدام والاتساق، من غير نسبة تغير في المبيعات أو شهرة العلامة إلى التصميم.",
          "context": "إذا اختلف شكل الشعار أو تدرجات اللون أو أسلوب العناصر بين التغليف والمواد المطبوعة، قد تبدو كل قطعة وكأنها صادرة عن جهة مختلفة. يحتاج المشروع إلى قاعدة بصرية مشتركة يمكن تطبيقها على مواد تحمل وظائف وأحجامًا مختلفة، مع مراعاة وضوح اسم المطعم وتماسك الأسلوب العام.",
          "contribution": "يشمل نطاق العمل تصميم الشعار وبناء النظام اللوني وتطبيقات مطبوعة وتغليف. نعرض المشروع كمنظومة متكاملة: علامة بصرية أساسية، اختيارات لونية تدعمها، ثم أمثلة استخدام تساعد على اختبار اتساقها في المواد المحيطة بتجربة المطعم. تفاصيل مقاسات العبوات والمطبوعات التنفيذية ودليل الهوية الكامل تحتاج تأكيدًا من ملفات التصميم الأصلية.",
          "scope": ["تصميم الشعار","بناء النظام اللوني","تطبيقات مطبوعة وتغليف"],
          "deliveredOutputs": ["تصميم الشعار","نظام ألوان","مطبوعات وتغليف"],
          "decisions": [{"title":"علامة أساسية قابلة للتعرف","reason":"التطبيقات المختلفة تحتاج عنصرًا يربطها بصريًا.","implementation":"العمل على شعار يكون مرجعًا لبقية عناصر الهوية."},{"title":"انسجام النظام اللوني","reason":"اختلاف الألوان بلا قاعدة مشتركة يضعف اتساق المواد.","implementation":"تحديد نظام ألوان ضمن نطاق الهوية."},{"title":"اختبار الهوية في التطبيق","reason":"الهوية لا تُقاس بصورة الشعار وحدها، بل بكيفية ظهوره في المواد.","implementation":"عرض تطبيقات مطبوعة وتغليف تعكس العناصر الأساسية نفسها."}]
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
          "overview": "Al Malaki Restaurant's brand identity goes beyond a standalone logo. The recorded work covers the symbol, colors, print applications and packaging—places where customers encounter the same brand in different formats. The case highlights the consistency of those components without claiming measurable sales growth, awareness or customer preference changes resulting from the design.",
          "context": "A restaurant brand can look fragmented when packaging, printed items and promotional materials use unrelated treatments. A shared visual basis is needed across pieces with different sizes and purposes while preserving recognition and legibility. The design challenge is to build a reusable visual language rather than styling each item in isolation.",
          "contribution": "The scope records logo design, a color system and print and packaging applications. We present them as a connected identity: a primary visual mark, supporting color decisions and examples that demonstrate consistency across uses. Production-ready packaging specifications, precise print dimensions and a comprehensive brand manual would require the original deliverable files before being claimed.",
          "scope": ["Logo design","Color system","Print and packaging applications"],
          "deliveredOutputs": ["Logo design","Color system","Print and packaging"],
          "decisions": [{"title":"Establish a recognizable mark","reason":"Different touchpoints need one consistent point of recognition.","implementation":"Use the logo as the core reference for the visual identity."},{"title":"Define color relationships","reason":"Uncontrolled color choices can make applications appear unrelated.","implementation":"Set a consistent color system for the brand."},{"title":"Show practical applications","reason":"The identity must work beyond a logo on a blank background.","implementation":"Connect printed and packaging examples to the same visual principles."}]
        },
        "seo": {
          "title": "Al Malaki Restaurant | Brand Identity Design | Wasl Tech",
          "description": "Case study: A visual identity for Al Malaki Restaurant covering logo, colors, printed materials, and packaging."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم هوية بصرية."
    }
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
          "overview": "الهوية البصرية لشركة «ميلانو» تركز على تقديم الشركة بطابع تقني متماسك عبر الشعار والنظام البصري وتطبيقات الهوية. الهدف من العرض ليس الادعاء بأن الشكل وحده يثبت كفاءة الشركة، بل توضيح كيف يمكن لنظام بصري ثابت أن يجعل المواد المختلفة جزءًا من علامة واحدة. تنطلق دراسة الحالة من نطاق العمل المسجل ولا تفترض هوية لفظية أو استراتيجية تسويق مكتملة ما لم تتوفر ملفاتها.",
          "context": "عندما تُصمم كل مادة للشركة من جديد بلا مرجع مشترك، يصعب المحافظة على شكل موحد بين العروض والمنشورات والمطبوعات. يحتاج المشروع إلى عناصر يسهل إعادة استخدامها مع بقاء الاسم واضحًا وطابع العلامة متسقًا. لهذا تتعامل الدراسة مع الهوية بوصفها نظامًا لا تجميعة صور منفصلة.",
          "contribution": "يشمل نطاق العمل تصميم الشعار والنظام البصري وتطبيقات الهوية. وقد صيغت المخرجات حول العلاقة بين هذه الأجزاء: الشعار أصل، والنظام يحدد القواعد المرئية، والتطبيقات تظهر إمكانية استخدامها عمليًا. الألوان الدقيقة، وتفاصيل الخطوط، وملفات الاستخدام النهائية تنتظر مراجعة مصدر التصميم قبل إضافتها بوصفها مواصفات رسمية.",
          "scope": ["تصميم الشعار","النظام البصري","تطبيقات الهوية"],
          "deliveredOutputs": ["تصميم الشعار","النظام البصري","تطبيقات الهوية"],
          "decisions": [{"title":"شعار يحدد نقطة التعرف","reason":"العلامة تحتاج عنصرًا يمكن أن يظل مميزًا عبر أحجام واستخدامات مختلفة.","implementation":"إعداد الشعار ضمن نطاق نظام هوية متكامل."},{"title":"نظام بصري قابل لإعادة الاستخدام","reason":"ثبات المظهر يحتاج قواعد بين العناصر لا قرارات منفصلة في كل مادة.","implementation":"ربط مكونات الهوية داخل اتجاه تقني واضح."},{"title":"تطبيقات توضح الاتساق","reason":"تجربة الهوية الحقيقية تظهر عند انتقالها من النموذج إلى الاستخدام.","implementation":"عرض تطبيقات تستند إلى الأسلوب البصري ذاته."}]
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
          "overview": "Milano's visual identity project focuses on a consistent technology-oriented appearance across its logo, visual system and brand applications. The case does not suggest that a polished identity alone proves a company's technical capability; it explains how shared design choices can make separate materials recognizable as one brand. The description follows the recorded scope without inventing an unverified messaging strategy or marketing rollout.",
          "context": "When each company asset is designed independently, its appearance may drift between presentations, printed materials and digital posts. The project therefore needs reusable visual principles that maintain recognition and readable branding across formats. This case treats the identity as a system, not a set of unrelated decorative images.",
          "contribution": "The documented work comprises logo development, a visual system and identity applications. We describe the relationship between them: the mark establishes recognition, the visual system connects components and the applications show how they can be used together. Exact font names, color specifications and production deliverable formats need review of original design files before publication as official facts.",
          "scope": ["Logo design","Visual system","Brand applications"],
          "deliveredOutputs": ["Logo design","Visual system","Brand applications"],
          "decisions": [{"title":"Create a consistent focal mark","reason":"The brand needs recognizable elements across different sizes and media.","implementation":"Treat the logo as the anchor of a reusable identity."},{"title":"Define shared visual rules","reason":"A consistent look requires relationships between elements, not isolated styling.","implementation":"Organize the design components around a coherent technical character."},{"title":"Demonstrate reuse","reason":"An identity becomes meaningful when it can be applied outside the concept board.","implementation":"Present applications that follow the same core visual system."}]
        },
        "seo": {
          "title": "Milano | Company Logo & Brand Identity | Wasl Tech",
          "description": "Case study: A visual identity for Milano including a logo and modern technical visual system."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم هوية بصرية."
    }
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
          "overview": "الحملة التسويقية لمتجر «فخري للعطور» مشروع محتوى وتصميم يهدف إلى توحيد طريقة تقديم المنتجات والرسائل الإعلانية عبر منشورات ومواد تسويقية مترابطة. ليست الحملة مجموعة تصاميم منفصلة فقط؛ فهي تحتاج تصورًا لما يقوله المحتوى، وكيف تعرض المنتجات، وما الذي ينبغي للمتلقي فهمه أو فعله بعد مشاهدتها. يوثق نطاق المشروع استراتيجية المحتوى والتصاميم والحملات الاجتماعية، ولا نضيف أرقام وصول أو مبيعات بلا تقارير.",
          "context": "من السهل إنتاج صور جميلة للعطور، لكن تكرار رسائل متفرقة دون تسلسل قد يجعل حضور المتجر غير متماسك. تتطلب الحملة تنظيم الموضوعات ونبرة الخطاب وتوزيع المواد بما يخدم المنتج والهدف التسويقي. التحدي التحريري أن تتكامل الرسالة المكتوبة والصورة ومسار التفاعل، لا أن تُعامل كل قطعة إعلانية على أنها عمل معزول.",
          "contribution": "يشمل سجل المشروع تخطيط المحتوى والتصاميم الإعلانية ومواد وحملات شبكات التواصل. تُعرض مساهمة العمل على ثلاث طبقات: تحديد اتجاه الرسالة، تحويله إلى تصميم مناسب للمنتج، ثم إنتاج مواد متقاربة في الأسلوب. ولا نستنتج من وجود حملة أن الإعلان الممول شُغّل بميزانية محددة أو حقق نتائج قابلة للقياس؛ يمكن إضافتها بعد تقديم التقارير الأصلية.",
          "scope": ["تخطيط المحتوى","تصميم الإعلانات","حملات ومحتوى اجتماعي"],
          "deliveredOutputs": ["استراتيجية محتوى","تصاميم إعلانية","محتوى وحملات اجتماعية"],
          "decisions": [{"title":"رسالة قبل الصورة","reason":"شكل الإعلان وحده لا يوضح للمتلقي ماذا يميز العرض أو أين يتفاعل.","implementation":"وضع اتجاه للمحتوى يسبق إنتاج التصاميم."},{"title":"اتساق المواد الإعلانية","reason":"ظهور كل مادة بأسلوب مختلف يضعف ترابط الحملة في ذهن الجمهور.","implementation":"استخدام اتجاه بصري ونصي مشترك في المواد المسجلة."},{"title":"الفصل بين التنفيذ والنتائج","reason":"وجود حملة جاهزة للنشر لا يعني تحقق وصول أو مبيعات محددة.","implementation":"عرض المخرجات المنفذة وترك المؤشرات العددية لتقارير المنصات."}]
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
          "overview": "The Fakhri Perfumes campaign combines content planning and advertising design around a consistent way to present perfume products. A campaign involves more than producing separate attractive graphics: it needs an understandable message, a product-centered visual approach and a clear intended next step. The project scope includes content strategy, promotional designs and social media campaign materials; there are no invented reach or sales figures in this case.",
          "context": "Perfume graphics can be visually appealing yet disconnected when every post uses a new message and presentation style. Campaign content benefits from a recognizable editorial direction and a relationship between product imagery, the written message and the expected action. The challenge is to design a coherent collection of assets rather than a set of unrelated posts.",
          "contribution": "The work record includes content planning, advertising graphics and social campaign content. We explain the contribution in three layers: define a communication direction, translate it into product-focused visuals and produce related materials that share a consistent style. A campaign asset does not prove a paid advertising spend or measured business return; those claims would require original platform reports.",
          "scope": ["Content planning","Advertising design","Social content and campaigns"],
          "deliveredOutputs": ["Content strategy","Advertising creatives","Social content and campaigns"],
          "decisions": [{"title":"Start with the message","reason":"An attractive visual is not enough to communicate the offer or next step.","implementation":"Define a content direction before producing campaign graphics."},{"title":"Maintain campaign consistency","reason":"Unrelated visual treatments make a series harder to recognize as one campaign.","implementation":"Connect recorded campaign materials through related text and visual choices."},{"title":"Separate outputs from results","reason":"A produced campaign does not establish traffic, reach or sales performance.","implementation":"Describe deliverables and reserve outcome claims for verified reports."}]
        },
        "seo": {
          "title": "Fakhri Perfumes | Digital Campaign & Content | Wasl Tech",
          "description": "Case study: A digital campaign for Fakhri Perfumes covering content strategy, advertising design, and social media presence."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن حملة تسويقية."
    }
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
          "overview": "«فخري للعطور» متجر إلكتروني يركز على جعل المنتج محور تجربة التصفح والشراء. تختلف منتجات العطور في طابعها ووصفها وتفاصيلها التي يحتاج الزائر قبل الاختيار، ولذلك يعتمد نجاح عرضها على تنظيم الفئات والمعلومات والصور ومسار الانتقال إلى الطلب. يستند هذا الوصف إلى سجل مشروع المتجر، لا إلى افتراضات حول عدد المنتجات أو طرق الدفع أو المخزون المباشر.",
          "context": "عندما يزور العميل متجر عطور لا يريد استعراض قائمة طويلة بلا سياق؛ يحتاج إلى التعرف على الخيارات والوصول إلى تفاصيل المنتج ومراجعة ما اختاره. التحدي هنا هو التوازن بين الهوية الجمالية للمتجر وبين الوظائف العملية للتصفح، بحيث لا تطغى العناصر البصرية على معلومات المنتج ومسار الشراء.",
          "contribution": "يتضمن نطاق التنفيذ تصميم وبناء عرض منتجات العطور وتنظيم التصفح وخطوات الشراء. تُبرز الدراسة العلاقة بين استكشاف المنتجات وعرضها ثم اختيارها، دون الحديث عن حملات تسويق أو خدمات شحن غير مسجلة ضمن هذا المشروع. تفاصيل التكامل مع بوابة دفع أو نظام مخزون أو حجم الطلبات تُترك للتحقق من التنفيذ الفعلي قبل اعتمادها.",
          "scope": ["عرض المنتجات","تنظيم التصفح","مسار الشراء"],
          "deliveredOutputs": ["عرض منتجات العطور","تنظيم التصفح","مسار شراء"],
          "decisions": [{"title":"وضع العطر في الواجهة","reason":"قرار العميل يتعلق بالمنتج وخصائصه قبل العناصر الإعلانية المحيطة.","implementation":"ترتيب صفحات العرض حول منتجات العطور."},{"title":"مسار تصفح متسق","reason":"الانتقال بين الأقسام والمنتجات يحتاج ترتيبًا لا يشتت الزائر.","implementation":"تنظيم تجربة الاستكشاف والوصول للتفاصيل."},{"title":"ربط الاختيار بالشراء","reason":"يجب أن تظل الخطوة التالية واضحة بعد تحديد المنتج.","implementation":"تقديم مسار شراء ضمن النطاق المسجل دون افتراض تكاملات غير مثبتة."}]
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
          "overview": "Fakhri Perfumes is an online store organized around the perfume products themselves. Browsing this category calls for clear product presentation, useful information and a comprehensible path toward an order. The case focuses on product discovery, presentation and purchasing steps recorded in the source material; it does not invent the number of stocked products, payment methods or live inventory capabilities.",
          "context": "Customers exploring perfume options need to move beyond an undifferentiated list to recognizable products and their details. The visual identity of the store matters, but it must not obscure item information or the path to ordering. The design challenge is balancing product-focused presentation with practical browsing behavior.",
          "contribution": "The recorded work covers designing and building a perfume product storefront, organizing browsing and establishing a purchasing journey. This case links category exploration, product review and the next purchase step. Advertising campaigns and logistics functionality are separate subjects; specific gateways, warehouse systems and order volumes require verification before publication.",
          "scope": ["Product presentation","Browsing organization","Buying journey"],
          "deliveredOutputs": ["Perfume product presentation","Organized browsing","Purchase flow"],
          "decisions": [{"title":"Let the product lead","reason":"A perfume shopper needs to understand the offering before considering the surrounding design.","implementation":"Build the presentation around the individual products."},{"title":"Structure product discovery","reason":"A coherent progression from categories to details supports browsing.","implementation":"Connect sections and product views in a clear sequence."},{"title":"Keep the next step obvious","reason":"Customers need to know where to go after deciding on a product.","implementation":"Include an understandable purchase journey without claiming unsupported integrations."}]
        },
        "seo": {
          "title": "Fakhri Perfumes | Online Perfume Store Design | Wasl Tech",
          "description": "Case study: An online perfume store with a product-focused experience for clear browsing and purchasing."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن متجر إلكتروني."
    }
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
          "overview": "متجر «كيدي للملابس» يقدم تجربة تجارة إلكترونية متخصصة في ملابس الأطفال، تنطلق من تنظيم فئات المنتجات ثم الانتقال إلى القطع المعروضة ومسار الطلب. خصوصية هذا النوع من المتاجر أن الزائر يبحث غالبًا داخل فئات متنوعة ويحتاج الوصول إلى المنتج المناسب دون تصفح عشوائي. لذلك تركز دراسة الحالة على التصنيفات والكتالوج وخطوة الطلب المسجلة في المشروع، وليس على وعود التسليم أو نسب التحويل.",
          "context": "وجود منتجات ملابس متعددة قد يجعل التصفح طويلًا إذا لم يعرف العميل من أين يبدأ. تساعد الفئات الواضحة على تضييق الاستكشاف والانتقال إلى تفاصيل المنتج المطلوب. التحدي أن تكون الواجهة منظمة بما يكفي لخدمة البحث والتصفية الذهنية، من دون افتراض وجود مرشحات مقاسات أو ألوان أو أدوات توصية لم يتم إثباتها في النسخة المسجلة.",
          "contribution": "شمل النطاق بناء تصنيفات للمنتجات وعرض الكتالوج ومسار الطلب. في صياغة هذه الدراسة فصلنا بين المهمة الأولى وهي العثور على الفئة، والثانية وهي معاينة المنتج، والثالثة وهي الوصول إلى الطلب. ولا ننسب للنظام طرق دفع أو توصيل بعينها، ولا خصائص إدارة المخزون أو المقاسات، قبل أن تدعمها صور التطبيق أو الكود المنشور.",
          "scope": ["تصنيفات المنتجات","عرض الكتالوج","تجربة الطلب"],
          "deliveredOutputs": ["تصنيفات للمنتجات","عرض الكتالوج","تجربة طلب"],
          "decisions": [{"title":"فئات تساعد على البداية","reason":"المتسوق يحتاج نقطة دخول واضحة بين أصناف ملابس الأطفال.","implementation":"تنظيم المنتجات ضمن تصنيفات يمكن استكشافها."},{"title":"تقديم الكتالوج كمسار","reason":"القائمة الطويلة غير المصنفة تصعّب تحديد ما يريده الزائر.","implementation":"الانتقال المنظم من الفئة إلى عرض المنتجات."},{"title":"إظهار خطوة الطلب","reason":"المتجر لا يكتمل كرحلة ما لم يعرف المستخدم الخطوة التالية.","implementation":"ربط عرض المنتجات بتجربة الطلب المسجلة في نطاق العمل."}]
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
          "overview": "Kiddy is an online children's clothing store built around browsing categories, reviewing products and reaching the ordering flow. Customers often begin with a category rather than a particular item, so organizing the catalog is central to the experience. The case describes the classified product offering and the documented shopping journey without inventing delivery promises, conversion figures or unverified filtering functionality.",
          "context": "A varied clothing catalog can take time to navigate when there is no clear starting point. Understandable categories help shoppers narrow the range and find relevant product pages. The challenge is to structure browsing clearly without assuming size filters, color selectors or product recommendation engines that are not established in the project record.",
          "contribution": "The documented scope covers product categories, catalog display and an order path. We explain the contribution through three connected tasks: entering a category, exploring items and moving toward an order. Specific payment providers, shipping arrangements, live inventory synchronization and product variant management need independent evidence before being claimed as completed features.",
          "scope": ["Product categories","Catalog display","Ordering experience"],
          "deliveredOutputs": ["Product categories","Catalog display","Ordering flow"],
          "decisions": [{"title":"Offer clear starting categories","reason":"Shoppers need a simple way to enter a children's clothing catalog.","implementation":"Organize the offering in recognizable product groups."},{"title":"Make the catalog navigable","reason":"An unstructured list makes it harder to locate relevant items.","implementation":"Connect category selection to product presentation."},{"title":"Keep ordering accessible","reason":"The journey needs a next action after an item is chosen.","implementation":"Link product pages to the recorded ordering experience."}]
        },
        "seo": {
          "title": "Kiddy | Children's Clothing E-commerce Store | Wasl Tech",
          "description": "Case study: An online children's clothing store with clear categories and an organized product browsing and ordering experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن متجر إلكتروني مشابه لكيدي."
    }
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
          "overview": "موقع «مكتب الحباري للمحاماة» مشروع تعريفي يركز على عرض خدمات المكتب القانونية ومعلوماته ومسار التواصل بأسلوب رسمي وواضح. في هذا المجال يحتاج الزائر إلى فهم نوع الخدمة ومتى قد تكون مناسبة لاستفساره، دون أن توحي الصفحة بضمان نتيجة قانونية أو تقديم استشارة فردية آلية. يقتصر نطاق المشروع المعروض على تجربة تقديم المعلومات والخدمات والتواصل، لا إدارة ملفات قضايا أو بيانات عملاء سرية.",
          "context": "قد يدخل الزائر إلى موقع مكتب قانوني وهو لا يعرف المصطلح الدقيق للخدمة التي يحتاجها. إذا كانت المعلومات موزعة أو مكتوبة بشكل معقد يصعب عليه التعرف على المجال المناسب والتواصل مع المكتب. يقتضي التحدي تقديم المعلومات بترتيب مهني مع مسار تواصل مفهوم، والحفاظ على صياغة لا تبالغ في الوعود القانونية أو النتائج.",
          "contribution": "يشمل النطاق المسجل تصميم وتطوير صفحات لعرض الخدمات القانونية وتنظيم المعلومات وتهيئة وسيلة واضحة للتواصل. تتناول دراسة الحالة كيف تتحول قائمة الخدمات إلى تجربة قراءة موجّهة، من التعرف على المجال القانوني إلى الوصول للمكتب. لا نذكر نماذج استشارات سرية أو إدارة مستندات أو أتمتة مواعيد باعتبارها وظائف منفذة دون دليل من النسخة الحقيقية.",
          "scope": ["عرض الخدمات القانونية","تنظيم المعلومات","مسار تواصل واضح"],
          "deliveredOutputs": ["عرض الخدمات القانونية","تنظيم المعلومات","مسار تواصل واضح"],
          "decisions": [{"title":"خدمات مقسمة بوضوح","reason":"الزائر يحتاج معرفة المجال الأقرب لسؤاله دون قراءة محتوى متداخل.","implementation":"تنظيم عرض الخدمات القانونية ضمن أقسام مفهومة."},{"title":"نبرة رسمية غير مبالغ فيها","reason":"الثقة في المجال القانوني تتطلب وضوحًا لا وعودًا مطلقة.","implementation":"تقديم المعلومات بأسلوب مهني مباشر."},{"title":"طريق تواصل واضح","reason":"الصفحة التعريفية يجب أن تساعد المهتم في بدء تواصل حقيقي.","implementation":"ربط فهم الخدمة بوسيلة الوصول إلى المكتب."}]
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
          "overview": "Al Hobari Law Office is an informational website presenting legal services, office information and a clear contact route in a professional format. Visitors should be able to understand the general service area relevant to their enquiry without being promised a legal outcome or receiving automated individualized advice. The documented project concerns service presentation and communication, not case-file management or processing confidential client records.",
          "context": "Visitors may not know the exact legal term for the support they seek. Dense or poorly organized information makes it harder to identify a relevant service and approach the office. The content challenge is to structure information professionally and guide visitors toward a genuine conversation, without overclaiming expertise, success rates or guaranteed outcomes.",
          "contribution": "The project record describes designing and building legal service pages, organizing office information and providing a clear enquiry route. This case focuses on the reading journey from understanding the service area to finding the next contact step. Secure consultation portals, document storage or automated appointments are not claimed without evidence that such features were built.",
          "scope": ["Legal service presentation","Information organization","Clear contact path"],
          "deliveredOutputs": ["Legal service presentation","Information organization","Clear contact path"],
          "decisions": [{"title":"Clarify service areas","reason":"Visitors need to identify the type of help they may want without navigating mixed subjects.","implementation":"Group legal services in an understandable page structure."},{"title":"Use a measured professional tone","reason":"Trust-related content should explain capabilities without unrealistic promises.","implementation":"Present information clearly and avoid guaranteed legal outcomes."},{"title":"Make contact discoverable","reason":"An informational website should support a real next step for enquiries.","implementation":"Connect service descriptions to an accessible office contact path."}]
        },
        "seo": {
          "title": "Al Hobari | Law Firm Website Design | Wasl Tech",
          "description": "Case study: A website for a law and legal consulting office that presents services and information in a clear, organized experience."
        }
      }
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة موقع مشابه لمكتب الحباري."
    }
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
