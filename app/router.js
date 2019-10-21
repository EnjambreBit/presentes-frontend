import EmberRouter from "@ember/routing/router";
import config from "./config/environment";
import { inject as service } from "@ember/service";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

EmberRouter.reopen({
  analytics: service("analytics"),
  rutaAnterior: "",

  didTransition() {
    this._super(...arguments);

    let rutaActual = this.get("currentRouteName");
    let haCambiadoDeRuta = this.get("rutaAnterior") !== rutaActual;

    this.get("analytics").notifificarTransicion(this.get("url"));

    if (haCambiadoDeRuta) {
      window.scrollTop = 0;
    }

    this.set("rutaAnterior", rutaActual);
  }
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
    this.route("organizaciones", function() {
      this.route("crear");
      this.route("detalle", { path: "detalle/:organizacion_id" });
      this.route("editar", { path: "editar/:organizacion_id" });
    });
  });
  this.route("login");
  this.route("logout");
  this.route("mapa");

  this.route("publico", function() {
    this.route("casos", function() {
      this.route("detalle", { path: "detalle/:caso_id" });
    });
    this.route("organizaciones", function() {
      this.route("detalle", { path: "detalle/:organizacion_id" });
    });
    this.route("mapa");
  });
  this.route('mexico', function() {});
  this.route('candidates2019', function() {});
});

export default Router;
