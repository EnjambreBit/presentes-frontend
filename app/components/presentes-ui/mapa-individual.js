import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    let modelo = this.get("modelo");
    let categoria = modelo.get("categoria.nombre");
    let color;
    if (categoria === "Asesinatos a personas LGBT+") {
      color = "black";
    }
    if (categoria === "Ataques a personas") {
      color = "red";
    }
    if (categoria === "Ataques a lugares") {
      color = "light-blue";
    }
    if (categoria === "Muerte por travesticidio social") {
      color = "yellow";
    }

    let icon = "/markers/" + color + "-marker.png";
    let categoryIcon = L.icon({
      iconUrl: icon,
      iconSize: [41, 41]
      // iconAnchor: [22, 94],
      // popupAnchor: [-3, -76]
      // shadowUrl: "my-icon-shadow.png",
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });
    this.set("categoryIcon", categoryIcon);
  }
});
