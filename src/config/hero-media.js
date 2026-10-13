const PAGE_MEDIA = Object.freeze({
  services: Object.freeze({ src:"/assets/media/services-hero.webp", width:1536, height:961, temporary:false }),
  portfolio: Object.freeze({ src:"/assets/media/portfolio-hero.webp", width:1536, height:961, temporary:false }),
  about: Object.freeze({ src:"/assets/media/about-us.webp", width:1280, height:720, temporary:false }),
  process: Object.freeze({ src:"/assets/media/process-hero.webp", width:1536, height:961, temporary:false }),
  contact: Object.freeze({ src:"/assets/media/contact-project-planner-hero.webp", width:1536, height:961, temporary:false }),
  startProject: Object.freeze({ src:"/assets/media/contact-project-planner-hero.webp", width:1536, height:961, temporary:false }),
  faq: Object.freeze({ src:"/assets/media/faq-insights-hero.webp", width:1536, height:961, temporary:false }),
  insights: Object.freeze({ src:"/assets/media/faq-insights-hero.webp", width:1536, height:961, temporary:false }),
  careers: Object.freeze({ src:"/assets/media/about-us.webp", width:1280, height:720, temporary:true }),
  privacy: Object.freeze({ src:"/assets/services/technical-solutions.webp", width:1280, height:720, temporary:true }),
  terms: Object.freeze({ src:"/assets/services/technical-solutions.webp", width:1280, height:720, temporary:true }),
  notFound: Object.freeze({ src:"/assets/media/home-hero.webp", width:1200, height:900, temporary:true })
});

function localizedAlt(locale, ar, en) {
  return locale === "ar" ? ar : en;
}

const PAGE_MEDIA_ALT = Object.freeze({
  services: Object.freeze({ ar:"حلول وخدمات رقمية من وصل تك", en:"Digital services and solutions from Wasl Tech" }),
  portfolio: Object.freeze({ ar:"نماذج من أعمال وصل تك الرقمية", en:"Selected digital work by Wasl Tech" }),
  about: Object.freeze({ ar:"فريق وصل تك وحلول رقمية وتقنية", en:"Wasl Tech team and digital solutions" }),
  process: Object.freeze({ ar:"مراحل تنفيذ مشروع رقمي من التخطيط إلى الإطلاق", en:"Digital project stages from planning to launch" }),
  contact: Object.freeze({ ar:"التواصل مع وصل تك لبدء مشروع رقمي", en:"Contact Wasl Tech to start a digital project" }),
  startProject: Object.freeze({ ar:"تخطيط مشروع رقمي قبل بدء التنفيذ", en:"Planning a digital project before implementation" }),
  faq: Object.freeze({ ar:"أسئلة شائعة حول الخدمات والمشاريع الرقمية", en:"Frequently asked questions about digital services and projects" }),
  insights: Object.freeze({ ar:"مقالات وأدلة حول المواقع والتطبيقات والحلول الرقمية", en:"Guides about websites, apps, and digital solutions" }),
  careers: Object.freeze({ ar:"بيئة العمل مع فريق وصل تك", en:"Working with the Wasl Tech team" }),
  privacy: Object.freeze({ ar:"حماية وخصوصية البيانات في الموقع", en:"Website data privacy and protection" }),
  terms: Object.freeze({ ar:"شروط استخدام موقع وصل تك", en:"Wasl Tech website terms" }),
  notFound: Object.freeze({ ar:"واجهة رقمية من وصل تك", en:"A digital interface by Wasl Tech" })
});

export function getPageHeroMedia(pageKey, locale = "ar") {
  const media = PAGE_MEDIA[pageKey];
  if (!media) throw new Error(`Unknown page hero media key: ${pageKey}`);
  const altCopy = PAGE_MEDIA_ALT[pageKey];
  const alt = altCopy ? localizedAlt(locale, altCopy.ar, altCopy.en) : "";
  return Object.freeze({
    ...media,
    width: media.width ?? 1600,
    height: media.height ?? 1000,
    alt
  });
}

export function getServiceHeroMedia(service, locale = "ar") {
  return Object.freeze({
    src: service.image,
    width: 1280,
    height: 720,
    temporary: false,
    alt: service.content[locale].title
  });
}

export function getProjectHeroMedia(project, locale = "ar") {
  return Object.freeze({
    src: project.image,
    width: project.imageDimensions.width,
    height: project.imageDimensions.height,
    temporary: false,
    alt: project.content[locale].title
  });
}

export function getArticleHeroMedia(article, locale = "ar") {
  return Object.freeze({
    src: article.coverImage || PAGE_MEDIA.insights.src,
    width: article.coverWidth ?? 1600,
    height: article.coverHeight ?? 1000,
    temporary: Boolean(article.coverTemporary ?? !article.coverImage),
    alt: article.content[locale].title
  });
}

export function getJobHeroMedia(job, locale = "ar") {
  return Object.freeze({
    src: job.heroImage || PAGE_MEDIA.careers.src,
    width: job.heroWidth ?? PAGE_MEDIA.careers.width ?? 1600,
    height: job.heroHeight ?? PAGE_MEDIA.careers.height ?? 1000,
    temporary: Boolean(job.heroTemporary ?? !job.heroImage),
    alt: job.content[locale].title
  });
}

export const temporaryHeroKeys = Object.freeze(Object.keys(PAGE_MEDIA).filter((key) => PAGE_MEDIA[key].temporary));
