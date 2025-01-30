import { Factory, association } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name: () => faker.person.fullName(),
  email: () => faker.internet.email(),
  occupation: () => faker.person.jobTitle(),
  practitioner: association(),
});
