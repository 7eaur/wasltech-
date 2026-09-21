import { PageHero } from "../components/PageHero.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { ContactCTA } from "../components/ContactCTA.js";
import { routes } from "../config/routes.js";
import { documentTemplate } from "../templates/document.js";
import { organizationSchema, websiteSchema } from "../seo/structured-data.js";

const copy = Object.freeze({
  ar: Object.freeze({
    preview: "Wasl Tech VNext",
    title: "نبني حضورك الرقمي باحتراف",
    supporting: "هذه معاينة تأسيسية للمعمارية الجديدة فقط؛ الصفحات الفعلية ستُبنى مرحلة بمرحلة بعد اعتماد البيانات والمكونات.",
    action: "استكشف الهيكل",
    sectionKicker: "الأساس",
    sectionTitle: "بنية صغيرة وواضحة قبل أي زخرفة.",
    sectionSupporting: "المكونات والبيانات والأنماط لها ملاك محددون، ولا نكرر نفس المسؤولية بين الملفات.",
    principles: [
      ["مكونات مشتركة", "Header وFooter وHero وCTA تُبنى مرة واحدة."],
      ["بيانات مركزية", "الخدمات والأعمال لا تتكرر داخل الصفحات."],
      ["أداء أولًا", "HTML مولد وقت البناء وJavaScript محدود للسلوك فقط."]
    ],
    ctaTitle: "هذه ليست النسخة النهائية.",
    ctaSupporting: "هدف المعاينة هو إثبات المعمارية قبل بناء تجربة الموقع الكاملة.",
    ctaLabel: "العودة للأعلى",
    placeholderKicker: "VNext Foundation",
    placeholderSupport: "هذا المسار موجود الآن للتحقق من بنية التوجيه فقط، وسيتم بناؤه في مرحلته المخصصة.",
    homeMetaTitle: "Wasl Tech VNext — Foundation Preview",
    homeMetaDescription: "معاينة تأسيسية غير منشورة لمعمارية موقع وصل تك الجديدة.",
    placeholderMeta: (title) => `معاينة تأسيسية غير منشورة لمسار ${title} في Wasl Tech VNext.`
  }),
  en: Object.freeze({
    preview: "Wasl Tech VNext",
    title: "We build your digital presence professionally",
    supporting: "This is a foundation preview of the new architecture. Final pages will be built phase by phase after the data and shared components are approved.",
    action: "Explore the foundation",
    sectionKicker: "Foundation",
    sectionTitle: "A small, clear structure before visual polish.",
    sectionSupporting: "Components, data, and styles have defined owners so the same responsibility is not duplicated across files.",
    principles: [
      ["Shared components", "Header, Footer, Hero, and CTA are built once and reused."],
      ["Centralized data", "Services and projects are not duplicated inside page modules."],
      ["Performance first", "HTML is generated at build time and JavaScript is limited to behavior."]
    ],
    ctaTitle: "This is not the final website.",
    ctaSupporting: "The preview exists to prove the architecture before the full experience is built.",
    ctaLabel: "Back to top",
    placeholderKicker: "VNext Foundation",
    placeholderSupport: "This route exists to validate the routing foundation and will be built in its dedicated phase.",
    homeMetaTitle: "Wasl Tech VNext — Foundation Preview",
    homeMetaDescription: "Unpublished foundation preview for the new Wasl Tech website architecture.",
    placeholderMeta: (title) => `Unpublished foundation preview for the ${title} route in Wasl Tech VNext.`
  })
});

function alternatesFor(routeKey) {
  return Object.freeze({
    ar: routes[routeKey]("ar"),
    en: routes[routeKey]("en")
  });
}

export function foundationHome(locale = "ar") {
  const t = copy[locale];
  const body = `
    ${PageHero({
      variant: "brand",
      kicker: t.preview,
      title: t.title,
      supporting: t.supporting,
      primaryAction: { label: t.action, href: "#foundation" }
    })}
    <section class="section" id="foundation">
      <div class="container">
        ${SectionHeader({
          kicker: t.sectionKicker,
          title: t.sectionTitle,
          supporting: t.sectionSupporting
        })}
        <div class="foundation-principles">
          ${t.principles.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
    ${ContactCTA({
      title: t.ctaTitle,
      supporting: t.ctaSupporting,
      href: "#main-content",
      label: t.ctaLabel
    })}
  `;

  return documentTemplate({
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    body,
    locale,
    activePath: routes.home(locale),
    alternatePath: routes.home(locale === "ar" ? "en" : "ar"),
    canonicalPath: routes.home(locale),
    alternatePaths: alternatesFor("home"),
    structuredData: [organizationSchema(), websiteSchema(locale)]
  });
}

export function foundationPlaceholder({ title, routeKey, locale = "ar" }) {
  const t = copy[locale];
  const path = routes[routeKey](locale);
  const alternateLocale = locale === "ar" ? "en" : "ar";
  const body = PageHero({
    variant: "directory",
    kicker: t.placeholderKicker,
    title,
    supporting: t.placeholderSupport
  });

  return documentTemplate({
    title: `${title} — Wasl Tech VNext`,
    description: t.placeholderMeta(title),
    body,
    locale,
    activePath: path,
    alternatePath: routes[routeKey](alternateLocale),
    canonicalPath: path,
    alternatePaths: alternatesFor(routeKey)
  });
}
