# Wasl Tech VNext — Design System & Experience Standard

Status: CANONICAL DESIGN AUTHORITY

This standard preserves the approved Wasl identity, the strongest design/engineering lessons adopted from UPDATE CARD, and the structural/page-writing lessons learned from competitor research. It does not copy another brand or site.

## 1. Design character

Wasl Tech must feel:
- elegant;
- deliberate;
- calm;
- modern;
- technically polished;
- human-designed;
- easy to scan;
- premium without luxury clichés.

It must not look AI-generated, template-driven, or over-decorated.

## 2. Identity — locked foundation

The original Wasl Tech identity is the source of truth. VNext does not redesign the logo or substitute a new visual identity.

### Official assets

Canonical assets:
- `assets/brand/wasl-tech-horizontal.svg`
- `assets/brand/wasl-tech-horizontal-white.svg`
- `assets/brand/favicon.svg`

Rules:
- never redraw;
- never stretch;
- never retype the wordmark;
- never recolor the approved artwork;
- never crop away meaningful logo geometry;
- use the white variant on approved dark surfaces rather than CSS-filtering the primary logo.

### Typography

Arabic:
**IBM Plex Sans Arabic**

English:
**IBM Plex Sans**

Weights currently supported:
400 / 500 / 600 / 700.

Typography is language-aware:
- Arabic documents use IBM Plex Sans Arabic;
- English documents use IBM Plex Sans;
- fallback fonts are system-only fallbacks, not alternative brand choices.

No replacement font is allowed without explicit approval.

### Core brand colors

Primary Navy:
`#14305F`

Primary Teal:
`#0E8889`

Accessible Teal Dark:
`#096B70`

Navy leads. Teal is a controlled accent.

Base Teal is not used for small normal text on white because the darker Teal role provides stronger contrast.

### Canonical palette

The VNext token system preserves the existing published identity scales:

Navy:
- 50 `#EAF0F7`
- 100 `#D6E1EF`
- 200 `#AEC3DE`
- 300 `#819FC7`
- 400 `#5579AC`
- 500 `#315A91`
- 600 `#234678`
- 700 `#14305F`
- 800 `#10264B`
- 900 `#0B1B38`
- 950 `#071127`

Teal:
- 50 `#E9F8F7`
- 100 `#CFF0ED`
- 200 `#9DDED8`
- 300 `#66C9C0`
- 400 `#37B2AA`
- 500 `#0E8889`
- 600 `#0B7678`
- 700 `#096B70`
- 800 `#07565B`
- 900 `#064448`

Supporting neutrals are cool/slate-based so they visually belong with Navy/Teal:
- canvas `#FFFFFF`
- subtle `#F5F8FA`
- border `#D8E1EA`
- muted `#657386`
- secondary text `#46566F`
- primary text `#0B1730`

Functional success/warning/danger colors exist for interface feedback only and must not become decorative brand colors.

### Token ownership

Raw palette:
`src/styles/tokens.css`

Semantic roles:
`src/styles/brand.css`

Typography contracts:
`src/styles/typography.css`

Brand metadata/assets:
`src/config/brand.js`

Components consume semantic roles such as:
- `--color-brand-primary`
- `--color-brand-accent`
- `--color-bg-canvas`
- `--color-text-primary`
- `--color-border-default`

Do not scatter raw hex values through page/component CSS when a semantic role exists.

CI must fail if the canonical primary colors, IBM Plex contracts, or official asset paths disappear.

## 3. Rules retained from UPDATE CARD

These remain mandatory:

### Compact controlled density
- no giant empty sections by default;
- every section earns its height;
- desktop feels composed, not stretched;
- mobile is edited, not a desktop stack.

### Disciplined surfaces
Use a small surface vocabulary:
- white/canvas;
- soft neutral;
- Navy emphasis;
- image-led surface.

Do not invent a new card/surface treatment for every section.

### Restrained geometry
Typical targets:
- controls: 8–10px radius;
- cards/panels: 10–14px;
- major visual panels: 16–20px.

Shadows are subtle and functional.

### Image-led storytelling
Every image needs:
- a reason;
- aspect ratio;
- focal point;
- desktop crop;
- mobile crop.

Real work beats generic stock.

### Reusable contracts
Same function = same component behavior.

Shared contracts include:
- Header
- Footer
- PageHero variants
- SectionHeader
- Button
- TextLink
- ResponsiveImage
- ServiceCard
- ProjectCard
- FAQ
- CTA
- form fields
- project/service metadata

### Mobile discipline
- two-up cards where content remains readable;
- short copy;
- compact gaps;
- no accidental single-column 7000px pages;
- no horizontal document overflow;
- touch targets about 44px.

## 4. Anti-AI / anti-template bans

Reject by default:
- generic blue/purple gradients;
- decorative gradients;
- glowing technology scenes;
- particles;
- blobs/waves;
- floating circles/badges;
- random 3D;
- fake dashboards;
- fake UI copy;
- stock-office imagery;
- icon-in-circle feature grids everywhere;
- centered text everywhere;
- all sections built as equal cards;
- glassmorphism as a theme;
- every section using the same layout;
- auto-playing carousels;
- decorative parallax;
- continuous floating motion.

Bento is optional, never a default.

## 5. Composition principle

**One visual idea per section.**

Use the composition appropriate to the information:
- editorial row;
- split;
- structured list;
- comparison;
- timeline/process;
- image-led proof;
- asymmetric showcase;
- compact band;
- card grid only for truly comparable entities.

Do not put normal paragraphs inside cards merely to decorate them.

## 6. Page Hero system

Do not repeat one Hero template everywhere.

VNext has five hero modes:

### Brand Hero
Homepage positioning and main action.

### Directory Hero
Services / portfolio discovery.

### Detail Hero
Individual service.

### Evidence Hero
Case study/project.

### Action Hero
Contact/project planner.

All modes share typography, spacing grammar, brand tokens, button contracts, and image quality.

A Hero should normally contain:
- orientation/kicker;
- one H1;
- one supporting block;
- one primary action;
- optional secondary action;
- one strong visual or meaningful metadata.

No oversized empty hero.

## 7. Typography and content hierarchy

Hierarchy:
1. eyebrow/kicker = orientation;
2. heading = idea;
3. support copy = explanation, not repetition;
4. metadata = secondary evidence;
5. action = next step.

Headings must carry meaning, not merely repeat the section name.

Prefer readable line lengths and compact paragraphs.

## 8. Section rhythm

Recommended starting ranges, adjusted by content:
- desktop section gap: 56–84px;
- tablet: 44–64px;
- mobile: 32–48px.

These are guides, not magic constants.

Spacing should come from tokens, not one-off pixel values.

## 9. Motion

Motion exists to:
- confirm state;
- guide hierarchy;
- transition UI;
- support exploration.

Typical micro-interaction duration:
120–250ms.

Mandatory:
- transform/opacity when animation is needed;
- reduced-motion alternative;
- no hidden-essential-content dependency on animation.

## 10. Visual proof

Proof priority:
1. real project screenshot;
2. case study;
3. verified deliverable;
4. verified process;
5. verified client/project metadata;
6. verified technology.

Decoration is never a substitute for proof.

## 11. Dark mode / themes

Theme capability must not be removed silently.

If the VNext shell exposes dark mode:
- use token-driven surfaces;
- preserve brand identity;
- never invert the logo incorrectly;
- keep native controls readable;
- verify every public route.

If product review decides not to expose a theme toggle, document the decision before removing the behavior.

## 12. Craft acceptance questions

Before approving a page:
- Can its hierarchy be understood in five seconds?
- Does each section have one job?
- Is any card unnecessary?
- Is the image proving something?
- Does mobile feel designed rather than stacked?
- Is the page recognizably Wasl Tech?
- Does anything look like generic AI marketing?
- Can something be removed without losing meaning?

If yes to the last question: remove it.
