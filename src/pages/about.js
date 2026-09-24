import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { serviceGroups } from "../data/services.js";
import { CallToAction } from "../components/CallToAction.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

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
          ${principles.items.map((item,index)=>`
            <article>
              <span>0${index+1}</span>
              <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div>
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
      <div class="container about-build__grid">
        <div class="about-build__intro">
          <p class="eyebrow">${escapeHtml(build.kicker)}</p>
          <h2>${escapeHtml(build.title)}</h2>
          <p>${escapeHtml(build.support)}</p>
        </div>
        <div class="about-build__paths">
          ${serviceGroups.map((group,index)=>`
            <a href="${routes.services(locale)}#${group.id}">
              <span>0${index+1}</span>
              <strong>${escapeHtml(group.content[locale].title)}</strong>
            </a>
          `).join("")}
        </div>
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
    action:{href:routes.startProject(locale),label:content.primaryCta}
  });
}

export function aboutPage(locale="ar"){
  if(!record) throw new Error("Canonical About page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`About content missing for locale: ${locale}`);
  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body:[renderHero(content,locale),renderStory(content),renderDirection(content),renderPrinciples(content),renderBuild(content,locale),renderCta(content,locale)].join(""),
    locale,
    activePath:routes.about(locale),
    alternatePath:routes.about(locale==="ar"?"en":"ar"),
    canonicalPath:routes.about(locale),
    alternatePaths:Object.freeze({ar:routes.about("ar"),en:routes.about("en")}),
    ogImage:getPageHeroMedia("about",locale).src,
    structuredData:[organizationSchema()]
  });
}
