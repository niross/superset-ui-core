"use strict";

exports.__esModule = true;
exports.default = void 0;

var _models = require("../models");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimeRangeFormatter = /*#__PURE__*/function (_ExtensibleFunction) {
  _inheritsLoose(TimeRangeFormatter, _ExtensibleFunction);

  function TimeRangeFormatter(config) {
    var _this;

    _this = _ExtensibleFunction.call(this, function (value) {
      return _this.format(value);
    }) || this;
    _this.id = void 0;
    _this.label = void 0;
    _this.description = void 0;
    _this.formatFunc = void 0;
    _this.useLocalTime = void 0;
    var id = config.id,
        label = config.label,
        _config$description = config.description,
        description = _config$description === void 0 ? '' : _config$description,
        formatFunc = config.formatFunc,
        _config$useLocalTime = config.useLocalTime,
        useLocalTime = _config$useLocalTime === void 0 ? false : _config$useLocalTime;
    _this.id = id;
    _this.label = label != null ? label : id;
    _this.description = description;
    _this.formatFunc = formatFunc;
    _this.useLocalTime = useLocalTime;
    return _this;
  }

  var _proto = TimeRangeFormatter.prototype;

  _proto.format = function format(values) {
    return this.formatFunc(values);
  };

  return TimeRangeFormatter;
}(_models.ExtensibleFunction);

var _default = TimeRangeFormatter;
exports.default = _default;