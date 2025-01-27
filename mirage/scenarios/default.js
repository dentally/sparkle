export default function (server) {
  server.create('patient', { name: 'Patient 1' });
  server.create('patient', { name: 'Patient 2' });
  server.create('patient', { name: 'Patient 3' });
}
