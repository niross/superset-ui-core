"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ = require("../..");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChartMetadataRegistry = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(ChartMetadataRegistry, _Registry);

  function ChartMetadataRegistry() {
    return _Registry.call(this, {
      name: 'ChartMetadata',
      overwritePolicy: _.OverwritePolicy.WARN
    }) || this;
  }

  return ChartMetadataRegistry;
}(_.Registry);

var getInstance = (0, _.makeSingleton)(ChartMetadataRegistry);
var _default = getInstance;
exports.default = _default;