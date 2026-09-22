# Phase 13 QA — Homepage Visual Redesign

Date: 2026-09-22  
Repository: `7eaur/wasltech-`  
Branch: `rebuild/vnext-foundation-20260921`

## Scope

This checkpoint covers the approved homepage visual/content direction only. It does **not** mean Phase 13 is complete across the whole site.

The user approved:
- a calm, elegant, profile-inspired visual direction;
- the published `main` homepage as a visual-direction reference only, not as architecture or canonical wording;
- the final homepage sequence:
  1. Hero
  2. Services
  3. Selected Work
  4. About the Wasl Tech team
  5. Why Wasl Tech
  6. How We Work
  7. Short FAQ
  8. Compact final CTA
  9. Footer
- all 8 services remain visible on Home;
- About and Why Wasl Tech remain separate;
- no unsupported numeric counters;
- narrative wording uses `فريق وصل تك / Wasl Tech team`;
- Home FAQ stays at 3 questions;
- final CTA is intentionally smaller than the Hero.

## Implementation

Homepage implementation changed through these commits:
- `98e9f4ab2c542da1f6ff9a8760d8bec45d5b063e` — marketing homepage copy;
- `d3559c2540a4d783ff77ae9399fffa831ad2ee92` — refined profile-inspired homepage layout;
- `b0a4381de25bf91d7e150208433248e0070e750b` — homepage editorial media copied into build;
- `736245247522c353af3e333d38ea7c91b3254b78` — approved homepage sequence/service/FAQ guards;
- `dcbd8def11c4db30e14f2d7cdf694e988ac52ec4` — spacing-token fix.

Current visual-capture checkpoint SHA:
`4c034ec2276ab3ba96436d35d263db915236043a`

The two commits after the implementation checkpoint only improve screenshot capture behavior:
- preload lazy media for capture;
- avoid sticky-scroll capture artifacts.

They do not change the public homepage composition.

## Files changed

Runtime:
- `src/pages/home.js`
- `src/data/pages.js`
- `src/styles/home.css`
- `scripts/build.mjs`
- `scripts/check-home.mjs`

Canonical documentation:
- `docs/core/DESIGN_SYSTEM.md`
- `docs/core/CONTENT_IA.md`

## Automated verification

### VNext verify
Run:
`35677121641`

Result:
**SUCCESS**

Verified on:
`4c034ec2276ab3ba96436d35d263db915236043a`

Artifacts:
- preview: `wasltech-vnext-foundation` — artifact `10673711495`
- release candidate: `wasltech-vnext-release-candidate` — artifact `10673746371`

### Homepage visual capture
Run:
`35677121570`

Result:
**SUCCESS**

Screenshot artifact:
- `wasltech-vnext-homepage-screenshots`
- artifact id: `10674085957`
- digest: `sha256:4317be0be4fcaab6787b08d621ef2aed18483f1114922f2c938ca6d2e1e808a1`

Captured:
- Desktop: 1440px full-page
- Mobile: 390px full-page

The capture workflow also checks for horizontal overflow before saving screenshots.

## Guard coverage

`scripts/check-home.mjs` now verifies:
- canonical bilingual Home H1/SEO;
- all 8 service cards exist;
- all service images are referenced;
- selected projects exist with real assets;
- editorial homepage images resolve;
- section order is exactly Services → Work → About → Why/Approach → Process → FAQ;
- Home contains exactly 3 FAQ items.

## Visual status

Homepage redesign is **implemented and technically verified**.

User visual acceptance of the latest real implementation screenshots should be the first action in the next conversation before propagating the visual direction across the remaining route families.

Do not call Phase 13 complete until the whole cross-page screenshot matrix is reviewed and accepted.

## Next action

1. Fetch live branch HEAD.
2. Retrieve or regenerate the latest homepage screenshots from artifact `10674085957`.
3. Review Desktop 1440 + Mobile 390 with the user.
4. Fix any homepage visual issue from root cause.
5. Once Home is accepted, apply the approved visual language to the rest of Phase 13:
   - Services Directory
   - Service Details
   - Portfolio
   - Project Details
   - About
   - Process
   - Contact
   - Project Planner
   - FAQ/Insights/Careers/Legal
   - shared Header/Footer
6. Build the full breakpoint matrix: 360 / 390 / 768 / 1024 / 1366 / 1440, Arabic + English.
7. Rerun all VNext preview/release/quality gates.
8. Document Phase 13 completion only after visual acceptance.
