"use strict";

exports.__esModule = true;
exports.CategoricalColorNamespace = exports.BRAND_COLOR = exports.SequentialScheme = exports.getSequentialSchemeRegistry = exports.getCategoricalSchemeRegistry = exports.CategoricalScheme = exports.CategoricalColorScale = void 0;

var CategoricalColorNamespace = _interopRequireWildcard(require("./CategoricalColorNamespace"));

exports.CategoricalColorNamespace = CategoricalColorNamespace;

var _CategoricalColorScale = _interopRequireDefault(require("./CategoricalColorScale"));

exports.CategoricalColorScale = _CategoricalColorScale.default;

var _CategoricalScheme = _interopRequireDefault(require("./CategoricalScheme"));

exports.CategoricalScheme = _CategoricalScheme.default;

var _CategoricalSchemeRegistrySingleton = _interopRequireDefault(require("./CategoricalSchemeRegistrySingleton"));

exports.getCategoricalSchemeRegistry = _CategoricalSchemeRegistrySingleton.default;

var _SequentialSchemeRegistrySingleton = _interopRequireDefault(require("./SequentialSchemeRegistrySingleton"));

exports.getSequentialSchemeRegistry = _SequentialSchemeRegistrySingleton.default;

var _SequentialScheme = _interopRequireDefault(require("./SequentialScheme"));

exports.SequentialScheme = _SequentialScheme.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BRAND_COLOR = '#00A699';
exports.BRAND_COLOR = BRAND_COLOR;