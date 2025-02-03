import EmberRouter from '@ember/routing/router';
import config from 'sparkle/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('patients', function () {
    this.route('patient', { path: ':patient_id' }, function () {
      this.route('edit');
    });
  });
});
