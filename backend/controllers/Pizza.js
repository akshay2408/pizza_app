const { PizzaModel, IngredientsModel } = require('../models');

/*
-------------------------------
    API to fetch pizza
-------------------------------
*/
const list = async (req, res) => {
  await PizzaModel.find().then((pizzas) => {
    res.status(200).json(pizzas);
  });
};

/*
-------------------------------
    API to fetch pizza ingredients
-------------------------------
*/
const ingredientsList = async (req, res) => {
  IngredientsModel.find().then((ingredients) => {
    res.status(200).json(ingredients);
  });
};

module.exports = { list, ingredientsList };
