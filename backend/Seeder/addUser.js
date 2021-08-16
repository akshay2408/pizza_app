const { UserModel } = require('../models');
const { generateHashedPassword, generateSalt } = require('../util/encryption');

const seedAdminUser = () => {
  UserModel.find({ role: 'User', email: 'user@user.com' }).then((users) => {
    if (users.length > 0) {
      console.log('User already exist');
      return;
    }

    let salt = generateSalt();
    let password = generateHashedPassword(salt, '12345678');

    UserModel.create({
      email: 'user@user.com',
      username: 'User',
      salt: salt,
      password: password,
      role: 'User',
    })
      .then(() => {
        console.log('User created successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = seedAdminUser;
