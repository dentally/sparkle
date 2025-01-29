import { action } from '@ember/object';
import { service } from '@ember/service';
import Router from '@ember/routing/router';
import Component from '@glimmer/component';
import Patient from 'sparkle/models/patient';
import type Practitioner from 'sparkle/models/practitioner';

interface EditPatientScreenArgs {
  patient: Patient;
  practitioners: Practitioner[];
}

export default class EditPatientScreen extends Component<EditPatientScreenArgs> {
  @service declare router: Router;

  get practitionerOptions() {
    return [
      { label: 'Dr. John Doe', value: '1' },
      { label: 'Dr. Jane Doe', value: '2' },
    ];
  }

  get selectedPractitionerOption() {
    return this.practitionerOptions.find((option) => {
      return option.value === this.args.patient.practitioner.id;
    });
  }

  @action
  onUpdateName(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) return;
    this.args.patient.name = target.value;
  }

  @action
  onCancel() {
    this.args.patient.rollbackAttributes();
    this.router.transitionTo('patients.index');
  }

  @action
  async onSave() {
    await this.args.patient.save();
    this.router.transitionTo('patients.index');
  }
}
