import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    let modo = this.get("modo");
    if (modo === "lista") {
      this.set("lista", true);
    }
  }
});
