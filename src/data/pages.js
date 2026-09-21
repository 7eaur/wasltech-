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
        purpose: "تقديم نبني حضورك الرقمي باحتراف بسرعة ووضوح، مساعدة الزائر على فهم ما يمكن بناؤه أو تطويره، ثم نقله من الاستكشاف إلى مشروع أو تواصل فعلي.",
        kicker: "نبني حضورك الرقمي باحتراف",
        title: "نحوّل فكرتك إلى تجربة رقمية واضحة تخدم مشروعك.",
        support: "من الموقع والتطبيق إلى المتجر والنظام والهوية والمحتوى، نرتب ما يحتاجه مشروعك حول هدف واضح ونحوّله إلى تجربة أسهل في الفهم والاستخدام.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد أعمالنا",
        seo: Object.freeze({
          title: "نبني حضورك الرقمي باحتراف | Wasl Tech — نبني حضورك الرقمي باحتراف",
          description: "نبني حضورك الرقمي باحتراف تقدم تطوير المواقع والتطبيقات والمتاجر والبرمجة والحلول التقنية والهوية والبروفايلات والتسويق الرقمي للمشاريع في اليمن والخليج."
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
        purpose: "شرح طريقة تفكير نبني حضورك الرقمي باحتراف وما الذي يربط التصميم بالتقنية والحضور البصري.",
        kicker: "عن وصل تك",
        title: "لا نبني واجهة فقط؛ نبني الطريقة التي يظهر ويعمل بها مشروعك.",
        support: "نجمع بين التصميم والتطوير والمحتوى لنحوّل الفكرة إلى حضور رقمي منظم وواضح، مع تنفيذ يناسب طبيعة المشروع واحتياجه في اليمن والخليج.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد أعمالنا",
        seo: Object.freeze({
          title: "عن وصل تك | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "تعرف على نبني حضورك الرقمي باحتراف وطريقة عملها في بناء المواقع والتطبيقات والمتاجر والأنظمة والهوية والحضور الرقمي للمشاريع في اليمن والخليج."
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
        purpose: "مساعدة الزائر على الوصول إلى الخدمة أو المسار الأقرب لاحتياجه من دون إغراقه في قائمة خدمات أو تفاصيل لا يحتاجها بعد.",
        kicker: "الخدمات",
        title: "ابدأ من احتياج مشروعك، وليس من اسم الخدمة.",
        support: "نبني المنتجات الرقمية والأنظمة والحلول، ونطوّر الهوية والحضور؛ ثماني خدمات يمكن أن تعمل منفردة أو ضمن مشروع واحد حسب الحاجة.",
        primaryCta: "اختر ما تحتاجه",
        secondaryCta: "ابدأ تخطيط مشروعك",
        seo: Object.freeze({
          title: "خدمات نبني حضورك الرقمي باحتراف | مواقع وتطبيقات ومتاجر وأنظمة وهوية وتسويق",
          description: "استكشف خدمات نبني حضورك الرقمي باحتراف في تطوير المواقع والتطبيقات والمتاجر والبرمجة والحلول التقنية والبروفايلات والهوية والتسويق الرقمي."
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
        purpose: "عرض أعمالنا كدليل على نوع المشاريع التي نفذتها وصل تك، مع تقديم كل مشروع بقدر المعلومات الحقيقية المتوفرة عنه.",
        kicker: "أعمالنا",
        title: "أعمال حقيقية، ولكل مشروع منها هدف مختلف.",
        support: "استكشف نماذج من المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق، وشاهد كيف يختلف الحل باختلاف طبيعة المشروع.",
        primaryCta: "استكشف أعمالنا",
        secondaryCta: "عندي مشروع مشابه",
        seo: Object.freeze({
          title: "أعمال نبني حضورك الرقمي باحتراف | مشاريع مواقع وتطبيقات ومتاجر وهوية وتسويق",
          description: "نماذج من أعمال نبني حضورك الرقمي باحتراف في المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق، مع عرض المعلومات الموثقة لكل مشروع."
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
        purpose: "شرح مسار العمل بطريقة بسيطة توضح ما الذي يحدث من أول نقاش حتى المراجعة والإطلاق.",
        kicker: "كيف نعمل",
        title: "نبدأ بالفهم، ثم نبني على قرار واضح.",
        support: "نفهم الهدف والاحتياج أولًا، نرتب النطاق والتجربة، ثم نصمم وننفذ ونراجع قبل الإطلاق.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد أعمالنا",
        seo: Object.freeze({
          title: "كيف نعمل | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "تعرف على طريقة عمل نبني حضورك الرقمي باحتراف من فهم المشروع والتخطيط إلى التصميم والتطوير والمراجعة والإطلاق."
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
        purpose: "جعل التواصل سهلًا ومباشرًا، سواء كان الزائر يريد سؤالًا سريعًا أو مناقشة مشروع يحتاج تفاصيل أكثر.",
        kicker: "تواصل معنا",
        title: "احكِ لنا عن مشروعك كما هو.",
        support: "فكرة جديدة، مشروع قائم، أو شيء يحتاج تحسينًا؛ اشرح لنا ما لديك الآن وما الذي تريد الوصول إليه، ونبدأ من هناك.",
        primaryCta: "تواصل عبر واتساب",
        secondaryCta: "جهّز تفاصيل مشروعك",
        seo: Object.freeze({
          title: "تواصل معنا | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "تواصل مع نبني حضورك الرقمي باحتراف عبر واتساب أو البريد، أو ابدأ بتجهيز معلومات مشروعك قبل النقاش."
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
        purpose: "جمع المعلومات التي نحتاجها لفهم المشروع قبل اقتراح الحل أو ترتيب الخطوات التالية.",
        kicker: "ابدأ مشروعك",
        title: "دعنا نفهم مشروعك قبل أن نحدد الحل.",
        support: "أخبرنا بما تريد بناءه أو تطويره، وأين وصل المشروع الآن، وما الأولوية بالنسبة لك؛ معلومات بسيطة تساعدنا على بدء النقاش من مكان صحيح.",
        primaryCta: "راجع التفاصيل",
        secondaryCta: "تواصل مباشرة",
        seo: Object.freeze({
          title: "ابدأ مشروعك | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "جهز معلومات مشروعك وخدمته ومرحلته وأولوياته لبدء نقاش منظم مع نحوّل فكرتك إلى تجربة رقمية واضحة تخدم مشروعك."
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
        purpose: "الإجابة عن الأسئلة التي يحتاج العميل معرفتها قبل بدء المشروع أو التواصل.",
        kicker: "الأسئلة الشائعة",
        title: "قبل أن تبدأ، هذه أكثر الأسئلة التي تهمك.",
        support: "إجابات مختصرة وواضحة حول الخدمات، طريقة التنفيذ، وما الذي تحتاجه للبدء.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "تواصل معنا",
        seo: Object.freeze({
          title: "الأسئلة الشائعة | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "إجابات على الأسئلة الشائعة حول خدمات نبني حضورك الرقمي باحتراف وبداية المشروع وطريقة التنفيذ."
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
        purpose: "تقديم محتوى عملي يساعد أصحاب المشاريع على فهم الخيارات واتخاذ قرارات أفضل قبل وأثناء التنفيذ.",
        kicker: "أفكار ومعرفة",
        title: "محتوى يساعدك على اتخاذ قرار أفضل قبل أن تبدأ.",
        support: "لا توجد مقالات منشورة حاليًا. عندما ننشر، سيكون المحتوى عمليًا ومباشرًا ومرتبطًا بأسئلة حقيقية يواجهها أصحاب المشاريع.",
        primaryCta: "اختر ما تحتاجه",
        secondaryCta: "شاهد أعمالنا",
        seo: Object.freeze({
          title: "أفكار ومعرفة | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "محتوى عملي من نبني حضورك الرقمي باحتراف حول تخطيط المواقع والتطبيقات والمتاجر والأنظمة والهوية والحضور الرقمي عند توفر مواد مكتملة."
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
        purpose: "عرض فرص العمل الفعلية عندما تكون هناك وظائف مفتوحة، مع إبقاء الصفحة واضحة وصريحة عند عدم وجود فرص.",
        kicker: "الوظائف",
        title: "لا توجد فرص منشورة حاليًا.",
        support: "عندما تتوفر فرصة جديدة سننشر هنا دورها ومتطلباتها وطريقة التقديم.",
        primaryCta: "استكشف نبني حضورك الرقمي باحتراف",
        secondaryCta: "تواصل معنا",
        seo: Object.freeze({
          title: "الوظائف | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "فرص العمل المنشورة لدى نبني حضورك الرقمي باحتراف عند توفر وظائف حقيقية ومعلنة."
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
        purpose: "مساعدة المستخدم على العودة بسرعة إلى محتوى مفيد عندما يصل إلى رابط غير متاح.",
        kicker: "الصفحة غير موجودة",
        title: "يبدو أن هذه الصفحة لم تعد هنا.",
        support: "يمكنك العودة للرئيسية، استكشاف الخدمات، أو فتح معرض أعمالنا للوصول إلى المحتوى الذي تحتاجه.",
        primaryCta: "العودة للرئيسية",
        secondaryCta: "الخدمات",
        seo: Object.freeze({
          title: "الصفحة غير موجودة | نبني حضورك الرقمي باحتراف — Wasl Tech",
          description: "الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للرئيسية أو استكشاف خدمات وأعمال نحوّل فكرتك إلى تجربة رقمية واضحة تخدم مشروعك."
        })
      })
    }
  })
]);

export function getPageContent(id) {
  return pages.find((record) => record.id === id) ?? null;
}
