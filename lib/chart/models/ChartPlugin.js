"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

var _ChartMetadataRegistrySingleton = _interopRequireDefault(require("../registries/ChartMetadataRegistrySingleton"));

var _ChartBuildQueryRegistrySingleton = _interopRequireDefault(require("../registries/ChartBuildQueryRegistrySingleton"));

var _ChartComponentRegistrySingleton = _interopRequireDefault(require("../registries/ChartComponentRegistrySingleton"));

var _ChartControlPanelRegistrySingleton = _interopRequireDefault(require("../registries/ChartControlPanelRegistrySingleton"));

var _ChartTransformPropsRegistrySingleton = _interopRequireDefault(require("../registries/ChartTransformPropsRegistrySingleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function IDENTITY(x) {
  return x;
}

var EMPTY = {};

/**
 * Loaders of the form `() => import('foo')` may return esmodules
 * which require the value to be extracted as `module.default`
 * */
function sanitizeLoader(loader) {
  return function () {
    var loaded = loader();
    return loaded instanceof Promise ? loaded.then(function (module) {
      return 'default' in module && module.default || module;
    }) : loaded;
  };
}

var ChartPlugin = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(ChartPlugin, _Plugin);

  function ChartPlugin(config) {
    var _this;

    _this = _Plugin.call(this) || this;
    _this.controlPanel = void 0;
    _this.metadata = void 0;
    _this.loadBuildQuery = void 0;
    _this.loadTransformProps = void 0;
    _this.loadChart = void 0;
    var metadata = config.metadata,
        buildQuery = config.buildQuery,
        loadBuildQuery = config.loadBuildQuery,
        _config$transformProp = config.transformProps,
        transformProps = _config$transformProp === void 0 ? IDENTITY : _config$transformProp,
        loadTransformProps = config.loadTransformProps,
        Chart = config.Chart,
        loadChart = config.loadChart,
        _config$controlPanel = config.controlPanel,
        controlPanel = _config$controlPanel === void 0 ? EMPTY : _config$controlPanel;
    _this.controlPanel = controlPanel;
    _this.metadata = metadata;
    _this.loadBuildQuery = loadBuildQuery && sanitizeLoader(loadBuildQuery) || buildQuery && sanitizeLoader(function () {
      return buildQuery;
    }) || undefined;
    _this.loadTransformProps = sanitizeLoader(loadTransformProps != null ? loadTransformProps : function () {
      return transformProps;
    });

    if (loadChart) {
      _this.loadChart = sanitizeLoader(loadChart);
    } else if (Chart) {
      _this.loadChart = function () {
        return Chart;
      };
    } else {
      throw new Error('Chart or loadChart is required');
    }

    return _this;
  }

  var _proto = ChartPlugin.prototype;

  _proto.register = function register() {
    var key = this.config.key || (0, _.isRequired)('config.key');
    (0, _ChartMetadataRegistrySingleton.default)().registerValue(key, this.metadata);
    (0, _ChartComponentRegistrySingleton.default)().registerLoader(key, this.loadChart);
    (0, _ChartControlPanelRegistrySingleton.default)().registerValue(key, this.controlPanel);
    (0, _ChartTransformPropsRegistrySingleton.default)().registerLoader(key, this.loadTransformProps);

    if (this.loadBuildQuery) {
      (0, _ChartBuildQueryRegistrySingleton.default)().registerLoader(key, this.loadBuildQuery);
    }

    return this;
  };

  _proto.unregister = function unregister() {
    var key = this.config.key || (0, _.isRequired)('config.key');
    (0, _ChartMetadataRegistrySingleton.default)().remove(key);
    (0, _ChartComponentRegistrySingleton.default)().remove(key);
    (0, _ChartControlPanelRegistrySingleton.default)().remove(key);
    (0, _ChartTransformPropsRegistrySingleton.default)().remove(key);
    (0, _ChartBuildQueryRegistrySingleton.default)().remove(key);
    return this;
  };

  _proto.configure = function configure(config, replace) {
    _Plugin.prototype.configure.call(this, config, replace);

    return this;
  };

  return ChartPlugin;
}(_.Plugin);

exports.default = ChartPlugin;