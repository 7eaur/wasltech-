import { routes } from "./routes.js";

const items = Object.freeze([
  Object.freeze({ id: "home", label: Object.freeze({ ar: "الرئيسية", en: "Home" }), route: "home" }),
  Object.freeze({ id: "services", label: Object.freeze({ ar: "الخدمات", en: "Services" }), route: "services" }),
  Object.freeze({ id: "portfolio", label: Object.freeze({ ar: "الأعمال", en: "Work" }), route: "portfolio" }),
  Object.freeze({ id: "process", label: Object.freeze({ ar: "كيف نعمل", en: "Process" }), route: "process" }),
  Object.freeze({ id: "about", label: Object.freeze({ ar: "من نحن", en: "About" }), route: "about" })
]);

export function getPrimaryNavigation(locale = "ar") {
  return items.map((item) => Object.freeze({
    id: item.id,
    label: item.label[locale],
    href: routes[item.route](locale)
  }));
}

export const primaryNavigation = Object.freeze(getPrimaryNavigation("ar"));
