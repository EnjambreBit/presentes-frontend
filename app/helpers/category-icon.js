import { helper } from "@ember/component/helper";

export function categoryIcon(params /*, hash*/) {
  let categoria = params[0];
  let iconoUrl;
  if (categoria === "Asesinatos a personas LGBT+") {
    iconoUrl = "/markers/black-marker.png";
  }
  if (categoria === "Ataques a personas") {
    iconoUrl = "/markers/red-marker.png";
  }
  if (categoria === "Ataques a lugares") {
    iconoUrl = "/markers/light-blue-marker.png";
  }
  if (categoria === "Muerte por travesticidio social") {
    iconoUrl = "/markers/yellow-marker.png";
  }

  var icono = L.icon({
    iconUrl: iconoUrl,
    iconSize: [41, 41]
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76]
    // shadowUrl: "my-icon-shadow.png",
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
  });

  return icono;
}

export default helper(categoryIcon);
