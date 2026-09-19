# Wasl Tech Website — Current Project Status

Last updated: 2026-09-19  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Current verified HEAD at handoff creation: `9a0204f28c3075f0cddae3b5ae94c45ec84c7a39`

## Current execution state

The Refined Craft rebuild has completed **Phases 1–11**.

Completed:
1. Global Design System & Layout Architecture
2. Shared Header / Navigation / Footer shell
3. Homepage rebuild
4. Services directory rebuild
5. Adaptive service-detail rebuild
6. Portfolio rebuild
7. About rebuild
8. Process rebuild
9. Contact rebuild
10. FAQ + secondary/public utility pages
11. Mobile + Dark Mode normalization

Remaining:
12. **Motion + Accessibility + Performance/Core Web Vitals + SEO/Semantics audit and fixes**
13. **Cross-page Refined Craft normalization + final runtime QA**

Do **not** restart the redesign from Phase 1.

## Latest merged phase commits

- Phase 1: `3640e35ecbd7fbf6039253118a2500919fa525b6`
- Phase 2: `fab4c0abc5b0bbe3b770179be400a8e5ed08c1da`
- Phase 3: `d22278c4e97ae00a17a7b4ccf39862e3e569bee5`
- Phase 4: `dd690aa48de01a285216e7bc86d5d1695623e6c3`
- Phase 5: `0ec3eb4d5f38708f612a6b2a249e9cd5c6ed0927`
- Phase 6: `23bcb5d795e3ee07ad7ba7f49e8735a74f7211e6`
- Phase 7: `c345254c7aa0a4b5e109154df95df933aa1ceeb5`
- Phase 8: `6b89ce7f0a8544b48976e1161271504ec8070aa7`
- Phase 9: `8393a9b9a9022faab58fb29555ead7d4068663a6`
- Phase 10: `99171be786a640f291bb81aa3ca3d703a7af9153`
- Phase 11: `9a0204f28c3075f0cddae3b5ae94c45ec84c7a39`

## Current product facts from live code

### Services
The current dynamic service keys in `js/services-data.js` are:
- `web`
- `app`
- `store`
- `programming`
- `tech`
- `profiles`
- `design`
- `marketing`

Service details remain one maintainable dynamic route:
`service-web.html?id=<service-id>`

The sitemap currently contains all 8 dynamic service routes.

### Portfolio
- `js/portfolio.js` currently contains 14 project records.
- The portfolio uses an in-site detail drawer.
- Do not invent case-study metrics, results, technologies or client claims.

### Supporting pages
- FAQ has been rebuilt and has Phase 10 QA.
- Blog remains intentionally unpublished / outside primary navigation and should not be promoted without real content.
- A branded `404.html` exists.
- Contact does not perform fake backend submission; it prepares a structured WhatsApp request.

## Design authority

Read before making design changes:
1. `AGENTS.md`
2. `docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`
3. `docs/design/REFINED_CRAFT_REBUILD_PLAN.md`
4. relevant `docs/design/PHASE_*_QA.md`

The refined craft standard transfers the **discipline and organization** demonstrated by `7eaur/update_card`, but does not copy UPDATE CARD branding or page layouts.

Wasl Tech identity remains authoritative:
- Navy: `#14305F`
- Teal: `#0E8889`
- Accessible Teal Dark: `#096B70`
- IBM Plex Sans Arabic / IBM Plex Sans
- Official Wasl Tech logo assets only

## Important implementation architecture

Global layers:
- `css/variables.css` — tokens
- `css/craft-system.css` — global refined-craft primitives only
- `css/shell.css` — header/navigation/footer shell
- `css/responsive-normalization.css` — final responsive/dark guard layer

Do not turn `craft-system.css` into a page-specific mega-file.

Page-specific composition should stay in scoped/page styles.

## Hard rules

- No decorative gradients by default.
- No particles.
- No random glow.
- No floating decorative icon circles.
- No fake dashboard/UI text.
- No equal-card wall as a default layout.
- Cards must have a real interaction/content boundary.
- Real project imagery is preferred.
- One dominant visual idea per section.
- Mobile must be intentionally composed, not just stacked desktop.
- No fake success states.
- No dead `href="#"`.
- No invented business claims, metrics, platforms, delivery times, prices, SLAs or testimonials.
- Use `CONTENT REQUIRED` / `NOT VERIFIED` when evidence is absent.
- Target WCAG 2.2 AA.
- Preserve reduced motion.
- Minimum touch target target: 44×44px.
- Prevent horizontal overflow.

## Phase 11 verified normalization facts

`css/responsive-normalization.css` is loaded last on all 10 public pages checked:
- index
- services
- service-web
- portfolio
- about
- process
- contact
- faq
- blog
- 404

Phase 11 added:
- safe-area handling,
- 44px cross-page touch targets,
- mobile form font-size guards,
- long text/email wrapping,
- fixed/modal viewport guards,
- mobile action stacking,
- dark native form controls,
- strong focus-visible,
- reduced-motion reveal fallback,
- anchor scroll margins,
- theme-color synchronization.

Representative contrast ratios recorded in Phase 11 QA pass WCAG AA, with one important rule:
**base Teal `#0E8889` is not for normal-size text on white; use `#096B70`.**

## Current limitation / release gate

The current environment has not produced a reliable exact hosted/browser screenshot pass for the latest full Phase 1–11 state.

Therefore:
- do not claim final visual production approval yet,
- do not mark the site fully complete yet,
- Phase 13 must still perform the final cross-page runtime visual gate when browser/preview access is available.

## Next task

Start with **Phase 12**, from the current live `main` HEAD.

Phase 12 scope:
- remove/deactivate any remaining unnecessary motion,
- accessibility audit and fixes,
- semantics/keyboard/focus audit,
- performance and image-loading audit,
- Core Web Vitals-oriented fixes,
- dead CSS/JS/resource cleanup,
- SEO metadata/canonical/sitemap/structured-data audit,
- no business-content invention.

Then execute **Phase 13**:
- cross-page refined-craft critique,
- Desktop + Mobile,
- Light + Dark,
- representative breakpoints,
- navigation/menu,
- portfolio drawer,
- all 8 service routes,
- contact form,
- 404/FAQ,
- no overflow,
- no console/network errors,
- final fix loop before any completion claim.
