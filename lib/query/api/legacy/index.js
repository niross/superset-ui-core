"use strict";

exports.__esModule = true;
var _exportNames = {
  fetchExploreJson: true,
  getFormData: true,
  getDatasourceMetadata: true,
  __hack_reexport_query_api_legacy: true
};
exports.__hack_reexport_query_api_legacy = exports.getDatasourceMetadata = exports.getFormData = exports.fetchExploreJson = void 0;

var _fetchExploreJson = _interopRequireDefault(require("./fetchExploreJson"));

exports.fetchExploreJson = _fetchExploreJson.default;

var _getFormData = _interopRequireDefault(require("./getFormData"));

exports.getFormData = _getFormData.default;

var _getDatasourceMetadata = _interopRequireDefault(require("./getDatasourceMetadata"));

exports.getDatasourceMetadata = _getDatasourceMetadata.default;

var _types = _interopRequireWildcard(require("./types"));

exports.__hack_reexport_query_api_legacy = _types.default;
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  exports[key] = _types[key];
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }