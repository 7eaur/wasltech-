/**
 * Single source of truth for VERIFIED historical Wasl Tech page aliases.
 *
 * Vercel reads vercel.json before npm builds. Keep its generated redirects
 * committed; update them with `node scripts/sync-legacy-redirects.mjs --write`
 * and verify in CI using `--check`.
 *
 * Only add an alias with evidence that this URL previously served that intent.
 * Never infer service targets from a request at runtime.
 */
import { routes } from "../config/routes.js";
import { services } from "../data/services.js";

export const legacyPageAliases = Object.freeze([
  Object.freeze({ source: "/index.html", destination: routes.home("ar") }),
  Object.freeze({ source: "/en/index.html", destination: routes.home("en") }),
  Object.freeze({ source: "/about.html", destination: routes.about("ar") }),
  Object.freeze({ source: "/contact.html", destination: routes.contact("ar") }),
  Object.freeze({ source: "/services.html", destination: routes.services("ar") }),
  Object.freeze({ source: "/portfolio.html", destination: routes.portfolio("ar") }),
  Object.freeze({ source: "/process.html", destination: routes.process("ar") }),
  Object.freeze({ source: "/faq.html", destination: routes.faq("ar") }),
  Object.freeze({ source: "/blog.html", destination: routes.insights("ar") })
]);

// Explicit variants are intentional: Vercel's trailingSlash normalization
// must not silently send a historical query URL to a generic services page.
export const legacyServicePathVariants = Object.freeze([
  "/service-web",
  "/service-web.html",
  "/service-web/"
]);

export const legacyLocales = Object.freeze(["ar", "en"]);

export function createLegacyRedirects() {
  const redirects = legacyPageAliases.map(({source,destination}) => ({
    source,
    destination,
    permanent: true
  }));

  // Make grouping deterministic and easy to compare to the static config:
  // each language and ID alias is emitted once per historical URL spelling.
  for (const suffix of legacyServicePathVariants) {
    for (const locale of legacyLocales) {
      const prefix = locale === "en" ? "/en" : "";
      for (const service of services) {
        for (const value of new Set([service.slug, service.id])) {
          redirects.push({
            source: prefix + suffix,
            has: [{ type: "query", key: "id", value }],
            destination: routes.service(service.slug, locale),
            permanent: true
          });
        }
      }
    }
  }
  return redirects;
}

// Preserve explicit 404 for unknown/missing IDs instead of serving an
// unrelated page. These rules belong before handle:filesystem in vercel.json.
export const legacyUnknownServiceRoutes = Object.freeze([
  Object.freeze({ src: "/service-web/?", status: 404, dest: "/404.html" }),
  Object.freeze({ src: "/en/service-web/?", status: 404, dest: "/en/404.html" }),
  Object.freeze({ src: "/service-web\\.html", status: 404, dest: "/404.html" }),
  Object.freeze({ src: "/en/service-web\\.html", status: 404, dest: "/en/404.html" })
]);
