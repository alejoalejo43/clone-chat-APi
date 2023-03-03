const { DataTypes } = require('sequelize');

const db = require('../utils/database');
const Participants = require('./participants.models'); //?Se relaciona los mensajes con el modelo de participantes

const Messages = db.define('messages', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  participantId: {
    //!llave foranea
    type: DataTypes.UUID, //?Definir el tipo de dato
    allowNull: false, //?Restriccion
    references: {
      //?Rrestriccion por ser llaver foranea
      model: Participants, //?El modelo con el cual se realaciona
      key: 'id', //?La forma en que se llama la llave primaria
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Sent',
  },
});

module.exports = Messages;
