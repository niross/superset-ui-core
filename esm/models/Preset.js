var Preset = /*#__PURE__*/function () {
  function Preset(config) {
    if (config === void 0) {
      config = {};
    }

    this.name = void 0;
    this.description = void 0;
    this.presets = void 0;
    this.plugins = void 0;
    var _config = config,
        _config$name = _config.name,
        name = _config$name === void 0 ? '' : _config$name,
        _config$description = _config.description,
        description = _config$description === void 0 ? '' : _config$description,
        _config$presets = _config.presets,
        presets = _config$presets === void 0 ? [] : _config$presets,
        _config$plugins = _config.plugins,
        plugins = _config$plugins === void 0 ? [] : _config$plugins;
    this.name = name;
    this.description = description;
    this.presets = presets;
    this.plugins = plugins;
  }

  var _proto = Preset.prototype;

  _proto.register = function register() {
    this.presets.forEach(function (preset) {
      preset.register();
    });
    this.plugins.forEach(function (plugin) {
      plugin.register();
    });
    return this;
  };

  return Preset;
}();

export { Preset as default };