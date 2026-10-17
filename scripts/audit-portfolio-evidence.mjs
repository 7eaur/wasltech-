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
    return {
      slug: project.slug,
      serviceIds: project.serviceIds,
      heroImage: project.image,
      hasEvidenceSourceList: proof.length > 0,
      evidenceCount: proof.length,
      arCaseStudyComplete: Boolean(ar?.caseStudy?.overview && ar?.caseStudy?.context &&
        ar?.caseStudy?.contribution && ar?.caseStudy?.scope?.length && ar?.caseStudy?.deliveredOutputs?.length),
      enCaseStudyComplete: Boolean(en?.caseStudy?.overview && en?.caseStudy?.context &&
        en?.caseStudy?.contribution && en?.caseStudy?.scope?.length && en?.caseStudy?.deliveredOutputs?.length)
    };
  });

const missingCaseFields=rows.filter(row=>!row.arCaseStudyComplete || !row.enCaseStudyComplete);
console.log(JSON.stringify({count:rows.length,withEvidenceSources:rows.filter(x=>x.hasEvidenceSourceList).length,
  withoutEvidenceSources:rows.filter(x=>!x.hasEvidenceSourceList).map(x=>x.slug),
  missingCaseFields:missingCaseFields.map(x=>x.slug),records:rows},null,2));
if(rows.length!==15 || missingCaseFields.length) {
  console.error("Editorial case-study schema missing or incorrect project count");
  process.exit(1);
}
console.log("PORTFOLIO EVIDENCE AUDIT: structural check passed; unverified claims remain blocked for editorial review");
