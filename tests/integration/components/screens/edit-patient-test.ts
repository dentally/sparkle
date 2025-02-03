import { module, test } from 'qunit';
import { setupRenderingTest } from 'sparkle/tests/helpers';
import { fillIn, click, render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import pushAllMirageIntoStore from 'sparkle/tests/helpers/push-all-mirage-into-store';
import type Practitioner from 'sparkle/models/practitioner';
import type Patient from 'sparkle/models/patient';
//@ts-expect-error No types for sinon
import sinon from 'sinon';
import type { Server } from 'mirage';

type Context = TestContext & {
  server: Server;
  patient: Patient;
  practitioners: Practitioner[];
};

module(
  'Integration | Component | screens/edit-patient',
  function (this: Context, hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(async function (this: Context) {
      const mPractitioners = this.server.createList('practitioner', 2);
      const mPatient = this.server.create('patient', {
        practitioner: mPractitioners[0],
      });

      const { patient, practitioners } = pushAllMirageIntoStore({
        patient: mPatient,
        practitioners: mPractitioners,
      }) as { patient: Patient; practitioners: Practitioner[] };

      this.patient = patient;
      this.practitioners = practitioners;
    });

    test('it renders', async function (this: Context, assert) {
      await render(hbs`
        <Screens::EditPatient
          @patient={{this.patient}}
          @practitioners={{this.practitioners}}
        />`);

      assert.dom('[data-test-patient-name-input]').hasValue(this.patient.name);
      assert
        .dom('[data-test-patient-email-input]')
        .hasValue(this.patient.email);
      assert
        .dom('[data-test-patient-occupation-input]')
        .hasValue(this.patient.occupation);
      assert
        .dom('[data-test-patient-practitioner-input]')
        .hasValue(this.patient.practitioner.id?.toString());
    });

    test('changes are persisted', async function (this: Context, assert) {
      const routerStub = {
        transitionTo: sinon.spy(),
      };
      this.owner.register('service:router', routerStub, { instantiate: false });

      await render(hbs`
        <Screens::EditPatient
          @patient={{this.patient}}
          @practitioners={{this.practitioners}}
        />`);

      const newName = 'New name';
      const newEmail = 'new@email.com';
      const newOccupation = 'New job';
      const newPractitioner = this.practitioners[1]!;

      await fillIn('[data-test-patient-name-input]', newName);
      await fillIn('[data-test-patient-email-input]', newEmail);
      await fillIn('[data-test-patient-occupation-input]', newOccupation);
      await fillIn(
        '[data-test-patient-practitioner-input]',
        newPractitioner.id!.toString(),
      );

      await click('[data-test-save-button]');

      assert.false(this.patient.hasDirtyAttributes);
      assert.strictEqual(this.patient.name, newName);
      assert.strictEqual(this.patient.email, newEmail);
      assert.strictEqual(this.patient.occupation, newOccupation);
      assert.strictEqual(this.patient.practitioner.id, newPractitioner.id);

      assert.ok(
        routerStub.transitionTo.calledWith('patients.index'),
        'Transitioned to index route',
      );
    });

    test('changes are rolled back', async function (this: Context, assert) {
      const routerStub = {
        transitionTo: sinon.spy(),
      };
      this.owner.register('service:router', routerStub, { instantiate: false });

      await render(hbs`
        <Screens::EditPatient
          @patient={{this.patient}}
          @practitioners={{this.practitioners}}
        />`);

      const oldName = this.patient.name;
      const oldEmail = this.patient.email;
      const oldOccupation = this.patient.occupation;

      const newPractitioner = this.practitioners[1]!;
      await fillIn('[data-test-patient-name-input]', 'New Name');
      await fillIn('[data-test-patient-email-input]', 'new@email.com');
      await fillIn('[data-test-patient-occupation-input]', 'New job');
      await fillIn(
        '[data-test-patient-practitioner-input]',
        newPractitioner.id!.toString(),
      );

      await click('[data-test-cancel-button]');

      assert.false(this.patient.hasDirtyAttributes);
      assert.strictEqual(this.patient.name, oldName);
      assert.strictEqual(this.patient.email, oldEmail);
      assert.strictEqual(this.patient.occupation, oldOccupation);

      assert.ok(
        routerStub.transitionTo.calledWith('patients.index'),
        'Transitioned to index route',
      );
    });
  },
);
