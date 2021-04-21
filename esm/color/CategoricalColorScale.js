function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable no-dupe-class-members */
import { scaleOrdinal } from 'd3-scale';
import { ExtensibleFunction } from '../models';
import stringifyAndTrim from './stringifyAndTrim'; // Use type augmentation to correct the fact that
// an instance of CategoricalScale is also a function

var CategoricalColorScale = /*#__PURE__*/function (_ExtensibleFunction) {
  _inheritsLoose(CategoricalColorScale, _ExtensibleFunction);

  /**
   * Constructor
   * @param {*} colors an array of colors
   * @param {*} parentForcedColors optional parameter that comes from parent
   * (usually CategoricalColorNamespace) and supersede this.forcedColors
   */
  function CategoricalColorScale(colors, parentForcedColors) {
    var _this;

    _this = _ExtensibleFunction.call(this, function (value) {
      return _this.getColor(value);
    }) || this;
    _this.colors = void 0;
    _this.scale = void 0;
    _this.parentForcedColors = void 0;
    _this.forcedColors = void 0;
    _this.colors = colors;
    _this.scale = scaleOrdinal();

    _this.scale.range(colors);

    _this.parentForcedColors = parentForcedColors;
    _this.forcedColors = {};
    return _this;
  }

  var _proto = CategoricalColorScale.prototype;

  _proto.getColor = function getColor(value) {
    var cleanedValue = stringifyAndTrim(value);
    var parentColor = this.parentForcedColors && this.parentForcedColors[cleanedValue];

    if (parentColor) {
      return parentColor;
    }

    var forcedColor = this.forcedColors[cleanedValue];

    if (forcedColor) {
      return forcedColor;
    }

    return this.scale(cleanedValue);
  }
  /**
   * Enforce specific color for given value
   * @param {*} value value
   * @param {*} forcedColor forcedColor
   */
  ;

  _proto.setColor = function setColor(value, forcedColor) {
    this.forcedColors[stringifyAndTrim(value)] = forcedColor;
    return this;
  }
  /**
   * Get a mapping of data values to colors
   * @returns an object where the key is the data value and the value is the hex color code
   */
  ;

  _proto.getColorMap = function getColorMap() {
    var _this2 = this;

    var colorMap = {};
    this.scale.domain().forEach(function (value) {
      colorMap[value.toString()] = _this2.scale(value);
    });
    return _extends({}, colorMap, this.forcedColors, this.parentForcedColors);
  }
  /**
   * Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.
   */
  ;

  _proto.copy = function copy() {
    var copy = new CategoricalColorScale(this.scale.range(), this.parentForcedColors);
    copy.forcedColors = _extends({}, this.forcedColors);
    copy.domain(this.domain());
    copy.unknown(this.unknown());
    return copy;
  }
  /**
   * Returns the scale's current domain.
   */
  ;

  _proto.domain = function domain(newDomain) {
    if (typeof newDomain === 'undefined') {
      return this.scale.domain();
    }

    this.scale.domain(newDomain);
    return this;
  }
  /**
   * Returns the scale's current range.
   */
  ;

  _proto.range = function range(newRange) {
    if (typeof newRange === 'undefined') {
      return this.scale.range();
    }

    this.colors = newRange;
    this.scale.range(newRange);
    return this;
  }
  /**
   * Returns the current unknown value, which defaults to "implicit".
   */
  ;

  _proto.unknown = function unknown(value) {
    if (typeof value === 'undefined') {
      return this.scale.unknown();
    }

    this.scale.unknown(value);
    return this;
  };

  return CategoricalColorScale;
}(ExtensibleFunction);

export default CategoricalColorScale;