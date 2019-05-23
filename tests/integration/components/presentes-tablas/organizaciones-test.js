import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { startMirage } from "presentes-frontend/initializers/ember-cli-mirage";

module("Integration | Component | presentes-tablas/organizaciones", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    let server = new startMirage();
    await render(hbs`{{presentes-tablas/organizaciones}}`);
    assert.ok(this.element);
    server.shutdown();
  });
});
