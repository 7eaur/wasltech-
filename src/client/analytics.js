const script = document.querySelector("script[data-analytics-measurement-id]");
const measurementId = script?.dataset.analyticsMeasurementId || "";
const storageKey = script?.dataset.analyticsStorageKey || "wasl_analytics_consent";
const consentPanel = document.querySelector("[data-analytics-consent]");
const acceptButton = document.querySelector("[data-analytics-accept]");
const rejectButton = document.querySelector("[data-analytics-reject]");
const settingsButtons = document.querySelectorAll("[data-analytics-settings]");

const CONSENT_GRANTED = "granted";
const CONSENT_DENIED = "denied";

let analyticsLoaded = false;

function readConsent() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    // Consent still applies for the current page even if storage is unavailable.
  }
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function setConsent(value) {
  gtag("consent", "update", {
    ad_storage: CONSENT_DENIED,
    ad_user_data: CONSENT_DENIED,
    ad_personalization: CONSENT_DENIED,
    analytics_storage: value
  });
}

function loadAnalytics() {
  if (analyticsLoaded || !measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || gtag;

  window.gtag("consent", "default", {
    ad_storage: CONSENT_DENIED,
    ad_user_data: CONSENT_DENIED,
    ad_personalization: CONSENT_DENIED,
    analytics_storage: CONSENT_GRANTED
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: true
  });

  const external = document.createElement("script");
  external.async = true;
  external.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  external.dataset.analyticsProvider = "ga4";
  document.head.append(external);

  analyticsLoaded = true;
}

function expireAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((value) => value.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${location.hostname}; SameSite=Lax`;
  }
}

function showConsent() {
  if (!consentPanel) return;
  consentPanel.hidden = false;
  requestAnimationFrame(() => consentPanel.classList.add("is-visible"));
}

function hideConsent() {
  if (!consentPanel) return;
  consentPanel.classList.remove("is-visible");
  window.setTimeout(() => {
    consentPanel.hidden = true;
  }, 220);
}

function grantConsent() {
  writeConsent(CONSENT_GRANTED);
  loadAnalytics();
  setConsent(CONSENT_GRANTED);
  hideConsent();
}

function denyConsent() {
  writeConsent(CONSENT_DENIED);
  if (analyticsLoaded) setConsent(CONSENT_DENIED);
  expireAnalyticsCookies();
  hideConsent();
}

window.waslTrack = (eventName, params = {}) => {
  if (readConsent() !== CONSENT_GRANTED) return;
  loadAnalytics();
  window.gtag?.("event", eventName, params);
};

acceptButton?.addEventListener("click", grantConsent);
rejectButton?.addEventListener("click", denyConsent);

for (const button of settingsButtons) {
  button.addEventListener("click", () => {
    showConsent();
    acceptButton?.focus({ preventScroll: true });
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || readConsent() !== CONSENT_GRANTED) return;

  const rawHref = link.getAttribute("href") || "";
  let eventName = "";
  let channel = "";

  if (rawHref.startsWith("mailto:")) {
    eventName = "contact_email_click";
    channel = "email";
  } else if (rawHref.startsWith("tel:")) {
    eventName = "contact_phone_click";
    channel = "phone";
  } else {
    let url;
    try {
      url = new URL(link.href, location.href);
    } catch {
      return;
    }

    if (url.hostname === "wa.me" || url.hostname.endsWith(".whatsapp.com")) {
      eventName = "contact_whatsapp_click";
      channel = "whatsapp";
    } else if (url.origin === location.origin && /\/(?:en\/)?start-project\/?$/.test(url.pathname)) {
      eventName = "begin_project_click";
      channel = "start_project";
    }
  }

  if (!eventName) return;
  window.waslTrack?.(eventName, {
    contact_channel: channel,
    page_path: location.pathname
  });
});

const storedConsent = readConsent();
if (storedConsent === CONSENT_GRANTED) {
  loadAnalytics();
} else if (storedConsent !== CONSENT_DENIED) {
  showConsent();
}
