import Model, { attr, hasMany } from '@ember-data/model';
import type Patient from './patient';

export default class Practitioner extends Model {
  @attr('string') declare name: string;
  @hasMany('patient', { async: false, inverse: 'practitioner' })
  declare patients: Patient[];
}
