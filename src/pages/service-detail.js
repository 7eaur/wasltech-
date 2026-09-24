import { routes } from "../config/routes.js";
import { serviceGroups } from "../data/services.js";
import { getProjectsByService } from "../data/projects.js";
import { ActionLink } from "../components/ActionLink.js";
import { CallToAction } from "../components/CallToAction.js";
import { MediaCard } from "../components/MediaCard.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { documentTemplate } from "../templates/document.js";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getServiceHeroMedia } from "../config/hero-media.js";

function groupFor(service) {
  return serviceGroups.find((group) => group.id === service.group) ?? null;
}

function renderBreadcrumb(service, locale) {
  const copy = service.content[locale];
  return `
    <nav class="service-breadcrumb" aria-label="${locale === "ar" ? "مسار الصفحة" : "Breadcrumb"}">
      <div class="container">
        <ol>
          <li><a href="${routes.home(locale)}">${locale === "ar" ? "الرئيسية" : "Home"}</a></li>
          <li><a href="${routes.services(locale)}">${locale === "ar" ? "الخدمات" : "Services"}</a></li>
          <li aria-current="page">${escapeHtml(copy.title)}</li>
        </ol>
      </div>
    </nav>
  `;
}

function renderHero(service, locale) {
  const copy = service.content[locale];
  const group = groupFor(service);
  const groupTitle = group?.content?.[locale]?.title ?? "";

  return `
    <section class="service-detail-hero">
      <div class="container service-detail-hero__grid">
        <div class="service-detail-hero__copy">
          <p class="eyebrow">${escapeHtml(groupTitle)}</p>
          <h1>${escapeHtml(copy.title)}</h1>
          <p class="service-detail-hero__subtitle">${escapeHtml(copy.subtitle)}</p>
          <p class="service-detail-hero__description">${escapeHtml(copy.description)}</p>
          <div class="service-detail-hero__actions">
            ${ActionLink({ href:routes.startProject(locale), label:copy.cta.label, variant:"primary", size:"lg" })}
            ${ActionLink({ href:routes.services(locale), label:locale === "ar" ? "العودة للخدمات" : "Back to services", variant:"ghost", size:"lg" })}
          </div>
        </div>
        ${HeroMedia({...getServiceHeroMedia(service, locale), className:"service-detail-hero__media"})}
      </div>
      <div class="container">
        <aside class="service-decision-panel">
          <div>
            <span>${locale === "ar" ? "متى تحتاج هذه الخدمة؟" : "When this service fits"}</span>
            <p>${escapeHtml(copy.decision.problemNeed)}</p>
          </div>
          <div>
            <span>${locale === "ar" ? "ما الذي نبنيه ضمنها؟" : "What the scope covers"}</span>
            <p>${escapeHtml(copy.decision.scopeSummary)}</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderSignals(service, locale) {
  const cards = service.content[locale].heroCards;
  return `
    <section class="service-signals">
      <div class="container service-signals__grid">
        ${cards.map((card,index)=>`
          <article class="service-signal">
            <span>0${index+1}</span>
            <div>
              <h2>${escapeHtml(card.title)}</h2>
              <p>${escapeHtml(card.description)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAudience(service, locale) {
  const copy = service.content[locale];
  return `
    <section class="section service-audience">
      <div class="container service-audience__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "لمن تناسب" : "Who it fits"}</p>
          <h2>${locale === "ar" ? "خدمة تُبنى حول احتياج فعلي، لا قالب ثابت." : "A service shaped around a real need, not a fixed template."}</h2>
        </div>
        <ul class="service-audience__list">
          ${copy.audiences.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function renderDeliverables(service, locale) {
  const items = service.content[locale].deliverables;
  return `
    <section class="section section--subtle service-deliverables">
      <div class="container">
        ${SectionHeader({
          kicker:locale === "ar" ? "ما الذي تحصل عليه" : "What you receive",
          title:locale === "ar" ? "مخرجات واضحة يمكن فهمها ومراجعتها." : "Clear deliverables you can understand and review.",
          supporting:locale === "ar"
            ? "المخرجات الفعلية تتحدد حسب نطاق مشروعك، لكن هذه هي العناصر التي يمكن أن تدخل ضمن الخدمة."
            : "The exact deliverables depend on your project scope, but these are the elements that may be included in the service."
        })}
        <div class="service-deliverables__list">
          ${items.map((item,index)=>`
            <article class="service-deliverable">
              <span>${String(index+1).padStart(2,"0")}</span>
              <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProof(service, locale) {
  const projects = getProjectsByService(service.id).slice(0,3);
  if (!projects.length) return "";

  return `
    <section class="section service-proof">
      <div class="container">
        ${SectionHeader({
          kicker:locale === "ar" ? "أعمال مرتبطة" : "Related work",
          title:locale === "ar" ? "نماذج من مشاريع مرتبطة بهذه الخدمة." : "Examples of projects connected to this service.",
          supporting:locale === "ar" ? "استكشف كيف تُترجم هذه الخدمة داخل مشاريع ومتطلبات مختلفة." : "See how this service takes shape across different projects and needs."
        })}
        <div class="service-proof__grid">
          ${projects.map((project)=>MediaCard({
            image:{
              src:project.image,
              alt:project.content[locale].title,
              width:project.imageDimensions.width,
              height:project.imageDimensions.height
            },
            kicker:project.platformType[locale],
            title:project.content[locale].title,
            body:project.content[locale].summary
          })).join("")}
        </div>
        <div class="service-proof__more">
          <a class="text-link" href="${routes.portfolio(locale)}">${locale === "ar" ? "شاهد جميع الأعمال" : "View all work"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderProcess(service, locale) {
  const items = service.content[locale].process;
  return `
    <section class="section section--subtle service-process">
      <div class="container">
        ${SectionHeader({
          kicker:locale === "ar" ? "طريقة التنفيذ" : "How it is delivered",
          title:locale === "ar" ? "نرتب العمل قبل أن تتراكم التفاصيل." : "We organize the work before details start to pile up.",
          supporting:locale === "ar" ? "كل مرحلة لها هدف واضح، ثم ننتقل للمرحلة التالية على أساس ما تم مراجعته." : "Each stage has a clear purpose, and the next stage builds on what has already been reviewed."
        })}
        <div class="service-process__steps">
          ${items.map((item,index)=>`
            <article class="service-process__step">
              <span>0${index+1}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFaq(service, locale) {
  const items = service.content[locale].faq;
  return `
    <section class="section service-detail-faq">
      <div class="container service-detail-faq__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "أسئلة قبل البدء" : "Questions before you start"}</p>
          <h2>${locale === "ar" ? "إجابات مرتبطة بهذه الخدمة تحديدًا." : "Answers specific to this service."}</h2>
        </div>
        <div class="service-detail-faq__list">
          ${items.map((item)=>`
            <details>
              <summary>${escapeHtml(item.question)}</summary>
              <p>${escapeHtml(item.answer)}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderConstraints(service, locale) {
  const items = service.content[locale].constraints;
  return `
    <section class="service-constraints">
      <div class="container service-constraints__inner">
        <div>
          <p class="eyebrow">${locale === "ar" ? "ما يعتمد على المشروع" : "What depends on the project"}</p>
          <h2>${locale === "ar" ? "بعض التفاصيل لا تُحسم قبل معرفة السياق." : "Some details should not be fixed before the context is known."}</h2>
        </div>
        <ul>
          ${items.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function renderFinalCta(service, locale) {
  const copy = service.content[locale];
  return CallToAction({
    kicker:locale === "ar" ? "الخطوة التالية" : "Next step",
    title:copy.cta.title,
    description:copy.cta.description,
    action:{href:routes.startProject(locale),label:copy.cta.label}
  });
}

export function serviceDetailPage(service, locale="ar") {
  const copy = service?.content?.[locale];
  if (!service || !copy) throw new Error(`Service detail content missing for locale: ${locale}`);

  const path = routes.service(service.slug,locale);
  const alternateLocale = locale === "ar" ? "en" : "ar";

  const body = [
    renderBreadcrumb(service,locale),
    renderHero(service,locale),
    renderSignals(service,locale),
    renderAudience(service,locale),
    renderDeliverables(service,locale),
    renderConstraints(service,locale),
    renderProcess(service,locale),
    renderProof(service,locale),
    renderFaq(service,locale),
    renderFinalCta(service,locale)
  ].join("");

  return documentTemplate({
    title:copy.seo.title,
    description:copy.seo.description,
    body,
    locale,
    activePath:path,
    alternatePath:routes.service(service.slug,alternateLocale),
    canonicalPath:path,
    alternatePaths:Object.freeze({
      ar:routes.service(service.slug,"ar"),
      en:routes.service(service.slug,"en")
    }),
    ogTitle:copy.seo.ogTitle,
    ogDescription:copy.seo.ogDescription,
    ogImage:getServiceHeroMedia(service,locale).src,
    structuredData:[
      serviceSchema({locale,name:copy.title,description:copy.description,path}),
      breadcrumbSchema([
        {name:locale === "ar" ? "الرئيسية" : "Home",path:routes.home(locale)},
        {name:locale === "ar" ? "الخدمات" : "Services",path:routes.services(locale)},
        {name:copy.title,path}
      ]),
      faqPageSchema(copy.faq)
    ]
  });
}
