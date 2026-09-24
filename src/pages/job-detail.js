import { routes } from "../config/routes.js";
import { CallToAction } from "../components/CallToAction.js";
import { HeroMedia } from "../components/HeroMedia.js";
import { getJobHeroMedia } from "../config/hero-media.js";
import { documentTemplate } from "../templates/document.js";
import { breadcrumbSchema, jobPostingSchema } from "../seo/structured-data.js";
import { escapeHtml } from "../lib/html.js";

function list(items=[]){
  return `<ul>${items.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

export function jobDetailPage(job,locale="ar"){
  const copy=job?.content?.[locale];
  if(!job || !copy) throw new Error(`Job detail content missing for locale: ${locale}`);
  const path=routes.job(job.slug,locale);
  const other=locale==="ar"?"en":"ar";
  const media=getJobHeroMedia(job,locale);
  const availableLocales=["ar","en"].filter((item)=>job.localeStatus?.[item]==="ready" && job.content?.[item]);
  const alternatePaths=Object.freeze(Object.fromEntries(
    availableLocales.map((item)=>[item,routes.job(job.slug,item)])
  ));
  const alternatePath=availableLocales.includes(other)
    ? routes.job(job.slug,other)
    : routes.careers(other);

  const body=`
    <nav class="job-breadcrumb" aria-label="${locale==="ar"?"مسار الصفحة":"Breadcrumb"}">
      <div class="container">
        <ol>
          <li><a href="${routes.home(locale)}">${locale==="ar"?"الرئيسية":"Home"}</a></li>
          <li><a href="${routes.careers(locale)}">${locale==="ar"?"الوظائف":"Careers"}</a></li>
          <li aria-current="page">${escapeHtml(copy.title)}</li>
        </ol>
      </div>
    </nav>

    <section class="job-hero">
      <div class="container job-hero__grid">
        <div class="job-hero__copy">
          <p class="eyebrow">${escapeHtml(job.employmentType ?? (locale==="ar"?"فرصة عمل":"Role"))}</p>
          <h1>${escapeHtml(copy.title)}</h1>
          <p>${escapeHtml(copy.summary)}</p>
          ${job.location ? `<p class="job-hero__location">${escapeHtml(job.location)}</p>` : ""}
        </div>
        ${HeroMedia({...media,className:"job-hero__media"})}
      </div>
    </section>

    <section class="section job-content">
      <div class="container job-content__grid">
        <section>
          <p class="eyebrow">${locale==="ar"?"المسؤوليات":"Responsibilities"}</p>
          <h2>${locale==="ar"?"ما الذي سيعمل عليه هذا الدور":"What this role works on"}</h2>
          ${list(copy.responsibilities)}
        </section>
        <section>
          <p class="eyebrow">${locale==="ar"?"المتطلبات":"Requirements"}</p>
          <h2>${locale==="ar"?"ما الذي نبحث عنه":"What we are looking for"}</h2>
          ${list(copy.requirements)}
        </section>
      </div>
    </section>

    ${CallToAction({
      kicker:locale==="ar"?"التقديم":"Apply",
      title:locale==="ar"?"راجع تفاصيل الدور ثم تواصل معنا بالطريقة الموضحة في الإعلان.":"Review the role details, then contact us through the method stated for the opening.",
      description:locale==="ar"?"لا نعتبر فتح الصفحة أو التواصل العام طلب توظيف مكتملًا؛ طريقة التقديم الفعلية تُحدد مع كل فرصة منشورة.":"Viewing the page or sending a general message is not a completed application; the actual application method is defined with each published role.",
      action:{href:job.applyUrl || routes.contact(locale),label:locale==="ar"?"تواصل معنا":"Contact us"}
    })}
  `;

  return documentTemplate({
    title:copy.seo.title,
    description:copy.seo.description,
    body,
    locale,
    activePath:routes.careers(locale),
    alternatePath,
    canonicalPath:path,
    alternatePaths,
    ogTitle:copy.seo.title,
    ogDescription:copy.seo.description,
    ogImage:media.src,
    structuredData:[
      jobPostingSchema({
        locale,
        title:copy.title,
        description:copy.summary,
        path,
        publishedAt:job.publishedAt,
        employmentType:job.employmentType,
        location:job.location
      }),
      breadcrumbSchema([
        {name:locale==="ar"?"الرئيسية":"Home",path:routes.home(locale)},
        {name:locale==="ar"?"الوظائف":"Careers",path:routes.careers(locale)},
        {name:copy.title,path}
      ])
    ]
  });
}
