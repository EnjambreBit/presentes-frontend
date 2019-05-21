import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  deshabilitado: false,
  ejecutando: computed("tarea", "tarea.last.isRunning", function() {
    return this.get("tarea.last.isRunning");
  }),
  accion() {}
});
