# Wasl Tech — Phase 9 Pre-Publication Webmaster Readiness

Date: 2026-09-25  
Phase: 9 — Webmaster integrations & measurement

## Ready now

- canonical sitemap is generated and release-tested;
- robots declares the sitemap and allows public crawling;
- canonical/hreflang/indexability release gates are green;
- OAI-SearchBot policy is explicit;
- Google Search Console Domain-property strategy is defined;
- Bing import/measurement strategy is defined;
- IndexNow activation is intentionally deferred until a reliable Production-deployment trigger exists;
- real-domain search smoke script is prepared for publication.

## External dependency

Actual Search Console/Bing ownership cannot be completed responsibly before:
1. the approved release is on Production;
2. `www.wasl-tech.com` is connected as the canonical host;
3. the user authorizes the relevant Google/Bing account and DNS verification.

This is an external verification dependency, not a code blocker.

## Publication gate

Do not mark Phase 9 fully complete until:
- Domain property `wasl-tech.com` is verified in Google Search Console;
- canonical sitemap is submitted/accepted;
- Bing Webmaster is verified/imported;
- real-domain production search smoke passes;
- first measurement baseline is recorded.
