"use strict";

define(["../core", "../data/var/dataPriv", "../css/var/isHiddenWithinTree"], function (e, n, t) {
  "use strict";
  function i(n) {
    var t,
        i = n.ownerDocument,
        s = n.nodeName,
        r = o[s];return r ? r : (t = i.body.appendChild(i.createElement(s)), r = e.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), o[s] = r, r);
  }function s(e, s) {
    for (var o, r, l = [], a = 0, d = e.length; a < d; a++) {
      r = e[a], r.style && (o = r.style.display, s ? ("none" === o && (l[a] = n.get(r, "display") || null, l[a] || (r.style.display = "")), "" === r.style.display && t(r) && (l[a] = i(r))) : "none" !== o && (l[a] = "none", n.set(r, "display", o)));
    }for (a = 0; a < d; a++) {
      null != l[a] && (e[a].style.display = l[a]);
    }return e;
  }var o = {};return e.fn.extend({ show: function show() {
      return s(this, !0);
    }, hide: function hide() {
      return s(this);
    }, toggle: function toggle(n) {
      return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
        t(this) ? e(this).show() : e(this).hide();
      });
    } }), s;
});