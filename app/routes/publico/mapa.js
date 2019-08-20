import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";

export default Route.extend({
  api: service(),
  obtenerCasos: task(function*() {
    let respuesta = yield this.api.obtenerCasosPublicosParaMapa();
    return respuesta;
  }),
  model() {
    return this.get("obtenerCasos").perform();
  }
});
