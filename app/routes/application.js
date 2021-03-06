import Route from "@ember/routing/route";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(ApplicationRouteMixin, {
  analytics: service(),
  beforeModel() {
    this.get("analytics").inicializar();
    // sets the application locale to Spanish
    moment.locale("es");
  }
});
