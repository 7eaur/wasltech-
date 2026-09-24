import { escapeHtml } from "../lib/html.js";

const headingLevels=new Set([2,3]);

function renderAttributes(attributes){
  return Object.entries(attributes ?? {}).map(([name,value])=>{
    if(!/^(data|aria)-[a-z0-9-]+$/.test(name)) throw new Error(`Unsupported MediaCard attribute: ${name}`);
    if(value === true || value === "") return ` ${name}`;
    if(value === false || value == null) return "";
    return ` ${name}="${escapeHtml(String(value))}"`;
  }).join("");
}

export function MediaCard({
  href="",
  image,
  kicker="",
  title,
  body="",
  actionLabel="",
  headingLevel=3,
  featured=false,
  compact=false,
  className="",
  attributes={}
}){
  if(!title) throw new Error("MediaCard requires title.");
  if(!image?.src) throw new Error("MediaCard requires image.src.");
  if(!headingLevels.has(headingLevel)) throw new Error("MediaCard headingLevel must be 2 or 3.");
  if(actionLabel && !href) throw new Error("MediaCard actionLabel requires href.");

  const heading=`h${headingLevel}`;
  const classes=[
    "media-card",
    featured ? "media-card--featured" : "",
    compact ? "media-card--compact" : "",
    className
  ].filter(Boolean).join(" ");
  const attrs=renderAttributes(attributes);
  const width=Number(image.width ?? 1280);
  const height=Number(image.height ?? 720);
  const alt=image.alt ?? title;
  const imageMarkup=`<img src="${escapeHtml(image.src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="${width}" height="${height}">`;
  const media=href
    ? `<a class="media-card__media" href="${escapeHtml(href)}" aria-label="${escapeHtml(title)}">${imageMarkup}</a>`
    : `<figure class="media-card__media">${imageMarkup}</figure>`;
  const titleMarkup=href
    ? `<a href="${escapeHtml(href)}">${escapeHtml(title)}</a>`
    : escapeHtml(title);

  return `
    <article class="${escapeHtml(classes)}"${attrs}>
      ${media}
      <div class="media-card__copy">
        ${kicker ? `<p class="eyebrow">${escapeHtml(kicker)}</p>` : ""}
        <${heading} class="media-card__title">${titleMarkup}</${heading}>
        ${body ? `<p class="media-card__body">${escapeHtml(body)}</p>` : ""}
        ${actionLabel ? `<a class="text-link media-card__action" href="${escapeHtml(href)}">${escapeHtml(actionLabel)}</a>` : ""}
      </div>
    </article>
  `;
}
