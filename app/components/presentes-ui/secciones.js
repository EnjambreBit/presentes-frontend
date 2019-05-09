import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  clases: computed("mobile", function() {
    if (this.mobile) {
      return "link pv2 ph3 m0 db w5 dim gray";
    } else {
      return "link h-100 pa2 pt3 m0 dib dim gray";
    }
  })
});
