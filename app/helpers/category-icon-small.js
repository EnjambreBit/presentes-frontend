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

  return iconoUrl;
}

export default helper(categoryIcon);
