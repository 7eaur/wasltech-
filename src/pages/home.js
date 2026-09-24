import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { services } from "../data/services.js";
import { getProjectById } from "../data/projects.js";
import { faqs } from "../data/faq.js";
import { ActionLink } from "../components/ActionLink.js";
import { CallToAction } from "../components/CallToAction.js";
import { MediaCard } from "../components/MediaCard.js";
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
    Object.freeze({ icon: "connected", title: "فريق متخصص", body: "خبرة في تصميم وتطوير الحلول الرقمية" }),
    Object.freeze({ icon: "checklist", title: "جودة واحترافية", body: "نهتم بالتفاصيل وجودة التنفيذ" }),
    Object.freeze({ icon: "message", title: "دعم مستمر", body: "نستمر معك من البداية وما بعد الإطلاق" })
  ]),
  en: Object.freeze([
    Object.freeze({ icon: "connected", title: "Specialized team", body: "Experience in digital design and development" }),
    Object.freeze({ icon: "checklist", title: "Quality & professionalism", body: "Attention to detail and execution quality" }),
    Object.freeze({ icon: "message", title: "Continued support", body: "Support from the start and after launch" })
  ])
});

const aboutValues = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ title: "تصميم احترافي", body: "تصميمات عصرية تركز على تجربة المستخدم وتعكس هوية علامتك." }),
    Object.freeze({ title: "حلول مرنة", body: "حلول تقنية قابلة للتطوير تتناسب مع احتياجات مشروعك." }),
    Object.freeze({ title: "اهتمام بالتفاصيل", body: "نهتم بأدق التفاصيل لنقدم منتجًا رقميًا متماسكًا." })
  ]),
  en: Object.freeze([
    Object.freeze({ title: "Professional design", body: "Modern design focused on user experience and brand identity." }),
    Object.freeze({ title: "Flexible solutions", body: "Scalable technical solutions shaped around your project needs." }),
    Object.freeze({ title: "Attention to detail", body: "We care about the details that make the final product feel complete." })
  ])
});

const whyPoints = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ title: "تصميم احترافي", body: "تصميمات عصرية تركز على تجربة المستخدم وتعكس هوية علامتك." }),
    Object.freeze({ title: "حلول مرنة", body: "حلول تقنية مرنة قابلة للتطوير تتناسب مع احتياجاتك." }),
    Object.freeze({ title: "فريق متخصص", body: "فريق يعمل على تفاصيل المشروع باهتمام وجودة." }),
    Object.freeze({ title: "دعم مستمر", body: "نستمر معك بعد الإطلاق وفق احتياج المشروع." }),
    Object.freeze({ title: "وضوح في العمل", body: "تواصل واضح ومتابعة مفهومة خلال مراحل المشروع." }),
    Object.freeze({ title: "اهتمام بالتفاصيل", body: "نهتم بالتفاصيل التي تصنع تجربة رقمية أفضل." })
  ]),
  en: Object.freeze([
    Object.freeze({ title: "Professional design", body: "Modern design focused on user experience and brand identity." }),
    Object.freeze({ title: "Flexible solutions", body: "Scalable technical solutions shaped around your needs." }),
    Object.freeze({ title: "Specialized team", body: "A team focused on project details and quality." }),
    Object.freeze({ title: "Continued support", body: "Support continues after launch according to project needs." }),
    Object.freeze({ title: "Clear workflow", body: "Clear communication and understandable follow-up during each stage." }),
    Object.freeze({ title: "Attention to detail", body: "We care about the details that create a stronger digital experience." })
  ])
});

const processSteps = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ icon: "discover", number: "01", title: "نستمع", body: "نستمع لاحتياجاتك وأهدافك لفهم رؤيتك بشكل أفضل." }),
    Object.freeze({ icon: "plan", number: "02", title: "نخطط", body: "نضع خطة واضحة تضمن ترتيب العمل والأولويات." }),
    Object.freeze({ icon: "build", number: "03", title: "نصمم ونطوّر", body: "نحوّل الخطة إلى تصميم وحل رقمي متكامل." }),
    Object.freeze({ icon: "launch", number: "04", title: "نطلق وندعم", body: "نجهز المشروع للإطلاق ونستمر معك بعده." })
  ]),
  en: Object.freeze([
    Object.freeze({ icon: "discover", number: "01", title: "Listen", body: "We listen to your needs and goals to understand your vision." }),
    Object.freeze({ icon: "plan", number: "02", title: "Plan", body: "We create a clear plan that organizes the work and priorities." }),
    Object.freeze({ icon: "build", number: "03", title: "Design & develop", body: "We turn the plan into a complete digital solution." }),
    Object.freeze({ icon: "launch", number: "04", title: "Launch & support", body: "We prepare the project for launch and continue supporting it afterward." })
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
        </div>
        <div class="home-hero__media">
          <img src="/assets/media/home-hero.webp"
            alt="${locale === "ar" ? "واجهات رقمية تمثل خدمات المواقع والتطبيقات والحلول التقنية من وصل تك" : "Digital interfaces representing Wasl Tech websites, apps, and technical solutions"}"
            width="1200" height="900" loading="eager" fetchpriority="high" decoding="async">
        </div>
        <div class="home-hero__actions">
          ${ActionLink({ href: routes.startProject(locale), label: content.primaryCta, variant: "primary", size: "lg" })}
          ${ActionLink({ href: routes.portfolio(locale), label: content.secondaryCta, variant: "ghost", size: "lg" })}
        </div>
        <div class="home-hero__signals" aria-label="${locale === "ar" ? "مزايا العمل مع فريق وصل تك" : "Working with the Wasl Tech team"}">
          ${signals}
        </div>
      </div>
    </section>
  `;
}

function renderServices(content, locale) {
  const copy = section(content, "services");
  const cards = services.map((service) => {
    const item = service.content[locale];
    return MediaCard({
      href:routes.service(service.slug,locale),
      image:{src:service.image,alt:item.title,width:1280,height:720},
      title:item.title,
      body:item.subtitle,
      compact:true
    });
  }).join("");

  return `
    <section class="section home-services" id="services">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-service-grid">${cards}</div>
        <div class="home-section-action">
          <a class="text-link" href="${routes.services(locale)}">${locale === "ar" ? "استكشف كل خدماتنا" : "Explore all services"}</a>
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
    return MediaCard({
      href:routes.project(project.slug,locale),
      image:{src:project.image,alt:item.title,width:dimensions.width,height:dimensions.height},
      kicker:project.platformType[locale],
      title:item.title,
      body:item.summary,
      actionLabel:locale === "ar" ? "شاهد المشروع" : "View project"
    });
  }).join("");

  return `
    <section class="section section--subtle home-work" id="work">
      <div class="container">
        <div class="home-section-heading-row">
          ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
          <a class="text-link" href="${routes.portfolio(locale)}">${locale === "ar" ? "استكشف دراسات الحالة" : "Explore case studies"}</a>
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
          <a class="text-link" href="${routes.about(locale)}">${locale === "ar" ? "تعرّف على وصل تك" : "About Wasl Tech"}</a>
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
  return CallToAction({
    kicker: copy.kicker,
    title: copy.title,
    description: copy.support,
    action: { href: routes.startProject(locale), label: content.primaryCta },
    secondaryAction: { href: routes.contact(locale), label: locale === "ar" ? "تحدث معنا" : "Talk to us" }
  });
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
    ogImage: "/assets/media/home-hero.webp",
    structuredData: [organizationSchema(), websiteSchema(locale)]
  });
}
