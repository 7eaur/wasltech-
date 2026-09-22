import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { projects } from "../data/projects.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const pageRecord = pages.find((page) => page.id === "portfolio");

const categoryOrder = Object.freeze(["web","app","store","brand","marketing"]);
const categoryLabels = Object.freeze({
  all:Object.freeze({ar:"الكل",en:"All"}),
  web:Object.freeze({ar:"مواقع وأنظمة",en:"Web & systems"}),
  app:Object.freeze({ar:"تطبيقات",en:"Apps"}),
  store:Object.freeze({ar:"متاجر",en:"E-commerce"}),
  brand:Object.freeze({ar:"هوية بصرية",en:"Brand identity"}),
  marketing:Object.freeze({ar:"تسويق",en:"Marketing"})
});

function renderFilters(locale) {
  const filters=["all",...categoryOrder];
  return `
    <div class="portfolio-filters" data-portfolio-filters hidden aria-label="${locale === "ar" ? "تصفية الأعمال" : "Filter work"}">
      ${filters.map((id,index)=>`
        <button type="button" data-portfolio-filter="${id}" aria-pressed="${index===0 ? "true" : "false"}">
          ${escapeHtml(categoryLabels[id][locale])}
        </button>
      `).join("")}
    </div>
    <p class="sr-only" data-portfolio-status aria-live="polite"></p>
  `;
}

function renderProject(project,locale,index) {
  const copy=project.content[locale];
  return `
    <article class="portfolio-card${index===0 ? " portfolio-card--lead" : ""}" data-project-card data-category="${project.category}">
      <a class="portfolio-card__media" href="${routes.project(project.slug,locale)}" aria-label="${escapeHtml(copy.title)}">
        <img src="${project.image}" alt="" loading="lazy" width="${project.imageDimensions.width}" height="${project.imageDimensions.height}" decoding="async">
      </a>
      <div class="portfolio-card__copy">
        <p class="eyebrow">${escapeHtml(project.platformType[locale])}</p>
        <h2><a href="${routes.project(project.slug,locale)}">${escapeHtml(copy.title)}</a></h2>
        <p>${escapeHtml(copy.summary)}</p>
        <a class="text-link" href="${routes.project(project.slug,locale)}">${locale === "ar" ? "داخل المشروع" : "Inside the project"}</a>
      </div>
    </article>
  `;
}

export function portfolioPage(locale="ar") {
  if(!pageRecord) throw new Error("Canonical Portfolio page record missing.");
  const content=pageRecord.content[locale];
  if(!content) throw new Error(`Portfolio content missing for locale: ${locale}`);

  const body=`
    <section class="portfolio-hero">
      <div class="container portfolio-hero__grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(content.support)}</p>
        </div>
        ${HeroMedia({...getPageHeroMedia("portfolio", locale), className:"portfolio-hero__media"})}
      </div>
    </section>

    <section class="section portfolio-browser" data-portfolio-browser>
      <div class="container">
        ${renderFilters(locale)}
        <div class="portfolio-grid">
          ${projects.map((project,index)=>renderProject(project,locale,index)).join("")}
        </div>
      </div>
    </section>

    <section class="portfolio-cta">
      <div class="container portfolio-cta__inner">
        <div>
          <p class="eyebrow">${escapeHtml(content.sections.find((item)=>item.id==="final-cta")?.kicker ?? "")}</p>
          <h2>${escapeHtml(content.sections.find((item)=>item.id==="final-cta")?.title ?? "")}</h2>
          <p>${escapeHtml(content.sections.find((item)=>item.id==="final-cta")?.support ?? "")}</p>
        </div>
        ${ActionLink({href:routes.startProject(locale),label:content.secondaryCta,variant:"light",size:"lg"})}
      </div>
    </section>
    <script src="/assets/js/portfolio-filter.js" defer></script>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.portfolio(locale),
    alternatePath:routes.portfolio(locale==="ar"?"en":"ar"),
    canonicalPath:routes.portfolio(locale),
    alternatePaths:Object.freeze({ar:routes.portfolio("ar"),en:routes.portfolio("en")}),
    structuredData:[organizationSchema()]
  });
}
