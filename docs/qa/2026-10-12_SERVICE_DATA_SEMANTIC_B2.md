# Wasl Tech — AR/EN services semantic distinction B2

Date: 2026-10-12. Branch `fix/independent-site-recovery-20261010`. Parent SHA: `bf33f55beed006bf834bb12a47d980a92e144328`. PR #46 is Draft; this is not a production claim.

## Scope of the actual data edit

After B1 removed redundant template filler, B2 inspected the eight canonical bilingual service records for meaning repeated between **types of work** (`subservices`) and **what the customer receives** (`deliverables`). These fields have different purposes. Do **not** delete a deliverable merely because its title resembles a service type.

- **Custom programming (AR/EN)**: dashboard deliverable now describes a role-aware working screen; automation deliverable specifies the task inputs, steps and outcomes. The service types continue to explain capabilities, not re-list the delivered description.
- **Brand design (AR/EN)**: digital/print deliverable now means actual approved identity application files; the service type still names the kind of brand applications supported.
- **Digital marketing (AR/EN)**: social-management deliverable now describes an agreed publishing/scheduling/follow-up workflow; the service type explains the category of work.

Eight targeted description changes in `src/data/services.js`. Titles, number/order of all services, categories, deliverable list, FAQ, constraints, client decision summaries, SEO copy, and project relationships are preserved. Both language records were parsed successfully during source transformation; existing `check-service-details.mjs` asserts all descriptions reach all 16 generated service routes and the standard `check-data.mjs` remains a required gate.

## Verification / remaining

State: **IMPLEMENTED, exact-SHA CI and browser results pending**. This is an editorial engineering pass, not a new commercial commitment or removal of a service. Some meaning is reasonably shared between FAQs and constraints because they answer different visitor questions; that is not evidence for blanket deletion. Human scanning-task review at mobile/desktop and both locales remains OPEN; UXR-03 is **PARTIAL**, not CLOSED.
