import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    let candidate = this.modelo.candidate;
    if (candidate === this.id) {
      this.mostrarModal(this.id);
    }
    let modo = this.get("modo");
    if (modo === "lista") {
      this.set("lista", true);
    }
  },
  mostrarModal(target) {
    $("#" + target).show();
    $(".isotope-filter").hide();
  },
  actions: {
    
  }
});
