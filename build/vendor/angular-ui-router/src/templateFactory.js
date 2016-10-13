"use strict";

function $TemplateFactory(t, e, r) {
  this.fromConfig = function (t, e, r) {
    return isDefined(t.template) ? this.fromString(t.template, e) : isDefined(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : isDefined(t.templateProvider) ? this.fromProvider(t.templateProvider, e, r) : null;
  }, this.fromString = function (t, e) {
    return isFunction(t) ? t(e) : t;
  }, this.fromUrl = function (r, i) {
    return isFunction(r) && (r = r(i)), null == r ? null : t.get(r, { cache: e, headers: { Accept: "text/html" } }).then(function (t) {
      return t.data;
    });
  }, this.fromProvider = function (t, e, i) {
    return r.invoke(t, null, i || { params: e });
  };
}$TemplateFactory.$inject = ["$http", "$templateCache", "$injector"], angular.module("ui.router.util").service("$templateFactory", $TemplateFactory);