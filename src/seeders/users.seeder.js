const Users = require('../models/users.models');
try {
  Users.bulkCreate([
    {
      firstName: 'Alejandro',
      lastName: 'Castillo',
      email: 'alejo@gmail.com',
      password: '123456',
    },
    {
      firstName: 'Luisa',
      lastName: 'Forero',
      email: 'luisa.forero3@gmail.com',
      password: '123456',
    },
    {
      firstName: 'Julian',
      lastName: 'Barragan',
      email: 'julbarg@gmail.com',
      password: '123456',
    },
    {
      firstName: 'Claudia',
      lastName: 'Castillo',
      email: 'castillo.verano@gmail.com',
      password: '123456',
    },
  ]);
  console.log('Users created successfully');
} catch (error) {
  console.log({
    message: 'Error on users',
  });
}
