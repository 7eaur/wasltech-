import { site } from "../config/site.js";
import { locales } from "../config/locales.js";
import { routes } from "../config/routes.js";
import { getPrimaryNavigation, isNavigationItemActive } from "../config/navigation.js";
import { escapeHtml } from "../lib/html.js";
import { ActionLink } from "./ActionLink.js";

const copy = Object.freeze({
  ar: Object.freeze({ homeAria: "الرئيسية", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة", nav: "التنقل الرئيسي", cta: "ابدأ مشروعك", switchLabel: "English" }),
  en: Object.freeze({ homeAria: "Home", menuOpen: "Open menu", menuClose: "Close menu", nav: "Primary navigation", cta: "Start your project", switchLabel: "العربية" })
});

export function Header({ activePath = "/", locale = "ar", alternatePath = null } = {}) {
  const localeConfig = locales[locale];
  if (!localeConfig) throw new Error(`Unsupported header locale: ${locale}`);
  const labels = copy[locale];
  const links = getPrimaryNavigation(locale).map((item) => {
    const active = isNavigationItemActive(item, activePath, locale);
    return `<li><a class="nav-link${active ? " is-active" : ""}" href="${item.href}"${active ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a></li>`;
  }).join("");
  const homeHref = routes.home(locale);
  const switchHref = alternatePath ?? routes.home(locale === "ar" ? "en" : "ar");

  return `
    <header class="site-header" data-site-header>
      <div class="container header-shell">
        <a class="brand-link" href="${homeHref}" aria-label="${escapeHtml(site.brand.name[locale])} — ${labels.homeAria}">
          <img src="${site.brand.assets.logo}" alt="${site.brand.name.ar} | ${site.brand.name.en}" width="190" height="72">
        </a>
        <nav class="primary-nav" id="primary-navigation" aria-label="${labels.nav}" data-primary-nav>
          <ul>${links}</ul>
        </nav>
        <div class="header-actions">
          <a class="language-switch" href="${switchHref}" hreflang="${locale === "ar" ? "en" : "ar"}">${labels.switchLabel}</a>
          ${ActionLink({ href: routes.startProject(locale), label: labels.cta, variant: "primary", className: "header-cta" })}
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="${labels.menuOpen}" data-menu-toggle data-open-label="${labels.menuOpen}" data-close-label="${labels.menuClose}">
            <span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export default Header;
