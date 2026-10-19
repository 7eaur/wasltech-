# منصة صوركم الرقمية | Suwarikum Digital Platform

> **دراسة حالة منشورة في معرض أعمال وصل تك للمراجعة منذ 19 أكتوبر 2026؛ الحقائق التشغيلية والقرارات التفسيرية ما زالت تنتظر اعتماد مالك العمل.** الحقائق الأساسية مستمدة من وصف المشروع الحالي في المستودع، أما تفسير التحديات وقرارات التصميم فهو صياغة مقترحة تحتاج اعتماد مالك المشروع قبل نشرها. لا توجد أرقام أداء أو نتائج عملاء مثبتة هنا.

**المراجعة على الموقع الرسمي:** [العربية](https://wasl-tech.com/portfolio/suwarikum-platform/) · [English](https://wasl-tech.com/en/portfolio/suwarikum-platform/).

**مسار المشروع:** `/portfolio/suwarikum-platform/` — **نوعه:** web — **مرجع الصورة:** `/assets/works/project_1.webp`

## النسخة العربية المقترحة

### نبذة المشروع
صوركم منصة لتنظيم مشاركة الصور وتسليمها بين المصور والعميل. الفكرة الأساسية ليست إنشاء معرض عام للصور، بل إعطاء عملية التسليم مسارًا محددًا: يعرف المصور المجموعة المطلوبة، ويصل العميل إلى الصور المرتبطة به دون ضياع وسط ملفات وروابط متعددة. وهذه نقطة عملية لعرض قيمة المنصة في دراسة الحالة.

### المشكلة والسياق
عند الاعتماد على إرسال الملفات بصورة متفرقة، تزداد صعوبة معرفة المجموعة الأحدث وربطها بصاحبها. كما أن الزائر لا يريد استعراض صور عملاء آخرين للوصول إلى محتواه. التحدي هو تنظيم مجموعات الصور والوصول المخصص ضمن واجهة تبدو طبيعية للمصور والعميل معًا.

### نهج الحل ومساهمة وصل تك
وفق نطاق المعرض، جمعت واجهة المنصة بين إدارة مجموعات الصور، ومشاركتها، وتنظيم وصول كل مستخدم. يمكن شرح الرحلة المقصودة بدءًا من تجهيز المجموعة وصولًا إلى عرضها للعميل، دون ادعاء تشفير أو تخزين سحابي أو نظام تنزيل خاص قبل مراجعة الكود والشاشات.

### القرارات التفسيرية المقترحة — للمراجعة
1. تنظيم الصور في مجموعات قابلة للتعرّف بدل قائمة واحدة طويلة.
2. فصل احتياجات المصور الذي يدير المحتوى عن احتياج العميل الذي يريد الوصول إليه.
3. تركيز شاشة العميل على العثور على صوره وإتمام التسليم بأقل تشتيت.

### نطاق العمل المسجل بالفعل
- إدارة مجموعات الصور
- مشاركة المحتوى مع العملاء
- تنظيم الوصول لكل مستخدم

### المخرجات المسجلة
- إدارة مجموعات الصور
- وصول مخصص للعملاء
- تجربة تسليم ومشاركة داخل المنصة

## English editorial draft

### Project overview
Suwarikum organizes photo delivery between photographers and clients. Its core value is a recognizable handoff process: photographers manage collections and clients find the images associated with them instead of navigating scattered files and links.

### Challenge
Fragmented file sharing makes it harder to identify the correct collection and limits clarity around client-specific access. The interface must serve two different journeys without exposing unsupported privacy or storage claims.

### Approach
The recorded project scope covers collection management, client sharing and user-specific access. The draft explains the handoff from preparing a gallery to presenting it to a client, leaving downloads, payments, cloud hosting and advanced security claims open for verification.

### Suggested design rationale — to be verified
1. Organize photos into recognizable collections.
2. Distinguish the photographer's management journey from the client's viewing journey.
3. Keep the client-facing handoff focused on locating the right content.

### Recorded scope
- Manage photo collections
- Share content with clients
- Organize access per user

## الأدلة الموجودة وماذا تثبت

- **سجل البيانات الحالي:** `src/data/projects.js`، المشروع `project-01`: دليل على **ما وصفه معرض الأعمال**، وليس إثباتًا مستقلًا لنشر كل ميزة.
- **صورة المشروع:** [المعاينة المحفوظة](../../../../assets/works/project_1.webp)؛ تثبت وجود مادة عرض بصري فقط، ولا تثبت نتائج الاستخدام أو عمل الخادم.
- **المرجع التاريخي المسجل:** `main:js/portfolio.js، main:/assets/works/project_1.webp`؛ قد يكون مسارًا قديمًا (مثل `main:js/portfolio.js`) غير موجود في HEAD الحالي، ولذلك لا يُعامل كإثبات حي دون العثور على نسخته التاريخية.

## أسئلة الاعتماد قبل النشر

- [ ] كيف تُنشأ مساحة العميل وكيف يُمنح حق الوصول؟
- [ ] هل يدعم النظام تنزيل الصور أو اختيارها أو الدفع، أم العرض والمشاركة فقط؟
- [ ] ما ضوابط الخصوصية والتخزين المثبتة بالفعل؟
- [ ] مطابقة وصف دور وصل تك وصلاحية عرض الصورة مع مالك المشروع.
- [ ] تحديد هل العمل نموذج أولي أم منتج منشور؛ لا نضع رابطًا حيًا إلا بعد التحقق.
- [ ] مراجعة الترجمة الإنجليزية مقابل وظائف النسخة المعتمدة.

**درجة الثقة:** وصف النطاق موجود في سجل المعرض؛ تفاصيل التنفيذ والنتائج بحاجة إلى تحقق إضافي. **الإجراء:** مراجعة النص المعروض وتصحيح أي معلومات غير دقيقة قبل الاعتماد النهائي.
