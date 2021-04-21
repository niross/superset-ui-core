function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import buildQueryObject from './buildQueryObject';
import DatasourceKey from './DatasourceKey';

var WRAP_IN_ARRAY = function WRAP_IN_ARRAY(baseQueryObject, options) {
  return [baseQueryObject];
};

export default function buildQueryContext(formData, options) {
  var _ref = typeof options === 'function' ? {
    buildQuery: options,
    queryFields: {}
  } : options || {},
      queryFields = _ref.queryFields,
      _ref$buildQuery = _ref.buildQuery,
      buildQuery = _ref$buildQuery === void 0 ? WRAP_IN_ARRAY : _ref$buildQuery,
      _ref$hooks = _ref.hooks,
      hooks = _ref$hooks === void 0 ? {} : _ref$hooks,
      _ref$ownState = _ref.ownState,
      ownState = _ref$ownState === void 0 ? {} : _ref$ownState;

  return {
    datasource: new DatasourceKey(formData.datasource).toObject(),
    force: formData.force || false,
    queries: buildQuery(buildQueryObject(formData, queryFields), {
      extras: {},
      ownState: ownState,
      hooks: _extends({
        setDataMask: function setDataMask() {},
        setCachedChanges: function setCachedChanges() {}
      }, hooks)
    }),
    result_format: formData.result_format || 'json',
    result_type: formData.result_type || 'full'
  };
}