import Component from "@ember/component";
import $ from "jquery";

export default Component.extend({
  tagName: "",

  didInsertElement() {
    var contenedor = $(".grilla");
    var filters = {};
    contenedor.imagesLoaded(function() {
      contenedor.isotope({
        percentPosition: true,
        transitionDuration: "0.7s",
        itemSelector: ".mini-ficha",
        layoutMode: "fitRows"
      });
    });

    $(".filter.identidades li a, .filter.partido-politico li a").click(
      function() {
        var classGroup = this.parentElement.parentElement.classList[1];
        $(".filter." + classGroup + " li a").removeClass("active");
        $(this).toggleClass("active");

        var $this = $(this);

        var buttonGroup = $this.parents(".button-group");
        var filterGroup = buttonGroup.attr("data-filter-group");

        filters[filterGroup] = $this.attr("data-filter");

        var filterValue = concatValues(filters);
        contenedor.isotope({
          filter: filterValue
        });

        return true;
      }
    );
    function concatValues(obj) {
      var value = "";
      for (var prop in obj) {
        value += obj[prop];
      }
      return value;
    }
  }
});