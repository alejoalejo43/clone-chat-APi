const bcrypt = require('bcrypt');

//?con hash el resultado siempre es distinto
const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10); //?encripta 10 veces
};

//? Compara la contraseña con el hash emcriptando de la misma forma y retorna un booleano
const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

// console.log(hashPassword('root'))

// console.log(comparePassword('root', '$2b$10$w1o5/RIHUoJGT3IMqGXaoedd7xqRT5yyTg1oMwrHC4vxCBIAmPT7S'))

module.exports = {
  hashPassword,
  comparePassword,
};
