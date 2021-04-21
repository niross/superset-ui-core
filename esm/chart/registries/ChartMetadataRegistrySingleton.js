function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Registry, makeSingleton, OverwritePolicy } from '../..';

var ChartMetadataRegistry = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(ChartMetadataRegistry, _Registry);

  function ChartMetadataRegistry() {
    return _Registry.call(this, {
      name: 'ChartMetadata',
      overwritePolicy: OverwritePolicy.WARN
    }) || this;
  }

  return ChartMetadataRegistry;
}(Registry);

var getInstance = makeSingleton(ChartMetadataRegistry);
export default getInstance;