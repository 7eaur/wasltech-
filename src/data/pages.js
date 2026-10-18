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
    evidenceSources: ["content:b87872d12adcc836018fe61a7ef1556f04aa5b86","src/config/site.js"],
    content: {
      ar: Object.freeze({
        purpose: "تقديم وصل تك كفريق حلول رقمية وتقنية يساعد المشاريع والعلامات التجارية على بناء حضور رقمي احترافي.",
        kicker: "وصل تك",
        title: "نبني حضورك الرقمي باحتراف",
        support: "في وصل تك، نساعد المشاريع والعلامات التجارية على بناء حضور رقمي متكامل يجمع بين التصميم، البرمجة، التسويق، والهوية الرقمية.",
        primaryCta: "ابدأ مشروعك",
        secondaryCta: "استكشف خدماتنا",
        sections: Object.freeze([
          Object.freeze({id:"services",kicker:"خدماتنا",title:"حلول رقمية متكاملة لنمو مشروعك",support:"نقدم خدمات رقمية تساعد المشاريع على بناء حضور واضح، متناسق، واحترافي، من الفكرة حتى الإطلاق."}),
          Object.freeze({id:"work",kicker:"أعمالنا",title:"نماذج من أعمالنا",support:"نماذج من المشاريع التي نفذناها في المواقع والتطبيقات والمتاجر والهوية والحلول الرقمية."}),
          Object.freeze({id:"about",kicker:"من هي وصل تك؟",title:"حلول رقمية تجمع الإبداع والتقنية",support:"وصل تك فريق حلول رقمية وتقنية يساعد المشاريع والأعمال على بناء حضور قوي على الإنترنت وتحويل الأفكار إلى تجارب رقمية عملية ومؤثرة. قد تجد اسمنا مكتوبًا أيضًا «وصلتك»؛ والاسم الرسمي هو وصل تك (Wasl Tech)."}),
          Object.freeze({id:"approach",kicker:"لماذا وصل تك؟",title:"ما يميز طريقة عملنا",support:"نهتم بالتصميم الاحترافي، الحلول المرنة، وضوح التواصل، والدعم المستمر حتى يظهر مشروعك بصورة تليق به."}),
          Object.freeze({id:"process",kicker:"كيف نعمل؟",title:"من الفكرة إلى الإطلاق بخطوات واضحة",support:"نبدأ من هدف المشروع وواقعه الحالي، ثم نرتب النطاق والأولويات، نصمم ونطوّر، نراجع ما تم بناؤه، ونجهز الإطلاق بخطوات واضحة يمكن متابعتها واتخاذ القرار فيها."}),
          Object.freeze({id:"faq",kicker:"الأسئلة الشائعة",title:"إجابات تساعدك قبل أن تبدأ",support:"أهم الأسئلة حول الخدمات، التنفيذ، وما الذي تحتاجه للبدء معنا."}),
          Object.freeze({id:"final-cta",kicker:"ابدأ مشروعك",title:"لا تعرف من أين تبدأ؟",support:"راسلنا بفكرة مشروعك، وسنساعدك على اختيار الحل المناسب حسب احتياجك وميزانيتك."})
        ]),
        seo: Object.freeze({title:"تصميم مواقع وتطبيقات ومتاجر وأنظمة | وصل تك",description:"وصل تك (وصلتك) لتصميم وتطوير مواقع إلكترونية وتطبيقات الجوال والمتاجر والأنظمة، مع خدمات الهوية والتسويق الرقمي للمشاريع في اليمن والخليج."})
      }),
      en: Object.freeze({
        purpose: "Position Wasl Tech as a partner that turns real business needs into usable, evolvable digital products, systems, and brand presence.",
        kicker: "Wasl Tech",
        title: "We build your digital presence professionally",
        support: "At Wasl Tech, we help projects and brands build an integrated digital presence through design, development, marketing, and digital identity.",
        primaryCta: "Start your project",
        secondaryCta: "Explore our services",
        sections: Object.freeze([
          Object.freeze({id:"services",kicker:"Our services",title:"Integrated digital solutions for your project's growth",support:"We provide digital services that help projects build a clear, consistent, and professional presence from idea to launch."}),
          Object.freeze({id:"work",kicker:"Our work",title:"Selected work",support:"A selection of projects across websites, apps, e-commerce, identity, and digital solutions."}),
          Object.freeze({id:"about",kicker:"About Wasl Tech",title:"Digital solutions that combine creativity and technology",support:"Wasl Tech provides integrated digital solutions that help companies and individuals build a strong online presence and turn ideas into effective digital experiences."}),
          Object.freeze({id:"approach",kicker:"Why Wasl Tech?",title:"What makes our approach different",support:"Professional design, flexible solutions, clear communication, attention to detail, and continued support around your project."}),
          Object.freeze({id:"process",kicker:"How we work",title:"From idea to launch through clear steps",support:"We listen, plan, design and build, then launch and support the project after release."}),
          Object.freeze({id:"faq",kicker:"FAQ",title:"Answers that help before you start",support:"Common questions about services, execution, and what you need to begin."}),
          Object.freeze({id:"final-cta",kicker:"Start your project",title:"Not sure where to start?",support:"Tell us about your project idea and we will help you choose the right solution for your needs and budget."})
        ]),
        seo: Object.freeze({title:"Website, App & E-commerce Development | Wasl Tech",description:"Wasl Tech designs websites, mobile apps, online stores and custom software, with branding and digital marketing for projects in Yemen and the Gulf."})
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
        kicker:"من نحن؟",
        title:"نبني حضورك الرقمي باحتراف",
        support:"في وصل تك نساعد العلامات التجارية والمشاريع على بناء حضور رقمي قوي واحترافي، من خلال التصميم الإبداعي، التقنية المتقدمة، والتسويق الذكي. نؤمن أن كل فكرة تستحق أن تُرى وتُحدث أثرًا.",
        primaryCta:"ابدأ الحديث معنا",secondaryCta:"شاهد الأعمال",
        sections:Object.freeze([
          Object.freeze({id:"story",kicker:"قصتنا",title:"رحلة بدأت من الشغف بالتقنية والإبداع",support:"بدأت رحلتنا من شغفنا بالتقنية والإبداع، ورؤيتنا لمساعدة الشركات والأفراد على الاستفادة من العالم الرقمي بأفضل طريقة ممكنة.",body:Object.freeze(["نحن شريكك في كل خطوة، من الفكرة إلى الإطلاق وما بعده.","نركز على الجودة، وضوح العمل، وبناء حلول رقمية تخدم هدف المشروع وتدعم نموه.","الاسم الرسمي لفريقنا «وصل تك» (Wasl Tech)، وقد يُكتب في البحث «وصلتك». نقدم تصميم المواقع والتطبيقات والمتاجر والحلول البرمجية والهوية والتسويق."])}),
          Object.freeze({id:"vision",kicker:"اتجاهنا",title:"رؤيتنا",support:"أن نكون الخيار الأول في العالم العربي في تقديم الحلول الرقمية المتكاملة، وأن نصنع تأثيرًا إيجابيًا ومستدامًا في حياة عملائنا ومجتمعاتهم."}),
          Object.freeze({id:"mission",kicker:"ما نقدمه",title:"رسالتنا",support:"تقديم حلول رقمية مبتكرة وفعالة تساعد عملاءنا على النمو والتطور في بيئة رقمية تنافسية، عبر فهم احتياجاتهم وتقديم تجارب تحقق قيمة حقيقية."}),
          Object.freeze({id:"principles",kicker:"مبادئنا",title:"ماذا نؤمن؟",support:"مبادئ بسيطة تحكم طريقة تفكيرنا في التصميم والتقنية والعمل مع العميل.",items:Object.freeze([
            Object.freeze({title:"الفكرة تستحق الظهور",body:"كل فكرة تحمل قيمة، ونحن هنا لنحولها إلى تجربة رقمية مميزة."}),
            Object.freeze({title:"التصميم رسالة",body:"التصميم ليس مجرد شكل جميل؛ هو طريقة توصل المعنى وتبني علاقة."}),
            Object.freeze({title:"التقنية وسيلة للنمو",body:"نستخدم التقنية لبناء حلول قابلة للتطوير وتخدم أهداف المشروع."}),
            Object.freeze({title:"الوضوح يصنع الثقة",body:"نؤمن بالشفافية والتواصل الواضح في كل مرحلة من العمل."})
          ])}),
          Object.freeze({id:"build",kicker:"خدماتنا",title:"ماذا نصنع؟",support:"مواقع وتطبيقات، متاجر إلكترونية، هويات بصرية، بروفايلات، محتوى وتسويق، وأنظمة وحلول تقنية مخصصة."}),
          Object.freeze({id:"final-cta",kicker:"ابدأ معنا",title:"لديك فكرة تستحق أن تظهر؟",support:"شاركنا فكرتك، ونساعدك على تحويلها إلى حضور رقمي احترافي يناسب مشروعك."})
        ]),
        seo:Object.freeze({title:"من نحن | وصل تك لتصميم المواقع والبرمجة والحلول الرقمية",description:"تعرف على فريق وصل تك (وصلتك)، الذي يصمم المواقع ويبرمج التطبيقات والمتاجر والأنظمة المخصصة ويقدم حلول الهوية البصرية والتسويق في اليمن والخليج."})
      }),
      en:Object.freeze({
        purpose:"Introduce Wasl Tech as a team that connects strategy, design, software, identity, and marketing around a real project need.",
        kicker:"About us",title:"We build your digital presence professionally",
        support:"At Wasl Tech, we help brands and projects build a strong professional digital presence through creative design, advanced technology, and smart marketing. We believe every idea deserves to be seen and make an impact.",
        primaryCta:"Start the conversation",secondaryCta:"View our work",
        sections:Object.freeze([
          Object.freeze({id:"story",kicker:"Our story",title:"A journey that started with a passion for technology and creativity",support:"Our journey began with a passion for technology and creativity and a vision to help companies and individuals benefit from the digital world in the best possible way.",body:Object.freeze(["We stay with the project from the idea to launch and beyond.","We focus on quality, clarity, and digital solutions that serve the project goal and support growth."])}),
          Object.freeze({id:"vision",kicker:"Our direction",title:"Our vision",support:"To become a leading choice in the Arab world for integrated digital solutions and create positive, sustainable impact for our clients and communities."}),
          Object.freeze({id:"mission",kicker:"What we do",title:"Our mission",support:"To provide innovative and effective digital solutions that help clients grow in a competitive digital environment through understanding their needs and delivering valuable experiences."}),
          Object.freeze({id:"principles",kicker:"Our principles",title:"What we believe",support:"Simple principles guide how we think about design, technology, and working with clients.",items:Object.freeze([
            Object.freeze({title:"Every idea deserves to be seen",body:"Every idea carries value, and we help turn it into a distinctive digital experience."}),
            Object.freeze({title:"Design is a message",body:"Design is not only appearance; it communicates meaning and builds a relationship."}),
            Object.freeze({title:"Technology supports growth",body:"We use technology to build solutions that can evolve with the project."}),
            Object.freeze({title:"Clarity builds trust",body:"We believe in transparent communication throughout every stage of the work."})
          ])}),
          Object.freeze({id:"build",kicker:"Our services",title:"What we build",support:"Websites and apps, e-commerce, brand identity, company profiles, content and marketing, and custom technical solutions."}),
          Object.freeze({id:"final-cta",kicker:"Start with us",title:"Have an idea that deserves to be seen?",support:"Share your idea and we will help turn it into a professional digital presence that fits your project."})
        ]),
        seo:Object.freeze({title:"About Wasl Tech | Web, Apps & Digital Solutions Team",description:"Meet the Wasl Tech team building websites, mobile apps, e-commerce, custom systems and brand experiences for projects in Yemen and the Gulf."})
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
        kicker:"خدماتنا",title:"حلول رقمية متكاملة لنمو مشروعك",support:"في وصل تك، نقدم خدمات رقمية تساعد المشاريع على بناء حضور واضح، متناسق، واحترافي، من الفكرة حتى الإطلاق.",
        primaryCta:"استكشف الخدمات",secondaryCta:"تواصل معنا",
        sections:Object.freeze([
          Object.freeze({id:"digital-products",kicker:"المواقع والتطبيقات والمتاجر",title:"حلول رقمية احترافية لعملائك",support:"مواقع عصرية وسريعة، تطبيقات جوال احترافية، ومتاجر إلكترونية متكاملة تمنح عملاءك تجربة واضحة وسهلة."}),
          Object.freeze({id:"systems",kicker:"البرمجة والحلول التقنية",title:"حلول مخصصة تطور أداء عملك",support:"حلول برمجية مخصصة، لوحات تحكم، تكاملات، وأتمتة تساعدك على تنظيم العمل وتطوير الأداء."}),
          Object.freeze({id:"brand-presence",kicker:"الهوية والتسويق",title:"حضور واضح ومتناسق لعلامتك",support:"هوية بصرية، بروفايلات، محتوى وتسويق رقمي يساعد علامتك على الظهور بصورة احترافية والوصول إلى جمهورها."}),
          Object.freeze({id:"unsure",kicker:"نساعدك في الاختيار",title:"لا تعرف من أين تبدأ؟",support:"راسلنا بفكرة مشروعك، وسنساعدك على اختيار الحل المناسب حسب احتياجك وميزانيتك."})
        ]),
        seo:Object.freeze({title:"خدمات تصميم المواقع والتطبيقات والمتاجر والأنظمة | وصل تك",description:"خدمات وصل تك تشمل تصميم المواقع والتطبيقات والمتاجر والأنظمة، وربط الأنظمة، وتصميم الهوية والبروفايلات والتسويق الرقمي في اليمن والخليج."})
      }),
      en:Object.freeze({
        purpose:"Help visitors reach the right solution from the goal or problem instead of forcing them to choose a service name or package.",
        kicker:"Our services",title:"Integrated digital solutions for your project's growth",support:"Wasl Tech provides digital services that help projects build a clear, consistent, and professional presence from idea to launch.",
        primaryCta:"Explore services",secondaryCta:"Contact us",
        sections:Object.freeze([
          Object.freeze({id:"digital-products",kicker:"Websites, apps & e-commerce",title:"Professional digital experiences for your customers",support:"Modern websites, professional mobile apps, and integrated e-commerce experiences that stay clear and easy to use."}),
          Object.freeze({id:"systems",kicker:"Software & technical solutions",title:"Custom solutions that improve how your business works",support:"Custom software, dashboards, integrations, and automation that help organize work and improve performance."}),
          Object.freeze({id:"brand-presence",kicker:"Brand & marketing",title:"A clear, consistent presence for your brand",support:"Brand identity, company profiles, content, and digital marketing that help the brand look professional and reach its audience."}),
          Object.freeze({id:"unsure",kicker:"We can help you choose",title:"Not sure where to start?",support:"Tell us about your project idea and we will help you choose the right solution for your needs and budget."})
        ]),
        seo:Object.freeze({title:"Websites, Mobile Apps, E-commerce & Software | Wasl Tech",description:"Explore Wasl Tech services for web design, mobile apps, e-commerce, custom systems, system integration, business profiles, brand design and digital marketing."})
      })
    }
  }),
  page({
    id:"portfolio",routeKey:"portfolio",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/data/projects.js"],
    content:{
      ar:Object.freeze({purpose:"عرض نماذج من أعمال وصل تك في الخدمات الرقمية المختلفة.",kicker:"أعمالنا",title:"نماذج من أعمالنا",support:"استكشف مجموعة من المشاريع التي نفذناها في المواقع والتطبيقات والمتاجر والأنظمة والهوية والتسويق.",primaryCta:"استكشف الأعمال",secondaryCta:"ناقش مشروعك معنا",sections:Object.freeze([Object.freeze({id:"evidence",kicker:"أعمال متنوعة",title:"مشاريع في مجالات رقمية مختلفة",support:"نماذج توضّح نوع الحلول والتجارب التي نبنيها."}),Object.freeze({id:"case-studies",kicker:"تفاصيل المشاريع",title:"تعرّف على كل مشروع",support:"داخل كل مشروع نعرض فكرته وما تم تنفيذه بصورة واضحة ومباشرة."}),Object.freeze({id:"final-cta",kicker:"لديك مشروع؟",title:"خلّنا نبنيه معك",support:"شاركنا فكرتك أو احتياجك، ونرتب معك الخطوة المناسبة للبدء."})]),seo:Object.freeze({title:"أعمال تصميم المواقع والتطبيقات والمتاجر | وصل تك",description:"استكشف مشاريع وصل تك ودراسات الحالة في المواقع وتطبيقات الجوال والمتاجر والأنظمة والهوية والتسويق، مع تفاصيل نطاق التنفيذ والمخرجات."})}),
      en:Object.freeze({purpose:"Show selected Wasl Tech work across digital services.",kicker:"Our work",title:"Selected projects",support:"Explore projects across websites, apps, e-commerce, systems, identity, and digital marketing.",primaryCta:"Explore our work",secondaryCta:"Discuss your project",sections:Object.freeze([Object.freeze({id:"evidence",kicker:"Different projects",title:"Work across different digital needs",support:"Examples of the solutions and experiences we build."}),Object.freeze({id:"case-studies",kicker:"Project details",title:"Explore each project",support:"Each project presents the idea and what was delivered in a clear, direct way."}),Object.freeze({id:"final-cta",kicker:"Have a project?",title:"Let us build it with you",support:"Share your idea or need and we will help organize the right starting point."})]),seo:Object.freeze({title:"Web, App & E-commerce Case Studies | Wasl Tech",description:"Browse Wasl Tech case studies covering websites, mobile apps, online stores, systems, brand identities and campaigns, with project scope and delivered work."})})
    }
  }),
  page({
    id:"process",routeKey:"process",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md"],
    content:{
      ar:Object.freeze({purpose:"شرح طريقة عمل وصل تك بصورة بسيطة من فهم الاحتياج حتى الإطلاق والدعم.",kicker:"كيف نعمل؟",title:"خطوات واضحة من الفكرة إلى الإطلاق",support:"نستمع لاحتياجاتك، نخطط، نصمم ونطوّر، ثم نطلق المشروع وندعمك بعد الإطلاق.",primaryCta:"ابدأ مشروعك",secondaryCta:"شاهد أعمالنا",sections:Object.freeze([
        Object.freeze({id:"understand",kicker:"01 — نستمع",title:"نستمع لاحتياجاتك وأهدافك",support:"نفهم ما تريد الوصول إليه، من سيستخدم الحل، وما المشكلة أو الفرصة التي يجب أن يعالجها قبل اقتراح أي تصميم أو تقنية.",outcome:"فهم واضح للمشروع وأهدافه والنتيجة التي يجب أن يحققها."}),
        Object.freeze({id:"decide",kicker:"02 — نخطط",title:"نضع خطة واضحة للمشروع",support:"نرتب النطاق والخطوات والأولويات والاعتماديات، ونحدد ما يجب تنفيذه أولًا وما يمكن تأجيله بدل تحويل المشروع إلى قائمة وظائف مفتوحة.",outcome:"خطة تنفيذ واضحة ومفهومة ونطاق يمكن مراجعته قبل البناء."}),
        Object.freeze({id:"design",kicker:"03 — نصمم",title:"نحوّل القرار إلى بنية ورسالة وتجربة.",support:"نرتب المسار والمحتوى والواجهة والهوية بما يجعل الحل مفهومًا وقابلًا للمراجعة.",outcome:"اتجاه وتجربة يمكن رؤيتها قبل اكتمال البناء."}),
        Object.freeze({id:"build",kicker:"03 — نصمم ونطوّر",title:"نحوّل الخطة إلى حل رقمي متكامل",support:"نحوّل الخطة إلى واجهات ووظائف فعلية، ونراجع المحتوى والاستجابة والسلوك والتكاملات ضمن النطاق بدل انتظار نهاية التنفيذ لاكتشاف الفجوات.",outcome:"حل رقمي قابل للمراجعة والاستخدام ويعكس ما تم اعتماده."}),
        Object.freeze({id:"test",kicker:"05 — نختبر",title:"نراجع السيناريوهات والاستجابة والمحتوى.",support:"نفحص السلوك على الشاشات والأجهزة والتفاصيل الأساسية ضمن النطاق.",outcome:"نسخة جاهزة للإطلاق ضمن ما تم اعتماده."}),
        Object.freeze({id:"launch-grow",kicker:"04 — نطلق وندعم",title:"نطلق المشروع ونستمر معك",support:"نجهز النسخة للإطلاق، نراجع المتطلبات الأساسية للتشغيل، ونوضح ما يحتاج متابعة أو دعم أو تطوير لاحق بعد بدء الاستخدام الفعلي.",outcome:"إطلاق منظم ومسار واضح لما بعده دون خلط بين الإطلاق والتطوير المستقبلي."}),
        Object.freeze({id:"principle",kicker:"أثناء العمل",title:"تواصل واضح في كل مرحلة",support:"نبقيك على اطلاع بما تم إنجازه وما يحتاج مراجعة أو قرارًا، ونوضح أثر التغيير على النطاق قبل الانتقال للخطوة التالية حتى تبقى القرارات مفهومة طوال التنفيذ."}),
        Object.freeze({id:"final-cta",kicker:"ابدأ مشروعك",title:"جاهز تبدأ؟",support:"شاركنا فكرتك أو احتياجك الحالي، ونرتب معك الخطوة التالية."})
      ]),seo:Object.freeze({title:"مراحل تصميم وتطوير المواقع والتطبيقات | وصل تك",description:"كيف ننفذ مشاريع المواقع والتطبيقات والمتاجر والأنظمة؟ اطلع على مراحل فهم المتطلبات وتحديد النطاق والتصميم والبرمجة والاختبار والإطلاق مع وصل تك."})}),
      en:Object.freeze({purpose:"Explain Wasl Tech's simple workflow from understanding the need to launch and support.",kicker:"How we work",title:"Clear steps from idea to launch",support:"We start from the project goal and current situation, organize scope and priorities, design and build, review the result, and prepare launch through clear steps that can be followed and approved.",primaryCta:"Start your project",secondaryCta:"View our work",sections:Object.freeze([
        Object.freeze({id:"understand",kicker:"01 — Listen",title:"We listen to your needs and goals",support:"We clarify the outcome, the people who will use the solution, and the problem or opportunity it needs to address before proposing design or technology.",outcome:"A clear understanding of the project, its users, and the outcome it needs to achieve."}),
        Object.freeze({id:"decide",kicker:"02 — Plan",title:"We create a clear project plan",support:"We organize scope, priorities, dependencies, and sequence so the team knows what must be built first and what can wait instead of treating every idea as immediate scope.",outcome:"A clear implementation plan and a scope that can be reviewed before build."}),
        Object.freeze({id:"design",kicker:"03 — Design",title:"Turn the decision into structure, message, and experience.",support:"We organize flow, content, interface, and identity so the solution is understandable and reviewable.",outcome:"A direction and experience that can be seen before full build."}),
        Object.freeze({id:"build",kicker:"03 — Design & develop",title:"We turn the plan into an integrated digital solution",support:"We turn the approved direction into real interfaces and functionality, reviewing content, responsiveness, behavior, and integrations during delivery instead of waiting until the end.",outcome:"A digital solution that is ready for review and reflects the approved scope."}),
        Object.freeze({id:"test",kicker:"05 — Test",title:"Review scenarios, responsiveness, and content.",support:"We check behavior across the relevant screens, devices, and key details within scope.",outcome:"A version ready for launch within the approved scope."}),
        Object.freeze({id:"launch-grow",kicker:"04 — Launch & support",title:"We launch the project and stay with you",support:"We prepare the release, review the essential operating requirements, and clarify what needs monitoring, support, or later improvement once real usage begins.",outcome:"An organized launch and a clear path for what happens after release."}),
        Object.freeze({id:"principle",kicker:"During the work",title:"Clear communication at every stage",support:"We keep you informed about what is complete, what needs review or a decision, and how requested changes affect scope before the next step begins."}),
        Object.freeze({id:"final-cta",kicker:"Start your project",title:"Ready to start?",support:"Share your idea or current need and we will organize the next step with you."})
      ]),seo:Object.freeze({title:"Website & App Development Process | Wasl Tech",description:"See how Wasl Tech plans and develops websites, mobile apps, online stores and systems, from discovery and scope to design, development, testing and launch."})})
    }
  }),
  page({
    id:"contact",routeKey:"contact",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/config/site.js"],
    content:{
      ar:Object.freeze({purpose:"تسهيل التواصل مع وصل تك وبدء مناقشة المشروع.",kicker:"تواصل معنا",title:"نحن هنا لمساعدتك",support:"سواء لديك فكرة جديدة أو مشروع قائم، شاركنا الهدف والوضع الحالي وما تريد تحسينه. سنساعدك على تحديد نقطة البداية والخدمة الأقرب، وما المعلومات التي نحتاجها قبل الانتقال إلى نطاق تنفيذ واضح. إذا كان لديك رابط حالي أو مثال قريب مما تريد أو متطلبات مبدئية، أرسلها معنا حتى نفهم السياق أسرع ونناقش ما يمكن تنفيذه بوضوح.",primaryCta:"تواصل عبر واتساب",secondaryCta:"ابدأ مشروعك",sections:Object.freeze([
        Object.freeze({id:"direct",kicker:"تواصل مباشر",title:"اختر الطريقة الأنسب للتواصل",support:"تواصل معنا عبر واتساب أو البريد الإلكتروني إذا كان لديك سؤال مباشر أو تريد إرسال فكرة مختصرة، وسنبدأ بفهم الاحتياج قبل اقتراح الخطوة التالية."}),
        Object.freeze({id:"project",kicker:"لديك مشروع؟",title:"شاركنا تفاصيل مشروعك",support:"استخدم مخطط المشروع لترتيب الهدف والمرحلة والأولوية والمتطلبات الأساسية قبل التواصل، حتى تبدأ المحادثة بصورة أوضح وتقل الأسئلة المتكررة."}),
        Object.freeze({id:"context",kicker:"غير متأكد من الخدمة؟",title:"سنساعدك على اختيار الأنسب",support:"اشرح فكرتك أو احتياجك كما هو حتى لو لم تعرف اسم الخدمة أو التقنية المناسبة؛ سنساعدك على تحويل المشكلة إلى مسار أقرب للتنفيذ. وإذا كان المشروع قائمًا، أخبرنا بما يعمل حاليًا وما الذي تريد تحسينه حتى نفهم نقطة البداية بدقة أكبر."}),
        Object.freeze({id:"final-cta",kicker:"ابدأ الآن",title:"ابدأ الحديث معنا",support:"راسلنا وسنناقش معك فكرتك واحتياجك والخطوة المناسبة للبدء."})
      ]),seo:Object.freeze({title:"تواصل مع وصل تك (وصلتك) | تصميم مواقع وبرمجة تطبيقات",description:"تواصل مع وصل تك (وصلتك) لمناقشة تصميم موقع إلكتروني أو برمجة تطبيق أو متجر أو نظام مخصص. طرق التواصل عبر واتساب والبريد الإلكتروني ومخطط المشروع."})}),
      en:Object.freeze({purpose:"Make it easy to contact Wasl Tech and start discussing a project.",kicker:"Contact us",title:"We are here to help",support:"Whether you have a new idea or an existing project, share the goal, current situation, and what you want to improve. We will help identify the right starting point, the closest service path, and the information needed before scope is defined.",primaryCta:"Contact us on WhatsApp",secondaryCta:"Start your project",sections:Object.freeze([
        Object.freeze({id:"direct",kicker:"Direct contact",title:"Choose the best way to reach us",support:"Use WhatsApp or email for a direct question or a short project idea. We start by understanding the need before suggesting the next step or delivery path."}),
        Object.freeze({id:"project",kicker:"Have a project?",title:"Share your project details",support:"Use the project planner to organize the goal, stage, priority, and essential requirements before contacting us so the first conversation starts with clearer context."}),
        Object.freeze({id:"context",kicker:"Not sure which service?",title:"We will help you choose",support:"Describe the idea or need even if you do not know the service name or technology. We will help turn the problem into a clearer implementation path."}),
        Object.freeze({id:"final-cta",kicker:"Start now",title:"Start the conversation",support:"Message us and we will discuss your idea, needs, and the right next step."})
      ]),seo:Object.freeze({title:"Contact Wasl Tech | Website & App Development",description:"Contact Wasl Tech to discuss your website, mobile app, online store, custom software or brand project via WhatsApp, email or the project planner."})})
    }
  }),
  page({
    id:"startProject",routeKey:"startProject",state:CONTENT_STATE.READY,reviewed:true,
    fieldState:{purpose:CONTENT_STATE.READY,arabicCore:CONTENT_STATE.READY,sections:CONTENT_STATE.READY,cta:CONTENT_STATE.READY,seo:CONTENT_STATE.READY,businessFacts:CONTENT_STATE.READY,english:CONTENT_STATE.READY},
    evidenceSources:["content:b87872d12adcc836018fe61a7ef1556f04aa5b86:إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md","src/pages/project-planner.js"],
    content:{
      ar:Object.freeze({purpose:"جمع تفاصيل المشروع الأساسية قبل بدء المحادثة.",kicker:"ابدأ مشروعك",title:"شاركنا تفاصيل مشروعك",support:"أخبرنا بما تريد بناءه أو تطويره، وسنرتب المعلومات الأساسية لتبدأ المحادثة بصورة أوضح.",primaryCta:"جهّز تفاصيل مشروعك",secondaryCta:"تواصل مباشرة",sections:Object.freeze([
        Object.freeze({id:"need",kicker:"01 — الهدف",title:"ما الذي تريد بناءه أو تحسينه؟",support:"اختر الاحتياج الأقرب، أو اختر أنك غير متأكد ونبدأ من المشكلة."}),
        Object.freeze({id:"stage",kicker:"02 — الوضع الحالي",title:"هل تبدأ من فكرة أم تطور مشروعًا قائمًا؟",support:"معرفة المرحلة تساعدنا على طرح الأسئلة المناسبة بدل افتراض نقطة البداية."}),
        Object.freeze({id:"priority",kicker:"03 — الأولوية",title:"ما الشيء الذي يجب أن ينجح أولًا؟",support:"نرتب الأولوية حتى لا يتحول المشروع إلى قائمة رغبات مفتوحة."}),
        Object.freeze({id:"context",kicker:"04 — السياق",title:"من المستخدم؟ ما الموجود؟ وما أهم التفاصيل؟",support:"شارك ما تعرفه الآن؛ لا تحتاج إلى استخدام مصطلحات تقنية."}),
        Object.freeze({id:"review",kicker:"05 — المراجعة",title:"راجع الصورة قبل فتح واتساب.",support:"التفاصيل تبقى في المتصفح حتى تختار أنت فتح المحادثة وإرسالها."})
      ]),seo:Object.freeze({title:"ابدأ مشروع موقع أو تطبيق أو متجر إلكتروني | وصل تك",description:"ابدأ مع وصل تك مشروع تصميم موقع إلكتروني أو تطبيق جوال أو متجر أو نظام أعمال، وحدد أهدافك والمتطلبات والوظائف والأولويات قبل التنفيذ."})}),
      en:Object.freeze({purpose:"Collect the essential project details before starting the conversation.",kicker:"Start your project",title:"Share your project details",support:"Tell us what you want to build or improve and we will organize the essential information for a clearer conversation.",primaryCta:"Prepare project details",secondaryCta:"Contact us directly",sections:Object.freeze([
        Object.freeze({id:"need",kicker:"01 — Goal",title:"What do you want to build or improve?",support:"Choose the closest need, or say you are not sure and start from the problem."}),
        Object.freeze({id:"stage",kicker:"02 — Current state",title:"Are you starting from an idea or improving an existing project?",support:"Knowing the stage helps us ask the right questions instead of assuming the starting point."}),
        Object.freeze({id:"priority",kicker:"03 — Priority",title:"What needs to succeed first?",support:"We organize the priority so the project does not become an open wish list."}),
        Object.freeze({id:"context",kicker:"04 — Context",title:"Who is the user, what exists, and what matters most?",support:"Share what you know now; technical terminology is not required."}),
        Object.freeze({id:"review",kicker:"05 — Review",title:"Review the picture before opening WhatsApp.",support:"Your details stay in the browser until you choose to open the conversation and send them."})
      ]),seo:Object.freeze({title:"Start a Website, App or Online Store Project | Wasl Tech",description:"Plan a website, mobile app, e-commerce store or custom system with Wasl Tech by clarifying the goal, essential features and priorities before development."})})
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
        title: "إجابات تساعدك قبل أن تبدأ",
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
          title: "أسئلة تصميم المواقع والتطبيقات والمتاجر والأنظمة | وصل تك",
          description: "إجابات عن تصميم المواقع وبرمجة التطبيقات وإنشاء المتاجر والأنظمة والتكاملات والهوية وخطوات بدء المشروع وتنفيذه مع وصل تك."
        })
      }),
      en: Object.freeze({
        purpose: "Answer the questions that most often affect a project decision before the first conversation.",
        kicker: "Frequently asked questions",
        title: "Answers that help before you start",
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
          title: "Web Design, Apps, Stores & Software FAQs | Wasl Tech",
          description: "Practical answers about websites, mobile apps, online stores, custom systems, integrations, branding and starting a digital project with Wasl Tech."
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
    evidenceSources: ["src/data/articles.js", "src/config/routes.js"],
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
          title: "أدلة تصميم المواقع والتطبيقات والمتاجر والهوية | وصل تك",
          description: "مقالات تساعدك قبل تصميم موقع أو برمجة تطبيق أو إنشاء متجر أو نظام مخصص، مع أدلة عملية للهوية البصرية والمحتوى والتسويق الرقمي."
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
          title: "Website, App, Store & Branding Guides | Wasl Tech",
          description: "Guides to help you plan a website, mobile app, e-commerce store or custom system, with practical advice about brand identity, content and digital marketing."
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
    evidenceSources: ["src/data/jobs.js", "src/config/routes.js"],
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
            title: "واتساب والبريد وإنستغرام خدمات خارجية عن الموقع.",
            support: "تُحمّل ملفات الخط المستخدمة في الواجهة من نطاق الموقع نفسه. وعندما تختار فتح واتساب أو البريد أو إنستغرام تنتقل إلى خدمة خارجية قد تعالج بيانات تقنية أو معلومات تشاركها معها وفق إعداداتها وسياساتها الخاصة."
          }),
          Object.freeze({
            id: "tracking",
            kicker: "التحليلات والكوكيز",
            title: "التحليلات اختيارية، ولا تبدأ إلا بموافقتك.",
            support: "لا يتم تحميل Google Analytics 4 قبل موافقتك واختيار السماح بالتحليلات. عند الموافقة قد يستخدم ملفات تعريف ارتباط لقياس استخدام الموقع، ويمكنك رفضه أو تعديل اختيارك من إعدادات التحليلات في تذييل الصفحة. يُحفظ تفضيلك على جهازك ولا تُرسل حقول مخطط المشروع أو نصوص رسائلك إلى Analytics."
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
            title: "WhatsApp, email, and Instagram operate outside this website.",
            support: "Interface font files are loaded from this website's own domain. When you choose WhatsApp, email, or Instagram, you move to an external service that may process technical data or information you share under its own settings and policies."
          }),
          Object.freeze({
            id: "tracking",
            kicker: "Analytics and cookies",
            title: "Analytics are optional and only start after you agree.",
            support: "Google Analytics 4 is not loaded until you choose to allow analytics. After consent, analytics cookies may be used to measure site usage. You can decline or change your preference using Analytics preferences in the footer. Your choice is stored on your device; project-planner fields and message content are not sent to Analytics."
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
