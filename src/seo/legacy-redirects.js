/**
 * Historical URL ownership is split by execution layer:
 * - Vercel project-level CDN rules own only /index.html, /en/index.html, and www → apex.
 * - vercel.json owns other seven old .html pages.
 * - one Vercel Function owns the three service-web variants in AR and EN.
 *
 * Do not reintroduce project-level service redirects; they run before the
 * deployed application and silently override service-specific corrections.
 */
import { routes } from "../config/routes.js";

export const legacyCdnPageAliases = Object.freeze([
  Object.freeze({ source: "/index.html", destination: routes.home("ar") }),
  Object.freeze({ source: "/en/index.html", destination: routes.home("en") })
]);

export const legacyStaticPageAliases = Object.freeze([
  Object.freeze({ source: "/about.html", destination: routes.about("ar") }),
  Object.freeze({ source: "/contact.html", destination: routes.contact("ar") }),
  Object.freeze({ source: "/services.html", destination: routes.services("ar") }),
  Object.freeze({ source: "/portfolio.html", destination: routes.portfolio("ar") }),
  Object.freeze({ source: "/process.html", destination: routes.process("ar") }),
  Object.freeze({ source: "/faq.html", destination: routes.faq("ar") }),
  Object.freeze({ source: "/blog.html", destination: routes.insights("ar") })
]);

export const legacyPageAliases = Object.freeze([
  ...legacyCdnPageAliases,
  ...legacyStaticPageAliases
]);

export const legacyServicePathVariants = Object.freeze([
  "/service-web",
  "/service-web.html",
  "/service-web/"
]);
