import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  lugarDeNacimiento: DS.attr("string"),
  edad: DS.attr("string"),
  fechaDelHecho: DS.attr("string"),
  localidad: DS.attr("string"),
  provincia: DS.belongsTo("provincia"),
  latitud: DS.attr("string"),
  longitud: DS.attr("string"),
  categoria: DS.belongsTo("categoria"),
  etiquetas: DS.hasMany("etiqueta"),
  causaDeLaMuerte: DS.attr("string"),
  teniaObraSocial: DS.attr("string"),
  obraSocial: DS.attr("string"),
  tieneAccesoAPrestacionesDeSalud: DS.attr("string"),
  prestacionesDeSalud: DS.attr("string"),
  ocupacion: DS.attr("string"),
  estudiosCursados: DS.attr("string"),
  estabaEnSituacionDeCalle: DS.attr("string"),
  dondeVivia: DS.attr("string"),
  teniaPrisionPreventiva: DS.attr("string"),
  tituloDeLaCausaEnLaJusticia: DS.attr("string"),
  nombreDelPenal: DS.attr("string"),
  localidadDelPenal: DS.attr("string"),
  provinciaDelPenal: DS.belongsTo("provincia"),
  esMigrante: DS.attr("string"),
  paisDeOrigen: DS.attr("string"),
  anioDeLlegada: DS.attr("string"),
  hayDenuncia: DS.attr("string"),
  fechaDeDenuncia: DS.attr("string"),
  anteQuienSeHizoLaDenuncia: DS.attr("string"),
  porQueNoDenuncio: DS.attr("string"),
  laDenunciaReconoceGenero: DS.attr("string"),
  hayCausaJudicial: DS.attr("string"),
  cjTituloDeLaCausa: DS.attr("string"),
  cjNumeroDeLaCausa: DS.attr("string"),
  cjAnioDeInicio: DS.attr("string"),
  cjDondeSeTramita: DS.attr("string"),
  cjInstancia: DS.attr("string"),
  cjRespetaronNombreDeIg: DS.attr("string"),
  cjOrganismosPublicos: DS.attr("string"),
  cjOrganizaciones: DS.hasMany("etiqueta"),
  cjCuentaConDefensa: DS.attr("string"),
  cjHayInformeForense: DS.attr("string"),
  huboViolenciaInstitucional: DS.attr("string"),
  violenciaInstitucionNombre: DS.attr("string"),
  violenciaInstitucionLocalidad: DS.attr("string"),
  violenciaInstitucionProvincia: DS.belongsTo("provincia"),
  observaciones: DS.attr("string"),
  nombreDeQuienBrindoInformacion: DS.attr("string"),
  telefonoDeQuienBrindoInformacion: DS.attr("string"),

  estadoDePublicacion: DS.belongsTo("estadoDeCaso"),
  fechaDeCreacion: DS.attr("string"),

  nombreCompleto: computed("nombre", "apellido", function() {
    return `${this.nombre} ${this.apellido}`;
  }),
  lugarDelHechoCompleto: computed("localidad", "provincia", function() {
    let lugar = this.localidad + ", " + this.get("provincia.nombre");
    return lugar;
  })
});
