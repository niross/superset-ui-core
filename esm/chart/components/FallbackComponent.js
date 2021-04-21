function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
var CONTAINER_STYLE = {
  backgroundColor: '#000',
  color: '#fff',
  overflow: 'auto',
  padding: 32
};
export default function FallbackComponent(_ref) {
  var componentStack = _ref.componentStack,
      error = _ref.error,
      height = _ref.height,
      width = _ref.width;
  return ___EmotionJSX("div", {
    style: _extends({}, CONTAINER_STYLE, {
      height: height,
      width: width
    })
  }, ___EmotionJSX("div", null, ___EmotionJSX("div", null, ___EmotionJSX("b", null, "Oops! An error occured!")), ___EmotionJSX("code", null, error ? error.toString() : 'Unknown Error')), componentStack && ___EmotionJSX("div", null, ___EmotionJSX("b", null, "Stack Trace:"), ___EmotionJSX("code", null, componentStack.split('\n').map(function (row) {
    return ___EmotionJSX("div", {
      key: row
    }, row);
  }))));
}