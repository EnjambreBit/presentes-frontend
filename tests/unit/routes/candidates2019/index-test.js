import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | candidates2019/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:candidates2019/index');
    assert.ok(route);
  });
});
