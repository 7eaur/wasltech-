import { escapeHtml } from "../lib/html.js";

/** Optional case-study decisions, rendered only where a project has evidence.
 * No automatic placeholder case studies are ever generated for other projects.
 */
export function ProjectDecisions({ decisions = [], locale = "ar" } = {}) {
  if (!decisions.length) return "";
  return `
    <section class="section section--subtle project-scope project-decisions">
      <div class="container project-scope__grid">
        <div>
          <p class="eyebrow">${locale === "ar" ? "قرارات التصميم" : "Design decisions"}</p>
          <h2>${locale === "ar" ? "كيف يخدم تنظيم الواجهة احتياج الزائر؟" : "How does the interface support visitors?"}</h2>
        </div>
        <div>
          <ul>
            ${decisions.map((item)=>`<li>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.reason)}</p>
              <p>${escapeHtml(item.implementation)}</p>
            </li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}
