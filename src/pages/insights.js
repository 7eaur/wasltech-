import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { getPublishedArticles } from "../data/articles.js";
import { ActionLink } from "../components/ActionLink.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { getPageHeroMedia, getArticleHeroMedia } from "../config/hero-media.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

const record = pages.find((page) => page.id === "insights");

function section(content,id){return content.sections.find((item)=>item.id===id);}

function articleCard(article,locale,index){
  const copy=article.content[locale];
  const media=getArticleHeroMedia(article,locale);
  return `
    <article class="insight-card${index===0 ? " insight-card--featured" : ""}">
      <a class="insight-card__media" href="${routes.article(article.slug,locale)}" aria-label="${escapeHtml(copy.title)}">
        <img src="${media.src}" alt="${escapeHtml(media.alt)}" width="${media.width}" height="${media.height}" loading="lazy" decoding="async">
      </a>
      <div class="insight-card__copy">
        <p class="eyebrow">${escapeHtml(copy.categoryLabel)}</p>
        <h2><a href="${routes.article(article.slug,locale)}">${escapeHtml(copy.title)}</a></h2>
        <p>${escapeHtml(copy.summary)}</p>
        <a class="text-link" href="${routes.article(article.slug,locale)}">${locale==="ar"?"اقرأ المقال":"Read article"}</a>
      </div>
    </article>
  `;
}

export function insightsPage(locale="ar"){
  if(!record) throw new Error("Canonical Insights page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`Insights content missing for locale: ${locale}`);
  const latest=section(content,"latest");
  const finalCta=section(content,"final-cta");
  const articles=getPublishedArticles().filter((item)=>item.localeStatus?.[locale]==="ready");

  const body=`
    <section class="insights-hero">
      <div class="container insights-hero__grid">
        <div class="insights-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(content.support)}</p>
          <div class="insights-hero__actions">
            ${ActionLink({href:routes.services(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
            ${ActionLink({href:routes.portfolio(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
          </div>
        </div>
        ${HeroMedia({...getPageHeroMedia("insights",locale),className:"insights-hero__media"})}
      </div>
    </section>

    <section class="section insights-directory">
      <div class="container">
        ${SectionHeader({kicker:latest.kicker,title:latest.title,supporting:latest.support})}
        <div class="insights-grid">
          ${articles.map((article,index)=>articleCard(article,locale,index)).join("")}
        </div>
      </div>
    </section>

    <section class="insights-cta">
      <div class="container insights-cta__inner">
        <div>
          <p class="eyebrow">${escapeHtml(finalCta.kicker)}</p>
          <h2>${escapeHtml(finalCta.title)}</h2>
          <p>${escapeHtml(finalCta.support)}</p>
        </div>
        ${ActionLink({href:routes.startProject(locale),label:finalCta.actionLabel,variant:"light",size:"lg"})}
      </div>
    </section>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.insights(locale),
    alternatePath:routes.insights(locale==="ar"?"en":"ar"),
    canonicalPath:routes.insights(locale),
    alternatePaths:Object.freeze({ar:routes.insights("ar"),en:routes.insights("en")}),
    ogImage:getPageHeroMedia("insights",locale).src,
    structuredData:[organizationSchema()]
  });
}
