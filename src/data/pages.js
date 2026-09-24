import { CONTENT_STATE, createFieldState, pageFieldKeys } from "./content-contracts.js";

function localeStatusForContent(content, reviewed = false) {
  return Object.freeze({
    ar: content?.ar ? (reviewed ? "ready" : "draft") : "content_required",
    en: content?.en ? (reviewed ? "ready" : "draft") : "content_required"
  });
}

function page({
  id,
  routeKey,
  state = CONTENT_STATE.PARTIAL,
  fieldState,
  content,
  reviewed = false,
  evidenceSources = []
}) {
  return Object.freeze({
    id,
    routeKey,
    contentState: state,
    fieldState: createFieldState(pageFieldKeys, fieldState),
    localeStatus: localeStatusForContent(content, reviewed),
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
 * than reintroducing hard-coded marketing copy. Arabic and English public-page copy
 * is reviewed together; legal pages stay explicitly incomplete until implementation facts are final.
 */
export const pages = Object.freeze([
  page({
    id: "home",
    routeKey: "home",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: ["main:index.html", "docs/core/PRODUCT.md", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "تقديم فريق وصل تك وخدماته وأعماله بسرعة ووضوح، ثم بناء الثقة وشرح طريقة العمل قبل نقل الزائر إلى بدء مشروع أو تواصل فعلي.",
        kicker: "شريكك في التحول الرقمي",
        title: "نبني حضورك الرقمي باحتراف.",
        support: "نصمم ونطور مواقع، تطبيقات، متاجر وحلولًا رقمية تساعد مشروعك على الظهور والعمل بصورة أفضل.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "استكشف خدماتنا",
        sections: Object.freeze([
          Object.freeze({
            id: "services",
            kicker: "خدماتنا",
            title: "حلول رقمية مصممة حول احتياج مشروعك.",
            support: "من المواقع والتطبيقات والمتاجر إلى الأنظمة والهوية والتسويق، نختار ونرتب ما يخدم مشروعك ويكمل حضوره."
          }),
          Object.freeze({
            id: "work",
            kicker: "أعمال مختارة",
            title: "نماذج من أعمالنا.",
            support: "مجموعة مختارة من مشاريعنا في مجالات مختلفة، لكل مشروع احتياجه وطريقته في الحل والتنفيذ."
          }),
          Object.freeze({
            id: "about",
            kicker: "من نحن",
            title: "فريق وصل تك يقدم حلولًا رقمية مدروسة.",
            support: "نجمع بين الخبرة التقنية والتصميم والمحتوى لنحوّل الأفكار إلى تجارب رقمية واضحة ومتناسقة، مع اهتمام بالتفاصيل وجودة التنفيذ."
          }),
          Object.freeze({
            id: "approach",
            kicker: "لماذا وصل تك",
            title: "شريك تقني يفهم احتياجاتك.",
            support: "نبدأ بالفهم، ثم نرتب الحل المناسب وننفذه بخطوات واضحة حتى تكون التجربة متماسكة من البداية."
          }),
          Object.freeze({
            id: "process",
            kicker: "كيف نعمل",
            title: "من الفكرة إلى الإطلاق بخطوات واضحة.",
            support: "رحلة منظمة تبدأ بفهم المشروع والتخطيط له، ثم التصميم والتطوير والمراجعة قبل الإطلاق."
          }),
          Object.freeze({
            id: "faq",
            kicker: "الأسئلة الشائعة",
            title: "إجابات سريعة قبل أن تبدأ.",
            support: "أهم ما يساعدك على تكوين صورة أوضح عن الخدمة وطريقة العمل قبل التواصل."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "ابدأ معنا",
            title: "لديك مشروع؟ لنحوّل الفكرة إلى خطوة عملية.",
            support: "شاركنا ما تريد بناءه أو تطويره، ونرتب معك نقطة البداية المناسبة."
          })
        ]),
        seo: Object.freeze({
          title: "وصل تك | Wasl Tech — نبني حضورك الرقمي باحتراف",
          description: "وصل تك تقدم تطوير المواقع والتطبيقات والمتاجر والبرمجة والحلول التقنية والهوية والبروفايلات والتسويق الرقمي للمشاريع في اليمن والخليج."
        })
      }),
      en: Object.freeze({
        purpose: "Introduce the Wasl Tech team, services, and selected work clearly, build trust, explain the process, and guide visitors toward a real project conversation.",
        kicker: "Your digital transformation partner",
        title: "We build your digital presence professionally.",
        support: "We design and develop websites, apps, e-commerce, and digital solutions that help your business show up and work better.",
        primaryCta: "Start your project",
        secondaryCta: "Explore our services",
        sections: Object.freeze([
          Object.freeze({
            id: "services",
            kicker: "Our services",
            title: "Digital solutions shaped around what your project needs.",
            support: "From websites, apps, and e-commerce to systems, branding, and marketing, we organize the right mix around your business."
          }),
          Object.freeze({
            id: "work",
            kicker: "Selected work",
            title: "A selection of our work.",
            support: "Selected projects across different categories, each shaped around its own need, context, and solution."
          }),
          Object.freeze({
            id: "about",
            kicker: "About us",
            title: "The Wasl Tech team builds thoughtful digital solutions.",
            support: "We bring technical, design, and content expertise together to turn ideas into clear, cohesive digital experiences with attention to detail and execution."
          }),
          Object.freeze({
            id: "approach",
            kicker: "Why Wasl Tech",
            title: "A technical partner that understands what you need.",
            support: "We start by understanding the project, then shape the right solution and deliver it through clear, connected steps."
          }),
          Object.freeze({
            id: "process",
            kicker: "How we work",
            title: "From idea to launch through clear steps.",
            support: "An organized journey that starts with understanding and planning, then moves through design, development, review, and launch."
          }),
          Object.freeze({
            id: "faq",
            kicker: "Frequently asked questions",
            title: "Quick answers before you start.",
            support: "The essential questions that help you understand the service and working process before you get in touch."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Start with us",
            title: "Have a project? Let us turn the idea into a practical next step.",
            support: "Tell us what you want to build or improve, and we will help organize the right starting point."
          })
        ]),
        seo: Object.freeze({
          title: "Wasl Tech | Websites, Apps, Systems & Digital Presence",
          description: "Wasl Tech builds websites, apps, e-commerce, custom systems, brand identities, and digital experiences for businesses in Yemen and the Gulf."
        })
      })
    }
  }),
  page({
    id: "about",
    routeKey: "about",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: [
      "legacy:https://www.wasl-tech.com/about",
      "reference:https://satr-tec.com/about",
      "docs/core/PRODUCT.md"
    ],
    content: {
      ar: Object.freeze({
        purpose: "تقديم وصل تك وقصتها ورؤيتها ورسالتها ومبادئ العمل بصورة واضحة، ثم ربط ذلك بالخدمات التي نبني من خلالها الحضور الرقمي للمشروع.",
        kicker: "من نحن",
        title: "نبني حضورك الرقمي باحتراف.",
        support: "في وصل تك نجمع بين البرمجة والتصميم والمحتوى والتسويق لبناء تجارب رقمية واضحة تخدم هدف المشروع وتمنحه حضورًا متناسقًا من الفكرة إلى الإطلاق.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "شاهد الأعمال",
        sections: Object.freeze([
          Object.freeze({
            id: "story",
            kicker: "قصتنا",
            title: "بدأت الفكرة من شغف بالتقنية والإبداع، وتطورت إلى طريقة عمل تجمعهما في مشروع واحد.",
            support: "نؤمن أن الحضور الرقمي الجيد لا يعتمد على شكل جميل أو كود يعمل فقط؛ بل على فهم الفكرة، وتنظيم المحتوى، وتصميم تجربة واضحة، ثم تنفيذ تقني يمكن تطويره مع احتياج المشروع.",
            body: Object.freeze([
              "لذلك نبدأ من أهداف المشروع والمستخدمين وما يجب أن يحققه المنتج، ثم نرتب التصميم والتطوير والمحتوى حول هذا الهدف.",
              "نعمل على المواقع والتطبيقات والمتاجر والأنظمة والهوية والبروفايلات والتسويق، ويمكن أن تعمل هذه المسارات منفردة أو كمنظومة متكاملة بحسب طبيعة المشروع."
            ])
          }),
          Object.freeze({
            id: "vision",
            kicker: "رؤيتنا",
            title: "أن نكون شريكًا رقميًا يساعد المشاريع في اليمن والخليج على بناء حضور أوضح وأكثر قابلية للتطور.",
            support: "نطمح إلى تقديم تجربة تجمع وضوح الفكرة وجودة التصميم وتنظيم التقنية، بحيث يصبح التطور الرقمي خطوة مفهومة وقابلة للبناء عليها."
          }),
          Object.freeze({
            id: "mission",
            kicker: "رسالتنا",
            title: "تحويل احتياج المشروع إلى تجربة رقمية واضحة ومترابطة.",
            support: "نربط بين فهم المتطلبات والتصميم والتنفيذ والمراجعة، ونحدد النطاق والمخرجات بوضوح حتى يعرف العميل ما الذي يُبنى ولماذا."
          }),
          Object.freeze({
            id: "principles",
            kicker: "ما نؤمن به",
            title: "مبادئ بسيطة تحافظ على وضوح المشروع من البداية.",
            support: "نستخدم التصميم والتقنية كوسائل لخدمة الفكرة، ونفضّل القرارات المفهومة والمراحل القابلة للمراجعة على التعقيد غير الضروري.",
            items: Object.freeze([
              Object.freeze({title:"الفكرة أولًا",body:"نفهم الهدف والمستخدم قبل اختيار شكل الواجهة أو التقنية."}),
              Object.freeze({title:"التصميم يشرح",body:"التصميم الجيد يجعل المحتوى أوضح ويقود المستخدم بدل أن يشتته."}),
              Object.freeze({title:"التقنية للنمو",body:"نبني بنية منظمة يمكن صيانتها وتطويرها عندما يتوسع الاحتياج."}),
              Object.freeze({title:"الوضوح يبني الثقة",body:"نوضح النطاق والمراحل والمخرجات ونراجعها قبل الانتقال للخطوة التالية."})
            ])
          }),
          Object.freeze({
            id: "build",
            kicker: "ما نبنيه",
            title: "خدمات مترابطة لبناء حضور رقمي متكامل.",
            support: "من المنتج الرقمي والأنظمة إلى الهوية والمحتوى والتسويق، نرتب المسارات التي يحتاجها المشروع ضمن تجربة واحدة متناسقة."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "ابدأ معنا",
            title: "لديك فكرة أو مشروع قائم؟ نبدأ بفهم ما تحتاجه فعلًا.",
            support: "شاركنا الهدف والوضع الحالي وما تريد الوصول إليه، ونرتب معك الخطوة التالية بصورة واضحة."
          })
        ]),
        seo: Object.freeze({
          title: "من نحن | وصل تك — Wasl Tech",
          description: "تعرف على قصة وصل تك ورؤيتها ورسالتها ومبادئها في بناء المواقع والتطبيقات والمتاجر والأنظمة والهوية والحضور الرقمي في اليمن والخليج."
        })
      }),
      en: Object.freeze({
        purpose: "Introduce Wasl Tech through its story, vision, mission, and working principles, then connect that direction to the services used to build a project's digital presence.",
        kicker: "About us",
        title: "We build your digital presence professionally.",
        support: "At Wasl Tech, we bring software, design, content, and marketing together to create clear digital experiences that serve the project goal from idea to launch.",
        primaryCta: "Start your project",
        secondaryCta: "View our work",
        sections: Object.freeze([
          Object.freeze({
            id: "story",
            kicker: "Our story",
            title: "It started with a shared interest in technology and creative work, and grew into a way of bringing both into one project.",
            support: "A strong digital presence needs more than a polished interface or working code. It starts with understanding the idea, organizing the content, shaping a clear experience, and building technology that can evolve with the project.",
            body: Object.freeze([
              "We start with the project goals, its users, and what the product needs to achieve, then organize design, development, and content around that purpose.",
              "Our work spans websites, apps, e-commerce, systems, identity, company profiles, and marketing, either as focused services or as one connected project."
            ])
          }),
          Object.freeze({
            id: "vision",
            kicker: "Our vision",
            title: "To be a digital partner that helps projects in Yemen and the Gulf build a clearer presence that can evolve over time.",
            support: "We aim to connect clear thinking, thoughtful design, and organized technology so digital growth becomes a practical path that teams can build on."
          }),
          Object.freeze({
            id: "mission",
            kicker: "Our mission",
            title: "Turn a real project need into a clear, connected digital experience.",
            support: "We connect requirements, design, implementation, and review, while making scope and deliverables clear so the client understands what is being built and why."
          }),
          Object.freeze({
            id: "principles",
            kicker: "What we believe",
            title: "Simple principles that keep the project clear from the start.",
            support: "We use design and technology to serve the idea, and prefer understandable decisions and reviewable stages over unnecessary complexity.",
            items: Object.freeze([
              Object.freeze({title:"Idea first",body:"We understand the goal and the user before choosing the interface or technology."}),
              Object.freeze({title:"Design explains",body:"Good design makes content clearer and guides the user instead of distracting them."}),
              Object.freeze({title:"Technology supports growth",body:"We build organized foundations that can be maintained and extended as needs grow."}),
              Object.freeze({title:"Clarity builds confidence",body:"We make scope, stages, and outputs clear and review them before moving forward."})
            ])
          }),
          Object.freeze({
            id: "build",
            kicker: "What we build",
            title: "Connected services for a complete digital presence.",
            support: "From digital products and systems to identity, content, and marketing, we organize the paths a project needs into one coherent experience."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Start with us",
            title: "Have an idea or an existing project? We start by understanding what you actually need.",
            support: "Share the goal, the current situation, and where you want to go, and we will organize the next step with you."
          })
        ]),
        seo: Object.freeze({
          title: "About Wasl Tech | Story, Vision & Digital Work",
          description: "Learn about Wasl Tech, our story, vision, mission, and approach to websites, apps, e-commerce, systems, identity, and digital presence across Yemen and the Gulf."
        })
      })
    }
  }),
  page({
    id: "services",
    routeKey: "services",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: ["main:services.html", "main:js/services-data.js", "docs/core/PRODUCT.md"],
    content: {
      ar: Object.freeze({
        purpose: "مساعدة الزائر على الوصول إلى الخدمة أو المسار الأقرب لاحتياجه من دون إغراقه في قائمة خدمات أو تفاصيل لا يحتاجها بعد.",
        kicker: "الخدمات",
        title: "ابدأ من احتياج مشروعك، وليس من اسم الخدمة.",
        support: "نبني المنتجات الرقمية والأنظمة والحلول، ونطوّر الهوية والحضور؛ ويمكن أن تعمل هذه المسارات منفردة أو ضمن مشروع واحد حسب الحاجة.",
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
      }),
      en: Object.freeze({
        purpose: "Help visitors find the service or direction closest to their real need without overwhelming them with a long list of labels and details.",
        kicker: "Services",
        title: "Start with what your project needs, not with the service name.",
        support: "We build digital products, systems, and technical solutions, and develop brand presence through services that can work independently or as one connected project.",
        primaryCta: "Explore the services",
        secondaryCta: "Plan your project",
        sections: Object.freeze([
          Object.freeze({
            id: "digital-products",
            kicker: "Digital products",
            title: "Experiences your customers use every day.",
            support: "Websites, apps, and e-commerce built around user journeys and business goals—not just page or screen counts."
          }),
          Object.freeze({
            id: "systems",
            kicker: "Systems & engineering",
            title: "When the way the business works needs to become clearer.",
            support: "Custom software, integrations, automation, and data organization when an off-the-shelf solution is not enough."
          }),
          Object.freeze({
            id: "brand-presence",
            kicker: "Brand & presence",
            title: "What customers see should tell one consistent story.",
            support: "Identity, company profiles, content, and marketing work together so the project looks coherent and is easier to understand."
          }),
          Object.freeze({
            id: "unsure",
            kicker: "Not sure which service fits?",
            title: "Start with the problem. We will get to the service after that.",
            support: "Describe what you want to build or improve instead of trying to choose a technical label first."
          })
        ]),
        seo: Object.freeze({
          title: "Wasl Tech Services | Web, Apps, E-commerce & Systems",
          description: "Explore Wasl Tech services for websites, mobile apps, e-commerce, custom software, technical solutions, brand identity, company profiles, and digital marketing."
        })
      })
    }
  }),
  page({
    id: "portfolio",
    routeKey: "portfolio",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: ["main:portfolio.html", "main:js/portfolio.js"],
    content: {
      ar: Object.freeze({
        purpose: "عرض الأعمال كدليل على نوع المشاريع التي نفذتها وصل تك، مع تقديم كل مشروع بقدر المعلومات الحقيقية المتوفرة عنه.",
        kicker: "أعمالنا",
        title: "مشاريع متنوعة، لكل مشروع احتياجه وحلّه.",
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
          description: "نماذج من أعمال وصل تك في المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق، مع توضيح سياق كل مشروع ونطاقه."
        })
      }),
      en: Object.freeze({
        purpose: "Present Wasl Tech work as evidence of the kinds of projects we build, using only the real information available for each project.",
        kicker: "Our work",
        title: "Different projects, each shaped around its own need.",
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
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
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
            support: "من سيستخدم المشروع؟ ماذا يجب أن ينجز؟ وما الموجود الآن؟ هذه الإجابات تمنعنا من حل المشكلة الخطأ.",
            outcome: "صورة أوضح للهدف والمستخدم والمشكلة التي تستحق الحل."
          }),
          Object.freeze({
            id: "plan",
            kicker: "02 — التخطيط",
            title: "نحوّل الفكرة إلى نطاق يمكن اتخاذ قرار بشأنه.",
            support: "نرتب الأولويات والمحتوى والوظائف والمسار قبل أن تصبح التفاصيل مكلفة أو متداخلة.",
            outcome: "نطاق وأولويات ومسار يمكن اتخاذ قرار واضح بشأنه."
          }),
          Object.freeze({
            id: "build",
            kicker: "03 — التصميم والتنفيذ",
            title: "نبني على قرارات اتفقنا على سببها.",
            support: "التصميم والتطوير يتحركان ضمن نطاق واضح ومراجعات مرحلية بدل انتظار نسخة نهائية مفاجئة.",
            outcome: "نسخة تتقدم ضمن مراجعات مرحلية بدل مفاجأة نهائية."
          }),
          Object.freeze({
            id: "review-launch",
            kicker: "04 — المراجعة والإطلاق",
            title: "نراجع التجربة قبل أن نعتبرها منتهية.",
            support: "نختبر السيناريوهات الأساسية والمحتوى والاستجابة والتفاصيل، ثم نجهز النسخة للإطلاق أو التسليم.",
            outcome: "نسخة معتمدة راجعنا سيناريوهاتها الأساسية قبل الإطلاق أو التسليم."
          }),
          Object.freeze({
            id: "principle",
            kicker: "قاعدة العمل",
            title: "لا نضيف تفاصيل قبل أن نعرف لماذا نحتاجها.",
            support: "كل مرحلة تقلل نوعًا مختلفًا من الغموض؛ لذلك لا نقفز إلى التصميم أو التطوير قبل أن يكون القرار السابق واضحًا."
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
      }),
      en: Object.freeze({
        purpose: "Explain the working process simply, from the first conversation through planning, design, development, review, and launch.",
        kicker: "How we work",
        title: "We start by understanding, then build from a clear decision.",
        support: "We understand the goal and need first, organize the scope and experience, then design, build, review, and prepare for launch.",
        primaryCta: "Start your project",
        secondaryCta: "View our work",
        sections: Object.freeze([
          Object.freeze({
            id: "understand",
            kicker: "01 — Understand",
            title: "We start with the goal, problem, and context.",
            support: "Who will use the project? What do they need to achieve? What already exists? These answers keep us from solving the wrong problem.",
            outcome: "A clearer picture of the goal, user, and problem worth solving."
          }),
          Object.freeze({
            id: "plan",
            kicker: "02 — Plan",
            title: "We turn the idea into a scope that can be decided on.",
            support: "We organize priorities, content, features, and flow before details become expensive or tangled.",
            outcome: "A scope, priorities, and flow that can be decided on with clarity."
          }),
          Object.freeze({
            id: "build",
            kicker: "03 — Design & build",
            title: "We build on decisions we understand and agree on.",
            support: "Design and development move within a clear scope and review cycle instead of waiting for one surprising final version.",
            outcome: "A version that progresses through reviewable stages instead of one final surprise."
          }),
          Object.freeze({
            id: "review-launch",
            kicker: "04 — Review & launch",
            title: "We review the experience before calling it finished.",
            support: "We check the core scenarios, content, responsiveness, and details, then prepare the approved version for launch or handoff.",
            outcome: "An approved version whose core scenarios are reviewed before launch or handoff."
          }),
          Object.freeze({
            id: "principle",
            kicker: "Working rule",
            title: "We do not add detail before we understand why it is needed.",
            support: "Each stage removes a different kind of uncertainty, so we do not jump into design or development before the previous decision is clear."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Ready to begin",
            title: "The first step is not a contract. It is understanding the project.",
            support: "Share the idea and the current stage, and we will organize what should happen next."
          })
        ]),
        seo: Object.freeze({
          title: "How We Work | Wasl Tech",
          description: "See how Wasl Tech moves from project understanding and planning to design, development, review, and launch."
        })
      })
    }
  }),
  page({
    id: "contact",
    routeKey: "contact",
    state: CONTENT_STATE.READY,
    reviewed: true,
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
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "ابدأ بالطريقة الأسهل",
            title: "اختر القناة الأبسط وابدأ منها.",
            support: "إذا كان السؤال سريعًا استخدم واتساب أو البريد، وإذا كان المشروع يحتاج تفاصيل أكثر فمخطط المشروع يرتبها قبل بدء المحادثة."
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
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Start the simple way",
            title: "Choose the simplest channel and start there.",
            support: "Use WhatsApp or email for a quick question. If the project needs more context, the project planner helps organize the details before the conversation starts."
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
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
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
          description: "جهز معلومات مشروعك ومرحلته وأولوياته في مخطط واضح يساعدك على بدء نقاش منظم مع وصل تك عبر واتساب."
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
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
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
      }),
      en: Object.freeze({
        purpose: "Answer the questions that most often affect a project decision before the first conversation.",
        kicker: "Frequently asked questions",
        title: "Before you start, these are the questions that matter most.",
        support: "Clear answers about services, how delivery works, and what you need before starting a project.",
        primaryCta: "Start your project",
        secondaryCta: "Contact us",
        sections: Object.freeze([
          Object.freeze({
            id: "start",
            kicker: "Getting started",
            title: "You do not need to know everything before you contact us.",
            support: "You only need enough clarity to take the next step—not to become the technical expert yourself."
          }),
          Object.freeze({
            id: "products",
            kicker: "Digital products",
            title: "Questions about websites, apps, and e-commerce.",
            support: "Responsiveness, management, integrations, payments, and delivery are among the most common topics before development starts."
          }),
          Object.freeze({
            id: "presence",
            kicker: "Brand & presence",
            title: "Which services can stand on their own?",
            support: "Brand identity, company profiles, and content planning can be independent projects or part of a wider engagement."
          }),
          Object.freeze({
            id: "workflow",
            kicker: "Working process",
            title: "What happens after we start?",
            support: "Timeline, phases, and changes depend on the actual scope—not on one answer that fits every project."
          })
        ]),
        seo: Object.freeze({
          title: "Frequently Asked Questions | Wasl Tech",
          description: "Answers to common questions about Wasl Tech services, project stages, websites, apps, e-commerce, branding, integrations, and how projects are delivered."
        })
      })
    }
  }),
  page({
    id: "insights",
    routeKey: "insights",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: ["main:blog.html", "src/data/articles.js", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "تقديم محتوى عملي يساعد أصحاب المشاريع على فهم الخيارات واتخاذ قرارات أفضل قبل وأثناء التنفيذ.",
        kicker: "أفكار ومعرفة",
        title: "محتوى عملي يساعدك على اتخاذ قرار أوضح قبل التنفيذ.",
        support: "أدلة ومقارنات وملاحظات عملية حول التخطيط للمواقع والتطبيقات والمتاجر والأنظمة والحضور الرقمي.",
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
            id: "latest",
            kicker: "مقالات مختارة",
            title: "ابدأ من السؤال الأقرب لقرارك الحالي.",
            support: "نرتب المقالات حول أسئلة عملية يمكن أن تغيّر النطاق أو الأولوية أو طريقة التنفيذ قبل بدء المشروع."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "هل ما زلت تقارن الخيارات؟",
            title: "حوّل السؤال إلى قرار يناسب مشروعك.",
            support: "المقالات تشرح الصورة العامة، أما نطاق مشروعك فيبدأ من أهدافه وسياقه واحتياجه الفعلي.",
            actionLabel: "ابدأ مشروعك"
          })
        ]),
        seo: Object.freeze({
          title: "المحتوى المعرفي | وصل تك — Wasl Tech",
          description: "أدلة ومقالات عملية من وصل تك حول تخطيط المواقع والتطبيقات والمتاجر والأنظمة والهوية والحضور الرقمي واتخاذ قرارات أفضل قبل التنفيذ."
        })
      }),
      en: Object.freeze({
        purpose: "Publish practical content that helps business owners understand options and make better decisions before and during a digital project.",
        kicker: "Insights",
        title: "Practical content for clearer decisions before you build.",
        support: "Guides, comparisons, and practical notes on planning websites, apps, e-commerce, systems, and digital presence.",
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
            id: "latest",
            kicker: "Selected articles",
            title: "Start with the question closest to your current decision.",
            support: "Articles are organized around practical questions that can change scope, priority, or delivery before a project begins."
          }),
          Object.freeze({
            id: "final-cta",
            kicker: "Still comparing the options?",
            title: "Turn the question into a decision that fits your project.",
            support: "The articles explain the general choices. Your project scope should start from its own goals, context, and actual needs.",
            actionLabel: "Start your project"
          })
        ]),
        seo: Object.freeze({
          title: "Insights | Wasl Tech",
          description: "Practical Wasl Tech guides on planning websites, apps, e-commerce, systems, brand identity, digital presence, and clearer pre-build decisions."
        })
      })
    }
  }),
  page({
    id: "careers",
    routeKey: "careers",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.READY,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: ["src/data/jobs.js", "docs/core/CONTENT_IA.md"],
    content: {
      ar: Object.freeze({
        purpose: "عرض فرص العمل الفعلية عندما تكون هناك وظائف مفتوحة، مع إبقاء الصفحة واضحة وصريحة عند عدم وجود فرص.",
        kicker: "الوظائف",
        title: "فرص العمل في وصل تك.",
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
            support: "تفاصيل كل دور وطريقة العمل والمتطلبات ستظهر بوضوح مع الإعلان عند نشر أي فرصة."
          })
        ]),
        seo: Object.freeze({
          title: "الوظائف | وصل تك — Wasl Tech",
          description: "تابع فرص العمل المنشورة لدى وصل تك، مع تفاصيل الدور والمتطلبات وطريقة التقديم عند توفر أي فرصة."
        })
      }),
      en: Object.freeze({
        purpose: "Show real job opportunities when they exist and keep the page clear and honest when no role is open.",
        kicker: "Careers",
        title: "Careers at Wasl Tech.",
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
          description: "View published career opportunities at Wasl Tech, including role details, requirements, and the application process when positions are available."
        })
      })
    }
  }),
  page({
    id: "privacy",
    routeKey: "privacy",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.NOT_APPLICABLE,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: [
      "src/pages/contact.js",
      "src/pages/project-planner.js",
      "src/client/project-planner.js",
      "src/templates/document.js",
      "src/config/site.js"
    ],
    content: {
      ar: Object.freeze({
        purpose: "شرح ما يفعله الموقع الحالي ببيانات الزائر بصورة واضحة ومحددة.",
        kicker: "الخصوصية",
        title: "نوضح ما يحدث لبياناتك قبل أن تشاركها.",
        support: "في النسخة الحالية من الموقع، لا يرسل مخطط المشروع بياناتك إلى خادم وصل تك ولا يخزنها في المتصفح؛ يجهزها محليًا للمراجعة ثم يفتح واتساب فقط إذا اخترت ذلك.",
        primaryCta: null,
        secondaryCta: null,
        sections: Object.freeze([
          Object.freeze({
            id: "planner",
            kicker: "مخطط المشروع",
            title: "التفاصيل تبقى في المتصفح حتى تختار أنت فتح واتساب.",
            support: "الاسم ورقم التواصل واحتياج المشروع والتفاصيل التي تكتبها تُستخدم داخل الصفحة لتكوين ملخص ورسالة. لا يقوم الموقع بإرسالها تلقائيًا أو تخزينها في localStorage أو sessionStorage."
          }),
          Object.freeze({
            id: "external",
            kicker: "القنوات الخارجية",
            title: "واتساب والبريد وإنستغرام وGoogle Fonts خدمات خارجية عن الموقع.",
            support: "عند تحميل الصفحة يطلب المتصفح ملفات الخط من Google Fonts. وعندما تختار فتح واتساب أو البريد أو إنستغرام تنتقل إلى خدمة خارجية. قد تعالج هذه الخدمات بيانات تقنية أو معلومات تشاركها معها وفق إعداداتها وسياساتها الخاصة."
          }),
          Object.freeze({
            id: "tracking",
            kicker: "التحليلات والكوكيز",
            title: "لا يضيف الموقع حاليًا أدوات تحليلات أو ملفات تعريف ارتباط للتتبع.",
            support: "إذا تغير ذلك مستقبلًا، يجب تحديث هذه الصفحة قبل الاعتماد على السلوك الجديد. قد تعالج البنية المستضيفة أو الخدمات الخارجية بيانات تقنية لازمة لتشغيل خدماتها وفق سياساتها."
          }),
          Object.freeze({
            id: "contact",
            kicker: "عند التواصل",
            title: "ما ترسله عبر قناة خارجية يخضع لتلك القناة والمحادثة التي تبدأها أنت.",
            support: "لا يحدد هذا الموقع مدة احتفاظ أو معالجة لرسائل واتساب أو البريد لأنه لا يستقبلها داخل نموذج أو قاعدة بيانات تابعة للموقع."
          })
        ]),
        seo: Object.freeze({
          title: "سياسة الخصوصية | وصل تك — Wasl Tech",
          description: "كيف تتعامل نسخة موقع وصل تك الحالية مع مخطط المشروع، القنوات الخارجية، التحليلات وملفات تعريف الارتباط."
        })
      }),
      en: Object.freeze({
        purpose: "Explain what the current website actually does with visitor information in a clear and limited way.",
        kicker: "Privacy",
        title: "We explain what happens to your information before you share it.",
        support: "In the current site, the project planner does not send your details to a Wasl Tech server or store them in the browser. It prepares them locally for review, then opens WhatsApp only if you choose to continue.",
        primaryCta: null,
        secondaryCta: null,
        sections: Object.freeze([
          Object.freeze({
            id: "planner",
            kicker: "Project planner",
            title: "Your details stay in the browser until you choose to open WhatsApp.",
            support: "The name, contact number, project need, and details you enter are used on the page to prepare a summary and message. The site does not automatically send them or store them in localStorage or sessionStorage."
          }),
          Object.freeze({
            id: "external",
            kicker: "External channels",
            title: "WhatsApp, email, Instagram, and Google Fonts operate outside this website.",
            support: "When the page loads, the browser requests font resources from Google Fonts. When you choose WhatsApp, email, or Instagram, you move to an external service. These services may process technical data or information you share with them under their own settings and policies."
          }),
          Object.freeze({
            id: "tracking",
            kicker: "Analytics and cookies",
            title: "The current site adds no analytics tools or tracking cookies.",
            support: "If that changes in the future, this page should be updated before the new behavior is relied on. Hosting infrastructure or external services may process technical data required to operate their services under their own policies."
          }),
          Object.freeze({
            id: "contact",
            kicker: "When you contact us",
            title: "Information you send through an external channel follows that channel and the conversation you choose to start.",
            support: "This website does not state a retention period for WhatsApp or email messages because it does not receive those messages through its own form or database."
          })
        ]),
        seo: Object.freeze({
          title: "Privacy Policy | Wasl Tech",
          description: "How the current Wasl Tech site handles the project planner, external contact channels, analytics, and cookies."
        })
      })
    }
  }),
  page({
    id: "terms",
    routeKey: "terms",
    state: CONTENT_STATE.READY,
    reviewed: true,
    fieldState: {
      purpose: CONTENT_STATE.READY,
      arabicCore: CONTENT_STATE.READY,
      sections: CONTENT_STATE.READY,
      cta: CONTENT_STATE.NOT_APPLICABLE,
      seo: CONTENT_STATE.READY,
      businessFacts: CONTENT_STATE.READY,
      english: CONTENT_STATE.READY
    },
    evidenceSources: [
      "src/pages/project-planner.js",
      "src/client/project-planner.js",
      "src/data/services.js",
      "src/data/projects.js"
    ],
    content: {
      ar: Object.freeze({
        purpose: "توضيح حدود استخدام الموقع وما الذي لا يشكل اتفاقًا أو وعدًا تعاقديًا.",
        kicker: "الشروط",
        title: "الموقع يشرح خدماتنا ويساعدك على بدء المحادثة؛ الاتفاق يبدأ بشكل منفصل.",
        support: "تصفح الخدمات أو الأعمال أو تجهيز رسالة من مخطط المشروع لا ينشئ طلبًا ملزمًا أو سعرًا أو مدة أو نطاقًا نهائيًا.",
        primaryCta: null,
        secondaryCta: null,
        sections: Object.freeze([
          Object.freeze({
            id: "information",
            kicker: "محتوى الموقع",
            title: "المعلومات هنا للتعريف بالخدمات وطريقة العمل وبدء النقاش.",
            support: "تفاصيل كل مشروع الفعلية — بما فيها النطاق والمخرجات والسعر والمدة — تُحدد حسب متطلباته والاتفاق الذي يتم عليه خارج هذه الصفحة."
          }),
          Object.freeze({
            id: "planner",
            kicker: "مخطط المشروع",
            title: "تجهيز الرسالة لا يعني إرسال طلب أو قبول مشروع.",
            support: "المخطط يساعدك على ترتيب المعلومات ثم يفتح واتساب إذا اخترت ذلك. لا توجد موافقة أو حجز أو تعاقد تلقائي بمجرد استخدامه."
          }),
          Object.freeze({
            id: "examples",
            kicker: "الخدمات والأعمال",
            title: "الأمثلة السابقة تشرح نوع العمل ولا تضمن نتيجة مطابقة لمشروع جديد.",
            support: "كل مشروع له سياقه ونطاقه وقراراته، لذلك لا نستخدم مشروعًا سابقًا كتعهد بنتيجة أو وظيفة أو مخرج لمشروع مختلف."
          }),
          Object.freeze({
            id: "external",
            kicker: "الروابط الخارجية",
            title: "بعض الإجراءات تنقلك إلى خدمات خارجية.",
            support: "واتساب والبريد وإنستغرام وخدمات الطرف الثالث تعمل وفق شروطها وسياساتها، ولا تتحول إلى جزء من اتفاق خدمة مع وصل تك بمجرد فتح الرابط."
          })
        ]),
        seo: Object.freeze({
          title: "شروط استخدام الموقع | وصل تك — Wasl Tech",
          description: "حدود استخدام موقع وصل تك، مخطط المشروع، محتوى الخدمات والأعمال، والروابط الخارجية."
        })
      }),
      en: Object.freeze({
        purpose: "Clarify the limits of website use and what does not create a contractual commitment.",
        kicker: "Terms",
        title: "The site explains our services and helps start a conversation; any agreement is made separately.",
        support: "Browsing services or work, or preparing a planner message, does not create a binding order, price, timeline, or final scope.",
        primaryCta: null,
        secondaryCta: null,
        sections: Object.freeze([
          Object.freeze({
            id: "information",
            kicker: "Website information",
            title: "The site introduces services, working approach, and ways to start a discussion.",
            support: "Actual project details—including scope, deliverables, price, and timeline—depend on the project requirements and the separate agreement made for that work."
          }),
          Object.freeze({
            id: "planner",
            kicker: "Project planner",
            title: "Preparing a message does not submit or accept a project.",
            support: "The planner helps organize information and opens WhatsApp if you choose to continue. Using it alone does not create approval, reservation, or a contract."
          }),
          Object.freeze({
            id: "examples",
            kicker: "Services and work",
            title: "Previous examples show the kind of work we have done; they do not guarantee an identical result for a new project.",
            support: "Every project has its own context, scope, and decisions, so an earlier project is not a promise of a specific result, feature, or deliverable for a different project."
          }),
          Object.freeze({
            id: "external",
            kicker: "External links",
            title: "Some actions take you to services outside this website.",
            support: "WhatsApp, email, Instagram, and other third-party services operate under their own terms and policies. Opening those links does not by itself make them part of a Wasl Tech service agreement."
          })
        ]),
        seo: Object.freeze({
          title: "Website Terms | Wasl Tech",
          description: "Terms for using the Wasl Tech website, project planner, service and project content, and external links."
        })
      })
    }
  }),
  page({
    id: "notFound",
    routeKey: null,
    state: CONTENT_STATE.READY,
    reviewed: true,
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
        sections: Object.freeze([]),
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
