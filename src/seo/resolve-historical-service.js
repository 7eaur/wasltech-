import { services } from "../data/services.js";
import { routes } from "../config/routes.js";

/**
 * Pure historical-service resolver. Only exact verified IDs map to services,
 * both languages share the canonical taxonomy, and unknown IDs remain 404.
 */
export function resolveHistoricalService({ id, locale = "ar" } = {}) {
  if (!["ar","en"].includes(locale) || typeof id !== "string") return null;
  if (id.length > 80 || !/^[a-z0-9-]+$/.test(id)) return null;
  const service = services.find((item) => item.id === id || item.slug === id);
  return service ? routes.service(service.slug,locale) : null;
}
