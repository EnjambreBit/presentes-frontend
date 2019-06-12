import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { Promise } from "rsvp";

export default Component.extend({
  store: service(),
  api: service(),
  subiendo: false,
  disabled: false,
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
      if (!this.get("disabled")) {
        this.$("input").click();
      }
    },

    upload(evento) {
      if (evento.target.files.length > 0) {
        let archivo = evento.target.files[0];
        this.set("subiendo", true);
        this.obtenerContenido(archivo).then(data => {
          data.caso_id = this.get("caso.id");
          this.api.post("casos/cambiar-imagen", data).then(result => {
            this.set("caso.imagenUrl", result.data.imagen_url);
            this.set("subiendo", false);
          });
        });
      }
    }
  }
});
