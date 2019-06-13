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

    if (this.get("modelo")) {
      this.set("etiqueta", "Guardar");
    } else {
      let modelo = this.store.createRecord("organizacion", {});
      this.set("modelo", modelo);
      this.set("etiqueta", "Registrar");
      this.set("creacion", true);
    }
    let validaciones = {
      nombre: [validatePresence(true)],
      direccion: [validatePresence(true)],
      telefono: [validatePresence(true)],
      email: [validatePresence(true)],
      localidad: [validatePresence(true)],
      provincia: [validatePresence(true)],
      descripcion: [validatePresence(true)]
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

  submit: task(function*(modelo) {
    yield modelo.save();
    this.router.transitionTo("app.organizaciones.detalle", modelo.get("id"));
  }),

  actions: {}
});
