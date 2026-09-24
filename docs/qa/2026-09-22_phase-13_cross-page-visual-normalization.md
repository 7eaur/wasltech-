# Phase 13 — Cross-page Visual Normalization QA — 2026-09-22

## Scope

Homepage was accepted by the user and became the visual baseline for the remaining VNext routes.

This pass normalized:
- Shared Header / Footer
- Services directory
- Service detail
- Portfolio
- Project detail / case study
- About
- Process
- Contact
- Project planner
- FAQ
- Insights
- Careers
- Privacy
- Terms
- English equivalents through the same responsive system

## Visual system carried forward

- IBM Plex Sans Arabic / IBM Plex Sans.
- Wasl Tech Navy + Teal identity.
- Calm profile-inspired hierarchy.
- Reduced section whitespace.
- Compact mobile rhythm.
- Two-up mobile cards where content stays readable.
- Horizontal compact process elements where appropriate.
- Final CTA is a separate Teal card on canvas, not visually merged with the Navy footer.
- Compact mobile Footer with WhatsApp, email, and Instagram icon links.
- No invented clients, metrics, results, testimonials, timelines, prices, or technology claims.
- Removed internal proof language such as “real/verified work” from public-facing Portfolio and related-work copy.

## Implementation checkpoint

Runtime/design SHA:
`3106d4d93f5ece5208e6dd22d3ce9c2ab6c16d0d`

VNext verify:
- Run: `35680961221`
- Result: **SUCCESS**
- Preview build/check: SUCCESS
- Release build/check: SUCCESS

Responsive route-family matrix:
- Run: `35680961269`
- Result: **SUCCESS**
- Screenshot artifact: `10674342417`
- Artifact name: `wasltech-vnext-route-matrix-screenshots`

## Matrix coverage

Representative route families:
- /
- /services/
- /services/web-development/
- /portfolio/
- /portfolio/wasl-freelance-platform/
- /about/
- /process/
- /contact/
- /start-project/
- /faq/
- /insights/
- /careers/
- /privacy/
- /terms/

Every representative route was checked in Arabic and English at:
- 360
- 390
- 768
- 1024
- 1366
- 1440

Automated assertions:
- no horizontal overflow;
- H1 exists;
- IBM Plex font family is active;
- no page JavaScript errors.

Arabic full-page screenshots were captured at:
- Desktop 1440
- Mobile 390

## Visual review findings

Reviewed full-page output across route families.

Confirmed:
- Services directory keeps two-up mobile service cards; odd third cards resolve to a full-width horizontal card instead of leaving a visual hole.
- Service detail keeps decision signals, deliverables, proof, and process compact on mobile without losing the route hierarchy.
- Portfolio no longer uses one oversized lead project; work cards are visually equal and two-up on mobile.
- Project case studies preserve readable scope/story hierarchy with two-up related work on mobile.
- About keeps its sections separate and uses compact three-up principle/system cards on mobile.
- Process uses two-up phase cards on mobile while preserving the dark working-rule panel and separate Teal CTA.
- Contact uses icon-led WhatsApp/email/Instagram channels and a compact two-up path layout.
- Project Planner preserves readable form controls and two-column small fields on mobile where safe.
- FAQ, Insights, Careers, Privacy, and Terms inherit the same type scale, rhythm, footer, and responsive rules.
- CTA surfaces remain visually distinct from the Footer across route families.
- Shared Footer remains compact on mobile.

## Acceptance state

- Homepage: **USER ACCEPTED**
- Cross-page implementation: **COMPLETE FOR REVIEW**
- Automated responsive matrix: **PASS**
- User visual acceptance of remaining routes: **PENDING**
- Phase 14 / production cutover: **NOT STARTED**
