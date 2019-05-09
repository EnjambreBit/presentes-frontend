"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        "images/layers-2x.png",
        "images/layers.png",
        "images/marker-icon-2x.png",
        "images/marker-icon.png",
        "images/marker-shadow.png"
      ]
    }
  });

  app.import("vendor/DinNextRounded/DINNEXTROUNDEDLTPRO-LIGHT.OTF");
  app.import("vendor/DinNextRounded/DINNEXTROUNDEDLTPRO-REGULAR.OTF");

  return app.toTree();
};
