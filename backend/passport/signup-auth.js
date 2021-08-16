const PassportLocalStrategy = require('passport-local').Strategy;
const { UserModel } = require('../models');
const { generateHashedPassword, generateSalt } = require('../util/encryption');

const signUp = new PassportLocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const user = {
      email: email.trim(),
      password: password.trim(),
      username: req.body.username.trim(),
    };

    UserModel.find({ email: email }).then((users) => {
      if (users.length > 0) {
        return done('E-mail already exists!');
      }

      user.salt = generateSalt();
      user.password = generateHashedPassword(user.salt, user.password);
      user.role = 'User';

      UserModel.create(user)
        .then(() => {
          return done(null);
        })
        .catch(() => {
          return done('Something went wrong :( Check the form for errors.');
        });
    });
  }
);

module.exports = signUp;
