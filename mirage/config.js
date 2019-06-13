export default function() {
  this.urlPrefix = "";
  this.namespace = "api";

  // this.get("perfil-images", { data: [] });
  this.get("perfiles", { data: [] });
  this.get("perfiles/obtener-nombres", { data: [] });
  this.get("casos", { data: [] });
  this.get("organizaciones", { data: [] });
  this.get("provincias", { data: [] });
}
