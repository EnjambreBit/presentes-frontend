import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    let modelo = this.get("modelo");
    let categoria = modelo.get("categoria.nombre");
    let color;
    if (categoria === "Asesinatos a personas LGBT+") {
      color = "light-blue";
    }
    if (categoria === "Ataques a personas") {
      color = "red";
    }
    if (categoria === "Ataques a lugares") {
      color = "pink";
    }
    if (categoria === "Muerte por travesticidio social") {
      color = "yellow";
    }

    let icon = "/markers/" + color + "-marker.png";
    let categoryIcon = L.icon({
      iconUrl: icon,
      iconSize: [30, 30],
      iconAnchor: [25, 23],
      popupAnchor: [-12, 9]
    });
    this.set("categoryIcon", categoryIcon);
  }
});
