import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { startMirage } from "presentes-frontend/initializers/ember-cli-mirage";

module("Integration | Component | presentes-detalle/caso", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    let servidor = startMirage();

    this.set("model", {
      id: 1,
      nombre: "Prueba"
    });
    await render(hbs`{{presentes-detalle/caso model=model}}`);
    assert.ok(this.element.textContent);
    servidor.shutdown();
  });
});
