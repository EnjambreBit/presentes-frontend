import Inflector from "ember-inflector";

const inflector = Inflector.inflector;

inflector.irregular("perfil", "perfiles");
inflector.irregular("estado-de-caso", "estados-de-caso");
inflector.irregular("caso", "casos");
inflector.irregular("provincia", "provincias");
inflector.irregular("pais", "paises");
inflector.irregular("categoria", "categorias");
inflector.irregular("etiqueta", "etiquetas");
inflector.irregular("organizacion", "organizaciones");
inflector.irregular("estudio", "estudios");
inflector.irregular("lugar-del-hecho", "lugares-del-hecho");
inflector.irregular("espacio-privado", "espacios-privados");
inflector.irregular("mecanica-del-hecho", "mecanicas-del-hecho");

export default {};
