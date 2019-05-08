"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {});

  app.import("vendor/DinNextRounded/DINNEXTROUNDEDLTPRO-LIGHT.OTF");
  app.import("vendor/DinNextRounded/DINNEXTROUNDEDLTPRO-REGULAR.OTF");

  return app.toTree();
};
