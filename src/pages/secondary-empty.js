import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { articles } from "../data/articles.js";
import { jobs } from "../data/jobs.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";

function section(content,id){return content.sections.find((item)=>item.id===id);}

function emptySurface({record,locale,type}){
  const content=record.content[locale];
  const empty=section(content,"empty");
  const supporting=type==="insights" ? section(content,"purpose") : section(content,"about-work");
  const count=type==="insights" ? articles.length : jobs.length;
  const primaryHref=type==="insights" ? routes.services(locale) : routes.about(locale);
  const secondaryHref=type==="insights" ? routes.portfolio(locale) : routes.contact(locale);

  const body=`
    <section class="secondary-hero">
      <div class="container secondary-hero__grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
        </div>
        <div>
          <p>${escapeHtml(content.support)}</p>
          <div class="secondary-hero__actions">
            ${ActionLink({href:primaryHref,label:content.primaryCta,variant:"primary",size:"lg"})}
            ${ActionLink({href:secondaryHref,label:content.secondaryCta,variant:"ghost",size:"lg"})}
          </div>
        </div>
      </div>
    </section>

    <section class="section empty-surface">
      <div class="container empty-surface__grid">
        <div class="empty-surface__state">
          <span>${String(count).padStart(2,"0")}</span>
          <p class="eyebrow">${escapeHtml(empty.kicker)}</p>
          <h2>${escapeHtml(empty.title)}</h2>
          <p>${escapeHtml(empty.support)}</p>
        </div>
        <div class="empty-surface__why">
          <p class="eyebrow">${escapeHtml(supporting.kicker)}</p>
          <h2>${escapeHtml(supporting.title)}</h2>
          <p>${escapeHtml(supporting.support)}</p>
        </div>
      </div>
    </section>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes[type](locale),
    alternatePath:routes[type](locale==="ar"?"en":"ar"),
    canonicalPath:routes[type](locale),
    alternatePaths:Object.freeze({ar:routes[type]("ar"),en:routes[type]("en")})
  });
}

export function insightsPage(locale="ar"){
  const record=pages.find((page)=>page.id==="insights");
  if(!record) throw new Error("Canonical Insights page record missing.");
  return emptySurface({record,locale,type:"insights"});
}

export function careersPage(locale="ar"){
  const record=pages.find((page)=>page.id==="careers");
  if(!record) throw new Error("Canonical Careers page record missing.");
  return emptySurface({record,locale,type:"careers"});
}
