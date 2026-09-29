// Browser-only. In node we mock basic document
export function selectAll(selector, root = document) { return []; }
export function createElementWithText(tag, text) { return {}; }
export function addClickListener(el, fn) {}
export function setAttributes(el, attrs) {}
export function serializeForm(form) { return {}; }
export function delegate(parent, selector, event, handler) {}
export function removeAllChildren(el) {}
export function toggleClass(el, cls) {}
