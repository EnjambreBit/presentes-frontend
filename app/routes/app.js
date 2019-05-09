import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
  perfil: service(),
  flash: service(),

  model() {
    return this.perfil.iniciar().catch(error => {
      if (error.responseJSON.errors) {
        error.responseJSON.errors.forEach(err => {
          if (err.status === "401") {
            this.flash.error("No tiene permisos para acceder");
          } else {
            this.flash.error(error.responseJSON.errors[0].detail);
          }
        });
      }
      return this.transitionTo("login");
    });
  }
});
