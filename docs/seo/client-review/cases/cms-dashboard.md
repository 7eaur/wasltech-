# لوحة إدارة محتوى (CMS) | Content Management Dashboard (CMS)

> **مسودة تحريرية للمراجعة — غير منشورة.** الحقائق الأساسية مستمدة من وصف المشروع الحالي في المستودع، أما تفسير التحديات وقرارات التصميم فهو صياغة مقترحة تحتاج اعتماد مالك المشروع قبل نشرها. لا توجد أرقام أداء أو نتائج عملاء مثبتة هنا.

**مسار المشروع:** `/portfolio/cms-dashboard/` — **نوعه:** web — **مرجع الصورة:** `/assets/works/project_4.webp`

## النسخة العربية المقترحة

### نبذة المشروع
لوحة إدارة المحتوى CMS تهدف إلى جعل تحديث المعلومات اليومية للموقع مهمة إدارية مفهومة، لا تعديلًا يدويًا داخل الملفات البرمجية كل مرة. وتُقدَّم هنا بوصفها أداة تشغيلية لمحرر المحتوى: يحدد الصفحة أو القسم، يحدّث البيانات المناسبة، ثم يراجع كيف ستظهر للمستخدم.

### المشكلة والسياق
المحتوى يتغير عادة بوتيرة مختلفة عن الكود. إذا كانت كل مراجعة للنص أو قسم الموقع تحتاج تدخلًا برمجيًا، تصبح العملية أبطأ وأكثر عرضة للاختلاف. التحدي هو وضع واجهة مركزية للتعديل، مع إبقاء بنية الصفحات منضبطة وعدم افتراض وجود صلاحيات تحرير أو نشر مؤتمت قبل إثباتها.

### نهج الحل ومساهمة وصل تك
يتضمن الوصف الحالي إدارة محتوى الصفحات وتحديث البيانات ديناميكيًا ولوحة تحكم مركزية. المسودة تشرح فصل بيئة تحرير المحتوى عن عرضه للجمهور، وإمكانية تنظيم الحقول بطريقة مرتبطة بالأقسام بدل التعامل مع المحتوى كنص عام. تفاصيل التخزين ونشر التغييرات والصلاحيات تحتاج مراجعة فعلية.

### القرارات التفسيرية المقترحة — للمراجعة
1. تجميع تحديثات الصفحات في نقطة إدارة واضحة.
2. تنظيم حقول المحتوى بما يطابق أقسام الموقع دون فرض تعديل الكود لكل نص.
3. تمييز دور محرر البيانات عن واجهة الزائر في التجربة المقدمة.

### نطاق العمل المسجل بالفعل
- إدارة محتوى الصفحات
- تحديث البيانات ديناميكيًا
- لوحة تحكم للإدارة

### المخرجات المسجلة
- إدارة محتوى الصفحات
- تحديثات ديناميكية
- واجهة تحكم مركزية

## English editorial draft

### Project overview
The CMS dashboard is designed to make website content updates an understandable editorial task rather than requiring code changes for every adjustment. It serves content editors through one administration area.

### Challenge
Website content changes at a different pace from software code. Requiring a developer for routine wording or section updates slows that process and makes consistency harder to maintain.

### Approach
The listed scope includes page content management, dynamic changes and a central dashboard. The draft distinguishes editing from public presentation while reserving specific claims about publishing, roles, storage and history for a product review.

### Suggested design rationale — to be verified
1. Centralize page-content maintenance.
2. Organize fields to correspond to real page sections.
3. Separate editorial operations from the visitor-facing experience.

### Recorded scope
- Page content management
- Dynamic data updates
- Administration dashboard

## الأدلة الموجودة وماذا تثبت

- **سجل البيانات الحالي:** `src/data/projects.js`، المشروع `project-04`: دليل على **ما وصفه معرض الأعمال**، وليس إثباتًا مستقلًا لنشر كل ميزة.
- **صورة المشروع:** [المعاينة المحفوظة](../../../assets/works/project_4.webp)؛ تثبت وجود مادة عرض بصري فقط، ولا تثبت نتائج الاستخدام أو عمل الخادم.
- **المرجع التاريخي المسجل:** `main:js/portfolio.js، main:/assets/works/project_4.webp`؛ قد يكون مسارًا قديمًا (مثل `main:js/portfolio.js`) غير موجود في HEAD الحالي، ولذلك لا يُعامل كإثبات حي دون العثور على نسخته التاريخية.

## أسئلة الاعتماد قبل النشر

- [ ] هل التحديث مباشر على الموقع أم يحتاج اعتمادًا أو إعادة بناء؟
- [ ] ما صلاحيات المحررين وأنواع المحتوى المتاحة؟
- [ ] هل توجد إصدارات سابقة أو مراجعة تغييرات أو وسائط؟
- [ ] مطابقة وصف دور وصل تك وصلاحية عرض الصورة مع مالك المشروع.
- [ ] تحديد هل العمل نموذج أولي أم منتج منشور؛ لا نضع رابطًا حيًا إلا بعد التحقق.
- [ ] مراجعة الترجمة الإنجليزية مقابل وظائف النسخة المعتمدة.

**درجة الثقة:** وصف النطاق موجود في سجل المعرض؛ تفاصيل التنفيذ والنتائج بحاجة إلى تحقق إضافي. **الإجراء:** تحرير واعتماد بشري قبل نشر دراسة الحالة.
