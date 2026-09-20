import { PageHero } from "../components/PageHero.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { ContactCTA } from "../components/ContactCTA.js";
import { documentTemplate } from "../templates/document.js";

export function foundationHome() {
  const body = `
    ${PageHero({
      variant: "brand",
      kicker: "Wasl Tech VNext",
      title: "نبني حضورك الرقمي باحتراف",
      supporting: "هذه معاينة تأسيسية للمعمارية الجديدة فقط؛ الصفحات الفعلية ستُبنى مرحلة بمرحلة بعد اعتماد البيانات والمكونات.",
      primaryAction: { label: "استكشف الهيكل", href: "#foundation" }
    })}
    <section class="section" id="foundation">
      <div class="container">
        ${SectionHeader({
          kicker: "الأساس",
          title: "بنية صغيرة وواضحة قبل أي زخرفة.",
          supporting: "المكونات والبيانات والأنماط لها ملاك محددون، ولا نكرر نفس المسؤولية بين الملفات."
        })}
        <div class="foundation-principles">
          <article><strong>مكونات مشتركة</strong><p>Header وFooter وHero وCTA تُبنى مرة واحدة.</p></article>
          <article><strong>بيانات مركزية</strong><p>الخدمات والأعمال لا تتكرر داخل الصفحات.</p></article>
          <article><strong>أداء أولًا</strong><p>HTML مولد وقت البناء وJavaScript محدود للسلوك فقط.</p></article>
        </div>
      </div>
    </section>
    ${ContactCTA({
      title: "هذه ليست النسخة النهائية.",
      supporting: "هدف Phase 1 هو إثبات المعمارية قبل بناء تجربة الموقع الكاملة.",
      href: "#main-content",
      label: "العودة للأعلى"
    })}
  `;

  return documentTemplate({
    title: "Wasl Tech VNext — Foundation Preview",
    description: "معاينة تأسيسية غير منشورة لمعمارية موقع وصل تك الجديدة.",
    body,
    activePath: "/"
  });
}

export function foundationPlaceholder({ title, path }) {
  const body = PageHero({
    variant: "directory",
    kicker: "VNext Foundation",
    title,
    supporting: "هذا المسار موجود الآن للتحقق من بنية التوجيه فقط، وسيتم بناؤه في مرحلته المخصصة."
  });

  return documentTemplate({
    title: `${title} — Wasl Tech VNext`,
    description: `معاينة تأسيسية غير منشورة لمسار ${title} في Wasl Tech VNext.`,
    body,
    activePath: path
  });
}
