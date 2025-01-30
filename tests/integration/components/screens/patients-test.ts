import { module, test } from 'qunit';
import { setupRenderingTest } from 'sparkle/tests/helpers';
import { render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import pushAllMirageIntoStore from 'sparkle/tests/helpers/push-all-mirage-into-store';
import type Patient from 'sparkle/models/patient';

type Context = TestContext & {
  server: any;
  patients: Patient[];
};

module(
  'Integration | Component | screens/patients',
  function (this: Context, hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    test('it renders', async function (this: Context, assert) {
      const mPatients = this.server.createList('patient', 5);

      const { patients } = pushAllMirageIntoStore({
        patients: mPatients,
      }) as { patients: Patient[] };

      this.patients = patients;

      await render(hbs`
        <Screens::Patients
          @patients={{this.patients}}
        />`);

      assert.dom('[data-test-patient-row]').exists({ count: 5 });
    });
  },
);
