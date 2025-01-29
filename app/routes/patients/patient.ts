import Route from '@ember/routing/route';
import type Store from '@ember-data/store';
import { service } from '@ember/service';

export default class PatientsPatientRoute extends Route {
  @service declare store: Store;
  async model({ patient_id: patientId }: { patient_id: string }) {
    const model = this.modelFor('patients') as object;
    const patient = await this.store.findRecord('patient', patientId);
    const practitioners = await this.store.findAll('practitioner');
    return { ...model, patient, practitioners };
  }
}
