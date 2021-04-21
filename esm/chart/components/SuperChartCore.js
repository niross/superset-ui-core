import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/jsx-sort-default-props */
import * as React from 'react';
import { createSelector } from 'reselect';
import getChartComponentRegistry from '../registries/ChartComponentRegistrySingleton';
import getChartTransformPropsRegistry from '../registries/ChartTransformPropsRegistrySingleton';
import ChartProps from '../models/ChartProps';
import createLoadableRenderer from './createLoadableRenderer';
import { jsx as ___EmotionJSX } from "@emotion/react";

function IDENTITY(x) {
  return x;
}

var EMPTY = function EMPTY() {
  return null;
};

var defaultProps = {
  id: '',
  className: '',
  preTransformProps: IDENTITY,
  overrideTransformProps: undefined,
  postTransformProps: IDENTITY,
  onRenderSuccess: function onRenderSuccess() {},
  onRenderFailure: function onRenderFailure() {}
};
var BLANK_CHART_PROPS = new ChartProps();

var SuperChartCore = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(SuperChartCore, _React$PureComponent);

  function SuperChartCore() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.container = void 0;
    _this.processChartProps = createSelector(function (input) {
      return input.chartProps;
    }, function (input) {
      return input.preTransformProps;
    }, function (input) {
      return input.transformProps;
    }, function (input) {
      return input.postTransformProps;
    }, function (chartProps, pre, transform, post) {
      if (pre === void 0) {
        pre = IDENTITY;
      }

      if (transform === void 0) {
        transform = IDENTITY;
      }

      if (post === void 0) {
        post = IDENTITY;
      }

      return post(transform(pre(chartProps)));
    });
    _this.createLoadableRenderer = createSelector(function (input) {
      return input.chartType;
    }, function (input) {
      return input.overrideTransformProps;
    }, function (chartType, overrideTransformProps) {
      if (chartType) {
        var Renderer = createLoadableRenderer({
          loader: {
            Chart: function Chart() {
              return getChartComponentRegistry().getAsPromise(chartType);
            },
            transformProps: overrideTransformProps ? function () {
              return Promise.resolve(overrideTransformProps);
            } : function () {
              return getChartTransformPropsRegistry().getAsPromise(chartType);
            }
          },
          loading: function loading(loadingProps) {
            return _this.renderLoading(loadingProps, chartType);
          },
          render: _this.renderChart
        }); // Trigger preloading.

        Renderer.preload();
        return Renderer;
      }

      return EMPTY;
    });

    _this.renderChart = function (loaded, props) {
      var Chart = loaded.Chart,
          transformProps = loaded.transformProps;
      var chartProps = props.chartProps,
          preTransformProps = props.preTransformProps,
          postTransformProps = props.postTransformProps;
      return ___EmotionJSX(Chart, _this.processChartProps({
        chartProps: chartProps,
        preTransformProps: preTransformProps,
        transformProps: transformProps,
        postTransformProps: postTransformProps
      }));
    };

    _this.renderLoading = function (loadingProps, chartType) {
      var error = loadingProps.error;

      if (error) {
        return ___EmotionJSX("div", {
          className: "alert alert-warning",
          role: "alert"
        }, ___EmotionJSX("strong", null, "ERROR"), "\xA0", ___EmotionJSX("code", null, "chartType=\"", chartType, "\""), " \u2014", error.toString());
      }

      return null;
    };

    _this.setRef = function (container) {
      _this.container = container;
    };

    return _this;
  }

  var _proto = SuperChartCore.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        className = _this$props.className,
        preTransformProps = _this$props.preTransformProps,
        postTransformProps = _this$props.postTransformProps,
        _this$props$chartProp = _this$props.chartProps,
        chartProps = _this$props$chartProp === void 0 ? BLANK_CHART_PROPS : _this$props$chartProp,
        onRenderSuccess = _this$props.onRenderSuccess,
        onRenderFailure = _this$props.onRenderFailure; // Create LoadableRenderer and start preloading
    // the lazy-loaded Chart components

    var Renderer = this.createLoadableRenderer(this.props); // Do not render if chartProps is set to null.
    // but the pre-loading has been started in this.createLoadableRenderer
    // to prepare for rendering once chartProps becomes available.

    if (chartProps === null) {
      return null;
    }

    var containerProps = {};

    if (id) {
      containerProps.id = id;
    }

    if (className) {
      containerProps.className = className;
    }

    return ___EmotionJSX("div", _extends({}, containerProps, {
      ref: this.setRef
    }), ___EmotionJSX(Renderer, {
      preTransformProps: preTransformProps,
      postTransformProps: postTransformProps,
      chartProps: chartProps,
      onRenderSuccess: onRenderSuccess,
      onRenderFailure: onRenderFailure
    }));
  };

  return SuperChartCore;
}(React.PureComponent);

SuperChartCore.propTypes = {
  id: _pt.string,
  className: _pt.string,
  chartType: _pt.string.isRequired
};
SuperChartCore.defaultProps = defaultProps;
export { SuperChartCore as default };