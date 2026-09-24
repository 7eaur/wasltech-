import { site } from "../config/site.js";
import { routes } from "../config/routes.js";
import { escapeHtml } from "../lib/html.js";
import { icon } from "./icons.js";

const copy = Object.freeze({
  ar: Object.freeze({
    description: "وصل تك وجهتك لبناء حضور رقمي احترافي. نساعدك على تحويل أفكارك إلى مشاريع ناجحة بجمع التقنية، التصميم، التسويق، والابتكار.",
    explore: "استكشف",
    start: "ابدأ",
    contact: "معلومات التواصل",
    whatsapp: "واتساب مباشر",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    website: "الموقع الإلكتروني",
    social: "شبكات التواصل",
    copyright: "جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
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
    ]),
    socialLinks: Object.freeze([
      Object.freeze({ name: "facebook", label: "فيسبوك" }),
      Object.freeze({ name: "x", label: "إكس" }),
      Object.freeze({ name: "instagram", label: "إنستغرام" }),
      Object.freeze({ name: "telegram", label: "تيليجرام" }),
      Object.freeze({ name: "tiktok", label: "تيك توك" })
    ])
  }),
  en: Object.freeze({
    description: "Wasl Tech is your destination for building a professional digital presence. We help turn ideas into successful projects by bringing technology, design, marketing, and innovation together.",
    explore: "Explore",
    start: "Start",
    contact: "Contact details",
    whatsapp: "WhatsApp",
    phone: "Phone",
    email: "Email",
    website: "Website",
    social: "Social media",
    copyright: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
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
    ]),
    socialLinks: Object.freeze([
      Object.freeze({ name: "facebook", label: "Facebook" }),
      Object.freeze({ name: "x", label: "X" }),
      Object.freeze({ name: "instagram", label: "Instagram" }),
      Object.freeze({ name: "telegram", label: "Telegram" }),
      Object.freeze({ name: "tiktok", label: "TikTok" })
    ])
  })
});

function renderLinks(items, locale) {
  return items
    .map((item) => `<li><a href="${routes[item.route](locale)}">${escapeHtml(item.label)}</a></li>`)
    .join("");
}

function renderSocialLinks(labels) {
  return labels.socialLinks
    .map((item) => `
      <a class="footer-social__link" href="${site.contact.social[item.name]}" target="_blank" rel="noopener"
        aria-label="${escapeHtml(item.label)}">
        ${icon(item.name, "footer-social__icon")}
      </a>
    `)
    .join("");
}

function contactLink({ href, label, value, external = false }) {
  return `
    <li>
      <a class="footer-contact__link" href="${href}"${external ? ' target="_blank" rel="noopener"' : ""}
        aria-label="${escapeHtml(label)}: ${escapeHtml(value)}">
        <span class="footer-contact__name">${escapeHtml(label)}</span>
        <span class="footer-contact__value"><bdi dir="ltr">${escapeHtml(value)}</bdi></span>
      </a>
    </li>
  `;
}

export function Footer({ locale = "ar" } = {}) {
  const labels = copy[locale] ?? copy.ar;
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <section class="footer-brand">
            <a class="footer-brand__link" href="${routes.home(locale)}" aria-label="${escapeHtml(site.brand.name[locale])}">
              <img src="${site.brand.assets.logoWhite}" alt="${site.brand.name.ar} | ${site.brand.name.en}" width="190" height="72" loading="lazy">
            </a>
            <p class="footer-brand__description">${escapeHtml(labels.description)}</p>
            <div class="footer-social" aria-label="${escapeHtml(labels.social)}">
              ${renderSocialLinks(labels)}
            </div>
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
                ${contactLink({
                  href: site.contact.whatsapp,
                  label: labels.whatsapp,
                  value: site.contact.phoneDisplay,
                  external: true
                })}
                ${contactLink({
                  href: `tel:${site.contact.phoneUri}`,
                  label: labels.phone,
                  value: site.contact.phoneDisplay
                })}
                ${contactLink({
                  href: `mailto:${site.contact.email}`,
                  label: labels.email,
                  value: site.contact.email
                })}
                ${contactLink({
                  href: site.origin,
                  label: labels.website,
                  value: site.contact.domain,
                  external: true
                })}
              </ul>
            </address>
          </section>
        </div>

        <div class="footer-bottom">
          <p>© ${year} ${escapeHtml(site.brand.name[locale])} — ${escapeHtml(labels.copyright)}</p>
          <nav class="footer-legal" aria-label="${locale === "ar" ? "روابط قانونية" : "Legal links"}">
            <a href="${routes.privacy(locale)}">${escapeHtml(labels.privacy)}</a>
            <a href="${routes.terms(locale)}">${escapeHtml(labels.terms)}</a>
            <a href="${site.origin}" target="_blank" rel="noopener"><bdi dir="ltr">${escapeHtml(site.contact.domain)}</bdi></a>
          </nav>
        </div>
      </div>
    </footer>
  `;
}
