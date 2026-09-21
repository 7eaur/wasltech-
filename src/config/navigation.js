import { routes } from "./routes.js";

const items = Object.freeze([
  Object.freeze({ id: "home", label: Object.freeze({ ar: "الرئيسية", en: "Home" }), route: "home", family: "home" }),
  Object.freeze({ id: "services", label: Object.freeze({ ar: "الخدمات", en: "Services" }), route: "services", family: "services" }),
  Object.freeze({ id: "portfolio", label: Object.freeze({ ar: "الأعمال", en: "Work" }), route: "portfolio", family: "portfolio" }),
  Object.freeze({ id: "process", label: Object.freeze({ ar: "كيف نعمل", en: "Process" }), route: "process", family: "process" }),
  Object.freeze({ id: "about", label: Object.freeze({ ar: "من نحن", en: "About" }), route: "about", family: "about" }),
  Object.freeze({ id: "insights", label: Object.freeze({ ar: "المقالات", en: "Insights" }), route: "insights", family: "insights" })
]);

function normalizePath(path = "/") {
  const pathname = String(path).split(/[?#]/, 1)[0] || "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function isNavigationItemActive(item, activePath, locale = "ar") {
  const current = normalizePath(activePath);
  const target = normalizePath(routes[item.route](locale));

  if (item.family === "home") return current === target;
  return current === target || current.startsWith(target);
}

export function getPrimaryNavigation(locale = "ar") {
  return items.map((item) => Object.freeze({
    id: item.id,
    family: item.family,
    label: item.label[locale],
    href: routes[item.route](locale),
    route: item.route
  }));
}

export const primaryNavigation = Object.freeze(getPrimaryNavigation("ar"));
