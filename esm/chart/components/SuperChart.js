import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { ParentSize } from '@vx/responsive';
import { createSelector } from 'reselect';
import { parseLength } from '../../dimension';
import SuperChartCore from './SuperChartCore';
import DefaultFallbackComponent from './FallbackComponent';
import ChartProps from '../models/ChartProps';
import NoResultsComponent from './NoResultsComponent';
import { jsx as ___EmotionJSX } from "@emotion/react";
var defaultProps = {
  FallbackComponent: DefaultFallbackComponent,
  height: 400,
  width: '100%'
};

var SuperChart = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(SuperChart, _React$PureComponent);

  function SuperChart() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.core = void 0;
    _this.createChartProps = ChartProps.createSelector();
    _this.parseDimension = createSelector(function (_ref) {
      var width = _ref.width;
      return width;
    }, function (_ref2) {
      var height = _ref2.height;
      return height;
    }, function (width, height) {
      // Parse them in case they are % or 'auto'
      var widthInfo = parseLength(width);
      var heightInfo = parseLength(height);
      var boxHeight = heightInfo.isDynamic ? heightInfo.multiplier * 100 + "%" : heightInfo.value;
      var boxWidth = widthInfo.isDynamic ? widthInfo.multiplier * 100 + "%" : widthInfo.value;
      var style = {
        height: boxHeight,
        width: boxWidth
      }; // bounding box will ensure that when one dimension is not dynamic
      // e.g. height = 300
      // the auto size will be bound to that value instead of being 100% by default
      // e.g. height: 300 instead of height: '100%'

      var BoundingBox = widthInfo.isDynamic && heightInfo.isDynamic && widthInfo.multiplier === 1 && heightInfo.multiplier === 1 ? React.Fragment : function (_ref3) {
        var children = _ref3.children;
        return ___EmotionJSX("div", {
          style: style
        }, children);
      };
      return {
        BoundingBox: BoundingBox,
        heightInfo: heightInfo,
        widthInfo: widthInfo
      };
    });

    _this.setRef = function (core) {
      _this.core = core;
    };

    return _this;
  }

  var _proto = SuperChart.prototype;

  _proto.renderChart = function renderChart(width, height) {
    var _ref4 = this.props,
        id = _ref4.id,
        className = _ref4.className,
        chartType = _ref4.chartType,
        preTransformProps = _ref4.preTransformProps,
        overrideTransformProps = _ref4.overrideTransformProps,
        postTransformProps = _ref4.postTransformProps,
        onRenderSuccess = _ref4.onRenderSuccess,
        onRenderFailure = _ref4.onRenderFailure,
        disableErrorBoundary = _ref4.disableErrorBoundary,
        _FallbackComponent = _ref4.FallbackComponent,
        onErrorBoundary = _ref4.onErrorBoundary,
        Wrapper = _ref4.Wrapper,
        queriesData = _ref4.queriesData,
        rest = _objectWithoutPropertiesLoose(_ref4, ["id", "className", "chartType", "preTransformProps", "overrideTransformProps", "postTransformProps", "onRenderSuccess", "onRenderFailure", "disableErrorBoundary", "FallbackComponent", "onErrorBoundary", "Wrapper", "queriesData"]);

    var chartProps = this.createChartProps(_extends({}, rest, {
      queriesData: queriesData,
      height: height,
      width: width
    }));
    var chart; // Render the no results component if the query data is null or empty

    var noResultQueries = !queriesData || queriesData.every(function (_ref5) {
      var data = _ref5.data;
      return !data || Array.isArray(data) && data.length === 0;
    });

    if (noResultQueries) {
      chart = ___EmotionJSX(NoResultsComponent, {
        id: id,
        className: className,
        height: height,
        width: width
      });
    } else {
      var chartWithoutWrapper = ___EmotionJSX(SuperChartCore, {
        ref: this.setRef,
        id: id,
        className: className,
        chartType: chartType,
        chartProps: chartProps,
        preTransformProps: preTransformProps,
        overrideTransformProps: overrideTransformProps,
        postTransformProps: postTransformProps,
        onRenderSuccess: onRenderSuccess,
        onRenderFailure: onRenderFailure
      });

      chart = Wrapper ? ___EmotionJSX(Wrapper, {
        width: width,
        height: height
      }, chartWithoutWrapper) : chartWithoutWrapper;
    } // Include the error boundary by default unless it is specifically disabled.


    return disableErrorBoundary === true ? chart : ___EmotionJSX(ErrorBoundary, {
      FallbackComponent: function FallbackComponent(props) {
        return ___EmotionJSX(_FallbackComponent, _extends({
          width: width,
          height: height
        }, props));
      },
      onError: onErrorBoundary
    }, chart);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$parseDimension = this.parseDimension(this.props),
        heightInfo = _this$parseDimension.heightInfo,
        widthInfo = _this$parseDimension.widthInfo,
        BoundingBox = _this$parseDimension.BoundingBox; // If any of the dimension is dynamic, get parent's dimension


    if (widthInfo.isDynamic || heightInfo.isDynamic) {
      var debounceTime = this.props.debounceTime;
      return ___EmotionJSX(BoundingBox, null, ___EmotionJSX(ParentSize, {
        debounceTime: debounceTime
      }, function (_ref6) {
        var width = _ref6.width,
            height = _ref6.height;
        return width > 0 && height > 0 && _this2.renderChart(widthInfo.isDynamic ? Math.floor(width) : widthInfo.value, heightInfo.isDynamic ? Math.floor(height) : heightInfo.value);
      }));
    }

    return this.renderChart(widthInfo.value, heightInfo.value);
  };

  return SuperChart;
}(React.PureComponent);

SuperChart.propTypes = {
  disableErrorBoundary: _pt.bool,
  debounceTime: _pt.number,
  FallbackComponent: _pt.elementType,
  height: _pt.oneOfType([_pt.number, _pt.string]),
  width: _pt.oneOfType([_pt.number, _pt.string]),
  Wrapper: _pt.elementType
};
SuperChart.defaultProps = defaultProps;
export { SuperChart as default };