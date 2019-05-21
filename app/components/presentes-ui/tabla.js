import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  columnas: null,
  query: null,
  pagina: 1,
  router: service(),
  URLInicial: null,
  ordenamiento: "",
  filtrosSeleccionados: null,

  init() {
    this._super(...arguments);
  },

  routeName: computed("router.currentURL", function() {
    if (this.URLInicial !== this.get("router.currentURL")) {
      // Si existe una tarea de filtro se delega el primer query de datos
      // al filtro, porque se necesita saber si hay un filtro marcado como
      // favorito antes.
      if (!this.tareaFiltros) {
        this.send("recargar");
      }
    }
  }),

  cantidad_de_columnas: computed("columnas.length", function() {
    if (this.columnas) {
      return this.columnas.length;
    } else {
      return 0;
    }
  }),

  actions: {
    recargar() {
      if (this.tarea) {
        let parametros = {};

        if (this.filtrosSeleccionados) {
          this.filtrosSeleccionados.map(filtro => {
            parametros[filtro.key] = filtro.value;
          });
        }

        parametros.query = this.query;
        parametros["page[number]"] = this.pagina;
        parametros["page[size]"] = 10;
        parametros.ordenamiento = this.ordenamiento;

        this.set("URLInicial", this.get("router.currentURL"));
        this.tarea.perform(parametros);
      }
    },
    definirPagina(pagina) {
      this.set("pagina", pagina);
      this.send("recargar");
    },
    cuandoCambiaOrdenamiento(ordenamiento) {
      this.set("ordenamiento", ordenamiento);
      this.send("recargar");
    },
    alCambiarFiltrosYOrdenamiento(filtros, ordenamiento) {
      this.set("pagina", 1);
      this.set("ordenamiento", ordenamiento);
      this.set("filtrosSeleccionados", filtros);
      this.send("recargar");
    }
  }
});
