# Phase 3 — Homepage Refined Craft QA

Date: 2026-09-19
Branch: `design/refined-craft-phase3-home-20260919`
Status: STRUCTURE / CONTENT / ASSET GATE PASSED

## Architecture
The homepage is rebuilt into seven primary visual blocks:
1. contained hero shell,
2. project-start / positioning block,
3. eight-service discovery block,
4. selected real work,
5. concise four-stage process,
6. contextual FAQ,
7. branded closing CTA.

Two semantic service groups are nested inside the service block, so the HTML contains 9 `section` elements while the visual architecture remains 7 primary blocks.

## Craft decisions
- Replaced the multi-floating-image hero with one strong verified project image.
- Integrated proof/capability facts into the hero shell instead of a separate tall band.
- Combined company positioning and client-start scenarios into one compact editorial split.
- Preserved all 8 official services without an equal-card wall.
- Uses four verified project examples across web/app/store/identity.
- Uses a dark Process pause only once.
- FAQ stays editorial and compact.
- Final CTA is concise and brand-led.

## Performance correction
The decorative mascot `assets/4.png` was removed from the hero after verification showed an approximate transfer size of 732 KB while it was only displayed at a very small size.

The remaining homepage raster proof images are approximately:
- project_1.jpg — 64 KB
- project_6.jpg — 83 KB
- project_10.jpg — 76 KB
- project_7.jpg — 93 KB

## Static verification
- H1: 1
- Official service coverage: 8/8
- Invalid service routes: 0
- Images: 5
- Missing alt: 0
- Missing explicit dimensions: 0
- Literal dead `href="#"`: 0
- Mojibake: 0
- Gradients in `home.css`: 0
- Decorative mascot reference: 0
- Mobile breakpoint: present
- Dark-mode overrides: present
- Reduced-motion handling: present

## Runtime visual boundary
Browser screenshot infrastructure is unavailable in the current execution environment. No screenshot claim is made. Final runtime Desktop/Mobile Light/Dark acceptance remains a mandatory cross-page release gate.
