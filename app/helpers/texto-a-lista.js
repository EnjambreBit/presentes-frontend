import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function textoALista(params/*, hash*/) {
  
  let texto = params[0];
  console.log(texto);

  let lista = htmlSafe(texto);

  return lista;
}

export default helper(textoALista);
