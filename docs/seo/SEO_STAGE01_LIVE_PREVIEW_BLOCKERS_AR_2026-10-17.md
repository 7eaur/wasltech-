# المرحلة 01 — نتائج فحص HTTP الحقيقي تكشف مشكلة متبقية (مانع دمج ونشر)

**تاريخ الفحص:** 17 أكتوبر 2026. **البيئة:** Vercel Preview مبني من GitHub SHA `322ea1aa108ab61bcd803d23ff28d25aa2941bf5`، الرابط `https://wasltech-m7ef07ym2-wasl15.vercel.app`، حالة Vercel **READY**، رقم النشر `dpl_2kARUqmdDaEBCMQRo3JDGwFFyXPs`.  
**الحكم:** **FAILED acceptance**, رغم نجاح CI؛ لا يجوز دمج أو نشر هذا الإصدار.

## فشل مثبت من استجابات Vercel Preview

| الطلب | المتوقع | الفعلي |
|---|---|---|
| `/index.html` | 308 إلى `/` | **200** وعرض HTML الرئيسية (نسخة مكررة) |
| `/en/index.html` | 308 إلى `/en/` | **200** وHTML الرئيسية الإنجليزية |
| `/about.html` | 308 إلى `/about/` | ✅ 308 صحيح |
| `/services.html` | 308 إلى `/services/` | ✅ 308 صحيح |
| `/blog.html` | 308 إلى `/insights/` | ✅ 308 صحيح |
| `/service-web?id=web-development` | 308 إلى تفاصيل `/services/web-development/` | **308 إلى `/services/?id=web-development`** (دليل عام خاطئ) |
| `/service-web?id=web` | 308 إلى التفاصيل | ✅ 308 إلى `/services/web-development/?id=web` |
| `/service-web/?id=app` | 308 إلى صفحة التطبيقات | ✅ وجهة صحيحة مع `?id=app` |
| `/en/service-web.html?id=store` | 308 إلى تفاصيل المتجر **بالإنجليزية** | **308 إلى `/services/ecommerce/?id=store`**: ضاعت اللغة |
| `/service-web?id=bogus` | 404 حقيقي | **308 إلى `/services/?id=bogus`** (خطأ دلالي) |
| `/service-web/` | 404 أو سلوك مقصود مثبت | **308 إلى `/services/`** |
| `/services/web-development/` | 200 مع self-canonical | ✅ 200 وself-canonical صحيح |

فحص إضافي شمل معرفات الخدمات الثماني الطويلة والقصيرة. أمثلة alias تعمل: `web`, `app`, `store`, `tech`, `design`, `marketing`. أمثلة لا تُوجّه إلى الخدمة المطلوبة: `web-development`, `mobile-app-development`, `ecommerce`, `custom-software`, `programming`, `technical-solutions`, `company-profiles`, `profiles`, `brand-design`, `digital-marketing`. **لا نستنتج السبب الدقيق لهذا التباين من الاستجابة وحدها**؛ قد يتعلق بترتيب قواعد المنصة أو تفاعل `redirects` مع `routes` و`trailingSlash`، ويجب إثباته بتجربة معزولة.

الاستجابات تحتوي على `Location: https://wasl-tech.com/...` في معاينة Vercel حتى عندما كان `destination` نسبيًا؛ وهذا سلوك منشور فعليًا في هذا المشروع، لذلك لا يُعتمد افتراض أن redirect المعاينة يبقى على مضيف `.vercel.app`. بالنسبة للتطابق فالأهم **المسار النهائي واللغة**، ثم المضيف المصرح به وCanonical.

## تحليل السبب الجذري

- إصلاحنا البنيوي **جيد من حيث مصدر البيانات وعدم الازدواجية** (`src/seo/legacy-redirects.js` مع توليد `vercel.json`).
- لكنه **لم يعالج آلية أسبقية المطابقة الفعلية على Vercel**؛ أداة فحص GitHub استنتجت سلامة 105 قاعدة من المصدر، لكنها لم تتأكد من تنفيذها على البوابة. **هذا فرق جوهري بين CI وEnd-to-End**.
- صفحات `index.html` المادية لها سلوك خاص على Vercel؛ لم يثبت أن `redirects` البسيطة تتغلب على static filesystem في تكوين المشروع الحالي.
- ID غير المعروف يتحول إلى دليل الخدمات بدل 404، واللغة قد تفقد، وهو خطأ يجب إصلاحه قبل merge؛ استخدام Canonical وحده غير كافٍ.

## إجراء التحقق الذي توقف عند حصة المنصة

1. أنشئ فرع تجربة معزولًا `seo/stage01-route-validation-20261017` من آخر SHA في PR #67 مع نقل `/index.html` و`web-development` إلى قواعد `routes` قبل `handle:filesystem` لقياس أسبقية المطابقة. **هذا فرع تجربة غير معتمد، لا يُدمج**.
2. عند طلب Preview دقيق لهذا الفرع أعادت Vercel HTTP **402 `api-deployments-free-per-day`**: تجاوز 100 عملية نشر يومية، مع `retryAfter=86400`. لذلك **لم تُنشأ معاينة للتجربة** ولا نعرف إن كانت ستصلح المشكلة.
3. لن ندمج إلى `main` مع وجود حالات HTTP مؤكدة خاطئة، ولن نحاول التفافًا على حدود الباقة أو ننقل النشر إلى مشروع مختلف.
4. بعد تجدد حصة النشر أو رفع الحد من صاحب الحساب: أنشئ Preview واحدًا للتجربة، تحقق `GET/HEAD` و`Location` ووجهة اللغة و404 للمجهول، ثم انقل الحل المؤكد إلى PR #67 وكرر 105 حالة (أو المصفوفة الجديدة) على نفس SHA؛ **إذا فشل نراجع بدائل Vercel الرسمية مثل وظائف serverless للمسارات القديمة فقط بعد قياس السبب**.

## الحالة

**المرحلة 01: غير مكتملة؛ لا دمج، لا Production، لا انتقال إلى المرحلة التالية بغرض النشر.**  
طلبات الدمج #68 و#69 مستندات/فحوص منفصلة؛ لا تُستخدم للادعاء بأن المرحلة 01 عولجت.  
**GitHub Actions:** نجاح اختبار البناء البنيوي لا يُلغي مانع HTTP المثبت.  
**المطلوب من حساب الاستضافة:** تجدد حصة النشر أو رفع الحد المعتمد، لا تغييرات أسرار أو دومين.
