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
          "overview": "منصة تعليمية عربية تقدّم للطالب مسارًا منظمًا للتعلم والتدريب على مهارات القراءة والكتابة، مع أدوات للإدارة والمتابعة. منصة هِمّة موجّهة لتقديم تجربة تعلم عربية تركز على مهارات القراءة والكتابة وتربط تقييم مستوى الطالب بالأنشطة والتدريب والمتابعة. الفكرة ليست جمع أسئلة عشوائية، بل بناء رحلة لها تسلسل واضح يساعد الطالب والمعلم على فهم ما يُدرّس وما يُراجع.",
          "context": "تختلف احتياجات الطلاب ومستوياتهم؛ لذلك يحتاج المسار التعليمي إلى تقييم أولي وأنشطة واضحة ومتدرجة ووسيلة لمتابعة تقدم كل طالب. الفروق الفردية بين الطلاب تجعل الاعتماد على النشاط نفسه للجميع أقل ملاءمة؛ لذلك يتضمن تصور المنصة اختبارًا قبليًا ومسارًا تدريجيًا للمهارات مع دعم وتقوية حسب الحاجة. يجب التفريق هنا بين المحتوى التربوي المخطط والوظائف التي اكتمل تنفيذها في النسخة المعتمدة وقت النشر.",
          "contribution": "تطوير واجهات تجربة الطالب والتعلم التفاعلي وربطها بلوحة إدارة لمتابعة الطلاب والأنشطة. وفق بيانات المستودع الحالي يشمل المشروع واجهات الطالب وأنشطة القراءة والكتابة ولوحة إدارة ومتابعة. أما تفاصيل التحليل الصوتي بالذكاء الاصطناعي، ومعدلات التحسن الدراسي، أو جاهزية جميع الأنشطة والفيديوهات للنشر فهي بنود تحتاج إثباتًا واختبارًا منفصلًا قبل إعلانها.",
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
              "title": "تقييم يمهد للمسار",
              "reason": "تحديد احتياج المتعلم قبل تقديم الأنشطة يساعد على ترتيب التعلّم.",
              "implementation": "إدراج التقييم القبلي ضمن الرحلة التعليمية الموثقة."
            },
            {
              "title": "تدرج المهارات",
              "reason": "التعلم القرائي يحتاج مسارًا لا مجموعة أسئلة متفرقة.",
              "implementation": "تنظيم أنشطة القراءة والكتابة بحسب مهارات واضحة ومستويات مناسبة."
            },
            {
              "title": "المتابعة والدعم",
              "reason": "يحتاج المشرف إلى رؤية ما يكمله الطالب وما يحتاج مراجعة.",
              "implementation": "ربط تجربة الطالب بمساحة متابعة، مع انتظار التحقق من تفاصيل التكيف والتحليل الصوتي."
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
          "overview": "An Arabic learning platform with a structured path for students to practice reading and writing skills, supported by management and tracking tools. Himma is an Arabic learning platform focused on reading and writing skills, bringing together an initial skill assessment, structured learning activities and follow-up. The concept emphasizes a coherent learning journey rather than a disconnected collection of questions.",
          "context": "Students have different learning needs and skill levels, calling for initial assessment, guided activities, and a clear way to follow individual progress. Different learners may need different kinds of support, so the proposed experience includes an initial check and progressive skill practice, with reinforcement where appropriate. It is important to distinguish the approved educational plan from features fully implemented and released at publication time.",
          "contribution": "Developed the student learning interface and interactive practice experience alongside an administration interface for following students and activities. Current portfolio records describe the student interface, reading and writing practice and an administration and tracking area. Speech analysis, quantified learning gains and production readiness of every media asset are not claimed without separate evidence.",
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
              "title": "Assessment informs the path",
              "reason": "Initial skill needs provide context for choosing activities.",
              "implementation": "Include baseline assessment within the documented learning journey."
            },
            {
              "title": "Skill progression",
              "reason": "Reading practice is more useful as a coherent path than isolated questions.",
              "implementation": "Organize reading and writing activities into a structured skill sequence."
            },
            {
              "title": "Follow-up and support",
              "reason": "Educators need a way to see progress and potential gaps.",
              "implementation": "Connect student activity to an administration view without asserting unverified AI assessment features."
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
          "overview": "مشروع يركز على تحويل عملية مشاركة الصور من تبادل ملفات متفرق إلى تجربة رقمية منظمة تجمع العرض والوصول والتسليم في مكان واحد. تتمحور التجربة حول رحلة تبدأ من تنظيم جلسة التصوير أو المجموعة وتنتهي بوصول العميل إلى صوره في مساحة مرتبطة به. وجود منصة مخصصة لهذا الغرض يجعل طريقة عرض الصور وتسليمها جزءًا من الخدمة، لا مجرد إرسال رابط ملفات.",
          "context": "المشروع يعالج حاجة المصور إلى تنظيم تسليم الصور للعملاء داخل مساحة خاصة بدل الاعتماد على مشاركة الملفات بشكل متفرق. يختلف ما يحتاجه المصور لإدارة المجموعات عن ما يحتاجه العميل الذي يريد رؤية صوره فقط. وعند اختلاط هذين الدورين تظهر مشكلات في ترتيب المحتوى ووصول الشخص المناسب إلى المجموعة المناسبة؛ لذلك تُبنى الرحلة حول الدورين ومساحة الوصول.",
          "contribution": "تصميم وبناء تجربة منصة تجمع إدارة الصور والوصول الخاص بالعميل ضمن مسار واحد. يركز نطاق العمل الموثق على تنظيم مجموعات الصور، وتقديم واجهة لاستعراضها، وتحديد الوصول المرتبط بالعميل. وتظل تفاصيل آلية الصلاحيات والتنزيل والتخزين بحاجة إلى تأكيد قبل إدراجها ضمن مميزات منفذة.",
          "scope": ["إدارة مجموعات الصور","مشاركة المحتوى مع العملاء","تنظيم الوصول لكل مستخدم"],
          "deliveredOutputs": ["إدارة مجموعات الصور","وصول مخصص للعملاء","تجربة تسليم ومشاركة داخل المنصة"],
          "decisions": [
            {
              "title": "تنظيم المجموعات",
              "reason": "تكرار الجلسات يجعل الاعتماد على ملفات متفرقة صعبًا على المصور.",
              "implementation": "تقديم الصور في مجموعات يمكن التنقل بينها وفق نطاق إدارة المحتوى الموثق."
            },
            {
              "title": "تجربة العميل مستقلة",
              "reason": "واجهة المصور الإدارية تختلف عن تجربة العميل الباحث عن صوره.",
              "implementation": "فصل هدف الاستعراض والتسليم عن مهام تنظيم المحتوى داخل المنصة."
            },
            {
              "title": "وضوح الوصول",
              "reason": "خصوصية مشاركة الصور مرتبطة بإمكانية تحديد من يرى المجموعة.",
              "implementation": "تصميم رحلة الوصول المخصص للعميل، مع ترك طريقة الحماية التقنية للمراجعة."
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
          "overview": "A project focused on turning scattered photo sharing into an organized digital experience that brings presentation, access, and delivery into one place. The experience follows a clear journey: organize a photo collection, make it available to the intended customer, and present it in a dedicated viewing space. The product is about making delivery part of the photography service, not merely sharing a folder link.",
          "context": "The platform addresses the photographer's need to deliver images to clients in a private, structured space instead of relying on fragmented file sharing. Photographers need ways to organize multiple collections, while each client usually wants access only to their own content. Keeping these roles separate is central to a predictable handover experience and a comprehensible interface.",
          "contribution": "Designed and built a platform experience that connects photo management with private client access in one flow. The recorded scope covers photo collections, customer-facing viewing and user-specific access. Exact download controls, storage architecture and technical security guarantees still require owner verification before being described as delivered features.",
          "scope": ["Manage photo collections","Share content with clients","Organize access per user"],
          "deliveredOutputs": ["Photo collection management","Dedicated client access","In-platform sharing and delivery experience"],
          "decisions": [
            {
              "title": "Collection structure",
              "reason": "Repeated sessions become hard to manage as scattered files.",
              "implementation": "Present photo collections in a structure aligned with the documented organization scope."
            },
            {
              "title": "A separate client journey",
              "reason": "Photographer administration and a customer's viewing task are not the same experience.",
              "implementation": "Keep the discovery and handover journey distinct from content management tasks."
            },
            {
              "title": "Access clarity",
              "reason": "Photo delivery depends on identifying who should reach each collection.",
              "implementation": "Describe customer-specific access without inventing unverified security controls."
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
          "overview": "منصة عربية للعمل الحر صُممت لتنظيم الرحلة بين العميل ومقدم الخدمة من اكتشاف الخدمة والتواصل إلى متابعة التعامل داخل نظام واحد. تجمع منصة وصّل للعمل الحر طرفين تختلف أهدافهما: عميل يريد العثور على خدمة مناسبة، ومقدم خدمة يريد عرض عمله والتعامل مع الاستفسارات. قيمة المنصة في ربط تلك الرحلتين داخل مساحة واحدة بدل ترك التواصل والمتابعة موزعين على قنوات منفصلة.",
          "context": "المشروع يجمع طرفي العمل الحر داخل نظام واحد يحتاج إلى تنظيم الحسابات والتواصل والتعاملات بين العميل ومقدم الخدمة. تحتاج المنصة إلى وضوح في هوية صاحب الخدمة وطريقة بدء التواصل وما الذي يحدث بعد الاتفاق. فالتصميم يجب أن يحافظ على سياق التعامل بين الحسابين، خصوصًا عند وجود محادثات ومسار مدفوعات ضمن النطاق المعلن.",
          "contribution": "تصميم وبناء تجربة منصة تربط اكتشاف الخدمات بالتواصل والمتابعة والدفع داخل نفس المسار. جاء التنفيذ وفق سجل المشروع ليشمل حسابات الطرفين، عرض الخدمات، المحادثات، وتدفق المدفوعات داخل تجربة المنصة. ولا نستنتج من وجود «تدفق مدفوعات» مزود دفع معتمدًا أو إتمام معاملات حقيقية دون مستند أو معاينة تشغيلية.",
          "scope": ["حسابات لمقدمي الخدمات والعملاء","تواصل ومحادثات","تدفق دفع داخل المنصة"],
          "deliveredOutputs": ["حسابات للعملاء ومقدمي الخدمات","نظام محادثات","تدفق مدفوعات داخل المنصة"],
          "decisions": [
            {
              "title": "رحلتان مترابطتان",
              "reason": "العميل يبحث ويقارن بينما مقدم الخدمة ينشر ويتابع.",
              "implementation": "تنظيم واجهات الحسابات بما يخدم كل دور مع مسار تفاعل مشترك."
            },
            {
              "title": "التواصل داخل السياق",
              "reason": "محادثات العملاء تفقد معناها إذا انفصلت عن الخدمة المقصودة.",
              "implementation": "وضع المحادثة والمتابعة ضمن رحلة استكشاف الخدمة والتعامل."
            },
            {
              "title": "حدود الدفع واضحة",
              "reason": "وجود خطوة دفع في المخطط لا يثبت تشغيل جميع سيناريوهات الدفع.",
              "implementation": "وصف تدفق المدفوعات بالنطاق الموثق وعدم إعلان بوابة حية بلا دليل."
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
          "overview": "An Arabic freelance platform designed to organize the journey between the client and service provider from service discovery and communication through ongoing transactions inside one system. Wasl's freelance platform brings together two groups with different goals: clients searching for a suitable service and providers presenting their work. The platform connects discovery, conversations and transaction follow-up within one recognizable journey.",
          "context": "The project brings both sides of freelance work into one system that needs to organize accounts, communication, and transactions between clients and service providers. A marketplace needs to establish who offers the service, how a conversation begins and how both sides follow what happens next. These questions shape account roles and navigation, especially where messaging and a payment flow are part of the recorded scope.",
          "contribution": "Designed and built a platform experience that connects service discovery, communication, follow-up, and payment within one flow. The existing project record covers client and provider accounts, service discovery, conversations and an in-platform payment flow. That description does not verify a live payment gateway or settled transactions; those details require further evidence.",
          "scope": ["Accounts for clients and service providers","Communication and messaging","In-platform payment flow"],
          "deliveredOutputs": ["Client and provider accounts","Messaging system","Transaction payment flow"],
          "decisions": [
            {
              "title": "Two connected user journeys",
              "reason": "Clients search and compare while providers publish and respond.",
              "implementation": "Organize role-specific experiences around a shared service interaction."
            },
            {
              "title": "Conversation in context",
              "reason": "Messages are more useful when connected to the service under discussion.",
              "implementation": "Keep messaging and follow-up within the recorded service journey."
            },
            {
              "title": "A bounded payment claim",
              "reason": "A planned or built flow does not prove live gateway processing.",
              "implementation": "Document the in-platform payment scope without unverified provider claims."
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
          "overview": "نظام إداري موجه لتبسيط التعامل مع عمليات الميكروتيك المتكررة وإعطاء المشرف واجهة أوضح لإدارة المستخدمين والكروت والجلسات. تقدم لوحة الميكروتيك واجهة إدارية تجمع الأعمال التي يحتاجها مشرف شبكة في الاستخدام اليومي، من إدارة المستخدمين إلى الكروت والجلسات. الهدف من الواجهة ليس مجرد عرض بيانات الشبكة، بل ترتيب المهام المتكررة بحيث يستطيع المسؤول الوصول إليها من مكان مفهوم.",
          "context": "المشروع يركز على تبسيط إدارة عمليات الميكروتيك اليومية بدل التعامل معها من أكثر من نقطة أو خطوة منفصلة. عندما تتوزع إدارة المستخدمين والكروت ومتابعة الجلسات على خطوات منفصلة، يصبح تتبع الإجراء التالي أكثر صعوبة. لذلك تظهر الحاجة إلى تقسيم العمليات بحسب وظيفتها وعرض المعلومات ذات الصلة بها في موضع يسهل الرجوع إليه.",
          "contribution": "بناء لوحة تجمع المستخدمين والكروت والجلسات في واجهة إدارية واحدة. يتضمن النطاق الحالي إدارة المستخدمين وتوليد الكروت ومتابعة الجلسات ضمن لوحة واحدة. وتفاصيل نوع الاتصال بميكروتيك وإصداراته وضوابط الوصول وسجلات التدقيق ليست مثبتة في الوصف المنشور وتحتاج مراجعة تقنية قبل ذكرها.",
          "scope": ["إدارة المستخدمين","توليد الكروت","متابعة الجلسات والعمليات"],
          "deliveredOutputs": ["إدارة المستخدمين","توليد وإدارة الكروت","متابعة الجلسات"],
          "decisions": [
            {
              "title": "تجميع المهام المتكررة",
              "reason": "الانتقال المستمر بين شاشات منفصلة يعقد الاستخدام اليومي.",
              "implementation": "تقديم المستخدمين والكروت والجلسات ضمن نظام إدارة واحد."
            },
            {
              "title": "تحديد سياق كل عملية",
              "reason": "بيانات الجلسة ليست هي بيانات الكرت أو حساب المستخدم.",
              "implementation": "فصل المهام بحسب نوع السجل مع روابط متابعة واضحة."
            },
            {
              "title": "حدود التكامل",
              "reason": "اختلاف بيئات الشبكات يتطلب توثيق آلية الربط قبل تعميمها.",
              "implementation": "إبقاء وصف التكامل التقني التفصيلي للمراجعة وعدم ادعاء دعم أجهزة غير مثبت."
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
          "overview": "An administrative system built to simplify recurring MikroTik operations and give administrators a clearer interface for managing users, cards, and sessions. The MikroTik dashboard presents frequently used network administration tasks together: user management, cards and session monitoring. Its focus is not simply displaying network data but making recurring administrative work reachable from a consistent interface.",
          "context": "The project focuses on simplifying daily MikroTik management instead of handling the same operational tasks across multiple disconnected steps. When cards, accounts and sessions require separate tools or steps, administrators must reconstruct the context of each task. Clear task grouping helps reduce navigation overhead and makes related network information easier to locate.",
          "contribution": "Built a dashboard that brings users, cards, and sessions into one administrative interface. The current scope includes user management, card generation and session follow-up in a single dashboard. The exact RouterOS integration, supported versions, access rules and audit capabilities have not been independently verified for publication.",
          "scope": ["User management","Card generation","Session and operation monitoring"],
          "deliveredOutputs": ["User management","Card generation and management","Session monitoring"],
          "decisions": [
            {
              "title": "Group recurring tasks",
              "reason": "Switching between unrelated screens interrupts network administration.",
              "implementation": "Bring users, cards and sessions into one operational interface."
            },
            {
              "title": "Separate record types",
              "reason": "A session, card and user account represent different operational objects.",
              "implementation": "Structure views around each record while supporting related follow-up."
            },
            {
              "title": "Verify integration boundaries",
              "reason": "Network deployments vary and need actual compatibility evidence.",
              "implementation": "Hold back unsupported RouterOS or device-compatibility claims."
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
          "overview": "لوحة CMS بُنيت لتجميع إدارة محتوى الموقع داخل مساحة واحدة تساعد الفريق على تحديث النصوص والأقسام والمعلومات بدون الدخول في تفاصيل الكود. لوحة إدارة المحتوى CMS تعالج الجانب الذي لا يراه زائر الموقع عادة: كيف يحدّث الفريق النصوص والأقسام والمعلومات دون الرجوع إلى التعديلات البرمجية في كل مرة. بهذا المعنى هي نظام تشغيلي يخدم إدارة المحتوى، لا مجرد صفحة تعريفية جديدة.",
          "context": "المشروع يسهّل تحديث محتوى الموقع من قبل الإدارة بدون الرجوع إلى تعديل الكود في كل تغيير. تكرار التعديلات الصغيرة عبر ملفات الموقع يجعل تحديث النصوص والصور والأقسام مهمة تتطلب تدخلًا تقنيًا غير لازم في كل حالة. وتتطلب التجربة الجيدة تحديد عناصر المحتوى القابلة للتعديل بطريقة تمنع التباس اسم الحقل أو الصفحة المقصودة.",
          "contribution": "بناء لوحة CMS مركزية تربط محتوى الصفحات بواجهة إدارة مخصصة. يركز نطاق المشروع على واجهة إدارة مركزية وتحديث محتوى الصفحات والبيانات الديناميكية. أما تفاصيل إدارة الأدوار والمراجعة قبل النشر والتحكم في الإصدارات فهي أمثلة ممكنة لأنظمة CMS، لكنها ليست ادعاءات ضمن هذا المشروع دون تحقق.",
          "scope": ["إدارة محتوى الصفحات","تحديث البيانات ديناميكيًا","لوحة تحكم للإدارة"],
          "deliveredOutputs": ["إدارة محتوى الصفحات","تحديثات ديناميكية","واجهة تحكم مركزية"],
          "decisions": [
            {
              "title": "تحرير مركزي",
              "reason": "تشتت مواضع المحتوى يصعّب التحديث على الإدارة.",
              "implementation": "جمع تحديث النصوص والأقسام في واجهة CMS موحدة."
            },
            {
              "title": "تمييز الحقول والصفحات",
              "reason": "يجب أن يعرف المحرر أين سيظهر كل تغيير.",
              "implementation": "ترتيب المحتوى حسب الصفحات والأقسام بدل حقول مجهولة السياق."
            },
            {
              "title": "عدم المبالغة في الصلاحيات",
              "reason": "تختلف إدارة المحتوى البسيطة عن منصة نشر ذات مراجعات متقدمة.",
              "implementation": "حصر الوصف في الإدارة والتحديثات المثبتة وتأجيل مزايا الأدوار للمراجعة."
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
          "overview": "A CMS dashboard built to bring website content management into one workspace so teams can update text, sections, and information without working directly in the code. The CMS dashboard addresses the work visitors rarely see: giving a team a place to edit website text, sections and structured information without manually changing code for every update. It is an operational product supporting the public-facing site.",
          "context": "The project makes it easier for the team to update website content without returning to code for every change. Repeated small content changes are costly when every edit needs a developer or multiple file changes. A useful management experience clarifies which page and field is being edited and reduces the chance of updating the wrong item.",
          "contribution": "Built a centralized CMS dashboard that connects page content with a dedicated administration interface. The recorded implementation covers a centralized editing interface and dynamically managed site content. Editorial approvals, role granularity and revision history may be valuable in some CMS products, but are not presented as verified capabilities here.",
          "scope": ["Page content management","Dynamic data updates","Administration dashboard"],
          "deliveredOutputs": ["Page content management","Dynamic updates","Centralized administration"],
          "decisions": [
            {
              "title": "Centralized editing",
              "reason": "Scattered content locations make routine changes harder for a team.",
              "implementation": "Bring texts and sections into a shared CMS interface."
            },
            {
              "title": "Page-aware fields",
              "reason": "Editors should understand where each change will appear.",
              "implementation": "Organize editable content by page and section context."
            },
            {
              "title": "Avoid unsupported workflow claims",
              "reason": "Basic editing is different from complex editorial governance.",
              "implementation": "Describe recorded management features without inventing approvals or revisions."
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
          "overview": "تطبيق متجر يركز على جعل رحلة التسوق عبر الجوال مباشرة من استكشاف المنتجات إلى إضافة السلة ومتابعة الطلب. يقدّم تطبيق تيك زون تجربة متجر على الهاتف تجمع مشاهدة المنتجات وإضافتها إلى السلة ومتابعة حالة الطلب. تركيز التطبيق على جعل رحلة المستخدم مترابطة من لحظة استكشاف ما يريد شراءه حتى مراجعة ما اختاره.",
          "context": "المشروع ينقل تجربة التسوق إلى الجوال ويجمع استكشاف المنتجات والسلة ومتابعة الطلب في رحلة واحدة. تجربة التسوق على شاشة صغيرة تحتاج ترتيبًا واضحًا للكتالوج والتفاصيل والسلة؛ فالمستخدم لا يريد فقد العناصر التي اختارها أثناء الانتقال بين الصفحات. كما أن فهم الحالة التالية للطلب يساعد العميل على متابعة ما بعد الاختيار.",
          "contribution": "تصميم وتطوير تجربة تطبيق متجر تركز على التصفح والشراء ومتابعة الطلبات. يتضمن نطاق العمل الموثق واجهات عرض المنتجات والسلة وتتبع الطلبات. لا يتضمن الوصف المنشور إثبات أسماء بوابات الدفع أو مزودي الشحن أو سياسة المرتجعات؛ ولذلك تظل هذه التفاصيل خارج دراسة الحالة إلى حين مراجعتها.",
          "scope": ["عرض وتصفح المنتجات","إدارة السلة","متابعة الطلبات"],
          "deliveredOutputs": ["كتالوج منتجات","سلة مشتريات","متابعة حالة الطلب"],
          "decisions": [
            {
              "title": "عرض مناسب للهاتف",
              "reason": "صغر الشاشة يتطلب تدرجًا بصريًا يبرز المنتج والقرار التالي.",
              "implementation": "ترتيب تصفح المنتجات داخل تجربة تطبيق جوال."
            },
            {
              "title": "السلة جزء من المسار",
              "reason": "إضافة المنتج يجب أن تقود إلى مراجعة خيارات المستخدم.",
              "implementation": "ربط الكتالوج بتجربة سلة مشتريات واضحة."
            },
            {
              "title": "متابعة ما بعد الاختيار",
              "reason": "العميل يحتاج مرجعًا لحالة الطلب داخل التطبيق.",
              "implementation": "تضمين متابعة الطلب ضمن النطاق المسجل دون ادعاء مزايا تسليم غير مثبتة."
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
          "overview": "A store app focused on making the mobile shopping journey direct from product discovery through cart and order tracking. Tech Zone is a mobile shopping experience connecting product browsing, cart selection and order-status tracking. Its central task is keeping the buying journey understandable as users move from finding products to reviewing what they have chosen.",
          "context": "The project brings shopping to mobile and connects product discovery, cart, and order tracking in one journey. On a small screen, catalog structure and cart access have to stay clear through the journey. The customer also needs to understand where an order stands after selection, rather than losing context among disconnected screens.",
          "contribution": "Designed and developed a mobile store experience focused on browsing, purchasing, and tracking orders. The recorded scope covers product presentation, a shopping cart and order tracking. No particular payment provider, delivery integration or return-policy engine is claimed without supporting implementation evidence.",
          "scope": ["Product browsing","Cart management","Order tracking"],
          "deliveredOutputs": ["Product catalog","Shopping cart","Order status tracking"],
          "decisions": [
            {
              "title": "Mobile-first presentation",
              "reason": "A compact display needs visual hierarchy around the product.",
              "implementation": "Organize product discovery for the phone experience."
            },
            {
              "title": "The cart is part of the journey",
              "reason": "Adding items must lead to a clear review step.",
              "implementation": "Connect catalog browsing with the recorded cart flow."
            },
            {
              "title": "Post-selection visibility",
              "reason": "Customers need a place to understand the order state.",
              "implementation": "Document order tracking without inventing delivery integrations."
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
          "overview": "تجربة جوال لمقهى تجمع الطلب والولاء والوصول إلى الفروع في مسار واحد يخدم العميل قبل وأثناء الشراء. تتوزع رحلة عميل المقهى بين استكشاف المنتجات، اتخاذ قرار الطلب، والتعرف على الفروع. يهدف تطبيق أروما إلى جمع تلك النقاط في تجربة جوال واحدة تناسب الاستخدام المتكرر، دون أن يضطر العميل للانتقال بين مصادر مختلفة للحصول على المعلومات الأساسية.",
          "context": "المشروع يجمع احتياجات عميل المقهى في تطبيق واحد: الطلب، الولاء، والوصول إلى الفروع. التحدي هنا هو الجمع بين وظيفة الطلب ومتابعة علاقة العميل بالمقهى عبر برنامج الولاء، مع إبقاء معلومات الفروع واضحة. لكل مسار أولوية مختلفة، لذلك يحتاج التصميم إلى انتقال مفهوم بين المنتجات والمزايا والموقع الجغرافي للفرع.",
          "contribution": "تصميم وتطوير تجربة طلب عبر الجوال مرتبطة ببرنامج ولاء ومعلومات الفروع. وفق بيانات المشروع الحالية شمل العمل واجهات طلب المنتجات وبرنامج الولاء وعرض الفروع على الخريطة. ولا يعني ذكر هذه الأقسام أنها متصلة بنظام نقاط أو دفع أو خرائط تشغيلية محددة؛ تفاصيل الربط والمزايا الحية تحتاج اعتمادًا.",
          "scope": ["طلب المنتجات","برنامج ولاء","عرض الفروع على الخريطة"],
          "deliveredOutputs": ["طلب القهوة عبر التطبيق","برنامج ولاء","خرائط الفروع"],
          "decisions": [
            {
              "title": "رحلة طلب واضحة",
              "reason": "العميل يحتاج اكتشاف المنتج ثم الوصول لخطوة الطلب.",
              "implementation": "جمع عرض المنتجات ومسار الطلب ضمن تجربة تطبيق المقهى."
            },
            {
              "title": "فصل الولاء عن الشراء",
              "reason": "برنامج الولاء يخدم المتابعة المتكررة لا اختيار المشروب فقط.",
              "implementation": "تقديم مسار مستقل وواضح لمزايا الولاء ضمن واجهة التطبيق."
            },
            {
              "title": "العثور على الفرع",
              "reason": "المعلومات الجغرافية تساعد المستخدم قبل الوصول أو الطلب.",
              "implementation": "عرض الفروع ضمن النطاق المسجل مع تأكيد طريقة الخرائط من مالك المشروع."
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
          "overview": "A mobile cafe experience that brings ordering, loyalty, and branch access into one journey before and during purchase. Aroma Cafe brings product ordering, loyalty information and branch discovery together in a mobile experience. The intent is to offer one recognizable place for recurring customer tasks rather than several disconnected channels for routine enquiries.",
          "context": "The project combines key customer needs in one app: ordering, loyalty, and reaching the right branch. Ordering, loyalty and finding a branch have different priorities. The interface must help customers move between these activities without confusing location information with order steps or loyalty details.",
          "contribution": "Designed and developed a mobile ordering experience connected to a loyalty program and branch information. The project record includes mobile ordering screens, a loyalty-program area and map-based branch presentation. The exact reward rules, payment processors and external map integrations remain subject to project-owner review.",
          "scope": ["Product ordering","Loyalty program","Branch map display"],
          "deliveredOutputs": ["In-app coffee ordering","Loyalty program","Branch maps"],
          "decisions": [
            {
              "title": "Clear order journey",
              "reason": "Visitors need to discover an item before beginning an order.",
              "implementation": "Connect products and ordering within the cafe's mobile flow."
            },
            {
              "title": "Loyalty is a different task",
              "reason": "Rewards support repeat engagement rather than only product selection.",
              "implementation": "Give loyalty its own understandable path in the app."
            },
            {
              "title": "Find a branch",
              "reason": "Branch information supports planning a visit or pickup.",
              "implementation": "Present branch discovery without guessing the underlying mapping provider."
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
          "overview": "موقع شركة يضع أعمال المقاولات والخدمات الهندسية في واجهة منظمة تساعد الزائر على فهم النشاط والانتقال من الاستكشاف إلى التواصل. موقع البناء المتقن يعرّف الزائر بخدمات المقاولات والهندسة والأعمال السابقة قبل أن يتخذ قرار التواصل. في هذا النوع من المواقع تكون المشاريع المعروضة واللغة المباشرة وسيلة لتوضيح طبيعة العمل، وليس مجرد عناصر لملء الصفحة الرئيسية.",
          "context": "المشروع يقدّم شركة المقاولات وخدماتها وأعمالها في تجربة تساعد الزائر على فهم النشاط والانتقال إلى طلب عرض سعر. قد يصل العميل المحتمل بحثًا عن خدمة محددة أو مثال مشروع مشابه، لذلك لا يكفي عرض اسم الشركة دون تصنيف الخدمات وأعمالها. كذلك يحتاج مسار طلب عرض السعر إلى موقع واضح بعد حصول الزائر على معلومات كافية.",
          "contribution": "تصميم وتطوير موقع تعريفي يربط الخدمات والمشاريع بمسار تواصل واضح. يركز العمل المسجل على تصميم صفحات الخدمات والمشاريع ومسار التواصل وطلب عرض السعر في موقع تعريفي متجاوب. ولا يُستنتج من وصف المشروع تنفيذ نظام إدارة مشاريع أو موافقات هندسية أو تسعير تلقائي.",
          "scope": ["عرض الخدمات","معرض المشاريع","طلب عرض سعر"],
          "deliveredOutputs": ["صفحات للخدمات","عرض المشاريع","طلب عرض سعر"],
          "decisions": [
            {
              "title": "الخدمات قبل التفاصيل",
              "reason": "الزائر يحتاج التعرف على التخصص قبل اختيار التواصل.",
              "implementation": "تنظيم صفحات خدمات المقاولات والهندسة ضمن بنية واضحة."
            },
            {
              "title": "الأعمال دليل التعريف",
              "reason": "المشاريع تعطي سياقًا لنوع الأعمال الممكن عرضها.",
              "implementation": "إفراد مساحة لعرض الأعمال المرتبطة بنشاط الشركة."
            },
            {
              "title": "طلب عرض السعر",
              "reason": "مرحلة التواصل تأتي بعد تكوّن فهم أولي عن الخدمة.",
              "implementation": "إبراز مسار طلب عرض سعر متصل بالصفحات التعريفية."
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
          "overview": "A company website that organizes construction and engineering services and projects so visitors can understand the business and move from exploration to contact. Al Benaa Al Motqin is a company website presenting construction and engineering services alongside project work. For this type of business, real work examples and clear service language help visitors understand the scope before making an enquiry.",
          "context": "The project presents the construction company, its services, and its work in an experience that helps visitors understand the business and request a quotation. Potential clients may arrive searching for a particular discipline or for evidence of comparable work. The site therefore benefits from a readable separation of service information, project presentation and the quotation contact path.",
          "contribution": "Designed and developed a company website that connects services and projects to a clear contact path. The documented contribution covers service pages, project presentation and a clear way to request a quotation. It does not establish a project-management system, automated cost estimates or other operational tools.",
          "scope": ["Service presentation","Project showcase","Quotation requests"],
          "deliveredOutputs": ["Service pages","Project showcase","Quotation request flow"],
          "decisions": [
            {
              "title": "Start with services",
              "reason": "Visitors first need to recognize the discipline relevant to them.",
              "implementation": "Structure construction and engineering service pages clearly."
            },
            {
              "title": "Projects provide context",
              "reason": "Work examples help explain what the business does.",
              "implementation": "Give the company's projects a dedicated presentation space."
            },
            {
              "title": "Quotation enquiry",
              "reason": "Contact is most meaningful once visitors understand the offering.",
              "implementation": "Provide a visible quotation enquiry path from the informative pages."
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
          "overview": "متجر متخصص في الإلكترونيات يركز على تنظيم الكتالوج وتسهيل الانتقال بين الأقسام والمنتجات حتى إكمال الطلب. متجر النخبة للإلكترونيات يعرض فئات من المنتجات والأجهزة ضمن كتالوج يقود المستخدم من الاستكشاف إلى اختيار المنتج والطلب. في متاجر الإلكترونيات يتوقع العميل العثور على القسم المناسب ثم مقارنة معلومات المنتجات بدل تصفح قائمة غير مصنفة.",
          "context": "المشروع ينظم كتالوج الأجهزة والإلكترونيات ويجعل الوصول إلى المنتج والطلب أكثر مباشرة. تنوع الأجهزة يجعل التصنيف ووضوح صفحة المنتج عنصرين أساسيين في تجربة التسوق. وعندما تختلط الفئات يصعب على المشتري الانتقال من حاجة عامة، مثل البحث عن نوع جهاز، إلى منتج محدد وقرار الطلب.",
          "contribution": "تصميم وبناء متجر يرتب المنتجات ضمن تصنيفات ويقود العميل من التصفح إلى الطلب. يشمل النطاق الموثق تصنيفات المنتجات، كتالوج الإلكترونيات وتجربة إتمام الطلب. لا نثبت هنا عدد المنتجات أو التكامل مع المخزون والدفع والشحن؛ تلك خصائص تحتاج مشاهدة فعلية أو توثيقًا من المشروع.",
          "scope": ["عرض المنتجات","التصنيفات","تجربة الطلب"],
          "deliveredOutputs": ["كتالوج إلكترونيات","تصنيفات منتجات","تجربة إتمام الطلب"],
          "decisions": [
            {
              "title": "تقسيم الأجهزة",
              "reason": "اختلاف المنتجات يستدعي فئات يفهمها العميل سريعًا.",
              "implementation": "تنظيم الكتالوج على أساس تصنيفات واضحة."
            },
            {
              "title": "المنتج محور القرار",
              "reason": "تتطلب المشتريات رؤية المنتج المقصود ومعلوماته.",
              "implementation": "تقديم مسار واضح من الفئة إلى عرض المنتجات."
            },
            {
              "title": "الوصول للطلب",
              "reason": "الاستكشاف لا يكتمل دون خطوة تالية مفهومة.",
              "implementation": "ربط تصفح الكتالوج بتجربة طلب موثقة في نطاق المشروع."
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
          "overview": "A specialized electronics store focused on organizing the catalog and making it easier to move between categories and products through to ordering. Elite Electronics is an online storefront organizing devices and related products into browsable categories. Shoppers need to move from a broad type of product toward a suitable item and an understandable order path without working through an undifferentiated list.",
          "context": "The project organizes an electronics catalog and makes finding products and placing orders more direct. The variety of electronics makes category structure and product presentation particularly important. People may begin with a device type before knowing the exact product, so browsing needs to support a gradual narrowing of the choice.",
          "contribution": "Designed and built a store that organizes products into categories and guides customers from browsing to ordering. The existing scope documents product categories, an electronics catalog and ordering. Product counts, live stock synchronization, payment services and shipping providers remain unverified and are not described as proven outputs.",
          "scope": ["Product display","Categories","Ordering experience"],
          "deliveredOutputs": ["Electronics catalog","Product categories","Order completion experience"],
          "decisions": [
            {
              "title": "Organize the catalog",
              "reason": "Different device types need predictable browsing categories.",
              "implementation": "Group electronics in recognizable product categories."
            },
            {
              "title": "Make products easy to reach",
              "reason": "A buying decision depends on reaching the relevant item information.",
              "implementation": "Provide clear movement from category to product presentation."
            },
            {
              "title": "Connect browsing to ordering",
              "reason": "Discovery should lead to an understandable next step.",
              "implementation": "Relate catalog views to the documented ordering journey."
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
          "overview": "مشروع هوية يهدف إلى توحيد شكل العلامة عبر الشعار والألوان والتطبيقات التي يراها العميل داخل المطعم وخارجه. الهوية البصرية لمطعم الملكي ليست رسم شعار منفصل فحسب، بل محاولة توحيد طريقة ظهور العلامة في المواد التي يراها العميل. يشمل ذلك العلاقة بين الشعار والألوان والمطبوعات والتغليف، بحيث يمكن التعرف على المطعم عبر أكثر من نقطة تواصل.",
          "context": "المشروع يحتاج نظامًا بصريًا موحدًا يربط الشعار بالألوان والمطبوعات والتغليف بدل ظهور كل مادة بأسلوب مستقل. عندما تتغير الألوان والأنماط من مادة إلى أخرى، تفقد العلامة اتساقها حتى لو كان الشعار جيدًا. لذلك يحتاج مشروع الهوية إلى قرارات قابلة للتطبيق على المطبوعات والتغليف مع الحفاظ على الطابع المرغوب للمطعم.",
          "contribution": "بناء هوية بصرية لمطعم الملكي تشمل الشعار والنظام اللوني والتطبيقات الأساسية. يذكر نطاق المشروع تصميم الشعار ونظام الألوان وتطبيقات مطبوعة وتغليف. أما المواد التي وصلت للطباعة بالفعل وأحجامها والمورد المنفذ، فهي أمور لا تثبتها صورة العرض وحدها وتحتاج موافقة على وصفها.",
          "scope": ["تصميم الشعار","بناء النظام اللوني","تطبيقات مطبوعة وتغليف"],
          "deliveredOutputs": ["تصميم الشعار","نظام ألوان","مطبوعات وتغليف"],
          "decisions": [
            {
              "title": "الشعار جزء من منظومة",
              "reason": "لا تكفي علامة واحدة إذا تغير أسلوب بقية المواد.",
              "implementation": "ربط الشعار بنظام لوني وتطبيقات مرئية متناسقة."
            },
            {
              "title": "الهوية على المطبوعات",
              "reason": "احتكاك العميل بالمطعم يشمل موادًا غير رقمية.",
              "implementation": "تصميم نماذج تطبيقية للمطبوعات ضمن نطاق الهوية."
            },
            {
              "title": "التغليف نقطة ظهور",
              "reason": "التغليف يكرر حضور العلامة خارج واجهة المطعم.",
              "implementation": "مراعاة تطبيقات التغليف وتحديد المنفذ فعليًا عند مراجعة الأدلة."
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
          "overview": "A brand identity project created to unify how the restaurant appears through the logo, colors, and customer-facing applications inside and outside the venue. Al Malaki restaurant's brand identity is presented as a coherent visual system rather than a single standalone logo. The work connects the symbol and color choices with printed and packaging applications customers may encounter in different contexts.",
          "context": "The project needed one visual system connecting the logo, colors, print materials, and packaging instead of each item appearing in a separate style. When colors and layouts shift from one item to another, recognition becomes inconsistent even if the logo is strong. Identity work must therefore support repeated practical applications, particularly packaging and printed pieces.",
          "contribution": "Built a visual identity for Al Malaki Restaurant including the logo, color system, and key applications. The documented scope includes the logo, color system and print/packaging applications. The showcase image alone does not verify which materials were printed or delivered physically; those details require confirmation.",
          "scope": ["Logo design","Color system","Print and packaging applications"],
          "deliveredOutputs": ["Logo design","Color system","Print and packaging"],
          "decisions": [
            {
              "title": "Beyond the logo",
              "reason": "A mark is less useful when surrounding materials look unrelated.",
              "implementation": "Connect the logo to a coherent color and application system."
            },
            {
              "title": "Printed touchpoints",
              "reason": "Restaurant identity also appears away from a screen.",
              "implementation": "Include print-oriented applications in the design scope."
            },
            {
              "title": "Packaging visibility",
              "reason": "Packaging repeats the brand beyond the venue.",
              "implementation": "Document packaging concepts while verifying any physical production claims."
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
          "overview": "هوية بصرية بُنيت حول طابع تقني واضح، مع نظام يساعد الشركة على الظهور بصورة متسقة في موادها المختلفة. هوية شركة ميلانو مبنية حول تقديم طابع تقني واضح يمكن تطبيقه في الاستخدامات المختلفة للعلامة. الفكرة هنا تتجاوز رسم رمز جذاب إلى إنشاء علاقة متسقة بين الشعار والألوان والتكوين العام في المواد التعريفية.",
          "context": "المشروع يحتاج مظهرًا تقنيًا واضحًا يمكن تطبيقه بصورة متسقة عبر مواد الشركة المختلفة. الشركات التقنية تظهر في قنوات متعددة من العروض والمستندات إلى الواجهات الرقمية، لذلك يجب أن تحتفظ الهوية بملامحها حتى مع تغير المقاس والسياق. يعتمد نجاح هذا النوع من العمل على وضوح الفكرة وقابلية إعادة استخدامها.",
          "contribution": "بناء شعار ونظام بصري لشركة ميلانو بطابع تقني حديث. يسجل المشروع تصميم شعار ونظام بصري وتطبيقات للهوية. أما دليل الهوية النهائي أو نظام المكونات التفصيلي أو عدد التطبيقات المعتمدة فلا ننسبها للمشروع حتى تظهر ملفات تسليم واضحة.",
          "scope": ["تصميم الشعار","النظام البصري","تطبيقات الهوية"],
          "deliveredOutputs": ["تصميم الشعار","النظام البصري","تطبيقات الهوية"],
          "decisions": [
            {
              "title": "طابع تقني مميز",
              "reason": "الشركة تحتاج لغة بصرية تعبر عن نشاطها دون ازدحام.",
              "implementation": "بناء فكرة للشعار والأسلوب البصري المستلهم من طبيعة النشاط."
            },
            {
              "title": "ثبات الظهور",
              "reason": "تكرار استخدام الشعار يتطلب نظامًا لا يتغير جذريًا.",
              "implementation": "توحيد عناصر اللون والتكوين في تطبيقات الهوية."
            },
            {
              "title": "قابلية الاستخدام",
              "reason": "يجب أن تعمل الهوية في أكثر من مساحة عرض.",
              "implementation": "تهيئة نماذج تطبيقية مع انتظار توثيق الملفات النهائية المعتمدة."
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
          "overview": "A visual identity built around a clear technical character, giving the company a consistent system for use across different materials. Milano's visual identity aims to express a recognizable technical character across brand materials. It is not only a symbol but a consistent relationship between the logo, visual structure and repeated uses of the company's name and style.",
          "context": "The project needed a clear technical visual language that could be applied consistently across the company's materials. Technology companies appear through presentations, documents and digital surfaces. An identity should remain recognizable as layouts and sizes change, which calls for more than a single attractive artwork.",
          "contribution": "Built the logo and visual system for Milano around a modern technical direction. The recorded work includes a logo, visual system and identity applications. A formal brand manual, token library or a specific number of shipped applications is not claimed without original deliverables.",
          "scope": ["Logo design","Visual system","Brand applications"],
          "deliveredOutputs": ["Logo design","Visual system","Brand applications"],
          "decisions": [
            {
              "title": "Technical character",
              "reason": "The company needs a visual vocabulary appropriate to its sector.",
              "implementation": "Develop a logo and style with a coherent technical direction."
            },
            {
              "title": "Consistent repetition",
              "reason": "Multiple brand materials should still look related.",
              "implementation": "Keep color and composition choices coherent across applications."
            },
            {
              "title": "Practical versatility",
              "reason": "An identity needs to work in more than one layout.",
              "implementation": "Prepare application concepts and verify which final assets were delivered."
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
          "overview": "مشروع تسويقي يركز على توحيد الرسائل والتصميم والحملات حول منتجات العطور بدل التعامل مع كل منشور أو إعلان بشكل منفصل. الحملة الرقمية لفخري للعطور تستهدف تقديم المنتجات برسائل وتصاميم تتبع اتجاهًا واحدًا، بدل إنتاج منشورات منفصلة لا تتصل بفكرة مشتركة. وتظهر قيمة التخطيط عندما يعرف الفريق ما الذي يريد إيصاله وما الذي يتغير بين المنشورات وما الذي يجب أن يبقى ثابتًا في العلامة.",
          "context": "المشروع يجمع الرسالة والتصميم والحملات الاجتماعية في اتجاه واحد بدل التعامل مع المحتوى كمنشورات منفصلة. تحتاج منتجات العطور إلى محتوى يوضح الاختلاف بين المنتجات دون إغراق المتلقي بالتفاصيل أو تغيير أسلوب العلامة كل مرة. لذلك يجمع نطاق المشروع بين تخطيط الرسائل وإعداد المواد الإعلانية والمحتوى الاجتماعي وفق هدف الحملة.",
          "contribution": "بناء اتجاه للحملة يشمل استراتيجية المحتوى والتصميم الإعلاني ومحتوى شبكات التواصل. يشمل نطاق العمل المعلن تخطيط المحتوى والتصميم الإعلاني وإعداد مواد للشبكات الاجتماعية. ولا يثبت ملف الصور وحده إطلاق حملات مدفوعة أو ميزانية أو وصولًا أو نسبة تحويل؛ هذه النتائج تحتاج سجلات منصة الإعلان وتقارير معتمدة.",
          "scope": ["تخطيط المحتوى","تصميم الإعلانات","حملات ومحتوى اجتماعي"],
          "deliveredOutputs": ["استراتيجية محتوى","تصاميم إعلانية","محتوى وحملات اجتماعية"],
          "decisions": [
            {
              "title": "رسالة متسقة",
              "reason": "اختلاف أساليب المنشورات يشتت حضور المتجر.",
              "implementation": "تحديد اتجاه للمحتوى والرسائل المتصلة بفئات العطور."
            },
            {
              "title": "تصميم يخدم المنتج",
              "reason": "الإعلان يحتاج إبراز المنتج دون طغيان الزخارف.",
              "implementation": "إعداد مواد إعلانية ترتبط بالفكرة التسويقية نفسها."
            },
            {
              "title": "حدود قياس النتائج",
              "reason": "إنتاج مادة إعلانية ليس دليلًا على تحقيق مبيعات.",
              "implementation": "تقديم مخرجات المحتوى الحقيقية وتأجيل أرقام الأداء إلى تقارير معتمدة."
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
          "overview": "A marketing project focused on bringing messaging, design, and campaigns around perfume products into one direction instead of treating every post or ad as a separate piece. The Fakhri Perfumes campaign brings product messaging, advertising design and social content under one creative direction. The value of planning lies in knowing what each piece should communicate while keeping the brand recognizable across the campaign.",
          "context": "The project needed messaging, design, and social campaigns to work together rather than appear as disconnected content. Perfume promotion needs a clear way to present individual products without producing disconnected posts. A shared content direction helps the team organize messages, recurring visual elements and the relationship between campaign pieces.",
          "contribution": "Built the campaign direction across content strategy, advertising design, and social media content. The project record covers content planning, ad creative and social campaign materials. It does not establish paid campaign spend, impressions, conversion rates or measurable growth; those results require verified account reporting.",
          "scope": ["Content planning","Advertising design","Social content and campaigns"],
          "deliveredOutputs": ["Content strategy","Advertising creatives","Social content and campaigns"],
          "decisions": [
            {
              "title": "Consistent campaign message",
              "reason": "Disconnected posts can weaken recognition of the store.",
              "implementation": "Use a common messaging direction around perfume offerings."
            },
            {
              "title": "Product-led creative",
              "reason": "Ad design should help explain what is being presented.",
              "implementation": "Develop advertising materials aligned with the campaign concept."
            },
            {
              "title": "Results need evidence",
              "reason": "Producing creative does not prove resulting sales or reach.",
              "implementation": "Show actual creative deliverables, not unverified performance figures."
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
          "overview": "متجر متخصص في العطور صُمم حول المنتج نفسه، من طريقة العرض والتصفح إلى الانتقال نحو الشراء داخل تجربة متماسكة. متجر فخري للعطور يضع المنتج في مركز تجربة التسوق؛ فالمستخدم يبدأ باستكشاف العطور ثم ينتقل إلى الاختيار والشراء. لذلك يحتاج الموقع إلى عرض بصري واضح وطريقة تنقل لا تفصل فئات المنتجات عن التفاصيل التي تساعد على اتخاذ القرار.",
          "context": "المشروع يركز على تقديم منتجات العطور داخل تجربة شراء يكون فيها المنتج هو العنصر الأساسي في التصفح والقرار. منتجات العطور تعتمد بدرجة كبيرة على طريقة تقديم الاسم والصورة والمعلومات المرتبطة بها، مع اختلاف ما يبحث عنه كل زائر. تنظيم التصفح يتيح الوصول إلى فئة مناسبة ثم منتج بعينه دون تشتيت بين خطوات غير ضرورية.",
          "contribution": "تصميم وبناء متجر إلكتروني يركز على عرض العطور وتنظيم التصفح ومسار الشراء. يشمل العمل الموثق تصميم وعرض المنتجات وتنظيم صفحات التصفح ومسار الشراء. لم تُثبت تفاصيل تكامل المخزون والشحن أو طريقة الدفع ولا يجوز إضافتها بوصفها جزءًا مسلّمًا من المشروع دون دليل.",
          "scope": ["عرض المنتجات","تنظيم التصفح","مسار الشراء"],
          "deliveredOutputs": ["عرض منتجات العطور","تنظيم التصفح","مسار شراء"],
          "decisions": [
            {
              "title": "عرض يبرز العطر",
              "reason": "قرار الزائر يحتاج تمييز المنتج بصورة واضحة.",
              "implementation": "إعطاء صور ومعلومات المنتجات أولوية في واجهة المتجر."
            },
            {
              "title": "تصفح متدرج",
              "reason": "وجود فئات مختلفة يجعل القائمة العامة غير كافية.",
              "implementation": "ربط تصنيف العطور بصفحات المنتجات في مسار مفهوم."
            },
            {
              "title": "رحلة شراء مختصرة",
              "reason": "على الخطوة التالية أن تبقى واضحة بعد اختيار المنتج.",
              "implementation": "تنظيم مسار الشراء وفق النطاق المسجل دون افتراض وسائل دفع محددة."
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
          "overview": "A perfume-focused e-commerce experience designed around the product itself, from presentation and browsing through the path to purchase. The Fakhri Perfumes store puts the product at the center of browsing and purchase decisions. Visitors move from discovering perfumes to choosing a specific product, so presentation and navigation must work together instead of competing for attention.",
          "context": "The project focuses on presenting perfume products in a shopping experience where the product remains central to browsing and purchase decisions. Perfume browsing depends heavily on product names, images and descriptive information. A clear hierarchy helps visitors move from broader categories to an individual item without losing context on the way to ordering.",
          "contribution": "Designed and built an online store focused on perfume presentation, organized browsing, and the buying journey. The documented scope covers product presentation, browsing organization and the purchase path. Stock synchronization, delivery integrations and specific payment methods remain subject to review.",
          "scope": ["Product presentation","Browsing organization","Buying journey"],
          "deliveredOutputs": ["Perfume product presentation","Organized browsing","Purchase flow"],
          "decisions": [
            {
              "title": "Product-forward design",
              "reason": "Visitors need to recognize and distinguish the perfume they want.",
              "implementation": "Prioritize product images and information in the store layout."
            },
            {
              "title": "Structured browsing",
              "reason": "Different offerings are easier to explore through a hierarchy.",
              "implementation": "Connect perfume categories and product detail views."
            },
            {
              "title": "A clear purchase path",
              "reason": "The next step should be understandable after selection.",
              "implementation": "Support the documented purchase journey without guessing payment providers."
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
          "overview": "متجر متخصص في ملابس الأطفال يركز على تبسيط اكتشاف المنتجات والتنقل بين الفئات حتى الوصول إلى المنتج والطلب. متجر كيدي لملابس الأطفال يركز على مساعدة المتسوق في الوصول إلى النوع المناسب من الملابس دون المرور على جميع المنتجات. ويمتد ذلك من تصنيفات المتجر إلى طريقة عرض القطع واختيار المنتج ثم الانتقال إلى الطلب.",
          "context": "المشروع ينظم ملابس الأطفال ضمن فئات واضحة ويبسّط اكتشاف المنتجات والوصول إلى الطلب. تختلف طريقة البحث بين من يعرف نوع القطعة المطلوبة ومن يتصفح لاكتشاف الخيارات. لهذا يحتاج المتجر إلى فئات يفهمها الزائر بسهولة، مع إبقاء تفاصيل المنتج والخطوة التالية واضحة على شاشة الهاتف أيضًا.",
          "contribution": "تصميم وبناء متجر متخصص يربط التصنيفات بعرض المنتج وتجربة الطلب. تشمل مساهمة المشروع الموثقة تنظيم تصنيفات المنتجات وعرض الكتالوج وتجربة الطلب. أما وجود مرشحات مقاسات محددة أو مزامنة المخزون أو العروض الآلية فلا يمكن نسبها للمشروع اعتمادًا على وصف عام فقط.",
          "scope": ["تصنيفات المنتجات","عرض الكتالوج","تجربة الطلب"],
          "deliveredOutputs": ["تصنيفات للمنتجات","عرض الكتالوج","تجربة طلب"],
          "decisions": [
            {
              "title": "تصنيفات مفهومة",
              "reason": "المشتري يحتاج الوصول إلى نوع القطعة دون البحث في كامل الكتالوج.",
              "implementation": "تنظيم المنتجات ضمن مجموعات مناسبة لطبيعة متجر الملابس."
            },
            {
              "title": "تقديم تفاصيل المنتج",
              "reason": "القرار يبدأ من فهم القطعة المعروضة ومعلوماتها.",
              "implementation": "إبراز صفحات المنتجات ضمن رحلة التصفح."
            },
            {
              "title": "استمرار رحلة التسوق",
              "reason": "التنقل بين الفئات لا ينبغي أن يقطع طريق الطلب.",
              "implementation": "ربط استكشاف المنتج بتجربة الطلب الواردة في النطاق."
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
          "overview": "A children's clothing store focused on simplifying product discovery and movement between categories through to product selection and ordering. The Kiddy clothing store is organized around helping shoppers find the relevant type of children's clothing without reviewing every item. The experience connects categories, item presentation and a clear path to placing an order.",
          "context": "The project organizes children's clothing into clear categories and simplifies product discovery and ordering. Some visitors know exactly what clothing item they need; others browse for options. The navigation has to support both approaches with understandable categories, informative product views and a mobile-friendly next step.",
          "contribution": "Designed and built a specialized store connecting product categories, presentation, and ordering. The established project scope includes product categorization, catalog presentation and ordering. Specific size-filter features, live stock synchronization and promotional automation are not asserted without direct evidence.",
          "scope": ["Product categories","Catalog display","Ordering experience"],
          "deliveredOutputs": ["Product categories","Catalog display","Ordering flow"],
          "decisions": [
            {
              "title": "Understandable categories",
              "reason": "Shoppers should not need to scan an entire mixed catalog.",
              "implementation": "Group clothing products into a navigable structure."
            },
            {
              "title": "Product information",
              "reason": "Choosing an item depends on understanding what is shown.",
              "implementation": "Give individual product presentation a clear role in browsing."
            },
            {
              "title": "Continuity to ordering",
              "reason": "Moving across categories should still lead to the order step.",
              "implementation": "Connect discovery with the documented ordering flow."
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
          "overview": "موقع تعريفي لمكتب قانوني يركز على تقديم الخدمات والمعلومات بطريقة مباشرة ومنظمة تساعد الزائر على فهم ما يقدمه المكتب والوصول للتواصل. موقع مكتب الحباري للمحاماة يهدف إلى تقديم نشاط المكتب وخدماته القانونية بأسلوب رسمي وواضح. لا يحتاج زائر مثل هذا الموقع إلى واجهة مزدحمة بقدر حاجته إلى فهم نوع الخدمات المقدمة وكيف يمكنه التواصل للحصول على المعلومات المناسبة.",
          "context": "المشروع يقدّم خدمات المكتب القانونية في واجهة رسمية ومباشرة تساعد الزائر على الفهم والوصول للتواصل. الخدمات القانونية تحتاج صياغة دقيقة وتفريقًا بين مجالات العمل، مع الحرص على عدم تقديم وعود بنتائج القضايا. لذلك يخدم التصميم محتوى منظمًا ونقاط تواصل واضحة ويترك التفاصيل القانونية للمكتب المختص.",
          "contribution": "تصميم وتطوير موقع تعريفي ينظم الخدمات والمعلومات ومسار التواصل للمكتب. النطاق المنشور يتضمن تصميم موقع تعريفي وتنظيم الخدمات والمعلومات ومسار التواصل. ولا يُعد الموقع بحد ذاته نظامًا لإدارة القضايا أو منصة استشارات آلية؛ هذه القدرات غير موجودة ضمن الأدلة الحالية.",
          "scope": ["عرض الخدمات القانونية","تنظيم المعلومات","مسار تواصل واضح"],
          "deliveredOutputs": ["عرض الخدمات القانونية","تنظيم المعلومات","مسار تواصل واضح"],
          "decisions": [
            {
              "title": "وضوح الخدمات",
              "reason": "الزائر يريد معرفة مجال الخدمة القانونية المناسبة.",
              "implementation": "تنظيم الخدمات في صفحات ومحتوى يمكن قراءته بسهولة."
            },
            {
              "title": "لغة رسمية منضبطة",
              "reason": "المجال القانوني لا يحتمل وعودًا بنتائج غير مؤكدة.",
              "implementation": "اعتماد عرض تعريفي محايد يركز على نطاق خدمات المكتب."
            },
            {
              "title": "تواصل بلا تعقيد",
              "reason": "تحتاج الاستفسارات إلى طريقة وصول مباشرة للمكتب.",
              "implementation": "إبراز مسار التواصل دون الادعاء بتقديم استشارة قانونية آلية."
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
          "overview": "A company website for a legal office focused on presenting services and information directly and helping visitors understand the office and reach the right contact path. Al Hobari Law Office's website presents legal services and office information in a measured, professional format. Visitors need to understand the kinds of services offered and how to contact the office, rather than navigate an unnecessarily complex interface.",
          "context": "The project presents the office's legal services through a professional and direct interface that helps visitors understand the offering and move toward contact. Legal service descriptions demand clarity and careful boundaries. The presentation should distinguish service areas without promising legal outcomes or presenting generic website information as individualized advice.",
          "contribution": "Designed and developed a company website that organizes legal services, information, and the office's contact path. The documented work includes a company website, organized service information and contact routes. A case-management system or automated legal advice platform is not part of the verified scope.",
          "scope": ["Legal service presentation","Information organization","Clear contact path"],
          "deliveredOutputs": ["Legal service presentation","Information organization","Clear contact path"],
          "decisions": [
            {
              "title": "Service clarity",
              "reason": "Visitors want to identify the relevant legal practice area.",
              "implementation": "Present legal services through readable, organized information."
            },
            {
              "title": "Appropriate tone",
              "reason": "Legal services should not promise particular outcomes.",
              "implementation": "Keep the presentation factual and professionally restrained."
            },
            {
              "title": "Direct enquiry path",
              "reason": "People need a simple route to contact the office.",
              "implementation": "Make contact discoverable without suggesting automated legal advice."
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
