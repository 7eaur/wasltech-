import { escapeHtml } from "../lib/html.js";

const types = new Set(["text", "email", "tel", "url"]);

export function FormField({
  id,
  label,
  name = id,
  type = "text",
  placeholder = "",
  hint = "",
  required = false,
  textarea = false,
  rows = 5
}) {
  if (!id || !label) throw new Error("FormField requires id and label.");
  if (!textarea && !types.has(type)) throw new Error(`Unsupported FormField type: ${type}`);

  const hintId = hint ? `${id}-hint` : "";
  const describedBy = hintId ? ` aria-describedby="${hintId}"` : "";
  const requiredMarkup = required ? " required aria-required=\"true\"" : "";

  const control = textarea
    ? `<textarea class="textarea" id="${escapeHtml(id)}" name="${escapeHtml(name)}" rows="${Number(rows)}" placeholder="${escapeHtml(placeholder)}"${describedBy}${requiredMarkup}></textarea>`
    : `<input class="input" id="${escapeHtml(id)}" name="${escapeHtml(name)}" type="${type}" placeholder="${escapeHtml(placeholder)}"${describedBy}${requiredMarkup}>`;

  return `
    <div class="form-field">
      <label class="form-label" for="${escapeHtml(id)}">${escapeHtml(label)}${required ? " *" : ""}</label>
      ${control}
      ${hint ? `<p class="form-hint" id="${hintId}">${escapeHtml(hint)}</p>` : ""}
    </div>
  `;
}
