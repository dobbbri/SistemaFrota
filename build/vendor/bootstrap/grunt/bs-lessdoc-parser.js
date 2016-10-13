"use strict";
function markdown2html(t) {
  var e = new Markdown();return e.render(t.trim()).slice(3, -5);
}function Section(t, e) {
  this.heading = t.trim(), this.id = this.heading.replace(/\s+/g, "-").toLowerCase(), this.customizable = e, this.docstring = null, this.subsections = [];
}function SubSection(t) {
  this.heading = t.trim(), this.id = this.heading.replace(/\s+/g, "-").toLowerCase(), this.variables = [];
}function VarDocstring(t) {
  this.html = markdown2html(t);
}function SectionDocstring(t) {
  this.html = markdown2html(t);
}function Variable(t, e) {
  this.name = t, this.defaultValue = e, this.docstring = null;
}function Tokenizer(t) {
  this._lines = t.split("\n"), this._next = void 0;
}function Parser(t) {
  this._tokenizer = new Tokenizer(t);
}var Markdown = require("markdown-it"),
    CUSTOMIZABLE_HEADING = /^[\/]{2}={2}(.*)$/,
    UNCUSTOMIZABLE_HEADING = /^[\/]{2}-{2}(.*)$/,
    SUBSECTION_HEADING = /^[\/]{2}={3}(.*)$/,
    SECTION_DOCSTRING = /^[\/]{2}#{2}(.+)$/,
    VAR_ASSIGNMENT = /^(@[a-zA-Z0-9_-]+):[ ]*([^ ;][^;]*);[ ]*$/,
    VAR_DOCSTRING = /^[\/]{2}[*]{2}(.+)$/;Section.prototype.addSubSection = function (t) {
  this.subsections.push(t);
}, SubSection.prototype.addVar = function (t) {
  this.variables.push(t);
}, Tokenizer.prototype.unshift = function (t) {
  if (void 0 !== this._next) throw new Error("Attempted to unshift twice!");this._next = t;
}, Tokenizer.prototype._shift = function () {
  if (void 0 !== this._next) {
    var t = this._next;return this._next = void 0, t;
  }if (this._lines.length <= 0) return null;var e = this._lines.shift(),
      i = null;if (i = SUBSECTION_HEADING.exec(e), null !== i) return new SubSection(i[1]);if (i = CUSTOMIZABLE_HEADING.exec(e), null !== i) return new Section(i[1], !0);if (i = UNCUSTOMIZABLE_HEADING.exec(e), null !== i) return new Section(i[1], !1);if (i = SECTION_DOCSTRING.exec(e), null !== i) return new SectionDocstring(i[1]);if (i = VAR_DOCSTRING.exec(e), null !== i) return new VarDocstring(i[1]);var n = e.lastIndexOf("//"),
      r = n === -1 ? e : e.slice(0, n);return i = VAR_ASSIGNMENT.exec(r), null !== i ? new Variable(i[1], i[2]) : void 0;
}, Tokenizer.prototype.shift = function () {
  for (;;) {
    var t = this._shift();if (void 0 !== t) return t;
  }
}, Parser.prototype.parseFile = function () {
  for (var t = [];;) {
    var e = this.parseSection();if (null === e) {
      if (null !== this._tokenizer.shift()) throw new Error("Unexpected unparsed section of file remains!");return t;
    }t.push(e);
  }
}, Parser.prototype.parseSection = function () {
  var t = this._tokenizer.shift();if (null === t) return null;if (!(t instanceof Section)) throw new Error("Expected section heading; got: " + JSON.stringify(t));var e = this._tokenizer.shift();return e instanceof SectionDocstring ? t.docstring = e : this._tokenizer.unshift(e), this.parseSubSections(t), t;
}, Parser.prototype.parseSubSections = function (t) {
  for (;;) {
    var e = this.parseSubSection();if (null === e) {
      if (0 !== t.subsections.length) break;e = new SubSection(""), this.parseVars(e);
    }t.addSubSection(e);
  }1 !== t.subsections.length || t.subsections[0].heading || 0 !== t.subsections[0].variables.length || (t.subsections = []);
}, Parser.prototype.parseSubSection = function () {
  var t = this._tokenizer.shift();return t instanceof SubSection ? (this.parseVars(t), t) : (this._tokenizer.unshift(t), null);
}, Parser.prototype.parseVars = function (t) {
  for (;;) {
    var e = this.parseVar();if (null === e) return;t.addVar(e);
  }
}, Parser.prototype.parseVar = function () {
  var t = this._tokenizer.shift();t instanceof VarDocstring || (this._tokenizer.unshift(t), t = null);var e = this._tokenizer.shift();return e instanceof Variable ? (e.docstring = t, e) : (this._tokenizer.unshift(e), null);
}, module.exports = Parser;