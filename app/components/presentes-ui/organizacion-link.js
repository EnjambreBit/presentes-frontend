import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  cargando: computed("fila", function() {
    return this.get("fila") === undefined;
  })
});
