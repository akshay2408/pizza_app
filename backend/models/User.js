const { model, Schema } = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

let userSchema = new Schema({
  email: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  salt: String,
  password: String,
  role: {
    type: String,
    default: 'User',
    enum: ['User', 'Admin'],
  },
});

userSchema.method({
  authenticate: function (password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.password
    );
  },
});

module.exports = model('User', userSchema);
