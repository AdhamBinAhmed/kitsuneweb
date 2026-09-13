export const languages = [
  { code: "en", label: "English", native: "English", flag: "🇺🇸" },
  { code: "zh", label: "Chinese", native: "中文", flag: "🇨🇳" },
  { code: "ar", label: "Arabic", native: "العربية", flag: "🇸🇦" },
  { code: "hi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { code: "bn", label: "Bengali", native: "বাংলা", flag: "🇧🇩" },
  { code: "ru", label: "Russian", native: "Русский", flag: "🇷🇺" },
  { code: "id", label: "Indonesian", native: "Bahasa", flag: "🇮🇩" },
  { code: "ja", label: "Japanese", native: "日本語", flag: "🇯🇵" },
  { code: "tr", label: "Turkish", native: "Türkçe", flag: "🇹🇷" },
  { code: "ko", label: "Korean", native: "한국어", flag: "🇰🇷" },
];

export const translations = {
  // ───────────────────────────── ENGLISH ─────────────────────────────
  en: {
    nav: {
      home: "Home", homeJp: "家",
      features: "Features", featuresJp: "術",
      download: "Download", downloadJp: "取",
      downloadMobile: "Download v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "The Evolution of",
      titleLine2: "Root Management",
      description: "A powerful Magisk fork wearing Material 3 design, advanced SuList logic, and robust bootloop protection. Control your device like never before.",
      downloadBtn: "Download v30.7",
      telegramBtn: "Join Telegram",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","Enhanced Hide","Bootloop Protection","WebUI","Module Backup","Stealth","Random Package Name"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "Under the Mask",
      sectionDesc: "Exclusive features not found in standard builds — engineered for power users who demand control, safety, and style.",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 Design", body:"A completely redesigned UI following the latest Android Material 3 guidelines for a sleek, expressive experience with dynamic color." },
        { n:"02", jp:"隠形", title:"Enhanced Hide", body:"Superior detection avoidance with a new random package name generator and layered stealth mechanisms." },
        { n:"03", jp:"許可", title:"New SuList Logic", body:"An improved whitelist approach to root management, ensuring only trusted apps ever get access." },
        { n:"04", jp:"守護", title:"Bootloop Protection", body:"Safety first. Built-in mechanisms detect and recover from module-induced bootloops automatically." },
        { n:"05", jp:"組立", title:"Module Management", body:"Bulk install modules, perform backups, and restore your entire setup with a single click." },
        { n:"06", jp:"探索", title:"Extended WebUI", body:"An extended WebUI engine plus online module search to find and install tools instantly." },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · Changelog",
      sectionTitle: "The trail of the fox",
      entries: [
        { version:"v30.7", date:"March 13, 2026", tag:"Latest", items:["Upstreamed to v30.7","New and improved UI","Implemented new Magisk hiding techniques","Merged Magisk hide logic — SuList / MagiskHide (denylist) in Superuser","Action / WebUI homescreen widget","Ramadan theme (late, but added)"], sub:{ label:"Enhanced Zygisk against detections", items:["libandroid_runtime RSS","LoveSy Zygisk detection","Native bridge error tracing","One more injection (WIP)"] } },
        { version:"Silver Update", date:"February 2, 2026", items:["Major UI updates","Fixed multiple UI issues","New color — Silver","Added support for ReZygisk","Implemented KernelPatch logic","Merged Superuser with SuList when SuList is enabled","Improved SuList logic and behavior","Updated WebUI APIs","Button to clear Superuser logs","Enhanced Zygisk hiding","Added an internal KPM module to fix Magic Mount detection issues"], sub:{ label:"Added 4 new languages", items:["Turkish (tr)","Russian (ru)","Traditional Chinese (zh-rTW)","Indonesian (id)"] } },
        { version:"v30.7", date:"January 14, 2026", items:["Updated Kitsune to v30.7","New UI with Material 3","Enhanced Hide","New SuList mode logic","New package name","Added bootloop protection","Added bulk install for modules","Added backup / restore modules","Added extended WebUI engine","Added online modules search","Added independent modules installer"] },
      ],
    },
    download: {
      offering: "奉納 · Offering",
      title: "Ready to upgrade?",
      releaseLabel: "Release Version",
      downloadBtn: "Download APK",
      requires: "Requires Android 5.0+",
      highlights: [
        { jp:"独立", t:"Independent Module Installer" },
        { jp:"核心", t:"Updated Magisk Core" },
        { jp:"名前", t:"New Package Name" },
      ],
    },
    footer: {
      tagline: "The evolution of root management. A Magisk fork forged for power, safety, and the art of staying unseen.",
      columns: [
        { title:"Product", jp:"製品", links:[{text:"Features & Changelog",href:"#features"},{text:"Download",href:"#download"}] },
        { title:"Community", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"Documentation",href:"#"},{text:"Support",href:"#"}] },
      ],
      copyright: "© 2026 Kitsune Mask Project. Not affiliated with Google or TopJohnWu.",
    },
  },

  // ───────────────────────────── CHINESE ─────────────────────────────
  zh: {
    nav: {
      home: "首页", homeJp: "家",
      features: "功能", featuresJp: "術",
      download: "下载", downloadJp: "取",
      downloadMobile: "下载 v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "Root 管理的",
      titleLine2: "革新进化",
      description: "一个强大的 Magisk 分支，采用 Material 3 设计、先进的 SuList 逻辑和强大的防启动循环保护。前所未有地掌控你的设备。",
      downloadBtn: "下载 v30.7",
      telegramBtn: "加入 Telegram",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","增强隐藏","防启动循环","WebUI","模块备份","隐身模式","随机包名"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "面具之下",
      sectionDesc: "标准版本中没有的独家功能——专为追求控制、安全和风格的高级用户打造。",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 设计", body:"完全重新设计的界面，遵循最新的 Android Material 3 设计规范，带来流畅、富有表现力的动态色彩体验。" },
        { n:"02", jp:"隠形", title:"增强隐藏", body:"卓越的检测规避能力，配备全新的随机包名生成器和多层隐身机制。" },
        { n:"03", jp:"許可", title:"全新 SuList 逻辑", body:"改进的白名单根管理方式，确保只有受信任的应用才能获得访问权限。" },
        { n:"04", jp:"守護", title:"防启动循环", body:"安全第一。内置机制可自动检测并从模块引起的启动循环中恢复。" },
        { n:"05", jp:"組立", title:"模块管理", body:"批量安装模块，执行备份，一键恢复你的整个配置。" },
        { n:"06", jp:"探索", title:"扩展 WebUI", body:"扩展的 WebUI 引擎加上在线模块搜索，即时查找和安装工具。" },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · 更新日志",
      sectionTitle: "狐之足迹",
      entries: [
        { version:"v30.7", date:"2026年3月13日", tag:"最新", items:["更新至 v30.7","全新改进的用户界面","实现新的 Magisk 隐藏技术","合并 Magisk 隐藏逻辑 — SuList / MagiskHide（拒绝列表）到超级用户","Action / WebUI 主屏幕小部件","斋月主题（迟到，但已添加）"], sub:{ label:"增强 Zygisk 对抗检测", items:["libandroid_runtime RSS","LoveSy Zygisk 检测","原生桥接错误追踪","再增加一次注入（进行中）"] } },
        { version:"银色更新", date:"2026年2月2日", items:["重大 UI 更新","修复多个 UI 问题","新颜色 — 银色","添加 ReZygisk 支持","实现 KernelPatch 逻辑","启用 SuList 时合并超级用户与 SuList","改进 SuList 逻辑和行为","更新 WebUI API","清除超级用户日志按钮","增强 Zygisk 隐藏","添加内部 KPM 模块以修复 Magic Mount 检测问题"], sub:{ label:"新增4种语言", items:["土耳其语 (tr)","俄语 (ru)","繁体中文 (zh-rTW)","印尼语 (id)"] } },
        { version:"v30.7", date:"2026年1月14日", items:["更新 Kitsune 至 v30.7","Material 3 全新界面","增强隐藏","全新 SuList 模式逻辑","新包名","添加防启动循环保护","添加模块批量安装","添加模块备份/恢复","添加扩展 WebUI 引擎","添加在线模块搜索","添加独立模块安装器"] },
      ],
    },
    download: {
      offering: "奉納 · 献礼",
      title: "准备好升级了吗？",
      releaseLabel: "发布版本",
      downloadBtn: "下载 APK",
      requires: "需要 Android 5.0+",
      highlights: [
        { jp:"独立", t:"独立模块安装器" },
        { jp:"核心", t:"更新的 Magisk 核心" },
        { jp:"名前", t:"全新包名" },
      ],
    },
    footer: {
      tagline: "Root 管理的进化。一个为力量、安全和隐身艺术而锻造的 Magisk 分支。",
      columns: [
        { title:"产品", jp:"製品", links:[{text:"功能与更新日志",href:"#features"},{text:"下载",href:"#download"}] },
        { title:"社区", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"文档",href:"#"},{text:"支持",href:"#"}] },
      ],
      copyright: "© 2026 Kitsune Mask 项目。与 Google 或 TopJohnWu 无关。",
    },
  },

  // ───────────────────────────── ARABIC ─────────────────────────────
  ar: {
    nav: {
      home: "الرئيسية", homeJp: "家",
      features: "المميزات", featuresJp: "術",
      download: "تحميل", downloadJp: "取",
      downloadMobile: "تحميل v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "تطور إدارة",
      titleLine2: "صلاحيات الروت",
      description: "نسخة معدلة قوية من Magisk بتصميم Material 3 ومنطق SuList متقدم وحماية قوية من حلقة الإقلاع. تحكم بجهازك كما لم تفعل من قبل.",
      downloadBtn: "تحميل v30.7",
      telegramBtn: "انضم لتيليجرام",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","إخفاء محسّن","حماية من حلقة الإقلاع","WebUI","نسخ احتياطي للموديلات","التخفي","اسم حزمة عشوائي"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "تحت القناع",
      sectionDesc: "ميزات حصرية غير موجودة في الإصدارات القياسية — مصممة للمستخدمين المتقدمين الذين يطالبون بالتحكم والأمان والأناقة.",
      items: [
        { n:"01", jp:"意匠", title:"تصميم Material 3", body:"واجهة مستخدم مُعاد تصميمها بالكامل وفقًا لأحدث إرشادات Material 3 من أندرويد لتجربة أنيقة ومعبرة مع ألوان ديناميكية." },
        { n:"02", jp:"隠形", title:"إخفاء محسّن", body:"تجنب فائق للكشف مع مولد أسماء حزم عشوائية جديد وآليات تخفي متعددة الطبقات." },
        { n:"03", jp:"許可", title:"منطق SuList جديد", body:"نهج قائمة بيضاء محسّن لإدارة الروت، يضمن حصول التطبيقات الموثوقة فقط على الوصول." },
        { n:"04", jp:"守護", title:"حماية من حلقة الإقلاع", body:"السلامة أولاً. آليات مدمجة تكتشف وتتعافى تلقائيًا من حلقات الإقلاع الناتجة عن الموديلات." },
        { n:"05", jp:"組立", title:"إدارة الموديلات", body:"تثبيت جماعي للموديلات، إجراء نسخ احتياطية، واستعادة إعداداتك بالكامل بنقرة واحدة." },
        { n:"06", jp:"探索", title:"WebUI موسّع", body:"محرك WebUI موسّع بالإضافة إلى بحث الموديلات عبر الإنترنت للعثور على الأدوات وتثبيتها فورًا." },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · سجل التحديثات",
      sectionTitle: "أثر الثعلب",
      entries: [
        { version:"v30.7", date:"13 مارس 2026", tag:"الأحدث", items:["تحديث إلى v30.7","واجهة مستخدم جديدة ومحسنة","تقنيات إخفاء Magisk جديدة","دمج منطق إخفاء Magisk — SuList / MagiskHide في المستخدم المتميز","أداة Action / WebUI للشاشة الرئيسية","ثيم رمضان (متأخر لكن تمت إضافته)"], sub:{ label:"تحسين Zygisk ضد الكشف", items:["libandroid_runtime RSS","كشف LoveSy Zygisk","تتبع أخطاء الجسر الأصلي","حقنة إضافية (قيد التنفيذ)"] } },
        { version:"التحديث الفضي", date:"2 فبراير 2026", items:["تحديثات واجهة كبيرة","إصلاح مشاكل واجهة متعددة","لون جديد — فضي","دعم ReZygisk","تنفيذ منطق KernelPatch","دمج المستخدم المتميز مع SuList","تحسين منطق وسلوك SuList","تحديث واجهات WebUI","زر لمسح سجلات المستخدم المتميز","تحسين إخفاء Zygisk","إضافة وحدة KPM داخلية"], sub:{ label:"إضافة 4 لغات جديدة", items:["التركية (tr)","الروسية (ru)","الصينية التقليدية (zh-rTW)","الإندونيسية (id)"] } },
        { version:"v30.7", date:"14 يناير 2026", items:["تحديث Kitsune إلى v30.7","واجهة Material 3 جديدة","إخفاء محسّن","منطق SuList جديد","اسم حزمة جديد","حماية من حلقة الإقلاع","تثبيت جماعي للموديلات","نسخ احتياطي / استعادة الموديلات","محرك WebUI موسّع","بحث الموديلات عبر الإنترنت","مثبت موديلات مستقل"] },
      ],
    },
    download: {
      offering: "奉納 · تقديم",
      title: "مستعد للترقية؟",
      releaseLabel: "إصدار النسخة",
      downloadBtn: "تحميل APK",
      requires: "يتطلب أندرويد 5.0+",
      highlights: [
        { jp:"独立", t:"مثبت موديلات مستقل" },
        { jp:"核心", t:"نواة Magisk محدثة" },
        { jp:"名前", t:"اسم حزمة جديد" },
      ],
    },
    footer: {
      tagline: "تطور إدارة الروت. نسخة Magisk معدلة من أجل القوة والأمان وفن البقاء مخفيًا.",
      columns: [
        { title:"المنتج", jp:"製品", links:[{text:"المميزات وسجل التحديثات",href:"#features"},{text:"تحميل",href:"#download"}] },
        { title:"المجتمع", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"التوثيق",href:"#"},{text:"الدعم",href:"#"}] },
      ],
      copyright: "© 2026 مشروع Kitsune Mask. غير تابع لـ Google أو TopJohnWu.",
    },
  },

  // ───────────────────────────── HINDI ─────────────────────────────
  hi: {
    nav: {
      home: "होम", homeJp: "家",
      features: "सुविधाएँ", featuresJp: "術",
      download: "डाउनलोड", downloadJp: "取",
      downloadMobile: "डाउनलोड v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "रूट प्रबंधन का",
      titleLine2: "विकास",
      description: "Material 3 डिज़ाइन, उन्नत SuList लॉजिक, और मजबूत बूटलूप सुरक्षा वाला एक शक्तिशाली Magisk फोर्क। अपने डिवाइस को पहले कभी न हुआ नियंत्रण दें।",
      downloadBtn: "डाउनलोड v30.7",
      telegramBtn: "Telegram जॉइन करें",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","उन्नत छुपाव","बूटलूप सुरक्षा","WebUI","मॉड्यूल बैकअप","स्टेल्थ","रैंडम पैकेज नाम"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "मुखौटे के नीचे",
      sectionDesc: "मानक बिल्ड में न पाई जाने वाली विशेष सुविधाएँ — उन पावर यूजर्स के लिए जो नियंत्रण, सुरक्षा और स्टाइल चाहते हैं।",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 डिज़ाइन", body:"नवीनतम Android Material 3 दिशानिर्देशों के अनुसार पूरी तरह से फिर से डिज़ाइन किया गया UI, डायनामिक कलर के साथ।" },
        { n:"02", jp:"隠形", title:"उन्नत छुपाव", body:"नए रैंडम पैकेज नाम जनरेटर और बहु-स्तरीय स्टेल्थ तंत्र के साथ बेहतर डिटेक्शन से बचाव।" },
        { n:"03", jp:"許可", title:"नया SuList लॉजिक", body:"रूट प्रबंधन के लिए बेहतर व्हाइटलिस्ट दृष्टिकोण, केवल विश्वसनीय ऐप्स को एक्सेस सुनिश्चित करता है।" },
        { n:"04", jp:"守護", title:"बूटलूप सुरक्षा", body:"सुरक्षा पहले। मॉड्यूल-जनित बूटलूप को स्वचालित रूप से पहचानने और ठीक करने की इनबिल्ट व्यवस्था।" },
        { n:"05", jp:"組立", title:"मॉड्यूल प्रबंधन", body:"बल्क में मॉड्यूल इंस्टॉल करें, बैकअप लें, और एक क्लिक में अपना पूरा सेटअप रिस्टोर करें।" },
        { n:"06", jp:"探索", title:"विस्तारित WebUI", body:"विस्तारित WebUI इंजन और ऑनलाइन मॉड्यूल सर्च से टूल्स तुरंत खोजें और इंस्टॉल करें।" },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · चेंजलॉग",
      sectionTitle: "लोमड़ी की राह",
      entries: [
        { version:"v30.7", date:"13 मार्च 2026", tag:"नवीनतम", items:["v30.7 में अपस्ट्रीम किया","नया और बेहतर UI","नई Magisk छुपाव तकनीकें लागू","Magisk hide लॉजिक मर्ज — SuList / MagiskHide सुपरयूजर में","Action / WebUI होमस्क्रीन विजेट","रमज़ान थीम (देर से, लेकिन जोड़ा गया)"], sub:{ label:"डिटेक्शन के विरुद्ध Zygisk में सुधार", items:["libandroid_runtime RSS","LoveSy Zygisk डिटेक्शन","नेटिव ब्रिज एरर ट्रेसिंग","एक और इंजेक्शन (WIP)"] } },
        { version:"सिल्वर अपडेट", date:"2 फरवरी 2026", items:["बड़े UI अपडेट","कई UI समस्याएँ ठीक कीं","नया रंग — सिल्वर","ReZygisk सपोर्ट जोड़ा","KernelPatch लॉजिक लागू","SuList सक्षम होने पर सुपरयूजर मर्ज","SuList लॉजिक में सुधार","WebUI APIs अपडेट","सुपरयूजर लॉग क्लियर बटन","Zygisk छुपाव में सुधार","Magic Mount डिटेक्शन फिक्स के लिए KPM मॉड्यूल"], sub:{ label:"4 नई भाषाएँ जोड़ीं", items:["तुर्की (tr)","रूसी (ru)","पारंपरिक चीनी (zh-rTW)","इंडोनेशियाई (id)"] } },
        { version:"v30.7", date:"14 जनवरी 2026", items:["Kitsune को v30.7 में अपडेट","Material 3 नया UI","उन्नत छुपाव","नया SuList मोड लॉजिक","नया पैकेज नाम","बूटलूप सुरक्षा जोड़ी","मॉड्यूल बल्क इंस्टॉल","मॉड्यूल बैकअप / रिस्टोर","विस्तारित WebUI इंजन","ऑनलाइन मॉड्यूल सर्च","स्वतंत्र मॉड्यूल इंस्टॉलर"] },
      ],
    },
    download: {
      offering: "奉納 · अर्पण",
      title: "अपग्रेड के लिए तैयार?",
      releaseLabel: "रिलीज़ वर्शन",
      downloadBtn: "APK डाउनलोड करें",
      requires: "Android 5.0+ आवश्यक",
      highlights: [
        { jp:"独立", t:"स्वतंत्र मॉड्यूल इंस्टॉलर" },
        { jp:"核心", t:"अपडेटेड Magisk कोर" },
        { jp:"名前", t:"नया पैकेज नाम" },
      ],
    },
    footer: {
      tagline: "रूट प्रबंधन का विकास। शक्ति, सुरक्षा और अदृश्य रहने की कला के लिए बना एक Magisk फोर्क।",
      columns: [
        { title:"उत्पाद", jp:"製品", links:[{text:"सुविधाएँ और चेंजलॉग",href:"#features"},{text:"डाउनलोड",href:"#download"}] },
        { title:"समुदाय", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"डॉक्यूमेंटेशन",href:"#"},{text:"सहायता",href:"#"}] },
      ],
      copyright: "© 2026 Kitsune Mask प्रोजेक्ट। Google या TopJohnWu से संबद्ध नहीं।",
    },
  },

  // ───────────────────────────── BENGALI ─────────────────────────────
  bn: {
    nav: {
      home: "হোম", homeJp: "家",
      features: "ফিচার", featuresJp: "術",
      download: "ডাউনলোড", downloadJp: "取",
      downloadMobile: "ডাউনলোড v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "রুট ম্যানেজমেন্টের",
      titleLine2: "বিবর্তন",
      description: "Material 3 ডিজাইন, উন্নত SuList লজিক এবং শক্তিশালী বুটলুপ সুরক্ষা সহ একটি শক্তিশালী Magisk ফর্ক। আপনার ডিভাইসকে আগের মতো নিয়ন্ত্রণ করুন।",
      downloadBtn: "ডাউনলোড v30.7",
      telegramBtn: "Telegram-এ যোগ দিন",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","উন্নত হাইড","বুটলুপ সুরক্ষা","WebUI","মডিউল ব্যাকআপ","স্টেলথ","র‍্যান্ডম প্যাকেজ নাম"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "মুখোশের আড়ালে",
      sectionDesc: "স্ট্যান্ডার্ড বিল্ডে নেই এমন এক্সক্লুসিভ ফিচার — যারা নিয়ন্ত্রণ, নিরাপত্তা এবং স্টাইল চান তাদের জন্য।",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 ডিজাইন", body:"সর্বশেষ Android Material 3 নির্দেশিকা অনুসরণ করে সম্পূর্ণ পুনর্নির্মিত UI।" },
        { n:"02", jp:"隠形", title:"উন্নত হাইড", body:"নতুন র‍্যান্ডম প্যাকেজ নাম জেনারেটর এবং বহু-স্তর স্টেলথ মেকানিজম।" },
        { n:"03", jp:"許可", title:"নতুন SuList লজিক", body:"রুট ম্যানেজমেন্টের জন্য উন্নত হোয়াইটলিস্ট পদ্ধতি।" },
        { n:"04", jp:"守護", title:"বুটলুপ সুরক্ষা", body:"নিরাপত্তা প্রথম। মডিউল-জনিত বুটলুপ স্বয়ংক্রিয়ভাবে শনাক্ত এবং পুনরুদ্ধার।" },
        { n:"05", jp:"組立", title:"মডিউল ম্যানেজমেন্ট", body:"বাল্ক মডিউল ইনস্টল, ব্যাকআপ এবং এক ক্লিকে পুনরুদ্ধার।" },
        { n:"06", jp:"探索", title:"এক্সটেন্ডেড WebUI", body:"এক্সটেন্ডেড WebUI ইঞ্জিন এবং অনলাইন মডিউল সার্চ।" },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · চেঞ্জলগ",
      sectionTitle: "শেয়ালের পথ",
      entries: [
        { version:"v30.7", date:"১৩ মার্চ ২০২৬", tag:"সর্বশেষ", items:["v30.7-এ আপস্ট্রিম","নতুন ও উন্নত UI","নতুন Magisk হাইডিং কৌশল","Magisk hide লজিক মার্জ — SuList / MagiskHide","Action / WebUI হোমস্ক্রিন উইজেট","রমজান থিম (দেরিতে, তবে যোগ করা হয়েছে)"], sub:{ label:"ডিটেকশনের বিরুদ্ধে Zygisk উন্নতি", items:["libandroid_runtime RSS","LoveSy Zygisk ডিটেকশন","নেটিভ ব্রিজ এরর ট্রেসিং","আরো একটি ইনজেকশন (WIP)"] } },
        { version:"সিলভার আপডেট", date:"২ ফেব্রুয়ারি ২০২৬", items:["বড় UI আপডেট","একাধিক UI সমস্যা সমাধান","নতুন রং — সিলভার","ReZygisk সাপোর্ট","KernelPatch লজিক","SuList সক্রিয় থাকলে সুপারইউজার মার্জ","SuList লজিক উন্নতি","WebUI APIs আপডেট","সুপারইউজার লগ ক্লিয়ার বাটন","Zygisk হাইডিং উন্নতি","KPM মডিউল যোগ"], sub:{ label:"৪টি নতুন ভাষা যোগ", items:["তুর্কি (tr)","রাশিয়ান (ru)","ঐতিহ্যবাহী চীনা (zh-rTW)","ইন্দোনেশীয় (id)"] } },
        { version:"v30.7", date:"১৪ জানুয়ারি ২০২৬", items:["Kitsune v30.7-এ আপডেট","Material 3 নতুন UI","উন্নত হাইড","নতুন SuList মোড","নতুন প্যাকেজ নাম","বুটলুপ সুরক্ষা","বাল্ক মডিউল ইনস্টল","মডিউল ব্যাকআপ / রিস্টোর","এক্সটেন্ডেড WebUI","অনলাইন মডিউল সার্চ","স্বাধীন মডিউল ইনস্টলার"] },
      ],
    },
    download: {
      offering: "奉納 · নৈবেদ্য",
      title: "আপগ্রেড করতে প্রস্তুত?",
      releaseLabel: "রিলিজ ভার্সন",
      downloadBtn: "APK ডাউনলোড",
      requires: "Android 5.0+ প্রয়োজন",
      highlights: [
        { jp:"独立", t:"স্বাধীন মডিউল ইনস্টলার" },
        { jp:"核心", t:"আপডেটেড Magisk কোর" },
        { jp:"名前", t:"নতুন প্যাকেজ নাম" },
      ],
    },
    footer: {
      tagline: "রুট ম্যানেজমেন্টের বিবর্তন। শক্তি, নিরাপত্তা এবং অদৃশ্য থাকার শিল্পের জন্য নির্মিত একটি Magisk ফর্ক।",
      columns: [
        { title:"পণ্য", jp:"製品", links:[{text:"ফিচার ও চেঞ্জলগ",href:"#features"},{text:"ডাউনলোড",href:"#download"}] },
        { title:"কমিউনিটি", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"ডকুমেন্টেশন",href:"#"},{text:"সাপোর্ট",href:"#"}] },
      ],
      copyright: "© ২০২৬ Kitsune Mask প্রকল্প। Google বা TopJohnWu-এর সাথে সম্পর্কিত নয়।",
    },
  },

  // ───────────────────────────── RUSSIAN ─────────────────────────────
  ru: {
    nav: {
      home: "Главная", homeJp: "家",
      features: "Функции", featuresJp: "術",
      download: "Скачать", downloadJp: "取",
      downloadMobile: "Скачать v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "Эволюция управления",
      titleLine2: "Root-правами",
      description: "Мощный форк Magisk с дизайном Material 3, продвинутой логикой SuList и надёжной защитой от бутлупов. Управляйте устройством как никогда раньше.",
      downloadBtn: "Скачать v30.7",
      telegramBtn: "Telegram канал",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","Улучшенное скрытие","Защита от бутлупа","WebUI","Бэкап модулей","Стелс","Случайное имя пакета"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "Под маской",
      sectionDesc: "Эксклюзивные функции, которых нет в стандартных сборках — для продвинутых пользователей, требующих контроля, безопасности и стиля.",
      items: [
        { n:"01", jp:"意匠", title:"Дизайн Material 3", body:"Полностью переработанный UI по последним рекомендациям Android Material 3 с динамическими цветами." },
        { n:"02", jp:"隠形", title:"Улучшенное скрытие", body:"Превосходное обнаружения с новым генератором случайных имён пакетов и многоуровневыми механизмами стелса." },
        { n:"03", jp:"許可", title:"Новая логика SuList", body:"Улучшенный подход белого списка к управлению root, гарантирующий доступ только доверенным приложениям." },
        { n:"04", jp:"守護", title:"Защита от бутлупа", body:"Безопасность прежде всего. Встроенные механизмы автоматически обнаруживают и восстанавливают после бутлупов." },
        { n:"05", jp:"組立", title:"Управление модулями", body:"Массовая установка модулей, создание бэкапов и восстановление всей конфигурации одним нажатием." },
        { n:"06", jp:"探索", title:"Расширенный WebUI", body:"Расширенный движок WebUI и онлайн-поиск модулей для мгновенного поиска и установки инструментов." },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · Журнал изменений",
      sectionTitle: "След лисы",
      entries: [
        { version:"v30.7", date:"13 марта 2026", tag:"Последнее", items:["Обновлено до v30.7","Новый улучшенный UI","Новые техники скрытия Magisk","Объединена логика скрытия — SuList / MagiskHide в Суперпользователе","Виджет Action / WebUI","Тема Рамадана (с опозданием, но добавлена)"], sub:{ label:"Улучшен Zygisk против обнаружения", items:["libandroid_runtime RSS","Обнаружение LoveSy Zygisk","Трассировка ошибок нативного моста","Ещё одна инъекция (WIP)"] } },
        { version:"Серебряное обновление", date:"2 февраля 2026", items:["Крупные обновления UI","Исправлены множественные ошибки UI","Новый цвет — Серебро","Поддержка ReZygisk","Логика KernelPatch","Объединение Суперпользователя с SuList","Улучшена логика SuList","Обновлены API WebUI","Кнопка очистки логов","Улучшено скрытие Zygisk","Внутренний модуль KPM"], sub:{ label:"Добавлено 4 новых языка", items:["Турецкий (tr)","Русский (ru)","Традиционный китайский (zh-rTW)","Индонезийский (id)"] } },
        { version:"v30.7", date:"14 января 2026", items:["Обновление Kitsune до v30.7","Новый UI Material 3","Улучшенное скрытие","Новая логика SuList","Новое имя пакета","Защита от бутлупа","Массовая установка модулей","Бэкап / восстановление модулей","Расширенный WebUI","Онлайн-поиск модулей","Независимый установщик модулей"] },
      ],
    },
    download: {
      offering: "奉納 · Подношение",
      title: "Готовы к обновлению?",
      releaseLabel: "Версия релиза",
      downloadBtn: "Скачать APK",
      requires: "Требуется Android 5.0+",
      highlights: [
        { jp:"独立", t:"Независимый установщик модулей" },
        { jp:"核心", t:"Обновлённое ядро Magisk" },
        { jp:"名前", t:"Новое имя пакета" },
      ],
    },
    footer: {
      tagline: "Эволюция управления root. Форк Magisk, созданный для мощности, безопасности и искусства оставаться невидимым.",
      columns: [
        { title:"Продукт", jp:"製品", links:[{text:"Функции и журнал",href:"#features"},{text:"Скачать",href:"#download"}] },
        { title:"Сообщество", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"Документация",href:"#"},{text:"Поддержка",href:"#"}] },
      ],
      copyright: "© 2026 Проект Kitsune Mask. Не связан с Google или TopJohnWu.",
    },
  },

  // ───────────────────────────── INDONESIAN ─────────────────────────────
  id: {
    nav: {
      home: "Beranda", homeJp: "家",
      features: "Fitur", featuresJp: "術",
      download: "Unduh", downloadJp: "取",
      downloadMobile: "Unduh v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "Evolusi dari",
      titleLine2: "Manajemen Root",
      description: "Fork Magisk yang powerful dengan desain Material 3, logika SuList canggih, dan perlindungan bootloop yang kokoh. Kendalikan perangkat Anda seperti belum pernah sebelumnya.",
      downloadBtn: "Unduh v30.7",
      telegramBtn: "Gabung Telegram",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","Enhanced Hide","Perlindungan Bootloop","WebUI","Backup Modul","Stealth","Nama Paket Acak"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "Di Balik Topeng",
      sectionDesc: "Fitur eksklusif yang tidak ditemukan di build standar — dirancang untuk power user yang menuntut kontrol, keamanan, dan gaya.",
      items: [
        { n:"01", jp:"意匠", title:"Desain Material 3", body:"UI yang sepenuhnya didesain ulang mengikuti pedoman Android Material 3 terbaru dengan warna dinamis." },
        { n:"02", jp:"隠形", title:"Enhanced Hide", body:"Penghindaran deteksi superior dengan generator nama paket acak baru dan mekanisme stealth berlapis." },
        { n:"03", jp:"許可", title:"Logika SuList Baru", body:"Pendekatan whitelist yang ditingkatkan untuk manajemen root, memastikan hanya aplikasi tepercaya yang mendapat akses." },
        { n:"04", jp:"守護", title:"Perlindungan Bootloop", body:"Keamanan pertama. Mekanisme bawaan mendeteksi dan memulihkan bootloop yang disebabkan modul secara otomatis." },
        { n:"05", jp:"組立", title:"Manajemen Modul", body:"Instalasi bulk modul, backup, dan pulihkan seluruh pengaturan Anda dengan satu klik." },
        { n:"06", jp:"探索", title:"WebUI Diperluas", body:"Mesin WebUI diperluas plus pencarian modul online untuk menemukan dan menginstal alat secara instan." },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · Catatan Perubahan",
      sectionTitle: "Jejak sang rubah",
      entries: [
        { version:"v30.7", date:"13 Maret 2026", tag:"Terbaru", items:["Upstream ke v30.7","UI baru dan ditingkatkan","Teknik penyembunyian Magisk baru","Merge logika hide — SuList / MagiskHide di Superuser","Widget Action / WebUI homescreen","Tema Ramadan (terlambat, tapi ditambahkan)"], sub:{ label:"Peningkatan Zygisk terhadap deteksi", items:["libandroid_runtime RSS","Deteksi LoveSy Zygisk","Pelacakan error native bridge","Satu injeksi lagi (WIP)"] } },
        { version:"Update Silver", date:"2 Februari 2026", items:["Update UI besar","Perbaikan berbagai masalah UI","Warna baru — Silver","Dukungan ReZygisk","Logika KernelPatch","Merge Superuser dengan SuList","Peningkatan logika SuList","Update API WebUI","Tombol hapus log Superuser","Peningkatan penyembunyian Zygisk","Modul KPM internal"], sub:{ label:"Menambahkan 4 bahasa baru", items:["Turki (tr)","Rusia (ru)","China Tradisional (zh-rTW)","Indonesia (id)"] } },
        { version:"v30.7", date:"14 Januari 2026", items:["Update Kitsune ke v30.7","UI Material 3 baru","Enhanced Hide","Logika SuList baru","Nama paket baru","Perlindungan bootloop","Instalasi bulk modul","Backup / restore modul","Mesin WebUI diperluas","Pencarian modul online","Installer modul independen"] },
      ],
    },
    download: {
      offering: "奉納 · Persembahan",
      title: "Siap untuk upgrade?",
      releaseLabel: "Versi Rilis",
      downloadBtn: "Unduh APK",
      requires: "Membutuhkan Android 5.0+",
      highlights: [
        { jp:"独立", t:"Installer Modul Independen" },
        { jp:"核心", t:"Core Magisk Diperbarui" },
        { jp:"名前", t:"Nama Paket Baru" },
      ],
    },
    footer: {
      tagline: "Evolusi manajemen root. Fork Magisk yang ditempa untuk kekuatan, keamanan, dan seni tetap tak terlihat.",
      columns: [
        { title:"Produk", jp:"製品", links:[{text:"Fitur & Catatan Perubahan",href:"#features"},{text:"Unduh",href:"#download"}] },
        { title:"Komunitas", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"Dokumentasi",href:"#"},{text:"Dukungan",href:"#"}] },
      ],
      copyright: "© 2026 Proyek Kitsune Mask. Tidak berafiliasi dengan Google atau TopJohnWu.",
    },
  },

  // ───────────────────────────── JAPANESE ─────────────────────────────
  ja: {
    nav: {
      home: "ホーム", homeJp: "家",
      features: "機能", featuresJp: "術",
      download: "ダウンロード", downloadJp: "取",
      downloadMobile: "ダウンロード v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "ルート管理の",
      titleLine2: "進化",
      description: "Material 3デザイン、高度なSuListロジック、堅牢なブートループ保護を備えた強力なMagiskフォーク。かつてないほどデバイスを制御しましょう。",
      downloadBtn: "ダウンロード v30.7",
      telegramBtn: "Telegramに参加",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","強化ハイド","ブートループ保護","WebUI","モジュールバックアップ","ステルス","ランダムパッケージ名"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "仮面の下に",
      sectionDesc: "標準ビルドにはない独自機能——制御、安全性、スタイルを求めるパワーユーザーのために設計。",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 デザイン", body:"最新のAndroid Material 3ガイドラインに従って完全にリデザインされたUI。ダイナミックカラーで洗練された表現力豊かな体験。" },
        { n:"02", jp:"隠形", title:"強化ハイド", body:"新しいランダムパッケージ名ジェネレーターと多層ステルスメカニズムによる優れた検出回避。" },
        { n:"03", jp:"許可", title:"新SuListロジック", body:"ルート管理のための改良されたホワイトリストアプローチ。信頼されたアプリのみがアクセスを取得。" },
        { n:"04", jp:"守護", title:"ブートループ保護", body:"安全第一。モジュールによるブートループを自動的に検出して回復する内蔵メカニズム。" },
        { n:"05", jp:"組立", title:"モジュール管理", body:"モジュールの一括インストール、バックアップ、ワンクリックで全セットアップを復元。" },
        { n:"06", jp:"探索", title:"拡張WebUI", body:"拡張WebUIエンジンとオンラインモジュール検索で即座にツールを見つけてインストール。" },
      ],
    },
    changelog: {
      sectionTag: "更新履歴",
      sectionTitle: "狐の足跡",
      entries: [
        { version:"v30.7", date:"2026年3月13日", tag:"最新", items:["v30.7にアップストリーム","新しく改善されたUI","新しいMagisk隠蔽技術を実装","Magisk hideロジックを統合 — SuList / MagiskHide","Action / WebUIホーム画面ウィジェット","ラマダンテーマ（遅れましたが追加）"], sub:{ label:"検出に対するZygiskの強化", items:["libandroid_runtime RSS","LoveSy Zygisk検出","ネイティブブリッジエラートレース","もう一つのインジェクション（WIP）"] } },
        { version:"シルバーアップデート", date:"2026年2月2日", items:["大規模UIアップデート","複数のUI問題を修正","新色 — シルバー","ReZygiskサポート追加","KernelPatchロジック実装","SuList有効時にスーパーユーザーを統合","SuListロジック改善","WebUI API更新","スーパーユーザーログクリアボタン","Zygisk隠蔽強化","KPMモジュール追加"], sub:{ label:"4つの新言語を追加", items:["トルコ語 (tr)","ロシア語 (ru)","繁体中国語 (zh-rTW)","インドネシア語 (id)"] } },
        { version:"v30.7", date:"2026年1月14日", items:["Kitsuneをv30.7に更新","Material 3新UI","強化ハイド","新SuListモードロジック","新パッケージ名","ブートループ保護追加","モジュール一括インストール","モジュールバックアップ/復元","拡張WebUIエンジン","オンラインモジュール検索","独立モジュールインストーラー"] },
      ],
    },
    download: {
      offering: "奉納",
      title: "アップグレードの準備はできましたか？",
      releaseLabel: "リリースバージョン",
      downloadBtn: "APKをダウンロード",
      requires: "Android 5.0以上が必要",
      highlights: [
        { jp:"独立", t:"独立モジュールインストーラー" },
        { jp:"核心", t:"更新されたMagiskコア" },
        { jp:"名前", t:"新パッケージ名" },
      ],
    },
    footer: {
      tagline: "ルート管理の進化。力、安全、そして見えないままでいる技術のために鍛えられたMagiskフォーク。",
      columns: [
        { title:"製品", jp:"製品", links:[{text:"機能と更新履歴",href:"#features"},{text:"ダウンロード",href:"#download"}] },
        { title:"コミュニティ", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"ドキュメント",href:"#"},{text:"サポート",href:"#"}] },
      ],
      copyright: "© 2026 Kitsune Maskプロジェクト。GoogleまたはTopJohnWuとは関係ありません。",
    },
  },

  // ───────────────────────────── TURKISH ─────────────────────────────
  tr: {
    nav: {
      home: "Ana Sayfa", homeJp: "家",
      features: "Özellikler", featuresJp: "術",
      download: "İndir", downloadJp: "取",
      downloadMobile: "İndir v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "Root Yönetiminin",
      titleLine2: "Evrimi",
      description: "Material 3 tasarımı, gelişmiş SuList mantığı ve sağlam bootloop koruması ile güçlü bir Magisk fork'u. Cihazınızı daha önce hiç olmadığı gibi kontrol edin.",
      downloadBtn: "İndir v30.7",
      telegramBtn: "Telegram'a Katıl",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","Gelişmiş Gizleme","Bootloop Koruması","WebUI","Modül Yedekleme","Gizlilik","Rastgele Paket Adı"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "Maskenin Altında",
      sectionDesc: "Standart sürümlerde bulunmayan özel özellikler — kontrol, güvenlik ve stil talep eden ileri düzey kullanıcılar için tasarlandı.",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 Tasarım", body:"En son Android Material 3 yönergelerini takip eden, dinamik renklerle tamamen yeniden tasarlanmış UI." },
        { n:"02", jp:"隠形", title:"Gelişmiş Gizleme", body:"Yeni rastgele paket adı oluşturucu ve çok katmanlı gizlilik mekanizmalarıyla üstün tespit kaçınma." },
        { n:"03", jp:"許可", title:"Yeni SuList Mantığı", body:"Root yönetimi için geliştirilmiş beyaz liste yaklaşımı, yalnızca güvenilir uygulamaların erişim almasını sağlar." },
        { n:"04", jp:"守護", title:"Bootloop Koruması", body:"Güvenlik önce gelir. Modül kaynaklı bootloop'ları otomatik olarak tespit eden ve kurtaran yerleşik mekanizmalar." },
        { n:"05", jp:"組立", title:"Modül Yönetimi", body:"Toplu modül yükleme, yedekleme yapma ve tek tıkla tüm kurulumunuzu geri yükleme." },
        { n:"06", jp:"探索", title:"Genişletilmiş WebUI", body:"Genişletilmiş WebUI motoru ve araçları anında bulmak ve yüklemek için çevrimiçi modül arama." },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · Değişiklik Günlüğü",
      sectionTitle: "Tilkinin izi",
      entries: [
        { version:"v30.7", date:"13 Mart 2026", tag:"En Son", items:["v30.7'ye güncellendi","Yeni ve geliştirilmiş UI","Yeni Magisk gizleme teknikleri","Magisk hide mantığı birleştirildi — SuList / MagiskHide","Action / WebUI ana ekran widget'ı","Ramazan teması (geç, ama eklendi)"], sub:{ label:"Tespite karşı Zygisk güçlendirildi", items:["libandroid_runtime RSS","LoveSy Zygisk tespiti","Native bridge hata takibi","Bir enjeksiyon daha (WIP)"] } },
        { version:"Silver Güncelleme", date:"2 Şubat 2026", items:["Büyük UI güncellemeleri","Birden fazla UI sorunu düzeltildi","Yeni renk — Gümüş","ReZygisk desteği","KernelPatch mantığı","SuList etkinken Superuser birleştirildi","SuList mantığı iyileştirildi","WebUI API'leri güncellendi","Superuser log temizleme düğmesi","Zygisk gizleme iyileştirildi","KPM modülü eklendi"], sub:{ label:"4 yeni dil eklendi", items:["Türkçe (tr)","Rusça (ru)","Geleneksel Çince (zh-rTW)","Endonezce (id)"] } },
        { version:"v30.7", date:"14 Ocak 2026", items:["Kitsune v30.7'ya güncellendi","Material 3 yeni UI","Gelişmiş gizleme","Yeni SuList modu","Yeni paket adı","Bootloop koruması","Toplu modül yükleme","Modül yedekleme / geri yükleme","Genişletilmiş WebUI","Çevrimiçi modül arama","Bağımsız modül yükleyici"] },
      ],
    },
    download: {
      offering: "奉納 · Sunu",
      title: "Yükseltmeye hazır mısınız?",
      releaseLabel: "Sürüm Versiyonu",
      downloadBtn: "APK İndir",
      requires: "Android 5.0+ gerektirir",
      highlights: [
        { jp:"独立", t:"Bağımsız Modül Yükleyici" },
        { jp:"核心", t:"Güncellenmiş Magisk Çekirdeği" },
        { jp:"名前", t:"Yeni Paket Adı" },
      ],
    },
    footer: {
      tagline: "Root yönetiminin evrimi. Güç, güvenlik ve görünmez kalma sanatı için dövülmüş bir Magisk fork'u.",
      columns: [
        { title:"Ürün", jp:"製品", links:[{text:"Özellikler & Günlük",href:"#features"},{text:"İndir",href:"#download"}] },
        { title:"Topluluk", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"Dokümantasyon",href:"#"},{text:"Destek",href:"#"}] },
      ],
      copyright: "© 2026 Kitsune Mask Projesi. Google veya TopJohnWu ile bağlantılı değildir.",
    },
  },

  // ───────────────────────────── KOREAN ─────────────────────────────
  ko: {
    nav: {
      home: "홈", homeJp: "家",
      features: "기능", featuresJp: "術",
      download: "다운로드", downloadJp: "取",
      downloadMobile: "다운로드 v30.7",
    },
    hero: {
      tagline: "狐面 · v30.7",
      titleLine1: "루트 관리의",
      titleLine2: "진화",
      description: "Material 3 디자인, 고급 SuList 로직, 강력한 부트루프 보호를 갖춘 강력한 Magisk 포크. 이전에 없던 방식으로 기기를 제어하세요.",
      downloadBtn: "다운로드 v30.7",
      telegramBtn: "Telegram 참여",
      kanjiLeft: "神社の狐", kanjiRight: "根の管理",
    },
    marquee: ["Material 3","SuList","향상된 숨기기","부트루프 보호","WebUI","모듈 백업","스텔스","랜덤 패키지명"],
    features: {
      sectionTag: "仮面の下",
      sectionTitle: "가면 아래",
      sectionDesc: "표준 빌드에서는 찾을 수 없는 독점 기능 — 제어, 안전, 스타일을 원하는 파워 유저를 위해 설계되었습니다.",
      items: [
        { n:"01", jp:"意匠", title:"Material 3 디자인", body:"최신 Android Material 3 가이드라인을 따라 완전히 새롭게 디자인된 UI, 다이나믹 컬러 지원." },
        { n:"02", jp:"隠形", title:"향상된 숨기기", body:"새로운 랜덤 패키지명 생성기와 다중 레이어 스텔스 메커니즘으로 뛰어난 탐지 회피." },
        { n:"03", jp:"許可", title:"새로운 SuList 로직", body:"신뢰할 수 있는 앱만 접근을 보장하는 개선된 화이트리스트 루트 관리 방식." },
        { n:"04", jp:"守護", title:"부트루프 보호", body:"안전 최우선. 모듈로 인한 부트루프를 자동으로 감지하고 복구하는 내장 메커니즘." },
        { n:"05", jp:"組立", title:"모듈 관리", body:"모듈 일괄 설치, 백업 수행, 원클릭으로 전체 설정 복원." },
        { n:"06", jp:"探索", title:"확장된 WebUI", body:"확장된 WebUI 엔진과 온라인 모듈 검색으로 도구를 즉시 찾아 설치." },
      ],
    },
    changelog: {
      sectionTag: "更新履歴 · 변경 기록",
      sectionTitle: "여우의 발자취",
      entries: [
        { version:"v30.7", date:"2026년 3월 13일", tag:"최신", items:["v30.7로 업스트림","새롭고 개선된 UI","새로운 Magisk 숨기기 기술 구현","Magisk hide 로직 통합 — SuList / MagiskHide","Action / WebUI 홈 화면 위젯","라마단 테마 (늦었지만 추가)"], sub:{ label:"탐지에 대한 Zygisk 강화", items:["libandroid_runtime RSS","LoveSy Zygisk 탐지","네이티브 브릿지 오류 추적","하나 더 인젝션 (WIP)"] } },
        { version:"실버 업데이트", date:"2026년 2월 2일", items:["대규모 UI 업데이트","여러 UI 문제 수정","새로운 색상 — 실버","ReZygisk 지원 추가","KernelPatch 로직 구현","SuList 활성화 시 슈퍼유저 통합","SuList 로직 개선","WebUI API 업데이트","슈퍼유저 로그 삭제 버튼","Zygisk 숨기기 강화","KPM 모듈 추가"], sub:{ label:"4개 새로운 언어 추가", items:["터키어 (tr)","러시아어 (ru)","번체 중국어 (zh-rTW)","인도네시아어 (id)"] } },
        { version:"v30.7", date:"2026년 1월 14일", items:["Kitsune v30.7 업데이트","Material 3 새 UI","향상된 숨기기","새 SuList 모드","새 패키지명","부트루프 보호 추가","모듈 일괄 설치","모듈 백업/복원","확장 WebUI 엔진","온라인 모듈 검색","독립 모듈 설치 프로그램"] },
      ],
    },
    download: {
      offering: "奉納 · 봉납",
      title: "업그레이드할 준비가 되셨나요?",
      releaseLabel: "릴리스 버전",
      downloadBtn: "APK 다운로드",
      requires: "Android 5.0+ 필요",
      highlights: [
        { jp:"独立", t:"독립 모듈 설치 프로그램" },
        { jp:"核心", t:"업데이트된 Magisk 코어" },
        { jp:"名前", t:"새 패키지명" },
      ],
    },
    footer: {
      tagline: "루트 관리의 진화. 힘, 안전, 그리고 보이지 않는 기술을 위해 만들어진 Magisk 포크.",
      columns: [
        { title:"제품", jp:"製品", links:[{text:"기능 및 변경 기록",href:"#features"},{text:"다운로드",href:"#download"}] },
        { title:"커뮤니티", jp:"仲間", links:[{text:"Telegram",href:"#"},{text:"GitHub",href:"#"},{text:"문서",href:"#"},{text:"지원",href:"#"}] },
      ],
      copyright: "© 2026 Kitsune Mask 프로젝트. Google 또는 TopJohnWu와 관련이 없습니다.",
    },
  },
};
