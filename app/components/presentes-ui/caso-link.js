import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "",
  session: service(),
  cargando: computed("fila", function() {
    return this.get("fila") === undefined;
  })
});
