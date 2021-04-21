"use strict";

exports.__esModule = true;
exports.default = exports.LOCAL_PREFIX = void 0;
var LOCAL_PREFIX = 'local!';
exports.LOCAL_PREFIX = LOCAL_PREFIX;
var DATABASE_DATETIME = '%Y-%m-%d %H:%M:%S';
var DATABASE_DATETIME_REVERSE = '%d-%m-%Y %H:%M:%S';
var US_DATE = '%m/%d/%Y';
var INTERNATIONAL_DATE = '%d/%m/%Y';
var DATABASE_DATE = '%Y-%m-%d';
var TIME = '%H:%M:%S';
var TimeFormats = {
  DATABASE_DATE: DATABASE_DATE,
  DATABASE_DATETIME: DATABASE_DATETIME,
  DATABASE_DATETIME_REVERSE: DATABASE_DATETIME_REVERSE,
  INTERNATIONAL_DATE: INTERNATIONAL_DATE,
  TIME: TIME,
  US_DATE: US_DATE
};
var _default = TimeFormats;
exports.default = _default;