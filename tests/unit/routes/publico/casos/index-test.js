import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | publico/casos/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:publico/casos/index');
    assert.ok(route);
  });
});
