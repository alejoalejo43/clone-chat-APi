const { ExtractJwt, Strategy } = require('passport-jwt');
const passport = require('passport');

const { findUserById } = require('../users/users.controllers');

const passportConfigs = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'academlo',
};

passport.use(
  new Strategy(passportConfigs, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
      .then((data) => {
        if (data) {
          done(null, tokenDecoded); //?el usuario si existe y es valido
        } else {
          done(null, false); //?el usuario no existe
        }
      })
      .catch((err) => {
        done(err, false); //?error en bd
      });
  })
);

module.exports = passport;
