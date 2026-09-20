import { site } from "../config/site.js";
import { primaryNavigation } from "../config/navigation.js";

export function Footer() {
  const links = primaryNavigation
    .filter((item) => item.href !== "/")
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-brand">
          <img src="${site.brand.logo}" alt="${site.brand.ar} | ${site.brand.en}" width="190" height="72" loading="lazy">
          <p>${site.brand.slogan}</p>
        </section>

        <section>
          <h2>استكشف</h2>
          <ul class="footer-links">${links}</ul>
        </section>

        <section>
          <h2>تواصل</h2>
          <ul class="footer-links">
            <li><a href="${site.contact.whatsapp}">واتساب: ${site.contact.phoneDisplay}</a></li>
            <li><a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
            <li><span>${site.contact.domain}</span></li>
          </ul>
        </section>
      </div>
    </footer>
  `;
}
