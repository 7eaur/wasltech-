(() => {
  const script = document.currentScript;
  const host = script?.dataset.analyticsHost;
  const measurementId = script?.dataset.measurementId;

  if (!host || !/^G-[A-Z0-9]+$/.test(measurementId ?? "") || location.hostname !== host) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const remote = document.createElement("script");
  remote.async = true;
  remote.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(remote);
})();
