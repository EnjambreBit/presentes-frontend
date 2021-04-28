import { helper } from "@ember/component/helper";

export function colorDeIdentidad(params /*, hash*/) {
  let categoria = params[0];
  let color;

  // categorias de candidates 2019
  if (categoria === "lesbiana") {
    color = "purple b--purple";
  }
  if ((categoria === "trans") || (categoria === "mujer-trans") || (categoria === "trans no-binarie")) {
    color = "green b--green";
  }
  if (categoria === "gay") {
    color = "rojo b--rojo";
  }
  if ((categoria === "bisexual") || (categoria === "pansexual")) {
    color = "orange b--orange";
  }
  if ((categoria === "no-binarie") || (categoria === "no-binarie bisexual")) {
    color = "light-red b--light-red";
  }

  return color;
}

export default helper(colorDeIdentidad);
