import { escapeHtml } from "../lib/html.js";
import { ActionLink } from "./ActionLink.js";

export function ContactCTA({
  title = "جاهز تبدأ من نقطة واضحة؟",
  supporting = "شاركنا احتياجك، ونرتب معك الخطوة التالية.",
  href = "/contact/",
  label = "ابدأ مشروعك"
} = {}) {
  return `
    <section class="contact-cta">
      <div class="container contact-cta__inner">
        <div>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(supporting)}</p>
        </div>
        ${ActionLink({ href, label, variant: "light", size: "lg" })}
      </div>
    </section>
  `;
}
