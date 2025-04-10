import Component from "@ember/component";
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
    this.lugaresDelHecho.perform();
    this.espaciosPrivados.perform();
    this.mecanicasDelHecho.perform();
    this.instituciones.perform();

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
    let url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=";
    let query;
  
    if (calle) {
      query = calle + "+" + localidad + "+" + provincia;
    } else {
      query = localidad + "+" + provincia;
    }
  
    url = url + encodeURI(query);
    
    return new Promise((resolve, reject) => {
      $.getJSON(url, function(data) {
        let lat;
        let lon;
        if (!data || data.length === 0) {
          lat = "";
          lon = "";
        } else {
          lat = data[0].lat;
          lon = data[0].lon;
        }
        modelo.set("latitud", lat);
        modelo.set("longitud", lon);
        resolve({ lat, lon });
      }).fail(reject);
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

  lugaresDelHecho: task(function*() {
    let lugares = yield this.store.findAll("lugar-del-hecho");
    return lugares;
  }),

  espaciosPrivados: task(function*() {
    let espacios = yield this.store.findAll("espacio-privado");
    return espacios;
  }),

  mecanicasDelHecho: task(function*() {
    let mecanicas = yield this.store.findAll("mecanica-del-hecho");
    return mecanicas;
  }),

  instituciones: task(function*() {
    let instituciones = yield this.store.findAll("institucion");
    return instituciones;
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
    
    // Only attempt geocoding if coordinates are missing AND
    // we have address components to geocode with
    if ((!lat || !lon) && (modelo.get("localidad") && modelo.get("provincia"))) {
      try {
        yield this.get_lat_lon(modelo);
      } catch(error) {
        // Don't block form submission on geocoding failure
      }
    }
  
    yield modelo.save();
    this.router.transitionTo("app.casos.detalle", modelo.get("id"));
  }),
  obtenerCoordenadas: task(function*(modelo) {
    try {
      let result = yield this.get_lat_lon(modelo);
      if (result.lat && result.lon) {
        this.set('mensajeCoordenadasExito', 'Coordenadas obtenidas con éxito');
        yield timeout(3000);
        this.set('mensajeCoordenadasExito', null);
      } else {
        this.set('mensajeCoordenadasError', 'No se encontraron coordenadas para esta dirección. Por favor ingrese manualmente.');
        yield timeout(3000);
        this.set('mensajeCoordenadasError', null);
      }
    } catch(error) {
      this.set('mensajeCoordenadasError', 'Error al obtener coordenadas. Por favor ingrese manualmente.');
      yield timeout(3000);
      this.set('mensajeCoordenadasError', null);
    }
  })   ,

  actions: { 
  }
});
