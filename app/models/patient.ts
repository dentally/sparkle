import Model, { attr } from '@ember-data/model';

export default class PatientModel extends Model {
  @attr('string') declare name: string;
}
