import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  perfil: service(),
  tagName: "",

  tienePermiso: computed("perfil.permisos", "permiso", function() {
    if (!this.perfil.permisos) {
      return false;
    }
    let tieneElPermiso = this.perfil.permisos[this.permiso];

    if (tieneElPermiso === undefined) {
      throw Error(
        `El nombre de permiso ${
          this.permiso
        } es inválido. Si fuera un nombre de permiso válido el backend debería indicar true o false dependiendo de si tiene o no el permiso.`
      );
    }

    return tieneElPermiso;
  })
});
