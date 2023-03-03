//TODO ARCHIVO PARA VINCULAR TODOS LOS ARCHIVOS QUE SE HAGAN EN LA APLICACION
const express = require('express');
const app = express();

const responseHandlers = require('./utils/handleResponses');
const db = require('./utils/database');
const initModels = require('./models/initModels'); //?Se adiciona archivo de los modelos y sus relaciones

const userRouter = require('./users/users.router');
const authRouter = require('./auth/auth.router');

app.use(express.json());

db.authenticate() //?verifica configuraciones de la db con lo que hay en el config
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

db.sync() //?sincroniza la db con los modelos definidos en la API
  .then(() => console.log('Database Synced'))
  .catch((err) => console.log(err));

initModels(); //?crea relacion con la db

app.get('/', (req, res) => {
  //?verificar servidor inicializado
  //?usando handlerResponse
  responseHandlers.success({
    res,
    status: 200,
    message: 'Servidor inicializado correctamente',
    data: {
      users: 'http://localhost:9000/api/v1/users',
      conversations: 'http://localhost:9000/api/v1/conversations',
    },
  });
});

app.use('/api/v1/users', userRouter); //?prefijo
app.use('/api/v1/auth', authRouter);

//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res) => {
  //?mensaje generico para los .use por URL no encontrada
  //?las rutas que no hayan ingresado van a entrar al use *
  responseHandlers.error({
    res,
    status: 404,
    message: 'URL not found, please try with http://localhost:9000/',
  });
});

app.listen(9000, () => {
  //?seleccion de puerto para escuchar
  console.log('Server started at port 9000');
});
