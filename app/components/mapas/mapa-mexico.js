import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    Ember.$("path, circle").hover(function(e) {
      let provincia = "#LIST-" + this.id;
      Ember.$("#info-box").css("display", "block");
      Ember.$("#info-box").html(Ember.$(provincia).data("info"));
      // Ember.$(provincia).css("color", "#d4145a");
      Ember.$(provincia).toggleClass("red");
    });
    Ember.$("path, circle").mouseout(function(e) {
      Ember.$("#info-box").css("display", "none");
      let provincia = "#LIST-" + this.id;
      // Ember.$(provincia).css("color", "rgba(0, 0, 0, 1)");
      Ember.$(provincia).removeClass("red");
    });
    Ember.$(document).mousemove(function(e) {
      $("#info-box").offset({
        left: e.pageX,
        top: e.pageY
      });
    });
    Ember.$("ul li a").hover(function(e) {
      let itemId = this.id;
      // Ember.$(this).css("color", "#d4145a");
      Ember.$(this).toggleClass("red");
      let id = itemId.replace("LIST-", "");
      Ember.$("path#" + id).toggleClass("provincia-hovered");
      let path = Ember.$("path#" + id);
      let position = path.offset();
      Ember.$("#info-box").offset({ top: position.top, left: position.left });
      Ember.$("#info-box").show();
      Ember.$("#info-box").html(Ember.$(this).data("info"));
    });
    Ember.$("ul li a").mouseout(function(e) {
      Ember.$("#info-box").css("display", "none");
      // Ember.$(this).css("color", "rgba(0, 0, 0, 1)");
      Ember.$(this).removeClass("red");
    });
  }
});
