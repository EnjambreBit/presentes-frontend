import Component from "@ember/component";
import { task } from "ember-concurrency";
import { inject as service } from "@ember/service";

export default Component.extend({
  api: service(),
  store: service(),

  didInsertElement() {
    this.set("columnas", [
      {
        titulo: "Víctima",
        atributo: "nombreCompleto",
        componente: "presentes-ui/caso-link"
      },
      {
        titulo: "Categoría",
        atributo: "categoria"
      },
      {
        titulo: "Fecha del hecho",
        atributo: "fechaDelHecho",
        fecha: true
      },
      {
        titulo: "Lugar del hecho",
        atributo: "lugar"
      }
    ]);
  },
  crearFiltros: task(function*() {
    let filtros = yield this.api.obtenerFiltrosParaCasosPublicos();
    return filtros.data;
  }),

  tarea: task(function*(filtros) {
    let resultado = yield this.api.obtenerCasosPublicos(filtros);
    return { filas: resultado.data.filas, meta: resultado.meta };
  }).restartable()
});
