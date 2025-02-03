import templateOnly from '@ember/component/template-only';
import Patient from 'sparkle/models/patient';

interface HomepageScreenArgs {
  patients: Patient[];
}

export default templateOnly<HomepageScreenArgs>();
