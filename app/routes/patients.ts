import Route from '@ember/routing/route';
import type Store from '@ember-data/store';
import { service } from '@ember/service';

export default class PatientsRoute extends Route {
  @service declare store: Store;
  async model() {
    const patients = await this.store.query('patient', {
      include: `practitioner`,
    });
    return { patients };
  }
}
