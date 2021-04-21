import { createSelector } from 'reselect';
import { convertKeysToCamelCase } from '../..';
var DEFAULT_WIDTH = 800;
var DEFAULT_HEIGHT = 600;

var ChartProps = function ChartProps(config) {
  if (config === void 0) {
    config = {};
  }

  this.annotationData = void 0;
  this.datasource = void 0;
  this.rawDatasource = void 0;
  this.initialValues = void 0;
  this.formData = void 0;
  this.rawFormData = void 0;
  this.height = void 0;
  this.hooks = void 0;
  this.ownState = void 0;
  this.filterState = void 0;
  this.queriesData = void 0;
  this.width = void 0;
  this.behaviors = void 0;
  this.appSection = void 0;
  var _config = config,
      _config$annotationDat = _config.annotationData,
      annotationData = _config$annotationDat === void 0 ? {} : _config$annotationDat,
      _config$datasource = _config.datasource,
      datasource = _config$datasource === void 0 ? {} : _config$datasource,
      _config$formData = _config.formData,
      formData = _config$formData === void 0 ? {} : _config$formData,
      _config$hooks = _config.hooks,
      hooks = _config$hooks === void 0 ? {} : _config$hooks,
      _config$ownState = _config.ownState,
      ownState = _config$ownState === void 0 ? {} : _config$ownState,
      _config$filterState = _config.filterState,
      filterState = _config$filterState === void 0 ? {} : _config$filterState,
      _config$initialValues = _config.initialValues,
      initialValues = _config$initialValues === void 0 ? {} : _config$initialValues,
      _config$queriesData = _config.queriesData,
      queriesData = _config$queriesData === void 0 ? [] : _config$queriesData,
      _config$behaviors = _config.behaviors,
      behaviors = _config$behaviors === void 0 ? [] : _config$behaviors,
      _config$width = _config.width,
      width = _config$width === void 0 ? DEFAULT_WIDTH : _config$width,
      _config$height = _config.height,
      height = _config$height === void 0 ? DEFAULT_HEIGHT : _config$height,
      appSection = _config.appSection;
  this.width = width;
  this.height = height;
  this.annotationData = annotationData;
  this.datasource = convertKeysToCamelCase(datasource);
  this.rawDatasource = datasource;
  this.formData = convertKeysToCamelCase(formData);
  this.rawFormData = formData;
  this.hooks = hooks;
  this.initialValues = initialValues;
  this.queriesData = queriesData;
  this.ownState = ownState;
  this.filterState = filterState;
  this.behaviors = behaviors;
  this.appSection = appSection;
}; // eslint-disable-next-line func-name-matching


ChartProps.createSelector = void 0;
export { ChartProps as default };

ChartProps.createSelector = function create() {
  return createSelector(function (input) {
    return input.annotationData;
  }, function (input) {
    return input.datasource;
  }, function (input) {
    return input.formData;
  }, function (input) {
    return input.height;
  }, function (input) {
    return input.hooks;
  }, function (input) {
    return input.initialValues;
  }, function (input) {
    return input.queriesData;
  }, function (input) {
    return input.width;
  }, function (input) {
    return input.ownState;
  }, function (input) {
    return input.filterState;
  }, function (input) {
    return input.behaviors;
  }, function (input) {
    return input.appSection;
  }, function (annotationData, datasource, formData, height, hooks, initialValues, queriesData, width, ownState, filterState, behaviors, appSection) {
    return new ChartProps({
      annotationData: annotationData,
      datasource: datasource,
      formData: formData,
      height: height,
      hooks: hooks,
      initialValues: initialValues,
      queriesData: queriesData,
      ownState: ownState,
      filterState: filterState,
      width: width,
      behaviors: behaviors,
      appSection: appSection
    });
  });
};