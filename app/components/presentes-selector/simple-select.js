import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  actions: {
    cuandoCambia(id) {
      this.tarea.last.value.forEach(opcion => {
        if (opcion.id == id) {
          this.set("valor", opcion);
          this.get("cuandoSelecciona")(opcion);
        }
      });
    }
  }
});
