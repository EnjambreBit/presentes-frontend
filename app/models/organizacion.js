import DS from "ember-data";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  direccion: DS.attr("string"),
  localidad: DS.attr("string"),
  telefono: DS.attr("string"),
  email: DS.attr("string"),
  descripcion: DS.attr("string"),
  provincia: DS.belongsTo("provincia")
});
