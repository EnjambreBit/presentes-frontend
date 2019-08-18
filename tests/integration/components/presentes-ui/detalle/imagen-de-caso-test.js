import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module(
  "Integration | Component | presentes-ui/detalle/imagen-de-caso",
  function(hooks) {
    setupRenderingTest(hooks);

    test("it renders", async function(assert) {
      await render(hbs`{{presentes-ui/detalle/imagen-de-caso}}`);
      assert.ok(this.element);
    });
  }
);
