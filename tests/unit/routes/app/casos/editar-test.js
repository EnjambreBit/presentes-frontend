import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/casos/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/casos/editar');
    assert.ok(route);
  });
});
