import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { getServiceById } from "../data/services.js";
import { CallToAction } from "../components/CallToAction.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";
import { icon } from "../components/icons.js";

const record=pages.find((page)=>page.id==="about");
function section(content,id){return content.sections.find((item)=>item.id===id);}

function renderHero(content,locale){
  return `
    <section class="about-hero">
      <div class="container about-hero__grid">
        <div class="about-hero__copy">
          <h1>${escapeHtml(content.kicker)}</h1>
          <h2 class="inner-hero__subtitle">${escapeHtml(content.title)}</h2>
          <p class="about-hero__support">${escapeHtml(content.support)}</p>
        </div>
        ${HeroMedia({...getPageHeroMedia("about", locale), className:"about-hero__media"})}
      </div>
    </section>
  `;
}

function renderStory(content){
  const story=section(content,"story");
  return `
    <section class="section about-story">
      <div class="container about-story__grid">
        <div class="about-story__heading">
          <p class="eyebrow">${escapeHtml(story.kicker)}</p>
          <h2>${escapeHtml(story.title)}</h2>
        </div>
        <div class="about-story__copy">
          <p class="about-story__lead">${escapeHtml(story.support)}</p>
          ${story.body.map((paragraph)=>`<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <dl class="about-story__facts" aria-label="${escapeHtml(content.kicker)}">
          ${story.facts.map((fact)=>`
            <div class="about-story__fact">
              <dt>${escapeHtml(fact.value)}</dt>
              <dd>${escapeHtml(fact.label)}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    </section>
  `;
}

function renderDirection(content){
  const vision=section(content,"vision");
  const mission=section(content,"mission");
  return `
    <section class="section section--subtle about-direction">
      <div class="container about-direction__grid">
        ${[vision,mission].map((item)=>`
          <article class="about-direction__item">
            <p class="eyebrow">${escapeHtml(item.kicker)}</p>
            <h2>${escapeHtml(item.title)}</h2>
            <p>${escapeHtml(item.support)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPrinciples(content){
  const principles=section(content,"principles");
  return `
    <section class="section about-values">
      <div class="container">
        <div class="about-values__header">
          <p class="eyebrow">${escapeHtml(principles.kicker)}</p>
          <h2>${escapeHtml(principles.title)}</h2>
          <p>${escapeHtml(principles.support)}</p>
        </div>
        <div class="about-values__list">
          ${principles.items.map((item)=>`
            <article class="about-values__item">
              <div class="about-values__icon-wrap">${icon(item.icon,"about-values__icon")}</div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderBuild(content,locale){
  const build=section(content,"build");
  return `
    <section class="section section--subtle about-build">
      <div class="container">
        <div class="about-build__intro">
          <p class="eyebrow">${escapeHtml(build.kicker)}</p>
          <h2>${escapeHtml(build.title)}</h2>
          <p>${escapeHtml(build.support)}</p>
        </div>
        <div class="about-build__paths">
          ${build.groups.map((group)=>`
            <article class="about-build__card">
              <div class="about-build__card-head">
                <div class="about-build__icon-wrap">${icon(group.icon,"about-build__icon")}</div>
                <h3>${escapeHtml(group.title)}</h3>
              </div>
              <p>${escapeHtml(group.description)}</p>
              <ul class="about-build__services">
                ${group.serviceIds.map((id)=>{
                  const service=getServiceById(id);
                  if(!service) throw new Error(`Unknown About service: ${id}`);
                  return `<li><a href="${routes.service(service.slug,locale)}">${escapeHtml(service.content[locale].title)}</a></li>`;
                }).join("")}
              </ul>
              <a class="about-build__browse" href="${routes.services(locale)}">${locale==="ar"?"استعرض كل الخدمات":"Explore all services"}</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderApproach(content,locale){
  const approach=section(content,"approach");
  return `
    <section class="section about-approach">
      <div class="container">
        <div class="about-approach__header">
          <div>
            <p class="eyebrow">${escapeHtml(approach.kicker)}</p>
            <h2>${escapeHtml(approach.title)}</h2>
            <p>${escapeHtml(approach.support)}</p>
          </div>
          <a href="${routes.process(locale)}" class="text-link">${locale==="ar"?"تعرف على طريقة عملنا":"Explore our process"}</a>
        </div>
        <ol class="about-approach__steps">
          ${approach.steps.map((step,index)=>`
            <li>
              <span class="about-approach__index" aria-hidden="true">${String(index+1).padStart(2,"0")}</span>
              ${icon(step.icon,"about-approach__icon")}
              <h3>${escapeHtml(step.title)}</h3>
            </li>
          `).join("")}
        </ol>
      </div>
    </section>
  `;
}

function renderCta(content,locale){
  const cta=section(content,"final-cta");
  return CallToAction({
    kicker:cta.kicker,
    title:cta.title,
    description:cta.support,
    action:{href:routes.startProject(locale),label:content.primaryCta},
    secondaryAction:{href:routes.contact(locale),label:content.secondaryCta}
  });
}

export function aboutPage(locale="ar"){
  if(!record) throw new Error("Canonical About page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`About content missing for locale: ${locale}`);
  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body:[renderHero(content,locale),renderStory(content),renderDirection(content),renderPrinciples(content),renderBuild(content,locale),renderApproach(content,locale),renderCta(content,locale)].join(""),
    locale,
    activePath:routes.about(locale),
    alternatePath:routes.about(locale==="ar"?"en":"ar"),
    canonicalPath:routes.about(locale),
    alternatePaths:Object.freeze({ar:routes.about("ar"),en:routes.about("en")}),
    ogImage:getPageHeroMedia("about",locale).src,
    styleBundles:["about"],
    structuredData:[organizationSchema()]
  });
}
