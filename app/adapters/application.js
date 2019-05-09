import DS from "ember-data";
import ENV from "../config/environment";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { inject as service } from "@ember/service";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  session: service(),
  router: service(),
  flash: service(),

  host: ENV.API_URL,
  namespace: "api",

  authorize(xhr) {
    let { token } = this.get("session.data.authenticated");
    if (token !== undefined && token !== null) {
      xhr.setRequestHeader("Authorization", `Token ${token}`);
    }
  },

  handleResponse(status, headers, payload, requestData) {
    if (status === 403) {
      this.flash.error("No tiene permisos para acceder a este registro");
      this.get("router").transitionTo("app");
    }

    return this._super(status, headers, payload, requestData);
  }
});
