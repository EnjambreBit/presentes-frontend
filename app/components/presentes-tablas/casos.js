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
        titulo: "Víctima",
        atributo: "nombreCompleto",
        componente: "presentes-ui/caso-link"
      },
      {
        titulo: "Estado de publicación",
        atributo: "estadoDePublicacion.nombre"
      },
      {
        titulo: "Categoría",
        atributo: "categoria.nombre"
      },
      {
        titulo: "Fecha del hecho",
        atributo: "fechaDelHecho"
      },
      {
        titulo: "Lugar del hecho",
        atributo: "lugarDelHechoCompleto"
      }
    ]);
  },

  tarea: task(function*() {
    let datos = yield this.store.query("caso", {});
    return { filas: datos, meta: datos.meta };
  }).restartable()
});
