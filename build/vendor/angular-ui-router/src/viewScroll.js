"use strict";

function $ViewScrollProvider() {
  var r = !1;this.useAnchorScroll = function () {
    r = !0;
  }, this.$get = ["$anchorScroll", "$timeout", function (o, i) {
    return r ? o : function (r) {
      return i(function () {
        r[0].scrollIntoView();
      }, 0, !1);
    };
  }];
}angular.module("ui.router.state").provider("$uiViewScroll", $ViewScrollProvider);