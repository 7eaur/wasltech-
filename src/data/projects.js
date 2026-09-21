/**
 * Wasl Tech VNext — Canonical project data.
 * Source: verified legacy portfolio records normalized on 2026-09-21.
 * Case-study fields remain null until evidence exists.
 */

import { CONTENT_STATE, createFieldState, projectFieldKeys } from "./content-contracts.js";

const projectRecords = Object.freeze([
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "منصة صوركم الرقمية",
        "categoryLabel": "مواقع",
        "summary": "منصة متخصصة لإدارة ومشاركة الصور بخصوصية عالية، تربط المصورين والعملاء بنظام وصول آمن.",
        "highlights": [
          "إدارة ومشاركة الصور",
          "خصوصية وصول العملاء",
          "منصة مخصصة للمصورين والعملاء"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "منصة وصّل للعمل الحر",
        "categoryLabel": "مواقع",
        "summary": "منصة عربية حديثة تعمل كوسيط آمن بين مقدمي الخدمات والعملاء مع نظام محادثات ودفع متكامل.",
        "highlights": [
          "وساطة بين مقدمي الخدمات والعملاء",
          "نظام محادثات",
          "نظام دفع ضمن المنصة"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "لوحة تحكم الميكروتيك",
        "categoryLabel": "مواقع (أنظمة)",
        "summary": "نظام متقدم لإدارة وتتبع مستخدمي شبكات الواي فاي وتوليد الكروت وإدارة الجلسات برمجياً.",
        "highlights": [
          "إدارة مستخدمي شبكات الواي فاي",
          "توليد الكروت",
          "إدارة وتتبع الجلسات"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "لوحة إدارة محتوى (CMS)",
        "categoryLabel": "مواقع (أنظمة)",
        "summary": "لوحة تحكم مركزية تتيح للشركات تغيير محتوى مواقعها بالكامل ديناميكياً بكل سهولة ومرونة.",
        "highlights": [
          "إدارة محتوى الموقع مركزيًا",
          "تعديل المحتوى ديناميكيًا",
          "لوحة تحكم للشركات"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "تيك زون الإلكتروني",
        "categoryLabel": "تطبيقات",
        "summary": "متجر إلكتروني يركز على تجربة المستخدم مع سلة تسوق ذكية ونظام تتبع وسرعة أداء عالية.",
        "highlights": [
          "تجربة متجر إلكتروني",
          "سلة تسوق",
          "تتبع الطلبات"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "أروما كافيه",
        "categoryLabel": "تطبيقات",
        "summary": "تطبيق هاتف لطلب القهوة يضم نظام ولاء وخرائط للفروع مع واجهات مميزة ومريحة للعين.",
        "highlights": [
          "طلب القهوة من التطبيق",
          "نظام ولاء",
          "خرائط للفروع"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "البناء المتقن",
        "categoryLabel": "مواقع",
        "summary": "موقع احترافي لشركة مقاولات وهندسة يعرض المشاريع والخدمات بطريقة عصرية، مع تجربة استخدام متجاوبة تسهّل طلب عروض الأسعار.",
        "highlights": [
          "عرض مشاريع وخدمات شركة المقاولات",
          "تجربة متجاوبة",
          "تسهيل طلب عروض الأسعار"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "النخبة للإلكترونيات",
        "categoryLabel": "متاجر",
        "summary": "متجر إلكتروني متكامل لبيع الأجهزة والإلكترونيات، يوفر تجربة تسوق سريعة مع تصنيفات ذكية وسهولة في إتمام الطلبات.",
        "highlights": [
          "عرض الأجهزة والإلكترونيات",
          "تصنيفات للمنتجات",
          "تجربة إتمام الطلب"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "هوية بصرية لمطعم الملكي",
        "categoryLabel": "هوية بصرية",
        "summary": "هوية بصرية فاخرة صُممت لتعكس جودة المطعم ورقيه، وتشمل الشعار، والألوان، والمطبوعات، والتغليف بأسلوب يعزز حضور العلامة التجارية.",
        "highlights": [
          "شعار وهوية بصرية",
          "نظام ألوان",
          "مطبوعات وتغليف"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "هوية بصرية لشركة ميلانو",
        "categoryLabel": "هوية بصرية",
        "summary": "هوية تقنية حديثة تجمع بين البساطة والابتكار، مع شعار احترافي ونظام بصري متكامل يعكس هوية الشركة ويعزز حضورها في السوق.",
        "highlights": [
          "شعار احترافي",
          "نظام بصري متكامل",
          "هوية بطابع تقني حديث"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "الحملة التسويقية لمتجر فخري للعطور",
        "categoryLabel": "تسويق",
        "summary": "حملة تسويقية رقمية متكاملة تضمنت استراتيجية المحتوى، وتصاميم الإعلانات، وحملات التواصل الاجتماعي لتعزيز الوعي بالعلامة.",
        "highlights": [
          "استراتيجية محتوى",
          "تصاميم إعلانية",
          "حملات على شبكات التواصل"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "فخري للعطور",
        "categoryLabel": "متاجر",
        "summary": "متجر إلكتروني فاخر للعطور بتصميم راقٍ وتجربة تسوق مميزة، يركز على إبراز المنتجات الفاخرة مع واجهة سهلة الاستخدام.",
        "highlights": [
          "عرض منتجات العطور",
          "تجربة تسوق",
          "واجهة تركز على المنتجات الفاخرة"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "كيدي للملابس",
        "categoryLabel": "متاجر",
        "summary": "متجر إلكتروني متخصص في ملابس الأطفال، يقدم تجربة تسوق عصرية مع تصنيفات واضحة، وعرض جذاب للمنتجات يضمن سهولة التصفح والشراء.",
        "highlights": [
          "تصنيفات واضحة",
          "عرض منتجات ملابس الأطفال",
          "تجربة تصفح وشراء"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
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
      "en": "content_required"
    },
    "content": {
      "ar": {
        "title": "مكتب الحباري للمحاماة",
        "categoryLabel": "مواقع",
        "summary": "موقع إلكتروني احترافي لمكتب محاماة واستشارات قانونية، صُمم لإبراز الخدمات القانونية وتعزيز الثقة من خلال واجهة أنيقة وتجربة استخدام سلسة.",
        "highlights": [
          "عرض الخدمات القانونية",
          "واجهة احترافية",
          "تجربة تركز على الثقة وسهولة الاستخدام"
        ],
        "caseStudy": null,
        "seo": null
      },
      "en": null
    },
    "links": {
      "live": null,
      "inquiry": "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة موقع مشابه لمكتب الحباري."
    }
  }
];

function phase2bProjectRecord(project) {
  return Object.freeze({
    ...project,
    year: null,
    client: Object.freeze({
      publicName: null,
      attributionApproved: null
    }),
    projectStatus: null,
    platformType: null,
    technologies: Object.freeze([]),
    gallery: Object.freeze([]),
    contentState: CONTENT_STATE.PARTIAL,
    fieldState: createFieldState(projectFieldKeys, {
      identity: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      cover: CONTENT_STATE.READY,
      gallery: CONTENT_STATE.CONTENT_REQUIRED,
      year: CONTENT_STATE.CONTENT_REQUIRED,
      clientAttribution: CONTENT_STATE.NOT_VERIFIED,
      projectStatus: CONTENT_STATE.CONTENT_REQUIRED,
      liveUrl: CONTENT_STATE.CONTENT_REQUIRED,
      platformType: CONTENT_STATE.CONTENT_REQUIRED,
      technologies: CONTENT_STATE.CONTENT_REQUIRED,
      scope: CONTENT_STATE.PARTIAL,
      waslContribution: CONTENT_STATE.CONTENT_REQUIRED,
      contextChallenge: CONTENT_STATE.CONTENT_REQUIRED,
      outcomes: CONTENT_STATE.CONTENT_REQUIRED,
      seo: CONTENT_STATE.CONTENT_REQUIRED,
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
