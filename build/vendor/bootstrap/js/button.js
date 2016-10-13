"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

+function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var s = t(this),
          i = s.data("bs.button"),
          o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;i || s.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e);
    });
  }var n = function n(e, s) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, s), this.isLoading = !1;
  };n.VERSION = "3.3.7", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function (e) {
    var n = "disabled",
        s = this.$element,
        i = s.is("input") ? "val" : "html",
        o = s.data();e += "Text", null == o.resetText && s.data("resetText", s[i]()), setTimeout(t.proxy(function () {
      s[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, s.removeClass(n).removeAttr(n).prop(n, !1));
    }, this), 0);
  }, n.prototype.toggle = function () {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');if (e.length) {
      var n = this.$element.find("input");"radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var s = t.fn.button;t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
    return t.fn.button = s, this;
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
    var s = t(n.target).closest(".btn");e.call(s, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), s.is("input,button") ? s.trigger("focus") : s.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
  });
}(jQuery);