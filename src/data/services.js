/**
 * Wasl Tech VNext — Canonical service data.
 * Source: verified legacy service records normalized on 2026-09-21.
 * One entity identity, localized content. English remains unpublished until reviewed.
 */

import { CONTENT_STATE, createFieldState, serviceFieldKeys } from "./content-contracts.js";

export const serviceGroups = Object.freeze([
  {
    "id": "digital-products",
    "order": 1,
    "content": {
      "ar": {
        "title": "المنتجات الرقمية"
      },
      "en": { "title": "Digital Products" }
    }
  },
  {
    "id": "systems-engineering",
    "order": 2,
    "content": {
      "ar": {
        "title": "الأنظمة والهندسة"
      },
      "en": { "title": "Systems & Engineering" }
    }
  },
  {
    "id": "brand-presence",
    "order": 3,
    "content": {
      "ar": {
        "title": "الهوية والحضور"
      },
      "en": { "title": "Brand & Presence" }
    }
  }
]);

const serviceRecords = [
  {
    "id": "web",
    "slug": "web-development",
    "group": "digital-products",
    "image": "/assets/services/web-development.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "تطوير المواقع الإلكترونية",
        "subtitle": "موقع يحول الزيارة إلى فهم وثقة وخطوة تالية.",
        "description": "نصمم ونطوّر مواقع للشركات والمشاريع التي تريد أن تشرح قيمتها بسرعة، تعرض خدماتها بوضوح، وتمنح الزائر سببًا للتواصل أو الشراء.",
        "decision": {
          "problemNeed": "موقعك هو أول موظف يقابل عميلك. إذا لم يشرح من أنت وماذا تقدم ولماذا يختارك، فأنت تخسر فرصًا قبل أن يبدأ الحديث.",
          "scopeSummary": "استراتيجية وهيكل المحتوى، تجربة المستخدم، التصميم، التطوير المتجاوب، صفحات الخدمات والأعمال، النماذج، إدارة المحتوى عند الحاجة، وتجهيز الإطلاق."
        },
        "heroCards": [
          {
            "title": "واضح من أول زيارة",
            "description": "نرتب الرسالة والمحتوى بحيث يفهم الزائر من أنت، ماذا تقدم، وما الخطوة التالية دون بحث طويل."
          },
          {
            "title": "مهيأ لكل شاشة",
            "description": "نبني تجربة متجاوبة تحافظ على وضوح المحتوى وسهولة الاستخدام على الجوال والتابلت والكمبيوتر."
          }
        ],
        "audiences": [
          "الشركات",
          "المكاتب",
          "أصحاب الخدمات",
          "العيادات",
          "المؤسسات",
          "المشاريع الناشئة"
        ],
        "deliverables": [
          {
            "title": "استراتيجية وهيكل المحتوى",
            "description": "تصميم بصري منسجم مع هوية المشروع ويعطي المحتوى ترتيبًا واضحًا من أول شاشة."
          },
          {
            "title": "تجربة مستخدم ومسار تحويل واضح",
            "description": "تنفيذ يكيّف الصفحات والعناصر مع أحجام الشاشات الأساسية دون كسر التجربة."
          },
          {
            "title": "تصميم بصري مرتبط بالهوية",
            "description": "ترتيب الرئيسية والخدمات ومن نحن والصفحات الأخرى حول رحلة الزائر وهدف الموقع."
          },
          {
            "title": "تطوير متجاوب للجوال والكمبيوتر",
            "description": "نماذج بسيطة تجمع المعلومات المطلوبة وتوجهها إلى قناة التواصل المناسبة."
          },
          {
            "title": "صفحات خدمات وأعمال وحالات استخدام",
            "description": "تنقل واضح وأزرار وخطوات مفهومة تقلل التشتت وتساعد الزائر على الوصول لما يحتاجه."
          },
          {
            "title": "نماذج تواصل وربط بالقنوات المناسبة",
            "description": "تنظيم الأصول وطريقة التحميل لتقليل الانتظار وتحسين تجربة التصفح."
          },
          {
            "title": "لوحة تحكم أو إدارة محتوى عند الحاجة",
            "description": "تهيئة وربط الموقع بالنطاق والاستضافة وتجهيزه للعمل عند الإطلاق."
          },
          {
            "title": "تحسين الأداء وتجهيز الإطلاق",
            "description": "لوحة تحكم أو نظام إدارة يتيح تحديث المحتوى بدون الرجوع إلى الكود في كل تعديل."
          }
        ],
        "process": [
          {
            "title": "نفهم الهدف",
            "description": "نحدد ما الذي يجب أن يحققه الموقع، من سيستخدمه، وما الذي نريد من الزائر أن يفعله."
          },
          {
            "title": "نرتب المحتوى والمسار",
            "description": "نحدد الصفحات والأقسام والأولوية وطريقة انتقال الزائر بينها قبل البدء بالتصميم."
          },
          {
            "title": "نصمم ونطوّر",
            "description": "نحوّل الهيكل إلى واجهات واضحة ثم ننفذها بصورة متجاوبة وقابلة للاستخدام."
          },
          {
            "title": "نراجع ونطلق",
            "description": "نختبر الصفحات والنماذج والأداء على الشاشات الأساسية ثم نجهز النسخة للإطلاق."
          }
        ],
        "faq": [
          {
            "question": "كم يحتاج الموقع من وقت؟",
            "answer": "يتحدد ذلك بعد معرفة عدد الصفحات والوظائف والمحتوى المطلوب؛ نحدد النطاق أولًا ثم نرتب التنفيذ على أساسه."
          },
          {
            "question": "هل سيعمل الموقع جيدًا على الجوال؟",
            "answer": "نعم، نبني تجربة متجاوبة من البداية ونراجعها على أحجام الشاشات الأساسية بدل التعامل مع الجوال كنسخة لاحقة."
          },
          {
            "question": "هل أستطيع تعديل المحتوى بنفسي؟",
            "answer": "إذا كان المشروع يحتاج تحديثات مستمرة يمكن إضافة لوحة تحكم أو نظام إدارة محتوى مناسب للنطاق."
          },
          {
            "question": "هل تساعدون في الدومين والاستضافة؟",
            "answer": "نعم، يمكننا ترتيب الربط والإعدادات اللازمة وتجهيز الموقع على الدومين والاستضافة المناسبة."
          }
        ],
        "constraints": [
          "جودة المحتوى والصور المتاحة تؤثر مباشرة على جودة العرض النهائي.",
          "أي تكامل مع خدمة خارجية يعتمد على توفر الصلاحيات أو واجهة الربط المناسبة.",
          "الدومين والاستضافة وتجهيزات الإطلاق تُرتب حسب بيئة المشروع ونطاقه."
        ],
        "relatedArticleTopics": [
          "كيف تحدد صفحات موقع شركتك قبل بدء التصميم؟",
          "متى تحتاج لوحة تحكم في موقعك؟",
          "ما الذي يجعل موقع الشركة واضحًا وسهل الاستخدام؟"
        ],
        "cta": {
          "title": "اجعل موقعك يعمل لصالح مشروعك",
          "description": "شاركنا هدف الموقع وما الذي تريد من الزائر أن يفعله، ونرتب معك النطاق المناسب.",
          "label": "خطط لموقعك"
        },
        "seo": {
          "primaryTopic": "تصميم وتطوير مواقع إلكترونية",
          "searchIntent": "commercial",
          "title": "تصميم وتطوير مواقع إلكترونية | وصل تك",
          "description": "تصميم وتطوير مواقع إلكترونية واضحة ومتجاوبة تربط المحتوى والهوية وتجربة الاستخدام بما يحتاجه مشروعك.",
          "ogTitle": "مواقع إلكترونية مبنية حول هدف مشروعك | وصل تك",
          "ogDescription": "من هيكلة المحتوى إلى التصميم والتطوير والإطلاق، نبني موقعًا واضحًا يخدم مشروعك وزواره."
        }
      },
      "en": {
        "title": "Website Design & Development",
        "subtitle": "A website that turns a visit into understanding, trust, and a next step.",
        "description": "We design and build websites for businesses that need to explain their value quickly, present services clearly, and give visitors a reason to contact or buy.",
        "decision": {
          "problemNeed": "Your website is often the first employee a customer meets. If it cannot explain who you are, what you offer, and why you are worth choosing, opportunities are lost before the conversation starts.",
          "scopeSummary": "Content strategy and structure, UX, visual design, responsive development, service and work pages, forms, optional CMS, performance, and launch preparation."
        },
        "heroCards": [
          {
            "title": "Clear from the first visit",
            "description": "We organize the message and content so visitors quickly understand who you are, what you offer, and what to do next."
          },
          {
            "title": "Built for every screen",
            "description": "We create a responsive experience that keeps content clear and usable across mobile, tablet, and desktop."
          }
        ],
        "audiences": [
          "Companies",
          "Professional offices",
          "Service businesses",
          "Clinics",
          "Organizations",
          "Startups"
        ],
        "deliverables": [
          {
            "title": "Content strategy and structure",
            "description": "A visual system aligned with the brand and a page hierarchy that makes the content easier to understand."
          },
          {
            "title": "User experience and a clear conversion path",
            "description": "Implementation that adapts layouts and components to key screen sizes without breaking the experience."
          },
          {
            "title": "Visual design aligned with the brand",
            "description": "Structuring the homepage, services, about, and supporting pages around the visitor journey and business goal."
          },
          {
            "title": "Responsive desktop and mobile development",
            "description": "Simple forms that collect the right information and route it to the appropriate contact channel."
          },
          {
            "title": "Service, work, and use-case pages",
            "description": "Clear navigation, actions, and interaction patterns that reduce friction and help visitors find what they need."
          },
          {
            "title": "Contact forms and channel connections",
            "description": "Asset and loading decisions that reduce unnecessary delay and improve browsing quality."
          },
          {
            "title": "CMS or admin experience when needed",
            "description": "Preparing the website for launch on the selected domain and hosting environment."
          },
          {
            "title": "Performance optimization and launch preparation",
            "description": "A management layer that lets the team update content without editing code for every change."
          }
        ],
        "process": [
          {
            "title": "Understand the goal",
            "description": "We define what the website needs to achieve, who will use it, and the action we want visitors to take."
          },
          {
            "title": "Organize content & flow",
            "description": "We define pages, sections, priorities, and navigation before design begins."
          },
          {
            "title": "Design & build",
            "description": "We turn the structure into clear interfaces and implement them as a responsive, usable website."
          },
          {
            "title": "Review & launch",
            "description": "We test pages, forms, responsiveness, and performance before preparing the approved version for launch."
          }
        ],
        "faq": [
          {
            "question": "How long does a website take?",
            "answer": "It depends on the number of pages, functionality, and content. We define the scope first, then plan the implementation around it."
          },
          {
            "question": "Will the website work well on mobile?",
            "answer": "Yes. Responsive behavior is designed from the start and reviewed across key screen sizes rather than treated as a later adjustment."
          },
          {
            "question": "Can I update the content myself?",
            "answer": "If the project needs regular updates, we can include a suitable content management or admin experience."
          },
          {
            "question": "Can you help with domain and hosting?",
            "answer": "Yes. We can help organize the setup and connect the website to the selected domain and hosting environment."
          }
        ],
        "constraints": [
          "The quality of available content and imagery directly affects the final presentation.",
          "External integrations depend on access, permissions, or an available integration interface.",
          "Domain, hosting, and launch setup are arranged according to the project environment and scope."
        ],
        "relatedArticleTopics": [
          "How do you define the right pages for a company website?",
          "When does a website need a content management system?",
          "What makes a company website clear and easy to use?"
        ],
        "cta": {
          "title": "Make your website work for the business",
          "description": "Tell us what the website needs to achieve and what visitors should do next, and we will shape the scope.",
          "label": "Plan your website"
        },
        "seo": {
          "primaryTopic": "website design and development",
          "searchIntent": "commercial",
          "title": "Website Design & Development | Wasl Tech",
          "description": "Responsive website design and development that brings content, brand identity, user experience, and performance together around your business goals.",
          "ogTitle": "Websites Built Around Your Business Goal | Wasl Tech",
          "ogDescription": "From content structure to design, development, and launch, we build clear websites that serve both the business and its visitors."
        }
      }
    }
  },
  {
    "id": "app",
    "slug": "mobile-app-development",
    "group": "digital-products",
    "image": "/assets/services/mobile-app-development.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "تطوير تطبيقات الجوال",
        "subtitle": "ضع خدمتك في يد العميل بالطريقة التي يتوقعها.",
        "description": "نحوّل الفكرة إلى تطبيق واضح وسهل الاستخدام، من ترتيب الشاشات وتجربة العميل إلى البرمجة والربط والاختبار والإطلاق.",
        "decision": {
          "problemNeed": "التطبيق الناجح ليس مجموعة شاشات؛ هو أقصر طريق بين حاجة المستخدم والخدمة التي تقدمها.",
          "scopeSummary": "تحليل المستخدم والوظائف، تجربة الاستخدام، Android وiOS حسب النطاق، الحسابات والإشعارات، API، لوحة الإدارة، الاختبار وتجهيز الإطلاق."
        },
        "heroCards": [
          {
            "title": "رحلة استخدام مفهومة",
            "description": "نرتب الشاشات والخطوات حول ما يريد المستخدم إنجازه، لا حول عدد الخصائص الموجودة في التطبيق."
          },
          {
            "title": "متصل بما يحتاجه المشروع",
            "description": "نربط التطبيق بالحسابات والبيانات والإشعارات وواجهات API ولوحة الإدارة حسب النطاق."
          }
        ],
        "audiences": [
          "المتاجر",
          "الشركات",
          "مقدمو الخدمات",
          "المشاريع الناشئة",
          "الأنظمة الداخلية",
          "المبادرات الرقمية"
        ],
        "deliverables": [
          {
            "title": "تحليل المستخدم والوظائف الأساسية",
            "description": "بناء تدفقات وشاشات واضحة تراعي طبيعة المستخدم والمهام الأساسية داخل التطبيق."
          },
          {
            "title": "تجربة استخدام ومسارات واضحة",
            "description": "تنفيذ نسخة أندرويد وفق المتطلبات والوظائف المعتمدة للمشروع."
          },
          {
            "title": "تطبيقات Android وiOS حسب النطاق",
            "description": "تجهيز نسخة iOS عندما يتطلب نطاق المشروع دعم أجهزة Apple."
          },
          {
            "title": "حسابات وصلاحيات وإشعارات",
            "description": "ربط التطبيق بالموقع أو النظام أو الخدمات الخلفية لتبادل البيانات والعمليات."
          },
          {
            "title": "ربط API والأنظمة الحالية",
            "description": "تجهيز تدفقات التسجيل والدخول وإدارة الحسابات بما يناسب سيناريو الاستخدام."
          },
          {
            "title": "لوحة إدارة عند الحاجة",
            "description": "إضافة التنبيهات المطلوبة للطلبات أو التحديثات أو الرسائل عندما تكون جزءًا من التجربة."
          },
          {
            "title": "اختبار السيناريوهات والأداء",
            "description": "واجهة لإدارة المحتوى والبيانات والعمليات التي يحتاجها فريق المشروع."
          },
          {
            "title": "تجهيز الإصدار للإطلاق",
            "description": "مراجعة السيناريوهات الأساسية والأداء والسلوك على الأجهزة المستهدفة قبل تجهيز النسخة النهائية."
          }
        ],
        "process": [
          {
            "title": "نحدد المستخدم والهدف",
            "description": "نفهم من سيستخدم التطبيق وما المهمة الأساسية التي يجب أن ينجزها بسهولة."
          },
          {
            "title": "نرسم الرحلة",
            "description": "نرتب التدفقات والشاشات والحالات قبل الدخول في تفاصيل الشكل والتنفيذ."
          },
          {
            "title": "نصمم ونبرمج",
            "description": "نبني الواجهات والوظائف والربط المطلوب ضمن نطاق واضح ومراحل قابلة للمراجعة."
          },
          {
            "title": "نختبر ونجهز للإطلاق",
            "description": "نراجع السيناريوهات والأداء والتكاملات ثم نجهز النسخة للنشر أو التسليم."
          }
        ],
        "faq": [
          {
            "question": "هل يمكن تنفيذ Android فقط؟",
            "answer": "نعم، يمكن تحديد المنصات حسب الجمهور والنطاق؛ قد يبدأ المشروع بأندرويد فقط أو يشمل iOS أيضًا."
          },
          {
            "question": "هل كل تطبيق يحتاج لوحة تحكم؟",
            "answer": "ليس دائمًا. نضيفها عندما توجد بيانات أو محتوى أو طلبات أو مستخدمون يحتاج فريق المشروع إلى إدارتهم."
          },
          {
            "question": "هل يمكن ربط التطبيق بموقع أو نظام موجود؟",
            "answer": "نعم إذا كانت البنية تسمح بذلك؛ يتم الربط عادة عبر API أو وسيلة تكامل مناسبة."
          },
          {
            "question": "هل يمكن تنفيذ التصميم بدون البرمجة؟",
            "answer": "نعم، يمكن أن يكون نطاق العمل تصميم تجربة وواجهات فقط، أو تصميمًا مع تطوير كامل حسب الحاجة."
          }
        ],
        "constraints": [
          "المنصات المستهدفة والخصائص الأساسية يجب حسمها ضمن نطاق التطبيق.",
          "الربط مع نظام أو موقع قائم يعتمد على توفر API أو وسيلة تكامل مناسبة.",
          "النشر على متاجر التطبيقات يرتبط بحسابات ومتطلبات كل منصة."
        ],
        "relatedArticleTopics": [
          "كيف تحوّل فكرة التطبيق إلى نطاق قابل للتنفيذ؟",
          "هل تبدأ بـ Android أم Android وiOS؟",
          "متى يحتاج التطبيق إلى لوحة تحكم وBackend؟"
        ],
        "cta": {
          "title": "خلّ فكرتك قابلة للاستخدام",
          "description": "شاركنا الفكرة وما الذي يجب أن ينجزه المستخدم بسهولة، ونرتب معك نطاق التطبيق.",
          "label": "ابنِ تطبيقك"
        },
        "seo": {
          "primaryTopic": "تطوير تطبيقات الجوال",
          "searchIntent": "commercial",
          "title": "تطوير تطبيقات الجوال Android وiOS | وصل تك",
          "description": "تصميم وتطوير تطبيقات جوال مبنية حول رحلة المستخدم مع الحسابات والإشعارات وواجهات API ولوحة الإدارة حسب الحاجة.",
          "ogTitle": "تطبيقات جوال أسهل في الاستخدام | وصل تك",
          "ogDescription": "نحوّل فكرة التطبيق إلى تجربة واضحة تبدأ من المستخدم وتربط الوظائف والتكاملات ضمن مسار واحد."
        }
      },
      "en": {
        "title": "Mobile App Development",
        "subtitle": "Put your service in the customer's hand the way they expect.",
        "description": "We turn the idea into a clear, usable app—from screen flow and user experience to development, integrations, testing, and launch.",
        "decision": {
          "problemNeed": "A successful app is not a collection of screens; it is the shortest clear path between a user need and the service you provide.",
          "scopeSummary": "User and feature analysis, UX flows, Android and iOS by scope, accounts, notifications, APIs, admin tools, testing, and release preparation."
        },
        "heroCards": [
          {
            "title": "A journey users can understand",
            "description": "We organize screens and steps around what users need to accomplish—not around how many features the app contains."
          },
          {
            "title": "Connected to the rest of the project",
            "description": "Accounts, data, notifications, APIs, and admin tools can work together as one product when the scope requires it."
          }
        ],
        "audiences": [
          "E-commerce businesses",
          "Companies",
          "Service providers",
          "Startups",
          "Internal systems",
          "Digital initiatives"
        ],
        "deliverables": [
          {
            "title": "User and core feature analysis",
            "description": "Clear flows and screens based on user needs and the core tasks inside the product."
          },
          {
            "title": "Clear user experience and flows",
            "description": "Android implementation based on the approved requirements and feature scope."
          },
          {
            "title": "Android and iOS apps by scope",
            "description": "An iOS version when supporting Apple devices is part of the project scope."
          },
          {
            "title": "Accounts, permissions, and notifications",
            "description": "Connecting the app to an existing website, system, or backend service for data and operations."
          },
          {
            "title": "API and existing-system integrations",
            "description": "Registration, sign-in, and account management flows that fit the product scenario."
          },
          {
            "title": "Admin dashboard when needed",
            "description": "Relevant notifications for orders, updates, messages, or other product events when needed."
          },
          {
            "title": "Scenario and performance testing",
            "description": "An interface for the team to manage content, data, and operational workflows."
          },
          {
            "title": "Release preparation",
            "description": "Reviewing key scenarios, performance, and behavior on target devices before release."
          }
        ],
        "process": [
          {
            "title": "Define the user and goal",
            "description": "We identify who will use the app and the key task they need to complete easily."
          },
          {
            "title": "Map the journey",
            "description": "We organize flows, screens, and states before moving into visual and technical details."
          },
          {
            "title": "Design & develop",
            "description": "We build the interface, features, and integrations in a clear scope with reviewable stages."
          },
          {
            "title": "Test & prepare for release",
            "description": "We review scenarios, performance, and integrations before preparing the app for publishing or handoff."
          }
        ],
        "faq": [
          {
            "question": "Can the app be Android only?",
            "answer": "Yes. The platform choice depends on the audience and scope; a project may start with Android only or include iOS as well."
          },
          {
            "question": "Does every app need an admin dashboard?",
            "answer": "Not always. We add one when the team needs to manage data, content, orders, users, or other operational elements."
          },
          {
            "question": "Can the app connect to an existing website or system?",
            "answer": "Yes, when the current architecture supports it, usually through an API or another suitable integration method."
          },
          {
            "question": "Can you design the app without developing it?",
            "answer": "Yes. The scope can cover UX/UI design only, or full design and development depending on the need."
          }
        ],
        "constraints": [
          "Target platforms and core functionality must be defined within the app scope.",
          "Integration with an existing system depends on an available API or suitable integration method.",
          "Publishing to app stores depends on each platform's account and submission requirements."
        ],
        "relatedArticleTopics": [
          "How do you turn an app idea into an executable scope?",
          "Should you start with Android only or Android and iOS?",
          "When does an app need a backend and admin dashboard?"
        ],
        "cta": {
          "title": "Make the idea usable",
          "description": "Tell us what the user needs to accomplish, and we will organize the app scope around that.",
          "label": "Build your app"
        },
        "seo": {
          "primaryTopic": "mobile app development",
          "searchIntent": "commercial",
          "title": "Mobile App Development for Android & iOS | Wasl Tech",
          "description": "Mobile app design and development built around user journeys, with accounts, notifications, APIs, and admin tools where the project needs them.",
          "ogTitle": "Mobile Apps That Are Easier to Use | Wasl Tech",
          "ogDescription": "We turn app ideas into clear user journeys that connect the right features, data, and integrations."
        }
      }
    }
  },
  {
    "id": "store",
    "slug": "ecommerce",
    "group": "digital-products",
    "image": "/assets/services/ecommerce.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "المتاجر الإلكترونية",
        "subtitle": "متجر يجعل اكتشاف المنتج وطلبه أسهل.",
        "description": "نبني متجرًا يعرض منتجاتك بطريقة مقنعة، ويرتب تجربة التصفح والسلة والطلب، ويمنح فريقك أدوات واضحة لإدارة المنتجات والطلبات.",
        "decision": {
          "problemNeed": "المنتج الجيد لا يبيع وحده إذا كان العميل لا يجد ما يريد أو لا يثق في الخطوة التالية.",
          "scopeSummary": "هيكلة وتصنيف المنتجات، صفحات المنتجات، السلة والطلب، إدارة المنتجات والمخزون، الدفع والشحن حسب المتاح، الحسابات والتنبيهات، والتقارير."
        },
        "heroCards": [
          {
            "title": "شراء بدون تعقيد",
            "description": "نرتب رحلة العميل من اكتشاف المنتج إلى السلة والطلب بأقل خطوات مربكة ممكنة."
          },
          {
            "title": "إدارة واضحة خلف المتجر",
            "description": "المنتجات والتصنيفات والطلبات والمبيعات تُدار من لوحة واحدة بدل العمل المتفرق."
          }
        ],
        "audiences": [
          "أصحاب المنتجات",
          "المتاجر المحلية",
          "العلامات التجارية",
          "المشاريع المنزلية",
          "الشركات التجارية",
          "المتاجر الناشئة"
        ],
        "deliverables": [
          {
            "title": "هيكلة وتصنيف المنتجات",
            "description": "تصميم يبرز المنتجات ويجعل التصفح والمقارنة والطلب واضحًا على الجوال والكمبيوتر."
          },
          {
            "title": "صفحات منتجات تقود إلى الشراء",
            "description": "إضافة المنتجات وتحديث بياناتها وأسعارها وصورها من لوحة الإدارة."
          },
          {
            "title": "سلة وطلب وتأكيد واضح",
            "description": "تقسيم المنتجات بطريقة تسهّل البحث والوصول بدل عرضها في قائمة واحدة."
          },
          {
            "title": "إدارة المنتجات والمخزون عند الحاجة",
            "description": "تجربة مرتبة لإضافة المنتجات ومراجعة الطلب وإكمال بيانات الشراء."
          },
          {
            "title": "الدفع والشحن وفق المزوّدات المتاحة",
            "description": "متابعة الطلبات وحالاتها والبيانات المرتبطة بها من مكان واحد."
          },
          {
            "title": "حسابات العملاء والتنبيهات عند الحاجة",
            "description": "إضافة بوابات أو طرق الدفع المتاحة والمناسبة لسوق المشروع عند الحاجة."
          },
          {
            "title": "تقارير وبيانات تساعد على قراءة أداء المتجر",
            "description": "تهيئة خيارات التوصيل أو الربط المتاح بما يناسب آلية تشغيل المتجر."
          }
        ],
        "process": [
          {
            "title": "نفهم طريقة البيع",
            "description": "نراجع المنتجات، الجمهور، مناطق الخدمة، وآلية الطلب والدفع والتوصيل."
          },
          {
            "title": "نرتب رحلة الشراء",
            "description": "نحدد كيف يكتشف العميل المنتج وكيف ينتقل من التصفح إلى إتمام الطلب."
          },
          {
            "title": "نبني المتجر والإدارة",
            "description": "ننفيذ واجهة المتجر والسلة والطلبات ولوحة الإدارة والتكاملات المطلوبة."
          },
          {
            "title": "نختبر ونطلق",
            "description": "نراجع الطلب والدفع والتوصيل والاستجابة على الأجهزة ثم نجهز المتجر للعمل."
          }
        ],
        "faq": [
          {
            "question": "هل أستطيع إدارة المنتجات بنفسي؟",
            "answer": "نعم، يكون لديك لوحة لإضافة المنتجات وتعديل بياناتها وتنظيمها حسب صلاحيات الإدارة."
          },
          {
            "question": "هل يمكن إضافة دفع إلكتروني؟",
            "answer": "نعم، إذا كانت بوابة الدفع المناسبة متاحة ويمكن دمجها تقنيًا في بلد وسوق المشروع."
          },
          {
            "question": "هل يمكن ربط شركة شحن أو توصيل؟",
            "answer": "يمكن ذلك عندما تتوفر وسيلة تكامل مناسبة، أو يمكن تجهيز خيارات توصيل يدوية حسب طريقة عمل المتجر."
          },
          {
            "question": "هل المتجر مناسب للجوال؟",
            "answer": "نعم، رحلة التصفح والسلة والطلب تُبنى لتعمل بوضوح على الجوال والشاشات الأخرى."
          }
        ],
        "constraints": [
          "بوابات الدفع تعتمد على المزوّدات المتاحة في بلد وسوق المتجر.",
          "ربط شركات الشحن أو التوصيل يعتمد على توفر وسيلة تكامل مناسبة.",
          "تنظيم المنتجات والصور والأسعار جزء أساسي من جاهزية المتجر للإطلاق."
        ],
        "relatedArticleTopics": [
          "ما الذي تحتاجه قبل إطلاق متجر إلكتروني؟",
          "كيف تختار طريقة الدفع والتوصيل لمتجرك؟",
          "كيف تبني تصنيفات منتجات تسهّل على العميل الشراء؟"
        ],
        "cta": {
          "title": "حوّل منتجاتك إلى تجربة شراء",
          "description": "شاركنا نوع المنتجات وطريقة الطلب الحالية وما الذي تريد تحسينه، ونرتب نطاق المتجر.",
          "label": "خطط لمتجرك"
        },
        "seo": {
          "primaryTopic": "تصميم وتطوير متاجر إلكترونية",
          "searchIntent": "commercial",
          "title": "تصميم وتطوير متاجر إلكترونية | وصل تك",
          "description": "متاجر إلكترونية تنظّم المنتجات والسلة والطلبات والدفع والشحن ضمن تجربة شراء واضحة ولوحة إدارة عملية.",
          "ogTitle": "متجر إلكتروني يرتب رحلة الشراء | وصل تك",
          "ogDescription": "نبني تجربة من التصفح إلى الطلب مع إدارة المنتجات والمدفوعات والتوصيل حسب آلية متجرك."
        }
      },
      "en": {
        "title": "E-commerce Development",
        "subtitle": "An online store that makes products easier to discover and order.",
        "description": "We build stores that present products clearly, organize browsing, cart, and ordering, and give the team practical tools to manage products and orders.",
        "decision": {
          "problemNeed": "A good product does not sell itself if customers cannot find what they want or trust the next step.",
          "scopeSummary": "Product architecture, product pages, cart and ordering, catalog and stock management, payment and shipping where available, accounts, alerts, and reporting."
        },
        "heroCards": [
          {
            "title": "Buying without unnecessary friction",
            "description": "We organize the journey from product discovery to cart and order with as few confusing steps as possible."
          },
          {
            "title": "Clear operations behind the store",
            "description": "Products, categories, orders, and sales are managed from one place instead of scattered workflows."
          }
        ],
        "audiences": [
          "Product businesses",
          "Local stores",
          "Brands",
          "Home businesses",
          "Trading companies",
          "New e-commerce ventures"
        ],
        "deliverables": [
          {
            "title": "Product structure and categories",
            "description": "A product-focused interface that makes browsing, comparison, and ordering clear across mobile and desktop."
          },
          {
            "title": "Product pages that guide toward purchase",
            "description": "Adding and updating products, details, pricing, and imagery through the administration layer."
          },
          {
            "title": "Clear cart, order, and confirmation flow",
            "description": "Structuring products so customers can browse and find items without facing one long list."
          },
          {
            "title": "Product and inventory management when needed",
            "description": "A clear journey for adding products, reviewing the order, and completing purchase information."
          },
          {
            "title": "Payment and shipping through available providers",
            "description": "Tracking orders, statuses, and related customer information from one place."
          },
          {
            "title": "Customer accounts and alerts when needed",
            "description": "Integrating suitable available payment methods or gateways when needed."
          },
          {
            "title": "Reporting and store performance data",
            "description": "Configuring delivery options or supported integrations according to the store's operating model."
          }
        ],
        "process": [
          {
            "title": "Understand how you sell",
            "description": "We review the products, audience, service area, and how ordering, payment, and delivery work."
          },
          {
            "title": "Organize the buying journey",
            "description": "We define how customers discover products and move from browsing to placing an order."
          },
          {
            "title": "Build the store & admin",
            "description": "We implement the storefront, cart, orders, administration, and required integrations."
          },
          {
            "title": "Test & launch",
            "description": "We review ordering, payment, delivery, and responsive behavior before preparing the store for use."
          }
        ],
        "faq": [
          {
            "question": "Can I manage products myself?",
            "answer": "Yes. The administration layer lets you add, update, and organize products according to the permissions defined for the project."
          },
          {
            "question": "Can the store support online payments?",
            "answer": "Yes, when a suitable payment provider is available and technically integrable in the target country and market."
          },
          {
            "question": "Can the store connect to a shipping or delivery company?",
            "answer": "Yes, when an appropriate integration is available. Manual delivery options can also be configured when they fit the business better."
          },
          {
            "question": "Will the store work well on mobile?",
            "answer": "Yes. Browsing, cart, and ordering are designed to remain clear across mobile and other screen sizes."
          }
        ],
        "constraints": [
          "Payment options depend on providers available in the store's target market.",
          "Shipping or delivery integrations depend on the availability of a suitable integration method.",
          "Well-organized product data, imagery, and pricing are essential to launch readiness."
        ],
        "relatedArticleTopics": [
          "What do you need before launching an online store?",
          "How do you choose payment and delivery options for e-commerce?",
          "How should product categories be structured to make shopping easier?"
        ],
        "cta": {
          "title": "Turn products into a buying experience",
          "description": "Tell us what you sell and how orders work today, and we will shape the right store scope.",
          "label": "Plan your store"
        },
        "seo": {
          "primaryTopic": "e-commerce design and development",
          "searchIntent": "commercial",
          "title": "E-commerce Design & Development | Wasl Tech",
          "description": "E-commerce experiences that organize products, cart, orders, payments, delivery, and administration into a clear buying journey.",
          "ogTitle": "E-commerce Built Around the Buying Journey | Wasl Tech",
          "ogDescription": "We connect product browsing, cart, ordering, payment, and delivery around the way your business operates."
        }
      }
    }
  },
  {
    "id": "programming",
    "slug": "custom-software",
    "group": "systems-engineering",
    "image": "/assets/services/custom-software.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "البرمجة وتطوير الأنظمة",
        "subtitle": "إذا كان عملك خاصًا، فحلّك لا يجب أن يكون قالبًا جاهزًا.",
        "description": "نطوّر الأنظمة ولوحات التحكم والخصائص التي تناسب طريقة عملك، ونحوّل العمليات المتفرقة إلى مسارات رقمية واضحة يمكن لفريقك استخدامها وتطويرها.",
        "decision": {
          "problemNeed": "عندما يجبرك الحل الجاهز على تغيير عملك، أو تعتمد على جداول ورسائل وعمليات يدوية، يكون الوقت قد حان لنظام مصمم حولك.",
          "scopeSummary": "أنظمة إدارية وتشغيلية، لوحات تحكم، قواعد بيانات وصلاحيات، تكاملات API، أتمتة، تقارير، ومنصات داخلية مخصصة."
        },
        "heroCards": [
          {
            "title": "منطق مبني حول عملك",
            "description": "نبني الوظائف والصلاحيات والتدفقات بما يناسب طريقة تشغيل المشروع بدل إجباره على قالب جاهز."
          },
          {
            "title": "أجزاء النظام تعمل معًا",
            "description": "نربط الواجهات والبيانات والخدمات لتقليل التكرار والحلول المنفصلة داخل نفس المشروع."
          }
        ],
        "audiences": [
          "الشركات",
          "المنصات الرقمية",
          "فرق العمل",
          "الخدمات الداخلية",
          "المشاريع الناشئة",
          "المشاريع ذات المتطلبات الخاصة"
        ],
        "deliverables": [
          {
            "title": "أنظمة إدارية وتشغيلية",
            "description": "تطوير الخصائص التي يحتاجها السيناريو الفعلي للمشروع بدل حشو النظام بوظائف غير مستخدمة."
          },
          {
            "title": "لوحات تحكم",
            "description": "واجهات لإدارة البيانات والعمليات والمتابعة بحسب أدوار المستخدمين."
          },
          {
            "title": "قواعد بيانات وصلاحيات",
            "description": "بناء أو ربط واجهات تسمح للموقع أو التطبيق أو الخدمات الخارجية بتبادل البيانات."
          },
          {
            "title": "تكاملات API",
            "description": "تنظيم الكيانات والعلاقات والبيانات بطريقة تناسب تشغيل النظام وتطوره."
          },
          {
            "title": "أتمتة العمليات",
            "description": "تحديد ما يستطيع كل نوع من المستخدمين رؤيته أو تنفيذه داخل النظام."
          },
          {
            "title": "تقارير ولوحات متابعة",
            "description": "تحويل الخطوات اليدوية المتكررة إلى تدفقات آلية عندما تكون قابلة لذلك."
          },
          {
            "title": "منصات داخلية ومكونات مخصصة",
            "description": "تجميع المعلومات المهمة في عرض يساعد الإدارة على المتابعة واتخاذ القرار."
          },
          {
            "title": "تطوير مرحلي يبدأ بالأولوية الأعلى",
            "description": "تقسيم النظام إلى أولويات واضحة حتى يبدأ بما هو أهم ثم يتوسع بصورة منظمة."
          }
        ],
        "process": [
          {
            "title": "نفهم سير العمل",
            "description": "نرسم من يستخدم النظام، ماذا يفعل، وأين توجد الخطوات اليدوية أو المتكررة أو غير المنظمة."
          },
          {
            "title": "نصمم المنطق والبيانات",
            "description": "نحدد الكيانات والصلاحيات والتدفقات والتكاملات قبل الدخول في التنفيذ التفصيلي."
          },
          {
            "title": "نطوّر ونختبر",
            "description": "نبني الوظائف على مراحل ونراجع كل سيناريو أساسي مع البيانات والصلاحيات المرتبطة به."
          },
          {
            "title": "نسلّم ونوسّع عند الحاجة",
            "description": "نجهز النسخة المعتمدة للعمل ونرتب أي مراحل لاحقة أو إضافات حسب الأولوية."
          }
        ],
        "faq": [
          {
            "question": "متى أحتاج نظامًا مخصصًا بدل حل جاهز؟",
            "answer": "عندما تكون طريقة العمل أو الصلاحيات أو التكاملات مختلفة لدرجة تجعل الحل الجاهز يفرض قيودًا أكثر مما يحل المشكلة."
          },
          {
            "question": "هل يمكن تطوير نظام موجود بدل البدء من الصفر؟",
            "answer": "نعم إذا كانت بنيته تسمح بذلك؛ نراجع الوضع الحالي أولًا ثم نحدد هل الأنسب التطوير أو إعادة البناء أو الربط."
          },
          {
            "question": "هل يمكن تنفيذ المشروع على مراحل؟",
            "answer": "نعم، وغالبًا يكون ذلك مناسبًا للأنظمة الكبيرة حتى نبدأ بالوظائف الأعلى أولوية ثم نتوسع."
          },
          {
            "question": "هل يمكن ربط النظام بموقع أو تطبيق أو خدمة خارجية؟",
            "answer": "نعم عندما تتوفر واجهات أو وسائل تكامل مناسبة، ويتم تحديد ذلك ضمن نطاق الربط المطلوب."
          }
        ],
        "constraints": [
          "تطوير نظام قائم يعتمد على جودة بنيته الحالية وإمكانية الوصول إلى الكود والبيانات.",
          "التكامل مع أنظمة خارجية يحتاج إلى صلاحيات أو توثيق أو API قابل للاستخدام.",
          "المشاريع الكبيرة تُرتب عادةً إلى مراحل حتى يبقى النطاق قابلًا للمراجعة والتنفيذ."
        ],
        "relatedArticleTopics": [
          "متى تحتاج نظامًا مخصصًا بدل برنامج جاهز؟",
          "كيف تقسّم مشروع النظام إلى مراحل بدون فقدان الصورة الكاملة؟",
          "ما الفرق بين لوحة التحكم والنظام المتكامل؟"
        ],
        "cta": {
          "title": "حوّل طريقة عملك إلى نظام",
          "description": "صف لنا العملية الحالية وما الذي يستهلك الوقت أو يتكرر، ونرتب معك نطاق النظام.",
          "label": "ناقش نظامك"
        },
        "seo": {
          "primaryTopic": "برمجة أنظمة مخصصة",
          "searchIntent": "commercial",
          "title": "برمجة وتطوير أنظمة مخصصة | وصل تك",
          "description": "أنظمة ولوحات تحكم وواجهات API وقواعد بيانات وصلاحيات وأتمتة مبنية حول طريقة عمل مشروعك.",
          "ogTitle": "برمجة مخصصة لطريقة عملك | وصل تك",
          "ogDescription": "عندما لا يكفي الحل الجاهز، نبني نظامًا حول التدفقات والبيانات والصلاحيات التي يحتاجها مشروعك."
        }
      },
      "en": {
        "title": "Custom Software & Systems",
        "subtitle": "If your work is specific, your solution should not be a generic template.",
        "description": "We build systems, dashboards, and features around how your team actually works, turning fragmented operations into clear digital workflows that can evolve.",
        "decision": {
          "problemNeed": "When an off-the-shelf tool forces your business to change or your team depends on spreadsheets, messages, and manual work, a custom system may be the right path.",
          "scopeSummary": "Operational systems, dashboards, databases and permissions, APIs, automation, reporting, internal platforms, and staged custom components."
        },
        "heroCards": [
          {
            "title": "Logic built around your workflow",
            "description": "Features, permissions, and flows are designed around how the business actually operates instead of forcing it into a fixed template."
          },
          {
            "title": "System parts that work together",
            "description": "Interfaces, data, and services are connected to reduce duplication and disconnected tools inside the same operation."
          }
        ],
        "audiences": [
          "Companies",
          "Digital platforms",
          "Teams",
          "Internal operations",
          "Startups",
          "Projects with specialized requirements"
        ],
        "deliverables": [
          {
            "title": "Administrative and operational systems",
            "description": "Features built around the actual scenarios the system needs to support."
          },
          {
            "title": "Dashboards",
            "description": "Interfaces for managing data, workflows, and monitoring according to user roles."
          },
          {
            "title": "Databases and permissions",
            "description": "Building or integrating interfaces that let websites, apps, and external services exchange data."
          },
          {
            "title": "API integrations",
            "description": "Structuring entities, relationships, and data to support the system's operation and future development."
          },
          {
            "title": "Process automation",
            "description": "Defining what each type of user can see and do inside the system."
          },
          {
            "title": "Reports and monitoring dashboards",
            "description": "Turning repetitive manual steps into automated or guided processes where appropriate."
          },
          {
            "title": "Internal platforms and custom components",
            "description": "Bringing important operational information into clearer views for management and follow-up."
          },
          {
            "title": "Phased development starting from the highest priority",
            "description": "Breaking a larger system into priorities so the most important part can be built first and expanded in a controlled way."
          }
        ],
        "process": [
          {
            "title": "Understand the workflow",
            "description": "We map who uses the system, what they do, and where work is repetitive, manual, or disorganized."
          },
          {
            "title": "Design logic & data",
            "description": "We define entities, permissions, flows, and integrations before detailed implementation."
          },
          {
            "title": "Build & test",
            "description": "We implement the system in reviewable stages and test the core scenarios with their data and permissions."
          },
          {
            "title": "Deliver & expand when needed",
            "description": "We prepare the approved version for use and organize later phases or additions by priority."
          }
        ],
        "faq": [
          {
            "question": "When do I need custom software instead of an off-the-shelf tool?",
            "answer": "When the workflow, permissions, or integrations are different enough that a ready-made tool creates more constraints than it solves."
          },
          {
            "question": "Can you improve an existing system instead of rebuilding it?",
            "answer": "Yes, when the existing architecture supports it. We review the current system first, then decide whether improvement, integration, or rebuilding makes more sense."
          },
          {
            "question": "Can a large system be delivered in phases?",
            "answer": "Yes. Phased delivery is often useful for larger systems because it lets the highest-priority workflows be implemented first."
          },
          {
            "question": "Can the system connect to a website, app, or external service?",
            "answer": "Yes, when suitable APIs or integration methods are available and the required connection is clearly defined."
          }
        ],
        "constraints": [
          "Improving an existing system depends on the quality of its current architecture and access to its code and data.",
          "External integrations require the necessary permissions, documentation, or an available API.",
          "Larger projects are usually easier to control when implementation is organized into clear phases."
        ],
        "relatedArticleTopics": [
          "When do you need custom software instead of a ready-made tool?",
          "How do you phase a large software system without losing the big picture?",
          "What is the difference between an admin dashboard and a complete operational system?"
        ],
        "cta": {
          "title": "Turn your workflow into a system",
          "description": "Describe the current process and where time or repetition accumulates, and we will organize the system scope.",
          "label": "Discuss your system"
        },
        "seo": {
          "primaryTopic": "custom software development",
          "searchIntent": "commercial",
          "title": "Custom Software & Systems Development | Wasl Tech",
          "description": "Custom systems, dashboards, APIs, databases, roles, and automation built around the way your business actually operates.",
          "ogTitle": "Custom Software Built Around Your Workflow | Wasl Tech",
          "ogDescription": "When ready-made tools are not enough, we build the logic, data, permissions, and integrations your workflow needs."
        }
      }
    }
  },
  {
    "id": "tech",
    "slug": "technical-solutions",
    "group": "systems-engineering",
    "image": "/assets/services/technical-solutions.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "الحلول التقنية",
        "subtitle": "نعالج أصل المشكلة قبل أن نضيف أداة جديدة.",
        "description": "نحلل الأنظمة والخطوات والبيانات التي يعتمد عليها عملك، ثم نرتب الربط أو الأتمتة أو التحسين الذي يزيل التكرار والتشتت ويجعل التشغيل أكثر وضوحًا.",
        "decision": {
          "problemNeed": "عندما تتوزع البيانات بين أدوات متعددة وتتكرر الخطوات اليدوية، تكون الأولوية لفهم عنق الزجاجة قبل شراء أداة أخرى.",
          "scopeSummary": "ربط الأنظمة والخدمات، أتمتة العمليات، تنظيم تدفق البيانات، لوحات متابعة، تكامل الويب والتطبيقات، وتحسين البنية الحالية."
        },
        "heroCards": [
          {
            "title": "نبدأ من سبب المشكلة",
            "description": "نفصل بين العرض والمشكلة الحقيقية حتى لا يتحول المشروع إلى أدوات إضافية بدون أثر واضح."
          },
          {
            "title": "نرتب ما هو متفرق",
            "description": "نربط الأنظمة والبيانات والخطوات عندما تكون موزعة بين أكثر من أداة أو فريق."
          }
        ],
        "audiences": [
          "الشركات",
          "الإدارات",
          "أصحاب المنصات",
          "مشاريع الخدمات",
          "فرق العمل",
          "المشاريع التي تحتاج مسارًا تقنيًا أوضح"
        ],
        "deliverables": [
          {
            "title": "ربط الأنظمة والخدمات",
            "description": "فهم الوضع الحالي وتحديد ما الذي يحتاج تحسينًا أو ربطًا أو أتمتة قبل اختيار الحل."
          },
          {
            "title": "أتمتة العمليات المتكررة",
            "description": "تنسيق تبادل البيانات والعمليات بين الأدوات أو المنصات عندما تسمح البنية بذلك."
          },
          {
            "title": "تنظيم تدفق البيانات",
            "description": "تقليل الأعمال اليدوية المتكررة وتحويلها إلى تدفقات أو إجراءات أوضح."
          },
          {
            "title": "لوحات متابعة",
            "description": "ترتيب حركة البيانات بين المصادر والأنظمة لتقليل التكرار والتشتت."
          },
          {
            "title": "تكامل الويب والتطبيقات",
            "description": "اختيار أو بناء أجزاء تقنية تخدم الحاجة الفعلية بدل إضافة طبقات غير ضرورية."
          },
          {
            "title": "تحسين البنية الحالية",
            "description": "تقسيم التحسينات إلى مراحل تبدأ بالأكثر أثرًا ثم تتوسع حسب الحاجة."
          },
          {
            "title": "حلول تدريجية تبدأ من عنق الزجاجة الحقيقي",
            "description": "تجميع المعلومات التي يحتاجها الفريق في شاشة أو مسار أوضح للمتابعة."
          }
        ],
        "process": [
          {
            "title": "نحدد أين تتعطل العملية",
            "description": "نراجع الخطوات والبيانات والأنظمة لنفهم أين يحدث التأخير أو التكرار أو الانقطاع."
          },
          {
            "title": "نقارن البدائل",
            "description": "نحدد هل الأنسب تطوير شيء جديد، ربط الموجود، أتمتة خطوة، أو تحسين البنية الحالية."
          },
          {
            "title": "ننفيذ أبسط حل مناسب",
            "description": "نطبق المسار الذي يحل المشكلة بأقل تعقيد ممكن مع الحفاظ على قابلية التطوير."
          },
          {
            "title": "نقيس نجاح الاستخدام",
            "description": "نراجع هل الحل فعلاً خفف المشكلة الأصلية قبل توسيعه أو إضافة طبقات جديدة."
          }
        ],
        "faq": [
          {
            "question": "هل الحل التقني يعني بناء نظام جديد؟",
            "answer": "ليس بالضرورة. أحيانًا يكون الربط أو تحسين النظام الحالي أو أتمتة جزء محدد أفضل من إعادة البناء."
          },
          {
            "question": "هل يمكن ربط أكثر من نظام معًا؟",
            "answer": "نعم إذا كانت الأنظمة تسمح بالتكامل وكان الربط يخدم سيناريو واضحًا داخل المشروع."
          },
          {
            "question": "هل يمكن البدء بحل صغير؟",
            "answer": "نعم، ويمكن أن يكون ذلك أفضل عندما نريد معالجة الجزء الأعلى أثرًا أولًا ثم التوسع بناءً على النتيجة."
          },
          {
            "question": "كيف تحددون الحل المناسب؟",
            "answer": "نبدأ من المشكلة والبيانات وطريقة العمل، ثم نقارن الخيارات قبل اتخاذ قرار التنفيذ."
          }
        ],
        "constraints": [
          "إمكانية الربط تعتمد على الأنظمة الحالية وما تسمح به من وصول وتكامل.",
          "بعض المشكلات تُحل بتحسين الموجود ولا تحتاج بناء نظام جديد.",
          "الأولوية تكون للحل الأقل تعقيدًا الذي يعالج المشكلة الفعلية قبل التوسع."
        ],
        "relatedArticleTopics": [
          "متى يكون ربط الأنظمة أفضل من استبدالها؟",
          "كيف تعرف أن عملية يدوية تستحق الأتمتة؟",
          "كيف تبدأ تحليل مشكلة تقنية قبل اختيار الأداة؟"
        ],
        "cta": {
          "title": "أوقف التكرار والتشتت",
          "description": "شاركنا أين تتكرر الخطوات أو تتوزع البيانات، ونبدأ بتحليل المشكلة قبل اختيار الأداة.",
          "label": "ناقش الحل التقني"
        },
        "seo": {
          "primaryTopic": "حلول تقنية وربط الأنظمة",
          "searchIntent": "commercial",
          "title": "حلول تقنية وربط وأتمتة الأنظمة | وصل تك",
          "description": "حلول تقنية تبدأ من المشكلة وتشمل ربط الأنظمة وأتمتة العمليات وتنظيم البيانات وتطوير المسار المناسب للمشروع.",
          "ogTitle": "حل تقني يبدأ من المشكلة | وصل تك",
          "ogDescription": "نحلل الوضع الحالي ثم نحدد إن كان الأنسب ربطًا أو أتمتة أو تطويرًا أو تحسينًا للنظام الموجود."
        }
      },
      "en": {
        "title": "Technical Solutions & Integrations",
        "subtitle": "Fix the root problem before adding another tool.",
        "description": "We analyze the systems, steps, and data your work depends on, then organize the integration, automation, or improvement that reduces repetition and fragmentation.",
        "decision": {
          "problemNeed": "When data is split across tools and manual steps keep repeating, the first priority is understanding the bottleneck before buying another tool.",
          "scopeSummary": "System and service integrations, automation, data flow, dashboards, web and app connections, and improvements to existing architecture."
        },
        "heroCards": [
          {
            "title": "Start with the cause, not the symptom",
            "description": "We separate the visible issue from the underlying problem before choosing a technical direction."
          },
          {
            "title": "Bring disconnected work together",
            "description": "We connect systems, data, and steps when they are split across tools or teams."
          }
        ],
        "audiences": [
          "Companies",
          "Operations teams",
          "Existing digital products",
          "Internal processes",
          "Growing businesses",
          "Projects with integration needs"
        ],
        "deliverables": [
          {
            "title": "Connect systems and services",
            "description": "Reviewing the current state to define what truly needs improvement, integration, or automation."
          },
          {
            "title": "Automate repetitive operations",
            "description": "Coordinating data and operations between tools or platforms when the architecture allows it."
          },
          {
            "title": "Organize data flow",
            "description": "Reducing repetitive manual work through clearer automated or assisted flows."
          },
          {
            "title": "Monitoring dashboards",
            "description": "Improving how data moves between sources and systems to reduce duplication and fragmentation."
          },
          {
            "title": "Web and app integration",
            "description": "Choosing or building focused components that solve the actual need without unnecessary layers."
          },
          {
            "title": "Improve existing architecture",
            "description": "Organizing technical improvements into stages that start with the highest-impact work."
          },
          {
            "title": "Incremental solutions starting from the real bottleneck",
            "description": "Bringing important operational information into clearer dashboards or workflows."
          }
        ],
        "process": [
          {
            "title": "Find where the workflow breaks",
            "description": "We review the steps, systems, and data to identify where delay, repetition, or disconnection happens."
          },
          {
            "title": "Compare the options",
            "description": "We decide whether the right move is integration, automation, improvement, or new development."
          },
          {
            "title": "Implement the simplest suitable solution",
            "description": "We apply the path that solves the problem with the least unnecessary complexity while keeping room to grow."
          },
          {
            "title": "Review the result in use",
            "description": "We check whether the solution actually reduced the original problem before expanding it further."
          }
        ],
        "faq": [
          {
            "question": "Does a technical solution always mean building a new system?",
            "answer": "No. Sometimes improving, integrating, or automating part of what already exists is the better solution."
          },
          {
            "question": "Can multiple systems be connected?",
            "answer": "Yes, when the systems support integration and the connection serves a clear operational scenario."
          },
          {
            "question": "Can we start with a small improvement?",
            "answer": "Yes. Starting with the highest-impact part can be a better way to prove value before expanding."
          },
          {
            "question": "How do you decide which solution is right?",
            "answer": "We start with the problem, data, and workflow, then compare the available options before choosing an implementation path."
          }
        ],
        "constraints": [
          "Integration depends on what the current systems allow in terms of access and connectivity.",
          "Some problems are better solved by improving what already exists rather than replacing it.",
          "We prioritize the least complex solution that addresses the actual problem before adding more layers."
        ],
        "relatedArticleTopics": [
          "When is integration better than replacing an existing system?",
          "How do you know when a manual process is worth automating?",
          "How should you analyze a technical problem before choosing a tool?"
        ],
        "cta": {
          "title": "Stop the repetition and fragmentation",
          "description": "Tell us where steps repeat or data gets split, and we will start by analyzing the problem before choosing the tool.",
          "label": "Discuss the technical solution"
        },
        "seo": {
          "primaryTopic": "technical solutions and system integration",
          "searchIntent": "commercial",
          "title": "Technical Solutions, Integration & Automation | Wasl Tech",
          "description": "Technical solutions built around the actual problem, including system integration, workflow automation, data organization, and targeted improvements.",
          "ogTitle": "Technical Solutions That Start With the Problem | Wasl Tech",
          "ogDescription": "We review the current setup and decide whether integration, automation, improvement, or focused development is the right path."
        }
      }
    }
  },
  {
    "id": "profiles",
    "slug": "company-profiles",
    "group": "brand-presence",
    "image": "/assets/services/company-profiles.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "تصميم البروفايلات",
        "subtitle": "اجعل شركتك مفهومة ومقنعة في أول قراءة.",
        "description": "نأخذ معلوماتك وخدماتك وأعمالك ونحوّلها إلى ملف تعريفي مرتب يساعد العملاء والشركاء على فهم من أنت، ماذا تقدم، ولماذا يثقون بك.",
        "decision": {
          "problemNeed": "عندما تكون معلومات الشركة موجودة لكنها مبعثرة أو طويلة، يصبح تقديمها للعميل أضعف من قيمة العمل نفسه.",
          "scopeSummary": "ترتيب الرسالة والمحتوى، التحرير عند الحاجة، هيكلة الخدمات والأعمال، تصميم متوافق مع الهوية، وملف جاهز للمشاركة والطباعة."
        },
        "heroCards": [
          {
            "title": "قصة الشركة في تسلسل واضح",
            "description": "نحوّل المعلومات المتفرقة إلى قصة تعريفية تساعد القارئ على فهم الشركة وخدماتها بسرعة."
          },
          {
            "title": "إخراج يكمّل الهوية",
            "description": "نعالج الصور والخطوط والمساحات والتسلسل البصري بحيث يبدو البروفايل جزءًا من العلامة نفسها."
          }
        ],
        "audiences": [
          "الشركات",
          "المؤسسات",
          "المكاتب",
          "مقدمو الخدمات",
          "العلامات التجارية",
          "المشاريع الجديدة"
        ],
        "deliverables": [
          {
            "title": "ترتيب الرسالة والمحتوى",
            "description": "بداية تعطي القارئ فكرة واضحة عن الشركة قبل الدخول في التفاصيل."
          },
          {
            "title": "كتابة وتحرير المحتوى عند الحاجة",
            "description": "صياغة وترتيب نبذة الشركة والرؤية والمعلومات الأساسية بصورة مختصرة ومفهومة."
          },
          {
            "title": "هيكلة الخدمات والأعمال",
            "description": "تقديم الخدمات بطريقة تساعد القارئ على فهم الفرق والقيمة بدل قائمة أسماء فقط."
          },
          {
            "title": "تصميم متوافق مع الهوية",
            "description": "إبراز المشاريع أو النماذج المناسبة عندما تكون متاحة وتخدم الرسالة."
          },
          {
            "title": "ملف جاهز للمشاركة والطباعة والعرض",
            "description": "اختصار التكرار وترتيب النصوص والصور ضمن تسلسل مريح للقراءة."
          }
        ],
        "process": [
          {
            "title": "نجمع المادة",
            "description": "نراجع ما هو متاح من نصوص وصور وهوية وأعمال ونحدد ما الذي يحتاج إعادة ترتيب أو صياغة."
          },
          {
            "title": "نبني التسلسل",
            "description": "نحدد ما الذي يجب أن يعرفه القارئ أولًا وما الذي يمكن اختصاره أو نقله لمرحلة لاحقة."
          },
          {
            "title": "نكتب ونصمم",
            "description": "نضبط المحتوى ثم نبني الصفحات بصريًا بحيث تعمل الكتابة والتصميم كقطعة واحدة."
          },
          {
            "title": "نراجع ونجهز النسخ",
            "description": "نراجع القراءة والإخراج ثم نجهز النسخة الرقمية ونسخة الطباعة حسب النطاق."
          }
        ],
        "faq": [
          {
            "question": "هل يمكن العمل على محتوى موجود مسبقًا؟",
            "answer": "نعم، نراجعه ونختصره ونعيد ترتيبه عند الحاجة بدل إعادة استخدامه كما هو."
          },
          {
            "question": "هل تلتزمون بالهوية الحالية للشركة؟",
            "answer": "نعم، إذا كانت الهوية معتمدة نبني البروفايل داخل نظامها البصري بدل خلق أسلوب منفصل."
          },
          {
            "question": "هل يمكن تجهيز نسخة للطباعة والمشاركة الرقمية؟",
            "answer": "نعم، يمكن تجهيز إخراج مناسب لكل استخدام ضمن نطاق التسليم."
          },
          {
            "question": "هل تساعدون في كتابة المحتوى؟",
            "answer": "نعم، يمكننا تحسين وترتيب الصياغة بالاعتماد على الحقائق والمعلومات التي تخص الشركة."
          }
        ],
        "constraints": [
          "جودة البروفايل تعتمد على توفر معلومات وصور وهوية يمكن البناء عليها.",
          "نسخة الطباعة تحتاج مواصفات إخراج تناسب المقاس والاستخدام النهائي.",
          "تسليم ملفات المصدر أو النسخ القابلة للتعديل يحدد ضمن نطاق المشروع."
        ],
        "relatedArticleTopics": [
          "ما الذي يجب أن يحتويه بروفايل الشركة؟",
          "كيف ترتب خدمات شركتك داخل البروفايل؟",
          "ما الفرق بين بروفايل العرض ونسخة الطباعة؟"
        ],
        "cta": {
          "title": "قدّم شركتك كما تستحق",
          "description": "أرسل المعلومات الحالية وما تريد أن يفهمه القارئ أولًا، ونرتب معك البروفايل.",
          "label": "صمّم بروفايلك"
        },
        "seo": {
          "primaryTopic": "تصميم بروفايل شركة",
          "searchIntent": "commercial",
          "title": "تصميم بروفايل شركات احترافي | وصل تك",
          "description": "تصميم بروفايل شركة يجمع المحتوى والخدمات والأعمال والهوية في ملف واضح مناسب للمشاركة الرقمية والطباعة.",
          "ogTitle": "بروفايل يشرح شركتك بوضوح | وصل تك",
          "ogDescription": "نرتب قصة الشركة ومحتواها وهويتها في بروفايل سهل القراءة وجاهز للاستخدام الرقمي أو المطبوع."
        }
      },
      "en": {
        "title": "Company Profile Design",
        "subtitle": "Make your company clear and convincing from the first read.",
        "description": "We turn your information, services, and work into a structured company profile that helps clients and partners understand who you are, what you offer, and why they should trust the business.",
        "decision": {
          "problemNeed": "When company information exists but is scattered or too long, the presentation becomes weaker than the work itself.",
          "scopeSummary": "Message and content structure, editing when needed, services and work organization, brand-aligned design, and a shareable printable presentation file."
        },
        "heroCards": [
          {
            "title": "The company story in a clear sequence",
            "description": "We turn scattered information into a structured narrative that helps the reader understand the business and its services quickly."
          },
          {
            "title": "A presentation that belongs to the brand",
            "description": "Imagery, typography, spacing, and hierarchy are treated as part of the existing identity rather than a separate visual style."
          }
        ],
        "audiences": [
          "Companies",
          "Organizations",
          "Professional offices",
          "Service providers",
          "Brands",
          "New businesses"
        ],
        "deliverables": [
          {
            "title": "Organize message and content",
            "description": "A clear first impression that introduces the company before the detailed sections begin."
          },
          {
            "title": "Write and edit content when needed",
            "description": "Writing and organizing the company overview, vision, and key information in a concise format."
          },
          {
            "title": "Structure services and work",
            "description": "Presenting services in a way that explains value and distinction instead of listing names only."
          },
          {
            "title": "Design aligned with the identity",
            "description": "Highlighting relevant projects or examples when they are available and support the story."
          },
          {
            "title": "File ready for sharing, print, and presentation",
            "description": "Reducing repetition and arranging text and images into a comfortable reading flow."
          }
        ],
        "process": [
          {
            "title": "Gather the material",
            "description": "We review available content, imagery, brand assets, and work samples to identify what needs rewriting or restructuring."
          },
          {
            "title": "Build the sequence",
            "description": "We decide what the reader should know first and what can be shortened or moved later."
          },
          {
            "title": "Write & design",
            "description": "We refine the content and build the pages so writing and design work as one presentation."
          },
          {
            "title": "Review & prepare outputs",
            "description": "We review the reading flow and layout, then prepare digital and print versions according to scope."
          }
        ],
        "faq": [
          {
            "question": "Can you work with content we already have?",
            "answer": "Yes. We review, shorten, and reorganize existing content instead of simply reusing it unchanged."
          },
          {
            "question": "Can you follow our existing brand identity?",
            "answer": "Yes. When the identity is already approved, the profile is built within that visual system."
          },
          {
            "question": "Can you prepare both print and digital versions?",
            "answer": "Yes. Outputs can be prepared for each use within the agreed delivery scope."
          },
          {
            "question": "Can you help write the content?",
            "answer": "Yes. We can improve and organize the writing based on the company's verified information and facts."
          }
        ],
        "constraints": [
          "The quality of the profile depends on the information, imagery, and brand material available to build from.",
          "Print output requires specifications that fit the final size and production use.",
          "Editable or source-file delivery is defined within the agreed project scope."
        ],
        "relatedArticleTopics": [
          "What should a company profile include?",
          "How should company services be organized inside a profile?",
          "What is the difference between a digital profile and a print-ready version?"
        ],
        "cta": {
          "title": "Present your company the way it deserves",
          "description": "Send the current information and what readers should understand first, and we will organize the profile around that.",
          "label": "Design your company profile"
        },
        "seo": {
          "primaryTopic": "company profile design",
          "searchIntent": "commercial",
          "title": "Company Profile Design | Wasl Tech",
          "description": "Company profile design that brings the company story, services, work, and brand identity into a clear document for digital sharing and print.",
          "ogTitle": "A Company Profile That Explains the Business Clearly | Wasl Tech",
          "ogDescription": "We organize the company story, content, and identity into a profile that is easy to read and ready for digital or print use."
        }
      }
    }
  },
  {
    "id": "design",
    "slug": "brand-design",
    "group": "brand-presence",
    "image": "/assets/services/brand-design.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "الهوية البصرية والتصميم الجرافيكي",
        "subtitle": "هوية تجعل مشروعك معروفًا قبل أن تشرح ما تفعله.",
        "description": "نبني هوية بصرية تعكس شخصية مشروعك، وتمنح فريقك نظامًا واضحًا لاستخدام الشعار والألوان والخطوط والتطبيقات في كل نقطة تواصل.",
        "decision": {
          "problemNeed": "عندما يظهر المشروع كل مرة بشكل مختلف، تصبح العلامة أصعب في التذكر والتطبيق ويضيع جزء من قيمتها في التفاصيل.",
          "scopeSummary": "استراتيجية واتجاه بصري، شعار، ألوان وخطوط، قواعد الاستخدام، تطبيقات رقمية ومطبوعة، وقوالب ودليل هوية حسب النطاق."
        },
        "heroCards": [
          {
            "title": "نظام بصري له منطق",
            "description": "لا نبدأ من شكل الشعار فقط؛ نحدد كيف يجب أن تبدو العلامة وتُعرف عبر نقاط التواصل المختلفة."
          },
          {
            "title": "اتساق يسهل تكراره",
            "description": "الألوان والخطوط والقوالب والتطبيقات تعمل معًا حتى لا يبدأ كل تصميم من الصفر."
          }
        ],
        "audiences": [
          "المشاريع الجديدة",
          "الشركات",
          "المتاجر",
          "الصفحات التجارية",
          "المبادرات",
          "تجديد الهوية"
        ],
        "deliverables": [
          {
            "title": "استراتيجية واتجاه بصري",
            "description": "بناء علامة بصرية قابلة للاستخدام وتناسب شخصية المشروع وسياق ظهوره."
          },
          {
            "title": "شعار ونظام ألوان وخطوط",
            "description": "تحديد نظام لوني وتايبوغرافي يكوّن أساسًا متسقًا للهوية."
          },
          {
            "title": "قواعد استخدام الهوية",
            "description": "تطبيق النظام البصري على المواد والقنوات التي يحتاجها المشروع فعليًا."
          },
          {
            "title": "تطبيقات رقمية ومطبوعة",
            "description": "قوالب ومنشورات تحافظ على شخصية العلامة بدل الاعتماد على شكل مختلف في كل مرة."
          },
          {
            "title": "قوالب جاهزة للاستخدام",
            "description": "تصميم مواد حملات تحمل الرسالة والهوية بوضوح ضمن المساحات المطلوبة."
          },
          {
            "title": "دليل هوية بحسب نطاق المشروع",
            "description": "نظام قوالب يساعد الفريق على الحفاظ على الاتساق في الاستخدام اليومي."
          }
        ],
        "process": [
          {
            "title": "نفهم شخصية العلامة",
            "description": "نحدد طبيعة المشروع والجمهور والسوق والانطباع الذي يجب أن تبنيه الهوية."
          },
          {
            "title": "نختار الاتجاه",
            "description": "نحوّل المعطيات إلى اتجاه بصري واضح قبل الدخول في التفاصيل والتطبيقات."
          },
          {
            "title": "نبني النظام",
            "description": "نصمم الشعار والألوان والخطوط والعناصر والقوالب داخل نظام واحد متماسك."
          },
          {
            "title": "نجهز الاستخدام",
            "description": "نسلم الملفات والتطبيقات والدليل بطريقة تجعل الهوية قابلة للتطبيق بعد انتهاء المشروع."
          }
        ],
        "faq": [
          {
            "question": "هل يمكن تصميم شعار فقط؟",
            "answer": "نعم، ويمكن أيضًا توسيع النطاق إلى هوية متكاملة إذا كان المشروع يحتاج نظامًا بصريًا أوسع من الشعار."
          },
          {
            "question": "هل تشمل الخدمة ملفات قابلة للتعديل؟",
            "answer": "يعتمد ذلك على نطاق التسليم المتفق عليه؛ نحدد منذ البداية ما الذي سيُسلّم كملفات مصدر وما الذي سيُسلّم كنسخ نهائية."
          },
          {
            "question": "هل يمكن تجهيز قوالب للسوشيال ميديا؟",
            "answer": "نعم، ويمكن بناؤها كجزء من النظام البصري حتى تحافظ المنشورات على نفس الشخصية."
          },
          {
            "question": "هل تختارون الألوان والخطوط؟",
            "answer": "نعم، يتم اختيارها ضمن بناء الهوية وبما يناسب شخصية المشروع والجمهور والاستخدامات المطلوبة."
          }
        ],
        "constraints": [
          "نطاق الهوية يحدد التطبيقات المطلوبة بدل افتراض أن كل مشروع يحتاج نفس الحزمة.",
          "ملفات المصدر والتطبيقات النهائية تُحدد ضمن نطاق التسليم.",
          "الطباعة والإنتاج الفعلي منفصلان عن تجهيز التصاميم ما لم يشملهما الاتفاق."
        ],
        "relatedArticleTopics": [
          "متى تحتاج هوية بصرية كاملة وليس شعارًا فقط؟",
          "كيف تختار تطبيقات الهوية التي يحتاجها مشروعك فعلًا؟",
          "لماذا تحتاج العلامة إلى نظام ألوان وخطوط واضح؟"
        ],
        "cta": {
          "title": "ابنِ علامة يمكن تمييزها",
          "description": "شاركنا طبيعة المشروع والجمهور والانطباع الذي تريد بناءه، ونرتب معك نطاق الهوية.",
          "label": "ابدأ هويتك"
        },
        "seo": {
          "primaryTopic": "تصميم هوية بصرية",
          "searchIntent": "commercial",
          "title": "تصميم هوية بصرية وشعار | وصل تك",
          "description": "هوية بصرية تشمل الشعار والألوان والخطوط والقوالب والتطبيقات ضمن نظام متناسق يسهل استخدامه عبر نقاط التواصل.",
          "ogTitle": "هوية بصرية تعمل كنظام واحد | وصل تك",
          "ogDescription": "نبني الشعار والعناصر البصرية والقوالب داخل نظام واضح يساعد علامتك على الظهور بصورة متسقة."
        }
      },
      "en": {
        "title": "Brand Identity & Graphic Design",
        "subtitle": "A brand identity that is recognizable before you explain what you do.",
        "description": "We build visual identities that reflect the project and give the team a clear system for using the logo, colors, typography, and applications across touchpoints.",
        "decision": {
          "problemNeed": "When the project looks different every time, the brand becomes harder to remember and harder for the team to apply consistently.",
          "scopeSummary": "Visual direction, logo, color and type system, usage rules, digital and print applications, templates, and a brand guide by scope."
        },
        "heroCards": [
          {
            "title": "A visual system with a reason behind it",
            "description": "We do not start with the logo shape alone. We define how the brand should look and be recognized across its main touchpoints."
          },
          {
            "title": "Consistency that is easier to maintain",
            "description": "Colors, typography, templates, and applications work together so every new design does not start from zero."
          }
        ],
        "audiences": [
          "New businesses",
          "Companies",
          "E-commerce brands",
          "Commercial pages",
          "Initiatives",
          "Brand refresh projects"
        ],
        "deliverables": [
          {
            "title": "Visual strategy and direction",
            "description": "A usable visual mark that fits the personality and context of the brand."
          },
          {
            "title": "Logo, color, and typography system",
            "description": "A visual foundation that defines how color and type work consistently across the identity."
          },
          {
            "title": "Brand usage rules",
            "description": "Applying the visual system to the materials and channels the project actually needs."
          },
          {
            "title": "Digital and print applications",
            "description": "Templates and post systems that maintain brand character across recurring content."
          },
          {
            "title": "Ready-to-use templates",
            "description": "Promotional materials that carry the message and identity clearly across required formats."
          },
          {
            "title": "Brand guideline by project scope",
            "description": "A template system that helps the team maintain consistency in day-to-day use."
          }
        ],
        "process": [
          {
            "title": "Understand the brand",
            "description": "We define the project, audience, market, and the impression the identity needs to create."
          },
          {
            "title": "Choose the direction",
            "description": "We turn the inputs into a clear visual direction before expanding into detailed applications."
          },
          {
            "title": "Build the system",
            "description": "We design the logo, colors, typography, visual elements, and templates as one connected identity."
          },
          {
            "title": "Prepare it for use",
            "description": "We deliver the files, applications, and guidance in a way that makes the identity usable after the project ends."
          }
        ],
        "faq": [
          {
            "question": "Can you design only a logo?",
            "answer": "Yes. The scope can also expand into a complete identity when the brand needs a broader visual system."
          },
          {
            "question": "Do you deliver editable files?",
            "answer": "That depends on the agreed delivery scope. We define which source files and final formats are included before work begins."
          },
          {
            "question": "Can you create social media templates?",
            "answer": "Yes. They can be designed as part of the identity system so recurring content stays visually consistent."
          },
          {
            "question": "Do you help choose the brand colors and typography?",
            "answer": "Yes. They are selected as part of the identity system based on the project, audience, and intended use."
          }
        ],
        "constraints": [
          "The identity scope should be based on the applications the project actually needs rather than a fixed package.",
          "Source files and final deliverables are defined within the agreed scope.",
          "Physical printing or production is separate from preparing the design files unless explicitly included."
        ],
        "relatedArticleTopics": [
          "When do you need a full brand identity instead of only a logo?",
          "How do you choose the brand applications your business actually needs?",
          "Why does a brand need a clear color and typography system?"
        ],
        "cta": {
          "title": "Build a recognizable brand",
          "description": "Tell us about the project, audience, and impression you want to build, and we will shape the identity scope.",
          "label": "Start your identity"
        },
        "seo": {
          "primaryTopic": "brand identity design",
          "searchIntent": "commercial",
          "title": "Brand Identity & Logo Design | Wasl Tech",
          "description": "Brand identity design covering logo, colors, typography, templates, and applications as one consistent visual system.",
          "ogTitle": "Brand Identity Built as a Usable System | Wasl Tech",
          "ogDescription": "We connect logo, visual language, and reusable applications into a brand system that stays consistent across touchpoints."
        }
      }
    }
  },
  {
    "id": "marketing",
    "slug": "digital-marketing",
    "group": "brand-presence",
    "image": "/assets/services/digital-marketing.webp",
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "التسويق الرقمي وإدارة المحتوى",
        "subtitle": "لا تنشر أكثر؛ قل الشيء الصحيح للناس الصحيحة.",
        "description": "نرتب رسالتك ومحتواك وحملاتك بحيث يعرف جمهورك ماذا تقدم، لمن، ولماذا يبدأ معك — من الاستراتيجية والكتابة والتصميم إلى النشر والقياس حسب النطاق.",
        "decision": {
          "problemNeed": "إذا كنت تنشر باستمرار لكن الجمهور لا يفهم عرضك أو الفرق الذي تقدمه، فالمشكلة في الرسالة والمسار لا في عدد المنشورات وحده.",
          "scopeSummary": "استراتيجية الرسائل والمحتوى، الكتابة، إدارة المنصات، تصميم المنشورات والإعلانات، الريلز والاستوريات، الحملات المدفوعة، وقراءة المؤشرات."
        },
        "heroCards": [
          {
            "title": "رسالة يفهمها الجمهور",
            "description": "نرتب ما تقوله العلامة وكيف تقوله حتى يكون المحتوى مرتبطًا بما يهم العميل فعلًا."
          },
          {
            "title": "حضور له إيقاع واتساق",
            "description": "الخطة والكتابة والتصميم والنشر تعمل معًا بدل ظهور الصفحة كمنشورات منفصلة بلا اتجاه."
          }
        ],
        "audiences": [
          "الصفحات التجارية",
          "المتاجر",
          "أصحاب الخدمات",
          "العلامات الناشئة",
          "المشاريع",
          "الشركات"
        ],
        "deliverables": [
          {
            "title": "استراتيجية الرسائل والمحتوى",
            "description": "تحديد الموضوعات والمحاور والإيقاع المناسب للنشر بناءً على الخدمة والجمهور والهدف."
          },
          {
            "title": "كتابة المحتوى التسويقي",
            "description": "صياغة منشورات ورسائل واضحة تتحدث بلغة العلامة وتوصل الفكرة بدون حشو."
          },
          {
            "title": "إدارة منصات التواصل",
            "description": "تحويل الرسالة إلى محتوى بصري متسق مع الهوية ومناسب للمنصة."
          },
          {
            "title": "تصميم المنشورات والإعلانات",
            "description": "تنظيم النشر والجدولة والمتابعة وفق النطاق المتفق عليه."
          },
          {
            "title": "ريلز واستوريات تخدم الرسالة",
            "description": "إعداد وإدارة الحملات عند الحاجة ضمن الهدف والميزانية والجمهور المحدد."
          },
          {
            "title": "حملات مدفوعة حسب الهدف والميزانية",
            "description": "مراجعة المحتوى وطريقة تقديمه لزيادة وضوح الرسالة والوصول المناسب."
          },
          {
            "title": "قراءة المؤشرات وتحسين الخطة",
            "description": "أفكار وصيغ قصيرة تخدم الرسالة بدل إنتاج فيديو لمجرد زيادة عدد المنشورات."
          }
        ],
        "process": [
          {
            "title": "نفهم العرض والجمهور",
            "description": "نحدد ما الذي نريد أن يعرفه الجمهور وما الذي يمنعه من الفهم أو التفاعل الآن."
          },
          {
            "title": "نبني الرسائل والخطة",
            "description": "نرتب المحاور ونبرة الكتابة وأشكال المحتوى وإيقاع النشر قبل الإنتاج."
          },
          {
            "title": "ننتج وننشر",
            "description": "نكتب ونصمم ونجهز المحتوى وفق الخطة وبصورة تحافظ على اتساق العلامة."
          },
          {
            "title": "نراجع ونتعلم",
            "description": "نراجع المؤشرات والتفاعل ونعدل الرسائل أو الأنواع أو الإيقاع عندما تظهر حاجة لذلك."
          }
        ],
        "faq": [
          {
            "question": "هل يمكنكم إدارة المحتوى كاملًا؟",
            "answer": "نعم، يمكن أن يشمل النطاق التخطيط والكتابة والتصميم والجدولة والنشر حسب الاتفاق."
          },
          {
            "question": "هل تكتبون المحتوى أم التصميم فقط؟",
            "answer": "يمكننا تولي الكتابة والتصميم معًا حتى تعمل الرسالة والشكل ضمن اتجاه واحد."
          },
          {
            "question": "هل تشمل الخدمة الإعلانات المدفوعة؟",
            "answer": "يمكن إضافتها عند الحاجة ضمن نطاق منفصل أو متكامل حسب الهدف والميزانية والمنصة."
          },
          {
            "question": "هل أستطيع طلب خطة محتوى فقط؟",
            "answer": "نعم، يمكن أن يكون النطاق خطة ورسائل ومحاور واضحة بدون إدارة مستمرة للصفحات."
          }
        ],
        "constraints": [
          "الحملات المدفوعة ترتبط بميزانية الإعلان والمنصة والجمهور المستهدف.",
          "نطاق إدارة الصفحات وعدد المنصات وإيقاع النشر يحدد ضمن الاتفاق.",
          "لا نعد بنتيجة رقمية ثابتة؛ تتم المراجعة بناءً على المؤشرات المتاحة وأداء المحتوى والحملة."
        ],
        "relatedArticleTopics": [
          "كيف تبني خطة محتوى مرتبطة بهدف مشروعك؟",
          "متى تحتاج إدارة محتوى كاملة ومتى تكفيك خطة؟",
          "كيف تفرق بين المحتوى العضوي والحملة المدفوعة؟"
        ],
        "cta": {
          "title": "حوّل حضورك إلى سبب للاختيار",
          "description": "شاركنا الجمهور والعرض والقنوات الحالية، ونرتب الرسالة والخطة حسب الهدف والنطاق.",
          "label": "طوّر تسويقك"
        },
        "seo": {
          "primaryTopic": "تسويق رقمي وإدارة محتوى",
          "searchIntent": "commercial",
          "title": "التسويق الرقمي وإدارة المحتوى | وصل تك",
          "description": "تخطيط وكتابة وتصميم وإدارة محتوى وحملات رقمية تساعد مشروعك على تقديم رسالته بوضوح واتساق.",
          "ogTitle": "محتوى وتسويق برسالة أوضح | وصل تك",
          "ogDescription": "نرتب الرسائل والخطة والتصميم والنشر حول ما يحتاج جمهورك أن يفهمه عن مشروعك."
        }
      },
      "en": {
        "title": "Digital Marketing & Content Management",
        "subtitle": "Do not publish more; say the right thing to the right people.",
        "description": "We organize your message, content, and campaigns so the audience understands what you offer, who it is for, and why they should start with you—from strategy and writing to design, publishing, and measurement by scope.",
        "decision": {
          "problemNeed": "If you publish consistently but the audience still does not understand the offer or difference, the problem may be the message and path rather than the number of posts.",
          "scopeSummary": "Messaging and content strategy, copywriting, social management, post and ad design, reels and stories, paid campaigns, and performance review."
        },
        "heroCards": [
          {
            "title": "A message the audience can understand",
            "description": "We organize what the brand says and how it says it so the content connects to what customers actually care about."
          },
          {
            "title": "A presence with rhythm and consistency",
            "description": "Planning, writing, design, and publishing work together instead of appearing as unrelated posts with no direction."
          }
        ],
        "audiences": [
          "Commercial pages",
          "E-commerce businesses",
          "Service businesses",
          "Emerging brands",
          "Projects",
          "Companies"
        ],
        "deliverables": [
          {
            "title": "Messaging and content strategy",
            "description": "Defining content themes, topics, and publishing rhythm around the offer, audience, and objective."
          },
          {
            "title": "Marketing copywriting",
            "description": "Clear posts and messages written in the voice of the brand without unnecessary filler."
          },
          {
            "title": "Social media management",
            "description": "Turning the message into visual content that fits the brand and the platform."
          },
          {
            "title": "Post and ad design",
            "description": "Organizing scheduling, publishing, and follow-up according to the agreed scope."
          },
          {
            "title": "Reels and stories that serve the message",
            "description": "Planning and managing campaigns when needed, based on objective, budget, audience, and platform."
          },
          {
            "title": "Paid campaigns by goal and budget",
            "description": "Reviewing how content is presented to make the message clearer and improve relevant reach."
          },
          {
            "title": "Review metrics and improve the plan",
            "description": "Ideas and formats for reels and stories that serve the message instead of adding video for volume alone."
          }
        ],
        "process": [
          {
            "title": "Understand the offer and audience",
            "description": "We define what the audience needs to understand and what is currently blocking clarity or engagement."
          },
          {
            "title": "Build the messages and plan",
            "description": "We organize content pillars, writing tone, formats, and publishing rhythm before production."
          },
          {
            "title": "Produce & publish",
            "description": "We write, design, and prepare content according to the plan while maintaining brand consistency."
          },
          {
            "title": "Review & improve",
            "description": "We review available performance signals and adjust messaging, formats, or rhythm when needed."
          }
        ],
        "faq": [
          {
            "question": "Can you manage our content end to end?",
            "answer": "Yes. The scope can include planning, writing, design, scheduling, and publishing depending on the agreement."
          },
          {
            "question": "Do you write the content or only design it?",
            "answer": "We can handle writing and design together so the message and visual presentation work in one direction."
          },
          {
            "question": "Does the service include paid advertising?",
            "answer": "Paid campaigns can be included when needed, either as a separate scope or as part of a wider engagement based on the objective and budget."
          },
          {
            "question": "Can I request a content plan only?",
            "answer": "Yes. The scope can be limited to a clear plan, messaging, and content pillars without ongoing page management."
          }
        ],
        "constraints": [
          "Paid campaigns depend on the advertising budget, selected platform, and target audience.",
          "The number of platforms, management scope, and publishing rhythm are defined in the agreement.",
          "We do not promise a fixed numeric result; performance is reviewed based on available indicators and how the content and campaign perform."
        ],
        "relatedArticleTopics": [
          "How do you build a content plan around a business objective?",
          "When do you need full content management and when is a plan enough?",
          "What is the difference between organic content and a paid campaign?"
        ],
        "cta": {
          "title": "Turn your presence into a reason to choose you",
          "description": "Tell us about the audience, offer, and current channels, and we will organize the message and plan around the goal.",
          "label": "Improve your marketing"
        },
        "seo": {
          "primaryTopic": "digital marketing and content management",
          "searchIntent": "commercial",
          "title": "Digital Marketing & Content Management | Wasl Tech",
          "description": "Content planning, writing, design, management, and digital campaigns that help your business communicate with more clarity and consistency.",
          "ogTitle": "Content and Marketing With a Clearer Message | Wasl Tech",
          "ogDescription": "We organize messaging, planning, design, and publishing around what your audience needs to understand about the business."
        }
      }
    }
  }
];

const serviceProofState = Object.freeze({
  web: CONTENT_STATE.READY,
  app: CONTENT_STATE.READY,
  store: CONTENT_STATE.READY,
  programming: CONTENT_STATE.READY,
  tech: CONTENT_STATE.NOT_APPLICABLE,
  profiles: CONTENT_STATE.NOT_APPLICABLE,
  design: CONTENT_STATE.READY,
  marketing: CONTENT_STATE.READY
});

function phase2bServiceRecord(service) {
  return Object.freeze({
    ...service,
    contentState: CONTENT_STATE.READY,
    fieldState: createFieldState(serviceFieldKeys, {
      identity: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      problemNeed: CONTENT_STATE.READY,
      audiences: CONTENT_STATE.READY,
      scopeBoundaries: CONTENT_STATE.READY,
      deliverables: CONTENT_STATE.READY,
      capabilitiesIntegrations: CONTENT_STATE.READY,
      process: CONTENT_STATE.READY,
      faq: CONTENT_STATE.READY,
      proof: serviceProofState[service.id] ?? CONTENT_STATE.CONTENT_REQUIRED,
      constraintsDependencies: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      relatedArticles: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    }),
    evidenceSources: Object.freeze([
      "content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md",
      "main:js/services-data.js",
      `main:${service.image}`
    ])
  });
}

export const services = Object.freeze(serviceRecords.map(phase2bServiceRecord));

export function getServiceById(id) {
  return services.find((service) => service.id === id) ?? null;
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null;
}

export function getServicesByGroup(groupId) {
  return services.filter((service) => service.group === groupId);
}
