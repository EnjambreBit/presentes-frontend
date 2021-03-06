import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service(),
  tagName: "",
  activeClasses: computed("mobile", function() {
    if (this.mobile) {
      return "bg-white gray b bb b-black";
    } else {
      return "bg-white gray b bb b-black";
    }
  }),
  clases: computed("mobile", function() {
    if (this.mobile) {
      return "link pv2 ph3 m0 db w-100 dim gray";
    } else {
      return "link h-100 pa2 pt3 m0 dib dim gray";
    }
  })
});
