import { routes } from "../config/routes.js";
import { site } from "../config/site.js";
import { pages } from "../data/pages.js";
import { ActionLink } from "../components/ActionLink.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

const record=pages.find((page)=>page.id==="contact");

function section(content,id){return content.sections.find((item)=>item.id===id);}

function whatsappHref(locale){
  const text=locale==="ar"
    ?"مرحباً وصل تك، لدي استفسار وأود معرفة الخطوة المناسبة."
    :"Hello Wasl Tech, I have a question and would like to know the right next step.";
  return `${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

function renderChannel({label,value,href,external=false}){
  return `
    <a class="contact-channel" href="${href}"${external?' target="_blank" rel="noopener"':""}>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </a>
  `;
}

export function contactPage(locale="ar"){
  if(!record) throw new Error("Canonical Contact page record missing.");
  const content=record.content[locale];
  if(!content) throw new Error(`Contact content missing for locale: ${locale}`);

  const direct=section(content,"direct");
  const project=section(content,"project");
  const context=section(content,"context");

  const body=`
    <section class="contact-hero">
      <div class="container contact-hero__grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.kicker)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(content.support)}</p>
        </div>
        <div class="contact-hero__actions">
          ${ActionLink({href:whatsappHref(locale),label:content.primaryCta,variant:"primary",size:"lg"})}
          ${ActionLink({href:routes.startProject(locale),label:content.secondaryCta,variant:"ghost",size:"lg"})}
        </div>
      </div>
    </section>

    <section class="section contact-direct">
      <div class="container contact-direct__grid">
        <div>
          <p class="eyebrow">${escapeHtml(direct.kicker)}</p>
          <h2>${escapeHtml(direct.title)}</h2>
          <p>${escapeHtml(direct.support)}</p>
        </div>
        <div class="contact-channels">
          ${renderChannel({label:locale==="ar"?"واتساب":"WhatsApp",value:site.contact.phoneDisplay,href:whatsappHref(locale),external:true})}
          ${renderChannel({label:locale==="ar"?"البريد الإلكتروني":"Email",value:site.contact.email,href:`mailto:${site.contact.email}`})}
          ${renderChannel({label:locale==="ar"?"إنستغرام":"Instagram",value:site.contact.instagram.handle,href:site.contact.instagram.url,external:true})}
        </div>
      </div>
    </section>

    <section class="section section--subtle contact-paths">
      <div class="container contact-paths__grid">
        <article>
          <p class="eyebrow">${escapeHtml(project.kicker)}</p>
          <h2>${escapeHtml(project.title)}</h2>
          <p>${escapeHtml(project.support)}</p>
          <a class="text-link" href="${routes.startProject(locale)}">${locale==="ar"?"جهّز تفاصيل مشروعك":"Prepare your project details"}</a>
        </article>
        <article>
          <p class="eyebrow">${escapeHtml(context.kicker)}</p>
          <h2>${escapeHtml(context.title)}</h2>
          <p>${escapeHtml(context.support)}</p>
          <a class="text-link" href="${routes.services(locale)}">${locale==="ar"?"استكشف الخدمات أولًا":"Explore services first"}</a>
        </article>
      </div>
    </section>

    <section class="contact-final">
      <div class="container contact-final__inner">
        <div>
          <p class="eyebrow">${locale==="ar"?"ابدأ بالطريقة الأسهل":"Start the easy way"}</p>
          <h2>${locale==="ar"?"لسؤال سريع، لا تحتاج نموذجًا طويلًا.":"For a quick question, you do not need a long form."}</h2>
          <p>${locale==="ar"?"ابدأ برسالة واتساب أو بريد، وإذا كان المشروع يحتاج تفاصيل أكثر استخدم مخطط المشروع.":"Start with WhatsApp or email. If the project needs more context, use the project planner."}</p>
        </div>
        ${ActionLink({href:whatsappHref(locale),label:content.primaryCta,variant:"light",size:"lg"})}
      </div>
    </section>
  `;

  return documentTemplate({
    title:content.seo.title,
    description:content.seo.description,
    body,
    locale,
    activePath:routes.contact(locale),
    alternatePath:routes.contact(locale==="ar"?"en":"ar"),
    canonicalPath:routes.contact(locale),
    alternatePaths:Object.freeze({ar:routes.contact("ar"),en:routes.contact("en")}),
    structuredData:[organizationSchema()]
  });
}
