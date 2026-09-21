import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";

function legalDocument(id,locale){
  const record=pages.find((page)=>page.id===id);
  if(!record) throw new Error(`Canonical legal page record missing: ${id}`);
  const content=record.content[locale];
  if(!content) throw new Error(`Legal content missing for ${id}/${locale}`);

  const body=`
    <section class="secondary-hero secondary-hero--legal">
      <div class="container secondary-hero__grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
        </div>
        <div><p>${escapeHtml(content.support)}</p></div>
      </div>
    </section>

    <section class="section legal-content">
      <div class="container legal-content__list">
        ${content.sections.map((item,index)=>`
          <article class="legal-content__item">
            <span>0${index+1}</span>
            <div>
              <p class="eyebrow">${escapeHtml(item.kicker)}</p>
              <h2>${escapeHtml(item.title)}</h2>
              <p>${escapeHtml(item.support)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  const route=routes[id](locale);
  const alternateLocale=locale==="ar"?"en":"ar";

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:route,
    alternatePath:routes[id](alternateLocale),
    canonicalPath:route,
    alternatePaths:Object.freeze({ar:routes[id]("ar"),en:routes[id]("en")})
  });
}

export function privacyPage(locale="ar"){ return legalDocument("privacy",locale); }
export function termsPage(locale="ar"){ return legalDocument("terms",locale); }
