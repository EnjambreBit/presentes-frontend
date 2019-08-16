import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | presentes-tablas/casos-publicos", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`{{presentes-tablas/casos-publicos}}`);
    assert.ok(this.element);
  });
});
