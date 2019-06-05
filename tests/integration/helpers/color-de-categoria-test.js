import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | color-de-categoria", function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function(assert) {
    this.set("categoria", "Ataques a personas");

    await render(hbs`{{color-de-categoria categoria}}`);

    assert.equal(this.element.textContent.trim(), "red b--red");
  });
});
