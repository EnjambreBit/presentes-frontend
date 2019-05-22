import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";

export default Component.extend({
  api: service(),
  tribute: null,

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

    if (this.menciones) {
      this.activarMentions.perform();
    }
  },

  activarMentions: task(function*() {
    let respuesta = yield this.api.obtenerPerfiles();

    let tribute = new Tribute({
      values: respuesta.data
    });

    tribute.attach(this.$("textarea")[0]);
    this.set("tribute", tribute);
  }),

  didDestroyElement() {
    if (this.tribute) {
      let elemento = this.$("textarea");
      if (elemento) {
        this.tribute.detach(elemento[0]);
      }
    }
  },

  actions: {
    actualizar(valorNuevo) {
      this.model.set(this.atributo, valorNuevo);
    }
  }
});
