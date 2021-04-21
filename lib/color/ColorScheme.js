"use strict";

exports.__esModule = true;
exports.default = void 0;

var ColorScheme = function ColorScheme(config) {
  this.colors = void 0;
  this.description = void 0;
  this.id = void 0;
  this.label = void 0;
  var colors = config.colors,
      _config$description = config.description,
      description = _config$description === void 0 ? '' : _config$description,
      id = config.id,
      label = config.label;
  this.id = id;
  this.label = label != null ? label : id;
  this.colors = colors;
  this.description = description;
};

exports.default = ColorScheme;