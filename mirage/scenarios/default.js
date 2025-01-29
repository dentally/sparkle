export default function (server) {
  const practitioner1 = server.create('practitioner', {
    name: 'Dr Phil McCavity',
  });
  const practitioner2 = server.create('practitioner', {
    name: 'Dr Molar Bear',
  });

  server.create('patient', {
    name: 'Anita Crown',
    practitioner: practitioner1,
    occupation: 'Cholocate Sculptor',
    email: 'anita.crown@gmail.com',
  });
  server.create('patient', {
    name: 'Les Filling',
    practitioner: practitioner2,
    occupation: 'Caramel Sauce Developer',
    email: 'les.filling@cadburys.com',
  });
  server.create('patient', {
    name: 'Ms. Ginger Vitis',
    practitioner: practitioner1,
    occupation: 'Energy Drink Influencer',
    email: 'ginger.vitis@redbull.com',
  });
}
