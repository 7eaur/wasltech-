import { routes } from "../config/routes.js";
import { getProjectsByCategory } from "../data/projects.js";
import { getServiceById } from "../data/services.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { breadcrumbSchema, creativeWorkSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

function renderBreadcrumb(project,locale) {
  const copy=project.content[locale];
  return `
    <nav class="project-breadcrumb" aria-label="${locale === "ar" ? "مسار الصفحة" : "Breadcrumb"}">
      <div class="container">
        <ol>
          <li><a href="${routes.home(locale)}">${locale === "ar" ? "الرئيسية" : "Home"}</a></li>
          <li><a href="${routes.portfolio(locale)}">${locale === "ar" ? "الأعمال" : "Work"}</a></li>
          <li aria-current="page">${escapeHtml(copy.title)}</li>
        </ol>
      </div>
    </nav>
  `;
}

function renderHero(project,locale) {
  const copy=project.content[locale];
  return `
    <section class="project-detail-hero">
      <div class="container project-detail-hero__grid">
        <div>
          <p class="eyebrow">${escapeHtml(project.platformType[locale])}</p>
          <h1>${escapeHtml(copy.title)}</h1>
        </div>
        <div class="project-detail-hero__summary">
          <p>${escapeHtml(copy.summary)}</p>
          <a class="text-link" href="#project-story">${locale === "ar" ? "داخل المشروع" : "Inside the project"}</a>
        </div>
      </div>
    </section>
  `;
}

function renderPrimaryMedia(project,locale) {
  const title=project.content[locale].title;
  return `
    <section class="project-primary-media">
      <div class="container">
        <figure>
          <img src="${project.image}" alt="${escapeHtml(title)}" loading="eager" fetchpriority="high" width="${project.imageDimensions.width}" height="${project.imageDimensions.height}">
        </figure>
      </div>
    </section>
  `;
}

function renderStory(project,locale) {
  const story=project.content[locale].caseStudy;
  const labels=locale === "ar"
    ? {overview:"المشروع",context:"السياق",contribution:"ما نفذناه"}
    : {overview:"The project",context:"Context",contribution:"What we built"};

  return `
    <section class="section project-story" id="project-story">
      <div class="container project-story__grid">
        ${[
          ["overview",story.overview],
          ["context",story.context],
          ["contribution",story.contribution]
        ].map(([key,value],index)=>`
          <article class="project-story__item">
            <span>0${index+1}</span>
            <div>
              <p class="eyebrow">${labels[key]}</p>
              <h2>${escapeHtml(value)}</h2>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderScope(project,locale) {
  const story=project.content[locale].caseStudy;
  return `
    <section class="section section--subtle project-scope">
      <div class="container project-scope__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "النطاق" : "Scope"}</p>
          <h2>${locale === "ar" ? "ما الذي دخل في هذا المشروع." : "What was part of this project."}</h2>
          <ul>
            ${story.scope.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div>
          <p class="eyebrow">${locale === "ar" ? "المخرجات" : "Delivered outputs"}</p>
          <h2>${locale === "ar" ? "ما الذي خرج من التنفيذ." : "What the work delivered."}</h2>
          <ul>
            ${story.deliveredOutputs.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderServices(project,locale) {
  const services=project.serviceIds.map(getServiceById).filter(Boolean);
  if(!services.length) return "";

  return `
    <section class="section project-services">
      <div class="container project-services__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "الخدمات المرتبطة" : "Related services"}</p>
          <h2>${locale === "ar" ? "الخدمة هنا مرتبطة بما تم بناؤه فعلًا." : "The services here reflect what was actually built."}</h2>
        </div>
        <div class="project-services__links">
          ${services.map((service)=>`
            <a href="${routes.service(service.slug,locale)}">
              <span>${escapeHtml(service.content[locale].title)}</span>
              <small>${escapeHtml(service.content[locale].subtitle)}</small>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderRelated(project,locale) {
  const related=getProjectsByCategory(project.category).filter((item)=>item.id!==project.id).slice(0,2);
  if(!related.length) return "";

  return `
    <section class="section section--subtle project-related">
      <div class="container">
        <div class="project-related__header">
          <div>
            <p class="eyebrow">${locale === "ar" ? "أعمال مرتبطة" : "Related work"}</p>
            <h2>${locale === "ar" ? "مشاريع أخرى من نفس المسار." : "Other projects from the same path."}</h2>
          </div>
          <a class="text-link" href="${routes.portfolio(locale)}">${locale === "ar" ? "كل الأعمال" : "All work"}</a>
        </div>
        <div class="project-related__grid">
          ${related.map((item)=>`
            <article>
              <a class="project-related__media" href="${routes.project(item.slug,locale)}" aria-label="${escapeHtml(item.content[locale].title)}">
                <img src="${item.image}" alt="" loading="lazy" width="${item.imageDimensions.width}" height="${item.imageDimensions.height}" decoding="async">
              </a>
              <div class="project-related__copy">
                <p class="eyebrow">${escapeHtml(item.platformType[locale])}</p>
                <h3><a href="${routes.project(item.slug,locale)}">${escapeHtml(item.content[locale].title)}</a></h3>
                <p>${escapeHtml(item.content[locale].summary)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCta(project,locale) {
  return `
    <section class="project-detail-cta">
      <div class="container project-detail-cta__inner">
        <div>
          <p class="eyebrow">${locale === "ar" ? "مشروعك التالي" : "Your next project"}</p>
          <h2>${locale === "ar" ? "عندك فكرة قريبة؟ نبدأ من احتياجك أنت." : "Have a similar direction in mind? We start from your own need."}</h2>
          <p>${locale === "ar" ? "شاركنا ما تريد بناءه أو تحسينه، ونرتب معك النطاق المناسب بدل نسخ مشروع جاهز." : "Tell us what you want to build or improve, and we will shape the scope around your project rather than copying an existing one."}</p>
        </div>
        ${ActionLink({href:routes.startProject(locale),label:locale === "ar" ? "ابدأ مشروعك" : "Start your project",variant:"light",size:"lg"})}
      </div>
    </section>
  `;
}

export function projectDetailPage(project,locale="ar") {
  const copy=project?.content?.[locale];
  if(!project || !copy) throw new Error(`Project detail content missing for locale: ${locale}`);

  const path=routes.project(project.slug,locale);
  const alternateLocale=locale === "ar" ? "en" : "ar";

  const body=[
    renderBreadcrumb(project,locale),
    renderHero(project,locale),
    renderPrimaryMedia(project,locale),
    renderStory(project,locale),
    renderScope(project,locale),
    renderServices(project,locale),
    renderRelated(project,locale),
    renderCta(project,locale)
  ].join("");

  return documentTemplate({
    title:copy.seo.title,
    description:copy.seo.description,
    body,
    locale,
    activePath:path,
    alternatePath:routes.project(project.slug,alternateLocale),
    canonicalPath:path,
    alternatePaths:Object.freeze({
      ar:routes.project(project.slug,"ar"),
      en:routes.project(project.slug,"en")
    }),
    ogTitle:copy.seo.title,
    ogDescription:copy.seo.description,
    ogImage:project.image,
    ogType:"article",
    structuredData:[
      creativeWorkSchema({locale,name:copy.title,description:copy.summary,path,image:project.image}),
      breadcrumbSchema([
        {name:locale === "ar" ? "الرئيسية" : "Home",path:routes.home(locale)},
        {name:locale === "ar" ? "الأعمال" : "Work",path:routes.portfolio(locale)},
        {name:copy.title,path}
      ])
    ]
  });
}
