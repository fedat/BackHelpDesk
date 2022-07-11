const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../services/funcionario.service');
const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
    //buscar funcionario y su email
      const funcionario = await service.findByEmail(email);
      if (!funcionario) {
        done(boom.unauthorized(), false);
      }
      if (!funcionario.activo) {
        done(boom.unauthorized(), false);
      }
      //si la contraseña ingresada coincide con la de la bd
      const isMatch = await bcrypt.compare(password, funcionario.contrasena);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      } 
      //borrar la info del password
      //delete funcionario.dataValues.contraseña;
      done(null, funcionario);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;