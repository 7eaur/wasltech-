# Wasl Tech Website

المستودع الرسمي للنسخة النهائية من موقع **وصل تك | Wasl Tech** ثنائي اللغة.

- الموقع: <https://wasl-tech.com>
- المصدر التنفيذي: `src/`
- الأصول النهائية: `assets/`
- البناء والفحوص: `scripts/`
- النشر: Vercel من فرع `main` فقط

## التشغيل والتحقق

يتطلب المشروع Node.js 24:

```bash
npm run vnext:verify
npm run vnext:verify:release
node scripts/check-final-media.mjs
```

ينتج بناء المعاينة في `dist/` وبناء الإنتاج في `dist-release/`، ولا يُتتبّع أي منهما في Git.

## الهيكل

- `src/pages/`: مولدات الصفحات العربية والإنجليزية.
- `src/components/`: المكونات المشتركة.
- `src/data/`: محتوى الخدمات والأعمال والمقالات.
- `src/styles/`: الأنماط المشتركة وحزم عائلات الصفحات.
- `src/client/`: JavaScript المتصفح الخفيف.
- `assets/`: الصور والخطوط والهوية المستخدمة في Runtime.
- `scripts/`: البناء وفحوص الجودة والأداء وسلامة الوسائط.
- `wasl-social-poster-system/`: نظام منشورات مستقل عن Runtime الموقع.

## حالة المستودع

`main` هو النسخة الوحيدة المعتمدة. أزيلت وثائق المراحل والملفات القديمة بعد تثبيت النسخة النهائية، وسُجل إغلاق الفروع في [`BRANCH_CLOSURE.md`](BRANCH_CLOSURE.md).

## متابعة SEO وظهور الموقع في البحث والذكاء الاصطناعي

**المرجع التنفيذي الأحدث (خطة موحدة تجمع المراجعة المستقلة وجميع مشاكل SEO السابقة):**

- [الخطة التنفيذية الشاملة المرحلية — SEO/AEO/GEO](docs/seo/SEO_AEO_MASTER_EXECUTION_ROADMAP_AR_2026-10-17.md).
- [سجل الفجوات الموحد ومراحلها وشروط الإغلاق](docs/seo/SEO_UNIFIED_GAP_REGISTER_AR_2026-10-17.md).
- [المراجعة المستقلة لـSEO وAEO](docs/seo/INDEPENDENT_SEO_AEO_REVIEW_AR_2026-10-17.md).

ملفات الاستلام والتدقيق الخاصة بالتحسين المستمر (لقطة 17 أكتوبر 2026؛ تُراجع مقابل النتائج الحية):

- [ملف التسليم والحالة الفنية وبيانات GSC](docs/seo/SEO_AI_SEARCH_HANDOFF_AR.md).
- [خطة تدقيق جميع الصفحات وسجل الأولويات](docs/seo/SEO_AUDIT_EXECUTION_PLAN_AR.md).
- [برومبت بدء محادثة مختصة جديدة](docs/seo/NEW_CONVERSATION_PROMPT_AR.md).

هذه الوثائق مرجعية للتنفيذ ولا تغني عن فحص آخر HEAD ونتائج Google الفعلية. لا تختلط مع نظام المنشورات التسويقية.
