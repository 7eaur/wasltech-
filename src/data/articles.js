/**
 * Wasl Tech VNext — Article content contract.
 *
 * Articles are intentionally empty in Phase 2. Do not fabricate SEO content.
 * A future record must follow this shape:
 *
 * {
 *   id: "stable-id",
 *   slug: "stable-slug",
 *   category: "category-id",
 *   localeStatus: { ar: "draft|ready|content_required", en: "draft|ready|content_required" },
 *   content: {
 *     ar: { title, summary, bodySource, seo: { title, description } } | null,
 *     en: { title, summary, bodySource, seo: { title, description } } | null
 *   },
 *   relatedServiceIds: [],
 *   relatedProjectIds: [],
 *   coverImage: null,
 *   publishedAt: null,
 *   updatedAt: null
 * }
 */

export const articles = Object.freeze([]);
