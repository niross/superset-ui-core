"use strict";

exports.__esModule = true;
exports.overrideExtraFormData = overrideExtraFormData;

var _constants = require("./constants");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function overrideExtraFormData(queryObject, overrideFormData) {
  var overriddenFormData = _extends({}, queryObject);

  var _overriddenFormData$e = overriddenFormData.extras,
      overriddenExtras = _overriddenFormData$e === void 0 ? {} : _overriddenFormData$e;
  Object.entries(_constants.EXTRA_FORM_DATA_OVERRIDE_REGULAR_MAPPINGS).forEach(function (_ref) {
    var key = _ref[0],
        target = _ref[1];
    var value = overrideFormData[key];

    if (value !== undefined) {
      overriddenFormData[target] = value;
    }
  });

  _constants.EXTRA_FORM_DATA_OVERRIDE_EXTRA_KEYS.forEach(function (key) {
    if (key in overrideFormData) {
      // @ts-ignore
      overriddenExtras[key] = overrideFormData[key];
    }
  });

  if (Object.keys(overriddenExtras).length > 0) {
    overriddenFormData.extras = overriddenExtras;
  }

  return overriddenFormData;
}