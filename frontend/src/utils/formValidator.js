var valid = require('card-validator');

/*
----------------------------------------
  Function to validate registration form
-----------------------------------------
 */
const registerValidationFunc = (email, username, password, confirmPassword) => {
  let validEmail = (() => {
    let mailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let testMail = mailRegex.test(email);
    if (testMail && email !== '') {
      return true;
    }
    return false;
  })();

  let validUsername = (() => {
    if (username.length > 3 && username !== '') {
      return true;
    }
    return false;
  })();

  let validPassword = (() => {
    if (password.length > 7 && password !== '') {
      return true;
    }
    return false;
  })();

  let validConfirmPassword = (() => {
    if (
      confirmPassword.length > 7 &&
      confirmPassword !== '' &&
      confirmPassword === password
    ) {
      return true;
    }
    return false;
  })();

  return {
    validEmail,
    validUsername,
    validPassword,
    validConfirmPassword,
  };
};

/*
----------------------------------------
  Function to validate login form
-----------------------------------------
 */
const loginValidationFunc = (email, password) => {
  let validEmail = (() => {
    let emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let testMail = emailRegex.test(email);
    if (testMail && email !== '') {
      return true;
    }
    return false;
  })();

  let validPassword = (() => {
    if (password.length > 7 && password !== '') {
      return true;
    }
    return false;
  })();

  return {
    validEmail,
    validPassword,
  };
};

/*
----------------------------------------
  Function to validate checkout form
-----------------------------------------
 */
const paymentValidationFunc = (
  userName,
  address,
  postalCode,
  city,
  phone,
  cardNumber,
  cardHolderName,
  expiry,
  cvc
) => {
  let validForm = false;
  let cardType = '';
  let validUserName = (() => {
    if (userName.length > 3 && userName !== '') {
      return true;
    }
    return false;
  })();
  let validAddress = (() => {
    let addressRegex = new RegExp(/^[#.0-9a-zA-Z\s,-]+$/);
    let testAddress = addressRegex.test(address);
    if (testAddress && address !== '') {
      return true;
    }
    return false;
  })();
  let validPostalCode = (() => {
    let postalCodeRegex = new RegExp(/^([0-9]{6}|[a-zA-Z][a-zA-Z ]{0,49})$/);
    let postalCodeTest = postalCodeRegex.test(postalCode);
    if (postalCodeTest && postalCode !== '') {
      return true;
    }
    return false;
  })();
  let validCity = (() => {
    let cityRegex = new RegExp(/^[a-zA-Z ]*$/);
    let cityTest = cityRegex.test(city);
    if (cityTest && city !== '') {
      return true;
    }
    return false;
  })();

  let validPhone = (() => {
    let phoneRegex = new RegExp( // eslint-disable-next-line
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
    let phoneTest = phoneRegex.test(phone);
    if (phoneTest && phone !== '') {
      return true;
    }
    return false;
  })();

  let validCardNumber = (() => {
    var numberValidation = valid.number(cardNumber);
    if (numberValidation.isValid && cardNumber !== '') {
      cardType = numberValidation.card.type;
      return true;
    }
    return false;
  })();

  let validCardHolderName = (() => {
    const validName = valid.cardholderName(cardHolderName);
    if (validName.isValid && cardHolderName !== '') {
      return true;
    }
    return false;
  })();

  let validExpiry = (() => {
    const validExpiry = valid.expirationDate(expiry);
    if (validExpiry.isValid && validExpiry !== '') {
      return true;
    }
    return false;
  })();

  let validCvc = (() => {
    const validCVC = valid.cvv(cvc);
    if (validCVC.isValid && cvc !== '') {
      return true;
    }
    return false;
  })();

  if (
    validUserName &&
    validAddress &&
    validPostalCode &&
    validCity &&
    validPhone &&
    validCardNumber &&
    validCvc &&
    validCardHolderName &&
    validExpiry
  ) {
    validForm = true;
  }
  return {
    validUserName,
    validAddress,
    validPostalCode,
    validCity,
    validPhone,
    validCardNumber,
    validCvc,
    validCardHolderName,
    validExpiry,
    validForm,
    cardType,
  };
};

export { registerValidationFunc, loginValidationFunc, paymentValidationFunc };
