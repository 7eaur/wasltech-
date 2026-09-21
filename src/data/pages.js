import { CONTENT_STATE, createFieldState, pageFieldKeys } from "./content-contracts.js";

const draftLocale = Object.freeze({ ar: "draft", en: "content_required" });
const requiredLocale = Object.freeze({ ar: "content_required", en: "content_required" });

function page({
  id,
  routeKey,
  state = CONTENT_STATE.PARTIAL,
  fieldState,
  content,
  evidenceSources = []
}) {
  return Object.freeze({
    id,
    routeKey,
    contentState: state,
    fieldState: createFieldState(pageFieldKeys, fieldState),
    localeStatus: content?.ar ? draftLocale : requiredLocale,
    evidenceSources: Object.freeze(evidenceSources),
    content: Object.freeze({
      ar: content?.ar ?? null,
      en: null
    })
  });
}

/**
 * Canonical page-level content owners for VNext.
 *
 * This file owns page copy shape. Page templates must consume these records rather
 * than reintroducing hard-coded marketing copy. Arabic is draft until Phase 2B
 * review closes; English stays unpublished until reviewed.
 */
export const pages = Object.freeze([
  page({
    id: "home",
    routeKey: "home",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.PARTIAL,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:index.html", "docs/core/PRODUCT.md", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "تعريف الزائر بما تبنيه وصل تك، مساعدته على اكتشاف الخدمة المناسبة، عرض أعمال موثقة، ثم توجيهه إلى بدء نقاش منظم حول مشروعه.",
        kicker: "وصل تك",
        title: "نبني حضورك الرقمي باحتراف.",
        support: "مواقع وتطبيقات ومتاجر وأنظمة وهوية وحضور رقمي للمشاريع في اليمن والخليج، ضمن مسار يربط الهدف بالتصميم والتنفيذ.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد الأعمال",
        seo: Object.freeze({
          title: "وصل تك | Wasl Tech — نبني حضورك الرقمي باحتراف",
          description: "وصل تك تقدم تطوير المواقع والتطبيقات والمتاجر والبرمجة والحلول التقنية والهوية والبروفايلات والتسويق الرقمي للمشاريع في اليمن والخليج."
        })
      })
    }
  }),
  page({
    id: "about",
    routeKey: "about",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.PARTIAL,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:about.html", "docs/core/PRODUCT.md"],
    content: {
      ar: Object.freeze({
        purpose: "شرح طريقة تفكير وصل تك وما الذي يربط التصميم بالتقنية والحضور البصري.",
        kicker: "من نحن",
        title: "نربط الفكرة بالتصميم والتقنية حتى تظهر بشكل متكامل.",
        support: "نعمل على المنتجات الرقمية والهوية والحضور البصري مع تركيز على الوضوح وسهولة الاستخدام وجودة التنفيذ، ونخدم مشاريع في اليمن والخليج.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد الأعمال",
        seo: Object.freeze({
          title: "من نحن | وصل تك — Wasl Tech",
          description: "تعرف على وصل تك وطريقة عملها في بناء المواقع والتطبيقات والمتاجر والأنظمة والهوية والحضور الرقمي للمشاريع في اليمن والخليج."
        })
      })
    }
  }),
  page({
    id: "services",
    routeKey: "services",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:services.html", "main:js/services-data.js", "docs/core/PRODUCT.md"],
    content: {
      ar: Object.freeze({
        purpose: "مساعدة الزائر على تحديد الحل الأقرب لاحتياجه ضمن الخدمات الثماني دون دمج أو حذف أي خدمة.",
        kicker: "الخدمات",
        title: "حلول رقمية مرتبة حول احتياج مشروعك.",
        support: "ثمان خدمات ضمن ثلاثة مسارات: المنتجات الرقمية، الأنظمة والحلول، والهوية والحضور.",
        primaryCta: "استكشف الخدمات",
        secondaryCta: "خطط مشروعك",
        seo: Object.freeze({
          title: "خدمات وصل تك | مواقع وتطبيقات ومتاجر وأنظمة وهوية وتسويق",
          description: "استكشف خدمات وصل تك في تطوير المواقع والتطبيقات والمتاجر والبرمجة والحلول التقنية والبروفايلات والهوية والتسويق الرقمي."
        })
      })
    }
  }),
  page({
    id: "portfolio",
    routeKey: "portfolio",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.PARTIAL,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.PARTIAL
    },
    evidenceSources: ["main:portfolio.html", "main:js/portfolio.js"],
    content: {
      ar: Object.freeze({
        purpose: "عرض الأعمال الموجودة كدليل، مع الفصل بين ما هو مثبت وما يحتاج تفاصيل إضافية قبل تحويله إلى دراسة حالة.",
        kicker: "الأعمال",
        title: "أعمال منفذة تشرح ما بنيناه، لا صور للعرض فقط.",
        support: "استكشف المشاريع حسب النوع، وافتح تفاصيل ما هو موثق منها دون افتراض نتائج أو تقنيات غير مثبتة.",
        primaryCta: "استكشف الأعمال",
        secondaryCta: "ناقش مشروعًا مشابهًا",
        seo: Object.freeze({
          title: "أعمال وصل تك | مشاريع مواقع وتطبيقات ومتاجر وهوية وتسويق",
          description: "نماذج من أعمال وصل تك في المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق، مع عرض المعلومات الموثقة لكل مشروع."
        })
      })
    }
  }),
  page({
    id: "process",
    routeKey: "process",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:process.html"],
    content: {
      ar: Object.freeze({
        purpose: "شرح كيف ينتقل المشروع من الفهم إلى التخطيط ثم التصميم والتنفيذ والمراجعة والإطلاق دون اختراع مدة ثابتة.",
        kicker: "كيف نعمل",
        title: "مسار واضح يقلل الغموض قبل أن يزيد التفاصيل.",
        support: "نبدأ بفهم المشروع، ثم نرتب النطاق والتجربة، وبعدها ننتقل إلى التصميم والتنفيذ والمراجعة والإطلاق.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد الأعمال",
        seo: Object.freeze({
          title: "كيف نعمل | وصل تك — Wasl Tech",
          description: "تعرف على طريقة عمل وصل تك من فهم المشروع والتخطيط إلى التصميم والتطوير والمراجعة والإطلاق."
        })
      })
    }
  }),
  page({
    id: "contact",
    routeKey: "contact",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:contact.html", "main:js/contact-v2.js", "src/config/site.js"],
    content: {
      ar: Object.freeze({
        purpose: "توفير تواصل مباشر منخفض الاحتكاك عبر واتساب والبريد، مع الحفاظ على مسار عام منفصل عن مخطط المشروع.",
        kicker: "تواصل معنا",
        title: "شاركنا الفكرة، ونبدأ من نقطة واضحة.",
        support: "سواء كان المشروع جديدًا أو قائمًا، يكفي أن تشرح الهدف والحالة الحالية وأهم ما تحتاجه الآن.",
        primaryCta: "تواصل عبر واتساب",
        secondaryCta: "ابدأ تخطيط المشروع",
        seo: Object.freeze({
          title: "تواصل معنا | وصل تك — Wasl Tech",
          description: "تواصل مع وصل تك عبر واتساب أو البريد، أو ابدأ بتجهيز معلومات مشروعك قبل النقاش."
        })
      })
    }
  }),
  page({
    id: "startProject",
    routeKey: "startProject",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.PARTIAL,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.PARTIAL
    },
    evidenceSources: ["docs/core/CONTENT_IA.md", "main:contact.html", "main:js/contact-v2.js"],
    content: {
      ar: Object.freeze({
        purpose: "جمع الحد الأدنى من السياق الذي يحول الفكرة العامة إلى بداية نقاش منظم دون أسعار أو مدد مفترضة.",
        kicker: "ابدأ مشروعك",
        title: "رتّب احتياج مشروعك قبل أن تبدأ التفاصيل.",
        support: "حدّد نوع الاحتياج ومرحلة المشروع وأولويته، ثم أضف معلومات التواصل ووصفًا مختصرًا لما تريد تنفيذه أو تحسينه.",
        primaryCta: "راجع الطلب",
        secondaryCta: "واتساب مباشر",
        seo: Object.freeze({
          title: "ابدأ مشروعك | وصل تك — Wasl Tech",
          description: "جهز معلومات مشروعك وخدمته ومرحلته وأولوياته لبدء نقاش منظم مع وصل تك."
        })
      })
    }
  }),
  page({
    id: "faq",
    routeKey: "faq",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.PARTIAL,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:faq.html", "src/data/faq.js"],
    content: {
      ar: Object.freeze({
        purpose: "الإجابة عن الاعتراضات والأسئلة المتكررة قبل التواصل دون تحويل الصفحة إلى نص تسويقي.",
        kicker: "الأسئلة الشائعة",
        title: "إجابات مباشرة قبل أن تبدأ مشروعك.",
        support: "أسئلة عن الخدمات والتنفيذ والبداية، مبنية على المعلومات المتاحة فعليًا.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "تواصل معنا",
        seo: Object.freeze({
          title: "الأسئلة الشائعة | وصل تك — Wasl Tech",
          description: "إجابات على الأسئلة الشائعة حول خدمات وصل تك وبداية المشروع وطريقة التنفيذ."
        })
      })
    }
  }),
  page({
    id: "insights",
    routeKey: "insights",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.PARTIAL,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:blog.html", "src/data/articles.js", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "نشر محتوى معرفي أصلي يخدم قرار العميل والبحث عندما تتوفر مواد مكتملة، مع حالة فارغة صريحة حاليًا.",
        kicker: "المحتوى المعرفي",
        title: "المحتوى الجيد أهم من وجود مدونة فارغة.",
        support: "لا توجد مقالات منشورة حاليًا. تُضاف المواد عندما تكون مكتملة ومفيدة ومرتبطة باحتياجات فعلية.",
        primaryCta: "استكشف الخدمات",
        secondaryCta: "شاهد الأعمال",
        seo: Object.freeze({
          title: "المحتوى المعرفي | وصل تك — Wasl Tech",
          description: "محتوى عملي من وصل تك حول تخطيط المواقع والتطبيقات والمتاجر والأنظمة والهوية والحضور الرقمي عند توفر مواد مكتملة."
        })
      })
    }
  }),
  page({
    id: "careers",
    routeKey: "careers",
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.PARTIAL,
      sections: CONTENT_STATE.CONTENT_REQUIRED,
      cta: CONTENT_STATE.PARTIAL,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.CONTENT_REQUIRED
    },
    evidenceSources: ["src/data/jobs.js", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "عرض فرص العمل الحقيقية عند وجودها مع حالة فارغة صريحة بدل اختراع وظائف أو معلومات فريق.",
        kicker: "الوظائف",
        title: "لا توجد فرص منشورة حاليًا.",
        support: "عند توفر فرصة حقيقية ستظهر هنا بتفاصيلها ومتطلباتها.",
        primaryCta: "استكشف وصل تك",
        secondaryCta: "تواصل معنا",
        seo: Object.freeze({
          title: "الوظائف | وصل تك — Wasl Tech",
          description: "فرص العمل المنشورة لدى وصل تك عند توفر وظائف حقيقية ومعلنة."
        })
      })
    }
  }),
  page({
    id: "privacy",
    routeKey: "privacy",
    state: CONTENT_STATE.CONTENT_REQUIRED,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.CONTENT_REQUIRED,
      sections: CONTENT_STATE.CONTENT_REQUIRED,
      cta: CONTENT_STATE.NOT_APPLICABLE,
      seo: CONTENT_STATE.CONTENT_REQUIRED,
      businessFacts: CONTENT_STATE.CONTENT_REQUIRED
    },
    evidenceSources: ["docs/core/CONTENT_IA.md"],
    content: null
  }),
  page({
    id: "terms",
    routeKey: "terms",
    state: CONTENT_STATE.CONTENT_REQUIRED,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.CONTENT_REQUIRED,
      sections: CONTENT_STATE.CONTENT_REQUIRED,
      cta: CONTENT_STATE.NOT_APPLICABLE,
      seo: CONTENT_STATE.CONTENT_REQUIRED,
      businessFacts: CONTENT_STATE.CONTENT_REQUIRED
    },
    evidenceSources: ["docs/core/CONTENT_IA.md"],
    content: null
  }),
  page({
    id: "notFound",
    routeKey: null,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.NOT_APPLICABLE
    },
    evidenceSources: ["main:404.html"],
    content: {
      ar: Object.freeze({
        purpose: "إعادة المستخدم إلى مسار مفيد عندما لا يوجد الرابط المطلوب.",
        kicker: "الصفحة غير موجودة",
        title: "الرابط لا يقود إلى صفحة متاحة.",
        support: "يمكنك العودة للرئيسية، استكشاف الخدمات، أو فتح معرض الأعمال للوصول إلى المحتوى الذي تحتاجه.",
        primaryCta: "العودة للرئيسية",
        secondaryCta: "الخدمات",
        seo: Object.freeze({
          title: "الصفحة غير موجودة | وصل تك — Wasl Tech",
          description: "الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للرئيسية أو استكشاف خدمات وأعمال وصل تك."
        })
      })
    }
  })
]);

export function getPageContent(id) {
  return pages.find((record) => record.id === id) ?? null;
}
