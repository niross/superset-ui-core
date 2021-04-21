import { timeSecond, timeMinute, timeHour, timeDay, timeWeek, timeSunday, timeMonday, timeTuesday, timeWednesday, timeThursday, timeFriday, timeSaturday, timeMonth, timeYear, utcSecond, utcMinute, utcHour, utcDay, utcWeek, utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcMonth, utcYear } from 'd3-time';

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
    floorSecond = timeSecond;
    floorMinute = timeMinute;
    floorHour = timeHour;
    floorDay = timeDay;
    floorWeek = timeWeek;
    floorWeekStartOnSunday = timeSunday;
    floorWeekStartOnMonday = timeMonday;
    floorWeekStartOnTuesday = timeTuesday;
    floorWeekStartOnWednesday = timeWednesday;
    floorWeekStartOnThursday = timeThursday;
    floorWeekStartOnFriday = timeFriday;
    floorWeekStartOnSaturday = timeSaturday;
    floorMonth = timeMonth;
    floorYear = timeYear;
  } else {
    floorSecond = utcSecond;
    floorMinute = utcMinute;
    floorHour = utcHour;
    floorDay = utcDay;
    floorWeek = utcWeek;
    floorWeekStartOnSunday = utcSunday;
    floorWeekStartOnMonday = utcMonday;
    floorWeekStartOnTuesday = utcTuesday;
    floorWeekStartOnWednesday = utcWednesday;
    floorWeekStartOnThursday = utcThursday;
    floorWeekStartOnFriday = utcFriday;
    floorWeekStartOnSaturday = utcSaturday;
    floorMonth = utcMonth;
    floorYear = utcYear;
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
var localTimeUtils = createUtils(true);
export { utcUtils, localTimeUtils };