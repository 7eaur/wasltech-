const form = document.querySelector("[data-project-planner]");
const review = document.querySelector("[data-planner-review]");
const summary = document.querySelector("[data-planner-summary]");
const whatsapp = document.querySelector("[data-planner-whatsapp]");
const edit = document.querySelector("[data-planner-edit]");
const status = document.querySelector("[data-planner-status]");

if (form && review && summary && whatsapp && edit && status) {
  const locale = form.dataset.locale === "en" ? "en" : "ar";
  const base = form.dataset.whatsappBase;

  const copy = locale === "ar"
    ? {
        prepared: "تم تجهيز التفاصيل للمراجعة. لم يتم إرسال أي بيانات.",
        labels: {
          service: "الاحتياج الأقرب",
          stage: "مرحلة المشروع",
          priority: "الأولوية",
          name: "الاسم",
          phone: "رقم التواصل",
          company: "المشروع / الجهة",
          url: "رابط المشروع الحالي",
          details: "التفاصيل"
        },
        intro: "مرحباً وصل تك، أود مناقشة مشروع.",
        footer: "هذه التفاصيل جهزتها من مخطط المشروع في موقع وصل تك."
      }
    : {
        prepared: "The details are ready for review. Nothing has been sent.",
        labels: {
          service: "Closest need",
          stage: "Project stage",
          priority: "Priority",
          name: "Name",
          phone: "Contact number",
          company: "Project / company",
          url: "Current project URL",
          details: "Details"
        },
        intro: "Hello Wasl Tech, I would like to discuss a project.",
        footer: "I prepared these details using the project planner on the Wasl Tech website."
      };

  const selectedText = (name) => {
    const select = form.elements.namedItem(name);
    if (!(select instanceof HTMLSelectElement)) return "";
    return select.selectedOptions[0]?.textContent?.trim() || "";
  };

  const textValue = (name) => String(form.elements.namedItem(name)?.value || "").trim();

  const collect = () => ({
    service: selectedText("service"),
    stage: selectedText("stage"),
    priority: selectedText("priority"),
    name: textValue("name"),
    phone: textValue("phone"),
    company: textValue("company"),
    url: textValue("url"),
    details: textValue("details")
  });

  const renderSummary = (data) => {
    summary.replaceChildren();

    for (const key of ["service","stage","priority","name","phone","company","url","details"]) {
      if (!data[key]) continue;

      const wrapper = document.createElement("div");
      const term = document.createElement("dt");
      const value = document.createElement("dd");
      term.textContent = copy.labels[key];
      value.textContent = data[key];
      wrapper.append(term, value);
      summary.append(wrapper);
    }
  };

  const buildMessage = (data) => {
    const lines = [
      copy.intro,
      "",
      `${copy.labels.name}: ${data.name}`,
      `${copy.labels.phone}: ${data.phone}`,
      `${copy.labels.service}: ${data.service}`,
      `${copy.labels.stage}: ${data.stage}`,
      `${copy.labels.priority}: ${data.priority}`
    ];

    if (data.company) lines.push(`${copy.labels.company}: ${data.company}`);
    if (data.url) lines.push(`${copy.labels.url}: ${data.url}`);

    lines.push(`${copy.labels.details}: ${data.details}`, "", copy.footer);
    return lines.join("\n");
  };

  const hideReview = () => {
    review.hidden = true;
    status.textContent = "";
  };

  form.addEventListener("input", hideReview);
  form.addEventListener("change", hideReview);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = form.dataset.invalidMessage || "";
      status.focus({ preventScroll: true });
      return;
    }

    const data = collect();
    renderSummary(data);

    const message = buildMessage(data);
    whatsapp.href = `${base}?text=${encodeURIComponent(message)}`;

    review.hidden = false;
    status.textContent = copy.prepared;
    review.focus({ preventScroll: true });
    review.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  edit.addEventListener("click", () => {
    review.hidden = true;
    form.querySelector("select, input, textarea")?.focus();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
