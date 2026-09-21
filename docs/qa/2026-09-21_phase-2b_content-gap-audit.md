# Phase 2B — Content Gap Audit

Date: 2026-09-21  
Branch: `rebuild/vnext-foundation-20260921`

## Purpose

Phase 2 normalized legacy content. Phase 2B verifies whether that baseline is sufficient for the final Wasl Tech VNext experience, SEO architecture, service-detail pages and project/case-study pages.

Legacy content is not considered complete merely because it exists.

## Current baseline

- Services: 8
- Projects: 14
- General FAQ: 13
- Articles: 0
- Jobs: 0
- Arabic: baseline content exists
- English: content required

## Service gap audit

All 8 services currently have:
- stable id;
- stable slug;
- group;
- image;
- Arabic title;
- subtitle;
- description;
- audiences;
- deliverables/features;
- service process;
- service FAQ;
- CTA.

Important fields not yet complete as canonical final content:
- explicit customer problem/need;
- explicit scope boundaries;
- integrations/capabilities model;
- proof/evidence model;
- SEO title/description/search intent;
- Open Graph content;
- related article topics;
- final reviewed English copy.

Some fields may be drafted from verified existing facts. Business claims that cannot be established from repository evidence require user input.

## Project gap audit

All 14 projects currently have:
- stable id;
- stable slug;
- category;
- primary image;
- Arabic title;
- short summary;
- three highlights;
- related service id.

Project presentation model is intentionally simplified around one primary project image and the project story.

Remaining content work focuses on:
- public client/project attribution where useful;
- actual project scope;
- what Wasl specifically delivered;
- case-study overview;
- challenge/context where useful;
- delivered outputs/outcomes;
- SEO metadata;
- English copy.

No full case study should be published until evidence supports it.

## Page-level gaps

Final localized content still needs to be completed for:
- Home;
- About;
- Services directory;
- Portfolio directory;
- Process;
- Contact;
- Start Project;
- Insights;
- Careers;
- Privacy;
- Terms;
- 404.

These should live in canonical content/data owners rather than page markup.

## Article/SEO gaps

No articles exist yet.

Before publishing Insights:
- define topic clusters linked to the 8 services;
- prioritize real customer search intent;
- define article metadata and internal-link relations;
- prepare useful original Arabic content;
- prepare reviewed English equivalents where appropriate.

Do not publish filler articles for volume.

## User/business inputs — priority

### Priority A — strongest proof
For projects:
- permission/public client name where needed;
- what Wasl built;
- concrete delivered output/outcome.

Project media is intentionally limited to the single primary image already assigned to each project.

### Priority B — service truth
Confirm only where relevant:
- support/maintenance offer;
- common integrations/capabilities;
- whether timelines/ranges should be shown;
- whether any pricing should ever be public;
- important exclusions/dependencies.

### Priority C — company/legal
When implementation reaches those pages:
- approved social channels;
- analytics/cookie behavior;
- privacy/data handling facts;
- legal/company wording that must be included.

## Working rule

Ask the user for facts/evidence, not finished marketing copy.

The implementation team writes:
- final Arabic copy;
- final English copy;
- SEO metadata;
- CTA/microcopy;
- page section copy;

using verified facts and the Wasl writing standard.

## Result

Current data is **PARTIAL but structurally sound**, with the simplified one-image project presentation model now locked.

Phase 3 final visual work should not begin until the representative service/project/page content shapes are sufficiently known for realistic design testing.
