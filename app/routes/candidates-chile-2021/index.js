import Route from "@ember/routing/route";
import $ from "jquery";

export default Route.extend({
  actions: {
    mostrarModal(target) {
      $("#" + target).show();
      $(".isotope-filter").hide();
    },
    cerrarModal(id) {
      $("#" + id).hide();
      $(".isotope-filter").show();
    }
  }
});
