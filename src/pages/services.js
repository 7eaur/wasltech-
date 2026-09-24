import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { serviceGroups, getServicesByGroup } from "../data/services.js";
import { ActionLink } from "../components/ActionLink.js";\nimport { CallToAction } from "../components/CallToAction.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const servicesPageRecord = pages.find((page) => page.id === "services");

const sectionIdByGroup = Object.freeze({
  "digital-products": "digital-products",
  "systems-engineering": "systems",
  "brand-presence": "brand-presence"
});

function pageSection(content, id) {
  return content.sections.find((item) => item.id === id);
}

function publicHeroSupport(content, locale) {
  if (locale === "ar") {
    return "نبني المنتجات الرقمية والأنظمة والحلول، ونطوّر الهوية والحضور بما يناسب احتياج المشروع، سواء كان المسار مستقلًا أو جزءًا من مشروع متكامل.";
  }

  return "We build digital products, systems, and technical solutions, and develop brand presence around what the project needs—whether as a focused engagement or one connected project.";
}

function renderHero(content, locale) {
  return `
    <section class="services-hero">
      <div class="container services-hero__grid">
        <div class="services-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(publicHeroSupport(content, locale))}</p>
          <div class="services-hero__actions">
            ${ActionLink({ href:"#service-families", label:content.primaryCta, variant:"primary", size:"lg" })}
            ${ActionLink({ href:routes.startProject(locale), label:content.secondaryCta, variant:"ghost", size:"lg" })}
          </div>
        </div>
        ${HeroMedia({...getPageHeroMedia("services", locale), className:"services-hero__media"})}
      </div>
    </section>
  `;
}

function renderServiceRow(service, locale) {
  const copy = service.content[locale];
  return `
    <article class="service-directory-row">
      <div class="service-directory-row__main">
        <a class="service-directory-row__media" href="${routes.service(service.slug,locale)}" aria-label="${escapeHtml(copy.title)}">
          <img src="${service.image}" alt="${escapeHtml(copy.title)}" width="1280" height="720" loading="lazy" decoding="async">
        </a>
        <p class="service-directory-row__subtitle">${escapeHtml(copy.subtitle)}</p>
        <h3><a href="${routes.service(service.slug,locale)}">${escapeHtml(copy.title)}</a></h3>
      </div>
      <div class="service-directory-row__decision">
        <span>${locale === "ar" ? "متى تحتاجها؟" : "When it fits"}</span>
        <p>${escapeHtml(copy.decision.problemNeed)}</p>
      </div>
      <div class="service-directory-row__scope">
        <span>${locale === "ar" ? "ما الذي يشمله المسار؟" : "What the path covers"}</span>
        <p>${escapeHtml(copy.decision.scopeSummary)}</p>
      </div>
      <div class="service-directory-row__action">
        <a class="text-link" href="${routes.service(service.slug,locale)}">${locale === "ar" ? "تفاصيل الخدمة" : "Service details"}</a>
      </div>
    </article>
  `;
}

function renderFamily(group, content, locale) {
  const section = pageSection(content, sectionIdByGroup[group.id]);
  const services = getServicesByGroup(group.id);

  return `
    <section class="service-family" id="${group.id}">
      <div class="container">
        <div class="service-family__header">
          <div>
            ${SectionHeader({
              kicker:section.kicker,
              title:section.title,
              supporting:section.support
            })}
          </div>
        </div>
        <div class="service-directory-list">
          ${services.map((service)=>renderServiceRow(service,locale)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderUnsure(content,locale) {
  const copy = pageSection(content,"unsure");
  return CallToAction({
    kicker:copy.kicker,
    title:copy.title,
    description:copy.support,
    action:{href:routes.startProject(locale),label:content.secondaryCta},
    secondaryAction:{href:routes.contact(locale),label:locale === "ar" ? "تواصل معنا مباشرة" : "Contact us directly"}
  });
}

export function servicesDirectoryPage(locale="ar") {
  if (!servicesPageRecord) throw new Error("Canonical Services page record is missing.");
  const content = servicesPageRecord.content[locale];
  if (!content) throw new Error(`Services content is missing for locale: ${locale}`);

  const body = [
    renderHero(content,locale),
    `<div id="service-families">${serviceGroups.map((group)=>renderFamily(group,content,locale)).join("")}</div>`,
    renderUnsure(content,locale)
  ].join("");

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.services(locale),
    alternatePath:routes.services(locale === "ar" ? "en" : "ar"),
    canonicalPath:routes.services(locale),
    alternatePaths:Object.freeze({
      ar:routes.services("ar"),
      en:routes.services("en")
    }),
    ogImage:getPageHeroMedia("services",locale).src,
    structuredData:[organizationSchema()]
  });
}