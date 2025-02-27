"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "presentes-frontend",
    environment,
    rootURL: "/",
    locationType: "auto",
    moment: {
      // includeLocales: true
      includeLocales: ["es"]
    },
    contentSecurityPolicy: {
      "connect-src":
        "'self' 'http://localhost:4200' 'presentes-backend.enjambrelab.ar' 'presentes.enjambrelab.ar' 'mapa.agenciapresentes.org' 'cadidates2019.agenciapresentes.org' 'candidates2023.agenciapresentes.org'",
      "style-src": "'self' 'unsafe-inline'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.API_URL = "";
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";
    ENV.API_URL = "";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    ENV.API_URL = process.env["API_URL"];
  }

  return ENV;
};
