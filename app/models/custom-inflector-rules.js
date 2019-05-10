import Inflector from "ember-inflector";

const inflector = Inflector.inflector;

inflector.irregular("perfil", "perfiles");
inflector.irregular("caso", "casos");
inflector.irregular("provincia", "provincias");
inflector.irregular("pais", "paises");
inflector.irregular("categoria", "categorias");
inflector.irregular("etiqueta", "etiquetas");

export default {};
