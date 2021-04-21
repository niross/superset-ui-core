import _pt from "prop-types";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { PureComponent } from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
var defaultProps = {
  className: ''
};
var CONTAINER_STYLE = {
  padding: 8
};

var TooltipFrame = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(TooltipFrame, _PureComponent);

  function TooltipFrame() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TooltipFrame.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
    return ___EmotionJSX("div", {
      className: className,
      style: CONTAINER_STYLE
    }, children);
  };

  return TooltipFrame;
}(PureComponent);

TooltipFrame.propTypes = {
  className: _pt.string,
  children: _pt.node.isRequired
};
TooltipFrame.defaultProps = defaultProps;
export default TooltipFrame;