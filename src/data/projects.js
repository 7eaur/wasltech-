/**
 * Wasl Tech VNext — Canonical project data.
 * Source: verified legacy portfolio records normalized on 2026-09-21.
 * Arabic portfolio summaries, case-study overviews/scopes and SEO are VNext editorial drafts.
 * Each project intentionally uses one primary image only.
 */

import { CONTENT_STATE, createFieldState, projectFieldKeys } from "./content-contracts.js";

const projectRecords = [
  {
    "id": "project-01",
    "legacyId": 1,
    "slug": "suwarikum-platform",
    "category": "web",
    "image": "/assets/works/project_1.jpg",
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
          "overview": "مشروع يركز على تحويل عملية مشاركة الصور من تبادل ملفات متفرق إلى تجربة رقمية منظمة تجمع العرض والوصول والتسليم في مكان واحد.",
          "context": "المشروع يعالج حاجة المصور إلى تنظيم تسليم الصور للعملاء داخل مساحة خاصة بدل الاعتماد على مشاركة الملفات بشكل متفرق.",
          "contribution": "تصميم وبناء تجربة منصة تجمع إدارة الصور والوصول الخاص بالعميل ضمن مسار واحد.",
          "scope": ["إدارة مجموعات الصور","مشاركة المحتوى مع العملاء","تنظيم الوصول لكل مستخدم"],
          "deliveredOutputs": ["إدارة مجموعات الصور","وصول مخصص للعملاء","تجربة تسليم ومشاركة داخل المنصة"]
        },
        "seo": {
          "title": "منصة صوركم الرقمية | أعمال وصل تك",
          "description": "منصة رقمية لإدارة وتسليم ومشاركة الصور بين المصورين والعملاء ضمن تجربة وصول منظمة."
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
          "overview": "A project focused on turning scattered photo sharing into an organized digital experience that brings presentation, access, and delivery into one place.",
          "context": "The platform addresses the photographer's need to deliver images to clients in a private, structured space instead of relying on fragmented file sharing.",
          "contribution": "Designed and built a platform experience that connects photo management with private client access in one flow.",
          "scope": ["Manage photo collections","Share content with clients","Organize access per user"],
          "deliveredOutputs": ["Photo collection management","Dedicated client access","In-platform sharing and delivery experience"]
        },
        "seo": {
          "title": "Suwarikum Digital Platform | Wasl Tech Work",
          "description": "A digital platform for managing, delivering, and sharing photos between photographers and clients through organized private access."
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
    "image": "/assets/works/project_2.jpg",
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
          "overview": "منصة عربية للعمل الحر صُممت لتنظيم الرحلة بين العميل ومقدم الخدمة من اكتشاف الخدمة والتواصل إلى متابعة التعامل داخل نظام واحد.",
          "context": "المشروع يجمع طرفي العمل الحر داخل نظام واحد يحتاج إلى تنظيم الحسابات والتواصل والتعاملات بين العميل ومقدم الخدمة.",
          "contribution": "تصميم وبناء تجربة منصة تربط اكتشاف الخدمات بالتواصل والمتابعة والدفع داخل نفس المسار.",
          "scope": ["حسابات لمقدمي الخدمات والعملاء","تواصل ومحادثات","تدفق دفع داخل المنصة"],
          "deliveredOutputs": ["حسابات للعملاء ومقدمي الخدمات","نظام محادثات","تدفق مدفوعات داخل المنصة"]
        },
        "seo": {
          "title": "منصة وصّل للعمل الحر | أعمال وصل تك",
          "description": "منصة عربية للعمل الحر تربط العملاء بمقدمي الخدمات وتجمع التواصل والمدفوعات داخل تجربة رقمية واحدة."
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
          "overview": "An Arabic freelance platform designed to organize the journey between the client and service provider from service discovery and communication through ongoing transactions inside one system.",
          "context": "The project brings both sides of freelance work into one system that needs to organize accounts, communication, and transactions between clients and service providers.",
          "contribution": "Designed and built a platform experience that connects service discovery, communication, follow-up, and payment within one flow.",
          "scope": ["Accounts for clients and service providers","Communication and messaging","In-platform payment flow"],
          "deliveredOutputs": ["Client and provider accounts","Messaging system","Transaction payment flow"]
        },
        "seo": {
          "title": "Wasl Freelance Platform | Wasl Tech Work",
          "description": "An Arabic freelance platform connecting clients with service providers while bringing communication and payments into one digital experience."
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
    "image": "/assets/works/project_3.jpg",
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
          "overview": "نظام إداري موجه لتبسيط التعامل مع عمليات الميكروتيك المتكررة وإعطاء المشرف واجهة أوضح لإدارة المستخدمين والكروت والجلسات.",
          "context": "المشروع يركز على تبسيط إدارة عمليات الميكروتيك اليومية بدل التعامل معها من أكثر من نقطة أو خطوة منفصلة.",
          "contribution": "بناء لوحة تجمع المستخدمين والكروت والجلسات في واجهة إدارية واحدة.",
          "scope": ["إدارة المستخدمين","توليد الكروت","متابعة الجلسات والعمليات"],
          "deliveredOutputs": ["إدارة المستخدمين","توليد وإدارة الكروت","متابعة الجلسات"]
        },
        "seo": {
          "title": "لوحة تحكم الميكروتيك | أعمال وصل تك",
          "description": "نظام لإدارة مستخدمي شبكات الواي فاي وتوليد الكروت ومتابعة الجلسات من لوحة تحكم واحدة."
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
          "overview": "An administrative system built to simplify recurring MikroTik operations and give administrators a clearer interface for managing users, cards, and sessions.",
          "context": "The project focuses on simplifying daily MikroTik management instead of handling the same operational tasks across multiple disconnected steps.",
          "contribution": "Built a dashboard that brings users, cards, and sessions into one administrative interface.",
          "scope": ["User management","Card generation","Session and operation monitoring"],
          "deliveredOutputs": ["User management","Card generation and management","Session monitoring"]
        },
        "seo": {
          "title": "MikroTik Control Dashboard | Wasl Tech Work",
          "description": "A system for managing Wi-Fi network users, generating cards, and monitoring sessions from one control dashboard."
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
    "image": "/assets/works/project_4.jpg",
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
          "overview": "لوحة CMS بُنيت لتجميع إدارة محتوى الموقع داخل مساحة واحدة تساعد الفريق على تحديث النصوص والأقسام والمعلومات بدون الدخول في تفاصيل الكود.",
          "context": "المشروع يسهّل تحديث محتوى الموقع من قبل الإدارة بدون الرجوع إلى تعديل الكود في كل تغيير.",
          "contribution": "بناء لوحة CMS مركزية تربط محتوى الصفحات بواجهة إدارة مخصصة.",
          "scope": ["إدارة محتوى الصفحات","تحديث البيانات ديناميكيًا","لوحة تحكم للإدارة"],
          "deliveredOutputs": ["إدارة محتوى الصفحات","تحديثات ديناميكية","واجهة تحكم مركزية"]
        },
        "seo": {
          "title": "لوحة إدارة محتوى CMS | أعمال وصل تك",
          "description": "لوحة CMS مركزية لإدارة وتحديث محتوى المواقع ديناميكيًا من واجهة تحكم واحدة."
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
          "overview": "A CMS dashboard built to bring website content management into one workspace so teams can update text, sections, and information without working directly in the code.",
          "context": "The project makes it easier for the team to update website content without returning to code for every change.",
          "contribution": "Built a centralized CMS dashboard that connects page content with a dedicated administration interface.",
          "scope": ["Page content management","Dynamic data updates","Administration dashboard"],
          "deliveredOutputs": ["Page content management","Dynamic updates","Centralized administration"]
        },
        "seo": {
          "title": "CMS Content Management Dashboard | Wasl Tech Work",
          "description": "A centralized CMS dashboard for managing and updating website content dynamically from one administration interface."
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
    "image": "/assets/works/project_5.jpg",
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
          "overview": "تطبيق متجر يركز على جعل رحلة التسوق عبر الجوال مباشرة من استكشاف المنتجات إلى إضافة السلة ومتابعة الطلب.",
          "context": "المشروع ينقل تجربة التسوق إلى الجوال ويجمع استكشاف المنتجات والسلة ومتابعة الطلب في رحلة واحدة.",
          "contribution": "تصميم وتطوير تجربة تطبيق متجر تركز على التصفح والشراء ومتابعة الطلبات.",
          "scope": ["عرض وتصفح المنتجات","إدارة السلة","متابعة الطلبات"],
          "deliveredOutputs": ["كتالوج منتجات","سلة مشتريات","متابعة حالة الطلب"]
        },
        "seo": {
          "title": "تيك زون الإلكتروني | أعمال وصل تك",
          "description": "تجربة متجر إلكتروني عبر الجوال تشمل تصفح المنتجات والسلة ومتابعة الطلبات."
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
          "overview": "A store app focused on making the mobile shopping journey direct from product discovery through cart and order tracking.",
          "context": "The project brings shopping to mobile and connects product discovery, cart, and order tracking in one journey.",
          "contribution": "Designed and developed a mobile store experience focused on browsing, purchasing, and tracking orders.",
          "scope": ["Product browsing","Cart management","Order tracking"],
          "deliveredOutputs": ["Product catalog","Shopping cart","Order status tracking"]
        },
        "seo": {
          "title": "Tech Zone E-commerce App | Wasl Tech Work",
          "description": "A mobile e-commerce experience covering product browsing, cart, and order tracking in one clear journey."
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
    "image": "/assets/works/project_6.jpg",
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
          "overview": "تجربة جوال لمقهى تجمع الطلب والولاء والوصول إلى الفروع في مسار واحد يخدم العميل قبل وأثناء الشراء.",
          "context": "المشروع يجمع احتياجات عميل المقهى في تطبيق واحد: الطلب، الولاء، والوصول إلى الفروع.",
          "contribution": "تصميم وتطوير تجربة طلب عبر الجوال مرتبطة ببرنامج ولاء ومعلومات الفروع.",
          "scope": ["طلب المنتجات","برنامج ولاء","عرض الفروع على الخريطة"],
          "deliveredOutputs": ["طلب القهوة عبر التطبيق","برنامج ولاء","خرائط الفروع"]
        },
        "seo": {
          "title": "تطبيق أروما كافيه | أعمال وصل تك",
          "description": "تطبيق جوال لأروما كافيه يجمع طلب القهوة وبرنامج الولاء ومعلومات الفروع داخل تجربة واحدة واضحة وسهلة الاستخدام."
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
          "overview": "A mobile cafe experience that brings ordering, loyalty, and branch access into one journey before and during purchase.",
          "context": "The project combines key customer needs in one app: ordering, loyalty, and reaching the right branch.",
          "contribution": "Designed and developed a mobile ordering experience connected to a loyalty program and branch information.",
          "scope": ["Product ordering","Loyalty program","Branch map display"],
          "deliveredOutputs": ["In-app coffee ordering","Loyalty program","Branch maps"]
        },
        "seo": {
          "title": "Aroma Cafe App | Wasl Tech Work",
          "description": "A mobile coffee ordering app with a loyalty program and branch maps in one customer experience."
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
    "image": "/assets/works/project_13.jpg",
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
          "overview": "موقع شركة يضع أعمال المقاولات والخدمات الهندسية في واجهة منظمة تساعد الزائر على فهم النشاط والانتقال من الاستكشاف إلى التواصل.",
          "context": "المشروع يقدّم شركة المقاولات وخدماتها وأعمالها في تجربة تساعد الزائر على فهم النشاط والانتقال إلى طلب عرض سعر.",
          "contribution": "تصميم وتطوير موقع تعريفي يربط الخدمات والمشاريع بمسار تواصل واضح.",
          "scope": ["عرض الخدمات","معرض المشاريع","طلب عرض سعر"],
          "deliveredOutputs": ["صفحات للخدمات","عرض المشاريع","طلب عرض سعر"]
        },
        "seo": {
          "title": "موقع البناء المتقن | أعمال وصل تك",
          "description": "موقع تعريفي لشركة مقاولات وهندسة يعرض الخدمات والمشاريع ويسهّل طلب عروض الأسعار."
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
          "overview": "A company website that organizes construction and engineering services and projects so visitors can understand the business and move from exploration to contact.",
          "context": "The project presents the construction company, its services, and its work in an experience that helps visitors understand the business and request a quotation.",
          "contribution": "Designed and developed a company website that connects services and projects to a clear contact path.",
          "scope": ["Service presentation","Project showcase","Quotation requests"],
          "deliveredOutputs": ["Service pages","Project showcase","Quotation request flow"]
        },
        "seo": {
          "title": "Al Benaa Al Motqin Website | Wasl Tech Work",
          "description": "A construction and engineering company website that presents services and projects and makes quotation requests easier."
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
    "image": "/assets/works/project_10.jpg",
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
          "overview": "متجر متخصص في الإلكترونيات يركز على تنظيم الكتالوج وتسهيل الانتقال بين الأقسام والمنتجات حتى إكمال الطلب.",
          "context": "المشروع ينظم كتالوج الأجهزة والإلكترونيات ويجعل الوصول إلى المنتج والطلب أكثر مباشرة.",
          "contribution": "تصميم وبناء متجر يرتب المنتجات ضمن تصنيفات ويقود العميل من التصفح إلى الطلب.",
          "scope": ["عرض المنتجات","التصنيفات","تجربة الطلب"],
          "deliveredOutputs": ["كتالوج إلكترونيات","تصنيفات منتجات","تجربة إتمام الطلب"]
        },
        "seo": {
          "title": "متجر النخبة للإلكترونيات | أعمال وصل تك",
          "description": "متجر إلكتروني للأجهزة والإلكترونيات بتصنيفات منظمة وتجربة واضحة من التصفح إلى الطلب."
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
          "overview": "A specialized electronics store focused on organizing the catalog and making it easier to move between categories and products through to ordering.",
          "context": "The project organizes an electronics catalog and makes finding products and placing orders more direct.",
          "contribution": "Designed and built a store that organizes products into categories and guides customers from browsing to ordering.",
          "scope": ["Product display","Categories","Ordering experience"],
          "deliveredOutputs": ["Electronics catalog","Product categories","Order completion experience"]
        },
        "seo": {
          "title": "Elite Electronics Store | Wasl Tech Work",
          "description": "An electronics e-commerce store with organized categories and a clear experience from browsing to ordering."
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
    "image": "/assets/works/project_7.jpg",
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
          "overview": "مشروع هوية يهدف إلى توحيد شكل العلامة عبر الشعار والألوان والتطبيقات التي يراها العميل داخل المطعم وخارجه.",
          "context": "المشروع يحتاج نظامًا بصريًا موحدًا يربط الشعار بالألوان والمطبوعات والتغليف بدل ظهور كل مادة بأسلوب مستقل.",
          "contribution": "بناء هوية بصرية لمطعم الملكي تشمل الشعار والنظام اللوني والتطبيقات الأساسية.",
          "scope": ["تصميم الشعار","بناء النظام اللوني","تطبيقات مطبوعة وتغليف"],
          "deliveredOutputs": ["تصميم الشعار","نظام ألوان","مطبوعات وتغليف"]
        },
        "seo": {
          "title": "هوية مطعم الملكي | أعمال وصل تك",
          "description": "هوية بصرية لمطعم الملكي تشمل الشعار والألوان والمطبوعات والتغليف ضمن نظام بصري واحد يعكس طابع العلامة."
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
          "overview": "A brand identity project created to unify how the restaurant appears through the logo, colors, and customer-facing applications inside and outside the venue.",
          "context": "The project needed one visual system connecting the logo, colors, print materials, and packaging instead of each item appearing in a separate style.",
          "contribution": "Built a visual identity for Al Malaki Restaurant including the logo, color system, and key applications.",
          "scope": ["Logo design","Color system","Print and packaging applications"],
          "deliveredOutputs": ["Logo design","Color system","Print and packaging"]
        },
        "seo": {
          "title": "Al Malaki Restaurant Brand Identity | Wasl Tech Work",
          "description": "A visual identity for Al Malaki Restaurant covering logo, colors, printed materials, and packaging."
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
    "image": "/assets/works/project_9.jpg",
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
          "overview": "هوية بصرية بُنيت حول طابع تقني واضح، مع نظام يساعد الشركة على الظهور بصورة متسقة في موادها المختلفة.",
          "context": "المشروع يحتاج مظهرًا تقنيًا واضحًا يمكن تطبيقه بصورة متسقة عبر مواد الشركة المختلفة.",
          "contribution": "بناء شعار ونظام بصري لشركة ميلانو بطابع تقني حديث.",
          "scope": ["تصميم الشعار","النظام البصري","تطبيقات الهوية"],
          "deliveredOutputs": ["تصميم الشعار","النظام البصري","تطبيقات الهوية"]
        },
        "seo": {
          "title": "هوية شركة ميلانو | أعمال وصل تك",
          "description": "هوية بصرية لشركة ميلانو تشمل الشعار والنظام البصري وتطبيقات العلامة ضمن اتجاه تقني حديث ومتناسق."
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
          "overview": "A visual identity built around a clear technical character, giving the company a consistent system for use across different materials.",
          "context": "The project needed a clear technical visual language that could be applied consistently across the company's materials.",
          "contribution": "Built the logo and visual system for Milano around a modern technical direction.",
          "scope": ["Logo design","Visual system","Brand applications"],
          "deliveredOutputs": ["Logo design","Visual system","Brand applications"]
        },
        "seo": {
          "title": "Milano Company Brand Identity | Wasl Tech Work",
          "description": "A visual identity for Milano including a logo and modern technical visual system."
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
    "image": "/assets/works/project_12.jpg",
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
          "overview": "مشروع تسويقي يركز على توحيد الرسائل والتصميم والحملات حول منتجات العطور بدل التعامل مع كل منشور أو إعلان بشكل منفصل.",
          "context": "المشروع يجمع الرسالة والتصميم والحملات الاجتماعية في اتجاه واحد بدل التعامل مع المحتوى كمنشورات منفصلة.",
          "contribution": "بناء اتجاه للحملة يشمل استراتيجية المحتوى والتصميم الإعلاني ومحتوى شبكات التواصل.",
          "scope": ["تخطيط المحتوى","تصميم الإعلانات","حملات ومحتوى اجتماعي"],
          "deliveredOutputs": ["استراتيجية محتوى","تصاميم إعلانية","محتوى وحملات اجتماعية"]
        },
        "seo": {
          "title": "حملة فخري للعطور | أعمال وصل تك",
          "description": "حملة رقمية لمتجر فخري للعطور تشمل استراتيجية المحتوى والتصميم الإعلاني وحضور شبكات التواصل."
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
          "overview": "A marketing project focused on bringing messaging, design, and campaigns around perfume products into one direction instead of treating every post or ad as a separate piece.",
          "context": "The project needed messaging, design, and social campaigns to work together rather than appear as disconnected content.",
          "contribution": "Built the campaign direction across content strategy, advertising design, and social media content.",
          "scope": ["Content planning","Advertising design","Social content and campaigns"],
          "deliveredOutputs": ["Content strategy","Advertising creatives","Social content and campaigns"]
        },
        "seo": {
          "title": "Fakhri Perfumes Digital Campaign | Wasl Tech Work",
          "description": "A digital campaign for Fakhri Perfumes covering content strategy, advertising design, and social media presence."
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
    "image": "/assets/works/project_8.jpg",
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
          "overview": "متجر متخصص في العطور صُمم حول المنتج نفسه، من طريقة العرض والتصفح إلى الانتقال نحو الشراء داخل تجربة متماسكة.",
          "context": "المشروع يركز على تقديم منتجات العطور داخل تجربة شراء يكون فيها المنتج هو العنصر الأساسي في التصفح والقرار.",
          "contribution": "تصميم وبناء متجر إلكتروني يركز على عرض العطور وتنظيم التصفح ومسار الشراء.",
          "scope": ["عرض المنتجات","تنظيم التصفح","مسار الشراء"],
          "deliveredOutputs": ["عرض منتجات العطور","تنظيم التصفح","مسار شراء"]
        },
        "seo": {
          "title": "متجر فخري للعطور | أعمال وصل تك",
          "description": "متجر إلكتروني للعطور بتجربة تركز على عرض المنتجات والتصفح والشراء بوضوح."
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
          "overview": "A perfume-focused e-commerce experience designed around the product itself, from presentation and browsing through the path to purchase.",
          "context": "The project focuses on presenting perfume products in a shopping experience where the product remains central to browsing and purchase decisions.",
          "contribution": "Designed and built an online store focused on perfume presentation, organized browsing, and the buying journey.",
          "scope": ["Product presentation","Browsing organization","Buying journey"],
          "deliveredOutputs": ["Perfume product presentation","Organized browsing","Purchase flow"]
        },
        "seo": {
          "title": "Fakhri Perfumes Store | Wasl Tech Work",
          "description": "An online perfume store with a product-focused experience for clear browsing and purchasing."
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
    "image": "/assets/works/project_14.jpg",
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
          "overview": "متجر متخصص في ملابس الأطفال يركز على تبسيط اكتشاف المنتجات والتنقل بين الفئات حتى الوصول إلى المنتج والطلب.",
          "context": "المشروع ينظم ملابس الأطفال ضمن فئات واضحة ويبسّط اكتشاف المنتجات والوصول إلى الطلب.",
          "contribution": "تصميم وبناء متجر متخصص يربط التصنيفات بعرض المنتج وتجربة الطلب.",
          "scope": ["تصنيفات المنتجات","عرض الكتالوج","تجربة الطلب"],
          "deliveredOutputs": ["تصنيفات للمنتجات","عرض الكتالوج","تجربة طلب"]
        },
        "seo": {
          "title": "متجر كيدي للملابس | أعمال وصل تك",
          "description": "متجر إلكتروني لملابس الأطفال بتصنيفات واضحة وتجربة منظمة لتصفح المنتجات والطلب."
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
          "overview": "A children's clothing store focused on simplifying product discovery and movement between categories through to product selection and ordering.",
          "context": "The project organizes children's clothing into clear categories and simplifies product discovery and ordering.",
          "contribution": "Designed and built a specialized store connecting product categories, presentation, and ordering.",
          "scope": ["Product categories","Catalog display","Ordering experience"],
          "deliveredOutputs": ["Product categories","Catalog display","Ordering flow"]
        },
        "seo": {
          "title": "Kiddy Clothing Store | Wasl Tech Work",
          "description": "An online children's clothing store with clear categories and an organized product browsing and ordering experience."
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
    "image": "/assets/works/project_11.jpg",
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
          "overview": "موقع تعريفي لمكتب قانوني يركز على تقديم الخدمات والمعلومات بطريقة مباشرة ومنظمة تساعد الزائر على فهم ما يقدمه المكتب والوصول للتواصل.",
          "context": "المشروع يقدّم خدمات المكتب القانونية في واجهة رسمية ومباشرة تساعد الزائر على الفهم والوصول للتواصل.",
          "contribution": "تصميم وتطوير موقع تعريفي ينظم الخدمات والمعلومات ومسار التواصل للمكتب.",
          "scope": ["عرض الخدمات القانونية","تنظيم المعلومات","مسار تواصل واضح"],
          "deliveredOutputs": ["عرض الخدمات القانونية","تنظيم المعلومات","مسار تواصل واضح"]
        },
        "seo": {
          "title": "موقع مكتب الحباري للمحاماة | أعمال وصل تك",
          "description": "موقع تعريفي لمكتب محاماة واستشارات قانونية يعرض الخدمات والمعلومات ضمن تجربة واضحة ومنظمة."
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
          "overview": "A company website for a legal office focused on presenting services and information directly and helping visitors understand the office and reach the right contact path.",
          "context": "The project presents the office's legal services through a professional and direct interface that helps visitors understand the offering and move toward contact.",
          "contribution": "Designed and developed a company website that organizes legal services, information, and the office's contact path.",
          "scope": ["Legal service presentation","Information organization","Clear contact path"],
          "deliveredOutputs": ["Legal service presentation","Information organization","Clear contact path"]
        },
        "seo": {
          "title": "Al Hobari Law Office Website | Wasl Tech Work",
          "description": "A website for a law and legal consulting office that presents services and information in a clear, organized experience."
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
  "project-14": Object.freeze({ width: 800, height: 533 })
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
  "project-14": Object.freeze({ ar: "موقع شركة", en: "Company website" })
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
    evidenceSources: Object.freeze([
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
