var STYLE_FIELDS = ['font', 'fontWeight', 'fontStyle', 'fontSize', 'fontFamily', 'letterSpacing'];
export default function updateTextNode(node, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      text = _ref.text;

  var textNode = node;

  if (textNode.textContent !== text) {
    textNode.textContent = typeof text === 'undefined' ? null : text;
  }

  if (textNode.getAttribute('class') !== className) {
    textNode.setAttribute('class', className != null ? className : '');
  } // Clear style
  // Note: multi-word property names are hyphenated and not camel-cased.


  textNode.style.removeProperty('font');
  textNode.style.removeProperty('font-weight');
  textNode.style.removeProperty('font-style');
  textNode.style.removeProperty('font-size');
  textNode.style.removeProperty('font-family');
  textNode.style.removeProperty('letter-spacing'); // Apply new style
  // Note: the font field will auto-populate other font fields when applicable.

  STYLE_FIELDS.filter(function (field) {
    return typeof style[field] !== 'undefined' && style[field] !== null;
  }).forEach(function (field) {
    textNode.style[field] = "" + style[field];
  });
  return textNode;
}