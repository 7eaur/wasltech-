# New Conversation Start Prompt — Wasl Tech

أنت الآن المسؤول الكامل عن متابعة مشروع موقع:

# وصل تك | Wasl Tech

Repository:
`7eaur/wasltech-`

لا تعتمد على ذاكرة محادثات سابقة، ولا على هذا البرومبت كبديل عن المستودع.

مهمتك هي استلام الحالة الحية الحالية للمشروع ثم إكمال العمل من آخر نقطة موثقة، بدون إعادة المراحل المنجزة وبدون اختراع متطلبات أو محتوى.

---

## 1. أول شيء إلزامي — Live Source of Truth

ابدأ فورًا من المستودع الحي:

1. Fetch للـ`main` HEAD الحالي.
2. لا تفترض أن الـHEAD المذكور في التوثيق ما زال الأحدث.
3. إذا كان هناك commit أحدث، اعتمده وفسّر الفرق.

ثم اقرأ بالترتيب:

1. `PROJECT_STATUS.md`
2. `PROJECT_HANDOFF.md`
3. `AGENTS.md`
4. `docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`
5. `docs/design/REFINED_CRAFT_REBUILD_PLAN.md`
6. `docs/design/PHASE_11_MOBILE_DARK_QA.md`
7. أي `PHASE_*_QA.md` تحتاجه لفهم الجزء الذي ستعمل عليه.

مهم جدًا:
`docs/design/QA_REPORT.md` ملف قديم Legacy/Superseded ولا يمثل الحالة الحالية.

ترتيب الحقيقة:
1. live repository code/assets
2. runtime/browser evidence
3. executable checks/QA
4. verified business content
5. approved Wasl Tech identity
6. current documentation
7. هذا البرومبت

إذا لم تتأكد من معلومة:
`NOT VERIFIED`
أو:
`CONTENT REQUIRED`

لا تخمن.

---

## 2. الحالة المتوقعة عند الاستلام

عند إنشاء آخر handoff كان آخر HEAD موثق:

`9a0204f28c3075f0cddae3b5ae94c45ec84c7a39`

لكن لا تعتمد عليه؛ تحقق حيًا أولًا.

آخر حالة موثقة:
- Refined Craft Phase 1 → COMPLETE
- Phase 2 → COMPLETE
- Phase 3 → COMPLETE
- Phase 4 → COMPLETE
- Phase 5 → COMPLETE
- Phase 6 → COMPLETE
- Phase 7 → COMPLETE
- Phase 8 → COMPLETE
- Phase 9 → COMPLETE
- Phase 10 → COMPLETE
- Phase 11 → COMPLETE

**نقطة الاستئناف الحالية: Phase 12.**

لا تعيد تصميم الصفحات المكتملة من الصفر بدون دليل جديد على Regression.

---

## 3. المرجع التصميمي

الاتجاه المعتمد:

**The Tech-Forward Partner — الشريك التقني الذكي**

المعيار الحاكم:

`docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`

المستخدم طلب أن يكون مستوى الصنعة والتنظيم قريبًا من المشروع:

`7eaur/update_card`

خذ منه:
- discipline,
- spacing,
- surface hierarchy,
- editorial composition,
- restrained shadows/radii,
- image-led storytelling,
- mobile editing,
- shared component contracts.

لكن **ممنوع** نسخ:
- الهوية،
- الألوان،
- الصفحة نفسها،
- المحتوى،
- Layout كقالب حرفي.

هوية Wasl Tech تبقى المصدر:
- Navy `#14305F`
- Teal `#0E8889`
- Accessible Teal Dark `#096B70`
- IBM Plex Sans Arabic / IBM Plex Sans
- الشعار الرسمي فقط.

---

## 4. قواعد تصميم لا تُكسر

ممنوع:
- gradients زخرفية كحل افتراضي،
- particles،
- glow،
- floating icon circles،
- fake dashboards،
- fake UI،
- random 3D،
- stock-looking imagery،
- كل شيء داخل Cards،
- شبكة 3 كروت متطابقة كحل افتراضي،
- توسيط كل شيء،
- Hero فارغ وضخم،
- حركة مستمرة بلا وظيفة،
- carousel تلقائي،
- decorative parallax.

اعتمد:
- editorial lists،
- split compositions،
- structured rows،
- real project imagery،
- controlled asymmetric layouts،
- one visual idea per section،
- compact density،
- mobile composed intentionally.

---

## 5. حقائق حالية مهمة

الخدمات الحالية في الكود = 8:
- `web`
- `app`
- `store`
- `programming`
- `tech`
- `profiles`
- `design`
- `marketing`

مسار التفاصيل:
`service-web.html?id=<service-id>`

لا تحولها لثمان صفحات ثابتة مكررة بدون سبب قوي.

معرض الأعمال:
- 14 مشروعًا في `js/portfolio.js`
- لا تختلق أرقام نتائج أو تقنيات أو Case Study غير موجودة.

التواصل:
- WhatsApp هو القناة الأساسية.
- النموذج لا يرسل Backend.
- يجهز رسالة واتساب فقط.
- لا تستخدم Fake Success.

Blog:
- غير منشور فعليًا.
- خارج التنقل الرئيسي.
- `noindex`.
- لا تخترع مقالات.

---

# 6. المهمة الحالية — Phase 12

ابدأ بعد الاستلام مباشرة في:

## Motion + Accessibility + Performance/Core Web Vitals + SEO/Semantics

لا تكتفِ بتقرير.

نفذ الإصلاحات الفعلية داخل Branch جديد مبني من آخر `main`.

### A. Motion
افحص كل CSS/JS:
- animations,
- transitions,
- IntersectionObserver,
- reveal effects,
- floating utilities,
- drawers,
- menu.

احذف/عطّل أي حركة:
- زخرفية،
- مستمرة،
- مكلفة،
- تخفي المحتوى،
- بلا وظيفة.

أبقِ فقط Functional Motion خفيفة.

تحقق من:
`prefers-reduced-motion`

### B. Accessibility — WCAG 2.2 AA target
راجع:
- semantic HTML,
- landmarks,
- heading hierarchy,
- labels,
- ARIA,
- focus order,
- `:focus-visible`,
- keyboard navigation,
- Escape,
- mobile menu,
- portfolio drawer,
- form validation,
- details/summary,
- alt text,
- touch targets,
- contrast.

أصلح فعليًا.

### C. Performance / CWV
راجع فعليًا:
- LCP candidate,
- hero image loading,
- `fetchpriority`,
- lazy/eager usage,
- explicit dimensions,
- fonts,
- dead/duplicate CSS,
- dead JS,
- unused assets where safe,
- render-blocking resources,
- layout shift risks,
- interaction overhead.

لا تدّعي LCP/INP/CLS أرقامًا إلا إذا تم قياسها فعلًا.

### D. SEO / Semantics
راجع:
- title,
- meta description,
- canonical,
- OpenGraph,
- robots/noindex,
- sitemap,
- structured data,
- heading hierarchy,
- crawlable content,
- organization schema,
- FAQ schema.

لا تخترع Business Facts.

---

## 7. طريقة التنفيذ

استخدم الدورة:

**Understand → Audit → Fix Root Cause → Run → Verify → Critique → Fix Again → Document → PR → Merge**

أنشئ Branch واضح من آخر `main`.

بعد Phase 12 أنشئ:

`docs/design/PHASE_12_QUALITY_QA.md`

وسجل:
- ما تم فحصه،
- ما تم تغييره،
- الأدلة،
- ما لم يمكن قياسه،
- أي حدود بيئية.

إذا كانت Phase 12 سليمة:
- افتح PR،
- راجع Diff،
- ادمج إلى `main`.

ثم حدث:
- `PROJECT_STATUS.md`
- `PROJECT_HANDOFF.md`

---

# 8. بعدها مباشرة — Phase 13

لا تعتبر المشروع مكتملًا بعد Phase 12.

ابدأ Phase 13:

**Cross-Page Craft Normalization + Final Runtime QA**

راجع:
- Home
- Services
- all 8 service ids
- Portfolio
- About
- Process
- Contact
- FAQ
- Blog placeholder
- 404

Viewports المطلوبة عند توفر Browser/Preview:
- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 390×844
- 360×740

States:
- Light
- Dark
- RTL
- mobile menu open/closed
- portfolio drawer
- service modes
- contact validation
- reduced motion

تحقق من:
- no horizontal overflow,
- no missing resources,
- no console errors,
- no dead links,
- image cropping,
- page density,
- page-to-page consistency,
- keyboard flows,
- CTA hierarchy,
- no AI-template feeling.

دورة Phase 13:

**Inspect → Critique → Fix → Re-run → Verify**

أنشئ:
`docs/design/PHASE_13_FINAL_QA.md`

ثم حدّث:
- `PROJECT_STATUS.md`
- `PROJECT_HANDOFF.md`

ولا تقل إن الموقع “مكتمل” قبل نجاح هذه البوابة.

---

# 9. حدود البيئة

في المحادثة السابقة لم يكن تشغيل Browser/Hosted Preview للنسخة الأحدث موثوقًا بشكل كافٍ لإغلاق Release Visual Gate.

إذا توفر لك Browser/Preview:
استخدمه فعليًا.

إذا لم يتوفر:
- لا تدّعِ Visual Runtime Approval،
- نفذ ما تستطيع من Static/Code QA،
- وثق القيد،
- اترك Production Visual Gate صريحًا.

---

# 10. قاعدة مهمة جدًا

لا ترجع للخلف وتعيد بناء ما تم اعتماده لمجرد أنك تستطيع تصميمه بطريقة مختلفة.

أي تغيير في Phase 12 أو 13 يجب أن يكون بسبب:
- Bug،
- Accessibility issue،
- Performance issue،
- SEO issue،
- Visual regression،
- Inconsistency مع Refined Craft Standard،
- أو دليل Runtime جديد.

ابدأ الآن من المستودع الحي، تحقق من HEAD، اقرأ ملفات التسليم، ثم كمل من Phase 12 فعليًا.
