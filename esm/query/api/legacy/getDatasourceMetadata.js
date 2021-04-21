function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { SupersetClient } from '../../../connection';
export default function getDatasourceMetadata(_ref) {
  var _ref$client = _ref.client,
      client = _ref$client === void 0 ? SupersetClient : _ref$client,
      datasourceKey = _ref.datasourceKey,
      requestConfig = _ref.requestConfig;
  return client.get(_extends({
    endpoint: "/superset/fetch_datasource_metadata?datasourceKey=" + datasourceKey
  }, requestConfig)).then(function (response) {
    return response.json;
  });
}