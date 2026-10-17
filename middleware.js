import { routes } from "./src/config/routes.js";
import { resolveHistoricalService } from "./src/seo/resolve-historical-service.js";

// All historical aliases are exact matches. Do not redirect unrelated paths.
const htmlAliases = new Map([
  ["/index.html", routes.home("ar")],
  ["/en/index.html", routes.home("en")],
  ["/about.html", routes.about("ar")],
  ["/contact.html", routes.contact("ar")],
  ["/services.html", routes.services("ar")],
  ["/portfolio.html", routes.portfolio("ar")],
  ["/process.html", routes.process("ar")],
  ["/faq.html", routes.faq("ar")],
  ["/blog.html", routes.insights("ar")]
]);

export const config = {
  matcher: [
    "/index.html", "/en/index.html", "/about.html", "/contact.html",
    "/services.html", "/portfolio.html", "/process.html", "/faq.html", "/blog.html",
    "/service-web", "/service-web/", "/service-web.html",
    "/en/service-web", "/en/service-web/", "/en/service-web.html"
  ]
};

/** Runs before the static file cache on Vercel, without 96 overlapping query redirects. */
export default function middleware(request) {
  const url = new URL(request.url);
  const target = htmlAliases.get(url.pathname);
  const legacyService = /^\/(?:en\/)?service-web(?:\.html|\/)?$/.test(url.pathname);
  if (!target && !legacyService) return;

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  }
  if (target) return Response.redirect(new URL(target, url.origin), 308);

  const locale = url.pathname.startsWith("/en/") ? "en" : "ar";
  const ids = url.searchParams.getAll("id");
  const destination = ids.length === 1
    ? resolveHistoricalService({ id: ids[0], locale })
    : null;
  if (!destination) {
    return new Response(null, {
      status: 404,
      headers: { "X-Robots-Tag": "noindex", "Cache-Control": "no-store" }
    });
  }
  return Response.redirect(new URL(destination,url.origin),308);
}
