import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",

  tieneError: computed("model.errors.length", function() {
    let atributo = this.atributo || this.name;

    return this.model.error[atributo] !== undefined;
  }),

  errores: computed("tieneError", function() {
    let atributo = this.atributo || this.name;

    if (this.tieneError) {
      return this.model.error[atributo].validation;
    } else {
      return [];
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    let atributo = this.atributo || this.name;

    this.set("valor", this.model.get(atributo));
  },

  actions: {
    actualizar(valorNuevo) {
      let atributo = this.atributo || this.name;

      this.model.set(atributo, valorNuevo);
    }
  }
});
