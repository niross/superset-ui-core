"use strict";

exports.__esModule = true;
exports.getNamespace = getNamespace;
exports.getColor = getColor;
exports.getScale = getScale;
exports.DEFAULT_NAMESPACE = exports.default = void 0;

var _CategoricalColorScale = _interopRequireDefault(require("./CategoricalColorScale"));

var _CategoricalSchemeRegistrySingleton = _interopRequireDefault(require("./CategoricalSchemeRegistrySingleton"));

var _stringifyAndTrim = _interopRequireDefault(require("./stringifyAndTrim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    var id = (_ref = schemeId != null ? schemeId : (0, _CategoricalSchemeRegistrySingleton.default)().getDefaultKey()) != null ? _ref : '';
    var scale = this.scales[id];

    if (scale) {
      return scale;
    }

    var scheme = (0, _CategoricalSchemeRegistrySingleton.default)().get(id);
    var newScale = new _CategoricalColorScale.default((_scheme$colors = scheme == null ? void 0 : scheme.colors) != null ? _scheme$colors : [], this.forcedItems);
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
    this.forcedItems[(0, _stringifyAndTrim.default)(value)] = forcedColor;
    return this;
  };

  return CategoricalColorNamespace;
}();

exports.default = CategoricalColorNamespace;
var namespaces = {};
var DEFAULT_NAMESPACE = 'GLOBAL';
exports.DEFAULT_NAMESPACE = DEFAULT_NAMESPACE;

function getNamespace(name) {
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

function getColor(value, schemeId, namespace) {
  return getNamespace(namespace).getScale(schemeId).getColor(value);
}

function getScale(scheme, namespace) {
  return getNamespace(namespace).getScale(scheme);
}