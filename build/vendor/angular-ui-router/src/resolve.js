"use strict";

function $Resolve(e, r) {
  var n = 1,
      i = 2,
      t = {},
      o = [],
      s = t,
      u = extend(e.when(t), { $$promises: t, $$values: t });this.study = function (t) {
    function $(e, s) {
      if (h[s] !== i) {
        if (c.push(s), h[s] === n) throw c.splice(0, indexOf(c, s)), new Error("Cyclic dependency: " + c.join(" -> "));if (h[s] = n, isString(e)) f.push(s, [function () {
          return r.get(e);
        }], o);else {
          var u = r.annotate(e);forEach(u, function (e) {
            e !== s && t.hasOwnProperty(e) && $(t[e], e);
          }), f.push(s, e, u);
        }c.pop(), h[s] = i;
      }
    }function l(e) {
      return isObject(e) && e.then && e.$$promises;
    }if (!isObject(t)) throw new Error("'invocables' must be an object");var a = objectKeys(t || {}),
        f = [],
        c = [],
        h = {};return forEach(t, $), t = c = h = null, function (n, i, t) {
      function o() {
        --m || (w || merge(p, i.$$values), v.$$values = p, v.$$promises = v.$$promises || !0, delete v.$$inheritedValues, h.resolve(p));
      }function $(e) {
        v.$$failure = e, h.reject(e);
      }function c(i, s, u) {
        function l(e) {
          f.reject(e), $(e);
        }function a() {
          if (!isDefined(v.$$failure)) try {
            f.resolve(r.invoke(s, t, p)), f.promise.then(function (e) {
              p[i] = e, o();
            }, l);
          } catch (e) {
            l(e);
          }
        }var f = e.defer(),
            c = 0;forEach(u, function (e) {
          d.hasOwnProperty(e) && !n.hasOwnProperty(e) && (c++, d[e].then(function (r) {
            p[e] = r, --c || a();
          }, l));
        }), c || a(), d[i] = f.promise;
      }if (l(n) && void 0 === t && (t = i, i = n, n = null), n) {
        if (!isObject(n)) throw new Error("'locals' must be an object");
      } else n = s;if (i) {
        if (!l(i)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      } else i = u;var h = e.defer(),
          v = h.promise,
          d = v.$$promises = {},
          p = extend({}, n),
          m = 1 + f.length / 3,
          w = !1;if (isDefined(i.$$failure)) return $(i.$$failure), v;i.$$inheritedValues && merge(p, omit(i.$$inheritedValues, a)), extend(d, i.$$promises), i.$$values ? (w = merge(p, omit(i.$$values, a)), v.$$inheritedValues = omit(i.$$values, a), o()) : (i.$$inheritedValues && (v.$$inheritedValues = omit(i.$$inheritedValues, a)), i.then(o, $));for (var b = 0, j = f.length; b < j; b += 3) {
        n.hasOwnProperty(f[b]) ? o() : c(f[b], f[b + 1], f[b + 2]);
      }return v;
    };
  }, this.resolve = function (e, r, n, i) {
    return this.study(e)(r, n, i);
  };
}$Resolve.$inject = ["$q", "$injector"], angular.module("ui.router.util").service("$resolve", $Resolve);