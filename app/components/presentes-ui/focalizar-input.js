import Component from "@ember/component";
import { later } from "@ember/runloop";
import $ from "jquery";

export default Component.extend({
  didInsertElement() {
    later(this, this.hacerFoco, 500);
  },

  hacerFoco() {
    $("input")
      .first()
      .focus();
  }
});
