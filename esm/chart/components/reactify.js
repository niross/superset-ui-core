import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react'; // TODO: Note that id and className can collide between Props and ReactifyProps
// leading to (likely) unexpected behaviors. We should either require Props to not
// contain an id/className, or not combine them (via intersection), instead preferring
// wrapping (composition). As an example:
// interface MyProps {
//   id: number;
// }
// function myRender(container: HTMLDivElement, props: Readonly<MyProps>): void {
//   props.id // unusable: id is string & number
// }
// new (reactify(myRender))({ id: 5 }); // error: id has to be string & number

import { jsx as ___EmotionJSX } from "@emotion/react";
export default function reactify(renderFn, callbacks) {
  var ReactifiedComponent = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(ReactifiedComponent, _React$Component);

    function ReactifiedComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.container = void 0;
      _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = ReactifiedComponent.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.execute();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.execute();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.container = undefined;

      if (callbacks != null && callbacks.componentWillUnmount) {
        callbacks.componentWillUnmount.bind(this)();
      }
    };

    _proto.setContainerRef = function setContainerRef(ref) {
      this.container = ref;
    };

    _proto.execute = function execute() {
      if (this.container) {
        renderFn(this.container, this.props);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className;
      return ___EmotionJSX("div", {
        ref: this.setContainerRef,
        id: id,
        className: className
      });
    };

    return ReactifiedComponent;
  }(React.Component);

  ReactifiedComponent.propTypes = {
    id: _pt.string,
    className: _pt.string
  };
  var ReactifiedClass = ReactifiedComponent;

  if (renderFn.displayName) {
    ReactifiedClass.displayName = renderFn.displayName;
  } // eslint-disable-next-line react/forbid-foreign-prop-types


  if (renderFn.propTypes) {
    ReactifiedClass.propTypes = _extends({}, ReactifiedClass.propTypes, renderFn.propTypes);
  }

  if (renderFn.defaultProps) {
    ReactifiedClass.defaultProps = renderFn.defaultProps;
  }

  return ReactifiedComponent;
}