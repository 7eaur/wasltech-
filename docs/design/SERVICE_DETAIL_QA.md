# Service Detail Depth Pass — QA

Date: 2026-09-19
Branch: `refine/service-detail-depth-20260919`

## Goal
Turn the shared dynamic service route into a complete customer-facing service journey while preserving one maintainable `service-web.html?id=...` architecture.

## Implemented
- Rebuilt the public service-detail structure:
  - breadcrumb and service context,
  - richer hero and action hierarchy,
  - fit/audience section,
  - service deliverables,
  - verified related work when available,
  - four-stage service process,
  - contextual FAQ,
  - previous/next service navigation,
  - final service-specific CTA.
- Added three presentation modes:
  - `product`: web, app, store
  - `system`: programming, technical solutions
  - `presence`: visual identity, profiles, marketing
- All modes use the same Wasl Tech identity and differ only where content benefits from a different hierarchy.
- Added dynamic Open Graph title/description/image and canonical URL.
- Added all eight service URLs to the sitemap.
- Removed internal implementation language from the customer-facing service journey.
- Removed “Company Profile” as a visual-identity deliverable now that Profiles is a standalone service.
- Profiles uses a truthful generic design-work alt label rather than implying the current image is a verified profile project.

## Static verification
- Service IDs: 8.
- Presentation configuration covers all 8.
- Missing presentation configs: 0.
- Each service has its required service-data collections.
- All hero and related-work image references exist.
- Sitemap includes all 8 dynamic service URLs.
- H1 count: 1.
- Dead literal `href="#"`: 0.
- Images missing alt: 0.
- Images missing dimensions: 0.
- Mojibake/replacement characters: 0.
- Escaped newline artifacts: 0.
- Gradients in `brand-v2.css`: 0.

## Visual review
Three representative content modes were reviewed:
1. Product — Website Development
2. System — Programming & Systems Development
3. Presence — Visual Identity & Graphic Design

Each was reviewed at:
- Desktop 1440×900 — Light
- Desktop 1440×900 — Dark
- Mobile 390×844 — Light
- Mobile 390×844 — Dark

Results:
- No horizontal overflow in any reviewed mode/viewport/theme.
- Hero hierarchy remains clear on desktop and mobile.
- Related-work cards preserve project proof without overwhelming the service narrative.
- System services are denser but remain readable.
- Presence services gain visual breathing room without changing brand language.
- Deliverables collapse to a readable single-column mobile list.
- Four service steps stack cleanly on mobile.
- Sibling service navigation remains reachable and understandable.

## Boundary
Visual QA uses shape-equivalent placeholders for private project binaries; all referenced image files were verified separately in the live repository.
