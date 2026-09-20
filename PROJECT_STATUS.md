# Wasl Tech Website — Current Project Status

Last updated: 2026-09-20  
Production publish retriggered: 2026-09-20  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Current verified main after Phase 13 merge: `5bc890b3107f5923d1c06e6bab5931ebbf5d1625`

## Current execution state

The Refined Craft rebuild has completed **Phases 1–13 on main**. The current `main` build is live on Vercel; only the final screenshot/browser visual gate remains open.

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
12. Motion + Accessibility + Performance/Core Web Vitals + SEO/Semantics quality pass
13. Cross-page repository-level final QA + icon regression fix

Remaining release gate:
- execute the exact-head screenshot/browser matrix on the Vercel production build,
- close any visual/runtime regressions found there.

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
- Phase 12: `0ee23fd7b36d0ed38d8b9ba7335d8fc65781fe92` (PR #28, squash merge)
- Phase 13: `5bc890b3107f5923d1c06e6bab5931ebbf5d1625` (PR #29, squash merge)

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

## Phase 12 quality state

Phase 12 is merged. See:
`docs/design/PHASE_12_QUALITY_QA.md`

Implemented and verified from the live PR head:
- decorative reveal observer removed,
- continuous legacy particle/motion runtime removed,
- closed mobile navigation removed from focus order using `inert` / `aria-hidden`,
- skip-to-main link added,
- broken global Font Awesome resource path replaced by a minimal used-icon subset,
- Google Fonts `@import` waterfall removed,
- custom 404 server target corrected,
- robots/sitemap/FAQ schema/dynamic service metadata checked,
- dependency-free static quality gate added.

GitHub Actions runner limitation:
- the new `Site quality` workflow was triggered twice on PR #28,
- both attempts ended before Checkout with `runner_id: 0` and no executed steps,
- direct repository verification of the same invariants passed,
- therefore the workflow remains in place but hosted-runner execution is not treated as evidence of a code failure.

## Phase 13 quality state

See: `docs/design/PHASE_13_FINAL_QA.md`.

Phase 13 is merged via PR #29 (`5bc890b3107f5923d1c06e6bab5931ebbf5d1625`).

Repository-level findings:
- all 10 public surfaces and 8 dynamic service ids were rechecked,
- internal page/fragment targets resolved,
- dynamic service and portfolio image paths resolved,
- service modes, portfolio drawer behavior, contact validation behavior and reduced-motion runtime were reviewed from current source,
- a real regression was found in the minimal icon subset: 8 public runtime icons were unmapped,
- the missing glyph mappings were restored in `css/icons.css`,
- `scripts/site_quality_check.py` now guards runtime icon coverage,
- PR #29 `Site quality` run `35467612840` failed before any workflow step executed; the job exposed an empty step list, matching the earlier hosted-runner failure pattern.

Production runtime verified on Vercel:

- Project: `wasltech` (`prj_tp7lDumOID2XusRHkPvYayybihVe`)
- Production alias: `https://wasltech.vercel.app`
- Deployment: `dpl_FVJ9pEFJtkfVdP3rLTTvo9r5qMK3`
- State: `READY`
- Git ref: `main`
- Deployed commit verified: `27d732f98c6ec08deff865476546e9ee77420fa8`
- Home / Services / Portfolio / Contact returned HTTP 200 from Vercel.
- The live Vercel homepage exposes the current 8-service architecture.
- Vercel runtime error scan for the last hour returned no errors.
- `www.wasl-tech.com` is not currently treated as the release runtime until it is attached to this Vercel project/deployment.

## Current limitation / release gate

A screenshot-capable browser/preview for the exact Vercel production build was not available in this environment.

Therefore:
- repository-level Phase 13 QA/fixes are complete,
- exact-head Vercel production deployment is VERIFIED READY,
- final screenshot-based production visual approval remains OPEN,
- do not mark the site fully production-verified yet.

## Next task

Execute the final exact-head browser matrix against the current Vercel production build.

Final visual/runtime scope:
- cross-page Refined Craft normalization,
- Home / Services / all 8 service ids / Portfolio / About / Process / Contact / FAQ / Blog placeholder / 404,
- Desktop + Tablet + Mobile,
- Light + Dark + RTL,
- menu closed/open,
- portfolio drawer,
- service modes,
- contact validation,
- reduced motion,
- 0 horizontal overflow,
- 0 missing assets,
- 0 console errors,
- 0 dead links,
- image crop/focal point review,
- page density / spacing / surfaces / radius / shadow / CTA consistency,
- final runtime fix loop before completion claim.

Required output:
`docs/design/PHASE_13_FINAL_QA.md`
and then reconcile `PROJECT_STATUS.md` + `PROJECT_HANDOFF.md`.