import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  imagenUrl: DS.attr("string"),
  imagen: DS.attr(), // Campo sin tipar de uso temporal para el componente presentes-ui/agregar-imagen-caso
  lugarDeNacimiento: DS.attr("string"),
  edad: DS.attr("string"),
  fechaDelHecho: DS.attr("string"),
  localidad: DS.attr("string"),
  provincia: DS.belongsTo("provincia"),
  latitud: DS.attr("string"),
  longitud: DS.attr("string"),
  categoria: DS.belongsTo("categoria"),
  etiquetas: DS.hasMany("etiqueta"),
  descripcionDelHecho: DS.attr("string"),
  dondeOcurrioElHecho: DS.belongsTo("lugar-del-hecho"),
  espacioPrivado: DS.belongsTo("espacio-privado"),
  espacioPrivadoOtro: DS.attr("string"),
  laVictimaConociaAlVictimario: DS.attr("string"),
  mecanicaDelHecho: DS.belongsTo("mecanica-del-hecho"),
  mecanicaDelHechoOtro: DS.attr("string"),
  causaDeLaMuerte: DS.attr("string"),
  teniaObraSocial: DS.attr("string"),
  obraSocial: DS.attr("string"),
  tieneAccesoAPrestacionesDeSalud: DS.attr("string"),
  prestacionesDeSalud: DS.attr("string"),
  ocupacion: DS.attr("string"),
  estudiosCursados: DS.attr("string"),
  queEstudiosTiene: DS.belongsTo("estudio"),
  estabaEnSituacionDeCalle: DS.attr("string"),
  dondeVivia: DS.attr("string"),
  estabaDetenida: DS.attr("string"),
  desdeCuandoEstabaEncerrada: DS.attr("string"),
  teniaPrisionPreventiva: DS.attr("string"),
  tituloDeLaCausaEnLaJusticia: DS.attr("string"),
  nombreDelPenal: DS.attr("string"),
  localidadDelPenal: DS.attr("string"),
  provinciaDelPenal: DS.belongsTo("provincia"),
  prostitucion: DS.attr("string"),
  esMigrante: DS.attr("string"),
  paisDeOrigen: DS.attr("string"),
  anioDeLlegada: DS.attr("string"),
  hayDenuncia: DS.attr("string"),
  fechaDeDenuncia: DS.attr("string"),
  anteQuienSeHizoLaDenuncia: DS.attr("string"),
  porQueNoDenuncio: DS.attr("string"),
  laDenunciaReconoceGenero: DS.attr("string"),
  denunciaOrganizaciones: DS.hasMany("organizacion"),
  hayCausaJudicial: DS.attr("string"),
  cjTituloDeLaCausa: DS.attr("string"),
  cjNumeroDeLaCausa: DS.attr("string"),
  cjAnioDeInicio: DS.attr("string"),
  cjDondeSeTramita: DS.attr("string"),
  cjInstancia: DS.attr("string"),
  cjRespetaronNombreDeIg: DS.attr("string"),
  cjOrganismosPublicos: DS.attr("string"),
  cjOrganizaciones: DS.hasMany("organizacion"),
  cjOtrasOrganizaciones: DS.attr("string"),
  cjCuentaConDefensa: DS.attr("string"),
  cjHayInformeForense: DS.attr("string"),
  huboViolenciaInstitucional: DS.attr("string"),
  institucionInvolucrada: DS.belongsTo("institucion"),
  institucionInvolucradaOtro: DS.attr("string"),
  violenciaInstitucionNombre: DS.attr("string"),
  violenciaInstitucionLocalidad: DS.attr("string"),
  violenciaInstitucionProvincia: DS.belongsTo("provincia"),
  observaciones: DS.attr("string"),
  nombreDeQuienBrindoInformacion: DS.attr("string"),
  telefonoDeQuienBrindoInformacion: DS.attr("string"),
  linkDeNota: DS.attr("string"),
  copete: DS.attr("string"),
  calle: DS.attr("string"),
  comoFueElAtaque: DS.attr("string"),
  huboVictimas: DS.attr("string"),
  hayRegistroFotografico: DS.attr("string"),

  estadoDePublicacion: DS.belongsTo("estadoDeCaso"),
  fechaDeCreacion: DS.attr("string", { readOnly: true }),

  nombreCompleto: computed("nombre", "apellido", function() {
    return `${this.nombre} ${this.apellido}`;
  }),
  lugarDelHechoCompleto: computed(
    "calle",
    "localidad",
    "provincia",
    function() {
      let lugar;
      let calle;
      let provincia = this.get("provincia.nombre");
      if (this.calle) {
        calle = this.calle + ", ";
      } else {
        calle = "";
      }
      if (provincia === "Ciudad Autónoma de Buenos Aires") {
        provincia = "CABA";
      }
      lugar = calle + this.localidad + ", " + provincia;
      return lugar;
    }
  ),
  tituloYNumeroDeLaCausa: computed(
    "cjTituloDeLaCausa",
    "cjNumeroDeLaCausa",
    function() {
      let titulo = this.cjTituloDeLaCausa;
      let numero = this.cjNumeroDeLaCausa;
      let tituloCompleto = "";
      if (titulo && numero) {
        tituloCompleto = titulo + " - " + numero;
      } else if (titulo && !numero) {
        tituloCompleto = titulo;
      } else if (!titulo && numero) {
        tituloCompleto = numero;
      } else {
        tituloCompleto = "";
      }
      return tituloCompleto;
    }
  ),
  violenciaInstitucionNombreCompleto: computed(
    "violenciaInstitucionNombre",
    "violenciaInstitucionLocalidad",
    "violenciaInstitucionProvincia",
    function() {
      let nombreCompleto =
        this.violenciaInstitucionNombre +
        " - " +
        this.violenciaInstitucionLocalidad +
        ", " +
        this.get("violenciaInstitucionProvincia.nombre");
      return nombreCompleto;
    }
  ),
  nombreDelPenalCompleto: computed(
    "nombreDelPenal",
    "localidadDelPenal",
    "provinciaDelPenal",
    function() {
      let nombre = this.nombreDelPenal;
      let localidad = this.localidadDelPenal;
      let provincia = this.get("provinciaDelPenal.nombre");
      if (localidad != "") {
        if (nombre != "") {
          localidad = ", " + localidad;
        }
      } else {
        localidad = "";
      }
      if (provincia != undefined) {
        if (nombre != "" || localidad != "") {
          provincia = ", " + provincia;
        }
      } else {
        provincia = "";
      }
      let nombreCompleto = nombre + localidad + provincia;
      return nombreCompleto;
    }
  )
});
