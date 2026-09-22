/**
 * Wasl Tech VNext — Job content contract.
 *
 * Jobs are intentionally empty in the current release. An empty careers surface is valid.
 * A future record must follow this shape:
 *
 * {
 *   id: "stable-id",
 *   slug: "stable-slug",
 *   status: "draft|open|closed",
 *   localeStatus: { ar: "draft|ready|content_required", en: "draft|ready|content_required" },
 *   content: {
 *     ar: { title, summary, responsibilities, requirements, seo: { title, description } } | null,
 *     en: { title, summary, responsibilities, requirements, seo: { title, description } } | null
 *   },
 *   location: null,
 *   employmentType: null,
 *   publishedAt: null
 * }
 */

export const jobs = Object.freeze([]);
