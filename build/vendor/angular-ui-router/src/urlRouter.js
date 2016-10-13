"use strict";

function $UrlRouterProvider(r, n) {
  function e(r) {
    var n = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(r.source);return null != n ? n[1].replace(/\\(.)/g, "$1") : "";
  }function t(r, n) {
    return r.replace(/\$(\$|\d{1,2})/, function (r, e) {
      return n["$" === e ? 0 : Number(e)];
    });
  }function i(r, n, e) {
    if (!e) return !1;var t = r.invoke(n, n, { $match: e });return !isDefined(t) || t;
  }function o(n, e, t, i, o) {
    function f(r, n, e) {
      return "/" === d ? r : n ? d.slice(0, -1) + r : e ? d.slice(1) + r : r;
    }function s(r) {
      function e(r) {
        var e = r(t, n);return !!e && (isString(e) && n.replace().url(e), !0);
      }if (!r || !r.defaultPrevented) {
        v && n.url() === v;v = void 0;var i,
            o = c.length;for (i = 0; i < o; i++) {
          if (e(c[i])) return;
        }a && e(a);
      }
    }function h() {
      return u = u || e.$on("$locationChangeSuccess", s);
    }var v,
        d = i.baseHref(),
        $ = n.url();return l || h(), { sync: function sync() {
        s();
      }, listen: function listen() {
        return h();
      }, update: function update(r) {
        return r ? void ($ = n.url()) : void (n.url() !== $ && (n.url($), n.replace()));
      }, push: function push(r, e, t) {
        var i = r.format(e || {});null !== i && e && e["#"] && (i += "#" + e["#"]), n.url(i), v = t && t.$$avoidResync ? n.url() : void 0, t && t.replace && n.replace();
      }, href: function href(e, t, i) {
        if (!e.validates(t)) return null;var u = r.html5Mode();angular.isObject(u) && (u = u.enabled), u = u && o.history;var c = e.format(t);if (i = i || {}, u || null === c || (c = "#" + r.hashPrefix() + c), null !== c && t && t["#"] && (c += "#" + t["#"]), c = f(c, u, i.absolute), !i.absolute || !c) return c;var a = !u && c ? "/" : "",
            l = n.port();return l = 80 === l || 443 === l ? "" : ":" + l, [n.protocol(), "://", n.host(), l, a, c].join("");
      } };
  }var u,
      c = [],
      a = null,
      l = !1;this.rule = function (r) {
    if (!isFunction(r)) throw new Error("'rule' must be a function");return c.push(r), this;
  }, this.otherwise = function (r) {
    if (isString(r)) {
      var n = r;r = function r() {
        return n;
      };
    } else if (!isFunction(r)) throw new Error("'rule' must be a function");return a = r, this;
  }, this.when = function (r, o) {
    var u,
        c = isString(o);if (isString(r) && (r = n.compile(r)), !c && !isFunction(o) && !isArray(o)) throw new Error("invalid 'handler' in when()");var a = { matcher: function matcher(r, e) {
        return c && (u = n.compile(e), e = ["$match", function (r) {
          return u.format(r);
        }]), extend(function (n, t) {
          return i(n, e, r.exec(t.path(), t.search()));
        }, { prefix: isString(r.prefix) ? r.prefix : "" });
      }, regex: function regex(r, n) {
        if (r.global || r.sticky) throw new Error("when() RegExp must not be global or sticky");return c && (u = n, n = ["$match", function (r) {
          return t(u, r);
        }]), extend(function (e, t) {
          return i(e, n, r.exec(t.path()));
        }, { prefix: e(r) });
      } },
        l = { matcher: n.isMatcher(r), regex: r instanceof RegExp };for (var f in l) {
      if (l[f]) return this.rule(a[f](r, o));
    }throw new Error("invalid 'what' in when()");
  }, this.deferIntercept = function (r) {
    void 0 === r && (r = !0), l = r;
  }, this.$get = o, o.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"];
}$UrlRouterProvider.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], angular.module("ui.router.router").provider("$urlRouter", $UrlRouterProvider);