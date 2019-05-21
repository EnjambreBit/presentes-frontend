import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",

  claseExpandir: computed("columna.expandir", function() {
    if (this.columna.expandir) {
      return "w-100";
    } else {
      if (this.clase) {
        return "";
      } else {
        return "w-50";
      }
    }
  }),

  actions: {
    cambiarOrden() {
      let nuevoOrdenamiento = "";
      let ordenamiento_de_columna = this.get("columna.ordenamiento");

      if (!this.ordenamiento) {
        nuevoOrdenamiento = ordenamiento_de_columna;
      } else {
        if (this.ordenamiento === ordenamiento_de_columna) {
          nuevoOrdenamiento = `-${ordenamiento_de_columna}`;
        } else {
          if (this.ordenamiento === `-${ordenamiento_de_columna}`) {
            nuevoOrdenamiento = "";
          } else {
            nuevoOrdenamiento = ordenamiento_de_columna;
          }
        }
      }

      this.cuandoCambiaOrdenamiento(nuevoOrdenamiento);
    }
  }
});
