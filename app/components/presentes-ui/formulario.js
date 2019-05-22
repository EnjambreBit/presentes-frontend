import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    submit() {
      this.model.validate().then(() => {
        if (this.model.isValid) {
          this.get("tarea").perform(this.model);
        }
      });
    }
  }
});
