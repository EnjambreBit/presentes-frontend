import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/mi-perfil', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/mi-perfil');
    assert.ok(route);
  });
});
