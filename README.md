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
