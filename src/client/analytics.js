/**
 * Privacy-first GA4 measurement.
 * No remote analytics is loaded before an explicit opt-in choice.
 * A locally persisted choice can be changed from the footer at any time.
 * Preview QA: ?previewAnalyticsConsent=1 displays UI without sending data.
 */
(() => {
  const script = document.currentScript;
  const host = script?.dataset.analyticsHost;
  const measurementId = script?.dataset.measurementId;
  if (!host || !/^G-[A-Z0-9]+$/.test(measurementId ?? "")) return;

  const canMeasure = location.hostname === host;
  const previewUi = !canMeasure &&
    location.hostname.endsWith(".vercel.app") &&
    new URLSearchParams(location.search).get("previewAnalyticsConsent") === "1";
  if (!canMeasure && !previewUi) return;

  const storageKey = "wasltech-analytics-preference-v1";
  const isArabic = document.documentElement.lang === "ar";
  const labels = isArabic
    ? {
        title: "إعدادات التحليلات",
        message: "نستخدم تحليلات اختيارية لفهم استخدام الموقع وتحسينه. لا نبدأ قياس الزيارات إلا بعد موافقتك، ويمكنك تغيير قرارك لاحقًا.",
        allow: "السماح بالتحليلات",
        decline: "رفض التحليلات",
        settings: "إعدادات التحليلات"
      }
    : {
        title: "Analytics preferences",
        message: "Optional analytics help us understand and improve the site. We do not start measuring visits unless you agree, and you can change your choice later.",
        allow: "Allow analytics",
        decline: "Decline analytics",
        settings: "Analytics preferences"
      };

  let consent;
  try { consent = localStorage.getItem(storageKey); }
  catch { consent = null; }
  if (!["granted","denied"].includes(consent)) consent = null;

  // Disable measurement at source until consent, including after a later opt-out.
  window[`ga-disable-${measurementId}`] = consent !== "granted";
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  const denied = {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  };
  window.gtag("consent","default",denied);

  let started = false;
  function beginMeasurement() {
    if (!canMeasure || started) return;
    started = true;
    window[`ga-disable-${measurementId}`] = false;
    window.gtag("consent","update",{
      ...denied,
      analytics_storage: "granted"
    });
    window.gtag("js",new Date());
    window.gtag("config",measurementId,{
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const remote = document.createElement("script");
    remote.async = true;
    remote.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(remote);
  }

  // Remove only our own GA cookies on opting out after a prior opt-in.
  function clearAnalyticsCookies() {
    try {
      for(const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if(!/^_ga(?:_|$)/.test(name)) continue;
        for(const domain of [undefined, host, "." + host]) {
          document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? "; Domain=" + domain : ""}`;
        }
      }
    } catch { /* Browser cookie restrictions keep the default denied. */ }
  }

  function saveChoice(value) {
    consent = value;
    try { localStorage.setItem(storageKey,value); } catch { /* Optional; future pages ask again. */ }
    if (value === "granted") beginMeasurement();
    else {
      window[`ga-disable-${measurementId}`] = true;
      window.gtag("consent","update",denied);
      clearAnalyticsCookies();
    }
    panel.hidden = true;
  }

  function button(text,cssClass,handler) {
    const element = document.createElement("button");
    element.type = "button";
    element.className = cssClass;
    element.textContent = text;
    element.addEventListener("click",handler);
    return element;
  }

  const panel = document.createElement("aside");
  panel.className = "analytics-consent";
  panel.setAttribute("role","region");
  panel.setAttribute("aria-label",labels.title);
  const title = document.createElement("strong");
  title.className = "analytics-consent__title";
  title.textContent = labels.title;
  const paragraph = document.createElement("p");
  paragraph.textContent = labels.message;
  const actions = document.createElement("div");
  actions.className = "analytics-consent__actions";
  actions.append(
    button(labels.allow,"analytics-consent__button analytics-consent__button--allow",()=>saveChoice("granted")),
    button(labels.decline,"analytics-consent__button analytics-consent__button--decline",()=>saveChoice("denied"))
  );
  panel.append(title,paragraph,actions);
  panel.hidden = consent !== null;
  document.body.append(panel);

  const footer = document.querySelector(".site-footer");
  if (footer) {
    const preferences = button(labels.settings,"analytics-consent__settings",()=>{ panel.hidden = false; });
    footer.append(preferences);
  }
  if (consent === "granted") beginMeasurement();
})();
