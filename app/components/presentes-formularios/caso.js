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
    this.estadosDePublicacion.perform();
    this.opcionesSiNo.perform();

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

  estadosDePublicacion: task(function*() {
    let estados = yield this.store.findAll("estado-de-caso");
    return estados;
  }),

  opcionesSiNo: task(function*() {
    return [{ id: "SI", nombre: "Sí" }, { id: "NO", nombre: "No" }];
  }),

  submit: task(function*(modelo) {
    let objetoEsMigrante = modelo.get("esMigrante");
    let esMigranteString = objetoEsMigrante.id;
    modelo.set("esMigrante", esMigranteString);
    yield modelo.save();
    this.router.transitionTo("app.casos.detalle", modelo.get("id"));
  }),

  actions: {
    parseURL(value) {
      let url = value.split("@");
      let at = url[1].split("z");
      let zero = at[0].split(",");
      let lat = zero[0];
      let lon = zero[1];
      let modelo = this.get("modelo");
      modelo.set("latitud", "");
      modelo.set("longitud", "");
      modelo.set("latitud", lat);
      modelo.set("longitud", lon);
    }
  }
});
