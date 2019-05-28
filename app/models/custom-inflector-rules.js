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

export default {};
