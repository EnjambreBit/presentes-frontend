import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";

export default Component.extend({
  tagName: "",
  store: service(),
  columnas: null,

  didInsertElement() {
    this._super(...arguments);
    this.set("columnas", [
      // {
      //   titulo: "Nombre",
      //   atributo: "nombre",
      //   componente: "presentes-ui/celula-link"
      // },
      {
        titulo: "Nombre",
        atributo: "nombreCompleto"
      }
    ]);
  },

  tarea: task(function*() {
    let datos = yield this.store.query("caso", {});
    return { filas: datos, meta: datos.meta };
  }).restartable()
});
