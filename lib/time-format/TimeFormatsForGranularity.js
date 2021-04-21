"use strict";

exports.__esModule = true;
exports.default = void 0;

var _TimeFormats = _interopRequireDefault(require("./TimeFormats"));

var _types = require("./types");

var _TimeFormatsForGranul;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATABASE_DATE = _TimeFormats.default.DATABASE_DATE,
    DATABASE_DATETIME = _TimeFormats.default.DATABASE_DATETIME;
var MINUTE = '%Y-%m-%d %H:%M';
/**
 * Map time granularity to d3-format string
 */

var TimeFormatsForGranularity = (_TimeFormatsForGranul = {}, _TimeFormatsForGranul[_types.TimeGranularity.DATE] = DATABASE_DATE, _TimeFormatsForGranul[_types.TimeGranularity.SECOND] = DATABASE_DATETIME, _TimeFormatsForGranul[_types.TimeGranularity.MINUTE] = MINUTE, _TimeFormatsForGranul[_types.TimeGranularity.FIVE_MINUTES] = MINUTE, _TimeFormatsForGranul[_types.TimeGranularity.TEN_MINUTES] = MINUTE, _TimeFormatsForGranul[_types.TimeGranularity.FIFTEEN_MINUTES] = MINUTE, _TimeFormatsForGranul[_types.TimeGranularity.HALF_HOUR] = MINUTE, _TimeFormatsForGranul[_types.TimeGranularity.HOUR] = '%Y-%m-%d %H:00', _TimeFormatsForGranul[_types.TimeGranularity.DAY] = DATABASE_DATE, _TimeFormatsForGranul[_types.TimeGranularity.WEEK] = DATABASE_DATE, _TimeFormatsForGranul[_types.TimeGranularity.MONTH] = '%b %Y', _TimeFormatsForGranul[_types.TimeGranularity.QUARTER] = '%Y Q%q', _TimeFormatsForGranul[_types.TimeGranularity.YEAR] = '%Y', _TimeFormatsForGranul[_types.TimeGranularity.WEEK_STARTING_SUNDAY] = DATABASE_DATE, _TimeFormatsForGranul[_types.TimeGranularity.WEEK_STARTING_MONDAY] = DATABASE_DATE, _TimeFormatsForGranul[_types.TimeGranularity.WEEK_ENDING_SATURDAY] = DATABASE_DATE, _TimeFormatsForGranul[_types.TimeGranularity.WEEK_ENDING_SUNDAY] = DATABASE_DATE, _TimeFormatsForGranul);
var _default = TimeFormatsForGranularity;
exports.default = _default;