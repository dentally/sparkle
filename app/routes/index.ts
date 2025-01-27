import type Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service declare store: Store;
  async model() {
    const patients = await this.store.query('patient', {});
    return { patients };
  }
}
