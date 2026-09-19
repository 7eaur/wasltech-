# About Page Depth Pass — QA

Date: 2026-09-19
Branch: `refine/about-depth-20260919`

## Implemented
- Expanded About from a thin four-section page into a seven-section company narrative.
- Uses all four existing About visual assets with a defined role.
- Restored useful ideas from the legacy page without restoring unverified stats or inflated claims.
- Added:
  - stronger company introduction,
  - expanded story,
  - four operating beliefs,
  - grouped “what we build” view linked to the 8 services,
  - decision-making approach that does not duplicate the Process page,
  - concise vision/execution principles,
  - final CTA.
- Avoids repeating the six delivery stages already owned by `process.html`.

## Static verification
- Sections: 7
- Images: 4
- Missing referenced assets: 0
- H1: 1
- Dead literal `href="#"`: 0
- Missing alt: 0
- Missing dimensions: 0
- Duplicate IDs: 0
- Mojibake: 0
- Gradients in brand-v2.css: 0

## Visual review
Reviewed at Desktop 1440×900 and Mobile 390×844 in Light/Dark.
- No horizontal overflow.
- Four images remain separated and useful on mobile.
- Story and belief sections retain readable hierarchy.
- Dark decision-making section creates a controlled visual pause.
- Service groups collapse without losing their links.
- Vision/execution blocks stay distinct from the final CTA.
