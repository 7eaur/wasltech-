import { routes } from "../config/routes.js";
import { getProjectById } from "../data/projects.js";
import { escapeHtml } from "../lib/html.js";

/** Publish only evidence-backed portfolio examples explicitly chosen by editors. */
export function ArticleProjectExamples({ article, locale = "ar" } = {}) {
  const projects = (article.relatedProjectIds ?? []).map((id) => {
    const project = getProjectById(id);
    if (!project) throw new Error(`Invalid article-to-project reference: ${id}`);
    return project;
  });
  if (!projects.length) return "";

  return `
    <section class="section article-related article-project-examples">
      <div class="container article-related__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "أمثلة من الأعمال" : "Relevant work"}</p>
          <h2>${locale === "ar" ? "نماذج مرتبطة بموضوع هذا الدليل" : "Examples related to this guide"}</h2>
          <p>${locale === "ar"
            ? "هذه أعمال منشورة توضح أنواع الحلول التي يناقشها المقال، وليست دليلًا على نتائج أداء غير موثقة."
            : "These published projects illustrate the kinds of solutions discussed here; they are not claims of unverified performance outcomes."}</p>
        </div>
        <div class="article-related__links">
          ${projects.map((project) => `
            <a href="${routes.project(project.slug,locale)}">
              <strong>${escapeHtml(project.content[locale].title)}</strong>
              <span>${escapeHtml(project.content[locale].summary)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
