# Wasl Tech — UXR-03 service-details semantic cleanup B1

**Date:** 2026-10-12 | **Branch:** `fix/independent-site-recovery-20261010` | **Baseline:** `40562edeb3ab8a66332c230d4d03f4f35ac2627d` | **PR:** #46 Draft | **State:** IMPLEMENTED; browser and user-task acceptance pending.

## Reason

Each service page already provides a first-screen `decision.scopeSummary`, a full deliverables list, a detailed service list, constraints and specific four-step process. Four shared `SectionHeader.supporting` sentences simply repeated those section headings or the established conditional scope, in both locales, across the service template. Hiding these paragraphs with CSS would not solve content repetition.

## Changed at owner

- Removed the *four shared generic template supporting paragraphs* under subservices, deliverables, related work and process in `src/pages/service-detail.js`. This is applied consistently to all 8 × 2 localized routes. No record in `src/data/services.js` was deleted or rewritten.
- Kept names, descriptions and order of all deliverables, audiences, signals, subservices, constraints, project references, process steps, FAQ, Hero descriptions, decision summaries, page CTAs, JSON-LD, canonical and hreflang.
- Expanded `scripts/check-service-details.mjs` to confirm AR/EN render includes signals (titles and descriptions), audiences, constraints and full deliverable descriptions and to reject the old repetitive shared phrases.

## Evaluation still required

The change reduces repeated generic prose, not the total number of page sections. It is **B1**, not a claim that UXR-03 is CLOSED. Compare practical time-to-answer for deliverables, scope, related work and contact on 320/390/1440 (AR/EN), with JS and no-JS. B2 must review overlaps in the actual localized `src/data/services.js` records *service by service*, retaining exceptions and unique content. No deletion of genuine scope information without semantic review.

## Non-goals

No fake case-study proof, prices or client outcomes. No change to main, SEO, Logo, DNS or Production. Evidence CI + route matrix must be tied to the final SHA.
