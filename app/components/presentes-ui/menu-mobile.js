import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  mostrar: false,
  perfil: service(),

  keyUp(key) {
    if (key.key === "Escape") {
      this.set("mostrar", false);
    }
  },

  actions: {
    alternar() {
      this.toggleProperty("mostrar");
    }
  }
});
