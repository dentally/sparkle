import { module, test } from 'qunit';
import { setupTest } from 'sparkle/tests/helpers';

module('Unit | Route | patients/patient/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:patients/patient/edit');
    assert.ok(route);
  });
});
