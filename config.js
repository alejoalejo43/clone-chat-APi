require('dotenv').config();
const configs = {
  api: {
    //?puerto y entorno de desarrollo
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'http://localhost:9000',
    nodeEnv: process.env.NODE_ENV || 'development', //?el entorno en que esta la api - en node
  },
  db: {
    //?entornos
    development: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chat-db',
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true, //?convierte las propiedades  que esten en camel case a smake_case parala bd
        underscoredAll: true, //?convierte lo que esta en camel case a smake_case parala bd
      },
    },
    production: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chat-db',
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
      dialectOptions: {
        //!configuracion de seguridad
        ssl: {
          //?para que la infomracion viaje encriptada
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    testing: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chat-db',
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
    },
  },
};

module.exports = configs;
