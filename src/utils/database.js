//? configuracion de la db
const { Sequelize } = require('sequelize');

const config = require('../../config');

const db = new Sequelize(config.db[config.api.nodeEnv]); //?instancia de sequelize y se direcciona de acuerdo al nodeEnv

module.exports = db;
