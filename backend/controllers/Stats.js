const { UserModel, PizzaModel } = require('../models');

/*
-------------------------------
    API to fetch pizza stats
-------------------------------
*/
const list = async (req, res) => {
  UserModel.count({}).then((users) => {
    PizzaModel.count({}).then((products) => {
      res.status(200).json({
        products,
        users,
      });
    });
  });
};

module.exports = { list };
