//* {
//*     error: false,
//*     status: 201,
//*     message: 'User created Succesfully',
//*     data: {
//*         id: 5,
//*         firstName: 'Sahid',
//*         ...
//*     }
//* }

//? Para estandarizar respuestas exitosas de una manera en particular
//?funcion que recibe los parametros y genera la respuesta con un formato especifico
const success = ({ status, data, message, res }) => {
  res.status(status).json({
    error: false,
    status: status,
    message: message,
    data: data,
  });
};

//? Para estandarizar respuestas de errores
const error = ({ status, data, message, res, fields }) => {
  res.status(status).json({
    error: true,
    status: status,
    message: message,
    fields: fields, //?algunos errores permiten hacer funcional fields
    data,
  });
};

module.exports = {
  success,
  error,
};

//? Error de conexion
//? Not Found
//? Errores de Sintaxis
//? Errores al hacer las peticiones creacionales
