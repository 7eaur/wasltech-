import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { services } from "../data/services.js";
import { getProjectById } from "../data/projects.js";
import { faqs } from "../data/faq.js";
import { ActionLink } from "../components/ActionLink.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema, websiteSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { icon } from "../components/icons.js";

const homeRecord = pages.find((page) => page.id === "home");

const featuredProjectIds = Object.freeze(["project-02", "project-06", "project-09"]);
const featuredFaqIds = Object.freeze(["start-1", "workflow-1", "product-3"]);

const heroSignals = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ icon: "connected", title: "حلول متكاملة", body: "من الفكرة إلى التنفيذ" }),
    Object.freeze({ icon: "checklist", title: "تنفيذ منظم", body: "خطوات واضحة ومترابطة" }),
    Object.freeze({ icon: "message", title: "تواصل مباشر", body: "وضوح في كل مرحلة" })
  ]),
  en: Object.freeze([
    Object.freeze({ icon: "connected", title: "Connected solutions", body: "From idea to delivery" }),
    Object.freeze({ icon: "checklist", title: "Organized execution", body: "Clear, connected steps" }),
    Object.freeze({ icon: "message", title: "Direct communication", body: "Clarity through each stage" })
  ])
});

const aboutValues = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ title: "تكامل التخصصات", body: "التقنية والتصميم والمحتوى تعمل ضمن مسار واحد." }),
    Object.freeze({ title: "تواصل واضح", body: "نرتب القرارات والملاحظات بخطوات مفهومة." }),
    Object.freeze({ title: "تنفيذ متنوع", body: "نتعامل مع مشاريع بمتطلبات وأهداف مختلفة." })
  ]),
  en: Object.freeze([
    Object.freeze({ title: "Connected disciplines", body: "Technology, design, and content work within one delivery path." }),
    Object.freeze({ title: "Clear communication", body: "Decisions and feedback stay organized and easy to follow." }),
    Object.freeze({ title: "Varied delivery", body: "We work across projects with different goals and requirements." })
  ])
});

const whyPoints = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ title: "فهم واضح للمشروع", body: "نبدأ بالهدف والاحتياج حتى يكون الحل مبنيًا على ما يحتاجه مشروعك فعلًا." }),
    Object.freeze({ title: "حلول مخصصة", body: "نرتب التصميم والتقنية والمحتوى بما يناسب طبيعة المشروع بدل فرض قالب جاهز." }),
    Object.freeze({ title: "اهتمام بالتفاصيل", body: "نهتم بالتفاصيل التي تصنع تجربة أوضح وتنفيذًا أكثر اتساقًا." }),
    Object.freeze({ title: "متابعة واضحة", body: "يبقى التواصل منظمًا خلال مراحل العمل حتى تكون القرارات مفهومة." })
  ]),
  en: Object.freeze([
    Object.freeze({ title: "Clear project understanding", body: "We start with the goal and need so the solution fits what the project actually requires." }),
    Object.freeze({ title: "Tailored solutions", body: "Design, technology, and content are shaped around the project instead of a ready-made template." }),
    Object.freeze({ title: "Attention to detail", body: "We focus on the details that create a clearer experience and more consistent delivery." }),
    Object.freeze({ title: "Clear follow-through", body: "Communication stays organized throughout the work so decisions remain easy to understand." })
  ])
});

const processSteps = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ icon: "discover", number: "01", title: "فهم المشروع", body: "نستمع للفكرة ونحدد الهدف والاحتياج." }),
    Object.freeze({ icon: "plan", number: "02", title: "التخطيط", body: "نرتب النطاق والمحتوى وخطوات العمل." }),
    Object.freeze({ icon: "build", number: "03", title: "التصميم والتطوير", body: "نحوّل الخطة إلى تجربة واضحة ومنتج فعلي." }),
    Object.freeze({ icon: "launch", number: "04", title: "الإطلاق والمتابعة", body: "نراجع النسخة ونجهزها للإطلاق والمتابعة." })
  ]),
  en: Object.freeze([
    Object.freeze({ icon: "discover", number: "01", title: "Understand the project", body: "We listen to the idea and define the goal and need." }),
    Object.freeze({ icon: "plan", number: "02", title: "Plan", body: "We organize the scope, content, and working steps." }),
    Object.freeze({ icon: "build", number: "03", title: "Design and build", body: "We turn the plan into a clear experience and a working product." }),
    Object.freeze({ icon: "launch", number: "04", title: "Launch and follow through", body: "We review the approved version and prepare it for launch." })
  ])
});

function section(content, id) {
  return content.sections.find((item) => item.id === id);
}

function renderHero(content, locale) {
  const signals = heroSignals[locale].map((item) => `
    <div class="home-hero__signal">
      ${icon(item.icon, "home-hero__signal-icon")}
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.body)}</small>
      </div>
    </div>
  `).join("");

  return `
    <section class="home-hero">
      <div class="container home-hero__grid">
        <div class="home-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p class="home-hero__support">${escapeHtml(content.support)}</p>
          <div class="home-hero__actions">
            ${ActionLink({ href: routes.startProject(locale), label: content.primaryCta, variant: "primary", size: "lg" })}
            ${ActionLink({ href: routes.services(locale), label: content.secondaryCta, variant: "ghost", size: "lg" })}
          </div>
          <div class="home-hero__signals" aria-label="${locale === "ar" ? "مزايا العمل مع فريق وصل تك" : "Working with the Wasl Tech team"}">
            ${signals}
          </div>
        </div>
        <div class="home-hero__media">
          <img src="/assets/media/home-hero.webp"
            alt="${locale === "ar" ? "واجهات رقمية تمثل خدمات المواقع والتطبيقات والحلول التقنية من وصل تك" : "Digital interfaces representing Wasl Tech websites, apps, and technical solutions"}"
            width="1448" height="1086" loading="eager" fetchpriority="high" decoding="async">
        </div>
      </div>
    </section>
  `;
}

function renderServices(content, locale) {
  const copy = section(content, "services");
  const cards = services.map((service) => {
    const item = service.content[locale];
    return `
      <article class="home-service-card">
        <a class="home-service-card__media" href="${routes.service(service.slug, locale)}" aria-label="${escapeHtml(item.title)}">
          <img src="${service.image}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" width="1280" height="720">
        </a>
        <div class="home-service-card__body">
          <h3><a href="${routes.service(service.slug, locale)}">${escapeHtml(item.title)}</a></h3>
          <p>${escapeHtml(item.subtitle)}</p>
        </div>
      </article>
    `;
  }).join("");

  return `
    <section class="section home-services" id="services">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-service-grid">${cards}</div>
        <div class="home-section-action">
          <a class="text-link" href="${routes.services(locale)}">${locale === "ar" ? "استكشف جميع الخدمات" : "Explore all services"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderProjects(content, locale) {
  const copy = section(content, "work");
  const projects = featuredProjectIds.map(getProjectById).filter(Boolean);

  const cards = projects.map((project) => {
    const item = project.content[locale];
    const dimensions = project.imageDimensions;
    if (!dimensions) throw new Error(`Featured media dimensions missing: ${project.id}`);

    return `
      <article class="home-project">
        <a class="home-project__media" href="${routes.project(project.slug, locale)}" aria-label="${escapeHtml(item.title)}">
          <img src="${project.image}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async"
            width="${dimensions.width}" height="${dimensions.height}">
        </a>
        <div class="home-project__copy">
          <p class="eyebrow">${escapeHtml(project.platformType[locale])}</p>
          <h3><a href="${routes.project(project.slug, locale)}">${escapeHtml(item.title)}</a></h3>
          <p class="home-project__summary">${escapeHtml(item.summary)}</p>
          <a class="text-link" href="${routes.project(project.slug, locale)}">${locale === "ar" ? "شاهد المشروع" : "View project"}</a>
        </div>
      </article>
    `;
  }).join("");

  return `
    <section class="section section--subtle home-work" id="work">
      <div class="container">
        <div class="home-section-heading-row">
          ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
          <a class="text-link" href="${routes.portfolio(locale)}">${locale === "ar" ? "شاهد جميع الأعمال" : "View all work"}</a>
        </div>
        <div class="home-project-grid">${cards}</div>
      </div>
    </section>
  `;
}

function renderAbout(content, locale) {
  const copy = section(content, "about");
  const values = aboutValues[locale].map((item) => `
    <div class="home-about__value">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.body)}</span>
    </div>
  `).join("");

  return `
    <section class="section home-about" id="about">
      <div class="container home-about__grid">
        <div class="home-about__media">
          <img src="/assets/media/about-us.webp"
            alt="${locale === "ar" ? "بيئة عمل وصل تك وهوية الشركة" : "Wasl Tech workplace and brand identity"}"
            width="1536" height="864" loading="lazy" decoding="async">
        </div>
        <div class="home-about__copy">
          <p class="eyebrow">${escapeHtml(copy.kicker)}</p>
          <h2>${escapeHtml(copy.title)}</h2>
          <p>${escapeHtml(copy.support)}</p>
          <div class="home-about__values">${values}</div>
          <a class="text-link" href="${routes.about(locale)}">${locale === "ar" ? "تعرّف على فريق وصل تك" : "Meet the Wasl Tech team"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderWhy(content, locale) {
  const copy = section(content, "approach");
  const points = whyPoints[locale].map((point) => `
    <article class="home-why__item">
      <h3>${escapeHtml(point.title)}</h3>
      <p>${escapeHtml(point.body)}</p>
    </article>
  `).join("");

  return `
    <section class="section section--subtle home-why" id="approach">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-why__grid">${points}</div>
      </div>
    </section>
  `;
}

function renderProcess(content, locale) {
  const copy = section(content, "process");
  const steps = processSteps[locale].map((step) => `
    <article class="home-process__step">
      <div class="home-process__step-head">
        ${icon(step.icon, "home-process__icon")}
        <span>${step.number}</span>
      </div>
      <h3>${escapeHtml(step.title)}</h3>
      <p>${escapeHtml(step.body)}</p>
    </article>
  `).join("");

  return `
    <section class="section home-process" id="process">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-process__steps">${steps}</div>
        <div class="home-section-action">
          <a class="text-link" href="${routes.process(locale)}">${locale === "ar" ? "تعرّف على طريقة العمل" : "See how we work"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderFaq(content, locale) {
  const copy = section(content, "faq");
  const items = featuredFaqIds
    .map((id) => faqs.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => {
      const faq = item.content[locale];
      return `
        <details class="home-faq__item">
          <summary>${escapeHtml(faq.question)}</summary>
          <p>${escapeHtml(faq.answer)}</p>
        </details>
      `;
    }).join("");

  return `
    <section class="section section--subtle home-faq" id="faq">
      <div class="container home-faq__grid">
        <div class="home-faq__intro">
          ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
          <a class="text-link" href="${routes.faq(locale)}">${locale === "ar" ? "شاهد جميع الأسئلة" : "View all questions"}</a>
        </div>
        <div class="home-faq__list">${items}</div>
      </div>
    </section>
  `;
}

function renderFinalCta(content, locale) {
  const copy = section(content, "final-cta");
  return `
    <section class="home-final-cta">
      <div class="container home-final-cta__inner">
        <div>
          <p class="eyebrow">${escapeHtml(copy.kicker)}</p>
          <h2>${escapeHtml(copy.title)}</h2>
          <p>${escapeHtml(copy.support)}</p>
        </div>
        <div class="home-final-cta__actions">
          ${ActionLink({ href: routes.startProject(locale), label: content.primaryCta, variant: "light", size: "md" })}
          ${ActionLink({ href: routes.contact(locale), label: locale === "ar" ? "تواصل معنا" : "Contact us", variant: "ghost", size: "md" })}
        </div>
      </div>
    </section>
  `;
}

export function homePage(locale = "ar") {
  if (!homeRecord) throw new Error("Canonical Home page record is missing.");

  const content = homeRecord.content[locale];
  if (!content) throw new Error(`Home content is missing for locale: ${locale}`);

  const body = [
    renderHero(content, locale),
    renderServices(content, locale),
    renderProjects(content, locale),
    renderAbout(content, locale),
    renderWhy(content, locale),
    renderProcess(content, locale),
    renderFaq(content, locale),
    renderFinalCta(content, locale)
  ].join("");

  return documentTemplate({
    title: content.seo.title,
    description: content.seo.description,
    body,
    locale,
    activePath: routes.home(locale),
    alternatePath: routes.home(locale === "ar" ? "en" : "ar"),
    canonicalPath: routes.home(locale),
    alternatePaths: Object.freeze({
      ar: routes.home("ar"),
      en: routes.home("en")
    }),
    ogImage: "/assets/about_1.png",
    structuredData: [organizationSchema(), websiteSchema(locale)]
  });
}
