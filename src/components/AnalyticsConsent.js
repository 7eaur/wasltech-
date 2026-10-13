import { routes } from "../config/routes.js";
import { escapeHtml } from "../lib/html.js";

const copy = Object.freeze({
  ar: Object.freeze({
    title: "تحليلات اختيارية",
    body: "نستخدم Google Analytics 4 فقط بعد موافقتك لقياس استخدام الموقع وتحسينه. لا نرسل بيانات نموذج المشروع أو محتوى رسائلك إلى Analytics.",
    accept: "السماح بالتحليلات",
    reject: "بدون تحليلات",
    privacy: "سياسة الخصوصية"
  }),
  en: Object.freeze({
    title: "Optional analytics",
    body: "We use Google Analytics 4 only after your consent to measure and improve the website. Project-planner fields and message content are not sent to Analytics.",
    accept: "Allow analytics",
    reject: "No analytics",
    privacy: "Privacy policy"
  })
});

export function AnalyticsConsent({ locale = "ar" } = {}) {
  const labels = copy[locale] ?? copy.ar;
  return `
    <section class="analytics-consent" data-analytics-consent hidden role="dialog" aria-modal="false"
      aria-labelledby="analytics-consent-title" aria-describedby="analytics-consent-copy">
      <div class="analytics-consent__body">
        <div>
          <h2 id="analytics-consent-title">${escapeHtml(labels.title)}</h2>
          <p id="analytics-consent-copy">${escapeHtml(labels.body)}</p>
        </div>
        <div class="analytics-consent__actions">
          <button class="analytics-consent__button analytics-consent__button--primary" type="button" data-analytics-accept>
            ${escapeHtml(labels.accept)}
          </button>
          <button class="analytics-consent__button" type="button" data-analytics-reject>
            ${escapeHtml(labels.reject)}
          </button>
          <a class="analytics-consent__privacy" href="${routes.privacy(locale)}">${escapeHtml(labels.privacy)}</a>
        </div>
      </div>
    </section>
  `;
}
