"use strict";

define(["../core", "../core/access", "./support", "../selector"], function (e, t, n) {
  "use strict";
  var o = /^(?:input|select|textarea|button)$/i,
      r = /^(?:a|area)$/i;e.fn.extend({ prop: function prop(n, o) {
      return t(this, e.prop, n, o, arguments.length > 1);
    }, removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[e.propFix[t] || t];
      });
    } }), e.extend({ prop: function prop(t, n, o) {
      var r,
          a,
          p = t.nodeType;if (3 !== p && 8 !== p && 2 !== p) return 1 === p && e.isXMLDoc(t) || (n = e.propFix[n] || n, a = e.propHooks[n]), void 0 !== o ? a && "set" in a && void 0 !== (r = a.set(t, o, n)) ? r : t[n] = o : a && "get" in a && null !== (r = a.get(t, n)) ? r : t[n];
    }, propHooks: { tabIndex: { get: function get(t) {
          var n = e.find.attr(t, "tabindex");return n ? parseInt(n, 10) : o.test(t.nodeName) || r.test(t.nodeName) && t.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), n.optSelected || (e.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), e.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    e.propFix[this.toLowerCase()] = this;
  });
});