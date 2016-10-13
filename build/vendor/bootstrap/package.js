"use strict";

Package.describe({ name: "twbs:bootstrap", summary: "The most popular front-end framework for developing responsive, mobile first projects on the web.", version: "3.3.7", git: "https://github.com/twbs/bootstrap.git" }), Package.onUse(function (s) {
  s.versionsFrom("METEOR@1.0"), s.use("jquery", "client");var t = ["dist/fonts/glyphicons-halflings-regular.eot", "dist/fonts/glyphicons-halflings-regular.svg", "dist/fonts/glyphicons-halflings-regular.ttf", "dist/fonts/glyphicons-halflings-regular.woff", "dist/fonts/glyphicons-halflings-regular.woff2"];s.addAssets ? s.addAssets(t, "client") : s.addFiles(t, "client", { isAsset: !0 }), s.addFiles(["dist/css/bootstrap.css", "dist/js/bootstrap.js"], "client");
});