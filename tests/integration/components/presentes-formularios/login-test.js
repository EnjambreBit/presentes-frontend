import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | presentes-formularios/login", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`{{presentes-formularios/login}}`);
    assert.ok(this.element.textContent);
  });
});
