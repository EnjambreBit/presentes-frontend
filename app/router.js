import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("app", function() {
    this.route("app");
    this.route("mi-perfil");
    this.route("usuarios", function() {});
    this.route("mapa");

    this.route("casos", function() {
      this.route("crear");
      this.route("detalle", { path: "detalle/:caso_id" });
      this.route("editar", { path: "editar/:caso_id" });
    });
  });
  this.route("login");
  this.route("logout");
  this.route("mapa");
});

export default Router;
