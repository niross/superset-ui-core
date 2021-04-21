"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ = require("../..");

var _ChartBuildQueryRegistrySingleton = _interopRequireDefault(require("../registries/ChartBuildQueryRegistrySingleton"));

var _ChartMetadataRegistrySingleton = _interopRequireDefault(require("../registries/ChartMetadataRegistrySingleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChartClient = /*#__PURE__*/function () {
  function ChartClient(config) {
    if (config === void 0) {
      config = {};
    }

    this.client = void 0;
    var _config = config,
        _config$client = _config.client,
        client = _config$client === void 0 ? _.SupersetClient : _config$client;
    this.client = client;
  }

  var _proto = ChartClient.prototype;

  _proto.loadFormData = function loadFormData(input, options) {
    /* If sliceId is provided, use it to fetch stored formData from API */
    if ('sliceId' in input) {
      var promise = this.client.get(_extends({
        endpoint: "/api/v1/form_data/?slice_id=" + input.sliceId
      }, options)).then(function (response) {
        return response.json;
      });
      /*
       * If formData is also specified, override API result
       * with user-specified formData
       */

      return promise.then(function (dbFormData) {
        return _extends({}, dbFormData, input.formData);
      });
    }
    /* If sliceId is not provided, returned formData wrapped in a Promise */


    return input.formData ? Promise.resolve(input.formData) : Promise.reject(new Error('At least one of sliceId or formData must be specified'));
  };

  _proto.loadQueryData = /*#__PURE__*/function () {
    var _loadQueryData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(formData, options) {
      var visType, metaDataRegistry, buildQueryRegistry, _yield$buildQueryRegi, _ref, useLegacyApi, buildQuery, requestConfig;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              visType = formData.viz_type;
              metaDataRegistry = (0, _ChartMetadataRegistrySingleton.default)();
              buildQueryRegistry = (0, _ChartBuildQueryRegistrySingleton.default)();

              if (!metaDataRegistry.has(visType)) {
                _context.next = 16;
                break;
              }

              _ref = metaDataRegistry.get(visType), useLegacyApi = _ref.useLegacyApi;
              _context.next = 7;
              return buildQueryRegistry.get(visType);

            case 7:
              _context.t0 = _yield$buildQueryRegi = _context.sent;

              if (!(_context.t0 != null)) {
                _context.next = 12;
                break;
              }

              _context.t1 = _yield$buildQueryRegi;
              _context.next = 13;
              break;

            case 12:
              _context.t1 = function () {
                return formData;
              };

            case 13:
              buildQuery = _context.t1;
              requestConfig = useLegacyApi ? _extends({
                endpoint: '/superset/explore_json/',
                postPayload: {
                  form_data: buildQuery(formData)
                }
              }, options) : _extends({
                endpoint: '/api/v1/chart/data',
                jsonPayload: {
                  query_context: buildQuery(formData)
                }
              }, options);
              return _context.abrupt("return", this.client.post(requestConfig).then(function (response) {
                return Array.isArray(response.json) ? response.json : [response.json];
              }));

            case 16:
              return _context.abrupt("return", Promise.reject(new Error("Unknown chart type: " + visType)));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadQueryData(_x, _x2) {
      return _loadQueryData.apply(this, arguments);
    }

    return loadQueryData;
  }();

  _proto.loadDatasource = function loadDatasource(datasourceKey, options) {
    return this.client.get(_extends({
      endpoint: "/superset/fetch_datasource_metadata?datasourceKey=" + datasourceKey
    }, options)).then(function (response) {
      return response.json;
    });
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.loadAnnotation = function loadAnnotation(annotationLayer) {
    /* When annotation does not require query */
    if (!(0, _.isDefined)(annotationLayer.sourceType)) {
      return Promise.resolve({});
    } // TODO: Implement


    return Promise.reject(new Error('This feature is not implemented yet.'));
  };

  _proto.loadAnnotations = function loadAnnotations(annotationLayers) {
    var _this = this;

    if (Array.isArray(annotationLayers) && annotationLayers.length > 0) {
      return Promise.all(annotationLayers.map(function (layer) {
        return _this.loadAnnotation(layer);
      })).then(function (results) {
        return annotationLayers.reduce(function (prev, layer, i) {
          var output = prev;
          output[layer.name] = results[i];
          return output;
        }, {});
      });
    }

    return Promise.resolve({});
  };

  _proto.loadChartData = function loadChartData(input) {
    var _this2 = this;

    return this.loadFormData(input).then(function (formData) {
      return Promise.all([_this2.loadAnnotations(formData.annotation_layers), _this2.loadDatasource(formData.datasource), _this2.loadQueryData(formData)]).then(function (_ref2) {
        var annotationData = _ref2[0],
            datasource = _ref2[1],
            queriesData = _ref2[2];
        return {
          annotationData: annotationData,
          datasource: datasource,
          formData: formData,
          queriesData: queriesData
        };
      });
    });
  };

  return ChartClient;
}();

exports.default = ChartClient;