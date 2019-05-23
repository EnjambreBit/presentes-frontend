import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | presentes-ui/formularios/boton", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("accion", () => {});
    await render(hbs`{{presentes-ui/formularios/boton accion=accion}}`);
    assert.ok(this.element);
  });
});
