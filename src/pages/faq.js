import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { faqGroups, faqs } from "../data/faq.js";
import { documentTemplate } from "../templates/document.js";
import { faqPageSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { PageIntro } from "../components/PageIntro.js";
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
    ${PageIntro({kicker:content.kicker,title:content.title,supporting:content.support,variant:"faq"})}

    <nav class="section-jump-nav" aria-label="${locale === "ar" ? "الانتقال إلى فئات الأسئلة" : "Jump to FAQ categories"}">
      <div class="container">
        <ul>
          ${faqGroups.map((group)=>`<li><a href="#faq-${group.id}">${escapeHtml(group.content[locale].title)}</a></li>`).join("")}
        </ul>
      </div>
    </nav>

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
    styleBundles:["secondary"],
    structuredData:[faqPageSchema(faqs.map((item)=>item.content[locale]))]
  });
}
