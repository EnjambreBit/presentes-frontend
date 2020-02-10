import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    let esPublico = false;
    let ruta = "app.mapa";
    let mapaPublico = this.get("mapaPublico");
    if (mapaPublico === true) {
      ruta = "publico.mapa";
      esPublico = true;
    }
    return this.set("ruta", ruta);
  },
  actions: {
    accionDePrueba(caso) {
      this.set("caso-numero", caso.id);
    }
  }
});
