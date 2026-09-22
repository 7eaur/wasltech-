const PAGE_MEDIA = Object.freeze({
  services: Object.freeze({ src:"/assets/gen/hero_portfolio.png", temporary:true }),
  portfolio: Object.freeze({ src:"/assets/gen/hero_portfolio.png", temporary:true }),
  about: Object.freeze({ src:"/assets/about_2.png", temporary:true }),
  process: Object.freeze({ src:"/assets/gen/hero_process.png", temporary:true }),
  contact: Object.freeze({ src:"/assets/gen/hero_contact.png", temporary:true }),
  startProject: Object.freeze({ src:"/assets/gen/hero_contact.png", temporary:true }),
  faq: Object.freeze({ src:"/assets/gen/hero_blog.png", temporary:true }),
  insights: Object.freeze({ src:"/assets/gen/hero_blog.png", temporary:true }),
  careers: Object.freeze({ src:"/assets/about_2.png", temporary:true }),
  privacy: Object.freeze({ src:"/assets/gen/hero_blog.png", temporary:true }),
  terms: Object.freeze({ src:"/assets/gen/hero_process.png", temporary:true }),
  notFound: Object.freeze({ src:"/assets/gen/hero_contact.png", temporary:true })
});

function localizedAlt(locale, ar, en) {
  return locale === "ar" ? ar : en;
}

export function getPageHeroMedia(pageKey, locale = "ar") {
  const media = PAGE_MEDIA[pageKey];
  if (!media) throw new Error(`Unknown page hero media key: ${pageKey}`);
  return Object.freeze({
    ...media,
    width: 1600,
    height: 1000,
    alt: localizedAlt(
      locale,
      "صورة توضيحية مؤقتة لهوية الصفحة",
      "Temporary editorial image for this page"
    )
  });
}

export function getServiceHeroMedia(service, locale = "ar") {
  return Object.freeze({
    src: service.image,
    width: 1600,
    height: 1000,
    temporary: true,
    alt: localizedAlt(
      locale,
      `صورة توضيحية مؤقتة لخدمة ${service.content[locale].title}`,
      `Temporary editorial image for ${service.content[locale].title}`
    )
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
    width: 1600,
    height: 1000,
    temporary: Boolean(article.coverTemporary ?? !article.coverImage),
    alt: article.content[locale].title
  });
}

export function getJobHeroMedia(job, locale = "ar") {
  return Object.freeze({
    src: job.heroImage || PAGE_MEDIA.careers.src,
    width: 1600,
    height: 1000,
    temporary: Boolean(job.heroTemporary ?? !job.heroImage),
    alt: job.content[locale].title
  });
}

export const temporaryHeroKeys = Object.freeze(Object.keys(PAGE_MEDIA));
