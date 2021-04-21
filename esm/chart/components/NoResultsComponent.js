import _pt from "prop-types";
import React, { useMemo } from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
var MESSAGE_STYLES = {
  maxWidth: 800
};
var TITLE_STYLES = {
  fontSize: 16,
  fontWeight: 'bold',
  paddingBottom: 8
};
var BODY_STYLES = {
  fontSize: 14
};
var MIN_WIDTH_FOR_BODY = 250;
var BODY_STRING = 'No results were returned for this query. If you expected results to be returned, ensure any filters are configured properly and the datasource contains data for the selected time range.';

var generateContainerStyles = function generateContainerStyles(height, width) {
  return {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: height,
    justifyContent: 'center',
    padding: 16,
    textAlign: 'center',
    width: width
  };
};

var NoResultsComponent = function NoResultsComponent(_ref) {
  var className = _ref.className,
      height = _ref.height,
      id = _ref.id,
      width = _ref.width;
  var containerStyles = useMemo(function () {
    return generateContainerStyles(height, width);
  }, [height, width]); // render the body if the width is auto/100% or greater than 250 pixels

  var shouldRenderBody = typeof width === 'string' || width > MIN_WIDTH_FOR_BODY;
  return ___EmotionJSX("div", {
    className: className,
    id: id,
    style: containerStyles,
    title: shouldRenderBody ? undefined : BODY_STRING
  }, ___EmotionJSX("div", {
    style: MESSAGE_STYLES
  }, ___EmotionJSX("div", {
    style: TITLE_STYLES
  }, "No Results"), shouldRenderBody && ___EmotionJSX("div", {
    style: BODY_STYLES
  }, BODY_STRING)));
};

NoResultsComponent.propTypes = {
  className: _pt.string,
  height: _pt.oneOfType([_pt.number, _pt.string]).isRequired,
  id: _pt.string,
  width: _pt.oneOfType([_pt.number, _pt.string]).isRequired
};
export default NoResultsComponent;