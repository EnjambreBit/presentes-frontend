import Route from "@ember/routing/route";

export default Route.extend({
  afterModel() {
    if (window.location.href.includes("candidates2019.agenciapresentes.org")) {
      return this.transitionTo("candidates2019");
    } else if (window.location.href.includes("candidates-chile2021.agenciapresentes.org")) {
      return this.transitionTo("candidates-chile-2021");
    } else if (window.location.href.includes("candidates2023.agenciapresentes.org")) {
      return this.transitionTo("candidates2023");
    } else {
      return this.transitionTo("publico.index");
    }
  }
});
