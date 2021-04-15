import { helper } from "@ember/component/helper";

export function colorDeIdentidad(params /*, hash*/) {
  let categoria = params[0];
  let color;

  // categorias de candidates 2019
  if (categoria === "lesbiana") {
    color = "purple b--purple";
  }
  if ((categoria === "trans") || (categoria === "mujer-trans")) {
    color = "green b--green";
  }
  if (categoria === "gays") {
    color = "rojo b--rojo";
  }
  if ((categoria === "bisexual") || (categoria === "pansexual")) {
    color = "orange b--orange";
  }
  if (categoria === "no-binarie") {
    color = "light-red b--light-red";
  }

  return color;
}

export default helper(colorDeIdentidad);
