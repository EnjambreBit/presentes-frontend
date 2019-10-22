import Route from "@ember/routing/route";
import $ from "jquery";

export default Route.extend({
  actions: {
    mostrarModal(target) {
      $("#" + target).show();
    },
    cerrarModal(id) {
      $("#" + id).hide();
    }
  }
});
