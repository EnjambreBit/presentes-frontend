import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { startMirage } from "presentes-frontend/initializers/ember-cli-mirage";

module("Integration | Component | presentes-selector/simple-select", function(
  hooks
) {
  let servidor = startMirage();
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`{{presentes-selector/simple-select}}`);
    assert.ok(this.element.textContent);
    servidor.shutdown();
  });
});
