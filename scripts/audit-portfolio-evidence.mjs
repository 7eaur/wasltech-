/**
 * Editorial evidence inventory: reports missing proof without fabricating it.
 * Missing external case-study evidence is not a build failure; it requires
 * source collection and client review before factual expansion is published.
 */
import { projects } from "../src/data/projects.js";

const rows = projects
  .filter((project) => project.id !== "project-16")
  .map((project) => {
    const ar = project.content?.ar;
    const en = project.content?.en;
    const proof = project.evidenceSources ?? [];
    // src/data/projects.js provides generic repository fallback paths for
    // older projects. Those prove that an asset exists, NOT that a client
    // verified implementation choices or results.
    const clientProof = proof.filter((source) => /^Owner-provided\b|^client:/i.test(source));
    const repositoryOnly = proof.length > 0 && proof.every((source) => source.startsWith("main:"));
    return {
      slug: project.slug,
      serviceIds: project.serviceIds,
      heroImage: project.image,
      evidenceCount: proof.length,
      evidenceClass: clientProof.length ? "owner-supplied" : repositoryOnly ? "repository-only" : "needs-review",
      hasIndependentClientEvidence: clientProof.length > 0,
      arCaseStudyComplete: Boolean(ar?.caseStudy?.overview && ar?.caseStudy?.context &&
        ar?.caseStudy?.contribution && ar?.caseStudy?.scope?.length && ar?.caseStudy?.deliveredOutputs?.length),
      enCaseStudyComplete: Boolean(en?.caseStudy?.overview && en?.caseStudy?.context &&
        en?.caseStudy?.contribution && en?.caseStudy?.scope?.length && en?.caseStudy?.deliveredOutputs?.length)
    };
  });

const missingCaseFields=rows.filter(row=>!row.arCaseStudyComplete || !row.enCaseStudyComplete);
console.log(JSON.stringify({count:rows.length,ownerEvidence:rows.filter(x=>x.hasIndependentClientEvidence).length,
  repositoryOnly:rows.filter(x=>x.evidenceClass==="repository-only").map(x=>x.slug),
  needsVerification:rows.filter(x=>!x.hasIndependentClientEvidence).map(x=>x.slug),
  missingCaseFields:missingCaseFields.map(x=>x.slug),records:rows},null,2));
if(rows.length!==15 || missingCaseFields.length) {
  console.error("Editorial case-study schema missing or incorrect project count");
  process.exit(1);
}
console.log("PORTFOLIO EVIDENCE AUDIT: structural check passed; unverified claims remain blocked for editorial review");
