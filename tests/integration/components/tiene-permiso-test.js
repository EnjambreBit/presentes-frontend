import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | tiene-permiso", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("perfil", {
      permisos: {
        "perfiles.puede_listar": true,
        "perfiles.puede_eliminar": false
      }
    });

    await render(
      hbs`{{#tiene-permiso perfil=perfil permiso='perfiles.puede_listar'}}Listar{{/tiene-permiso}}`
    );

    assert.equal(this.element.textContent.trim(), "Listar");

    await render(
      hbs`{{#tiene-permiso perfil=perfil permiso='perfiles.puede_eliminar'}}Eliminar{{/tiene-permiso}}`
    );

    assert.equal(this.element.textContent.trim(), "");
  });
});
