import { brand } from "./brand.js";
import { defaultLocale, locales } from "./locales.js";

export const site = Object.freeze({
  origin: "https://www.wasl-tech.com",
  brand,
  locale: locales[defaultLocale],
  market: Object.freeze({ ar: "اليمن + الخليج", en: "Yemen + Gulf" }),
  contact: Object.freeze({
    phoneDisplay: "+967 775 377 979",
    phoneUri: "+967775377979",
    whatsapp: "https://wa.me/967775377979",
    email: "wasltechp@gmail.com",
    instagram: Object.freeze({
      handle: "@wasltech.yem",
      url: "https://www.instagram.com/wasltech.yem"
    }),
    domain: "www.wasl-tech.com"
  })
});
