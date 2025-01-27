import { setupTest } from 'sparkle/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | patient', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('patient', {});
    assert.ok(model, 'model exists');
  });
});
