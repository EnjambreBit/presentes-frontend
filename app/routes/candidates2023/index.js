import Route from "@ember/routing/route";
import $ from "jquery";

export default Route.extend({
  queryParams: {
    candidate: {}
  },
  model(params) {
    return params;
  },
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
