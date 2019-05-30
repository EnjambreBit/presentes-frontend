import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  actions: {
    cuandoCambia(opcion) {
      this.set("valor", opcion);
      this.get("cuandoSelecciona")(opcion);
    }
  }
});
