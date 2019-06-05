import { helper } from "@ember/component/helper";

export function colorDeCategoria(params /*, hash*/) {
  let categoria = params[0];
  let color;
  if (categoria === "Asesinatos a personas LGBT+") {
    color = "black b--black";
  }
  if (categoria === "Ataques a personas") {
    color = "red b--red";
  }
  if (categoria === "Ataques a lugares") {
    color = "light-blue b--light-blue";
  }
  if (categoria === "Muerte por travesticidio social") {
    color = "yellow b--yellow";
  }

  return color;
}

export default helper(colorDeCategoria);
