const { DataTypes } = require('sequelize'); //?importar para la utilizacion del tipo de datos
const db = require('../utils/database');

//?modelo de conversaciones
const Conversations = db.define('conversations', {
  //?creacion de la tabla
  id: {
    type: DataTypes.UUID, //?propiedad que define el tipo de dato
    primaryKey: true, //?restricciones
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImage: {
    type: DataTypes.STRING,
  },

  isGroup: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Conversations;
