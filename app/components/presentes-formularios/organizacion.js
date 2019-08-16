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

    if (this.get("modelo")) {
      this.set("etiqueta", "Guardar");
      this.set("creacion", false);
    } else {
      let modelo = this.store.createRecord("organizacion", {
        latitud: "",
        longitud: ""
      });
      this.set("modelo", modelo);
      this.set("etiqueta", "Registrar");
      this.set("creacion", true);
    }
    let validaciones = {
      nombre: [validatePresence(true)],
      telefono: [validatePresence(true)],
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

  get_lat_lon(modelo) {
    let direccion = modelo.get("direccion");
    let localidad = modelo.get("localidad");
    let provincia = modelo.get("provincia.nombre");
    let categoria = modelo.get("categoria.nombre");
    let url =
      "http://nominatim.openstreetmap.org/search?format=json&limit=1&q=";
    let query;
    if (direccion) {
      query = direccion + "+" + localidad + "+" + provincia;
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

  submit: task(function*(modelo) {
    let lat = modelo.get("latitud");
    let lon = modelo.get("longitud");
    if (!lat || !lon) {
      this.get_lat_lon(modelo);
      yield timeout(1000); // TO-DO: hacer que se guarde el modelo una vez que se obtuvieron las coordenadas.
    }
    yield modelo.save();
    this.router.transitionTo("app.organizaciones.detalle", modelo.get("id"));
  }),

  actions: {}
});
