# Phase 3 — Homepage Architecture QA

Date: 2026-09-19
Branch: `design/refined-craft-rebuild-20260919`
Status: STATIC GATE PASSED / RUNTIME VISUAL GATE PENDING

## Architecture
Homepage rebuilt as a compact seven-role journey:
1. contained Product + Brand hero,
2. short Wasl Tech introduction,
3. complete 8-service editorial directory,
4. diverse verified work showcase,
5. compact process explanation,
6. contextual FAQ,
7. contained conversion close.

## Craft decisions
- One primary project visual in Hero.
- Mascot is anchored as a brand asset; no floating/random motion.
- Removed the previous multi-image Hero collage.
- Services are editorial rows rather than equal service cards.
- Four work items are shown because projects are legitimate bounded entities.
- Process uses a single dark contained surface.
- Closing CTA is contained, solid Navy/brand color, no decorative gradient.

## Static verification
- H1: 1
- Service coverage: 8/8
- Featured work: 4
- FAQ items: 4
- Missing image assets: 0
- Literal dead `href="#"`: 0
- Duplicate IDs: 0
- Mojibake: 0
- Gradients in craft-system.css: 0
- Mobile <=430 rules: present
- Reduced-motion rules: present

## Runtime gate
Automated browser QA is currently blocked by GitHub Actions runner allocation. Do not merge the draft PR until real screenshots are reviewed.
