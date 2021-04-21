var _TimeFormatsForGranul;

import TimeFormats from './TimeFormats';
import { TimeGranularity } from './types';
var DATABASE_DATE = TimeFormats.DATABASE_DATE,
    DATABASE_DATETIME = TimeFormats.DATABASE_DATETIME;
var MINUTE = '%Y-%m-%d %H:%M';
/**
 * Map time granularity to d3-format string
 */

var TimeFormatsForGranularity = (_TimeFormatsForGranul = {}, _TimeFormatsForGranul[TimeGranularity.DATE] = DATABASE_DATE, _TimeFormatsForGranul[TimeGranularity.SECOND] = DATABASE_DATETIME, _TimeFormatsForGranul[TimeGranularity.MINUTE] = MINUTE, _TimeFormatsForGranul[TimeGranularity.FIVE_MINUTES] = MINUTE, _TimeFormatsForGranul[TimeGranularity.TEN_MINUTES] = MINUTE, _TimeFormatsForGranul[TimeGranularity.FIFTEEN_MINUTES] = MINUTE, _TimeFormatsForGranul[TimeGranularity.HALF_HOUR] = MINUTE, _TimeFormatsForGranul[TimeGranularity.HOUR] = '%Y-%m-%d %H:00', _TimeFormatsForGranul[TimeGranularity.DAY] = DATABASE_DATE, _TimeFormatsForGranul[TimeGranularity.WEEK] = DATABASE_DATE, _TimeFormatsForGranul[TimeGranularity.MONTH] = '%b %Y', _TimeFormatsForGranul[TimeGranularity.QUARTER] = '%Y Q%q', _TimeFormatsForGranul[TimeGranularity.YEAR] = '%Y', _TimeFormatsForGranul[TimeGranularity.WEEK_STARTING_SUNDAY] = DATABASE_DATE, _TimeFormatsForGranul[TimeGranularity.WEEK_STARTING_MONDAY] = DATABASE_DATE, _TimeFormatsForGranul[TimeGranularity.WEEK_ENDING_SATURDAY] = DATABASE_DATE, _TimeFormatsForGranul[TimeGranularity.WEEK_ENDING_SUNDAY] = DATABASE_DATE, _TimeFormatsForGranul);
export default TimeFormatsForGranularity;