"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

+function (t) {
  "use strict";
  function e(e) {
    var a,
        s = e.attr("data-target") || (a = e.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, "");return t(s);
  }function a(e) {
    return this.each(function () {
      var a = t(this),
          i = a.data("bs.collapse"),
          n = t.extend({}, s.DEFAULTS, a.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);!i && n.toggle && /show|hide/.test(e) && (n.toggle = !1), i || a.data("bs.collapse", i = new s(this, n)), "string" == typeof e && i[e]();
    });
  }var s = function s(e, a) {
    this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, a), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };s.VERSION = "3.3.7", s.TRANSITION_DURATION = 350, s.DEFAULTS = { toggle: !0 }, s.prototype.dimension = function () {
    var t = this.$element.hasClass("width");return t ? "width" : "height";
  }, s.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e,
          i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
        var n = t.Event("show.bs.collapse");if (this.$element.trigger(n), !n.isDefaultPrevented()) {
          i && i.length && (a.call(i, "hide"), e || i.data("bs.collapse", null));var l = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var o = function o() {
            this.$element.removeClass("collapsing").addClass("collapse in")[l](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!t.support.transition) return o.call(this);var r = t.camelCase(["scroll", l].join("-"));this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[l](this.$element[0][r]);
        }
      }
    }
  }, s.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var a = this.dimension();this.$element[a](this.$element[a]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var i = function i() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return t.support.transition ? void this.$element[a](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : i.call(this);
      }
    }
  }, s.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, s.prototype.getParent = function () {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (a, s) {
      var i = t(s);this.addAriaAndCollapsedClass(e(i), i);
    }, this)).end();
  }, s.prototype.addAriaAndCollapsedClass = function (t, e) {
    var a = t.hasClass("in");t.attr("aria-expanded", a), e.toggleClass("collapsed", !a).attr("aria-expanded", a);
  };var i = t.fn.collapse;t.fn.collapse = a, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = i, this;
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (s) {
    var i = t(this);i.attr("data-target") || s.preventDefault();var n = e(i),
        l = n.data("bs.collapse"),
        o = l ? "toggle" : i.data();a.call(n, o);
  });
}(jQuery);