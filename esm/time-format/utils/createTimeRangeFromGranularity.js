import { TimeGranularity } from '../types';
import createTime from './createTime';
var MS_IN_SECOND = 1000;
var MS_IN_MINUTE = 60 * MS_IN_SECOND;
var MS_IN_HOUR = 60 * MS_IN_MINUTE;

function deductOneMs(time) {
  return new Date(time.getTime() - 1);
}

function computeEndTimeFromGranularity(time, granularity, useLocalTime) {
  var date = useLocalTime ? time.getDate() : time.getUTCDate();
  var month = useLocalTime ? time.getMonth() : time.getUTCMonth();
  var year = useLocalTime ? time.getFullYear() : time.getUTCFullYear();
  var mode = useLocalTime ? 'local' : 'utc';

  switch (granularity) {
    case TimeGranularity.SECOND:
      return new Date(time.getTime() + MS_IN_SECOND - 1);

    case TimeGranularity.MINUTE:
      return new Date(time.getTime() + MS_IN_MINUTE - 1);

    case TimeGranularity.FIVE_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 5 - 1);

    case TimeGranularity.TEN_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 10 - 1);

    case TimeGranularity.FIFTEEN_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 15 - 1);

    case TimeGranularity.HALF_HOUR:
      return new Date(time.getTime() + MS_IN_MINUTE * 30 - 1);

    case TimeGranularity.HOUR:
      return new Date(time.getTime() + MS_IN_HOUR - 1);
    // For the day granularity and above, using Date overflow is better than adding timestamp
    // because it will also handle daylight saving.

    case TimeGranularity.WEEK:
    case TimeGranularity.WEEK_STARTING_SUNDAY:
    case TimeGranularity.WEEK_STARTING_MONDAY:
      return deductOneMs(createTime(mode, year, month, date + 7));

    case TimeGranularity.MONTH:
      return deductOneMs(createTime(mode, year, month + 1));

    case TimeGranularity.QUARTER:
      return deductOneMs(createTime(mode, year, (Math.floor(month / 3) + 1) * 3));

    case TimeGranularity.YEAR:
      return deductOneMs(createTime(mode, year + 1));
    // For the WEEK_ENDING_XXX cases,
    // currently assume "time" returned from database is supposed to be the end time
    // (in contrast to all other granularities that the returned time is start time).
    // However, the returned "time" is at 00:00:00.000, so have to add 23:59:59.999.

    case TimeGranularity.WEEK_ENDING_SATURDAY:
    case TimeGranularity.WEEK_ENDING_SUNDAY:
    case TimeGranularity.DATE:
    case TimeGranularity.DAY:
    default:
      return deductOneMs(createTime(mode, year, month, date + 1));
  }
}

export default function createTimeRangeFromGranularity(time, granularity, useLocalTime) {
  if (useLocalTime === void 0) {
    useLocalTime = false;
  }

  var endTime = computeEndTimeFromGranularity(time, granularity, useLocalTime);

  if (granularity === TimeGranularity.WEEK_ENDING_SATURDAY || granularity === TimeGranularity.WEEK_ENDING_SUNDAY) {
    var date = useLocalTime ? time.getDate() : time.getUTCDate();
    var month = useLocalTime ? time.getMonth() : time.getUTCMonth();
    var year = useLocalTime ? time.getFullYear() : time.getUTCFullYear();
    var startTime = createTime(useLocalTime ? 'local' : 'utc', year, month, date - 6);
    return [startTime, endTime];
  }

  return [time, endTime];
}