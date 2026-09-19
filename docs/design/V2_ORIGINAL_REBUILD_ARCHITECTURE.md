# Wasl Tech — V2 Original Rebuild Architecture

Status: ACTIVE — USER REQUESTED FULL REBUILD
Branch: `rebuild/v2-home-architecture-20260920`
Baseline: `main@94f6df278f9e8af0d58376f744a296eb9a93b853`

## Why this rebuild exists

A real-browser visual audit on 2026-09-20 showed that the current implementation is technically functional but visually over-explained, repetitive, section-heavy, and too close to a generic consulting/landing-page pattern.

The user explicitly requested a fresh rebuild:
- no copying existing page layouts,
- no carrying old section compositions forward,
- no filler marketing copy,
- no template-like card walls,
- strong page-by-page architecture,
- homepage first, with visual approval before moving on.

## What is preserved

Only verified source-of-truth material:
- approved Wasl Tech logo and identity colors,
- IBM Plex Sans Arabic / IBM Plex Sans,
- the 8 verified services,
- verified portfolio records and media,
- verified contact information,
- accessibility/performance/SEO requirements that remain valid.

Old visual compositions and old homepage copy are not design authority for V2.

## Original V2 direction

**Editorial Digital Studio**

The site should feel like a studio that designs and builds real digital products:
- confident rather than loud,
- visual rather than explanatory,
- product-led rather than card-led,
- concise Arabic copy,
- real work used as proof,
- large controlled typography,
- deliberate image cropping,
- fewer but stronger sections.

No gradients, fake dashboards, generic 3D, decorative blobs, stock imagery, icon grids, or repetitive cards.

## Homepage V2 architecture

### 1. Hero — proposition first
Purpose: explain Wasl Tech in one screen.

Content:
- brand kicker,
- one direct headline,
- one short supporting paragraph,
- two actions,
- compact capability rail with 3 groups:
  - منتجات رقمية,
  - أنظمة وحلول,
  - هوية وحضور.

Visual:
- no enclosing hero card,
- one dominant real project image,
- image caption integrated as editorial metadata.

### 2. Selected work — proof before claims
Purpose: establish credibility through actual work.

Composition:
- deep Navy surface,
- one large featured project,
- two supporting projects,
- asymmetric editorial grid,
- real project imagery only.

### 3. Service index — no catalog fatigue
Purpose: expose all 8 services without an icon-card wall.

Composition:
- sticky/anchored section statement on desktop,
- numbered service rows,
- grouped into product/technology and identity/presence,
- every row links directly to its service route.

### 4. Working principle
Purpose: explain the operating philosophy without duplicating the Process page.

Three concise principles only:
- نحدد الهدف قبل شكل الواجهة.
- نربط التصميم بالاستخدام الفعلي.
- نختار التقنية بقدر ما يحتاجه المشروع.

### 5. Conversion close
Purpose: one obvious next step.

Content:
- short question,
- direct project conversation CTA,
- secondary contact route.

## Mobile editing rules

Mobile is not a stacked desktop:
- hero copy comes before visual,
- capability rail becomes compact text rows,
- selected work becomes one strong project followed by two concise items,
- service rows stay rows, never become cards,
- no repeated explanatory paragraphs,
- no horizontal carousels required for core meaning,
- floating WhatsApp must not cover content,
- target homepage height is materially shorter than the audited 6881px version.

## Shell V2

For phased migration, V2 shell is enabled only on pages with `data-shell="v2"`.
This prevents half-rebuilt secondary pages from being accidentally restyled during Homepage approval.

Header:
- larger, better-balanced logo,
- concise navigation,
- one primary CTA,
- mobile hamburger has visual priority,
- theme control is visually secondary.

Footer:
- compact information architecture,
- no long duplicated service catalog,
- contact + primary navigation + identity only.

## Acceptance gate — Homepage only

Do not move to Services until user approval.

Required evidence:
- 1440×900 light screenshot,
- 390×844 light screenshot,
- 390×844 dark screenshot,
- mobile menu screenshot,
- no horizontal overflow,
- no console errors,
- no failed local assets,
- copy review for every visible sentence,
- self-critique against anti-template rules.
