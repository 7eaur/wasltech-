# Services Page Depth Pass — QA

Date: 2026-09-19
Branch: `refine/services-depth-20260919`

## Goal
Restore the complete Wasl Tech service architecture and make service discovery rich, clear and intentional without returning to repetitive equal-card grids.

## Implemented
- Restored eight service routes:
  - `web`
  - `app`
  - `store`
  - `programming`
  - `tech`
  - `design`
  - `profiles`
  - `marketing`
- Split Programming from Technical Solutions.
- Added Profiles as an independent service.
- Rebuilt `services.html` around:
  - visual hero with verified project imagery,
  - three service-domain overview bands,
  - editorial service directory,
  - intent-based “how to choose” section,
  - proof from existing portfolio projects,
  - contextual FAQ,
  - final conversion CTA.
- Updated homepage shortcuts and shared footer links to the eight-service taxonomy.

## Static verification
- Service-data keys: 8
- All 8 services are linked from `services.html`.
- Missing linked service IDs: 0
- Unlinked service IDs: 0
- All 8 service hero image references exist.
- `services.html` H1 count: 1
- Dead literal `href="#"`: 0
- Images missing alt: 0
- Images missing explicit dimensions: 0
- Duplicate IDs: 0
- Mojibake/replacement characters: 0

## Visual review
Reviewed using the local layout QA harness at:
- Desktop 1440×900 — Light
- Desktop 1440×900 — Dark
- Mobile 390×844 — Light
- Mobile 390×844 — Dark

Findings:
- No horizontal overflow at desktop or mobile widths.
- Hero remains balanced and readable in both themes.
- Editorial service groups preserve hierarchy instead of producing an eight-card wall.
- All eight services remain readable on mobile.
- Intent-based service selection reduces ambiguity between Programming and Technical Solutions.
- Proof projects stack cleanly on mobile.
- Dark mode preserves heading/icon contrast.
- CTA and FAQ remain visually separated from the directory.

## Boundary
The visual QA harness used shape-equivalent placeholders for private project binaries. Repository image paths and all eight hero assets were verified separately against the live branch.
