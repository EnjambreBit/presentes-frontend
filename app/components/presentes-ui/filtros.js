import Component from "@ember/component";
import { task } from "ember-concurrency";
import { inject as service } from "@ember/service";
import { later } from "@ember/runloop";

export default Component.extend({
  filtrosSeleccionados: null,
  store: service(),
  perfil: service(),
  filtroActual: null,
  mostrarMenuDeFiltros: false,
  ordenamiento: null,
  controlador: null,

  init() {
    this._super(...arguments);
    this.set("filtroActual", []);
  },

  didInsertElement() {
    this.tareaFiltros.perform();
  },

  actions: {
    getKeyValuesFunc(facet) {
      let keys = this.tareaFiltros.last.value["keys"];

      let facets = keys.findBy("key", facet.key);

      if (facets) {
        let valores = facets.valores;

        if (valores) {
          return valores;
        }
      }

      return [];
    },
    onChange(filtrosSeleccionados) {
      this.alCambiar(filtrosSeleccionados, this.ordenamiento);
    },
    buscar() {
      this.alCambiar(this.filtrosSeleccionados, this.ordenamiento);
    },
    aplicarFiltro(filtro) {
      let filtroDeserializado = JSON.parse(filtro.contenido);
      this.alCambiar(filtroDeserializado, filtro.orden);

      this.set("filtroActual", JSON.parse(filtro.contenido));

      this.controlador.set("defaultFacets", this.filtroActual);
      this.controlador.resetDefaults();

      this.send("cerrarMenuDeFiltros");
    },
    cerrarMenuDeFiltros() {
      this.set("mostrarMenuDeFiltros", false);
      this.set("editarFiltros", false);
    },
    desplegarElMenuDeFiltros() {
      this.set("mostrarMenuDeFiltros", true);
    }
  }
});
