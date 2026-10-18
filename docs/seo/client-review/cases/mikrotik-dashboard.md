# لوحة تحكم الميكروتيك | MikroTik Control Dashboard

> **مسودة تحريرية للمراجعة — غير منشورة.** الحقائق الأساسية مستمدة من وصف المشروع الحالي في المستودع، أما تفسير التحديات وقرارات التصميم فهو صياغة مقترحة تحتاج اعتماد مالك المشروع قبل نشرها. لا توجد أرقام أداء أو نتائج عملاء مثبتة هنا.

**مسار المشروع:** `/portfolio/mikrotik-dashboard/` — **نوعه:** web — **مرجع الصورة:** `/assets/works/project_3.webp`

## النسخة العربية المقترحة

### نبذة المشروع
لوحة تحكم الميكروتيك تستهدف تسهيل عمليات إدارة الشبكات التي تتكرر يوميًا، ومنها التعامل مع المستخدمين والكروت والجلسات. القيمة التي ينبغي شرحها ليست «لوحة جميلة»، بل كيف تنتقل المهام الإدارية إلى مساحة واضحة يفهم فيها المشرف أين يجد العملية المناسبة وما المعلومات التي يحتاج مراجعتها.

### المشكلة والسياق
في بيئة الشبكات قد تتوزع مهام المشرف بين إنشاء المستخدم، وإدارة الكرت، ومتابعة الجلسة. اختلاف هذه المهام وطبيعة بياناتها يتطلب ترتيبًا يحافظ على وضوح العلاقة بينها، دون إظهار كل التفاصيل في شاشة واحدة أو ربط وظائف لم تتأكد بعد.

### نهج الحل ومساهمة وصل تك
يسجل معرض الأعمال تطوير واجهة إدارية تجمع المستخدمين وتوليد الكروت ومتابعة الجلسات. المسودة المقترحة تفصلها في تدفقات إدارة عملية، وتوضح أن ربط MikroTik وطريقة الاتصال وحقوق الوصول وحالات الفشل والتقارير المالية عناصر تقنية بحاجة إلى مراجعة المصدر قبل اعتمادها.

### القرارات التفسيرية المقترحة — للمراجعة
1. تقسيم العمليات إلى المستخدمين والكروت والجلسات مع انتقال منطقي بينها.
2. تقديم إجراءات الإدارة المتكررة بطريقة منظمة تقلل الحاجة للبحث.
3. إبقاء تفاصيل التكامل والصلاحيات التقنية ضمن ما يمكن إثباته من النظام.

### نطاق العمل المسجل بالفعل
- إدارة المستخدمين
- توليد الكروت
- متابعة الجلسات والعمليات

### المخرجات المسجلة
- إدارة المستخدمين
- توليد وإدارة الكروت
- متابعة الجلسات

## English editorial draft

### Project overview
The MikroTik dashboard brings recurring network-management tasks into one administration interface, including users, access cards and sessions. Its story should focus on clarity for operational work, not simply the appearance of a dashboard.

### Challenge
Subscriber, card and session operations have different actions and information requirements. A useful interface makes their relationship understandable without assuming that every integration or report is implemented.

### Approach
The portfolio scope records user administration, card creation and session monitoring. Technical claims about RouterOS APIs, accounting links, access policies and version compatibility remain subject to source verification.

### Suggested design rationale — to be verified
1. Separate user, card and session workflows into recognizable areas.
2. Prioritize frequently repeated administration actions.
3. Document integrations and permissions only when verified in the running system.

### Recorded scope
- User management
- Card generation
- Session and operation monitoring

## الأدلة الموجودة وماذا تثبت

- **سجل البيانات الحالي:** `src/data/projects.js`، المشروع `project-03`: دليل على **ما وصفه معرض الأعمال**، وليس إثباتًا مستقلًا لنشر كل ميزة.
- **صورة المشروع:** [المعاينة المحفوظة](../../../../assets/works/project_3.webp)؛ تثبت وجود مادة عرض بصري فقط، ولا تثبت نتائج الاستخدام أو عمل الخادم.
- **المرجع التاريخي المسجل:** `main:js/portfolio.js، main:/assets/works/project_3.webp`؛ قد يكون مسارًا قديمًا (مثل `main:js/portfolio.js`) غير موجود في HEAD الحالي، ولذلك لا يُعامل كإثبات حي دون العثور على نسخته التاريخية.

## أسئلة الاعتماد قبل النشر

- [ ] هل اللوحة تتصل مباشرة بـRouterOS API، وبأي إصدار؟
- [ ] هل إصدار الكروت وتتبّع الجلسات يعملان بالكامل أم جزئيًا؟
- [ ] هل يوجد نظام محاسبي مرتبط، وما حدوده؟
- [ ] مطابقة وصف دور وصل تك وصلاحية عرض الصورة مع مالك المشروع.
- [ ] تحديد هل العمل نموذج أولي أم منتج منشور؛ لا نضع رابطًا حيًا إلا بعد التحقق.
- [ ] مراجعة الترجمة الإنجليزية مقابل وظائف النسخة المعتمدة.

**درجة الثقة:** وصف النطاق موجود في سجل المعرض؛ تفاصيل التنفيذ والنتائج بحاجة إلى تحقق إضافي. **الإجراء:** تحرير واعتماد بشري قبل نشر دراسة الحالة.
