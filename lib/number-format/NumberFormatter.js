"use strict";

exports.__esModule = true;
exports.default = exports.PREVIEW_VALUE = void 0;

var _models = require("../models");

var _utils = require("../utils");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PREVIEW_VALUE = 12345.432;
exports.PREVIEW_VALUE = PREVIEW_VALUE;

var NumberFormatter = /*#__PURE__*/function (_ExtensibleFunction) {
  _inheritsLoose(NumberFormatter, _ExtensibleFunction);

  function NumberFormatter(config) {
    var _this;

    _this = _ExtensibleFunction.call(this, function (value) {
      return _this.format(value);
    }) || this;
    _this.id = void 0;
    _this.label = void 0;
    _this.description = void 0;
    _this.formatFunc = void 0;
    _this.isInvalid = void 0;
    var _config$id = config.id,
        id = _config$id === void 0 ? (0, _utils.isRequired)('config.id') : _config$id,
        label = config.label,
        _config$description = config.description,
        description = _config$description === void 0 ? '' : _config$description,
        _config$formatFunc = config.formatFunc,
        formatFunc = _config$formatFunc === void 0 ? (0, _utils.isRequired)('config.formatFunc') : _config$formatFunc,
        _config$isInvalid = config.isInvalid,
        isInvalid = _config$isInvalid === void 0 ? false : _config$isInvalid;
    _this.id = id;
    _this.label = label != null ? label : id;
    _this.description = description;
    _this.formatFunc = formatFunc;
    _this.isInvalid = isInvalid;
    return _this;
  }

  var _proto = NumberFormatter.prototype;

  _proto.format = function format(value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "" + value;
    }

    if (value === Number.POSITIVE_INFINITY) {
      return '∞';
    }

    if (value === Number.NEGATIVE_INFINITY) {
      return '-∞';
    }

    return this.formatFunc(value);
  };

  _proto.preview = function preview(value) {
    if (value === void 0) {
      value = PREVIEW_VALUE;
    }

    return value + " => " + this.format(value);
  };

  return NumberFormatter;
}(_models.ExtensibleFunction);

var _default = NumberFormatter;
exports.default = _default;