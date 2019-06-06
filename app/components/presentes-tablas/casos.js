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
        titulo: "Víctima",
        atributo: "nombreCompleto",
        componente: "presentes-ui/caso-link",
        ordenamiento: "apellido"
      },
      {
        titulo: "Estado de publicación",
        atributo: "estadoDePublicacion.nombre",
        ordenamiento: "estadoDePublicacion__nombre"
      },
      {
        titulo: "Categoría",
        atributo: "categoria.nombre",
        ordenamiento: "categoria__nombre"
      },
      {
        titulo: "Fecha del hecho",
        atributo: "fechaDelHecho",
        ordenamiento: "fecha_del_hecho",
        fecha: true
      },
      {
        titulo: "Lugar del hecho",
        atributo: "lugarDelHechoCompleto"
      }
    ]);
  },
  crearFiltros: task(function*() {
    yield timeout(500);
    let provincias = yield this.store.findAll("Provincia");
    let estados = yield this.store.findAll("EstadoDeCaso");
    let categorias = yield this.store.findAll("Categoria");

    provincias = provincias.map(e => e.nombre);
    estados = estados.map(e => e.nombre);
    categorias = categorias.map(e => e.nombre);

    return {
      keys: [
        {
          key: "nombre",
          title: "Nombre"
        },
        {
          key: "estadoDePublicacion",
          title: "Estado de Publicación",
          valores: estados
        },
        {
          key: "categoria",
          title: "Categoría",
          valores: categorias
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
    let datos = yield this.store.query("caso", filtros);
    return { filas: datos, meta: datos.meta };
  }).restartable()
});
