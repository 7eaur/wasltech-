import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { serviceGroups, getServicesByGroup } from "../data/services.js";
import { getProjectById } from "../data/projects.js";
import { faqs } from "../data/faq.js";
import { ActionLink } from "../components/ActionLink.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema, websiteSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

const homeRecord = pages.find((page) => page.id === "home");

const featuredProjectIds = Object.freeze(["project-02", "project-06", "project-09"]);
const featuredFaqIds = Object.freeze(["start-1", "workflow-1", "workflow-2"]);

const groupSupport = Object.freeze({
  "digital-products": Object.freeze({
    ar: "مواقع وتطبيقات ومتاجر تُبنى حول رحلة المستخدم والهدف التجاري.",
    en: "Websites, apps, and e-commerce built around the user journey and business goal."
  }),
  "systems-engineering": Object.freeze({
    ar: "أنظمة وربط وأتمتة عندما لا يكفي الحل الجاهز أو تتعقد طريقة العمل.",
    en: "Systems, integrations, and automation when off-the-shelf tools no longer fit the workflow."
  }),
  "brand-presence": Object.freeze({
    ar: "هوية وبروفايلات ومحتوى وتسويق تجعل المشروع أكثر اتساقًا ووضوحًا.",
    en: "Identity, profiles, content, and marketing that make the business clearer and more consistent."
  })
});

const approachPoints = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ title: "الفكرة قبل الواجهة", body: "نحدد ما يجب أن يفهمه المستخدم وما يجب أن يفعله قبل الدخول في التفاصيل البصرية." }),
    Object.freeze({ title: "نطاق واضح قبل الإضافات", body: "نرتب الأولويات ونمنع تضخم المشروع بوظائف لا تخدم هدفه الأساسي." }),
    Object.freeze({ title: "المحتوى والتقنية في اتجاه واحد", body: "الرسالة والتجربة والتنفيذ تعمل كمنظومة واحدة بدل معالجة كل جزء بمعزل عن الآخر." })
  ]),
  en: Object.freeze([
    Object.freeze({ title: "Idea before interface", body: "We define what users need to understand and do before moving into visual detail." }),
    Object.freeze({ title: "Clear scope before extras", body: "We organize priorities and avoid growing the project with features that do not serve its core goal." }),
    Object.freeze({ title: "Content and technology in one direction", body: "Message, experience, and implementation work as one system instead of separate layers." })
  ])
});

const processSteps = Object.freeze({
  ar: Object.freeze([
    Object.freeze({ number: "01", title: "نفهم", body: "الهدف، المستخدم، الوضع الحالي، وما الذي يحتاج أن يتغير." }),
    Object.freeze({ number: "02", title: "نرتب", body: "النطاق، المحتوى، الأولويات، والرحلة قبل التنفيذ." }),
    Object.freeze({ number: "03", title: "نبني", body: "التصميم والتطوير ضمن قرارات واضحة ومراحل قابلة للمراجعة." }),
    Object.freeze({ number: "04", title: "نراجع", body: "السيناريوهات والمحتوى والاستجابة والتفاصيل قبل الإطلاق." })
  ]),
  en: Object.freeze([
    Object.freeze({ number: "01", title: "Understand", body: "The goal, user, current situation, and what needs to change." }),
    Object.freeze({ number: "02", title: "Organize", body: "Scope, content, priorities, and the journey before implementation." }),
    Object.freeze({ number: "03", title: "Build", body: "Design and development through clear decisions and reviewable stages." }),
    Object.freeze({ number: "04", title: "Review", body: "Core scenarios, content, responsiveness, and details before launch." })
  ])
});

function section(content, id) {
  return content.sections.find((item) => item.id === id);
}

function renderHero(content, locale) {
  const groupTitles = serviceGroups
    .map((group, index) => `
      <div class="home-hero__signal">
        <span class="home-hero__signal-number">0${index + 1}</span>
        <strong>${escapeHtml(group.content[locale].title)}</strong>
      </div>
    `)
    .join("");

  return `
    <section class="home-hero">
      <div class="container home-hero__grid">
        <div class="home-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p class="home-hero__support">${escapeHtml(content.support)}</p>
          <div class="home-hero__actions">
            ${ActionLink({ href: routes.startProject(locale), label: content.primaryCta, variant: "primary", size: "lg" })}
            ${ActionLink({ href: routes.portfolio(locale), label: content.secondaryCta, variant: "ghost", size: "lg" })}
          </div>
        </div>
        <aside class="home-hero__map" aria-label="${locale === "ar" ? "مسارات خدمات وصل تك" : "Wasl Tech service paths"}">
          <p class="home-hero__map-label">${locale === "ar" ? "ثلاثة مسارات، هدف واحد" : "Three paths, one goal"}</p>
          <div class="home-hero__signals">${groupTitles}</div>
          <p class="home-hero__map-note">${locale === "ar" ? "حل أوضح لمشروعك، من الفكرة إلى التنفيذ." : "A clearer solution for your business, from idea to execution."}</p>
        </aside>
      </div>
    </section>
  `;
}

function renderServices(content, locale) {
  const copy = section(content, "services");
  const groups = serviceGroups.map((group, index) => {
    const services = getServicesByGroup(group.id);
    const links = services.map((service) => `
      <li><a href="${routes.service(service.slug, locale)}">${escapeHtml(service.content[locale].title)}</a></li>
    `).join("");

    return `
      <article class="home-service-path">
        <div class="home-service-path__index">0${index + 1}</div>
        <div class="home-service-path__body">
          <h3>${escapeHtml(group.content[locale].title)}</h3>
          <p>${escapeHtml(groupSupport[group.id][locale])}</p>
        </div>
        <ul class="home-service-path__links">${links}</ul>
      </article>
    `;
  }).join("");

  return `
    <section class="section home-services" id="services">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-service-paths">${groups}</div>
        <div class="home-section-action">
          <a class="text-link" href="${routes.services(locale)}">${locale === "ar" ? "استكشف الخدمات الثماني" : "Explore all eight services"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderProjects(content, locale) {
  const copy = section(content, "work");
  const projects = featuredProjectIds.map(getProjectById).filter(Boolean);

  const cards = projects.map((project, index) => {
    const p = project.content[locale];
    return `
      <article class="home-project home-project--${index === 0 ? "featured" : "standard"}">
        <a class="home-project__media" href="${routes.project(project.slug, locale)}" aria-label="${escapeHtml(p.title)}">
          <img src="${project.image}" alt="" loading="${index === 0 ? "eager" : "lazy"}" width="960" height="640">
        </a>
        <div class="home-project__copy">
          <p class="eyebrow">${escapeHtml(project.platformType[locale])}</p>
          <h3><a href="${routes.project(project.slug, locale)}">${escapeHtml(p.title)}</a></h3>
          <p>${escapeHtml(p.summary)}</p>
          <a class="text-link" href="${routes.project(project.slug, locale)}">${locale === "ar" ? "شاهد المشروع" : "View project"}</a>
        </div>
      </article>
    `;
  }).join("");

  return `
    <section class="section section--subtle home-work" id="work">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-project-grid">${cards}</div>
        <div class="home-section-action">
          <a class="text-link" href="${routes.portfolio(locale)}">${locale === "ar" ? "شاهد جميع الأعمال" : "View all work"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderApproach(content, locale) {
  const copy = section(content, "approach");
  const points = approachPoints[locale].map((point, index) => `
    <article class="home-approach__point">
      <span>0${index + 1}</span>
      <div><h3>${escapeHtml(point.title)}</h3><p>${escapeHtml(point.body)}</p></div>
    </article>
  `).join("");

  return `
    <section class="section home-approach" id="approach">
      <div class="container home-approach__grid">
        <div class="home-approach__statement">
          <p class="eyebrow">${escapeHtml(copy.kicker)}</p>
          <h2>${escapeHtml(copy.title)}</h2>
          <p>${escapeHtml(copy.support)}</p>
        </div>
        <div class="home-approach__points">${points}</div>
      </div>
    </section>
  `;
}

function renderProcess(content, locale) {
  const copy = section(content, "process");
  const steps = processSteps[locale].map((step) => `
    <article class="home-process__step">
      <span>${step.number}</span>
      <h3>${escapeHtml(step.title)}</h3>
      <p>${escapeHtml(step.body)}</p>
    </article>
  `).join("");

  return `
    <section class="section section--subtle home-process" id="process">
      <div class="container">
        ${SectionHeader({ kicker: copy.kicker, title: copy.title, supporting: copy.support })}
        <div class="home-process__steps">${steps}</div>
        <div class="home-section-action">
          <a class="text-link" href="${routes.process(locale)}">${locale === "ar" ? "اعرف كيف نمشي بالمشروع" : "See how we run a project"}</a>
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
    <section class="section home-faq" id="faq">
      <div class="container home-faq__grid">
        <div>
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
        ${ActionLink({ href: routes.startProject(locale), label: content.primaryCta, variant: "light", size: "lg" })}
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
    renderApproach(content, locale),
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
    structuredData: [organizationSchema(), websiteSchema(locale)]
  });
}
