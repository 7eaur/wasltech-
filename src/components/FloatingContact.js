import { site } from "../config/site.js";
import { escapeHtml } from "../lib/html.js";
import { icon } from "./icons.js";

const prompts=Object.freeze({
  ar:{message:"مرحباً وصل تك، أريد استشارة بخصوص مشروع جديد.",label:"تحدث معنا على واتساب"},
  en:{message:"Hello Wasl Tech, I would like to discuss a new project.",label:"Chat with us on WhatsApp"}
});

export function FloatingContact({locale="ar"}={}){
  const copy=prompts[locale];
  if(!copy) throw new Error("Unsupported floating contact locale");
  const href=`${site.contact.whatsapp}?text=${encodeURIComponent(copy.message)}`;
  return `<a class="floating-contact" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(copy.label)}" title="${escapeHtml(copy.label)}">
    ${icon("whatsapp","floating-contact__icon")}
    <span class="sr-only">${escapeHtml(copy.label)}</span>
  </a>`;
}
