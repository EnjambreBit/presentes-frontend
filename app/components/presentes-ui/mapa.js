import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  actions: {
    accionDePrueba(caso) {
      this.set("caso-numero", caso.id);
    }
  }
});
