import Component from '@glimmer/component';
import Patient from 'sparkle/models/patient';

interface HomepageArgs {
  patients: Patient[];
}

export default class Homepage extends Component<HomepageArgs> {}
