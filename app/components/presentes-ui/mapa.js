import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {},

  actions: {
    accionDePrueba(caso) {
      console.log(caso);
      alert("Mostrando caso " + caso.id);
    }
  }
});
