import Service from "@ember/service";
import { inject as service } from "@ember/service";
import $ from "jquery";
import ENV from "../config/environment";
import { computed } from "@ember/object";

export default Service.extend({
  session: service(),

  post(endpoint, datos, usar_token) {
    let headers = {};

    if (usar_token === undefined) {
      usar_token = true;
    }

    if (usar_token) {
      headers = { Authorization: `Token ${this.token}` };
    }

    if (endpoint.endsWith("/")) {
      throw Error(`El endpoint '${endpoint} no debería terminar con /`);
    }

    return $.ajax({
      url: `${ENV.API_URL}/api/${endpoint}`,
      type: "POST",
      contentType: "application/json;charset=utf-8",
      dataType: "json",

      data: JSON.stringify(datos),
      headers: headers
    });
  },

  token: computed("session.session.content.authenticated.token", function() {
    return this.session.session.content.authenticated.token;
  }),

  fetch(endpoint, usar_token) {
    let headers = {};

    if (usar_token === false) {
      usar_token = false;
    } else {
      usar_token = true;
    }

    if (usar_token) {
      headers = { Authorization: `Token ${this.token}` };
    }

    if (endpoint.endsWith("/")) {
      throw Error(`El endpoint '${endpoint} no debería terminar con /`);
    }

    return $.ajax({
      url: `${ENV.API_URL}/api/${endpoint}`,
      type: "GET",
      dataType: "json",
      headers: headers
    });
  },

  obtenerPerfiles() {
    return this.fetch(`perfiles/obtener-nombres`);
  },

  obtenerCasos() {
    return this.fetch(`casos/obtener-casos`, false);
  }
});
