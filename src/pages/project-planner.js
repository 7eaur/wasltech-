import { routes } from "../config/routes.js";
import { site } from "../config/site.js";
import { pages } from "../data/pages.js";
import { services } from "../data/services.js";
import { documentTemplate } from "../templates/document.js";
import { escapeHtml } from "../lib/html.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const record=pages.find((page)=>page.id==="startProject");

const stageOptions=Object.freeze({
  ar:Object.freeze([
    ["new","فكرة جديدة"],
    ["existing","مشروع قائم أريد تطويره"],
    ["redesign","إعادة تصميم"],
    ["feature","إضافة وظيفة أو جزء جديد"],
    ["unsure","غير متأكد من المرحلة"]
  ]),
  en:Object.freeze([
    ["new","New idea"],
    ["existing","Existing project to improve"],
    ["redesign","Redesign"],
    ["feature","Add functionality"],
    ["unsure","Not sure yet"]
  ])
});

const priorityOptions=Object.freeze({
  ar:Object.freeze([
    ["mvp","نسخة أولى قابلة للاستخدام"],
    ["full","نسخة كاملة بنطاق واضح"],
    ["phased","تطوير على مراحل"],
    ["consult","استشارة قبل اتخاذ القرار"]
  ]),
  en:Object.freeze([
    ["mvp","First usable version / MVP"],
    ["full","Full scoped version"],
    ["phased","Phased improvement"],
    ["consult","Consultation before deciding"]
  ])
});

function section(content,id){return content.sections.find((item)=>item.id===id);}

function options(items,placeholder){
  return `<option value="">${escapeHtml(placeholder)}</option>`+
    items.map(([value,label])=>`<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");
}

function serviceOptions(locale){
  const items=services.map((service)=>[service.id,service.content[locale].title]);
  items.push(["unsure",locale==="ar"?"غير متأكد — أحتاج توجيهًا":"Not sure — I need guidance"]);
  return options(items,locale==="ar"?"اختر الأقرب لاحتياجك":"Choose the closest fit");
}

function renderStepHeader(content,id){
  const item=section(content,id);
  return `
    <div class="planner-step__head">
      <p class="eyebrow">${escapeHtml(item.kicker)}</p>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.support)}</p>
    </div>
  `;
}

export function projectPlannerPage(locale="ar"){
  if(!record) throw new Error("Canonical Start Project page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`Start Project content missing for locale: ${locale}`);

  const labels=locale==="ar"
    ? {
        service:"الاحتياج الأقرب",stage:"مرحلة المشروع",priority:"الأولوية",
        name:"الاسم",phone:"رقم واتساب",company:"اسم المشروع أو الجهة",url:"رابط المشروع الحالي",
        details:"ماذا تريد أن تبني أو تحسن؟",
        namePh:"اسمك",phonePh:"مثال: 77xxxxxxx",companyPh:"اختياري",urlPh:"https://example.com",
        detailsPh:"اكتب الهدف، الوضع الحالي، وأهم شيء تريد الوصول إليه.",
        optional:"اختياري",submit:"راجع التفاصيل",direct:"تواصل مباشرة",
        reviewTitle:"هذه هي التفاصيل التي سنجهزها للمحادثة.",
        reviewNote:"لم يتم إرسال أي بيانات. راجع الملخص، ثم افتح واتساب وأرسل الرسالة بنفسك.",
        open:"فتح واتساب بهذه التفاصيل",edit:"تعديل التفاصيل",
        invalid:"راجع الحقول المطلوبة قبل تجهيز الرسالة."
      }
    : {
        service:"Closest need",stage:"Project stage",priority:"Priority",
        name:"Name",phone:"WhatsApp number",company:"Project or company name",url:"Current project URL",
        details:"What do you want to build or improve?",
        namePh:"Your name",phonePh:"Example: +967...",companyPh:"Optional",urlPh:"https://example.com",
        detailsPh:"Describe the goal, current situation, and the most important thing you want to achieve.",
        optional:"Optional",submit:"Review the details",direct:"Contact us directly",
        reviewTitle:"These are the details we will prepare for the conversation.",
        reviewNote:"Nothing has been sent. Review the summary, then open WhatsApp and send the message yourself.",
        open:"Open WhatsApp with these details",edit:"Edit details",
        invalid:"Review the required fields before preparing the message."
      };

  const body=`
    <section class="planner-hero">
      <div class="container planner-hero__grid">
        <div class="planner-hero__copy">
          <h1>${escapeHtml(content.kicker)}</h1>
          <h2 class="inner-hero__subtitle">${escapeHtml(content.title)}</h2>
          <p>${escapeHtml(content.support)}</p>
          <a class="text-link" href="${routes.contact(locale)}">${escapeHtml(content.secondaryCta)}</a>
        </div>
        ${HeroMedia({...getPageHeroMedia("startProject", locale), className:"planner-hero__media"})}
      </div>
    </section>

    <section class="section planner-section">
      <div class="container planner-layout">
        <form class="planner-form" data-project-planner
          data-locale="${locale}"
          data-whatsapp-base="${site.contact.whatsapp}"
          data-invalid-message="${escapeHtml(labels.invalid)}"
          novalidate>

          <section class="planner-step" data-planner-step="need">
            ${renderStepHeader(content,"need")}
            <label class="planner-field">
              <span>${escapeHtml(labels.service)} *</span>
              <select name="service" required>${serviceOptions(locale)}</select>
            </label>
          </section>

          <section class="planner-step" data-planner-step="stage">
            ${renderStepHeader(content,"stage")}
            <label class="planner-field">
              <span>${escapeHtml(labels.stage)} *</span>
              <select name="stage" required>${options(stageOptions[locale],locale==="ar"?"اختر المرحلة":"Choose the stage")}</select>
            </label>
          </section>

          <section class="planner-step" data-planner-step="priority">
            ${renderStepHeader(content,"priority")}
            <label class="planner-field">
              <span>${escapeHtml(labels.priority)} *</span>
              <select name="priority" required>${options(priorityOptions[locale],locale==="ar"?"اختر الأولوية":"Choose the priority")}</select>
            </label>
          </section>

          <section class="planner-step" data-planner-step="context">
            ${renderStepHeader(content,"context")}
            <div class="planner-fields">
              <label class="planner-field"><span>${escapeHtml(labels.name)} *</span><input name="name" type="text" autocomplete="name" minlength="2" required placeholder="${escapeHtml(labels.namePh)}"></label>
              <label class="planner-field"><span>${escapeHtml(labels.phone)} *</span><input name="phone" type="tel" autocomplete="tel" required placeholder="${escapeHtml(labels.phonePh)}"></label>
              <label class="planner-field"><span>${escapeHtml(labels.company)} <small>${escapeHtml(labels.optional)}</small></span><input name="company" type="text" autocomplete="organization" placeholder="${escapeHtml(labels.companyPh)}"></label>
              <label class="planner-field"><span>${escapeHtml(labels.url)} <small>${escapeHtml(labels.optional)}</small></span><input name="url" type="url" inputmode="url" placeholder="${escapeHtml(labels.urlPh)}"></label>
              <label class="planner-field planner-field--wide"><span>${escapeHtml(labels.details)} *</span><textarea name="details" minlength="10" required placeholder="${escapeHtml(labels.detailsPh)}"></textarea></label>
            </div>
          </section>

          <section class="planner-step planner-step--submit" data-planner-step="review">
            ${renderStepHeader(content,"review")}
            <button class="button button--primary button--lg" type="submit">${escapeHtml(labels.submit)}</button>
            <p class="planner-form__status" data-planner-status role="status" aria-live="polite" tabindex="-1"></p>
          </section>
        </form>

        <aside class="planner-review" data-planner-review hidden tabindex="-1">
          <p class="eyebrow">${locale==="ar"?"مراجعة":"Review"}</p>
          <h2>${escapeHtml(labels.reviewTitle)}</h2>
          <p class="planner-review__note">${escapeHtml(labels.reviewNote)}</p>
          <dl data-planner-summary></dl>
          <div class="planner-review__actions">
            <a class="button button--primary button--lg" data-planner-whatsapp href="${site.contact.whatsapp}" target="_blank" rel="noopener">${escapeHtml(labels.open)}</a>
            <button class="button button--ghost" data-planner-edit type="button">${escapeHtml(labels.edit)}</button>
          </div>
        </aside>
      </div>
    </section>

    <script src="/assets/js/project-planner.js" defer></script>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.startProject(locale),
    alternatePath:routes.startProject(locale==="ar"?"en":"ar"),
    canonicalPath:routes.startProject(locale),
    alternatePaths:Object.freeze({ar:routes.startProject("ar"),en:routes.startProject("en")}),
    ogImage:getPageHeroMedia("startProject",locale).src
  });
}
