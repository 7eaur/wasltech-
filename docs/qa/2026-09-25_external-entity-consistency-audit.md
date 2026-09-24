# Wasl Tech — External Entity Consistency Audit

Date: 2026-09-25  
Phase: 8 — External authority & entity consistency

## Findings

Search currently distinguishes `wasl-tech.com` from several unrelated entities with similar “Wasl Tech” naming, but name collision is material enough that the canonical domain, Yemen + Gulf market context, services, and contact data should remain part of the entity signal.

The website configuration contains official social/contact URLs, but public search did not reliably surface the exact configured social handles during the audit.

## Implemented

- added canonical entity description and disambiguating description to site configuration;
- Organization schema now exposes the verified description, disambiguating description and slogan;
- WebSite schema shares the canonical entity description;
- Organization `sameAs` now uses a deliberately curated canonical-profile list rather than every Footer social URL;
- excluded the current Facebook share URL from `sameAs`;
- added an executable entity-consistency release gate;
- created `docs/core/EXTERNAL_ENTITY_PROFILE.md` as the external profile contract.

## External work requiring account access

- align each owned social profile name/bio/domain with the canonical contract;
- verify the canonical Facebook page/profile URL before adding it to schema;
- connect Search Console / Google Business Profile / social analytics where applicable;
- pursue legitimate client/partner/editorial mentions rather than backlink schemes.

## Phase decision

Website-side Phase 8 work is complete once release verification is green. Account-side consistency remains an operational task and must not block the code branch.
