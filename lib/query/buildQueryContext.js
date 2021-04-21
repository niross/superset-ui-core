"use strict";

exports.__esModule = true;
exports.default = buildQueryContext;

var _buildQueryObject = _interopRequireDefault(require("./buildQueryObject"));

var _DatasourceKey = _interopRequireDefault(require("./DatasourceKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WRAP_IN_ARRAY = function WRAP_IN_ARRAY(baseQueryObject, options) {
  return [baseQueryObject];
};

function buildQueryContext(formData, options) {
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
    datasource: new _DatasourceKey.default(formData.datasource).toObject(),
    force: formData.force || false,
    queries: buildQuery((0, _buildQueryObject.default)(formData, queryFields), {
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