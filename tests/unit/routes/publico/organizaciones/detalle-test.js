import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | publico/organizaciones/detalle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:publico/organizaciones/detalle');
    assert.ok(route);
  });
});
