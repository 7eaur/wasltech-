# Wasl Tech — Cross-branch release compatibility snapshot

Date: 2026-10-12. Review-only. Branch: `fix/independent-site-recovery-20261010`. Captured while Draft PR #46 HEAD was `bf33f55beed006bf834bb12a47d980a92e144328` and the target integration PR #45 HEAD was `7366ed3c2dd8c1755ff040e0570192ead0cafad5`.

## Current dependency chain

- PR [#46](https://github.com/7eaur/wasltech-/pull/46): independent recovery, **Draft**, base `integration/site-stabilization-20261010` (PR #45), GitHub reported `mergeable=true` at the snapshot. This does **not** authorize merging.
- PR [#45](https://github.com/7eaur/wasltech-/pull/45): integration work, **Draft** to `main`. Main is not receiving this change.
- PR [#42](https://github.com/7eaur/wasltech-/pull/42), [#43](https://github.com/7eaur/wasltech-/pull/43), [#44](https://github.com/7eaur/wasltech-/pull/44): other Draft work already represented in integration history to a degree; validate exact changes before choosing any merging sequence.
- SEO PR [#37](https://github.com/7eaur/wasltech-/pull/37): Draft, diverged from `main`, GitHub `mergeable=false` in snapshot, overlapping paths with this recovery branch: **11** (including `src/pages/service-detail.js`, `scripts/check-service-details.mjs`, `src/styles/service-detail.css`, `src/styles/layout.css`, `package.json`, and status docs). This is a **merge review risk**, not proof of a textual conflict.
- SEO PR [#36](https://github.com/7eaur/wasltech-/pull/36): Draft to main, 4 overlapping paths (primarily `package.json` and status/docs). SEO owner must decide whether #36 or #37 is authoritative.
- Logo PR [#41](https://github.com/7eaur/wasltech-/pull/41): Draft against VNext foundation, overlap in `package.json` and `scripts/build.mjs` (2 files). No edits to its animation assets from this branch.

## Release gates (still OPEN)

1. Obtain review from SEO/domain owner for `www` vs apex canonical/redirect issue WT-IA-30, and review actual merge-result SEO checks. Do not change DNS here.
2. Review and test integration merge result at exact SHA and re-run VNext verify / capture matrix after resolving *verified* overlapping hunks (not merely same filenames).
3. Real-device Zoom 200/400%, NVDA/VoiceOver, iOS Safari and Android Chrome, cold-load/field CWV, real contact receipt, and authenticated case-study media remain independent requirements.
4. Explicit owner acceptance before production cutover or moving PR46/45 out of Draft. No branch deletion, merges, DNS, Production, SEO/Logo edits were carried out in this snapshot.
