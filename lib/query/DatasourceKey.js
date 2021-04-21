"use strict";

exports.__esModule = true;
exports.default = void 0;

var _Datasource = require("./types/Datasource");

var DatasourceKey = /*#__PURE__*/function () {
  function DatasourceKey(key) {
    this.id = void 0;
    this.type = void 0;

    var _key$split = key.split('__'),
        idStr = _key$split[0],
        typeStr = _key$split[1];

    this.id = parseInt(idStr, 10);
    this.type = typeStr === 'table' ? _Datasource.DatasourceType.Table : _Datasource.DatasourceType.Druid;
  }

  var _proto = DatasourceKey.prototype;

  _proto.toString = function toString() {
    return this.id + "__" + this.type;
  };

  _proto.toObject = function toObject() {
    return {
      id: this.id,
      type: this.type
    };
  };

  return DatasourceKey;
}();

exports.default = DatasourceKey;