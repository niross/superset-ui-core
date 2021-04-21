var DEFAULT_DIMENSION = {
  height: 20,
  width: 100
};
export default function getBBoxCeil(node, defaultDimension) {
  if (defaultDimension === void 0) {
    defaultDimension = DEFAULT_DIMENSION;
  }

  var _ref = node.getBBox ? node.getBBox() : defaultDimension,
      width = _ref.width,
      height = _ref.height;

  return {
    height: Math.ceil(height),
    width: Math.ceil(width)
  };
}