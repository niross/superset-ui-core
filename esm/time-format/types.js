/**
 * search for `builtin_time_grains` in incubator-superset/superset/db_engine_specs/base.py
 */
export var TimeGranularity = {
  DATE: 'date',
  SECOND: 'PT1S',
  MINUTE: 'PT1M',
  FIVE_MINUTES: 'PT5M',
  TEN_MINUTES: 'PT10M',
  FIFTEEN_MINUTES: 'PT15M',
  HALF_HOUR: 'PT0.5H',
  HOUR: 'PT1H',
  DAY: 'P1D',
  WEEK: 'P1W',
  WEEK_STARTING_SUNDAY: '1969-12-28T00:00:00Z/P1W',
  WEEK_STARTING_MONDAY: '1969-12-29T00:00:00Z/P1W',
  WEEK_ENDING_SATURDAY: 'P1W/1970-01-03T00:00:00Z',
  WEEK_ENDING_SUNDAY: 'P1W/1970-01-04T00:00:00Z',
  MONTH: 'P1M',
  QUARTER: 'P0.25Y',
  YEAR: 'P1Y'
};