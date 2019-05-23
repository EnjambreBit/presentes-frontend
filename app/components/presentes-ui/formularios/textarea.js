import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  api: service(),

  tieneError: computed("model.errors.length", function() {
    return this.model.error[this.atributo] !== undefined;
  }),

  errores: computed("tieneError", function() {
    if (this.tieneError) {
      return this.model.error[this.atributo].validation;
    } else {
      return [];
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    this.set("valor", this.model.get(this.atributo));
  },

  actions: {
    actualizar(valorNuevo) {
      this.model.set(this.atributo, valorNuevo);
    }
  }
});
