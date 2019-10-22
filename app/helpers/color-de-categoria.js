import { helper } from "@ember/component/helper";

export function colorDeCategoria(params /*, hash*/) {
  let categoria = params[0];
  let color;
  // categorías de mapa
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

  // categorias de candidates 2019
  if (categoria === "lesbianas") {
    color = "purple b--purple";
  }
  if (categoria === "trans") {
    color = "green b--green";
  }
  if (categoria === "gays") {
    color = "rojo b--rojo";
  }
  if (categoria === "bisexual") {
    color = "orange b--orange";
  }

  return color;
}

export default helper(colorDeCategoria);
