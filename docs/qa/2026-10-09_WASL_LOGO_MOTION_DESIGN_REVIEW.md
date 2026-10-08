# Wasl Tech — Logo Motion Design Review
Date: 2026-10-09
Status: Five concepts for user approval / preview only
Repository: `7eaur/wasltech-`
Target branch: `rebuild/vnext-foundation-20260921`
Working branch: `design/wasl-logo-motion-preview-20261009`

## Root cause of the earlier incorrect prototypes
The official horizontal SVG contains **three paths**: two icon paths nested inside one transformed `<g>`, plus a third **independent direct-child `<path>` for the wordmark**. The first prototype copied only the `<g>`, omitting the lettering. This was a structural error, not an aesthetic preference.

## Source of truth
Original asset: `assets/brand/wasl-tech-horizontal.svg`.
Identity: Navy `#14305F`, teal `#0E8889`, dark teal `#096B70`.
No logo redraw, retyping, geometric edits, or decorative glowing/3D effects. All five variants clone the entire original SVG and only animate visibility and placement temporarily. The original image remains the fallback if the script or asset fetch fails.

## Five distinct concepts
1. **تشكُّل الهوية / Sequential Assembly** — two symbol parts followed by original wordmark; recommendation for a restrained corporate intro.
2. **مسار الوصل / Signature Sweep** — directional mask and 2px teal timing edge, right to left.
3. **نقطة التقاء / Convergence** — symbol and wordmark arrive gently from opposite directions.
4. **من الحدود إلى الهوية / Form to Colour** — official icon paths transition from fine vector outlines to original filled shape, then the wordmark.
5. **حضور هادئ / Calm Presence** — unified short rise/fade and a minimal disappearing teal line.

## Interaction and guardrails
- Every card has replay and full-entry simulator controls.
- Simulator preserves an underlying sample home screen and fades the optional intro away rather than cutting abruptly; Escape and a visible close button return to the gallery.
- Animation is disabled for `prefers-reduced-motion`.
- No third-party animation libraries; no changes to shared VNext runtime.
- The preview page is `noindex,nofollow`. It is only copied for normal preview builds or `VERCEL_ENV=preview`, never deployed into an actual Vercel Production release from `main`.
- The preview deployment is protected by Vercel Authentication; access must use a Vercel Shareable Link, not a plain `.vercel.app` URL.

## Verification
- Confirmed the production asset URL on Vercel returned HTTP 200, SVG path count = 3, icon group path count = 2.
- Confirmed the preview route returned HTTP 200 and HTML contained five options and 12 explicit-type control buttons.
- Verified inline JavaScript syntax and original source cloning algorithm.
- Exact-head GitHub CI for commit `eb74cc9eecc32ec7ade487767c15bd29a7e7e0ed`: **SUCCESS** (build, VNext preview/release checks and dedicated five-logo-motion regression test).
- Vercel deployment `dpl_EgVmhGzLyX49Pz8qNgC9dnSKdBiR`: READY.
- Caveat: automated build/structure checks and route fetches do not prove rendered animation looks perfect on every browser; final phone/desktop visual acceptance is still needed.

## Decision
No merge/cutover until user selects one and the appearance is approved. All future integration uses session-only nonblocking intro, network fallbacks and reduced-motion safeguards.
