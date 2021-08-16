const { model, Schema } = require('mongoose');
const { generateHashedPassword } = require('../util/encryption');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

let userSchema = new Schema({
  email: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  salt: { type: String },
  password: { type: String },
  role: {
    type: String,
    default: 'User',
    enum: ['User', 'Admin'],
  },
});

userSchema.method({
  authenticate: function (password) {
    return generateHashedPassword(this.salt, password) === this.password;
  },
});

module.exports = model('User', userSchema);
