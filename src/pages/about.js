import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { serviceGroups } from "../data/services.js";
import { projects } from "../data/projects.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

const record=pages.find((page)=>page.id==="about");

function section(content,id){return content.sections.find((item)=>item.id===id);}

function renderHero(content,locale){
  const positioning=section(content,"positioning");
  return `
    <section class="about-hero">
      <div class="container about-hero__grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p class="about-hero__support">${escapeHtml(content.support)}</p>
          <div class="about-hero__actions">
            ${ActionLink({href:routes.startProject(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
            ${ActionLink({href:routes.portfolio(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
          </div>
        </div>
        <aside class="about-hero__statement">
          <span>${escapeHtml(positioning.kicker)}</span>
          <strong>${escapeHtml(positioning.title)}</strong>
          <p>${escapeHtml(positioning.support)}</p>
        </aside>
      </div>
    </section>
  `;
}

function renderSystem(content,locale){
  const build=section(content,"build");
  return `
    <section class="section about-system">
      <div class="container about-system__grid">
        <div class="about-system__intro">
          <p class="eyebrow">${escapeHtml(build.kicker)}</p>
          <h2>${escapeHtml(build.title)}</h2>
          <p>${escapeHtml(build.support)}</p>
        </div>
        <div class="about-system__families">
          ${serviceGroups.map((group,index)=>`
            <article>
              <span>0${index+1}</span>
              <h3>${escapeHtml(group.content[locale].title)}</h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderPrinciples(content,locale){
  const principles=section(content,"principles");
  const items=locale==="ar"
    ? [
        ["سبب قبل الشكل","كل عنصر بصري أو تقني يجب أن يخدم هدفًا يمكن شرحه."],
        ["نطاق قبل التوسع","نحدد ما يستحق التنفيذ الآن وما يمكن تأجيله بدل تضخيم المشروع."],
        ["مراجعة قبل الاعتماد","نفضّل قرارات ومراحل يمكن مراجعتها على نسخة نهائية مفاجئة."]
      ]
    : [
        ["Reason before appearance","Every visual or technical element should serve a purpose we can explain."],
        ["Scope before expansion","We decide what deserves to be built now and what can wait instead of inflating the project."],
        ["Review before approval","We prefer decisions and stages that can be reviewed over one surprising final version."]
      ];

  return `
    <section class="section section--subtle about-principles">
      <div class="container">
        <div class="about-principles__header">
          <p class="eyebrow">${escapeHtml(principles.kicker)}</p>
          <h2>${escapeHtml(principles.title)}</h2>
          <p>${escapeHtml(principles.support)}</p>
        </div>
        <div class="about-principles__list">
          ${items.map((item,index)=>`
            <article>
              <span>0${index+1}</span>
              <div><h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p></div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderMarket(content,locale){
  const market=section(content,"market");
  return `
    <section class="section about-market">
      <div class="container about-market__grid">
        <div>
          <p class="eyebrow">${escapeHtml(market.kicker)}</p>
          <h2>${escapeHtml(market.title)}</h2>
        </div>
        <div>
          <p>${escapeHtml(market.support)}</p>
          <div class="about-market__facts">
            <div><strong>${projects.length}</strong><span>${locale==="ar"?"مشروعًا موثقًا في معرض الأعمال":"verified projects in the portfolio"}</span></div>
            <div><strong>8</strong><span>${locale==="ar"?"خدمات ضمن ثلاث عائلات واضحة":"services across three clear families"}</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCta(content,locale){
  const cta=section(content,"final-cta");
  return `
    <section class="about-cta">
      <div class="container about-cta__inner">
        <div>
          <p class="eyebrow">${escapeHtml(cta.kicker)}</p>
          <h2>${escapeHtml(cta.title)}</h2>
          <p>${escapeHtml(cta.support)}</p>
        </div>
        ${ActionLink({href:routes.startProject(locale),label:content.primaryCta,variant:"light",size:"lg"})}
      </div>
    </section>
  `;
}

export function aboutPage(locale="ar"){
  if(!record) throw new Error("Canonical About page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`About content missing for locale: ${locale}`);

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body:[renderHero(content,locale),renderSystem(content,locale),renderPrinciples(content,locale),renderMarket(content,locale),renderCta(content,locale)].join(""),
    locale,
    activePath:routes.about(locale),
    alternatePath:routes.about(locale==="ar"?"en":"ar"),
    canonicalPath:routes.about(locale),
    alternatePaths:Object.freeze({ar:routes.about("ar"),en:routes.about("en")}),
    structuredData:[organizationSchema()]
  });
}
