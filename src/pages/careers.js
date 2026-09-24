import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { jobs } from "../data/jobs.js";
import { ActionLink } from "../components/ActionLink.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";

const record=pages.find((page)=>page.id==="careers");
function section(content,id){return content.sections.find((item)=>item.id===id);}

function jobCard(job,locale){
  const copy=job.content[locale];
  return `
    <article class="career-card">
      <p class="eyebrow">${escapeHtml(job.employmentType ?? (locale==="ar"?"فرصة عمل":"Role"))}</p>
      <h2><a href="${routes.job(job.slug,locale)}">${escapeHtml(copy.title)}</a></h2>
      <p>${escapeHtml(copy.summary)}</p>
      <a class="text-link" href="${routes.job(job.slug,locale)}">${locale==="ar"?"تفاصيل الفرصة":"Role details"}</a>
    </article>
  `;
}

export function careersPage(locale="ar"){
  if(!record) throw new Error("Canonical Careers page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`Careers content missing for locale: ${locale}`);
  const empty=section(content,"empty");
  const about=section(content,"about-work");
  const openJobs=jobs.filter((job)=>job.status==="open" && job.localeStatus?.[locale]==="ready");

  const opportunities=openJobs.length
    ? `<div class="careers-grid">${openJobs.map((job)=>jobCard(job,locale)).join("")}</div>`
    : `
      <div class="careers-empty">
        <div>
          <p class="eyebrow">${escapeHtml(empty.kicker)}</p>
          <h2>${escapeHtml(empty.title)}</h2>
          <p>${escapeHtml(empty.support)}</p>
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(about.kicker)}</p>
          <h2>${escapeHtml(about.title)}</h2>
          <p>${escapeHtml(about.support)}</p>
        </div>
      </div>
    `;

  const body=`
    <section class="secondary-hero careers-hero">
      <div class="container secondary-hero__grid">
        <div class="secondary-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(content.support)}</p>
          <div class="secondary-hero__actions">
            ${ActionLink({href:routes.about(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
            ${ActionLink({href:routes.contact(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
          </div>
        </div>
        ${HeroMedia({...getPageHeroMedia("careers",locale),className:"secondary-hero__media"})}
      </div>
    </section>

    <section class="section careers-directory">
      <div class="container">
        ${opportunities}
      </div>
    </section>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.careers(locale),
    alternatePath:routes.careers(locale==="ar"?"en":"ar"),
    canonicalPath:routes.careers(locale),
    alternatePaths:Object.freeze({ar:routes.careers("ar"),en:routes.careers("en")}),
    ogImage:getPageHeroMedia("careers",locale).src
  });
}
