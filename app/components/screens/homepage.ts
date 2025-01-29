import Component from '@glimmer/component';
import Patient from 'sparkle/models/patient';

interface HomepageScreenArgs {
  patients: Patient[];
}

export default class HomepageScreen extends Component<HomepageScreenArgs> {}
