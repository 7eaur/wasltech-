import { site } from "../config/site.js";
import { primaryNavigation } from "../config/navigation.js";
import { escapeHtml } from "../lib/html.js";

export function Header({ activePath = "/" } = {}) {
  const links = primaryNavigation.map((item) => {
    const active = item.href === activePath;
    return `<li><a class="nav-link${active ? " is-active" : ""}" href="${item.href}"${active ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a></li>`;
  }).join("");

  return `
    <header class="site-header" data-site-header>
      <div class="container header-shell">
        <a class="brand-link" href="/" aria-label="${site.brand.name.ar} — الرئيسية">
          <img src="${site.brand.assets.logo}" alt="${site.brand.name.ar} | ${site.brand.name.en}" width="190" height="72">
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-menu-toggle>
          <span class="sr-only">فتح القائمة</span>
          <span aria-hidden="true">☰</span>
        </button>

        <nav class="primary-nav" id="primary-navigation" aria-label="التنقل الرئيسي" data-primary-nav>
          <ul>${links}</ul>
        </nav>

        <a class="button button--primary header-cta" href="/contact/">ابدأ مشروعك</a>
      </div>
    </header>
  `;
}
