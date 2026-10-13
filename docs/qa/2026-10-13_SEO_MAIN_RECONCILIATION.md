# Wasl Tech — SEO/Main Reconciliation Audit

Date: 2026-10-13 (Asia/Aden)  
Repository: `7eaur/wasltech-`  
Production branch: `main`  
Reconciliation branch: `seo/search-visibility-reconciled-20261013`  
Starting Production HEAD: `abbbe9e9e51533a4a8c9d75104f86805f8870bad`

## Why this branch exists

The historical SEO branch `seo/search-visibility-foundation-20260925` / PR #37 is no longer merge-safe. At the reconciliation audit it was 48 commits ahead but 163 commits behind current `main`, while October work had already shipped major responsive, media, 404, security, Planner and accessibility changes.

This branch therefore starts from current `main` and carries forward only still-valid search work. It must not replace October runtime or visual work with September versions.

## Live state checked before reconciliation

- Vercel Production is READY.
- `wasl-tech.com` and `www.wasl-tech.com` are both verified project domains.
- Approved canonical origin is now `https://wasl-tech.com`.
- Both custom domains currently point directly at Production; `www.wasl-tech.com`→`wasl-tech.com` redirect remains an explicit SEO release gate.
- PR #45 and PR #46 are merged; their October runtime changes are the base.
- SEO PR #37 remains Draft/unmerged and is superseded for future implementation by this reconciliation branch.
- Logo-motion PR #41 remains outside this scope.

## Carried forward from the historical SEO program

- explicit `OAI-SearchBot` allowance in production robots;
- canonical Organization/WebSite entity graph and stable `@id` references;
- verified external-entity contract and safe `sameAs` set;
- executable Search Visibility, AI Readiness and Entity Consistency release gates;
- real-domain production search smoke command;
- service→article and article→service internal relationships;
- legal footer links;
- SEO/AI operating rules, intent ownership and webmaster measurement documentation.

## October work deliberately preserved

- current responsive-image delivery and final media;
- current service detail disclosure/reading UX;
- current source ownership checks;
- current security-header routing;
- current localized 404 behavior;
- current Planner/navigation no-JS safeguards;
- current Node `24.x` contract;
- current production deployment/DNS state.

## Article publication integrity

Production currently has three genuinely published articles.

The four additional articles that existed only inside the old Draft SEO branch are **not** carried into the active runtime article collection, because the current data contract requires every article record to be genuinely published. Their copy remains available in historical PR #37 as candidate material only. Reintroduce them only after fresh editorial review and assign the real publication date of the approved release; do not backdate them to 2026-09-25.

## Remaining external / release gates

1. CI on the reconciled branch must pass Preview + Release + Search + AI + Entity checks.
2. Draft PR route matrix must pass on current October code.
3. Preview must be inspected for service guidance blocks, article relations, footer legal links and generated robots/sitemap/schema.
4. Configure one canonical host behavior: `https://www.wasl-tech.com/*` → `https://wasl-tech.com/*`.
5. Run `npm run vnext:check:production-search` only after the canonical redirect is live on the real domain.
6. Authorize/verify Google Search Console Domain Property and submit the sitemap.
7. Authorize/import/verify Bing Webmaster and the sitemap.
8. Record the first real search baseline; Phase 10 starts only after usable data exists.

## Merge rule

This branch is pre-publication work only. Do not merge it to `main` or change Production/DNS without explicit owner approval.
