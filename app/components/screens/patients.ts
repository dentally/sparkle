import { action } from '@ember/object';
import Component from '@glimmer/component';
import Patient from 'sparkle/models/patient';

interface PatientsScreenArgs {
  patients: Patient[];
}

export default class PatientsScreen extends Component<PatientsScreenArgs> {
  @action
  onAddPatient() {
    alert('TODO: Add patient');
  }
}
