import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { startMirage } from "presentes-frontend/initializers/ember-cli-mirage";

module("Integration | Component | presentes-ui/mi-perfil", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    let servidor = startMirage();
    await render(hbs`{{presentes-ui/mi-perfil}}`);
    servidor.shutdown();
    assert.ok(this.element);
  });
});
