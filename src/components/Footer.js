import { site } from "../config/site.js";
import { routes } from "../config/routes.js";
import { escapeHtml } from "../lib/html.js";
import { icon } from "./icons.js";

const copy = Object.freeze({
  ar: Object.freeze({
    explore: "استكشف",
    start: "ابدأ",
    contact: "تواصل",
    whatsapp: "واتساب",
    email: "البريد",
    instagram: "إنستغرام",
    exploreLinks: Object.freeze([
      Object.freeze({ label: "الخدمات", route: "services" }),
      Object.freeze({ label: "الأعمال", route: "portfolio" }),
      Object.freeze({ label: "كيف نعمل", route: "process" }),
      Object.freeze({ label: "من نحن", route: "about" }),
      Object.freeze({ label: "المقالات", route: "insights" })
    ]),
    startLinks: Object.freeze([
      Object.freeze({ label: "ابدأ مشروعك", route: "startProject" }),
      Object.freeze({ label: "تواصل معنا", route: "contact" }),
      Object.freeze({ label: "الأسئلة الشائعة", route: "faq" }),
      Object.freeze({ label: "الوظائف", route: "careers" })
    ])
  }),
  en: Object.freeze({
    explore: "Explore",
    start: "Start",
    contact: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    exploreLinks: Object.freeze([
      Object.freeze({ label: "Services", route: "services" }),
      Object.freeze({ label: "Work", route: "portfolio" }),
      Object.freeze({ label: "Process", route: "process" }),
      Object.freeze({ label: "About", route: "about" }),
      Object.freeze({ label: "Insights", route: "insights" })
    ]),
    startLinks: Object.freeze([
      Object.freeze({ label: "Start a Project", route: "startProject" }),
      Object.freeze({ label: "Contact", route: "contact" }),
      Object.freeze({ label: "FAQ", route: "faq" }),
      Object.freeze({ label: "Careers", route: "careers" })
    ])
  })
});

function renderLinks(items, locale) {
  return items
    .map((item) => `<li><a href="${routes[item.route](locale)}">${escapeHtml(item.label)}</a></li>`)
    .join("");
}

export function Footer({ locale = "ar" } = {}) {
  const labels = copy[locale] ?? copy.ar;

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-brand">
          <a class="footer-brand__link" href="${routes.home(locale)}" aria-label="${escapeHtml(site.brand.name[locale])}">
            <img src="${site.brand.assets.logoWhite}" alt="${site.brand.name.ar} | ${site.brand.name.en}" width="190" height="72" loading="lazy">
          </a>
          <p>${escapeHtml(site.brand.slogan[locale])}</p>
        </section>

        <nav aria-label="${labels.explore}">
          <h2>${labels.explore}</h2>
          <ul class="footer-links">${renderLinks(labels.exploreLinks, locale)}</ul>
        </nav>

        <nav aria-label="${labels.start}">
          <h2>${labels.start}</h2>
          <ul class="footer-links">${renderLinks(labels.startLinks, locale)}</ul>
        </nav>

        <section class="footer-contact">
          <h2>${labels.contact}</h2>
          <address>
            <ul class="footer-contact__links">
              <li>
                <a class="footer-contact__link" href="${site.contact.whatsapp}" aria-label="${labels.whatsapp}: ${escapeHtml(site.contact.phoneDisplay)}">
                  ${icon("whatsapp", "footer-contact__icon")}
                  <span>
                    <small class="footer-contact__name">${labels.whatsapp}</small>
                    <bdi class="footer-contact__value" dir="ltr">${site.contact.phoneDisplay}</bdi>
                  </span>
                </a>
              </li>
              <li>
                <a class="footer-contact__link" href="mailto:${site.contact.email}" aria-label="${labels.email}: ${escapeHtml(site.contact.email)}">
                  ${icon("mail", "footer-contact__icon")}
                  <span>
                    <small class="footer-contact__name">${labels.email}</small>
                    <bdi class="footer-contact__value" dir="ltr">${site.contact.email}</bdi>
                  </span>
                </a>
              </li>
              <li>
                <a class="footer-contact__link" href="${site.contact.instagram.url}" aria-label="${labels.instagram}: ${escapeHtml(site.contact.instagram.handle)}">
                  ${icon("instagram", "footer-contact__icon")}
                  <span>
                    <small class="footer-contact__name">${labels.instagram}</small>
                    <bdi class="footer-contact__value" dir="ltr">${escapeHtml(site.contact.instagram.handle)}</bdi>
                  </span>
                </a>
              </li>
            </ul>
          </address>
        </section>
      </div>
    </footer>
  `;
}
