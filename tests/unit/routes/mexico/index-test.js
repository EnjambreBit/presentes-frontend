import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mexico/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mexico/index');
    assert.ok(route);
  });
});
