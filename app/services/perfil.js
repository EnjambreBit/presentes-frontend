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
      this.set("permisos", datos.permisos);
      this.set("grupo", datos.grupo);
      this.set("imagenUrl", datos.imagen_url);
      this.set("idPerfil", datos.id);
      this.set("versionDelServidor", datos.version_del_servidor);
      return this.store.findRecord("perfil", datos.id).then(perfil => {
        this.set("perfil", perfil);
      });
    });
  },

  generarListaDePermisos(permisosComoDiccionario) {
    return Object.keys(permisosComoDiccionario).map(x => {
      return {
        tienePermiso: permisosComoDiccionario[x],
        modulo: x.split(".")[0],
        nombre: x.split(".")[1],
        codename: x
      };
    });
  },

  tienePermiso(permiso) {
    let tieneElPermiso = this.permisos[permiso];

    if (tieneElPermiso === undefined) {
      throw Error(
        `El nombre de permiso ${permiso} es inválido. Si fuera un nombre de permiso válido el backend debería indicar true o false dependiendo de si tiene o no el permiso.`
      );
    }

    return tieneElPermiso;
  }
});
