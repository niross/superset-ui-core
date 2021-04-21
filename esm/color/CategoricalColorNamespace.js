import CategoricalColorScale from './CategoricalColorScale';
import getCategoricalSchemeRegistry from './CategoricalSchemeRegistrySingleton';
import stringifyAndTrim from './stringifyAndTrim';

var CategoricalColorNamespace = /*#__PURE__*/function () {
  function CategoricalColorNamespace(name) {
    this.name = void 0;
    this.forcedItems = void 0;
    this.scales = void 0;
    this.name = name;
    this.scales = {};
    this.forcedItems = {};
  }

  var _proto = CategoricalColorNamespace.prototype;

  _proto.getScale = function getScale(schemeId) {
    var _ref, _scheme$colors;

    var id = (_ref = schemeId != null ? schemeId : getCategoricalSchemeRegistry().getDefaultKey()) != null ? _ref : '';
    var scale = this.scales[id];

    if (scale) {
      return scale;
    }

    var scheme = getCategoricalSchemeRegistry().get(id);
    var newScale = new CategoricalColorScale((_scheme$colors = scheme == null ? void 0 : scheme.colors) != null ? _scheme$colors : [], this.forcedItems);
    this.scales[id] = newScale;
    return newScale;
  }
  /**
   * Enforce specific color for given value
   * This will apply across all color scales
   * in this namespace.
   * @param {*} value value
   * @param {*} forcedColor color
   */
  ;

  _proto.setColor = function setColor(value, forcedColor) {
    this.forcedItems[stringifyAndTrim(value)] = forcedColor;
    return this;
  };

  return CategoricalColorNamespace;
}();

export { CategoricalColorNamespace as default };
var namespaces = {};
export var DEFAULT_NAMESPACE = 'GLOBAL';
export function getNamespace(name) {
  if (name === void 0) {
    name = DEFAULT_NAMESPACE;
  }

  var instance = namespaces[name];

  if (instance) {
    return instance;
  }

  var newInstance = new CategoricalColorNamespace(name);
  namespaces[name] = newInstance;
  return newInstance;
}
export function getColor(value, schemeId, namespace) {
  return getNamespace(namespace).getScale(schemeId).getColor(value);
}
export function getScale(scheme, namespace) {
  return getNamespace(namespace).getScale(scheme);
}