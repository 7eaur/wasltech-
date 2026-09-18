# Wasl Tech Website Design Protocol

## Direction
**The Tech-Forward Partner — الشريك التقني الذكي**

The website should feel like a capable digital partner: clear enough for non-technical clients, polished enough to demonstrate technical craft, and restrained enough to avoid template/AI aesthetics.

## Experience principles
1. Clarity over ornamentation.
2. Proof precedes promise.
3. Zero dead ends in important journeys.
4. Native responsive intent.
5. Rhythmic restraint.
6. One visual idea per section.
7. Brand identity is a source of truth, not a suggestion.

## Homepage narrative
Understand → Explore services → See proof → Understand process → Act.

## Services
Use the service taxonomy that exists in `js/services-data.js`. Do not invent new services.
The current dynamic route `service-web.html?id=...` remains maintainable; its presentation should adapt without cloning 20+ cards.

## Portfolio
Browse → Understand → Trust → Act.
Use only verified project fields from `js/portfolio.js`. Missing case-study content is marked `CONTENT REQUIRED`.

## Motion
Motion confirms state and hierarchy. Ambient motion must be minimal, non-essential, and disabled for reduced motion. No particles or decorative floating icon loops.

## Mobile
Preserve hierarchy, not desktop geometry. Remove decorative collisions, keep actions reachable, and do not replace long pages with carousels/accordions unless the content benefits from them.

## Verification
Desktop 1920×1080; laptop 1366×768; tablet 1024×768 and 768×1024; mobile 390×844 and 360×740. Verify RTL, light/dark, keyboard, reduced motion and no horizontal overflow.
