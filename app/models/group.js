import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  nombre: computed("name", function() {
    return this.name;
  }),
  name: DS.attr("string"),
  perfiles: DS.hasMany("perfil")
});
