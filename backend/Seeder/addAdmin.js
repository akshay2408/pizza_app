const { UserModel } = require('../models');
const { generateHashedPassword, generateSalt } = require('../util/encryption');

const seedAdminUser = () => {
  UserModel.find({ role: 'Admin' }).then((users) => {
    if (users.length > 0) {
      console.log('Admin already exist');
      return;
    }

    let salt = generateSalt();
    let password = generateHashedPassword(salt, '12345678');

    UserModel.create({
      email: 'admin@admin.com',
      username: 'Admin',
      salt: salt,
      password: password,
      role: 'Admin',
    })
      .then(() => {
        console.log('Admin created successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = seedAdminUser;
