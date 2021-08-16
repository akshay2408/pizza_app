const jwt = require('jsonwebtoken');
const { UserModel } = require('../models');

/*
----------------------------------
  Function to verify JWT Token
----------------------------------
*/

const tokenAuthentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  const token = req.headers.authorization.split(' ')[1];

  /*
  -------------------------------------------------
     Decode the token using a secret key-phrase
  -------------------------------------------------
  */
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).end();
    }

    const userId = decoded.sub;
    UserModel.findById(userId).then((user) => {
      if (!user) {
        return res.status(401).end();
      }
      req.user = user;

      return next();
    });
  });
};

module.exports = tokenAuthentication;
