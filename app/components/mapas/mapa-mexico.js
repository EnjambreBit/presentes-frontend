import Component from "@ember/component";
import $ from "jquery";

export default Component.extend({
  tagName: "",
  didInsertElement() {
    $("path, circle").hover(function() {
      let provincia = "#LIST-" + this.id;
      $("#info-box").css("display", "block");
      $("#info-box").html($(provincia).data("info"));
      // $(provincia).css("color", "#d4145a");
      $(provincia).toggleClass("red");
    });
    $("path, circle").mouseout(function() {
      $("#info-box").css("display", "none");
      let provincia = "#LIST-" + this.id;
      // $(provincia).css("color", "rgba(0, 0, 0, 1)");
      $(provincia).removeClass("red");
    });
    $(document).mousemove(function(e) {
      $("#info-box").offset({
        left: e.pageX,
        top: e.pageY
      });
    });
    $("ul li a").hover(function() {
      let itemId = this.id;
      // $(this).css("color", "#d4145a");
      $(this).toggleClass("red");
      let id = itemId.replace("LIST-", "");
      $("path#" + id).toggleClass("provincia-hovered");
      let path = $("path#" + id);
      let position = path.offset();
      $("#info-box").offset({ top: position.top, left: position.left });
      $("#info-box").show();
      $("#info-box").html($(this).data("info"));
    });
    $("ul li a").mouseout(function() {
      $("#info-box").css("display", "none");
      // $(this).css("color", "rgba(0, 0, 0, 1)");
      $(this).removeClass("red");
    });
  }
});
