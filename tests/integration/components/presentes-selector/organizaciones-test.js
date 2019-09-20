import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { startMirage } from "presentes-frontend/initializers/ember-cli-mirage";

module("Integration | Component | presentes-selector/organizaciones", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    let servidor = startMirage();

    await render(hbs`{{presentes-selector/organizaciones}}`);

    assert.equal(this.element.textContent.trim(), "");

    // Template block usage:
    await render(hbs`
      {{#presentes-selector/organizaciones}}
        template block text
      {{/presentes-selector/organizaciones}}
    `);

    assert.equal(this.element.textContent.trim(), "template block text");
    servidor.shutdown();
  });
});
