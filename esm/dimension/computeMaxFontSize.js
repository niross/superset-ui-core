function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import getTextDimension from './getTextDimension';

function decreaseSizeUntil(startSize, computeDimension, condition) {
  var size = startSize;
  var dimension = computeDimension(size);

  while (!condition(dimension)) {
    size -= 1;
    dimension = computeDimension(size);
  }

  return size;
}

export default function computeMaxFontSize(input) {
  var idealFontSize = input.idealFontSize,
      maxWidth = input.maxWidth,
      maxHeight = input.maxHeight,
      style = input.style,
      rest = _objectWithoutPropertiesLoose(input, ["idealFontSize", "maxWidth", "maxHeight", "style"]);

  var size;

  if (idealFontSize !== undefined && idealFontSize !== null) {
    size = idealFontSize;
  } else if (maxHeight === undefined || maxHeight === null) {
    throw new Error('You must specify at least one of maxHeight or idealFontSize');
  } else {
    size = Math.floor(maxHeight);
  }

  function computeDimension(fontSize) {
    return getTextDimension(_extends({}, rest, {
      style: _extends({}, style, {
        fontSize: fontSize + "px"
      })
    }));
  }

  if (maxWidth !== undefined && maxWidth !== null) {
    size = decreaseSizeUntil(size, computeDimension, function (dim) {
      return dim.width <= maxWidth;
    });
  }

  if (maxHeight !== undefined && maxHeight !== null) {
    size = decreaseSizeUntil(size, computeDimension, function (dim) {
      return dim.height <= maxHeight;
    });
  }

  return size;
}