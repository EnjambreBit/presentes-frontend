import Component from "@ember/component";
import { task } from "ember-concurrency";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "",
  store: service(),

  didInsertElement() {
    this._super(...arguments);
    this.buscar.perform();
  },

  buscar: task(function*() {
    let datos = yield this.get("store").query("etiqueta", {});
    return datos;
  }),

  actions: {
    cuandoSeleccionaEtiqueta(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
    }
  }
});
