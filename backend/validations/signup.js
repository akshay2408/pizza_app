const validator = require('validator');

/*
---------------------------------------
    Function to validate signUp form
---------------------------------------
*/

const validateSignupForm = (payload) => {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (
    !payload ||
    typeof payload.username !== 'string' ||
    payload.username.trim().length < 4
  ) {
    isFormValid = false;
    errors.username = 'Username must be at least 4 characters long';
  }

  if (
    !payload ||
    typeof payload.email !== 'string' ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = 'Please enter a correct email address';
  }

  if (
    !payload ||
    typeof payload.password !== 'string' ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors.password = 'Password must be at least 8 characters long';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
};

module.export = validateSignupForm;
