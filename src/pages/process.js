import { routes } from "../config/routes.js";
import { pages } from "../data/pages.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const record=pages.find((page)=>page.id==="process");
const phaseIds=Object.freeze(["understand","plan","build","review-launch"]);

const outcomes=Object.freeze({
  ar:Object.freeze({
    "understand":"صورة أوضح للهدف والمستخدم والمشكلة التي تستحق الحل.",
    "plan":"نطاق وأولويات ومسار يمكن اتخاذ قرار واضح بشأنه.",
    "build":"نسخة تتقدم ضمن مراجعات مرحلية بدل مفاجأة نهائية.",
    "review-launch":"نسخة معتمدة راجعنا سيناريوهاتها الأساسية قبل الإطلاق أو التسليم."
  }),
  en:Object.freeze({
    "understand":"A clearer picture of the goal, user, and problem worth solving.",
    "plan":"A scope, priorities, and flow that can be decided on with clarity.",
    "build":"A version that progresses through reviewable stages instead of one final surprise.",
    "review-launch":"An approved version whose core scenarios are reviewed before launch or handoff."
  })
});

function section(content,id){return content.sections.find((item)=>item.id===id);}

function renderHero(content,locale){
  return `
    <section class="process-hero">
      <div class="container process-hero__grid">
        <div class="process-hero__copy">
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <div class="process-hero__support">
            <p>${escapeHtml(content.support)}</p>
            <div class="process-hero__actions">
              ${ActionLink({href:routes.startProject(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
              ${ActionLink({href:routes.portfolio(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
            </div>
          </div>
        </div>
        ${HeroMedia({...getPageHeroMedia("process", locale), className:"process-hero__media"})}
      </div>
    </section>
  `;
}

function renderPhases(content,locale){
  return `
    <section class="section process-phases">
      <div class="container">
        <div class="process-phases__list">
          ${phaseIds.map((id,index)=>{
            const item=section(content,id);
            return `
              <article class="process-phase" id="phase-${id}">
                <div class="process-phase__number">0${index+1}</div>
                <div class="process-phase__main">
                  <p class="eyebrow">${escapeHtml(item.kicker)}</p>
                  <h2>${escapeHtml(item.title)}</h2>
                  <p>${escapeHtml(item.support)}</p>
                </div>
                <div class="process-phase__outcome">
                  <span>${locale==="ar"?"ما الذي يصبح أوضح":"What becomes clearer"}</span>
                  <p>${escapeHtml(outcomes[locale][id])}</p>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderPrinciple(locale){
  return `
    <section class="process-principle">
      <div class="container process-principle__inner">
        <p class="eyebrow">${locale==="ar"?"قاعدة العمل":"Working rule"}</p>
        <h2>${locale==="ar"?"لا نزيد التفاصيل قبل أن نعرف لماذا نحتاجها.":"We do not add detail before we understand why it is needed."}</h2>
        <p>${locale==="ar"
          ?"كل مرحلة تقلل نوعًا مختلفًا من الغموض؛ لذلك لا نقفز إلى التصميم أو التطوير قبل أن يكون القرار الذي قبله واضحًا."
          :"Each stage removes a different kind of uncertainty, so we do not jump into design or development before the decision before it is clear."}</p>
      </div>
    </section>
  `;
}

function renderCta(content,locale){
  const cta=section(content,"final-cta");
  return `
    <section class="process-cta">
      <div class="container process-cta__inner">
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

export function processPage(locale="ar"){
  if(!record) throw new Error("Canonical Process page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`Process content missing for locale: ${locale}`);

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body:[renderHero(content,locale),renderPhases(content,locale),renderPrinciple(locale),renderCta(content,locale)].join(""),
    locale,
    activePath:routes.process(locale),
    alternatePath:routes.process(locale==="ar"?"en":"ar"),
    canonicalPath:routes.process(locale),
    alternatePaths:Object.freeze({ar:routes.process("ar"),en:routes.process("en")})
  });
}
