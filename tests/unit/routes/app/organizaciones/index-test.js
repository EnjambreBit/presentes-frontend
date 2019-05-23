import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/organizaciones/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/organizaciones/index');
    assert.ok(route);
  });
});
