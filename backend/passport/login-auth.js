const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
const { UserModel } = require('../models');

const login = new PassportLocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const userToLogin = {
      email: email.trim(),
      password: password.trim(),
    };

    UserModel.findOne({ email: userToLogin.email }).then((user) => {
      if (!user || !user.authenticate(userToLogin.password)) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';
        return done(error);
      }

      const payload = {
        sub: user.id,
      };
      const token = jwt.sign(payload, 's0m3 r4nd0m str1ng');
      const data = {
        username: user.username,
      };

      if (user.role) {
        data.role = user.role;
      }

      return done(null, token, data);
    });
  }
);

module.exports = login;
