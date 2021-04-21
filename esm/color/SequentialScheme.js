function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { scaleLinear } from 'd3-scale';
import { interpolateHcl, interpolateNumber, piecewise, quantize } from 'd3-interpolate';
import ColorScheme from './ColorScheme';

var SequentialScheme = /*#__PURE__*/function (_ColorScheme) {
  _inheritsLoose(SequentialScheme, _ColorScheme);

  function SequentialScheme(config) {
    var _this;

    _this = _ColorScheme.call(this, config) || this;
    _this.isDiverging = void 0;
    var _config$isDiverging = config.isDiverging,
        isDiverging = _config$isDiverging === void 0 ? false : _config$isDiverging;
    _this.isDiverging = isDiverging;
    return _this;
  }
  /**
   * Return a linear scale with a new domain interpolated from the input domain
   * to match the number of elements in the color scheme
   * because D3 continuous scale uses piecewise mapping between domain and range.
   * This is a common use-case when the domain is [min, max]
   * and the palette has more than two colors.
   *
   * @param domain domain of the scale
   * @param modifyRange Set this to true if you don't want to modify the domain and
   * want to interpolate range to have the same number of elements with domain instead.
   */


  var _proto = SequentialScheme.prototype;

  _proto.createLinearScale = function createLinearScale(domain, modifyRange) {
    if (domain === void 0) {
      domain = [0, 1];
    }

    if (modifyRange === void 0) {
      modifyRange = false;
    }

    var scale = scaleLinear().interpolate(interpolateHcl).clamp(true);
    return modifyRange || domain.length === this.colors.length ? scale.domain(domain).range(this.getColors(domain.length)) : scale.domain(quantize(piecewise(interpolateNumber, domain), this.colors.length)).range(this.colors);
  }
  /**
   * Get colors from this scheme
   * @param numColors number of colors to return.
   * Will interpolate the current scheme to match the number of colors requested
   * @param extent The extent of the color range to use.
   * For example [0.2, 1] will rescale the color scheme
   * such that color values in the range [0, 0.2) are excluded from the scheme.
   */
  ;

  _proto.getColors = function getColors(numColors, extent) {
    if (numColors === void 0) {
      numColors = this.colors.length;
    }

    if (extent === void 0) {
      extent = [0, 1];
    }

    if (numColors === this.colors.length && extent[0] === 0 && extent[1] === 1) {
      return this.colors;
    }

    var piecewiseScale = piecewise(interpolateHcl, this.colors);
    var adjustExtent = scaleLinear().range(extent).clamp(true);
    return quantize(function (t) {
      return piecewiseScale(adjustExtent(t));
    }, numColors);
  };

  return SequentialScheme;
}(ColorScheme);

export { SequentialScheme as default };