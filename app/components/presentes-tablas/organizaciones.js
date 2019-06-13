import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { task, timeout } from "ember-concurrency";

export default Component.extend({
  tagName: "",
  store: service(),
  columnas: null,
  filtro: null,

  didInsertElement() {
    this._super(...arguments);
    this.set("columnas", [
      {
        titulo: "Nombre",
        atributo: "nombre",
        componente: "presentes-ui/organizacion-link",
        ordenamiento: "nombre"
      },
      {
        titulo: "Dirección",
        atributo: "direccion"
      },
      {
        titulo: "Localidad",
        atributo: "localidad",
        ordenamiento: "localidad"
      },
      {
        titulo: "Provincia",
        atributo: "provincia.nombre",
        ordenamiento: "provincia__nombre"
      },
      {
        titulo: "Teléfono",
        atributo: "telefono"
      },
      {
        titulo: "Email",
        atributo: "email"
      }
    ]);
  },
  crearFiltros: task(function*() {
    yield timeout(500);
    let provincias = yield this.store.findAll("Provincia");

    provincias = provincias.map(e => e.nombre);

    return {
      keys: [
        {
          key: "nombre",
          title: "Nombre"
        },
        {
          key: "localidad",
          title: "Localidad"
        },
        {
          key: "provincia",
          title: "Provincia",
          valores: provincias
        }
      ]
    };
  }),

  tarea: task(function*(filtros) {
    let datos = yield this.store.query("organizacion", filtros);
    return { filas: datos, meta: datos.meta };
  }).restartable()
});
