import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  email: DS.attr("string"),
  usuario: DS.attr("string"),

  nombreCompleto: computed("nombre", "apellido", function() {
    return `${this.nombre} ${this.apellido}`;
  })
});
