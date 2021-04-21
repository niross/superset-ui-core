function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { SupersetClient } from '../../../connection';
export default function getFormData(_ref) {
  var _ref$client = _ref.client,
      client = _ref$client === void 0 ? SupersetClient : _ref$client,
      sliceId = _ref.sliceId,
      overrideFormData = _ref.overrideFormData,
      requestConfig = _ref.requestConfig;
  var promise = client.get(_extends({
    endpoint: "/api/v1/form_data/?slice_id=" + sliceId
  }, requestConfig)).then(function (_ref2) {
    var json = _ref2.json;
    return json;
  });
  return overrideFormData ? promise.then(function (formData) {
    return _extends({}, formData, overrideFormData);
  }) : promise;
}