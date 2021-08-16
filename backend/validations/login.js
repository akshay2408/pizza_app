const validator = require('validator');
/*
---------------------------------------
    Function to validate login form
---------------------------------------
*/
const validateLoginForm = (payload) => {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (
    !payload ||
    typeof payload.email !== 'string' ||
    payload.email.trim().length === 0 ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = 'Please enter email address.';
  }

  if (
    !payload ||
    typeof payload.password !== 'string' ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false;
    errors.password = 'Please enter password.';
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

module.exports = validateLoginForm;
