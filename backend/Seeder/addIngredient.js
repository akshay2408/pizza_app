const { IngredientsModel } = require('../models');

const seedIngredients = async () => {
  IngredientsModel.find({}).then((pizzas) => {
    if (pizzas.length > 0) {
      console.log('ingredients already exist');
      return;
    }

    const ingredientsSeed = [
      {
        name: 'Olives',
        price: 3,
      },
      {
        name: 'Pepperoni',
        price: 4,
      },
      {
        name: 'Mushrooms',
        price: 2,
      },
      {
        name: 'Pepper',
        price: 2,
      },
    ];

    IngredientsModel.create(ingredientsSeed)
      .then(() => console.log('Ingredients created successfully.'))
      .catch((error) => console.log(error));
  });
};

module.exports = seedIngredients;
