import { site } from "../config/site.js";
import { getPrimaryNavigation } from "../config/navigation.js";

const copy = Object.freeze({
  ar: Object.freeze({ explore: "استكشف", contact: "تواصل", whatsapp: "واتساب" }),
  en: Object.freeze({ explore: "Explore", contact: "Contact", whatsapp: "WhatsApp" })
});

export function Footer({ locale = "ar" } = {}) {
  const labels = copy[locale] ?? copy.ar;
  const links = getPrimaryNavigation(locale)
    .filter((item) => item.id !== "home")
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-brand">
          <img src="${site.brand.assets.logoWhite}" alt="${site.brand.name.ar} | ${site.brand.name.en}" width="190" height="72" loading="lazy">
          <p>${site.brand.slogan[locale]}</p>
        </section>

        <section>
          <h2>${labels.explore}</h2>
          <ul class="footer-links">${links}</ul>
        </section>

        <section>
          <h2>${labels.contact}</h2>
          <ul class="footer-links">
            <li><a href="${site.contact.whatsapp}">${labels.whatsapp}: ${site.contact.phoneDisplay}</a></li>
            <li><a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
            <li><span>${site.contact.domain}</span></li>
          </ul>
        </section>
      </div>
    </footer>
  `;
}
