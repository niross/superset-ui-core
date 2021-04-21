var ChartMetadata = /*#__PURE__*/function () {
  function ChartMetadata(config) {
    this.name = void 0;
    this.canBeAnnotationTypes = void 0;
    this.canBeAnnotationTypesLookup = void 0;
    this.credits = void 0;
    this.description = void 0;
    this.show = void 0;
    this.supportedAnnotationTypes = void 0;
    this.thumbnail = void 0;
    this.useLegacyApi = void 0;
    this.behaviors = void 0;
    this.datasourceCount = void 0;
    var name = config.name,
        _config$canBeAnnotati = config.canBeAnnotationTypes,
        canBeAnnotationTypes = _config$canBeAnnotati === void 0 ? [] : _config$canBeAnnotati,
        _config$credits = config.credits,
        credits = _config$credits === void 0 ? [] : _config$credits,
        _config$description = config.description,
        description = _config$description === void 0 ? '' : _config$description,
        _config$show = config.show,
        show = _config$show === void 0 ? true : _config$show,
        _config$supportedAnno = config.supportedAnnotationTypes,
        supportedAnnotationTypes = _config$supportedAnno === void 0 ? [] : _config$supportedAnno,
        thumbnail = config.thumbnail,
        _config$useLegacyApi = config.useLegacyApi,
        useLegacyApi = _config$useLegacyApi === void 0 ? false : _config$useLegacyApi,
        _config$behaviors = config.behaviors,
        behaviors = _config$behaviors === void 0 ? [] : _config$behaviors,
        _config$datasourceCou = config.datasourceCount,
        datasourceCount = _config$datasourceCou === void 0 ? 1 : _config$datasourceCou;
    this.name = name;
    this.credits = credits;
    this.description = description;
    this.show = show;
    this.canBeAnnotationTypes = canBeAnnotationTypes;
    this.canBeAnnotationTypesLookup = canBeAnnotationTypes.reduce(function (prev, type) {
      var lookup = prev;
      lookup[type] = true;
      return lookup;
    }, {});
    this.supportedAnnotationTypes = supportedAnnotationTypes;
    this.thumbnail = thumbnail;
    this.useLegacyApi = useLegacyApi;
    this.behaviors = behaviors;
    this.datasourceCount = datasourceCount;
  }

  var _proto = ChartMetadata.prototype;

  _proto.canBeAnnotationType = function canBeAnnotationType(type) {
    return this.canBeAnnotationTypesLookup[type] || false;
  };

  _proto.clone = function clone() {
    return new ChartMetadata({
      canBeAnnotationTypes: this.canBeAnnotationTypes,
      credits: this.credits,
      description: this.description,
      name: this.name,
      show: this.show,
      supportedAnnotationTypes: this.supportedAnnotationTypes,
      thumbnail: this.thumbnail,
      useLegacyApi: this.useLegacyApi,
      behaviors: this.behaviors,
      datasourceCount: this.datasourceCount
    });
  };

  return ChartMetadata;
}();

export { ChartMetadata as default };