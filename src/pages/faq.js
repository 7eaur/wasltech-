import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { faqGroups, faqs } from "../data/faq.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { faqPageSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const record=pages.find((page)=>page.id==="faq");

function renderGroup(group,locale,index){
  return `
    <section class="faq-group" id="faq-${group.id}">
      <div class="faq-group__header">
        <span>0${index+1}</span>
        <h2>${escapeHtml(group.content[locale].title)}</h2>
      </div>
      <div class="faq-group__items">
        ${group.items.map((item)=>`
          <details class="faq-item">
            <summary>${escapeHtml(item.content[locale].question)}</summary>
            <p>${escapeHtml(item.content[locale].answer)}</p>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

export function faqPage(locale="ar"){
  if(!record) throw new Error("Canonical FAQ page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`FAQ content missing for locale: ${locale}`);

  const body=`
    <section class="secondary-hero">
      <div class="container secondary-hero__grid">
        <div class="secondary-hero__copy">
          <h1>${escapeHtml(content.kicker)}</h1>
          <h2 class="inner-hero__subtitle">${escapeHtml(content.title)}</h2>
          <p>${escapeHtml(content.support)}</p>
          <div class="secondary-hero__actions">
            ${ActionLink({href:routes.startProject(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
            ${ActionLink({href:routes.contact(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
          </div>
        </div>
        ${HeroMedia({...getPageHeroMedia("faq", locale), className:"secondary-hero__media"})}
      </div>
    </section>

    <section class="section faq-directory">
      <div class="container">
        ${faqGroups.map((group,index)=>renderGroup(group,locale,index)).join("")}
      </div>
    </section>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.faq(locale),
    alternatePath:routes.faq(locale==="ar"?"en":"ar"),
    canonicalPath:routes.faq(locale),
    alternatePaths:Object.freeze({ar:routes.faq("ar"),en:routes.faq("en")}),
    ogImage:getPageHeroMedia("faq",locale).src,
    structuredData:[faqPageSchema(faqs.map((item)=>item.content[locale]))]
  });
}
