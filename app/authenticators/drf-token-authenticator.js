import Base from "ember-simple-auth/authenticators/base";
import ENV from "../config/environment";

import { Promise } from "rsvp";
import { isEmpty } from "@ember/utils";
import $ from "jquery";

export default Base.extend({
  restore(data) {
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(username, password) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: ENV.API_URL + "/api/auth/",
        type: "POST",
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: "application/json;charset=utf-8",
        dataType: "json"
      }).then(
        response => {
          resolve({
            token: response.token
          });
        },
        xhr => {
          var response = xhr.responseText;
          reject(response);
        }
      );
    });
  }
});
