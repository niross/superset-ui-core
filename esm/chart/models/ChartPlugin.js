function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { isRequired, Plugin } from '../..';
import getChartMetadataRegistry from '../registries/ChartMetadataRegistrySingleton';
import getChartBuildQueryRegistry from '../registries/ChartBuildQueryRegistrySingleton';
import getChartComponentRegistry from '../registries/ChartComponentRegistrySingleton';
import getChartControlPanelRegistry from '../registries/ChartControlPanelRegistrySingleton';
import getChartTransformPropsRegistry from '../registries/ChartTransformPropsRegistrySingleton';

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
    var key = this.config.key || isRequired('config.key');
    getChartMetadataRegistry().registerValue(key, this.metadata);
    getChartComponentRegistry().registerLoader(key, this.loadChart);
    getChartControlPanelRegistry().registerValue(key, this.controlPanel);
    getChartTransformPropsRegistry().registerLoader(key, this.loadTransformProps);

    if (this.loadBuildQuery) {
      getChartBuildQueryRegistry().registerLoader(key, this.loadBuildQuery);
    }

    return this;
  };

  _proto.unregister = function unregister() {
    var key = this.config.key || isRequired('config.key');
    getChartMetadataRegistry().remove(key);
    getChartComponentRegistry().remove(key);
    getChartControlPanelRegistry().remove(key);
    getChartTransformPropsRegistry().remove(key);
    getChartBuildQueryRegistry().remove(key);
    return this;
  };

  _proto.configure = function configure(config, replace) {
    _Plugin.prototype.configure.call(this, config, replace);

    return this;
  };

  return ChartPlugin;
}(Plugin);

export { ChartPlugin as default };