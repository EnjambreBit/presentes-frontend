import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | presentes-ui/columna-de-tabla", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("columna", {});
    await render(hbs`{{presentes-ui/columna-de-tabla columna=columna}}`);
    assert.ok(this.element.textContent);
  });
});
