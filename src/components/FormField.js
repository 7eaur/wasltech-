import { escapeHtml } from "../lib/html.js";

const types = new Set(["text", "email", "tel", "url"]);

export function FormField({
  id,
  label,
  name = id,
  type = "text",
  placeholder = "",
  hint = "",
  error = "",
  required = false,
  disabled = false,
  textarea = false,
  rows = 5
}) {
  if (!id || !label) throw new Error("FormField requires id and label.");
  if (!textarea && !types.has(type)) throw new Error(`Unsupported FormField type: ${type}`);

  const hintId = hint ? `${id}-hint` : "";
  const errorId = error ? `${id}-error` : "";
  const descriptionIds = [hintId, errorId].filter(Boolean).join(" ");
  const describedBy = descriptionIds ? ` aria-describedby="${descriptionIds}"` : "";
  const requiredMarkup = required ? " required aria-required=\"true\"" : "";
  const disabledMarkup = disabled ? " disabled" : "";
  const invalidMarkup = error ? ' aria-invalid="true"' : "";

  const control = textarea
    ? `<textarea class="textarea" id="${escapeHtml(id)}" name="${escapeHtml(name)}" rows="${Number(rows)}" placeholder="${escapeHtml(placeholder)}"${describedBy}${requiredMarkup}${disabledMarkup}${invalidMarkup}></textarea>`
    : `<input class="input" id="${escapeHtml(id)}" name="${escapeHtml(name)}" type="${type}" placeholder="${escapeHtml(placeholder)}"${describedBy}${requiredMarkup}${disabledMarkup}${invalidMarkup}>`;

  return `
    <div class="form-field">
      <label class="form-label" for="${escapeHtml(id)}">${escapeHtml(label)}${required ? " *" : ""}</label>
      ${control}
      ${hint ? `<p class="form-hint" id="${hintId}">${escapeHtml(hint)}</p>` : ""}
      ${error ? `<p class="field-error" id="${errorId}">${escapeHtml(error)}</p>` : ""}
    </div>
  `;
}
