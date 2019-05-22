import Component from "@ember/component";
import { validatePresence } from "ember-changeset-validations/validators";
import { task } from "ember-concurrency";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "",
  store: service(),
  router: service(),
  api: service(),
  validaciones: null,
  creacion: null,

  init() {
    this._super(...arguments);

    this.provincias.perform();
    this.categorias.perform();

    if (this.get("modelo")) {
      this.set("etiqueta", "Guardar");
    } else {
      let modelo = this.store.createRecord("caso", {});
      this.set("modelo", modelo);
      this.set("etiqueta", "Registrar");
      this.set("creacion", true);
    }
    let validaciones = {
      nombre: [validatePresence(true)],
      apellido: [validatePresence(true)]
    };
    this.set("validaciones", validaciones);
  },
  didDestroyElement() {
    if (this.modelo.isNew) {
      this.modelo.destroyRecord();
    }
  },

  provincias: task(function*() {
    let provincias = yield this.store.findAll("provincia");
    return provincias;
  }),

  categorias: task(function*() {
    let categorias = yield this.store.findAll("categoria");
    return categorias;
  }),

  submit: task(function*(modelo) {
    yield modelo.save();
    this.router.transitionTo("app.casos.detalle", modelo.get("id"));
  }),

  actions: {}
});
