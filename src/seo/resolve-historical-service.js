import { services } from "../data/services.js";
import { routes } from "../config/routes.js";
export function resolveHistoricalService({ id, locale = "ar" } = {}) {
  if (!["ar","en"].includes(locale) || typeof id !== "string" || id.length > 80 || !/^[a-z0-9-]+$/.test(id)) return null;
  const service = services.find((item) => item.id === id || item.slug === id);
  return service ? routes.service(service.slug,locale) : null;
}
