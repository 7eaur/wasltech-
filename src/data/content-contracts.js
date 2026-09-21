/**
 * Wasl Tech VNext — Phase 2B content completeness contracts.
 *
 * These states describe evidence/completeness, not publication status.
 * Keep them uppercase so they cannot be confused with locale publication states.
 */

export const CONTENT_STATE = Object.freeze({
  READY: "READY",
  PARTIAL: "PARTIAL",
  CONTENT_REQUIRED: "CONTENT REQUIRED",
  NOT_VERIFIED: "NOT VERIFIED",
  NOT_APPLICABLE: "NOT APPLICABLE"
});

export const contentStateValues = Object.freeze(Object.values(CONTENT_STATE));

export const serviceFieldKeys = Object.freeze([
  "identity",
  "arabicCore",
  "problemNeed",
  "audiences",
  "scopeBoundaries",
  "deliverables",
  "capabilitiesIntegrations",
  "process",
  "faq",
  "proof",
  "constraintsDependencies",
  "seo",
  "relatedArticles",
  "english"
]);

export const projectFieldKeys = Object.freeze([
  "identity",
  "arabicCore",
  "cover",
  "gallery",
  "year",
  "clientAttribution",
  "projectStatus",
  "liveUrl",
  "platformType",
  "technologies",
  "scope",
  "waslContribution",
  "contextChallenge",
  "outcomes",
  "seo",
  "english"
]);

export const pageFieldKeys = Object.freeze([
  "purpose",
  "arabicCore",
  "sections",
  "cta",
  "seo",
  "businessFacts",
  "english"
]);

export function isContentState(value) {
  return contentStateValues.includes(value);
}

export function createFieldState(keys, overrides = {}) {
  return Object.freeze(Object.fromEntries(
    keys.map((key) => [key, overrides[key] ?? CONTENT_STATE.CONTENT_REQUIRED])
  ));
}
