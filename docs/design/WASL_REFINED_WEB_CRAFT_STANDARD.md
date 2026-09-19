# Wasl Tech — Refined Web Craft Standard v1.0

Status: APPROVED DESIGN CRAFT REFERENCE  
Source inspiration: the proven design/engineering discipline used in `7eaur/update_card`.  
Important: this is a transfer of **design craft, organization and implementation discipline**, not a copy of UPDATE CARD branding or page layouts.

## 1. Governing principle

Wasl Tech must feel:
- Elegant
- Deliberate
- Modern
- Calm
- Premium without luxury clichés
- Human-designed
- Visually organized
- Easy to scan
- Consistent without becoming repetitive

The site must not feel like:
- a long landing-page template,
- a wall of cards,
- a collection of unrelated sections,
- an AI-generated technology theme,
- or a design exercise that sacrifices clarity.

## 2. What we adopt from UPDATE CARD

### 2.1 Compact, controlled page density
- Prefer compact vertical rhythm over oversized empty sections.
- Every section must justify its height.
- Use `max-width` containers consistently.
- Avoid giant full-viewport blocks unless the content truly needs them.
- Desktop must feel composed, not stretched.
- Mobile must feel intentionally edited, not stacked.

### 2.2 A disciplined surface system
Use a small number of surface types:
1. Main white/canvas surface.
2. Soft supporting surface.
3. Deep Navy brand surface for important visual pauses.
4. Image-led surface.

Do not introduce a new panel treatment for every section.

### 2.3 Restrained radii and shadows
Default ranges:
- controls: 9–10px
- standard panels/cards: 12–14px
- major image/content panels: 18–20px

Shadows should be subtle and ambient.
Do not make every container float.

### 2.4 Image-led storytelling
Images are structural content, not decoration.
For every image define:
- why it exists,
- what content it supports,
- aspect ratio,
- desktop crop,
- mobile crop.

Prefer one strong image over several weak floating images.
Use real project visuals whenever possible.

### 2.5 Shared visual contracts
Same function = same behavior and visual contract.

Examples:
- page hero
- section heading
- buttons
- text links
- CTA closing block
- service navigation
- form controls
- footer
- dialog/drawer

Different content purpose may use a different composition without inventing a new design language.

### 2.6 Editorial composition over equal-card repetition
Do not solve every section with:
`heading → 3 equal cards → CTA`.

Allowed patterns include:
- split compositions,
- editorial lists,
- image + text panels,
- timelines,
- structured rows,
- controlled asymmetric grids,
- compact bands,
- proof/showcase compositions.

### 2.7 Strong but restrained typography
- Arabic typography drives hierarchy.
- Keep line lengths readable.
- Headings should be strong but not oversized only for drama.
- Supporting copy must add information, not repeat the heading.
- Avoid multiple competing headline sizes in one viewport.

### 2.8 One clear visual idea per section
Every section should have one dominant composition.
Do not mix:
- collage + cards + icons + counters + decoration
inside one section.

### 2.9 Controlled brand-surface alternation
Use white / soft / Navy surfaces intentionally.
Do not alternate backgrounds mechanically after every section.
Dark sections are pauses for emphasis, not a default decoration.

### 2.10 Mobile is an edited experience
At narrow widths:
- preserve hierarchy,
- reduce secondary copy where safe,
- reorganize layout intentionally,
- keep actions reachable,
- avoid long repeated vertical card stacks,
- never hide essential meaning to save space,
- no horizontal overflow.

## 3. Wasl-specific visual identity remains authoritative

Brand colors:
- Navy: `#14305F`
- Teal: `#0E8889`
- Teal Dark: `#096B70`

Typography:
- IBM Plex Sans Arabic
- IBM Plex Sans English

Brand rules:
- Navy leads.
- Teal is a focused interaction/accent color.
- No decorative gradients by default.
- No random glow.
- No generic blue/purple technology aesthetic.
- Official logo proportions must remain unchanged.

## 4. Layout discipline

Target content container:
- approximately 1180–1240px depending on page need.

Recommended section spacing:
- desktop: generally 56–88px
- tablet: generally 44–64px
- mobile: generally 32–52px

These are ranges, not mandatory values.

Prefer:
- internal panel padding over excessive page whitespace,
- aligned edges between adjacent sections,
- repeated baseline geometry,
- consistent text measures.

## 5. Component discipline

### Header
- Compact sticky shell.
- Logo, navigation and CTA remain balanced.
- Mobile menu must be solid, readable and easy to dismiss.
- Avoid oversized header height.

### Page hero
Default page hero should normally be:
- contained,
- text-first in DOM,
- one strong visual,
- short copy,
- one primary action where useful.

A special page can diverge if its content justifies it.

### Section heading
Use one reusable hierarchy:
- eyebrow/kicker,
- H2,
- optional supporting line.

Do not invent decorative underlines or ornaments per section.

### CTA
Closing CTA must look branded and intentional.
It should not be a generic colored rectangle.
Keep HTML text real and accessible.

### Cards
Cards must earn their existence.
Use them for:
- distinct interactive items,
- items with real boundaries,
- repeated comparable entities.

Do not put ordinary paragraphs in cards.

## 6. Motion

- Micro-interactions: roughly 120–250ms.
- Larger UI transitions only when needed.
- No constant floating.
- No particles.
- No scroll hijacking.
- No auto-playing carousel.
- No decorative parallax.
- Respect `prefers-reduced-motion`.

## 7. Images and media

- Explicit width/height.
- Above-fold primary visual: eager/fetchpriority when justified.
- Below-fold: lazy loading.
- Prefer WebP/AVIF for raster delivery.
- Do not ship unused imagery.
- Avoid repeating the same image across pages unless it is intentionally shared branding.
- Real Wasl projects have priority over generic visuals.

## 8. Page architecture

Every page must answer:
1. What is this page?
2. Why should the visitor care?
3. What can they explore or understand here?
4. What is the next useful action?

The page should have a distinct role and composition.
Do not duplicate another page's sections just to make it longer.

## 9. Quality gate for every page

Before a page is accepted:
1. Review code/content.
2. Check information hierarchy.
3. Check visual composition.
4. Run Desktop Light/Dark review.
5. Run Mobile Light/Dark review.
6. Check no horizontal overflow.
7. Check RTL.
8. Check image crop/focal point.
9. Check keyboard/focus where interactive.
10. Remove visual/content repetition.
11. Critique against the anti-template rules.
12. Only then merge.

## 10. Anti-template / anti-AI bans

Reject:
- repeated identical cards section after section,
- decorative icon circles everywhere,
- arbitrary blobs,
- floating badges,
- particle backgrounds,
- gratuitous gradients,
- fake dashboards,
- giant empty hero space,
- random 3D,
- generic stock-office imagery,
- text-heavy sections with no hierarchy,
- every section centered,
- every section using the same layout,
- motion with no functional reason.

## 11. Final craft test

Ask:
- Does this feel intentionally art-directed?
- Is the hierarchy obvious in 5 seconds?
- Is there one dominant idea per section?
- Are spacing and surfaces controlled?
- Are images doing real storytelling work?
- Does mobile feel edited rather than stacked?
- Does the page feel like the same Wasl Tech product as the pages before it?
- Could we remove anything without losing meaning?

If yes, remove it.
