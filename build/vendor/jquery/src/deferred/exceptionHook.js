"use strict";

define(["../core", "../deferred"], function (e) {
  "use strict";
  var n = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;e.Deferred.exceptionHook = function (e, o) {
    window.console && window.console.warn && e && n.test(e.name) && window.console.warn("jQuery.Deferred exception: " + e.message, e.stack, o);
  };
});