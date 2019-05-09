import Service from "@ember/service";

export default Service.extend({
  mensajes: null,

  error(mensaje) {
    this._agregar({ tipo: "error", mensaje: mensaje });
  },

  info(mensaje) {
    this._agregar({ tipo: "info", mensaje: mensaje });
  },

  _agregar(mensaje) {
    if (!this.mensajes) {
      this.set("mensajes", []);
    }

    this.mensajes.pushObject(mensaje);
  },

  limpiar() {
    this.set("mensajes", []);
  },

  cerrar(mensaje) {
    this.mensajes.removeObject(mensaje);
  }
});
