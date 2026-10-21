import { routes } from "../config/routes.js";
import { site } from "../config/site.js";
import { pages } from "../data/pages.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";
import { icon } from "../components/icons.js";
import { PageIntro } from "../components/PageIntro.js";
import { getPageHeroMedia } from "../config/hero-media.js";

const record=pages.find((page)=>page.id==="contact");

function section(content,id){return content.sections.find((item)=>item.id===id);}

function whatsappHref(locale){
  const text=locale==="ar"
    ?"مرحباً وصل تك، لدي استفسار وأود معرفة الخطوة المناسبة."
    :"Hello Wasl Tech, I have a question and would like to know the right next step.";
  return `${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

function renderChannel({label,value,href,iconName,external=false,valueDir=""}){
  return `
    <a class="contact-channel" href="${href}"${external?' target="_blank" rel="noopener"':""}>
      ${icon(iconName, "contact-channel__icon")}
      <span>${escapeHtml(label)}</span>
      <strong${valueDir ? ` dir="${valueDir}"` : ""}>${escapeHtml(value)}</strong>
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
    ${PageIntro({kicker:content.kicker,title:content.title,supporting:content.support,variant:"contact"})}

    <section class="section section--subtle contact-paths">
      <div class="container contact-paths__grid">
        <article>
          <p class="eyebrow">${locale === "ar" ? "سؤال سريع" : "Quick question"}</p>
          <h2>${locale === "ar" ? "تواصل معنا مباشرة" : "Talk to us directly"}</h2>
          <p>${escapeHtml(direct.support)}</p>
          <a class="text-link" href="${whatsappHref(locale)}" target="_blank" rel="noopener">${locale === "ar" ? "راسلنا على واتساب" : "Message us on WhatsApp"}</a>
        </article>
        <article>
          <p class="eyebrow">${escapeHtml(project.kicker)}</p>
          <h2>${escapeHtml(project.title)}</h2>
          <p>${escapeHtml(project.support)}</p>
          <a class="text-link" href="${routes.startProject(locale)}">${locale === "ar" ? "جهّز تفاصيل مشروعك" : "Prepare your project details"}</a>
        </article>
      </div>
    </section>
    <section class="section contact-direct">
      <div class="container contact-direct__grid">
        <div>
          <p class="eyebrow">${escapeHtml(direct.kicker)}</p>
          <h2>${escapeHtml(direct.title)}</h2>
        </div>
        <div class="contact-channels">
          ${renderChannel({label:locale==="ar"?"واتساب":"WhatsApp",value:site.contact.phoneDisplay,href:whatsappHref(locale),iconName:"whatsapp",external:true,valueDir:"ltr"})}
          ${renderChannel({label:locale==="ar"?"البريد الإلكتروني":"Email",value:site.contact.email,href:`mailto:${site.contact.email}`,iconName:"mail",valueDir:"ltr"})}
          ${renderChannel({label:locale==="ar"?"إنستغرام":"Instagram",value:site.contact.instagram.handle,href:site.contact.instagram.url,iconName:"instagram",external:true,valueDir:"ltr"})}
        </div>
      </div>
    </section>

    <div class="container contact-service-explore">
      <p>${escapeHtml(context.support)} <a class="text-link" href="${routes.services(locale)}">${locale === "ar" ? "تصفح خدماتنا" : "Explore services"}</a></p>
    </div>

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
    ogImage:getPageHeroMedia("contact",locale).src,
    styleBundles:["contact-planner"],
    structuredData:[organizationSchema()]
  });
}
