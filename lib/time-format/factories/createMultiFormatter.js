"use strict";

exports.__esModule = true;
exports.default = createMultiFormatter;

var _d3TimeFormat = require("d3-time-format");

var _d3Time = require("../utils/d3Time");

var _TimeFormatter = _interopRequireDefault(require("../TimeFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMultiFormatter(_ref) {
  var id = _ref.id,
      label = _ref.label,
      description = _ref.description,
      _ref$formats = _ref.formats,
      formats = _ref$formats === void 0 ? {} : _ref$formats,
      _ref$useLocalTime = _ref.useLocalTime,
      useLocalTime = _ref$useLocalTime === void 0 ? false : _ref$useLocalTime;
  var _formats$millisecond = formats.millisecond,
      millisecond = _formats$millisecond === void 0 ? '.%L' : _formats$millisecond,
      _formats$second = formats.second,
      second = _formats$second === void 0 ? ':%S' : _formats$second,
      _formats$minute = formats.minute,
      minute = _formats$minute === void 0 ? '%I:%M' : _formats$minute,
      _formats$hour = formats.hour,
      hour = _formats$hour === void 0 ? '%I %p' : _formats$hour,
      _formats$day = formats.day,
      day = _formats$day === void 0 ? '%a %d' : _formats$day,
      _formats$week = formats.week,
      week = _formats$week === void 0 ? '%b %d' : _formats$week,
      _formats$month = formats.month,
      month = _formats$month === void 0 ? '%B' : _formats$month,
      _formats$year = formats.year,
      year = _formats$year === void 0 ? '%Y' : _formats$year;
  var format = useLocalTime ? _d3TimeFormat.timeFormat : _d3TimeFormat.utcFormat;
  var formatMillisecond = format(millisecond);
  var formatSecond = format(second);
  var formatMinute = format(minute);
  var formatHour = format(hour);
  var formatDay = format(day);
  var formatFirstDayOfWeek = format(week);
  var formatMonth = format(month);
  var formatYear = format(year);

  var _ref2 = useLocalTime ? _d3Time.localTimeUtils : _d3Time.utcUtils,
      hasMillisecond = _ref2.hasMillisecond,
      hasSecond = _ref2.hasSecond,
      hasMinute = _ref2.hasMinute,
      hasHour = _ref2.hasHour,
      isNotFirstDayOfMonth = _ref2.isNotFirstDayOfMonth,
      isNotFirstDayOfWeek = _ref2.isNotFirstDayOfWeek,
      isNotFirstMonth = _ref2.isNotFirstMonth;

  function multiFormatFunc(date) {
    if (hasMillisecond(date)) {
      return formatMillisecond;
    }

    if (hasSecond(date)) {
      return formatSecond;
    }

    if (hasMinute(date)) {
      return formatMinute;
    }

    if (hasHour(date)) {
      return formatHour;
    }

    if (isNotFirstDayOfMonth(date)) {
      return isNotFirstDayOfWeek(date) ? formatDay : formatFirstDayOfWeek;
    }

    if (isNotFirstMonth(date)) {
      return formatMonth;
    }

    return formatYear;
  }

  return new _TimeFormatter.default({
    description: description,
    formatFunc: function formatFunc(date) {
      return multiFormatFunc(date)(date);
    },
    id: id,
    label: label,
    useLocalTime: useLocalTime
  });
}