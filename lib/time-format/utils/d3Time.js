"use strict";

exports.__esModule = true;
exports.localTimeUtils = exports.utcUtils = void 0;

var _d3Time = require("d3-time");

function createUtils(useLocalTime) {
  if (useLocalTime === void 0) {
    useLocalTime = false;
  }

  var floorSecond;
  var floorMinute;
  var floorHour;
  var floorDay;
  var floorWeek;
  var floorWeekStartOnSunday;
  var floorWeekStartOnMonday;
  var floorWeekStartOnTuesday;
  var floorWeekStartOnWednesday;
  var floorWeekStartOnThursday;
  var floorWeekStartOnFriday;
  var floorWeekStartOnSaturday;
  var floorMonth;
  var floorYear;

  if (useLocalTime) {
    floorSecond = _d3Time.timeSecond;
    floorMinute = _d3Time.timeMinute;
    floorHour = _d3Time.timeHour;
    floorDay = _d3Time.timeDay;
    floorWeek = _d3Time.timeWeek;
    floorWeekStartOnSunday = _d3Time.timeSunday;
    floorWeekStartOnMonday = _d3Time.timeMonday;
    floorWeekStartOnTuesday = _d3Time.timeTuesday;
    floorWeekStartOnWednesday = _d3Time.timeWednesday;
    floorWeekStartOnThursday = _d3Time.timeThursday;
    floorWeekStartOnFriday = _d3Time.timeFriday;
    floorWeekStartOnSaturday = _d3Time.timeSaturday;
    floorMonth = _d3Time.timeMonth;
    floorYear = _d3Time.timeYear;
  } else {
    floorSecond = _d3Time.utcSecond;
    floorMinute = _d3Time.utcMinute;
    floorHour = _d3Time.utcHour;
    floorDay = _d3Time.utcDay;
    floorWeek = _d3Time.utcWeek;
    floorWeekStartOnSunday = _d3Time.utcSunday;
    floorWeekStartOnMonday = _d3Time.utcMonday;
    floorWeekStartOnTuesday = _d3Time.utcTuesday;
    floorWeekStartOnWednesday = _d3Time.utcWednesday;
    floorWeekStartOnThursday = _d3Time.utcThursday;
    floorWeekStartOnFriday = _d3Time.utcFriday;
    floorWeekStartOnSaturday = _d3Time.utcSaturday;
    floorMonth = _d3Time.utcMonth;
    floorYear = _d3Time.utcYear;
  }

  return {
    floorSecond: floorSecond,
    floorMinute: floorMinute,
    floorHour: floorHour,
    floorDay: floorDay,
    floorWeek: floorWeek,
    floorWeekStartOnSunday: floorWeekStartOnSunday,
    floorWeekStartOnMonday: floorWeekStartOnMonday,
    floorWeekStartOnTuesday: floorWeekStartOnTuesday,
    floorWeekStartOnWednesday: floorWeekStartOnWednesday,
    floorWeekStartOnThursday: floorWeekStartOnThursday,
    floorWeekStartOnFriday: floorWeekStartOnFriday,
    floorWeekStartOnSaturday: floorWeekStartOnSaturday,
    floorMonth: floorMonth,
    floorYear: floorYear,
    hasMillisecond: function hasMillisecond(date) {
      return floorSecond(date) < date;
    },
    hasSecond: function hasSecond(date) {
      return floorMinute(date) < date;
    },
    hasMinute: function hasMinute(date) {
      return floorHour(date) < date;
    },
    hasHour: function hasHour(date) {
      return floorDay(date) < date;
    },
    isNotFirstDayOfMonth: function isNotFirstDayOfMonth(date) {
      return floorMonth(date) < date;
    },
    isNotFirstDayOfWeek: function isNotFirstDayOfWeek(date) {
      return floorWeek(date) < date;
    },
    isNotFirstDayOfWeekStartOnSunday: function isNotFirstDayOfWeekStartOnSunday(date) {
      return floorWeekStartOnSunday(date) < date;
    },
    isNotFirstDayOfWeekStartOnMonday: function isNotFirstDayOfWeekStartOnMonday(date) {
      return floorWeekStartOnMonday(date) < date;
    },
    isNotFirstDayOfWeekStartOnTuesday: function isNotFirstDayOfWeekStartOnTuesday(date) {
      return floorWeekStartOnTuesday(date) < date;
    },
    isNotFirstDayOfWeekStartOnWednesday: function isNotFirstDayOfWeekStartOnWednesday(date) {
      return floorWeekStartOnWednesday(date) < date;
    },
    isNotFirstDayOfWeekStartOnThursday: function isNotFirstDayOfWeekStartOnThursday(date) {
      return floorWeekStartOnThursday(date) < date;
    },
    isNotFirstDayOfWeekStartOnFriday: function isNotFirstDayOfWeekStartOnFriday(date) {
      return floorWeekStartOnFriday(date) < date;
    },
    isNotFirstDayOfWeekStartOnSaturday: function isNotFirstDayOfWeekStartOnSaturday(date) {
      return floorWeekStartOnSaturday(date) < date;
    },
    isNotFirstMonth: function isNotFirstMonth(date) {
      return floorYear(date) < date;
    }
  };
}

var utcUtils = createUtils();
exports.utcUtils = utcUtils;
var localTimeUtils = createUtils(true);
exports.localTimeUtils = localTimeUtils;