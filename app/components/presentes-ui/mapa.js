import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {},

  actions: {
    accionDePrueba() {
      let test = "click";
      console.log(test);
    }
  }
});
