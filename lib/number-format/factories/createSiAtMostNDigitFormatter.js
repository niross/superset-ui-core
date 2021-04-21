"use strict";

exports.__esModule = true;
exports.default = createSiAtMostNDigitFormatter;

var _d3Format = require("d3-format");

var _NumberFormatter = _interopRequireDefault(require("../NumberFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSiAtMostNDigitFormatter(config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      description = _config.description,
      _config$n = _config.n,
      n = _config$n === void 0 ? 3 : _config$n,
      id = _config.id,
      label = _config.label;
  var siFormatter = (0, _d3Format.format)("." + n + "s");
  return new _NumberFormatter.default({
    description: description,
    formatFunc: function formatFunc(value) {
      var si = siFormatter(value);
      /* Removing trailing `.00` if any */

      return si.slice(-1) < 'A' ? parseFloat(si).toString() : si;
    },
    id: id != null ? id : "si_at_most_" + n + "_digit",
    label: label != null ? label : "SI with at most " + n + " significant digits"
  });
}