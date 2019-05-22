import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  actions: {
    alCambiar(valorNuevo) {
      this.cuandoCambia(moment(valorNuevo).format("YYYY-MM-DD"));
    }
  }
});
