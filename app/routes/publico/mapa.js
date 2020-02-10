import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";

export default Route.extend({
  api: service(),
  queryParams: {
    anio: { refreshModel: true },
    categoria: { refreshModel: true }
  },
  anio: null,
  categoria: null,
  obtenerCasos: task(function*(query) {
    let respuesta = yield this.api.obtenerCasosPublicosParaMapa(query);
    return respuesta;
  }),
  model(params) {
    params.anio = params.anio || "2020";
    params.categoria = params.categoria || "";
    return this.get("obtenerCasos").perform({
      anio: params.anio,
      categoria: params.categoria
    });
  }
});
