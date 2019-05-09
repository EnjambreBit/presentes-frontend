import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  router: service(),

  tagName: "div",

  actions: {
    ingresar() {
      this.set("error", "");
      let session = this.session;
      let auth = "authenticator:drf-token-authenticator";

      return session
        .authenticate(auth, this.usuario, this.password)
        .then(() => {
          this.get("router").transitionTo("app");
        })
        .catch(resultado => {
          try {
            let errors = JSON.parse(resultado);

            if (errors.non_field_errors) {
              this.set("error", errors.non_field_errors);
            } else if (errors.non_active_user) {
              this.set("error", errors.non_active_user);
            } else {
              this.set("error", resultado);
            }
          } catch (e) {
            this.set("error", resultado);
          }

          this.get("router").transitionTo("app");
          return resultado;
        });
    },
    hacerFocoSobrePassword() {
      this.$("[name='password']").focus();
    },
    login() {
      this.send("ingresar");
    }
  }
});
