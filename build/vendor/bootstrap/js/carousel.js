"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

+function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var s = t(this),
          n = s.data("bs.carousel"),
          a = t.extend({}, i.DEFAULTS, s.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e),
          r = "string" == typeof e ? e : a.slide;n || s.data("bs.carousel", n = new i(this, a)), "number" == typeof e ? n.to(e) : r ? n[r]() : a.interval && n.pause().cycle();
    });
  }var i = function i(e, _i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
  };i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}t.preventDefault();
    }
  }, i.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
  }, i.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
  }, i.prototype.getItemForDirection = function (t, e) {
    var i = this.getItemIndex(e),
        s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;if (s && !this.options.wrap) return e;var n = "prev" == t ? -1 : 1,
        a = (i + n) % this.$items.length;return this.$items.eq(a);
  }, i.prototype.to = function (t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t);
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
  }, i.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, i.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, i.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, i.prototype.slide = function (e, s) {
    var n = this.$element.find(".item.active"),
        a = s || this.getItemForDirection(e, n),
        r = this.interval,
        o = "next" == e ? "left" : "right",
        l = this;if (a.hasClass("active")) return this.sliding = !1;var h = a[0],
        c = t.Event("slide.bs.carousel", { relatedTarget: h, direction: o });if (this.$element.trigger(c), !c.isDefaultPrevented()) {
      if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var d = t(this.$indicators.children()[this.getItemIndex(a)]);d && d.addClass("active");
      }var u = t.Event("slid.bs.carousel", { relatedTarget: h, direction: o });return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, n.addClass(o), a.addClass(o), n.one("bsTransitionEnd", function () {
        a.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
          l.$element.trigger(u);
        }, 0);
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this;
    }
  };var s = t.fn.carousel;t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = s, this;
  };var n = function n(i) {
    var s,
        n = t(this),
        a = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));if (a.hasClass("carousel")) {
      var r = t.extend({}, a.data(), n.data()),
          o = n.attr("data-slide-to");o && (r.interval = !1), e.call(a, r), o && a.data("bs.carousel").to(o), i.preventDefault();
    }
  };t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var i = t(this);e.call(i, i.data());
    });
  });
}(jQuery);