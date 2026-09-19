# Phase 10 — FAQ & Secondary/Public Utility Pages QA

Date: 2026-09-19
Branch: `design/refined-craft-phase10-secondary-20260919`

## Goal
Bring supporting public pages into the same refined-craft system without overdesign or publishing incomplete content as if it were finished.

## Implemented

### FAQ
- Rebuilt `faq.html` as a structured reference rather than one flat accordion block.
- Added four clear groups:
  1. Before starting a project
  2. Websites / apps / e-commerce
  3. Identity / profiles / marketing
  4. Delivery / workflow
- Expanded to 12 visible questions based only on current service/process content.
- Removed internal implementation language.
- Added matching `FAQPage` JSON-LD.
- Added topic index links for faster navigation.

### Blog / knowledge page
- Kept `blog.html` outside primary navigation.
- Kept `noindex,follow`.
- Removed inline placeholder styling.
- Reframed the page as an intentional unpublished-content state.
- Did not invent articles or publication dates.
- Did not add Blog to the sitemap.

### 404
- Added a branded `404.html`.
- Added `noindex,follow`.
- Added root `<base href="/">` so shared component links/assets resolve correctly even for nested invalid URLs.
- Provides useful paths back to Home, Services, Portfolio, Process and Contact.
- 404 is not included in the sitemap.

### Styling
- Added `css/secondary.css` scoped to FAQ, blog utility state and 404.
- No new global page-specific rules were added to `craft-system.css`.
- No gradients, decorative glow, particles or floating ornaments were introduced.

## Static verification
- FAQ visible questions: 12
- FAQ JSON-LD questions: 12
- JSON-LD questions match visible questions: YES
- FAQ groups: 4
- H1:
  - FAQ: 1
  - Blog: 1
  - 404: 1
- literal dead `href="#"`: 0
- inline `style=`: 0
- mojibake/replacement characters: 0
- escaped-newline artifacts: 0
- gradients in secondary.css: 0
- missing local page links: 0
- sitemap contains FAQ: YES
- sitemap contains Blog: NO
- sitemap contains 404: NO

## Design review notes
- FAQ follows the Update-Card-inspired editorial/reference model: compact hero, index, grouped rows and restrained closing CTA.
- Blog is intentionally quiet and truthful rather than visually pretending to contain articles.
- 404 is useful and branded without introducing cartoon decoration or a one-off visual language.

## Remaining global gate
Exact cross-page Desktop/Mobile Light/Dark runtime QA remains part of Phase 11 and Phase 13.
