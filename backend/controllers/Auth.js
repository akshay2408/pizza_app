const passport = require('passport');
const { signUpValidate, loginValidate } = require('../validations');

/*
------------------------
    API to create user
-----------------------
*/

const create = async (req, res, next) => {
  const { body } = req;
  const validationResult = signUpValidate(body);
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate('signup-auth', (err) => {
    if (err) {
      return res.status(200).json({
        success: false,
        message: err,
      });
    }

    return res.status(200).json({
      success: true,
      message:
        'You have successfully signed up! Now you should be able to log in.',
    });
  })(req, res, next);
};

/*
------------------------
    API to create user
-----------------------
*/
const login = async (req, res, next) => {
  const { body } = req;
  const validationResult = loginValidate(body);
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate('login-auth', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(200).json({
          success: false,
          message: err.message,
        });
      }
      return res.status(200).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData,
    });
  })(req, res, next);
};

module.exports = { create, login };
