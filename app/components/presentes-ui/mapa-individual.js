import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    let modelo = this.get("modelo");
    let categoria = modelo.get("categoria.nombre");
    let iconoUrl;

    if (categoria === "Asesinatos") {
      iconoUrl = "/markers/light-blue-marker.png";
    }
    if (categoria === "Ataques a personas") {
      iconoUrl = "/markers/red-marker.png";
    }
    if (categoria === "Ataques a lugares") {
      iconoUrl = "/markers/pink-marker.png";
    }
    if (categoria === "Muerte por travesticidio social") {
      iconoUrl = "/markers/yellow-marker.png";
    }

    let categoryIcon = L.icon({
      iconUrl: iconoUrl,
      iconSize: [30, 30],
      iconAnchor: [25, 23],
      popupAnchor: [-12, 9]
    });

    this.set("categoryIcon", categoryIcon);
  }
});
