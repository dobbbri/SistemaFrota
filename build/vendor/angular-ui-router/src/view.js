"use strict";

function $ViewProvider() {
  function e(e, r) {
    return { load: function load(e, o) {
        var t,
            i = { template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {} };return o = extend(i, o), o.view && (t = r.fromConfig(o.view, o.params, o.locals)), t;
      } };
  }this.$get = e, e.$inject = ["$rootScope", "$templateFactory"];
}$ViewProvider.$inject = [], angular.module("ui.router.state").provider("$view", $ViewProvider);