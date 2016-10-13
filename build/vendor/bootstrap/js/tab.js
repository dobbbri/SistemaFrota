"use strict";

+function (t) {
  "use strict";
  function a(a) {
    return this.each(function () {
      var n = t(this),
          i = n.data("bs.tab");i || n.data("bs.tab", i = new e(this)), "string" == typeof a && i[a]();
    });
  }var e = function e(a) {
    this.element = t(a);
  };e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
    var a = this.element,
        e = a.closest("ul:not(.dropdown-menu)"),
        n = a.data("target");if (n || (n = a.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
      var i = e.find(".active:last a"),
          r = t.Event("hide.bs.tab", { relatedTarget: a[0] }),
          s = t.Event("show.bs.tab", { relatedTarget: i[0] });if (i.trigger(r), a.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var d = t(n);this.activate(a.closest("li"), e), this.activate(d, d.parent(), function () {
          i.trigger({ type: "hidden.bs.tab", relatedTarget: a[0] }), a.trigger({ type: "shown.bs.tab", relatedTarget: i[0] });
        });
      }
    }
  }, e.prototype.activate = function (a, n, i) {
    function r() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), d ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i();
    }var s = n.find("> .active"),
        d = i && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);s.length && d ? s.one("bsTransitionEnd", r).emulateTransitionEnd(e.TRANSITION_DURATION) : r(), s.removeClass("in");
  };var n = t.fn.tab;t.fn.tab = a, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
    return t.fn.tab = n, this;
  };var i = function i(e) {
    e.preventDefault(), a.call(t(this), "show");
  };t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
}(jQuery);