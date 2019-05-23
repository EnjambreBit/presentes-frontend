import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {},

  actions: {
    accionDePrueba(caso) {
      this.set("caso-numero", caso.id);
    }
  }
});
