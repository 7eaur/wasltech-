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
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:index.html", "docs/core/PRODUCT.md", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "تقديم وصل تك بسرعة ووضوح، مساعدة الزائر على فهم ما يمكن بناؤه أو تطويره، ثم نقله من الاستكشاف إلى مشروع أو تواصل فعلي.",
        kicker: "نبني حضورك الرقمي باحتراف",
        title: "نحوّل فكرتك إلى تجربة رقمية واضحة تخدم مشروعك.",
        support: "من الموقع والتطبيق إلى المتجر والنظام والهوية والمحتوى، نرتب ما يحتاجه مشروعك حول هدف واضح ونحوّله إلى تجربة أسهل في الفهم والاستخدام.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد أعمالنا",
        sections: Object.freeze([
          Object.freeze({
            id: "services",
            kicker: "ما الذي نبنيه",
            title: "اختر الحل من احتياجك، لا من قائمة خدمات.",
            support: "مواقع وتطبيقات ومتاجر وأنظمة وهوية ومحتوى؛ نرتبها حول ما يحتاجه مشروعك الآن وما يمكن أن يتوسع إليه لاحقًا."
          }),
          Object.freeze({
            id: "work",
            kicker: "أعمال مختارة",
            title: "أفضل دليل على طريقة عملنا هو ما بنيناه.",
            support: "استكشف مشاريع مختلفة في الهدف والنطاق، وشاهد كيف تتغير التجربة عندما يتغير احتياج المشروع."
          }),
          Object.freeze({
            id: "approach",
            kicker: "لماذا وصل تك",
            title: "نربط الفكرة بالمحتوى والتصميم والتقنية.",
            support: "حتى لا يبدو المشروع جميلًا فقط، بل يكون واضحًا في رسالته ومنظمًا في تجربته وقابلًا للتنفيذ والتطوير."
          }),
          Object.freeze({
            id: "process",
            kicker: "كيف نعمل",
            title: "قرارات أوضح قبل تفاصيل أكثر.",
            support: "نفهم الهدف، نرتب النطاق، نصمم وننفذ، ثم نراجع قبل الإطلاق بدل القفز مباشرة إلى الشكل."
          }),
          Object.freeze({
            id: "faq",
            kicker: "قبل أن تبدأ",
            title: "الأسئلة المهمة تستحق إجابات مباشرة.",
            support: "من اختيار الخدمة إلى المدة والتعديلات والتكاملات، جمعنا ما يساعدك على تكوين صورة أوضح قبل التواصل."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "ابدأ من فكرتك",
            title: "عندك مشروع؟ احكِ لنا ما تريد الوصول إليه.",
            support: "لا تحتاج إلى تجهيز وثيقة طويلة؛ شاركنا الفكرة والوضع الحالي والأولوية، ونرتب معك نقطة البداية."
          })
        ]),
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
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY
    },
    evidenceSources: ["main:about.html", "docs/core/PRODUCT.md"],
    content: {
      ar: Object.freeze({
        purpose: "توضيح كيف تفكر وصل تك في المشروع كمنظومة واحدة تجمع الفكرة والمحتوى والتجربة والتقنية بدل التعامل مع كل جزء بمعزل عن الآخر.",
        kicker: "عن وصل تك",
        title: "لا نبني واجهة فقط؛ نبني الطريقة التي يظهر ويعمل بها مشروعك.",
        support: "نجمع بين التصميم والتطوير والمحتوى لنحوّل الفكرة إلى حضور رقمي منظم وواضح، مع تنفيذ يناسب طبيعة المشروع واحتياجه في اليمن والخليج.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد الأعمال",
        sections: Object.freeze([
          Object.freeze({
            id: "positioning",
            kicker: "طريقتنا",
            title: "ننظر للمشروع كمنظومة واحدة.",
            support: "المحتوى والتصميم والتطوير ليست مراحل منفصلة؛ كل قرار فيها يؤثر على التجربة التي يراها ويستخدمها العميل."
          }),
          Object.freeze({
            id: "build",
            kicker: "ما نبنيه",
            title: "من الحضور الرقمي إلى المنتج الذي يستخدمه العميل.",
            support: "ننفذ مواقع وتطبيقات ومتاجر وأنظمة، ونبني الهوية والبروفايلات والمحتوى الذي يشرح المشروع ويكمل تجربته."
          }),
          Object.freeze({
            id: "principles",
            kicker: "مبادئ العمل",
            title: "وضوح قبل الزخرفة، ونطاق قبل الإضافات.",
            support: "نفضّل أن يكون لكل قرار سبب، ولكل عنصر وظيفة، ولكل مرحلة نتيجة يمكن مراجعتها بدل تضخيم المشروع بلا حاجة."
          }),
          Object.freeze({
            id: "market",
            kicker: "السوق",
            title: "نفهم احتياج المشاريع في اليمن والخليج.",
            support: "نكتب ونصمم ونبني بتجربة عربية واضحة، مع بنية ثنائية اللغة عندما يحتاج المشروع الوصول إلى جمهور أوسع."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "مشروعك التالي",
            title: "إذا كانت الفكرة واضحة أو ما زالت تتشكل، نبدأ من نفس المكان: الفهم.",
            support: "شاركنا ما لديك الآن وما تريد تغييره، ونرتب معك الطريق من هناك."
          })
        ]),
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
        purpose: "مساعدة الزائر على الوصول إلى الخدمة أو المسار الأقرب لاحتياجه من دون إغراقه في قائمة خدمات أو تفاصيل لا يحتاجها بعد.",
        kicker: "الخدمات",
        title: "ابدأ من احتياج مشروعك، وليس من اسم الخدمة.",
        support: "نبني المنتجات الرقمية والأنظمة والحلول، ونطوّر الهوية والحضور؛ ثماني خدمات يمكن أن تعمل منفردة أو ضمن مشروع واحد حسب الحاجة.",
        primaryCta: "اختر ما تحتاجه",
        secondaryCta: "ابدأ تخطيط مشروعك",
        sections: Object.freeze([
          Object.freeze({
            id: "digital-products",
            kicker: "المنتجات الرقمية",
            title: "واجهات يستخدمها العميل كل يوم.",
            support: "مواقع وتطبيقات ومتاجر تُبنى حول رحلة المستخدم والهدف التجاري، لا حول عدد الصفحات أو الشاشات."
          }),
          Object.freeze({
            id: "systems",
            kicker: "الأنظمة والحلول",
            title: "عندما تحتاج طريقة العمل نفسها إلى أن تصبح أوضح.",
            support: "برمجة مخصصة وربط وأتمتة وتنظيم بيانات عندما لا يكون الحل الجاهز كافيًا أو مناسبًا."
          }),
          Object.freeze({
            id: "brand-presence",
            kicker: "الهوية والحضور",
            title: "ما يراه العميل يجب أن يقول نفس الرسالة.",
            support: "هوية وبروفايلات ومحتوى وتسويق تعمل معًا حتى يظهر المشروع بصورة متسقة ومفهومة."
          }),
          Object.freeze({
            id: "unsure",
            kicker: "لست متأكدًا من الخدمة",
            title: "ابدأ بالمشكلة، وسنصل إلى الخدمة بعدها.",
            support: "صف ما تريد تحسينه أو بناءه بدل محاولة اختيار مسمى تقني من البداية."
          })
        ]),
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
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.PARTIAL,
      businessFacts: CONTENT_STATE.PARTIAL
    },
    evidenceSources: ["main:portfolio.html", "main:js/portfolio.js"],
    content: {
      ar: Object.freeze({
        purpose: "عرض الأعمال كدليل على نوع المشاريع التي نفذتها وصل تك، مع تقديم كل مشروع بقدر المعلومات الحقيقية المتوفرة عنه.",
        kicker: "أعمالنا",
        title: "أعمال حقيقية، ولكل مشروع منها هدف مختلف.",
        support: "استكشف نماذج من المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق، وشاهد كيف يختلف الحل باختلاف طبيعة المشروع.",
        primaryCta: "تصفح الأعمال",
        secondaryCta: "عندي مشروع مشابه",
        sections: Object.freeze([
          Object.freeze({
            id: "evidence",
            kicker: "المشاريع",
            title: "كل مشروع هنا يمثل نوعًا مختلفًا من الحلول.",
            support: "من المنصات والأنظمة إلى المتاجر والهوية، نعرض العمل بما يساعدك على فهم نطاقه لا بمجرد صورة الغلاف."
          }),
          Object.freeze({
            id: "case-studies",
            kicker: "داخل المشروع",
            title: "نشرح ماذا بُني ولماذا هذا النطاق.",
            support: "عندما تتوفر التفاصيل، نعرض السياق والمكونات والمخرجات حتى تصبح دراسة الحالة مفيدة لمن يفكر في مشروع مشابه."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "لديك فكرة مشابهة",
            title: "لا تحتاج أن يكون مشروعك نسخة من أحد هذه الأعمال.",
            support: "شاركنا ما أعجبك وما المختلف في احتياجك، ونبني النقاش حول مشروعك أنت."
          })
        ]),
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
        purpose: "شرح مسار العمل بطريقة بسيطة توضح ما الذي يحدث من أول نقاش حتى المراجعة والإطلاق.",
        kicker: "كيف نعمل",
        title: "نبدأ بالفهم، ثم نبني على قرار واضح.",
        support: "نفهم الهدف والاحتياج أولًا، نرتب النطاق والتجربة، ثم نصمم وننفذ ونراجع قبل الإطلاق.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد الأعمال",
        sections: Object.freeze([
          Object.freeze({
            id: "understand",
            kicker: "01 — الفهم",
            title: "نبدأ من الهدف والمشكلة والسياق.",
            support: "من سيستخدم المشروع؟ ماذا يجب أن ينجز؟ وما الموجود الآن؟ هذه الإجابات تمنعنا من حل المشكلة الخطأ."
          }),
          Object.freeze({
            id: "plan",
            kicker: "02 — التخطيط",
            title: "نحوّل الفكرة إلى نطاق يمكن اتخاذ قرار بشأنه.",
            support: "نرتب الأولويات والمحتوى والوظائف والمسار قبل أن تصبح التفاصيل مكلفة أو متداخلة."
          }),
          Object.freeze({
            id: "build",
            kicker: "03 — التصميم والتنفيذ",
            title: "نبني على قرارات اتفقنا على سببها.",
            support: "التصميم والتطوير يتحركان ضمن نطاق واضح ومراجعات مرحلية بدل انتظار نسخة نهائية مفاجئة."
          }),
          Object.freeze({
            id: "review-launch",
            kicker: "04 — المراجعة والإطلاق",
            title: "نراجع التجربة قبل أن نعتبرها منتهية.",
            support: "نختبر السيناريوهات الأساسية والمحتوى والاستجابة والتفاصيل، ثم نجهز النسخة للإطلاق أو التسليم."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "جاهز للبدء",
            title: "أول خطوة ليست التعاقد؛ أول خطوة أن نفهم المشروع.",
            support: "شاركنا الفكرة والمرحلة الحالية، ونرتب معك ما الذي يستحق أن يحدث بعد ذلك."
          })
        ]),
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
        purpose: "جعل التواصل سهلًا ومباشرًا، سواء كان الزائر يريد سؤالًا سريعًا أو مناقشة مشروع يحتاج تفاصيل أكثر.",
        kicker: "تواصل معنا",
        title: "احكِ لنا عن مشروعك كما هو.",
        support: "فكرة جديدة، مشروع قائم، أو شيء يحتاج تحسينًا؛ اشرح لنا ما لديك الآن وما الذي تريد الوصول إليه، ونبدأ من هناك.",
        primaryCta: "تواصل عبر واتساب",
        secondaryCta: "جهّز تفاصيل مشروعك",
        sections: Object.freeze([
          Object.freeze({
            id: "direct",
            kicker: "تواصل مباشر",
            title: "لسؤال سريع، واتساب أو البريد يكفي.",
            support: "إذا كان استفسارك محددًا أو تريد معرفة الخطوة التالية، استخدم القناة الأنسب لك."
          }),
          Object.freeze({
            id: "project",
            kicker: "مشروع جديد أو قائم",
            title: "إذا كانت التفاصيل أكثر، ابدأ من مخطط المشروع.",
            support: "سنطلب منك فقط المعلومات التي تساعدنا على فهم الاحتياج بدل تبادل رسائل طويلة من البداية."
          }),
          Object.freeze({
            id: "context",
            kicker: "ماذا ترسل؟",
            title: "الهدف أهم من المصطلحات التقنية.",
            support: "أخبرنا ماذا تريد أن تبني أو تحسن، ما الموجود حاليًا، ومن سيستخدمه؛ والباقي نرتبه معك."
          })
        ]),
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
        purpose: "جمع المعلومات التي نحتاجها لفهم المشروع قبل اقتراح الحل أو ترتيب الخطوات التالية.",
        kicker: "ابدأ مشروعك",
        title: "دعنا نفهم مشروعك قبل أن نحدد الحل.",
        support: "أخبرنا بما تريد بناءه أو تطويره، وأين وصل المشروع الآن، وما الأولوية بالنسبة لك؛ معلومات بسيطة تساعدنا على بدء النقاش من مكان صحيح.",
        primaryCta: "راجع التفاصيل",
        secondaryCta: "تواصل مباشرة",
        sections: Object.freeze([
          Object.freeze({
            id: "need",
            kicker: "01 — الاحتياج",
            title: "ماذا تريد أن تبني أو تطور؟",
            support: "اختر المجال الأقرب أو اتركه غير محدد إذا كان المطلوب ما يزال فكرة عامة."
          }),
          Object.freeze({
            id: "stage",
            kicker: "02 — المرحلة",
            title: "أين وصل المشروع الآن؟",
            support: "فكرة جديدة، مشروع قائم، إعادة تصميم أو إضافة وظائف؛ المرحلة تغيّر نوع الأسئلة والقرارات التالية."
          }),
          Object.freeze({
            id: "priority",
            kicker: "03 — الأولوية",
            title: "ما الذي تريد تحقيقه أولًا؟",
            support: "نسخة أولى قابلة للاستخدام، نطاق كامل، تطوير مرحلي، أو استشارة قبل القرار."
          }),
          Object.freeze({
            id: "context",
            kicker: "04 — السياق",
            title: "أعطنا ما يكفي لنفهم الصورة.",
            support: "الاسم ووسيلة التواصل والمشروع الحالي إن وجد ووصف مختصر لما تريد الوصول إليه."
          }),
          Object.freeze({
            id: "review",
            kicker: "قبل الإرسال",
            title: "راجع التفاصيل قبل أن تبدأ المحادثة.",
            support: "الهدف أن تصل الرسالة الأولى مرتبة وواضحة حتى نبدأ من الأسئلة الصحيحة."
          })
        ]),
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
        purpose: "الإجابة عن الأسئلة التي يحتاج العميل معرفتها قبل بدء المشروع أو التواصل.",
        kicker: "الأسئلة الشائعة",
        title: "قبل أن تبدأ، هذه أكثر الأسئلة التي تهمك.",
        support: "إجابات مختصرة وواضحة حول الخدمات، طريقة التنفيذ، وما الذي تحتاجه للبدء.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "تواصل معنا",
        sections: Object.freeze([
          Object.freeze({
            id: "start",
            kicker: "قبل البداية",
            title: "لا تحتاج أن تعرف كل شيء قبل أن تتواصل.",
            support: "الهدف أن تكون لديك صورة كافية لاتخاذ الخطوة التالية، لا أن تصبح خبيرًا تقنيًا."
          }),
          Object.freeze({
            id: "products",
            kicker: "المنتجات الرقمية",
            title: "أسئلة المواقع والتطبيقات والمتاجر.",
            support: "الاستجابة، الإدارة، التكاملات، الدفع والشحن من أكثر النقاط التي تتكرر قبل التنفيذ."
          }),
          Object.freeze({
            id: "presence",
            kicker: "الهوية والحضور",
            title: "ما الذي يمكن تنفيذه كخدمة مستقلة؟",
            support: "الهوية والبروفايل وخطة المحتوى يمكن أن تكون مشاريع مستقلة أو أجزاء من مشروع أوسع."
          }),
          Object.freeze({
            id: "workflow",
            kicker: "طريقة العمل",
            title: "ماذا يحدث بعد أن نبدأ؟",
            support: "المدة والمراحل والتعديلات تُفهم من نطاق المشروع وليس من إجابة واحدة تصلح للجميع."
          })
        ]),
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
      sections: CONTENT_STATE.READY,
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
        primaryCta: "استكشف الخدمات",
        secondaryCta: "شاهد الأعمال",
        sections: Object.freeze([
          Object.freeze({
            id: "purpose",
            kicker: "لماذا نكتب",
            title: "نشرح القرارات التي يواجهها صاحب المشروع قبل التنفيذ.",
            support: "المحتوى هنا سيكون أدلة ومقارنات وقوائم عملية مرتبطة بالمواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق."
          }),
          Object.freeze({
            id: "empty",
            kicker: "حاليًا",
            title: "لا توجد مقالات منشورة بعد.",
            support: "لن نملأ القسم بمحتوى لمجرد وجود مدونة؛ أول مادة تُنشر يجب أن تكون مفيدة فعلًا وقابلة للرجوع إليها."
          })
        ]),
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
      sections: CONTENT_STATE.READY,
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
        primaryCta: "استكشف وصل تك",
        secondaryCta: "تواصل معنا",
        sections: Object.freeze([
          Object.freeze({
            id: "empty",
            kicker: "الفرص الحالية",
            title: "لا توجد وظائف مفتوحة منشورة حاليًا.",
            support: "عندما نفتح فرصة، سننشر الدور والمتطلبات وطريقة التقديم هنا بدل استقبال طلبات على وظائف غير معلنة."
          }),
          Object.freeze({
            id: "about-work",
            kicker: "العمل معنا",
            title: "نفضّل الوضوح والمسؤولية وجودة التنفيذ.",
            support: "تفاصيل أي دور وطريقة العمل والمتطلبات ستظهر مع الإعلان نفسه عندما تكون هناك فرصة فعلية."
          })
        ]),
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
      sections: CONTENT_STATE.NOT_APPLICABLE,
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
        support: "يمكنك العودة إلى الرئيسية، تصفح الخدمات، أو مشاهدة أعمالنا للوصول إلى ما تبحث عنه.",
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
