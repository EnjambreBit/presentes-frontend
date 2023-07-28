import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | candidates2023/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:candidates2023/index');
    assert.ok(route);
  });
});
