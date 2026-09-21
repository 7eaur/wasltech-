import { CONTENT_STATE, createFieldState, pageFieldKeys } from "./content-contracts.js";

function localeStatusForContent(content = {}) {
  return Object.freeze({
    ar: content.ar ? "draft" : "content_required",
    en: content.en ? "draft" : "content_required"
  });
}

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
    localeStatus: localeStatusForContent(content),
    evidenceSources: Object.freeze(evidenceSources),
    content: Object.freeze({
      ar: content?.ar ?? null,
      en: content?.en ?? null
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
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Introduce Wasl Tech quickly and clearly, help visitors understand what can be built or improved, then move them from exploration to a real project conversation.",
        kicker: "We build your digital presence professionally",
        title: "We turn your idea into a clear digital experience that serves your business.",
        support: "From websites and apps to e-commerce, custom systems, brand identity, and content, we organize what your project needs around a clear goal and turn it into an experience that is easier to understand and use.",
        primaryCta: "Start your project",
        secondaryCta: "View our work",
        sections: Object.freeze([
          Object.freeze({
            id: "services",
            kicker: "What we build",
            title: "Choose the solution from your need, not from a service list.",
            support: "Websites, apps, e-commerce, systems, identity, and content—organized around what your project needs now and how it may grow later."
          }),
          Object.freeze({
            id: "work",
            kicker: "Selected work",
            title: "The clearest proof of how we work is what we have built.",
            support: "Explore projects with different goals and scopes, and see how the solution changes when the project need changes."
          }),
          Object.freeze({
            id: "approach",
            kicker: "Why Wasl Tech",
            title: "We connect the idea, content, design, and technology.",
            support: "So the result does not only look good—it communicates clearly, works as a coherent experience, and can be built and improved with purpose."
          }),
          Object.freeze({
            id: "process",
            kicker: "How we work",
            title: "Clearer decisions before more details.",
            support: "We understand the goal, define the scope, design and build, then review before launch instead of jumping straight into visuals."
          }),
          Object.freeze({
            id: "faq",
            kicker: "Before you start",
            title: "Important questions deserve direct answers.",
            support: "From choosing a service to timelines, changes, and integrations, we cover what helps you build a clearer picture before you contact us."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Start with the idea",
            title: "Have a project? Tell us what you want to achieve.",
            support: "You do not need a long brief. Share the idea, the current situation, and the priority, and we will help organize the right starting point."
          })
        ]),
        seo: Object.freeze({
          title: "Wasl Tech | Websites, Apps, Systems, Branding & Digital Growth",
          description: "Wasl Tech builds websites, mobile apps, e-commerce experiences, custom systems, technical solutions, company profiles, brand identities, and digital content for businesses in Yemen and the Gulf."
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
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Explain how Wasl Tech approaches a project as one connected system of idea, content, experience, and technology rather than treating each part in isolation.",
        kicker: "About Wasl Tech",
        title: "We do not just build an interface; we build how your project looks and works.",
        support: "We bring design, development, and content together to turn an idea into a clear, organized digital presence that fits the project and its needs across Yemen and the Gulf.",
        primaryCta: "Start your project",
        secondaryCta: "View our work",
        sections: Object.freeze([
          Object.freeze({
            id: "positioning",
            kicker: "Our approach",
            title: "We see the project as one connected system.",
            support: "Content, design, and development are not isolated stages. Each decision shapes the experience your customer sees and uses."
          }),
          Object.freeze({
            id: "build",
            kicker: "What we build",
            title: "From digital presence to products customers actually use.",
            support: "We build websites, apps, stores, and systems, and create the identity, profiles, and content that explain the project and complete the experience."
          }),
          Object.freeze({
            id: "principles",
            kicker: "How we decide",
            title: "Clarity before decoration. Scope before extra features.",
            support: "We prefer every decision to have a reason, every element to have a role, and every stage to produce something that can be reviewed."
          }),
          Object.freeze({
            id: "market",
            kicker: "Our market",
            title: "We understand projects in Yemen and the Gulf.",
            support: "We write, design, and build with a clear Arabic-first experience, with bilingual foundations when the project needs to reach a wider audience."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Your next project",
            title: "Whether the idea is clear or still taking shape, we start in the same place: understanding.",
            support: "Share what you have today and what you want to change, and we will organize the path from there."
          })
        ]),
        seo: Object.freeze({
          title: "About Wasl Tech | Digital Products, Systems & Brand Experiences",
          description: "Learn how Wasl Tech combines design, development, and content to build websites, apps, e-commerce, systems, and digital brand experiences for businesses in Yemen and the Gulf."
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
      businessFacts: CONTENT_STATE.PARTIAL,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Present Wasl Tech work as evidence of the kinds of projects we build, using only the real information available for each project.",
        kicker: "Our work",
        title: "Real projects, each built around a different goal.",
        support: "Explore examples across websites, apps, stores, systems, identity, and marketing, and see how the solution changes with the nature of the project.",
        primaryCta: "Explore the work",
        secondaryCta: "I have a similar project",
        sections: Object.freeze([
          Object.freeze({
            id: "evidence",
            kicker: "Projects",
            title: "Each project here represents a different kind of solution.",
            support: "From platforms and internal systems to stores and identity work, we present each project through its actual scope—not just a cover image."
          }),
          Object.freeze({
            id: "case-studies",
            kicker: "Inside the project",
            title: "We explain what was built and why that scope made sense.",
            support: "Where details are available, we show the context, components, and delivered outputs so the project is useful to someone considering something similar."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Have something similar in mind?",
            title: "Your project does not need to be a copy of any project here.",
            support: "Tell us what you liked and what is different about your need, and we will shape the conversation around your project."
          })
        ]),
        seo: Object.freeze({
          title: "Wasl Tech Portfolio | Websites, Apps, E-commerce, Systems & Branding",
          description: "Explore selected Wasl Tech projects across websites, mobile apps, e-commerce, systems, brand identity, and marketing with clear project context and scope."
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
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Make it easy to contact Wasl Tech, whether the visitor has a quick question or a project that needs a more structured discussion.",
        kicker: "Contact us",
        title: "Tell us about your project as it is.",
        support: "A new idea, an existing project, or something that needs improvement—tell us what you have today and where you want to go, and we will start from there.",
        primaryCta: "Chat on WhatsApp",
        secondaryCta: "Prepare project details",
        sections: Object.freeze([
          Object.freeze({
            id: "direct",
            kicker: "Direct contact",
            title: "For a quick question, WhatsApp or email is enough.",
            support: "If your question is specific or you only need the next step, use the channel that works best for you."
          }),
          Object.freeze({
            id: "project",
            kicker: "New or existing project",
            title: "If there is more to explain, start with the project planner.",
            support: "We only ask for the information that helps us understand the need instead of stretching the first conversation into a long message chain."
          }),
          Object.freeze({
            id: "context",
            kicker: "What should you send?",
            title: "The goal matters more than the technical terminology.",
            support: "Tell us what you want to build or improve, what exists today, and who will use it. We will organize the rest with you."
          })
        ]),
        seo: Object.freeze({
          title: "Contact Wasl Tech | Start a Project or Ask a Question",
          description: "Contact Wasl Tech through WhatsApp or email, or prepare your project details before starting a structured discussion."
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
      businessFacts: CONTENT_STATE.PARTIAL,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Collect the information needed to understand a project before suggesting a solution or defining the next steps.",
        kicker: "Start your project",
        title: "Let us understand the project before deciding the solution.",
        support: "Tell us what you want to build or improve, where the project is today, and what matters most right now. A few clear details help us start from the right place.",
        primaryCta: "Review the details",
        secondaryCta: "Contact us directly",
        sections: Object.freeze([
          Object.freeze({
            id: "need",
            kicker: "01 — Need",
            title: "What do you want to build or improve?",
            support: "Choose the closest area, or leave it open if the project is still only a general idea."
          }),
          Object.freeze({
            id: "stage",
            kicker: "02 — Stage",
            title: "Where is the project today?",
            support: "A new idea, an existing product, a redesign, or new functionality—the stage changes the questions and decisions that come next."
          }),
          Object.freeze({
            id: "priority",
            kicker: "03 — Priority",
            title: "What do you want to achieve first?",
            support: "A usable first version, a complete scope, phased development, or a consultation before making a decision."
          }),
          Object.freeze({
            id: "context",
            kicker: "04 — Context",
            title: "Give us enough to understand the picture.",
            support: "Your name, contact method, existing project if there is one, and a short description of where you want to get."
          }),
          Object.freeze({
            id: "review",
            kicker: "Before sending",
            title: "Review the details before starting the conversation.",
            support: "The goal is to make the first message clear enough that we can begin with the right questions."
          })
        ]),
        seo: Object.freeze({
          title: "Start a Project | Wasl Tech",
          description: "Prepare your project details, current stage, and priorities to start a clear and structured project conversation with Wasl Tech."
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
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Publish practical content that helps business owners understand options and make better decisions before and during a digital project.",
        kicker: "Insights",
        title: "Content that helps you make a better decision before you build.",
        support: "No articles are published yet. When we publish, the content will be practical, direct, and tied to real questions business owners face.",
        primaryCta: "Explore services",
        secondaryCta: "View our work",
        sections: Object.freeze([
          Object.freeze({
            id: "purpose",
            kicker: "Why we write",
            title: "We explain the decisions business owners face before implementation.",
            support: "The content will include practical guides, comparisons, and checklists around websites, apps, e-commerce, systems, brand identity, and digital growth."
          }),
          Object.freeze({
            id: "empty",
            kicker: "Right now",
            title: "No articles are published yet.",
            support: "We will not fill the section just to have a blog. The first article should be genuinely useful and worth returning to."
          })
        ]),
        seo: Object.freeze({
          title: "Insights | Wasl Tech",
          description: "Practical Wasl Tech content on planning websites, apps, e-commerce, systems, brand identity, and digital presence as complete resources become available."
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
      businessFacts: CONTENT_STATE.CONTENT_REQUIRED,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Show real job opportunities when they exist and keep the page clear and honest when no role is open.",
        kicker: "Careers",
        title: "There are no published openings right now.",
        support: "When a role becomes available, we will publish its responsibilities, requirements, and application process here.",
        primaryCta: "Explore Wasl Tech",
        secondaryCta: "Contact us",
        sections: Object.freeze([
          Object.freeze({
            id: "empty",
            kicker: "Current openings",
            title: "There are no open roles published right now.",
            support: "When we open a role, we will publish the position, requirements, and application method here instead of collecting applications for unannounced jobs."
          }),
          Object.freeze({
            id: "about-work",
            kicker: "Working with us",
            title: "We value clarity, ownership, and quality of execution.",
            support: "The details of each role, working model, and requirements will be published with the opportunity itself."
          })
        ]),
        seo: Object.freeze({
          title: "Careers | Wasl Tech",
          description: "View published career opportunities at Wasl Tech when real, open positions are available."
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
      businessFacts: CONTENT_STATE.NOT_APPLICABLE,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Help users quickly return to useful content when they reach a route that is no longer available.",
        kicker: "Page not found",
        title: "It looks like this page is no longer here.",
        support: "Return to the homepage, explore our services, or view our work to find what you are looking for.",
        primaryCta: "Back to home",
        secondaryCta: "Explore services",
        sections: Object.freeze([
        ]),
        seo: Object.freeze({
          title: "Page Not Found | Wasl Tech",
          description: "The page you are looking for is not available. Return to the homepage or explore Wasl Tech services and work."
        })
      })
    }
  })
]);

export function getPageContent(id) {
  return pages.find((record) => record.id === id) ?? null;
}
