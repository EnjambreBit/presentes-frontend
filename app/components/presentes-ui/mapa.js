import Component from "@ember/component";
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
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
    },
    
    // Add this new action
    cambiarAnio(anio) {
      this.router.transitionTo(this.ruta, { queryParams: { anio } });
    }
  }
});
