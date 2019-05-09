import Service from "@ember/service";
import { inject as service } from "@ember/service";

export default Service.extend({
  api: service(),
  store: service(),
  perfil: null,

  iniciar() {
    return this.api.fetch("perfiles/mi-perfil").then(respuesta => {
      let datos = respuesta.data;

      this.set("nombre", datos.nombre);
      this.set("apellido", datos.apellido);
      this.set("email", datos.email);
      this.set("usuario", datos.usuario);
      this.set("idPerfil", datos.id);
      this.set("versionDelServidor", datos.version_del_servidor);

      return this.store.findRecord("perfil", datos.id).then(perfil => {
        this.set("perfil", perfil);
      });
    });
  }
});
