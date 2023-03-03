//TODO //, ARCHIVO EN EL CUAL SE DEPOSITAN TODAS LAS REALACIONES DE LOS MODELOS
//TODO // Y LAS RELACIONES ENTRE SI

const Conversations = require('./conversations.models'); //?importar todas las tablas
const Messages = require('./messages.models');
const Participants = require('./participants.models');
const Users = require('./users.models');

const initModels = () => {
  //?FUNCION QUE GENERA TODAS LAS REALACIONES
  //?joins
  //? Users -> Participants
  Users.hasMany(Participants);
  Participants.belongsTo(Users);

  //? Conversations -> Participants
  Conversations.hasMany(Participants);
  Participants.belongsTo(Conversations);

  //? Participants -> Messages
  Participants.hasMany(Messages); //?participante tiene muchos mensajes(llave foranea)
  Messages.belongsTo(Participants); //?un mensaje pertenece a un participante-llave foranea por fuera
};

module.exports = initModels; //? se exportan los modelos
