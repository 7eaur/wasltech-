import { routes } from "../config/routes.js";
import { getPublishedArticlesByService } from "../data/articles.js";
import { escapeHtml } from "../lib/html.js";
import { SectionHeader } from "./SectionHeader.js";

export function ServiceGuidance({ service, locale = "ar" } = {}) {
  const items = getPublishedArticlesByService(service.id, locale).slice(0, 3);
  if (!items.length) return "";

  return `
    <section class="section section--subtle service-articles" id="service-guidance">
      <div class="container">
        ${SectionHeader({
          kicker:locale === "ar" ? "أدلة مرتبطة" : "Related guidance",
          title:locale === "ar"
            ? "محتوى يساعدك على اتخاذ القرار قبل التنفيذ"
            : "Guidance to help you decide before implementation",
          supporting:locale === "ar"
            ? "مقالات عملية مرتبطة بهذه الخدمة تساعدك على ترتيب النطاق والأسئلة قبل بدء المشروع."
            : "Practical articles related to this service that help clarify scope and key questions before you start."
        })}
        <div class="service-articles__list">
          ${items.map((article)=>`
            <a class="service-article-link" href="${routes.article(article.slug,locale)}">
              <span>${escapeHtml(article.content[locale].categoryLabel)}</span>
              <strong>${escapeHtml(article.content[locale].title)}</strong>
              <p>${escapeHtml(article.content[locale].summary)}</p>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
