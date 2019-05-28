import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  lugarDeNacimiento: DS.attr("string"),
  fechaDeNacimiento: DS.attr("string"),
  lugarDelHecho: DS.attr("string"),
  localidad: DS.attr("string"),
  provincia: DS.belongsTo("provincia"),
  latitud: DS.attr("string"),
  longitud: DS.attr("string"),
  categoria: DS.belongsTo("categoria"),
  etiquetas: DS.hasMany("etiqueta"),
  fechaDeCreacion: DS.attr("string"),
  fechaDelHecho: DS.attr("string"),
  estadoDePublicacion: DS.belongsTo("estadoDeCaso"),

  nombreCompleto: computed("nombre", "apellido", function() {
    return `${this.nombre} ${this.apellido}`;
  }),
  lugarDelHechoCompleto: computed(
    "lugarDelHecho",
    "localidad",
    "provincia",
    function() {
      let lugar =
        this.lugarDelHecho +
        " - " +
        this.localidad +
        ", " +
        this.get("provincia.nombre");
      return lugar;
    }
  )
});
