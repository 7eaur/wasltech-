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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
          "description": "تطبيق جوال لطلب القهوة مع برنامج ولاء وخرائط للفروع ضمن تجربة واحدة."
        }
      },
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
          "description": "هوية بصرية لمطعم الملكي تشمل الشعار والألوان والمطبوعات والتغليف."
        }
      },
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
          "description": "هوية بصرية لشركة ميلانو تشمل الشعار ونظامًا بصريًا بطابع تقني حديث."
        }
      },
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
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
      "ar": "draft",
      "en": "content_required"
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
      "en": null
    },
    "links": {
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة موقع مشابه لمكتب الحباري."
    }
  }
];

const PROJECT_PLATFORM_TYPES = Object.freeze({
  "project-01": "منصة ويب",
  "project-02": "منصة ويب",
  "project-03": "نظام إدارة ويب",
  "project-04": "لوحة إدارة محتوى",
  "project-05": "تطبيق متجر إلكتروني",
  "project-06": "تطبيق جوال",
  "project-07": "موقع شركة",
  "project-08": "متجر إلكتروني",
  "project-09": "هوية بصرية",
  "project-10": "هوية بصرية",
  "project-11": "حملة تسويق رقمي",
  "project-12": "متجر إلكتروني",
  "project-13": "متجر إلكتروني",
  "project-14": "موقع شركة"
});

function phase2bProjectRecord(project) {
  return Object.freeze({
    ...project,
    client: Object.freeze({
      publicName: null,
      attributionApproved: null
    }),
    projectStatus: null,
    platformType: PROJECT_PLATFORM_TYPES[project.id] ?? null,
    contentState: CONTENT_STATE.PARTIAL,
    fieldState: createFieldState(projectFieldKeys, {
      identity: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      cover: CONTENT_STATE.READY,
      clientAttribution: CONTENT_STATE.NOT_VERIFIED,
      projectStatus: CONTENT_STATE.CONTENT_REQUIRED,
      platformType: CONTENT_STATE.READY,
      scope: CONTENT_STATE.READY,
      waslContribution: CONTENT_STATE.PARTIAL,
      contextChallenge: CONTENT_STATE.PARTIAL,
      outcomes: CONTENT_STATE.PARTIAL,
      seo: CONTENT_STATE.READY,
      english: CONTENT_STATE.CONTENT_REQUIRED
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
