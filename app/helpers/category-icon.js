import { helper } from "@ember/component/helper";

export function categoryIcon(params /*, hash*/) {
  let categoria = params[0];
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

  var icono = L.icon({
    iconUrl: iconoUrl,
    iconSize: [30, 30],
    iconAnchor: [25, 23],
    popupAnchor: [-12, 9]
  });

  return icono;
}

export default helper(categoryIcon);
