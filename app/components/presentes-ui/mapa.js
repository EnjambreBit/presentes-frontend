import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    var categoryIcon = L.icon({
      iconUrl: "/markers/red-marker.png",
      iconSize: [41, 41]
      // iconAnchor: [22, 94],
      // popupAnchor: [-3, -76]
      // shadowUrl: "my-icon-shadow.png",
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });
    this.set("categoryIcon", categoryIcon);
  },

  actions: {
    accionDePrueba(caso) {
      this.set("caso-numero", caso.id);
    }
  }
});
