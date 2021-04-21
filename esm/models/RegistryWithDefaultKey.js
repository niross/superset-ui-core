function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Registry from './Registry';

var RegistryWithDefaultKey = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(RegistryWithDefaultKey, _Registry);

  function RegistryWithDefaultKey(config) {
    var _this;

    if (config === void 0) {
      config = {};
    }

    _this = _Registry.call(this, config) || this;
    _this.initialDefaultKey = void 0;
    _this.defaultKey = void 0;
    _this.setFirstItemAsDefault = void 0;
    var _config = config,
        _config$initialDefaul = _config.initialDefaultKey,
        initialDefaultKey = _config$initialDefaul === void 0 ? undefined : _config$initialDefaul,
        _config$setFirstItemA = _config.setFirstItemAsDefault,
        setFirstItemAsDefault = _config$setFirstItemA === void 0 ? false : _config$setFirstItemA;
    _this.initialDefaultKey = initialDefaultKey;
    _this.defaultKey = initialDefaultKey;
    _this.setFirstItemAsDefault = setFirstItemAsDefault;
    return _this;
  }

  var _proto = RegistryWithDefaultKey.prototype;

  _proto.clear = function clear() {
    _Registry.prototype.clear.call(this);

    this.defaultKey = this.initialDefaultKey;
    return this;
  };

  _proto.get = function get(key) {
    var targetKey = key != null ? key : this.defaultKey;
    return targetKey ? _Registry.prototype.get.call(this, targetKey) : undefined;
  };

  _proto.registerValue = function registerValue(key, value) {
    _Registry.prototype.registerValue.call(this, key, value); // If there is no default, set as default


    if (this.setFirstItemAsDefault && !this.defaultKey) {
      this.defaultKey = key;
    }

    return this;
  };

  _proto.registerLoader = function registerLoader(key, loader) {
    _Registry.prototype.registerLoader.call(this, key, loader); // If there is no default, set as default


    if (this.setFirstItemAsDefault && !this.defaultKey) {
      this.defaultKey = key;
    }

    return this;
  };

  _proto.getDefaultKey = function getDefaultKey() {
    return this.defaultKey;
  };

  _proto.setDefaultKey = function setDefaultKey(key) {
    this.defaultKey = key;
    return this;
  };

  _proto.clearDefaultKey = function clearDefaultKey() {
    this.defaultKey = undefined;
    return this;
  };

  return RegistryWithDefaultKey;
}(Registry);

export { RegistryWithDefaultKey as default };