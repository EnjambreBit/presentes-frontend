import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { Promise } from "rsvp";

export default Component.extend({
  store: service(),
  api: service(),
  subiendo: false,
  perfil: null,

  obtenerContenido(file) {
    return new Promise(success => {
      let reader = new FileReader();
      reader.onloadend = () => {
        success({
          nombre: file.name,
          contenido: reader.result
        });
      };
      reader.readAsDataURL(file);
    });
  },

  actions: {
    abrirInput() {
      this.$("input").click();
    },

    upload(evento) {
      if (evento.target.files.length > 0) {
        let archivo = evento.target.files[0];
        this.set("subiendo", true);
        this.obtenerContenido(archivo).then(data => {
          this.set("subiendo", false);
          this.cuandoCambia(data);
          this.set("valor", data);
        });
      }
    }
  }
});
