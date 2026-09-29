// Note: some tests use jsdom via vitest config if needed. These are functional when document exists.
export function selectAll(selector, root = (typeof document !== "undefined" ? document : {})) {
  if (!root.querySelectorAll) return [];
  return Array.from(root.querySelectorAll(selector));
}
export function createElementWithText(tag, text) {
  if (typeof document === "undefined") return { tag, textContent: text };
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}
export function addClickListener(el, fn) { if (el) el.addEventListener("click", fn); }
export function setAttributes(el, attrs) { Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v)); }
export function serializeForm(form) {
  if (!form) return {};
  const data = {};
  for (const el of form.elements) if (el.name) data[el.name] = el.value;
  return data;
}
export function removeAllChildren(el) { while (el && el.firstChild) el.removeChild(el.firstChild); }
export function toggleClass(el, cls) { if (el) el.classList.toggle(cls); }
export function delegate(parent, selector, type, handler) {
  if (!parent) return;
  parent.addEventListener(type, e => {
    const match = e.target.closest(selector);
    if (match && parent.contains(match)) handler(e, match);
  });
}
