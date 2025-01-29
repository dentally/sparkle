import Model, { attr, belongsTo } from '@ember-data/model';
import type Practitioner from './practitioner';

export default class Patient extends Model {
  @attr('string') declare name: string;
  @attr('string') declare email: string;
  @attr('string') declare occupation: string;
  @belongsTo('practitioner', { async: false, inverse: 'patients' })
  declare practitioner: Practitioner;
}
