function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Plugin = /*#__PURE__*/function () {
  function Plugin() {
    this.config = void 0;
    this.config = {};
  }

  var _proto = Plugin.prototype;

  _proto.resetConfig = function resetConfig() {
    // The child class can set default config
    // by overriding this function.
    this.config = {};
    return this;
  };

  _proto.configure = function configure(config, replace) {
    if (replace === void 0) {
      replace = false;
    }

    this.config = replace ? config : _extends({}, this.config, config);
    return this;
  };

  _proto.register = function register() {
    return this;
  };

  _proto.unregister = function unregister() {
    return this;
  };

  return Plugin;
}();

export { Plugin as default };