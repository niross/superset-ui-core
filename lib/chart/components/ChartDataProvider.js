"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ChartClient = _interopRequireDefault(require("../clients/ChartClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChartDataProvider = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(ChartDataProvider, _React$PureComponent);

  function ChartDataProvider(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.chartClient = void 0;

    _this.handleFetchData = function () {
      var _this$props = _this.props,
          loadDatasource = _this$props.loadDatasource,
          formDataRequestOptions = _this$props.formDataRequestOptions,
          datasourceRequestOptions = _this$props.datasourceRequestOptions,
          queryRequestOptions = _this$props.queryRequestOptions;

      _this.setState({
        status: 'loading'
      }, function () {
        try {
          _this.chartClient.loadFormData(_this.extractSliceIdAndFormData(), formDataRequestOptions).then(function (formData) {
            return Promise.all([loadDatasource ? _this.chartClient.loadDatasource(formData.datasource, datasourceRequestOptions) : Promise.resolve(undefined), _this.chartClient.loadQueryData(formData, queryRequestOptions)]).then(function (_ref) {
              var datasource = _ref[0],
                  queriesData = _ref[1];
              return (// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                {
                  datasource: datasource,
                  formData: formData,
                  queriesData: queriesData
                }
              );
            });
          }).then(_this.handleReceiveData).catch(_this.handleError);
        } catch (error) {
          _this.handleError(error);
        }
      });
    };

    _this.handleReceiveData = function (payload) {
      var onLoaded = _this.props.onLoaded;
      if (onLoaded) onLoaded(payload);

      _this.setState({
        payload: payload,
        status: 'loaded'
      });
    };

    _this.handleError = function (error) {
      var onError = _this.props.onError;
      if (onError) onError(error);

      _this.setState({
        error: error,
        status: 'error'
      });
    };

    _this.state = {
      status: 'uninitialized'
    };
    _this.chartClient = new _ChartClient.default({
      client: props.client
    });
    return _this;
  }

  var _proto = ChartDataProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleFetchData();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props2 = this.props,
        formData = _this$props2.formData,
        sliceId = _this$props2.sliceId;

    if (formData !== prevProps.formData || sliceId !== prevProps.sliceId) {
      this.handleFetchData();
    }
  };

  _proto.extractSliceIdAndFormData = function extractSliceIdAndFormData() {
    var _this$props3 = this.props,
        formData = _this$props3.formData,
        sliceId = _this$props3.sliceId;
    return formData ? {
      formData: formData
    } : {
      sliceId: sliceId
    };
  };

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        status = _this$state.status,
        payload = _this$state.payload,
        error = _this$state.error;

    switch (status) {
      case 'loading':
        return children({
          loading: true
        });

      case 'loaded':
        return children({
          payload: payload
        });

      case 'error':
        return children({
          error: error
        });

      case 'uninitialized':
      default:
        return null;
    }
  };

  return ChartDataProvider;
}(_react.default.PureComponent);

ChartDataProvider.propTypes = {
  children: _propTypes.default.func.isRequired,
  loadDatasource: _propTypes.default.bool,
  onError: _propTypes.default.func,
  onLoaded: _propTypes.default.func
};
var _default = ChartDataProvider;
exports.default = _default;