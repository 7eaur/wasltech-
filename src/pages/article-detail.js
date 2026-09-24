import { routes } from "../config/routes.js";
import { getServiceById } from "../data/services.js";
import { CallToAction } from "../components/CallToAction.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getArticleHeroMedia } from "../config/hero-media.js";
import { documentTemplate } from "../templates/document.js";
import { articleSchema, breadcrumbSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

function formatDate(date,locale){
  if(!date) return "";
  return new Intl.DateTimeFormat(locale==="ar"?"ar-YE":"en-US",{
    year:"numeric",month:"long",day:"numeric",timeZone:"UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

function renderBody(copy){
  return copy.sections.map((section)=>`
    <section class="article-body__section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${(section.paragraphs??[]).map((item)=>`<p>${escapeHtml(item)}</p>`).join("")}
      ${section.bullets?.length ? `<ul>${section.bullets.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
    </section>
  `).join("");
}

function renderRelatedServices(article,locale){
  const services=(article.relatedServiceIds??[]).map(getServiceById).filter(Boolean);
  if(!services.length) return "";

  return `
    <section class="section article-related">
      <div class="container article-related__grid">
        <div>
          <p class="eyebrow">${locale==="ar"?"خدمات مرتبطة":"Related services"}</p>
          <h2>${locale==="ar"?"إذا كان هذا السؤال قريبًا من مشروعك، فهذه المسارات قد تكون نقطة البداية.":"If this question is close to your project, these service paths may be a useful starting point."}</h2>
        </div>
        <div class="article-related__links">
          ${services.map((service)=>`
            <a href="${routes.service(service.slug,locale)}">
              <strong>${escapeHtml(service.content[locale].title)}</strong>
              <span>${escapeHtml(service.content[locale].subtitle)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

export function articleDetailPage(article,locale="ar"){
  const copy=article?.content?.[locale];
  if(!article || !copy) throw new Error(`Article content missing for locale: ${locale}`);
  const path=routes.article(article.slug,locale);
  const other=locale==="ar"?"en":"ar";
  const media=getArticleHeroMedia(article,locale);
  const availableLocales=["ar","en"].filter((item)=>article.localeStatus?.[item]==="ready" && article.content?.[item]);
  const alternatePaths=Object.freeze(Object.fromEntries(
    availableLocales.map((item)=>[item,routes.article(article.slug,item)])
  ));
  const alternatePath=availableLocales.includes(other)
    ? routes.article(article.slug,other)
    : routes.insights(other);

  const body=`
    <nav class="article-breadcrumb" aria-label="${locale==="ar"?"مسار الصفحة":"Breadcrumb"}">
      <div class="container">
        <ol>
          <li><a href="${routes.home(locale)}">${locale==="ar"?"الرئيسية":"Home"}</a></li>
          <li><a href="${routes.insights(locale)}">${locale==="ar"?"المقالات":"Insights"}</a></li>
          <li aria-current="page">${escapeHtml(copy.title)}</li>
        </ol>
      </div>
    </nav>

    <article>
      <header class="article-hero">
        <div class="container article-hero__grid">
          <div class="article-hero__copy">
            <p class="eyebrow">${escapeHtml(copy.categoryLabel)}</p>
            <h1>${escapeHtml(copy.title)}</h1>
            <p class="article-hero__summary">${escapeHtml(copy.summary)}</p>
            <div class="article-meta">
              <span>${escapeHtml(article.author[locale])}</span>
              <time datetime="${article.publishedAt}">${escapeHtml(formatDate(article.publishedAt,locale))}</time>
            </div>
          </div>
          ${HeroMedia({...media,className:"article-hero__media"})}
        </div>
      </header>

      <section class="section article-content">
        <div class="container article-content__layout">
          <div class="article-content__lead">
            <p>${escapeHtml(copy.intro)}</p>
          </div>
          <div class="article-body">
            ${renderBody(copy)}
          </div>
        </div>
      </section>
    </article>

    ${renderRelatedServices(article,locale)}

    ${CallToAction({
      kicker:locale==="ar"?"خطوتك التالية":"Your next step",
      title:locale==="ar"?"حوّل السؤال العام إلى نطاق يناسب مشروعك.":"Turn the general question into a scope that fits your project.",
      description:locale==="ar"?"شاركنا السياق الحالي وما تريد الوصول إليه، ونبدأ من الاحتياج الفعلي.":"Share the current context and what you want to achieve, and we will start from the actual need.",
      action:{href:routes.startProject(locale),label:locale==="ar"?"ابدأ مشروعك":"Start your project"}
    })}
  `;

  return documentTemplate({
    title:copy.seo.title,
    description:copy.seo.description,
    body,
    locale,
    activePath:routes.insights(locale),
    alternatePath,
    canonicalPath:path,
    alternatePaths,
    ogTitle:copy.seo.title,
    ogDescription:copy.seo.description,
    ogImage:media.src,
    ogType:"article",
    structuredData:[
      articleSchema({
        locale,
        headline:copy.title,
        description:copy.summary,
        path,
        image:media.src,
        author:article.author[locale],
        publishedAt:article.publishedAt,
        updatedAt:article.updatedAt
      }),
      breadcrumbSchema([
        {name:locale==="ar"?"الرئيسية":"Home",path:routes.home(locale)},
        {name:locale==="ar"?"المقالات":"Insights",path:routes.insights(locale)},
        {name:copy.title,path}
      ])
    ]
  });
}
