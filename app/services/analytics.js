import Service from "@ember/service";
import { later } from '@ember/runloop';

export default Service.extend({
  activado: false,

  inicializar() {
    this.set("activado", true);
    ga("create", "UA-147984333-1", "auto");
  },

  notifificarTransicion(ruta) {
    if (this.get("activado")) {
      later(() => {
        let params = {
          page: ruta,
          title: ruta
        };
        ga("send", "pageview", params);
      });
    }
  }
});
