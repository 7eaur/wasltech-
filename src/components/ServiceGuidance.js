import { routes } from "../config/routes.js";
import { getPublishedArticlesByService } from "../data/articles.js";
import { escapeHtml } from "../lib/html.js";

export function ServiceGuidance({ service, locale = "ar" } = {}) {
  const items = getPublishedArticlesByService(service.id, locale).slice(0, 3);
  if (!items.length) return "";

  return `
    <section class="section article-related service-guidance" id="service-guidance">
      <div class="container article-related__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "أدلة مرتبطة" : "Related guidance"}</p>
          <h2>${locale === "ar"
            ? "محتوى يساعدك على اتخاذ القرار قبل التنفيذ"
            : "Guidance to help you decide before implementation"}</h2>
          <p>${locale === "ar"
            ? "مقالات عملية مرتبطة بهذه الخدمة تساعدك على ترتيب النطاق والأسئلة قبل بدء المشروع."
            : "Practical articles related to this service that help clarify scope and key questions before you start."}</p>
        </div>
        <div class="article-related__links">
          ${items.map((article)=>`
            <a href="${routes.article(article.slug,locale)}">
              <strong>${escapeHtml(article.content[locale].title)}</strong>
              <span>${escapeHtml(article.content[locale].summary)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
