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
    fieldState: {purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources: ["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","docs/core/PRODUCT.md"],
    content: {
      ar: Object.freeze({
        purpose: "تقديم وصل تك كشريك يبني المنتجات والحلول والحضور الرقمي من المشكلة إلى نتيجة قابلة للاستخدام والتطوير.",
        kicker: "شريكك في بناء المستقبل الرقمي",
        title: "من فكرة على الورق إلى منتج رقمي يعمل.",
        support: "في وصل تك، نصمم ونطوّر المواقع والتطبيقات والمتاجر والأنظمة والهوية الرقمية التي تجعل مشروعك أوضح، أقوى، وأسهل في الوصول إلى عملائه.",
        primaryCta: "خطط مشروعك الآن",
        secondaryCta: "شاهد ماذا بنينا",
        sections: Object.freeze([
          Object.freeze({id:"services",kicker:"خدمات وصل تك",title:"كل ما يحتاجه مشروعك ليظهر ويعمل وينمو.",support:"اختر نقطة البداية، ونحن نرتب بقية المسار. يمكنك البدء بخدمة واحدة أو بناء منظومة تجمع المنتج والتقنية والهوية والحضور."}),
          Object.freeze({id:"work",kicker:"أعمال حقيقية",title:"شاهد ما بنيناه، لا ما نقوله عن أنفسنا.",support:"كل مشروع بدأ من احتياج مختلف. نعرض ما تم بناؤه وما أصبح أوضح أو أسهل أو ممكنًا، دون أرقام أو نتائج غير موثقة."}),
          Object.freeze({id:"about",kicker:"من نحن",title:"نربط الفكرة بالتنفيذ حتى يصبح ما تريد بناءه واضحًا وقابلًا للاستخدام.",support:"نجمع الاستراتيجية والتصميم والبرمجة والهوية والتسويق ضمن مسار واحد يخدم هدف المشروع بدل أن تبقى الخدمات أجزاء متفرقة."}),
          Object.freeze({id:"approach",kicker:"لماذا وصل تك",title:"لأنك لا تحتاج منفذًا فقط؛ تحتاج من يفهم لماذا تبني.",support:"نبدأ من العمل والمستخدم، نربط التفاصيل ببعضها، ونوضح النطاق والمخرجات والمراجعات قبل أن تتحول التفاصيل إلى تعقيد."}),
          Object.freeze({id:"process",kicker:"كيف نعمل",title:"نقلل المخاطرة قبل أن نزيد التفاصيل.",support:"نفهم، نقرر، نصمم، نبني، نختبر، ثم نجهز الحل للإطلاق والتطوير عبر مراحل واضحة ومراجعات مفهومة."}),
          Object.freeze({id:"faq",kicker:"أسئلة قبل أن تبدأ",title:"إجابات واضحة قبل أن تختار الحل.",support:"لا تحتاج إلى معرفة اسم التقنية أو الخدمة من البداية. نبدأ من الهدف والمشكلة ونرتب المسار معك."}),
          Object.freeze({id:"final-cta",kicker:"ابدأ من احتياجك",title:"جاهز تنقل مشروعك إلى مستوى آخر؟",support:"أخبرنا أين يقف مشروعك، وما الذي تريد بناءه أو إصلاحه أو تحسينه. نساعدك على تحويل الفكرة إلى خطوة واضحة قابلة للتنفيذ."})
        ]),
        seo: Object.freeze({title:"وصل تك | نبني منتجاتك وحلولك وحضورك الرقمي",description:"نحوّل أفكار واحتياجات الشركات والمشاريع في اليمن والخليج إلى مواقع وتطبيقات ومتاجر وأنظمة وهوية وحضور رقمي جاهز للعمل."})
      }),
      en: Object.freeze({
        purpose: "Position Wasl Tech as a partner that turns real business needs into usable, evolvable digital products, systems, and brand presence.",
        kicker: "Your partner for building the digital future",
        title: "From an idea on paper to a digital product that works.",
        support: "Wasl Tech designs and builds websites, apps, e-commerce, systems, and digital identities that make your business clearer, stronger, and easier for customers to reach.",
        primaryCta: "Plan your project",
        secondaryCta: "See what we built",
        sections: Object.freeze([
          Object.freeze({id:"services",kicker:"Wasl Tech services",title:"What your project needs to show up, work, and grow.",support:"Start with one need, and we will organize the rest of the path. A project can begin with one service or connect product, technology, brand, and presence."}),
          Object.freeze({id:"work",kicker:"Real work",title:"See what we built, not what we say about ourselves.",support:"Every project started from a different need. We show what was built and what became clearer, easier, or possible without publishing unverified results."}),
          Object.freeze({id:"about",kicker:"About us",title:"We connect the idea to execution until what you want to build becomes clear and usable.",support:"Strategy, design, software, identity, and marketing work as one path around the project goal instead of separate disconnected services."}),
          Object.freeze({id:"approach",kicker:"Why Wasl Tech",title:"You do not only need an executor; you need a partner who understands why you are building.",support:"We start with the business and user, connect the details, and make scope, deliverables, and reviews clear before complexity grows."}),
          Object.freeze({id:"process",kicker:"How we work",title:"We reduce risk before adding detail.",support:"We understand, decide, design, build, test, and prepare the solution for launch and growth through clear reviewable stages."}),
          Object.freeze({id:"faq",kicker:"Questions before you start",title:"Clear answers before you choose a solution.",support:"You do not need to know the service or technology name first. Start with the goal and problem, and we will organize the path with you."}),
          Object.freeze({id:"final-cta",kicker:"Start from the need",title:"Ready to move your project forward?",support:"Tell us where the project stands and what you want to build, fix, or improve. We will help turn it into a clear next step."})
        ]),
        seo: Object.freeze({title:"Wasl Tech | Digital Products, Systems & Brand Presence",description:"Wasl Tech turns business ideas and needs across Yemen and the Gulf into websites, apps, e-commerce, systems, identities, and practical digital experiences."})
      })
    }
  }),
  page({
    id: "about", routeKey: "about", state: CONTENT_STATE.READY, reviewed: true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","legacy:https://www.wasl-tech.com/about"],
    content:{
      ar:Object.freeze({
        purpose:"تعريف وصل تك كفريق يربط الاستراتيجية والتصميم والبرمجة والهوية والتسويق حول احتياج المشروع الحقيقي.",
        kicker:"من نحن",
        title:"نحن الفريق الذي يربط ما تريد قوله بما تريد أن يفعله العميل.",
        support:"وصل تك شركة حلول رقمية تعمل عند تقاطع الاستراتيجية والتصميم والبرمجة والهوية والتسويق. نساعد المشاريع على بناء منتجات وحضور رقمي يشرح القيمة، يسهل الاستخدام، ويرتب طريقة العمل.",
        primaryCta:"ابدأ الحديث معنا",secondaryCta:"شاهد الأعمال",
        sections:Object.freeze([
          Object.freeze({id:"story",kicker:"قصتنا",title:"بدأنا من فجوة واضحة: أفكار جيدة لا تجد تنفيذًا يفهمها.",support:"رأينا مشاريع تملك قيمة حقيقية لكنها تظهر بواجهة ضعيفة، أو تعمل بعمليات متفرقة، أو تتحدث إلى جمهورها برسائل غير واضحة. لذلك نبدأ من الواقع ثم نرتب القرار ونبني التجربة.",body:Object.freeze(["لا نؤمن بأن كل مشروع يحتاج التقنية نفسها أو كل الخدمات. نحدد ما الذي يعمل، وما الذي يتعطل، ومن المستخدم، وما النتيجة التي تستحق الاستثمار.","بعد ذلك نبني ما يحتاجه المشروع فعلًا: موقعًا، تطبيقًا، متجرًا، نظامًا، هوية، بروفايل، أو منظومة تجمع أكثر من مسار."])}),
          Object.freeze({id:"vision",kicker:"رؤيتنا",title:"أن تكون وصل تك الشريك الذي تلجأ إليه المشاريع عندما تريد أن تتحول رقميًا دون أن تفقد وضوحها أو هويتها.",support:"نريد أن يبقى القرار مفهومًا والتقنية في خدمة العمل، لا أن يصبح المشروع أسير أدوات أو تعقيد لا يحتاجه."}),
          Object.freeze({id:"mission",kicker:"رسالتنا",title:"نبني حلولًا رقمية حقيقية لمشكلات حقيقية.",support:"نحوّل الاحتياج إلى نتيجة يمكن استخدامها وتطويرها والاعتماد عليها، مع نطاق ومخرجات ومراجعات واضحة."}),
          Object.freeze({id:"principles",kicker:"ما يميزنا",title:"الوضوح قبل التنفيذ، والترابط قبل كثرة الأدوات.",support:"نستخدم التقنية والتصميم لخدمة الهدف، ونفضّل القرارات المفهومة على التعقيد.",items:Object.freeze([
            Object.freeze({title:"نفهم قبل أن ننفذ",body:"الحل الصحيح يبدأ من المشكلة الصحيحة والمستخدم الحقيقي."}),
            Object.freeze({title:"نربط كل التفاصيل",body:"المحتوى والتصميم والتقنية تعمل كمنظومة واحدة."}),
            Object.freeze({title:"نبني للمرحلة الحالية والقادمة",body:"الحل يخدم احتياج اليوم ويمكن توسيعه عندما يتطور المشروع."}),
            Object.freeze({title:"نقول ما نستطيع فعله بوضوح",body:"الثقة تبدأ من نطاق مفهوم ومخرجات محددة قابلة للمراجعة."})
          ])}),
          Object.freeze({id:"build",kicker:"ما نبنيه",title:"منتجات وأنظمة وحضور رقمي يبدأ من احتياج فعلي.",support:"مواقع وتطبيقات ومتاجر وأنظمة وهوية وبروفايلات وتسويق؛ كل مسار يمكن أن يعمل مستقلًا أو ضمن مشروع مترابط."}),
          Object.freeze({id:"final-cta",kicker:"ابدأ من الحقيقة",title:"لديك فجوة مشابهة؟ دعنا نبدأ من حقيقتها.",support:"شاركنا ما الذي يعمل اليوم وما الذي تريد تغييره، ونرتب معك نقطة البداية قبل اقتراح الحل."})
        ]),
        seo:Object.freeze({title:"من نحن | وصل تك — Wasl Tech",description:"تعرف على وصل تك، فريق حلول رقمية يربط الاستراتيجية والتصميم والبرمجة والهوية والتسويق حول احتياج المشروع الحقيقي."})
      }),
      en:Object.freeze({
        purpose:"Introduce Wasl Tech as a team that connects strategy, design, software, identity, and marketing around a real project need.",
        kicker:"About us",title:"We connect what you want to say with what you want the customer to do.",
        support:"Wasl Tech works at the intersection of strategy, design, software, identity, and marketing to build products and digital presence that explain value, improve usability, and organize how work gets done.",
        primaryCta:"Start the conversation",secondaryCta:"View our work",
        sections:Object.freeze([
          Object.freeze({id:"story",kicker:"Our story",title:"We started from a clear gap: good ideas often lack execution that truly understands them.",support:"We saw valuable projects presented through weak interfaces, fragmented operations, or unclear messages. So we start from reality, organize the decision, and build the experience.",body:Object.freeze(["Not every project needs the same technology or every service. We identify what works, what breaks, who the user is, and which outcome deserves investment.","Then we build what the project actually needs: a website, app, store, system, identity, company profile, or a connected combination."])}),
          Object.freeze({id:"vision",kicker:"Our vision",title:"To be the partner projects turn to when they want digital transformation without losing clarity, identity, or control.",support:"Technology should serve the business and keep decisions understandable rather than add unnecessary complexity."}),
          Object.freeze({id:"mission",kicker:"Our mission",title:"Build real digital solutions for real problems.",support:"We turn needs into outcomes that can be used, improved, and relied on, with clear scope, deliverables, and reviews."}),
          Object.freeze({id:"principles",kicker:"What sets us apart",title:"Clarity before execution, and connection before more tools.",support:"We use technology and design to serve the goal and prefer understandable decisions over unnecessary complexity.",items:Object.freeze([
            Object.freeze({title:"Understand before executing",body:"The right solution starts with the right problem and real user."}),
            Object.freeze({title:"Connect the details",body:"Content, design, and technology work as one system."}),
            Object.freeze({title:"Build for now and next",body:"The solution serves today's need and can expand as the project grows."}),
            Object.freeze({title:"Be clear about what we can do",body:"Trust starts with understandable scope and reviewable deliverables."})
          ])}),
          Object.freeze({id:"build",kicker:"What we build",title:"Products, systems, and digital presence that start from a real need.",support:"Websites, apps, e-commerce, systems, identity, company profiles, and marketing can stand alone or work together."}),
          Object.freeze({id:"final-cta",kicker:"Start from reality",title:"Have a similar gap? Let us start from what is actually happening.",support:"Tell us what works today and what you want to change, and we will organize the starting point before proposing the solution."})
        ]),
        seo:Object.freeze({title:"About Wasl Tech | Strategy, Design & Digital Products",description:"Meet Wasl Tech, a digital solutions team connecting strategy, design, software, identity, and marketing around real project needs."})
      })
    }
  }),
  page({
    id:"services",routeKey:"services",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/data/services.js"],
    content:{
      ar:Object.freeze({
        purpose:"مساعدة الزائر على الوصول إلى الحل الصحيح من الهدف أو المشكلة بدل إجباره على اختيار اسم خدمة أو باقة.",
        kicker:"خدماتنا",title:"لا تحتاج إلى شراء كل شيء. تحتاج إلى الحل الصحيح.",support:"من أول موقع تعريفي إلى منصة أو نظام متكامل، نساعدك على تحديد ما يحتاجه مشروعك الآن، ثم نبنيه بطريقة تخدم المرحلة التالية.",
        primaryCta:"اكتشف المسار المناسب",secondaryCta:"صف مشكلتك",
        sections:Object.freeze([
          Object.freeze({id:"digital-products",kicker:"المنتجات الرقمية",title:"منتج رقمي يحقق وظيفته.",support:"مواقع وتطبيقات ومتاجر ومنصات مصممة حول المستخدم والهدف، لا حول عدد الشاشات أو الخصائص."}),
          Object.freeze({id:"systems",kicker:"الأنظمة والهندسة",title:"نظام يرتب طريقة العمل.",support:"برمجة مخصصة ولوحات تحكم وتكاملات وأتمتة تقلل الفوضى والخطوات اليدوية عندما لا يكفي الحل الجاهز."}),
          Object.freeze({id:"brand-presence",kicker:"الهوية والحضور",title:"حضور يرفع وضوح العلامة.",support:"هوية وبروفايل ومحتوى وتسويق يجعل المشروع مفهومًا ومتسقًا عبر نقاط التواصل."}),
          Object.freeze({id:"unsure",kicker:"ابدأ من المشكلة",title:"لا تعرف اسم الخدمة؟ هذا ليس عائقًا.",support:"أرسل الهدف أو المشكلة كما هي، وسنرتب معك المسار بدل أن نطلب منك اختيار حل لا تعرفه بعد."})
        ]),
        seo:Object.freeze({title:"خدمات وصل تك | مواقع، تطبيقات، أنظمة وهوية",description:"خدمات وصل تك لبناء المواقع والتطبيقات والمتاجر والأنظمة والحلول التقنية والهوية والبروفايلات والتسويق انطلاقًا من احتياج المشروع."})
      }),
      en:Object.freeze({
        purpose:"Help visitors reach the right solution from the goal or problem instead of forcing them to choose a service name or package.",
        kicker:"Our services",title:"You do not need to buy everything. You need the right solution.",support:"From a first company website to a connected platform or system, we help identify what the project needs now and build it in a way that supports the next stage.",
        primaryCta:"Find the right path",secondaryCta:"Describe the problem",
        sections:Object.freeze([
          Object.freeze({id:"digital-products",kicker:"Digital products",title:"A digital product that does its job.",support:"Websites, apps, e-commerce, and platforms designed around the user and business goal, not the number of screens or features."}),
          Object.freeze({id:"systems",kicker:"Systems & engineering",title:"A system that organizes how work gets done.",support:"Custom software, dashboards, integrations, and automation that reduce fragmented steps when off-the-shelf tools are not enough."}),
          Object.freeze({id:"brand-presence",kicker:"Brand & presence",title:"A presence that makes the brand clearer.",support:"Identity, company profiles, content, and marketing that keep the project understandable and consistent across touchpoints."}),
          Object.freeze({id:"unsure",kicker:"Start from the problem",title:"Do not know the service name? That is not a blocker.",support:"Send the goal or problem as it is, and we will organize the path instead of asking you to choose a solution first."})
        ]),
        seo:Object.freeze({title:"Wasl Tech Services | Websites, Apps, Systems & Brand",description:"Wasl Tech services for websites, apps, e-commerce, systems, technical solutions, identity, company profiles, and marketing—starting from the project need."})
      })
    }
  }),
  page({
    id:"portfolio",routeKey:"portfolio",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/data/projects.js"],
    content:{
      ar:Object.freeze({purpose:"عرض الأعمال كدليل على نوع المشكلات والحلول والمخرجات التي تنفذها وصل تك.",kicker:"أعمالنا",title:"مشاريع حقيقية، وحلول يمكن رؤيتها.",support:"استكشف ما بنيناه في المواقع والمنصات والتطبيقات والمتاجر والأنظمة والهوية والحملات. لا نعرض النتيجة فقط؛ نوضح الفكرة والاحتياج وما تم تنفيذه.",primaryCta:"استكشف دراسات الحالة",secondaryCta:"ناقش حلًا مشابهًا",sections:Object.freeze([Object.freeze({id:"evidence",kicker:"الدليل",title:"شاهد ما بنيناه، لا ما نقوله عن أنفسنا.",support:"نضيف النتائج والأرقام والشهادات فقط عندما تكون موثقة وقابلة للنشر."}),Object.freeze({id:"case-studies",kicker:"دراسات الحالة",title:"كل مشروع يبدأ من حاجة مختلفة.",support:"داخل كل مشروع نوضح المشكلة والحل والمخرجات المتاحة، دون اختراع أثر غير موثق."}),Object.freeze({id:"final-cta",kicker:"لديك تحدٍ مشابه؟",title:"ناقش الحل معنا.",support:"شاركنا المشكلة أو الهدف الذي تريد الوصول إليه، ونبدأ من السياق قبل اقتراح المنتج أو التقنية."})]),seo:Object.freeze({title:"أعمال وصل تك | مشاريع ودراسات حالة",description:"مشاريع وصل تك في المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق مع عرض الاحتياج والحل والمخرجات المتاحة."})}),
      en:Object.freeze({purpose:"Present the portfolio as evidence of the problems, solutions, and deliverables Wasl Tech works on.",kicker:"Our work",title:"Real projects and solutions you can see.",support:"Explore websites, platforms, apps, e-commerce, systems, identities, and campaigns. We show the need and what was built, not only the final visual.",primaryCta:"Explore case studies",secondaryCta:"Discuss a similar solution",sections:Object.freeze([Object.freeze({id:"evidence",kicker:"Evidence",title:"See what we built, not what we say about ourselves.",support:"Results, numbers, and testimonials are added only when verified and publishable."}),Object.freeze({id:"case-studies",kicker:"Case studies",title:"Every project starts from a different need.",support:"Each project explains the problem, solution, and available deliverables without inventing unverified impact."}),Object.freeze({id:"final-cta",kicker:"Have a similar challenge?",title:"Discuss the solution with us.",support:"Share the problem or goal, and we will start from context before proposing a product or technology."})]),seo:Object.freeze({title:"Wasl Tech Work | Projects & Case Studies",description:"Explore Wasl Tech projects across websites, apps, e-commerce, systems, identity, and marketing with the need, solution, and available deliverables."})})
    }
  }),
  page({
    id:"process",routeKey:"process",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md"],
    content:{
      ar:Object.freeze({purpose:"شرح طريقة العمل من الفهم إلى الإطلاق مع نطاق ومخرجات ومراجعات واضحة.",kicker:"كيف نعمل",title:"ستعرف ما الذي نبنيه، أين وصلنا، وما الخطوة التالية.",support:"نبدأ بفهم الهدف والمشكلة، ثم نحول القرار إلى تجربة ومنتج عبر مراحل واضحة. بعد الإطلاق نوضح خيارات الدعم والتحسين بحسب نطاق المشروع.",primaryCta:"خطط لمشروعك",secondaryCta:"شاهد الأعمال",sections:Object.freeze([
        Object.freeze({id:"understand",kicker:"01 — نفهم",title:"نبدأ من الهدف والمشكلة والجمهور والوضع الحالي.",support:"نستمع لما تريد تغييره وما الموجود اليوم قبل التفكير في التقنية.",outcome:"صورة مشتركة لما يجب أن ينجح."}),
        Object.freeze({id:"decide",kicker:"02 — نقرر",title:"نحدد النطاق والأولوية والمخرجات.",support:"نقارن المسارات ونقرر ما يدخل في المرحلة الحالية وما يؤجل.",outcome:"قرار يمكن اعتماده بدل قائمة رغبات مفتوحة."}),
        Object.freeze({id:"design",kicker:"03 — نصمم",title:"نحوّل القرار إلى بنية ورسالة وتجربة.",support:"نرتب المسار والمحتوى والواجهة والهوية بما يجعل الحل مفهومًا وقابلًا للمراجعة.",outcome:"اتجاه وتجربة يمكن رؤيتها قبل اكتمال البناء."}),
        Object.freeze({id:"build",kicker:"04 — نبني",title:"نحوّل الخطة إلى منتج أو نظام يعمل.",support:"نطور الموقع أو التطبيق أو المتجر أو النظام ضمن مراحل قابلة للاستخدام والمراجعة.",outcome:"نسخة تعمل ويمكن تقييمها على سيناريوهات حقيقية."}),
        Object.freeze({id:"test",kicker:"05 — نختبر",title:"نراجع السيناريوهات والاستجابة والمحتوى.",support:"نفحص السلوك على الشاشات والأجهزة والتفاصيل الأساسية ضمن النطاق.",outcome:"نسخة جاهزة للإطلاق ضمن ما تم اعتماده."}),
        Object.freeze({id:"launch-grow",kicker:"06 — نطلق ونطوّر",title:"نجهز التشغيل ونرتب ما بعد الإطلاق.",support:"نوضح الخطوة التالية وخيارات الدعم أو التحسينات بحسب احتياج المشروع ونطاق الخدمة.",outcome:"منتج يدخل الاستخدام مع مسار واضح لما بعده."}),
        Object.freeze({id:"principle",kicker:"أثناء العمل",title:"لن تكون آخر من يعرف ما يحدث في مشروعك.",support:"نشارك التحديثات وفق آلية التواصل المتفق عليها، ونوضح ما تم إنجازه وما يحتاج قرارًا قبل الانتقال للمرحلة التالية."}),
        Object.freeze({id:"final-cta",kicker:"ابدأ بالسؤال الصحيح",title:"لا تنتظر حتى تعرف كل الإجابات.",support:"شارك ما تعرفه عن المشروع الآن، وسنساعدك على تحديد ما يحتاج إلى بحث وقرار وتنفيذ."})
      ]),seo:Object.freeze({title:"كيف نعمل | وصل تك — Wasl Tech",description:"طريقة عمل وصل تك من فهم المشكلة وتحديد النطاق إلى التصميم والبناء والاختبار والإطلاق وخيارات الدعم بعده."})}),
      en:Object.freeze({purpose:"Explain how work moves from understanding to launch with clear scope, deliverables, reviews, and next steps.",kicker:"How we work",title:"Know what we are building, where we are, and what comes next.",support:"We start from the goal and problem, turn decisions into an experience and working product, then clarify support and improvement options according to project scope.",primaryCta:"Plan your project",secondaryCta:"View our work",sections:Object.freeze([
        Object.freeze({id:"understand",kicker:"01 — Understand",title:"Start with the goal, problem, audience, and current situation.",support:"We listen to what should change and what exists today before choosing technology.",outcome:"A shared picture of what needs to succeed."}),
        Object.freeze({id:"decide",kicker:"02 — Decide",title:"Define scope, priority, and deliverables.",support:"We compare paths and decide what belongs in the current stage and what should wait.",outcome:"An approvable decision instead of an open wish list."}),
        Object.freeze({id:"design",kicker:"03 — Design",title:"Turn the decision into structure, message, and experience.",support:"We organize flow, content, interface, and identity so the solution is understandable and reviewable.",outcome:"A direction and experience that can be seen before full build."}),
        Object.freeze({id:"build",kicker:"04 — Build",title:"Turn the plan into a working product or system.",support:"We build the website, app, store, or system in stages that can be used and reviewed.",outcome:"A working version that can be tested against real scenarios."}),
        Object.freeze({id:"test",kicker:"05 — Test",title:"Review scenarios, responsiveness, and content.",support:"We check behavior across the relevant screens, devices, and key details within scope.",outcome:"A version ready for launch within the approved scope."}),
        Object.freeze({id:"launch-grow",kicker:"06 — Launch & evolve",title:"Prepare operation and organize what comes after launch.",support:"We clarify the next step and support or improvement options based on project need and service scope.",outcome:"A product entering real use with a clear path forward."}),
        Object.freeze({id:"principle",kicker:"During the work",title:"You should not be the last person to know what is happening in your project.",support:"Updates follow the agreed communication process, with completed work and decisions needed before the next stage made clear."}),
        Object.freeze({id:"final-cta",kicker:"Start with the right question",title:"Do not wait until you know every answer.",support:"Share what you know about the project now, and we will help identify what needs research, decision, and execution."})
      ]),seo:Object.freeze({title:"How We Work | Wasl Tech",description:"Wasl Tech's process from understanding the problem and defining scope through design, build, testing, launch, and post-launch options."})})
    }
  }),
  page({
    id:"contact",routeKey:"contact",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/config/site.js"],
    content:{
      ar:Object.freeze({purpose:"جعل التواصل يبدأ من المشكلة أو النتيجة المطلوبة بدل اسم الخدمة.",kicker:"ابدأ من هنا",title:"قل لنا ما الذي تريد تغييره في مشروعك.",support:"فكرة جديدة، مشروع قائم، عملية متعبة، أو حضور لا يعكس قيمتك — اشرح الوضع كما هو، وسنساعدك على اختيار الخطوة التي تستحق أن تبدأ بها.",primaryCta:"ابدأ النقاش على واتساب",secondaryCta:"خطط لمشروعك",sections:Object.freeze([
        Object.freeze({id:"direct",kicker:"تواصل مباشر",title:"إذا كان السؤال سريعًا، ابدأ بأبسط قناة.",support:"واتساب أو البريد مناسب لسؤال محدد أو لتحديد الخطوة التالية."}),
        Object.freeze({id:"project",kicker:"مشروع يحتاج سياقًا",title:"إذا كانت التفاصيل أكثر، استخدم مخطط المشروع.",support:"لا تحتاج إلى وثيقة تقنية؛ نطلب فقط ما يساعدنا على فهم الهدف والوضع الحالي والأولوية."}),
        Object.freeze({id:"context",kicker:"ما الذي ترسله؟",title:"النتيجة أهم من المصطلحات.",support:"أخبرنا ماذا تريد أن تبني أو تحسن، من المستخدم، وما الموجود اليوم. نرتب اسم الخدمة والتقنية بعد ذلك."}),
        Object.freeze({id:"final-cta",kicker:"ابدأ بالمشكلة",title:"لا تحتاج إلى معرفة الحل قبل أن تتواصل.",support:"شارك المشكلة أو النتيجة التي تريدها، وسنساعدك على تحويلها إلى مسار قابل للنقاش."})
      ]),seo:Object.freeze({title:"تواصل مع وصل تك | ابدأ من هدف مشروعك",description:"تواصل مع وصل تك عبر واتساب أو مخطط المشروع وابدأ من المشكلة أو النتيجة التي تريد بناءها أو تحسينها."})}),
      en:Object.freeze({purpose:"Make contact start from the problem or desired outcome instead of a service name.",kicker:"Start here",title:"Tell us what you want to change in your project.",support:"A new idea, an existing project, a painful process, or a presence that does not reflect its value—describe the situation as it is, and we will help identify the right starting point.",primaryCta:"Start on WhatsApp",secondaryCta:"Plan your project",sections:Object.freeze([
        Object.freeze({id:"direct",kicker:"Direct contact",title:"For a quick question, start with the simplest channel.",support:"WhatsApp or email works well for a focused question or to identify the next step."}),
        Object.freeze({id:"project",kicker:"A project with more context",title:"If there is more to explain, use the project planner.",support:"You do not need a technical document; we only ask for what helps us understand the goal, current situation, and priority."}),
        Object.freeze({id:"context",kicker:"What should you send?",title:"The outcome matters more than the terminology.",support:"Tell us what you want to build or improve, who uses it, and what exists today. We can organize the service and technology after that."}),
        Object.freeze({id:"final-cta",kicker:"Start from the problem",title:"You do not need to know the solution before contacting us.",support:"Share the problem or desired outcome, and we will help turn it into a path that can be discussed."})
      ]),seo:Object.freeze({title:"Contact Wasl Tech | Start From Your Project Goal",description:"Contact Wasl Tech through WhatsApp or the project planner and start from the problem or outcome you want to build or improve."})})
    }
  }),
  page({
    id:"startProject",routeKey:"startProject",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/pages/project-planner.js"],
    content:{
      ar:Object.freeze({purpose:"جمع الحد الأدنى من السياق الذي يساعد على فهم المشروع قبل فتح المحادثة.",kicker:"مخطط المشروع",title:"قبل أن نختار الحل، دعنا نفهم ما يحتاجه مشروعك.",support:"لا تحتاج إلى كتابة وثيقة تقنية. اختر الأقرب لوضعك، وأخبرنا بالنتيجة التي تريدها، وسنرتب الأسئلة والخطوة التالية معك.",primaryCta:"أرسل تفاصيل مشروعك",secondaryCta:"تواصل مباشرة",sections:Object.freeze([
        Object.freeze({id:"need",kicker:"01 — الهدف",title:"ما الذي تريد بناءه أو تحسينه؟",support:"اختر الاحتياج الأقرب، أو اختر أنك غير متأكد ونبدأ من المشكلة."}),
        Object.freeze({id:"stage",kicker:"02 — الوضع الحالي",title:"هل تبدأ من فكرة أم تطور مشروعًا قائمًا؟",support:"معرفة المرحلة تساعدنا على طرح الأسئلة المناسبة بدل افتراض نقطة البداية."}),
        Object.freeze({id:"priority",kicker:"03 — الأولوية",title:"ما الشيء الذي يجب أن ينجح أولًا؟",support:"نرتب الأولوية حتى لا يتحول المشروع إلى قائمة رغبات مفتوحة."}),
        Object.freeze({id:"context",kicker:"04 — السياق",title:"من المستخدم؟ ما الموجود؟ وما أهم التفاصيل؟",support:"شارك ما تعرفه الآن؛ لا تحتاج إلى استخدام مصطلحات تقنية."}),
        Object.freeze({id:"review",kicker:"05 — المراجعة",title:"راجع الصورة قبل فتح واتساب.",support:"التفاصيل تبقى في المتصفح حتى تختار أنت فتح المحادثة وإرسالها."})
      ]),seo:Object.freeze({title:"خطط مشروعك | وصل تك — Wasl Tech",description:"رتب هدف المشروع ووضعه الحالي وأولويته وسياقه قبل فتح محادثة واتساب مع وصل تك."})}),
      en:Object.freeze({purpose:"Collect the minimum context needed to understand the project before opening the conversation.",kicker:"Project planner",title:"Before choosing a solution, let us understand what the project needs.",support:"You do not need a technical document. Choose what is closest to your situation, describe the outcome you want, and we will organize the questions and next step.",primaryCta:"Send project details",secondaryCta:"Contact us directly",sections:Object.freeze([
        Object.freeze({id:"need",kicker:"01 — Goal",title:"What do you want to build or improve?",support:"Choose the closest need, or say you are not sure and start from the problem."}),
        Object.freeze({id:"stage",kicker:"02 — Current state",title:"Are you starting from an idea or improving an existing project?",support:"Knowing the stage helps us ask the right questions instead of assuming the starting point."}),
        Object.freeze({id:"priority",kicker:"03 — Priority",title:"What needs to succeed first?",support:"We organize the priority so the project does not become an open wish list."}),
        Object.freeze({id:"context",kicker:"04 — Context",title:"Who is the user, what exists, and what matters most?",support:"Share what you know now; technical terminology is not required."}),
        Object.freeze({id:"review",kicker:"05 — Review",title:"Review the picture before opening WhatsApp.",support:"Your details stay in the browser until you choose to open the conversation and send them."})
      ]),seo:Object.freeze({title:"Plan Your Project | Wasl Tech",description:"Organize the project goal, current state, priority, and context before opening a WhatsApp conversation with Wasl Tech."})})
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
