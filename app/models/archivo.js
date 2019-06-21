import DS from "ember-data";

export default DS.Model.extend({
  caso: DS.belongsTo("caso"),
  archivo: DS.attr("string")
});
