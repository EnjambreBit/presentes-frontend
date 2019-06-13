import { helper } from "@ember/component/helper";

export function colorDeCategoria(params /*, hash*/) {
  let categoria = params[0];
  let color;
  if (categoria === "Asesinatos a personas LGBT+") {
    color = "azul b--azul";
  }
  if (categoria === "Ataques a personas") {
    color = "rojo b--rojo";
  }
  if (categoria === "Ataques a lugares") {
    color = "rosa b--rosa";
  }
  if (categoria === "Muerte por travesticidio social") {
    color = "naranja b--naranja";
  }

  return color;
}

export default helper(colorDeCategoria);
