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
    this.route('usuarios', function() {});
  });
  this.route("login");
  this.route("logout");
});

export default Router;
