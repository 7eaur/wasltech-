# Portfolio Depth Pass — QA

Date: 2026-09-19
Branch: `refine/portfolio-depth-20260919`

## Goal
Make the portfolio useful for browsing, understanding and comparing real work without inventing case-study claims that are not present in the repository.

## Implemented
- Preserved all 14 existing portfolio records.
- Rebuilt the portfolio hero with verified project imagery.
- Added dynamic project/category counts based on the dataset.
- Added category filters with live counts.
- Rebuilt project cards with a featured-first hierarchy rather than an equal grid.
- Rebuilt the in-site project drawer:
  - project image,
  - project type,
  - existing project description,
  - highlights derived only from the existing description,
  - related Wasl Tech service,
  - contextual “similar project” WhatsApp action,
  - up to three other projects from the same category.
- Added Escape close, focus return and a basic Tab focus trap.
- Unmapped legacy images remain unused rather than being attached to the wrong project without evidence.

## Static verification
- Projects: 14.
- Projects with highlight mapping: 14/14.
- Projects with related-service mapping: 14/14.
- Missing primary project image references: 0.
- H1 count: 1.
- Dead literal `href="#"`: 0.
- Images missing alt: 0.
- Images missing explicit dimensions: 0.
- Duplicate IDs: 0.
- Mojibake/replacement characters: 0.
- Escaped newline artifacts: 0.
- Drawer supports Escape and keyboard focus containment.
- Gradients in `brand-v2.css`: 0.

## Visual review
Reviewed at:
- Desktop 1440×900 — Light/Dark
- Mobile 390×844 — Light/Dark
- Drawer-open state at desktop and mobile in Light/Dark

Results:
- No horizontal overflow in reviewed states.
- Hero and project summary remain readable at mobile width.
- Filters become horizontally scrollable on mobile instead of wrapping into a tall block.
- Featured project gives the grid hierarchy without turning every item into a large card.
- Drawer uses the full mobile width and scrolls internally.
- Drawer project information appears before conversion actions.
- Dark mode preserves content hierarchy and divider contrast.

## Boundary
The visual QA harness uses shape-equivalent placeholders for private binary project images. All 14 primary project image paths were verified separately in the repository.
