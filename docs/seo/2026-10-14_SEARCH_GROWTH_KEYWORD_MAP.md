# Wasl Tech — Search Growth Keyword & Intent Map
Date: 2026-10-14
Status: Phase 1 baseline
Property: sc-domain:wasl-tech.com
Canonical: https://wasl-tech.com

## Objective
Move Wasl Tech from primarily branded discovery to non-branded commercial discovery for people searching for digital services without knowing the brand first.

## Baseline
- Brand & name discovery: 340 impressions over the 2026-07-14 to 2026-10-11 baseline window, average position ~10.1.
- Service clusters currently have no measurable query impressions in Search Console.
- Search visibility already exists for brand-adjacent terms such as Wasl / وصل / وصلتك / موقع وصلك.
- The new canonical service pages are still being re-crawled and indexed, so changes must be incremental and measured.

## Search ownership map

| Search family | Primary landing page | Primary intent | Supporting terms |
| --- | --- | --- | --- |
| Wasl Tech / وصل تك / حلول تقنية | / | Brand + broad commercial | وصل تك، Wasl Tech، حلول رقمية وتقنية، حلول تقنية، اليمن، الخليج |
| تصميم مواقع / تصميم مواقع احترافية | /services/web-development/ | Commercial | تصميم موقع، تطوير مواقع، برمجة مواقع، مواقع شركات، تصميم مواقع اليمن |
| برمجة تطبيقات | /services/mobile-app-development/ | Commercial | تطوير تطبيقات، تصميم تطبيقات، Android، iOS، تطبيق جوال |
| متجر إلكتروني | /services/ecommerce/ | Commercial | تصميم متجر إلكتروني، برمجة متجر، إنشاء متجر إلكتروني |
| برمجة أنظمة | /services/custom-software/ | Commercial | أنظمة مخصصة، لوحات تحكم، API، قواعد بيانات، أتمتة |
| حلول تقنية | /services/technical-solutions/ | Commercial / problem-led | حلول تقنية، حلول رقمية، ربط أنظمة، تكاملات، أتمتة |
| بروفايل شركة | /services/company-profiles/ | Commercial | تصميم بروفايل شركات، ملف تعريفي شركة، Company Profile |
| هوية بصرية | /services/brand-design/ | Commercial | تصميم هوية، تصميم شعار، هوية تجارية |
| تسويق رقمي | /services/digital-marketing/ | Commercial | تسويق إلكتروني، إدارة محتوى، إدارة حسابات، حملات رقمية |

## Rules
1. One canonical landing page owns each commercial search family.
2. Do not create doorway pages for cities or duplicate service pages.
3. Use Yemen and Gulf modifiers only where they are factually relevant and natural.
4. Keep the brand slogan and visual hierarchy; SEO changes should not turn the page into keyword copy.
5. Projects and articles support the owning service page through internal links instead of competing with it.
6. Measure changes through branded vs non-branded performance and topic clusters.

## Phase 1 implementation
### Homepage
Own broad company/entity intent:
- وصل تك
- Wasl Tech
- حلول رقمية وتقنية
- حلول تقنية
- اليمن والخليج

### Web development
Own:
- تصميم مواقع
- تصميم مواقع إلكترونية
- تصميم مواقع احترافية
- تطوير مواقع
- برمجة مواقع
- تصميم مواقع للشركات
- تصميم مواقع اليمن

## Next phases
- Phase 2: Mobile apps + ecommerce.
- Phase 3: Custom software + technical solutions.
- Phase 4: Branding + company profiles + digital marketing.
- Phase 5: Case-study internal linking and decision-stage content.
- Phase 6: External entity/reputation signals and link acquisition based on real mentions and partnerships.

## Measurement
Track:
- Non-branded impressions and clicks.
- Query count per service cluster.
- Position movement: >20 -> 11-20 -> 4-10 -> 1-3.
- CTR for pages already ranking in the top 10.
- Indexation/canonical stability before larger content changes.


## Full-site implementation status — 2026-10-14

Completed in branch `seo/full-site-search-growth-20261014`:

- Homepage positioning updated to "حلول رقمية وتقنية" without describing Wasl Tech as a company.
- General pages refined: About, Services, Portfolio, Process, Contact, Project Planner, FAQ, and Insights.
- All eight Arabic and English service pages aligned to distinct commercial search intent.
- Existing three articles refined for clearer search intent.
- Five new practical guides added for mobile apps, custom systems/technical solutions, brand identity, profiles, and digital marketing.
- Every service now has at least one published related guide.
- Service pages automatically surface related guides through the existing `ServiceGuidance` component.
- Article pages automatically link back to their related service paths.
- No city doorway pages or duplicate service landing pages were introduced.
- Public-facing Wasl Tech positioning avoids the word "شركة"; generic client/service terminology remains only where it describes the client's context or the service itself.

### Published guide coverage

| Service family | Supporting guide |
| --- | --- |
| Websites | Website vs web system; prepare website content |
| Mobile apps | What to prepare before mobile app development |
| E-commerce | Decisions before building an e-commerce store |
| Custom software | When a custom system is justified |
| Technical solutions | When a custom system is justified |
| Profiles | Profile content checklist |
| Brand identity | Brand identity brief preparation |
| Digital marketing | Goal-led content and marketing plan |
