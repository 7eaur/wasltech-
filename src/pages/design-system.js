import { site } from "../config/site.js";
import { documentTemplate } from "../templates/document.js";
import { ActionLink } from "../components/ActionLink.js";
import { SurfaceCard } from "../components/SurfaceCard.js";
import { FormField } from "../components/FormField.js";
import { MediaFrame } from "../components/MediaFrame.js";

const copy = Object.freeze({
  ar: Object.freeze({
    eyebrow: "Phase 3 — Design System",
    title: "نظام تصميم هادئ، واضح، وقابل لإعادة الاستخدام.",
    support: "هذه الصفحة اختبار داخلي للتايبوغرافي، المسافات، الألوان، الأزرار، البطاقات، النماذج، والصور قبل استخدامها في صفحات الموقع.",
    labels: Object.freeze({
      color: "الألوان الدلالية", type: "التايبوغرافي", actions: "الأزرار والروابط",
      cards: "البطاقات والأسطح", form: "النماذج والحالات", media: "عقود الصور"
    }),
    note: "المعيار: لا نضيف عنصرًا بصريًا لأنه جميل فقط؛ كل primitive يجب أن يخدم محتوى حقيقيًا ويعمل بالعربي والإنجليزي وعلى الهاتف."
  }),
  en: Object.freeze({
    eyebrow: "Phase 3 — Design System",
    title: "A calm, clear design system built for reuse.",
    support: "This internal page tests typography, spacing, semantic color, actions, cards, forms, and media before they are used in final site pages.",
    labels: Object.freeze({
      color: "Semantic color", type: "Typography", actions: "Actions & links",
      cards: "Cards & surfaces", form: "Forms & states", media: "Media contracts"
    }),
    note: "Rule: a primitive is not added because it looks attractive. It must support real content, both locales, and mobile behavior."
  })
});

function swatch(label, role) {
  return `<div class="showcase-swatch"><div class="showcase-swatch__color showcase-swatch__color--${role}"></div><div class="showcase-swatch__meta">${label}</div></div>`;
}

export function designSystemShowcase(locale = "ar") {
  const t = copy[locale];
  const alternate = locale === "ar" ? "/en/__showcase/" : "/__showcase/";
  const current = locale === "ar" ? "/__showcase/" : "/en/__showcase/";

  const body = `
    <section class="showcase-hero">
      <div class="container showcase-hero__copy">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.title}</h1>
        <p>${t.support}</p>
      </div>
    </section>

    <section class="showcase-section">
      <div class="container">
        <div class="showcase-heading"><h2>${t.labels.color}</h2><p>Brand colors are consumed through semantic roles rather than copied hex values.</p></div>
        <div class="showcase-swatch-grid">
          ${swatch("Brand primary","primary")}
          ${swatch("Brand accent","accent")}
          ${swatch("Canvas","canvas")}
          ${swatch("Soft surface","soft")}
          ${swatch("Primary text","text")}
          ${swatch("Border","border")}
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <div class="container">
        <div class="showcase-heading"><h2>${t.labels.type}</h2><p>IBM Plex Sans Arabic and IBM Plex Sans share the same hierarchy without forcing identical letter shapes.</p></div>
        <div class="showcase-type">
          <div class="showcase-type__row"><span class="showcase-type__label">Hero</span><p class="showcase-display">${locale === "ar" ? "نبني تجربة رقمية أوضح لمشروعك." : "Build a clearer digital experience for your business."}</p></div>
          <div class="showcase-type__row"><span class="showcase-type__label">H2</span><h2>${locale === "ar" ? "عنوان يحمل الفكرة قبل التفاصيل." : "A heading that carries the idea before the details."}</h2></div>
          <div class="showcase-type__row"><span class="showcase-type__label">Body</span><p class="lead">${locale === "ar" ? "النص المساعد يضيف السياق ولا يكرر العنوان، ويبقى مقروءًا على الهاتف والشاشات الكبيرة." : "Supporting copy adds context instead of repeating the heading and remains readable across mobile and large screens."}</p></div>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <div class="container">
        <div class="showcase-heading"><h2>${t.labels.actions}</h2><p>Primary actions stay obvious without turning every control into a loud CTA.</p></div>
        <div class="showcase-controls">
          ${ActionLink({ href:"#showcase-actions", label:locale === "ar" ? "إجراء أساسي" : "Primary action", variant:"primary" })}
          ${ActionLink({ href:"#showcase-actions", label:locale === "ar" ? "إجراء ثانوي" : "Secondary action", variant:"secondary" })}
          ${ActionLink({ href:"#showcase-actions", label:locale === "ar" ? "إجراء هادئ" : "Quiet action", variant:"ghost" })}
          <a class="text-link" href="#showcase-actions">${locale === "ar" ? "رابط نصي واضح" : "Clear text link"}</a>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <div class="container">
        <div class="showcase-heading"><h2>${t.labels.cards}</h2><p>Cards are content containers, not a default layout for every section.</p></div>
        <div class="grid grid--3">
          ${SurfaceCard({ meta:locale === "ar"?"خدمة":"Service", title:locale === "ar"?"موقع يشرح مشروعك بوضوح":"A website that explains the business clearly", body:locale === "ar"?"عنوان واضح، نص مختصر، ومسار منطقي للخطوة التالية.":"Clear hierarchy, concise copy, and an obvious next step.", action:{href:"#showcase-actions",label:locale === "ar"?"استكشف الخدمة":"Explore service"}, interactive:true })}
          ${SurfaceCard({ meta:locale === "ar"?"مبدأ":"Principle", title:locale === "ar"?"وضوح قبل الزخرفة":"Clarity before decoration", body:locale === "ar"?"المساحة والعنوان والحدود تكفي غالبًا؛ لا نحتاج مؤثرات لكل عنصر.":"Spacing, hierarchy, and borders are often enough; not every element needs an effect.", variant:"soft" })}
          ${SurfaceCard({ meta:locale === "ar"?"قرار":"Decision", title:locale === "ar"?"ابدأ من الحاجة":"Start with the need", body:locale === "ar"?"التصميم يوضح القرار بدل أن يضيف ضوضاء حوله.":"Design should clarify the decision rather than add noise around it.", variant:"accent" })}
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <div class="container">
        <div class="showcase-heading"><h2>${t.labels.form}</h2><p>Fields include labels, hints, required states, errors, disabled behavior, and visible keyboard focus.</p></div>
        <form class="showcase-form">
          ${FormField({ id:`showcase-name-${locale}`, label:locale === "ar"?"الاسم":"Name", placeholder:locale === "ar"?"مثال: إلياس":"Example: Elias", required:true })}
          ${FormField({ id:`showcase-email-${locale}`, label:locale === "ar"?"البريد":"Email", type:"email", placeholder:"name@example.com", hint:locale === "ar"?"لن نستخدمه إلا للتواصل بخصوص المشروع.":"Used only to contact you about the project." })}
          ${FormField({ id:`showcase-error-${locale}`, label:locale === "ar"?"رابط المشروع":"Project URL", type:"url", placeholder:"https://", error:locale === "ar"?"أدخل رابطًا صحيحًا أو اترك الحقل فارغًا.":"Enter a valid URL or leave the field empty." })}
          ${FormField({ id:`showcase-disabled-${locale}`, label:locale === "ar"?"حقل غير متاح":"Unavailable field", placeholder:"—", disabled:true })}
          ${FormField({ id:`showcase-brief-${locale}`, label:locale === "ar"?"وصف مختصر":"Short brief", placeholder:locale === "ar"?"ما الذي تريد بناءه أو تحسينه؟":"What do you want to build or improve?", textarea:true, hint:locale === "ar"?"اكتب الهدف قبل التفاصيل التقنية.":"Start with the goal before technical details." })}
        </form>
      </div>
    </section>

    <section class="showcase-section">
      <div class="container">
        <div class="showcase-heading"><h2>${t.labels.media}</h2><p>One image contract can support project covers, brand assets, and editorial visuals without inventing a different crop rule per page.</p></div>
        <div class="showcase-media">
          ${MediaFrame({ src:site.brand.assets.logo, alt:"Wasl Tech", ratio:"wide", fit:"contain" })}
          ${MediaFrame({ src:site.brand.assets.favicon, alt:"Wasl Tech favicon", ratio:"square", fit:"contain" })}
          ${MediaFrame({ src:site.brand.assets.logo, alt:"Wasl Tech", ratio:"portrait", fit:"contain" })}
        </div>
        <p class="showcase-note">${t.note}</p>
      </div>
    </section>
  `;

  return documentTemplate({
    title: locale === "ar" ? "معاينة نظام التصميم — Wasl Tech VNext" : "Design System Preview — Wasl Tech VNext",
    description: locale === "ar" ? "معاينة داخلية غير مفهرسة لنظام تصميم Wasl Tech VNext." : "Internal noindex preview of the Wasl Tech VNext design system.",
    body,
    locale,
    activePath: current,
    alternatePath: alternate,
    canonicalPath: null,
    alternatePaths: {},
    robots: "noindex,nofollow"
  });
}
