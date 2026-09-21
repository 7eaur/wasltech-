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
        "title": "الأنظمة والحلول"
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
    "image": "/assets/works/project_1.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "تطوير المواقع الإلكترونية",
        "subtitle": "موقع يعرّف بمشروعك ويقود الزائر للخطوة التالية",
        "description": "نبني مواقع تجمع بين المحتوى الواضح، تجربة الاستخدام، الأداء، والهوية؛ من الصفحات التعريفية إلى المواقع التي تحتاج إدارة محتوى وربطًا بالخدمات.",
        "decision": {
          "problemNeed": "عندما يكون لديك مشروع جيد لكن موقعه لا يشرح قيمته بسرعة أو لا يقود الزائر إلى خطوة واضحة.",
          "scopeSummary": "نرتب المحتوى والصفحات والتجربة والتطوير والإطلاق ضمن موقع متجاوب، مع إدارة محتوى أو تكاملات عند الحاجة."
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
            "title": "واجهة وهوية للموقع",
            "description": "تصميم بصري منسجم مع هوية المشروع ويعطي المحتوى ترتيبًا واضحًا من أول شاشة."
          },
          {
            "title": "تطوير متجاوب",
            "description": "تنفيذ يكيّف الصفحات والعناصر مع أحجام الشاشات الأساسية دون كسر التجربة."
          },
          {
            "title": "هيكلة الصفحات",
            "description": "ترتيب الرئيسية والخدمات ومن نحن والصفحات الأخرى حول رحلة الزائر وهدف الموقع."
          },
          {
            "title": "نماذج تواصل",
            "description": "نماذج بسيطة تجمع المعلومات المطلوبة وتوجهها إلى قناة التواصل المناسبة."
          },
          {
            "title": "تجربة استخدام",
            "description": "تنقل واضح وأزرار وخطوات مفهومة تقلل التشتت وتساعد الزائر على الوصول لما يحتاجه."
          },
          {
            "title": "تحسين الأداء",
            "description": "تنظيم الأصول وطريقة التحميل لتقليل الانتظار وتحسين تجربة التصفح."
          },
          {
            "title": "الدومين والاستضافة",
            "description": "تهيئة وربط الموقع بالنطاق والاستضافة وتجهيزه للعمل عند الإطلاق."
          },
          {
            "title": "إدارة المحتوى عند الحاجة",
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
          "title": "عندك مشروع يحتاج موقعًا يليق به؟",
          "description": "شاركنا هدف الموقع وما الذي تريد من الزائر أن يفعله، ونرتب معك النطاق المناسب.",
          "label": "ابدأ موقعك"
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
        "subtitle": "A website that explains your business and guides visitors to the next step",
        "description": "We build websites that bring clear content, user experience, performance, and brand identity together—from focused company sites to platforms that need content management and service integrations.",
        "decision": {
          "problemNeed": "When you have a strong business but the website does not explain its value quickly or guide visitors toward a clear action.",
          "scopeSummary": "We organize content, pages, experience, development, and launch into one responsive website, with content management or integrations when needed."
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
            "title": "Website interface & visual direction",
            "description": "A visual system aligned with the brand and a page hierarchy that makes the content easier to understand."
          },
          {
            "title": "Responsive development",
            "description": "Implementation that adapts layouts and components to key screen sizes without breaking the experience."
          },
          {
            "title": "Page architecture",
            "description": "Structuring the homepage, services, about, and supporting pages around the visitor journey and business goal."
          },
          {
            "title": "Contact forms",
            "description": "Simple forms that collect the right information and route it to the appropriate contact channel."
          },
          {
            "title": "User experience",
            "description": "Clear navigation, actions, and interaction patterns that reduce friction and help visitors find what they need."
          },
          {
            "title": "Performance optimization",
            "description": "Asset and loading decisions that reduce unnecessary delay and improve browsing quality."
          },
          {
            "title": "Domain & hosting setup",
            "description": "Preparing the website for launch on the selected domain and hosting environment."
          },
          {
            "title": "Content management when needed",
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
          "title": "Need a website that represents the business properly?",
          "description": "Tell us what the website needs to achieve and what you want visitors to do, and we will help shape the right scope.",
          "label": "Start your website"
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
    "image": "/assets/works/project_5.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "تطوير تطبيقات الجوال",
        "subtitle": "تطبيق يجعل خدمتك أقرب وأسهل في الاستخدام",
        "description": "نصمم ونطور تطبيقات مبنية حول رحلة المستخدم، مع ما يحتاجه المشروع من حسابات وإشعارات وربط بالأنظمة وواجهات إدارة حسب النطاق.",
        "decision": {
          "problemNeed": "عندما تحتاج الخدمة أن تكون أقرب للمستخدم على الجوال، لكن الرحلة والوظائف ما تزال موزعة أو غير واضحة.",
          "scopeSummary": "نحوّل الوظائف الأساسية إلى تجربة تطبيق مترابطة تشمل الواجهات والحسابات والتكاملات والإدارة حسب نطاق المشروع."
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
            "title": "تصميم تجربة التطبيق",
            "description": "بناء تدفقات وشاشات واضحة تراعي طبيعة المستخدم والمهام الأساسية داخل التطبيق."
          },
          {
            "title": "تطبيق Android",
            "description": "تنفيذ نسخة أندرويد وفق المتطلبات والوظائف المعتمدة للمشروع."
          },
          {
            "title": "تطبيق iOS عند الحاجة",
            "description": "تجهيز نسخة iOS عندما يتطلب نطاق المشروع دعم أجهزة Apple."
          },
          {
            "title": "تكامل API",
            "description": "ربط التطبيق بالموقع أو النظام أو الخدمات الخلفية لتبادل البيانات والعمليات."
          },
          {
            "title": "الحسابات وتسجيل الدخول",
            "description": "تجهيز تدفقات التسجيل والدخول وإدارة الحسابات بما يناسب سيناريو الاستخدام."
          },
          {
            "title": "الإشعارات",
            "description": "إضافة التنبيهات المطلوبة للطلبات أو التحديثات أو الرسائل عندما تكون جزءًا من التجربة."
          },
          {
            "title": "لوحة إدارة",
            "description": "واجهة لإدارة المحتوى والبيانات والعمليات التي يحتاجها فريق المشروع."
          },
          {
            "title": "اختبار قبل الإطلاق",
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
          "title": "عندك فكرة تحتاج تجربة على الجوال؟",
          "description": "احكِ لنا عن المستخدم وما الذي يجب أن ينجزه داخل التطبيق، ونبدأ من الوظائف الأساسية.",
          "label": "ابدأ تطبيقك"
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
        "subtitle": "An app that makes your service easier to reach and use",
        "description": "We design and build mobile apps around real user journeys, with accounts, notifications, system integrations, APIs, and administration features as the project requires.",
        "decision": {
          "problemNeed": "When the service needs to be closer to users on mobile, but the journey and functionality are still fragmented or unclear.",
          "scopeSummary": "We turn the essential functions into one connected app experience covering interfaces, accounts, integrations, and administration according to scope."
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
            "title": "App experience design",
            "description": "Clear flows and screens based on user needs and the core tasks inside the product."
          },
          {
            "title": "Android app",
            "description": "Android implementation based on the approved requirements and feature scope."
          },
          {
            "title": "iOS app when needed",
            "description": "An iOS version when supporting Apple devices is part of the project scope."
          },
          {
            "title": "API integration",
            "description": "Connecting the app to an existing website, system, or backend service for data and operations."
          },
          {
            "title": "Accounts & authentication",
            "description": "Registration, sign-in, and account management flows that fit the product scenario."
          },
          {
            "title": "Push notifications",
            "description": "Relevant notifications for orders, updates, messages, or other product events when needed."
          },
          {
            "title": "Admin dashboard",
            "description": "An interface for the team to manage content, data, and operational workflows."
          },
          {
            "title": "Pre-launch testing",
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
          "title": "Have an idea that belongs on mobile?",
          "description": "Tell us who the user is and what they need to accomplish in the app, and we will start from the essential functions.",
          "label": "Start your app"
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
    "image": "/assets/works/project_10.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "المتاجر الإلكترونية",
        "subtitle": "متجر يرتّب رحلة العميل من المنتج إلى الطلب",
        "description": "نبني متاجر تنظّم المنتجات والتصفح والسلة والطلبات، مع لوحة إدارة وخيارات الدفع والشحن المتاحة بما يناسب طريقة عمل المتجر.",
        "decision": {
          "problemNeed": "عندما تريد البيع أونلاين لكن عرض المنتجات والطلب والدفع والتوصيل يحتاج أن يعمل كرحلة واحدة بدل خطوات منفصلة.",
          "scopeSummary": "نبني واجهة المتجر وإدارة المنتجات والسلة والطلبات وخيارات الدفع والشحن بما يناسب طريقة تشغيل النشاط."
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
            "title": "واجهة متجر",
            "description": "تصميم يبرز المنتجات ويجعل التصفح والمقارنة والطلب واضحًا على الجوال والكمبيوتر."
          },
          {
            "title": "إدارة المنتجات",
            "description": "إضافة المنتجات وتحديث بياناتها وأسعارها وصورها من لوحة الإدارة."
          },
          {
            "title": "تصنيفات وتنظيم",
            "description": "تقسيم المنتجات بطريقة تسهّل البحث والوصول بدل عرضها في قائمة واحدة."
          },
          {
            "title": "السلة والطلب",
            "description": "تجربة مرتبة لإضافة المنتجات ومراجعة الطلب وإكمال بيانات الشراء."
          },
          {
            "title": "إدارة الطلبات",
            "description": "متابعة الطلبات وحالاتها والبيانات المرتبطة بها من مكان واحد."
          },
          {
            "title": "خيارات الدفع",
            "description": "إضافة بوابات أو طرق الدفع المتاحة والمناسبة لسوق المشروع عند الحاجة."
          },
          {
            "title": "الشحن والتوصيل",
            "description": "تهيئة خيارات التوصيل أو الربط المتاح بما يناسب آلية تشغيل المتجر."
          },
          {
            "title": "تقارير ومتابعة",
            "description": "عرض البيانات الأساسية للمبيعات والطلبات لمساعدة الإدارة على متابعة النشاط."
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
          "title": "حوّل منتجاتك إلى تجربة شراء مرتبة.",
          "description": "شاركنا نوع المنتجات وطريقة الطلب والتوصيل، ونحدد معك ما يحتاجه المتجر من البداية.",
          "label": "ابدأ متجرك"
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
        "subtitle": "A store that organizes the customer journey from product to order",
        "description": "We build e-commerce experiences that organize products, browsing, cart, orders, administration, and available payment and delivery options around how the business actually operates.",
        "decision": {
          "problemNeed": "When you want to sell online but product discovery, ordering, payment, and delivery need to work as one journey instead of separate steps.",
          "scopeSummary": "We build the storefront, product management, cart, orders, and available payment and delivery options around the operating model of the business."
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
            "title": "Storefront experience",
            "description": "A product-focused interface that makes browsing, comparison, and ordering clear across mobile and desktop."
          },
          {
            "title": "Product management",
            "description": "Adding and updating products, details, pricing, and imagery through the administration layer."
          },
          {
            "title": "Categories & organization",
            "description": "Structuring products so customers can browse and find items without facing one long list."
          },
          {
            "title": "Cart & checkout flow",
            "description": "A clear journey for adding products, reviewing the order, and completing purchase information."
          },
          {
            "title": "Order management",
            "description": "Tracking orders, statuses, and related customer information from one place."
          },
          {
            "title": "Payment options",
            "description": "Integrating suitable available payment methods or gateways when needed."
          },
          {
            "title": "Shipping & delivery",
            "description": "Configuring delivery options or supported integrations according to the store's operating model."
          },
          {
            "title": "Reporting & monitoring",
            "description": "Presenting essential sales and order information to help the business monitor activity."
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
          "title": "Turn your products into an organized buying experience.",
          "description": "Tell us what you sell and how ordering and delivery work, and we will define what the store needs from the start.",
          "label": "Start your store"
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
    "image": "/assets/works/project_4.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "البرمجة وتطوير الأنظمة",
        "subtitle": "نظام يُبنى على طريقة عملك، لا العكس",
        "description": "عندما لا يكفي الحل الجاهز، نطوّر أنظمة ولوحات تحكم وواجهات API وقواعد بيانات وصلاحيات وأتمتة ترتبط بسير العمل الفعلي للمشروع.",
        "decision": {
          "problemNeed": "عندما تصبح الأدوات الجاهزة قيدًا لأن طريقة عملك تحتاج منطقًا أو صلاحيات أو تكاملات خاصة.",
          "scopeSummary": "نبني الأنظمة واللوحات وقواعد البيانات وواجهات API والأتمتة حول سير العمل الفعلي، ويمكن تقسيم التنفيذ إلى مراحل."
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
            "title": "وظائف مخصصة",
            "description": "تطوير الخصائص التي يحتاجها السيناريو الفعلي للمشروع بدل حشو النظام بوظائف غير مستخدمة."
          },
          {
            "title": "لوحات تحكم",
            "description": "واجهات لإدارة البيانات والعمليات والمتابعة بحسب أدوار المستخدمين."
          },
          {
            "title": "واجهات API",
            "description": "بناء أو ربط واجهات تسمح للموقع أو التطبيق أو الخدمات الخارجية بتبادل البيانات."
          },
          {
            "title": "قواعد بيانات",
            "description": "تنظيم الكيانات والعلاقات والبيانات بطريقة تناسب تشغيل النظام وتطوره."
          },
          {
            "title": "أدوار وصلاحيات",
            "description": "تحديد ما يستطيع كل نوع من المستخدمين رؤيته أو تنفيذه داخل النظام."
          },
          {
            "title": "أتمتة العمليات",
            "description": "تحويل الخطوات اليدوية المتكررة إلى تدفقات آلية عندما تكون قابلة لذلك."
          },
          {
            "title": "تقارير ولوحات متابعة",
            "description": "تجميع المعلومات المهمة في عرض يساعد الإدارة على المتابعة واتخاذ القرار."
          },
          {
            "title": "تنفيذ على مراحل",
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
          "title": "عندك عملية تحتاج نظامًا مخصصًا؟",
          "description": "صف لنا ما يحدث الآن وما الذي تريد تنظيمه أو أتمتته، ونحوّله إلى نطاق برمجي واضح.",
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
        "subtitle": "A system built around how you work—not the other way around",
        "description": "When an off-the-shelf tool is not enough, we build custom systems, dashboards, APIs, databases, permissions, and automation around the project's real workflow.",
        "decision": {
          "problemNeed": "When ready-made tools become a constraint because the business needs custom logic, permissions, workflows, or integrations.",
          "scopeSummary": "We build systems, dashboards, databases, APIs, and automation around the real workflow, with phased delivery when that makes the project easier to manage."
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
            "title": "Custom functionality",
            "description": "Features built around the actual scenarios the system needs to support."
          },
          {
            "title": "Admin dashboards",
            "description": "Interfaces for managing data, workflows, and monitoring according to user roles."
          },
          {
            "title": "APIs",
            "description": "Building or integrating interfaces that let websites, apps, and external services exchange data."
          },
          {
            "title": "Databases",
            "description": "Structuring entities, relationships, and data to support the system's operation and future development."
          },
          {
            "title": "Roles & permissions",
            "description": "Defining what each type of user can see and do inside the system."
          },
          {
            "title": "Workflow automation",
            "description": "Turning repetitive manual steps into automated or guided processes where appropriate."
          },
          {
            "title": "Reports & monitoring",
            "description": "Bringing important operational information into clearer views for management and follow-up."
          },
          {
            "title": "Phased development",
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
          "title": "Have a workflow that needs its own system?",
          "description": "Tell us what happens today and what you want to organize or automate, and we will turn it into a clearer software scope.",
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
    "image": "/assets/works/project_3.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "الحلول التقنية",
        "subtitle": "حل تقني يبدأ من المشكلة، لا من الأداة",
        "description": "نحلل الوضع الحالي ونرتب الربط أو الأتمتة أو تنظيم البيانات أو التكامل بين الأنظمة، ثم نختار الحل الذي يخدم الاحتياج بدل إضافة أدوات بلا داعٍ.",
        "decision": {
          "problemNeed": "عندما تعرف أن هناك مشكلة تقنية أو تكرارًا أو تشتتًا، لكنك لا تريد القفز مباشرة إلى بناء نظام جديد.",
          "scopeSummary": "نحلل الموجود ثم نرتب الربط أو الأتمتة أو تنظيم البيانات أو التطوير بالقدر الذي يعالج المشكلة فعليًا."
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
            "title": "تحليل الاحتياج",
            "description": "فهم الوضع الحالي وتحديد ما الذي يحتاج تحسينًا أو ربطًا أو أتمتة قبل اختيار الحل."
          },
          {
            "title": "ربط الأنظمة",
            "description": "تنسيق تبادل البيانات والعمليات بين الأدوات أو المنصات عندما تسمح البنية بذلك."
          },
          {
            "title": "أتمتة الخطوات",
            "description": "تقليل الأعمال اليدوية المتكررة وتحويلها إلى تدفقات أو إجراءات أوضح."
          },
          {
            "title": "تنظيم البيانات",
            "description": "ترتيب حركة البيانات بين المصادر والأنظمة لتقليل التكرار والتشتت."
          },
          {
            "title": "مكونات مخصصة",
            "description": "اختيار أو بناء أجزاء تقنية تخدم الحاجة الفعلية بدل إضافة طبقات غير ضرورية."
          },
          {
            "title": "تطوير تدريجي",
            "description": "تقسيم التحسينات إلى مراحل تبدأ بالأكثر أثرًا ثم تتوسع حسب الحاجة."
          },
          {
            "title": "لوحات متابعة",
            "description": "تجميع المعلومات التي يحتاجها الفريق في شاشة أو مسار أوضح للمتابعة."
          },
          {
            "title": "تكامل الويب والتطبيقات",
            "description": "ربط الحل مع الموقع أو التطبيق أو النظام القائم عندما يكون ذلك جزءًا من السيناريو."
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
          "title": "المشكلة واضحة لكن الحل التقني ليس كذلك؟",
          "description": "شاركنا الوضع الحالي والنتيجة المطلوبة، ونرتب معك الخيارات والخطوة التالية.",
          "label": "ناقش الحل"
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
        "subtitle": "A technical solution that starts with the problem, not the tool",
        "description": "We analyze the current situation and organize integrations, automation, data flow, or system improvements around the actual need instead of adding technology for its own sake.",
        "decision": {
          "problemNeed": "When you can see a technical bottleneck, repeated work, or disconnected systems but do not want to jump straight into building something new.",
          "scopeSummary": "We review what already exists, then organize the right level of integration, automation, data structure, or development to solve the real problem."
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
            "title": "Technical needs analysis",
            "description": "Reviewing the current state to define what truly needs improvement, integration, or automation."
          },
          {
            "title": "System integration",
            "description": "Coordinating data and operations between tools or platforms when the architecture allows it."
          },
          {
            "title": "Workflow automation",
            "description": "Reducing repetitive manual work through clearer automated or assisted flows."
          },
          {
            "title": "Data organization",
            "description": "Improving how data moves between sources and systems to reduce duplication and fragmentation."
          },
          {
            "title": "Custom technical components",
            "description": "Choosing or building focused components that solve the actual need without unnecessary layers."
          },
          {
            "title": "Incremental improvement",
            "description": "Organizing technical improvements into stages that start with the highest-impact work."
          },
          {
            "title": "Monitoring views",
            "description": "Bringing important operational information into clearer dashboards or workflows."
          },
          {
            "title": "Web & app integration",
            "description": "Connecting the solution with the existing website, app, or system when that is part of the use case."
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
          "title": "The problem is clear, but the technical solution is not?",
          "description": "Tell us what is happening today and the result you want, and we will help organize the options and next step.",
          "label": "Discuss the solution"
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
    "image": "/assets/works/project_9.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "تصميم البروفايلات",
        "subtitle": "بروفايل يشرح شركتك قبل أن تبدأ أنت بالشرح",
        "description": "نرتب قصة الشركة وخدماتها وأعمالها وبياناتها في ملف واضح ومتناسق مع الهوية، مناسب للمشاركة الرقمية والطباعة والعروض.",
        "decision": {
          "problemNeed": "عندما تكون معلومات شركتك كثيرة أو متفرقة ولا تقدم صورة واضحة عند إرسالها لعميل أو جهة مهتمة.",
          "scopeSummary": "نرتب المحتوى ونحسن صياغته ونبني له إخراجًا بصريًا متناسقًا مع الهوية للاستخدام الرقمي والطباعة."
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
            "title": "غلاف وافتتاحية",
            "description": "بداية تعطي القارئ فكرة واضحة عن الشركة قبل الدخول في التفاصيل."
          },
          {
            "title": "تعريف الشركة",
            "description": "صياغة وترتيب نبذة الشركة والرؤية والمعلومات الأساسية بصورة مختصرة ومفهومة."
          },
          {
            "title": "عرض الخدمات",
            "description": "تقديم الخدمات بطريقة تساعد القارئ على فهم الفرق والقيمة بدل قائمة أسماء فقط."
          },
          {
            "title": "عرض الأعمال",
            "description": "إبراز المشاريع أو النماذج المناسبة عندما تكون متاحة وتخدم الرسالة."
          },
          {
            "title": "تنظيم المحتوى",
            "description": "اختصار التكرار وترتيب النصوص والصور ضمن تسلسل مريح للقراءة."
          },
          {
            "title": "تطبيق الهوية",
            "description": "استخدام الألوان والخطوط والعناصر البصرية بما يحافظ على اتساق العلامة."
          },
          {
            "title": "نسخة رقمية",
            "description": "إخراج مناسب للمشاركة عبر الهاتف والبريد والعروض والاجتماعات."
          },
          {
            "title": "نسخة للطباعة",
            "description": "تجهيز المقاسات والجودة والهوامش بما يناسب الطباعة عند الحاجة."
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
          "title": "اجعل تعريف شركتك أوضح من أول صفحة.",
          "description": "شاركنا المحتوى والهوية وما تريد أن يعرفه العميل عنك، ونحوّله إلى بروفايل مرتب وسهل التصفح.",
          "label": "ابدأ بروفايلك"
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
        "subtitle": "A company profile that explains the business before you have to",
        "description": "We organize the company's story, services, work, and key information into a clear profile aligned with the brand and prepared for digital sharing, presentations, and print.",
        "decision": {
          "problemNeed": "When company information is scattered or too long and does not present a clear picture when shared with a client or partner.",
          "scopeSummary": "We organize and improve the content, then build a visual presentation aligned with the brand for digital and print use."
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
            "title": "Cover & opening",
            "description": "A clear first impression that introduces the company before the detailed sections begin."
          },
          {
            "title": "Company introduction",
            "description": "Writing and organizing the company overview, vision, and key information in a concise format."
          },
          {
            "title": "Service presentation",
            "description": "Presenting services in a way that explains value and distinction instead of listing names only."
          },
          {
            "title": "Work showcase",
            "description": "Highlighting relevant projects or examples when they are available and support the story."
          },
          {
            "title": "Content organization",
            "description": "Reducing repetition and arranging text and images into a comfortable reading flow."
          },
          {
            "title": "Brand application",
            "description": "Using the approved colors, typography, and visual language consistently throughout the profile."
          },
          {
            "title": "Digital version",
            "description": "Output prepared for phones, email sharing, presentations, and meetings."
          },
          {
            "title": "Print version",
            "description": "Preparing dimensions, quality, and margins for print when required."
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
          "title": "Make the company clearer from the first page.",
          "description": "Share the content, identity, and what you want clients to understand, and we will turn it into a clear, organized company profile.",
          "label": "Start your profile"
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
    "image": "/assets/works/project_7.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "الهوية البصرية والتصميم الجرافيكي",
        "subtitle": "هوية تجعل مشروعك معروفًا ومتسقًا في كل ظهور",
        "description": "نبني نظامًا بصريًا يبدأ من الشعار والألوان ويمتد إلى القوالب والمواد التعريفية وتطبيقات الهوية، حتى يظهر المشروع بصورة واحدة واضحة عبر نقاط التواصل.",
        "decision": {
          "problemNeed": "عندما يظهر مشروعك بأشكال مختلفة ولا يوجد نظام بصري يجعل الناس يتعرفون عليه ويحافظ على اتساقه.",
          "scopeSummary": "نبني الشعار والألوان والخطوط والتطبيقات والقوالب كهوية قابلة للاستخدام، وليس كعناصر منفصلة."
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
            "title": "تصميم الشعار",
            "description": "بناء علامة بصرية قابلة للاستخدام وتناسب شخصية المشروع وسياق ظهوره."
          },
          {
            "title": "الألوان والخطوط",
            "description": "تحديد نظام لوني وتايبوغرافي يكوّن أساسًا متسقًا للهوية."
          },
          {
            "title": "تطبيقات الهوية",
            "description": "تطبيق النظام البصري على المواد والقنوات التي يحتاجها المشروع فعليًا."
          },
          {
            "title": "تصاميم السوشيال",
            "description": "قوالب ومنشورات تحافظ على شخصية العلامة بدل الاعتماد على شكل مختلف في كل مرة."
          },
          {
            "title": "البنرات الإعلانية",
            "description": "تصميم مواد حملات تحمل الرسالة والهوية بوضوح ضمن المساحات المطلوبة."
          },
          {
            "title": "قوالب قابلة للتكرار",
            "description": "نظام قوالب يساعد الفريق على الحفاظ على الاتساق في الاستخدام اليومي."
          },
          {
            "title": "دليل الهوية",
            "description": "مرجع يوضح طريقة استخدام الشعار والألوان والخطوط والعناصر الأساسية."
          },
          {
            "title": "مطبوعات وهوية تطبيقية",
            "description": "تجهيز بطاقات وأوراق ومواد مطبوعة أو رقمية بحسب احتياج العلامة."
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
          "title": "ابنِ هوية يمكن تطبيقها، لا شعارًا منفصلًا.",
          "description": "شاركنا طبيعة المشروع والجمهور والانطباع الذي تريد بناءه، ونرتب الهوية على هذا الأساس.",
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
        "subtitle": "An identity that makes your project recognizable and consistent wherever it appears",
        "description": "We build visual systems that start with the logo and color direction and extend into templates, communication materials, and brand applications so the project appears as one coherent brand.",
        "decision": {
          "problemNeed": "When the project appears in different visual styles and there is no system that makes the brand recognizable and consistent.",
          "scopeSummary": "We build the logo, colors, typography, applications, and reusable templates as one usable identity system rather than separate design files."
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
            "title": "Logo design",
            "description": "A usable visual mark that fits the personality and context of the brand."
          },
          {
            "title": "Color & typography system",
            "description": "A visual foundation that defines how color and type work consistently across the identity."
          },
          {
            "title": "Brand applications",
            "description": "Applying the visual system to the materials and channels the project actually needs."
          },
          {
            "title": "Social media design",
            "description": "Templates and post systems that maintain brand character across recurring content."
          },
          {
            "title": "Campaign banners",
            "description": "Promotional materials that carry the message and identity clearly across required formats."
          },
          {
            "title": "Reusable templates",
            "description": "A template system that helps the team maintain consistency in day-to-day use."
          },
          {
            "title": "Brand guidelines",
            "description": "A reference that explains how to use the logo, colors, typography, and key visual elements."
          },
          {
            "title": "Print & applied materials",
            "description": "Preparing cards, stationery, and other digital or printed brand applications according to need."
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
          "title": "Build an identity that can be used—not just a standalone logo.",
          "description": "Tell us about the project, audience, and impression you want to create, and we will shape the identity around that.",
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
    "image": "/assets/works/project_12.jpg",
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "التسويق الرقمي وإدارة المحتوى",
        "subtitle": "محتوى يجعل مشروعك مفهومًا قبل أن تطلب التفاعل",
        "description": "نخطط ونكتب ونصمم محتوى متناسقًا مع هوية المشروع، من خطة النشر وإدارة الصفحات إلى الحملات المدفوعة والتقارير عند الحاجة.",
        "decision": {
          "problemNeed": "عندما تنشر باستمرار لكن الرسالة والهوية والهدف لا تعمل معًا، فيبدو المحتوى متفرقًا أو غير واضح.",
          "scopeSummary": "نرتب الرسائل وخطة المحتوى والكتابة والتصميم والنشر والحملات حسب النطاق والجمهور والمنصات."
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
            "title": "خطة محتوى",
            "description": "تحديد الموضوعات والمحاور والإيقاع المناسب للنشر بناءً على الخدمة والجمهور والهدف."
          },
          {
            "title": "كتابة المحتوى",
            "description": "صياغة منشورات ورسائل واضحة تتحدث بلغة العلامة وتوصل الفكرة بدون حشو."
          },
          {
            "title": "تصميم المنشورات",
            "description": "تحويل الرسالة إلى محتوى بصري متسق مع الهوية ومناسب للمنصة."
          },
          {
            "title": "إدارة الصفحات",
            "description": "تنظيم النشر والجدولة والمتابعة وفق النطاق المتفق عليه."
          },
          {
            "title": "الحملات المدفوعة",
            "description": "إعداد وإدارة الحملات عند الحاجة ضمن الهدف والميزانية والجمهور المحدد."
          },
          {
            "title": "تحسين الظهور",
            "description": "مراجعة المحتوى وطريقة تقديمه لزيادة وضوح الرسالة والوصول المناسب."
          },
          {
            "title": "ريلز واستوريات",
            "description": "أفكار وصيغ قصيرة تخدم الرسالة بدل إنتاج فيديو لمجرد زيادة عدد المنشورات."
          },
          {
            "title": "تقارير أداء",
            "description": "قراءة المؤشرات المتاحة لفهم ما الذي يعمل وما الذي يحتاج تعديلًا في الخطة."
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
          "title": "اجعل حضورك يقول الرسالة الصحيحة باستمرار.",
          "description": "شاركنا ما تقدمه ولمن، ونبني حوله محتوى وخطة حضور أوضح وأكثر اتساقًا.",
          "label": "طوّر حضورك"
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
        "subtitle": "Content that makes the business understandable before asking for engagement",
        "description": "We plan, write, and design content that aligns with the brand—from content strategy and page management to paid campaigns and reporting when needed.",
        "decision": {
          "problemNeed": "When you keep publishing but the message, identity, and objective do not work together, leaving the content fragmented or unclear.",
          "scopeSummary": "We organize messaging, content planning, writing, design, publishing, and campaigns according to the agreed scope, audience, and platforms."
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
            "title": "Content plan",
            "description": "Defining content themes, topics, and publishing rhythm around the offer, audience, and objective."
          },
          {
            "title": "Content writing",
            "description": "Clear posts and messages written in the voice of the brand without unnecessary filler."
          },
          {
            "title": "Social content design",
            "description": "Turning the message into visual content that fits the brand and the platform."
          },
          {
            "title": "Page management",
            "description": "Organizing scheduling, publishing, and follow-up according to the agreed scope."
          },
          {
            "title": "Paid campaigns",
            "description": "Planning and managing campaigns when needed, based on objective, budget, audience, and platform."
          },
          {
            "title": "Visibility improvement",
            "description": "Reviewing how content is presented to make the message clearer and improve relevant reach."
          },
          {
            "title": "Short-form content",
            "description": "Ideas and formats for reels and stories that serve the message instead of adding video for volume alone."
          },
          {
            "title": "Performance reporting",
            "description": "Reading available indicators to understand what is working and what needs adjustment."
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
          "title": "Make your presence communicate the right message consistently.",
          "description": "Tell us what you offer and who it is for, and we will build a clearer, more consistent content direction around it.",
          "label": "Improve your presence"
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
  web: CONTENT_STATE.PARTIAL,
  app: CONTENT_STATE.PARTIAL,
  store: CONTENT_STATE.PARTIAL,
  programming: CONTENT_STATE.PARTIAL,
  tech: CONTENT_STATE.CONTENT_REQUIRED,
  profiles: CONTENT_STATE.CONTENT_REQUIRED,
  design: CONTENT_STATE.PARTIAL,
  marketing: CONTENT_STATE.PARTIAL
});

function phase2bServiceRecord(service) {
  return Object.freeze({
    ...service,
    contentState: CONTENT_STATE.PARTIAL,
    fieldState: createFieldState(serviceFieldKeys, {
      identity: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      problemNeed: CONTENT_STATE.READY,
      audiences: CONTENT_STATE.READY,
      scopeBoundaries: CONTENT_STATE.PARTIAL,
      deliverables: CONTENT_STATE.READY,
      capabilitiesIntegrations: CONTENT_STATE.READY,
      process: CONTENT_STATE.READY,
      faq: CONTENT_STATE.READY,
      proof: serviceProofState[service.id] ?? CONTENT_STATE.CONTENT_REQUIRED,
      constraintsDependencies: CONTENT_STATE.PARTIAL,
      seo: CONTENT_STATE.READY,
      relatedArticles: CONTENT_STATE.PARTIAL,
      english: CONTENT_STATE.READY
    }),
    evidenceSources: Object.freeze([
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
