import Component from "@ember/component";
import { validatePresence } from "ember-changeset-validations/validators";
import { task, timeout } from "ember-concurrency";
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
    this.organizaciones.perform();
    this.estadosDePublicacion.perform();
    this.opcionesSiNo.perform();
    this.opcionesSiNoNoSabe.perform();
    this.opcionesCausaJudicial.perform();
    this.opcionesDenuncia.perform();
    this.opcionesPublicaPrivada.perform();
    this.estudios.perform();

    if (this.get("modelo")) {
      this.set("etiqueta", "Guardar");
      this.set("creacion", false);
    } else {
      let modelo = this.store.createRecord("caso", {
        latitud: "",
        longitud: ""
      });
      this.set("modelo", modelo);
      this.set("etiqueta", "Registrar");
      this.set("creacion", true);
    }
    let validaciones = {
      // categoria: [validatePresence(true)],
      // estado: [validatePresence(true)],
      // nombre: [validatePresence(true)],
      // // apellido: [validatePresence(true)],
      // localidad: [validatePresence(true)],
      // provincia: [validatePresence(true)]
    };

    this.set("validaciones", validaciones);
  },
  didDestroyElement() {
    if (this.modelo.isNew) {
      this.modelo.destroyRecord();
    }
  },
  get_lat_lon(modelo) {
    let calle = modelo.get("calle");
    let localidad = modelo.get("localidad");
    let provincia = modelo.get("provincia.nombre");
    let categoria = modelo.get("categoria.nombre");
    let url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=";
    let query;

    if (calle) {
      query = calle + "+" + localidad + "+" + provincia;
    } else {
      query = localidad + "+" + provincia;
    }

    url = url + encodeURI(query);
    $.getJSON(url, function(data) {
      let lat;
      let lon;
      if (data.get("length") === 0) {
        lat = "";
        lon = "";
      } else {
        lat = data[0].lat;
        lon = data[0].lon;
      }
      modelo.set("latitud", lat);
      modelo.set("longitud", lon);
      let lat_lon = { lat, lon };
      return lat_lon;
    });
  },
  provincias: task(function*() {
    let provincias = yield this.store.findAll("provincia");
    return provincias;
  }),

  categorias: task(function*() {
    let categorias = yield this.store.findAll("categoria");
    return categorias;
  }),

  estudios: task(function*() {
    let estudios = yield this.store.findAll("estudio");
    return estudios;
  }),

  organizaciones: task(function*() {
    let organizaciones = yield this.store.findAll("organizacion");
    return organizaciones;
  }),

  estadosDePublicacion: task(function*() {
    let estados = yield this.store.findAll("estado-de-caso");
    return estados;
  }),

  opcionesSiNo: task(function*() {
    let opciones = yield [
      { id: "SI", nombre: "Sí" },
      { id: "NO", nombre: "No" }
    ];
    return opciones;
  }),

  opcionesSiNoNoSabe: task(function*() {
    let opciones = yield [
      { id: "SI", nombre: "Sí" },
      { id: "NO", nombre: "No" },
      { id: "NS", nombre: "No sabe" }
    ];
    return opciones;
  }),

  opcionesCausaJudicial: task(function*() {
    let opciones = yield [
      { id: "SI", nombre: "Sí" },
      { id: "NO", nombre: "No" },
      { id: "SD", nombre: "Sin determinar" }
    ];
    return opciones;
  }),

  opcionesDenuncia: task(function*() {
    let opciones = yield [
      { id: "SI", nombre: "Sí" },
      { id: "NO", nombre: "No" },
      { id: "NS", nombre: "No sabe" },
      { id: "NT", nombre: "No se la tomaron" }
    ];
    return opciones;
  }),

  opcionesPublicaPrivada: task(function*() {
    let opciones = yield [
      { id: "PU", nombre: "Pública" },
      { id: "PR", nombre: "Privada" }
    ];
    return opciones;
  }),
  submit: task(function*(modelo) {
    let lat = modelo.get("latitud");
    let lon = modelo.get("longitud");
    if (!lat || !lon) {
      this.get_lat_lon(modelo);
      yield timeout(1000); // TO-DO: hacer que se guarde el modelo una vez que se obtuvieron las coordenadas.
    }

    yield modelo.save();
    this.router.transitionTo("app.casos.detalle", modelo.get("id"));
  }),

  actions: {}
});
