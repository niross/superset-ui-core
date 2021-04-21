function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Loadable from 'react-loadable';
var defaultProps = {
  onRenderFailure: function onRenderFailure() {},
  onRenderSuccess: function onRenderSuccess() {}
};
export default function createLoadableRenderer(options) {
  var LoadableRenderer = Loadable.Map(options); // Extends the behavior of LoadableComponent to provide post-render listeners

  var CustomLoadableRenderer = /*#__PURE__*/function (_LoadableRenderer) {
    _inheritsLoose(CustomLoadableRenderer, _LoadableRenderer);

    function CustomLoadableRenderer() {
      return _LoadableRenderer.apply(this, arguments) || this;
    }

    var _proto = CustomLoadableRenderer.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.afterRender();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.afterRender();
    };

    _proto.afterRender = function afterRender() {
      var _this$state = this.state,
          loaded = _this$state.loaded,
          loading = _this$state.loading,
          error = _this$state.error;
      var _this$props = this.props,
          onRenderFailure = _this$props.onRenderFailure,
          onRenderSuccess = _this$props.onRenderSuccess;

      if (!loading) {
        if (error) {
          onRenderFailure(error);
        } else if (loaded && Object.keys(loaded).length > 0) {
          onRenderSuccess();
        }
      }
    };

    return CustomLoadableRenderer;
  }(LoadableRenderer);

  CustomLoadableRenderer.defaultProps = void 0;
  CustomLoadableRenderer.defaultProps = defaultProps;
  CustomLoadableRenderer.preload = LoadableRenderer.preload;
  return CustomLoadableRenderer;
}