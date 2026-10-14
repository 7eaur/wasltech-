# Wasl Tech Website

المستودع الرسمي لموقع **وصل تك | Wasl Tech** ثنائي اللغة.

## التقنية

- مولد صفحات ثابتة بـ Node.js وJavaScript.
- المصدر التنفيذي داخل `src/`.
- الأصول النهائية داخل `assets/`.
- بناء المعاينة في `dist/` وبناء الإنتاج في `dist-release/`، وكلاهما غير متتبع في Git.
- النشر على Vercel من `npm run vnext:build:release`.

## التشغيل والتحقق

```bash
npm run vnext:verify
npm run vnext:verify:release
node scripts/check-final-media.mjs
```

## هيكل المستودع

- `src/pages/` الصفحات.
- `src/components/` المكونات المشتركة.
- `src/data/` المحتوى المنظم.
- `src/styles/` CSS مشترك وحزم خاصة بعائلات الصفحات.
- `src/client/` JavaScript خفيف للمتصفح.
- `scripts/` البناء وفحوص الجودة.
- `docs/core/` قواعد المنتج والهندسة والتصميم والجودة.
- `docs/qa/` أدلة التحقق الحالية فقط.
- `wasl-social-poster-system/` نظام المنشورات التسويقي؛ مستقل عن Runtime الموقع.

## مرجع الحالة

ابدأ بالترتيب التالي:

1. `PROJECT_STATUS.md`
2. `PROJECT_HANDOFF.md`
3. `AGENTS.md`
4. `docs/README.md`

التاريخ القديم متاح في Git ولا يُحتفظ بنسخ تشغيلية مكررة داخل الجذر.
