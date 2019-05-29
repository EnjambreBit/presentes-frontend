import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  lugarDeNacimiento: DS.attr("string"),
  edad: DS.attr("string"),
  localidad: DS.attr("string"),
  provincia: DS.belongsTo("provincia"),
  latitud: DS.attr("string"),
  longitud: DS.attr("string"),
  categoria: DS.belongsTo("categoria"),
  etiquetas: DS.hasMany("etiqueta"),
  fechaDeCreacion: DS.attr("string"),
  fechaDelHecho: DS.attr("string"),
  estadoDePublicacion: DS.belongsTo("estadoDeCaso"),
  causaDeLaMuerte: DS.attr("string"),
  esMigrante: DS.attr("string"),

  nombreCompleto: computed("nombre", "apellido", function() {
    return `${this.nombre} ${this.apellido}`;
  }),
  lugarDelHechoCompleto: computed("localidad", "provincia", function() {
    let lugar = this.localidad + ", " + this.get("provincia.nombre");
    return lugar;
  })
});
