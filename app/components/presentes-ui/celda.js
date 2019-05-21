import Component from "@ember/component";

export default Component.extend({
  tagName: "td",
  classNames: ["truncate", "pa2", "v-top"],

  debeMostrarPopup: false,

  mouseEnter() {
    let elementoConElipsis = this.$()[0];

    function seActivoElipsis(e) {
      return e.offsetWidth < e.scrollWidth;
    }

    if (seActivoElipsis(elementoConElipsis)) {
      this.set("debeMostrarPopup", true);
    }
  },

  mouseLeave() {
    this.set("debeMostrarPopup", false);
  }
});
