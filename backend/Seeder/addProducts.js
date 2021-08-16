const { PizzaModel } = require('../models');

const seedPizza = async () => {
  PizzaModel.find({}).then((pizzas) => {
    if (pizzas.length > 0) {
      console.log('pizza already exist');
      return;
    }

    const pizzasSeed = [
      // pepperoni
      {
        name: 'Pepperoni',

        description:
          'Pepperoni is an American variety of salami, made from cured pork and beef mixed together and seasoned with paprika or other chili pepper.',
        price: 15,
        size: 'Small',
        weight: 450,
        image:
          'https://vignette.wikia.nocookie.net/oddsquad/images/f/f4/Pizza.png/revision/latest?cb=20170203223737',
        likes: [],
        reviews: [],
      },
      {
        name: 'Pepperoni',

        description:
          'Pepperoni is an American variety of salami, made from cured pork and beef mixed together and seasoned with paprika or other chili pepper.',
        price: 20,
        size: 'Medium',
        weight: 450,
        image:
          'https://vignette.wikia.nocookie.net/oddsquad/images/f/f4/Pizza.png/revision/latest?cb=20170203223737',
        likes: [],
        reviews: [],
      },
      {
        name: 'Pepperoni',

        description:
          'Pepperoni is an American variety of salami, made from cured pork and beef mixed together and seasoned with paprika or other chili pepper.',
        price: 25,
        size: 'Large',
        weight: 450,
        image:
          'https://vignette.wikia.nocookie.net/oddsquad/images/f/f4/Pizza.png/revision/latest?cb=20170203223737',
        likes: [],
        reviews: [],
      },
      //Margarita
      {
        name: 'Margarita',

        description:
          'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella fior di latte, fresh basil, salt and extra-virgin olive oil.',
        price: 15,
        size: 'Small',
        weight: 350,
        image:
          'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3469401.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Margarita',

        description:
          'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella fior di latte, fresh basil, salt and extra-virgin olive oil.',
        price: 20,
        size: 'Medium',
        weight: 350,
        image:
          'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3469401.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Margarita',

        description:
          'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella fior di latte, fresh basil, salt and extra-virgin olive oil.',
        price: 25,
        size: 'Large',
        weight: 350,
        image:
          'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3469401.jpg',
        likes: [],
        reviews: [],
      },
      //Diablo
      {
        name: 'Diablo',

        description:
          'Pizza diavola means the devils pizza and is quite a spicy little devil and one of my favourite pizzas. If you like spicy hot and chilli flavours you will enjoy this pizza.',
        price: 15,
        size: 'Small',
        weight: 500,
        image:
          'https://images.pizza33.ua/products/product/yQfkJqZweoLn9omo68oz5BnaGzaIE0UJ.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Diablo',
        description:
          'Pizza diavola means the devils pizza and is quite a spicy little devil and one of my favourite pizzas. If you like spicy hot and chilli flavours you will enjoy this pizza.',
        price: 20,
        size: 'Medium',
        weight: 500,
        image:
          'https://images.pizza33.ua/products/product/yQfkJqZweoLn9omo68oz5BnaGzaIE0UJ.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Diablo',
        description:
          'Pizza diavola means the devils pizza and is quite a spicy little devil and one of my favourite pizzas. If you like spicy hot and chilli flavours you will enjoy this pizza.',
        price: 25,
        size: 'Large',
        weight: 500,
        image:
          'https://images.pizza33.ua/products/product/yQfkJqZweoLn9omo68oz5BnaGzaIE0UJ.jpg',
        likes: [],
        reviews: [],
      },
      //Calzone
      {
        name: 'Calzone',

        description:
          'A calzone is an Italian oven-baked folded pizza that originated in Naples. A typical calzone is made from salted bread dough, stuffed with salami, ham, vegetables, mozzarella, Parmesan and an egg.',
        price: 15,
        size: 'Small',
        weight: 500,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOxB3Fe3lAvkYQBdWrzp8885FC2uAH5nlZo-ZO21TkmxO5wa_',
        likes: [],
        reviews: [],
      },
      {
        name: 'Calzone',

        description:
          'A calzone is an Italian oven-baked folded pizza that originated in Naples. A typical calzone is made from salted bread dough, stuffed with salami, ham, vegetables, mozzarella, Parmesan and an egg.',
        price: 20,
        size: 'Medium',
        weight: 500,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOxB3Fe3lAvkYQBdWrzp8885FC2uAH5nlZo-ZO21TkmxO5wa_',
        likes: [],
        reviews: [],
      },
      {
        name: 'Calzone',

        description:
          'A calzone is an Italian oven-baked folded pizza that originated in Naples. A typical calzone is made from salted bread dough, stuffed with salami, ham, vegetables, mozzarella, Parmesan and an egg.',
        price: 25,
        size: 'Large',
        weight: 500,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOxB3Fe3lAvkYQBdWrzp8885FC2uAH5nlZo-ZO21TkmxO5wa_',
        likes: [],
        reviews: [],
      },
      //Polo
      {
        name: 'Polo',

        description:
          'Pollo might be your choice when you are in the mood for something healthy. Tender grilled chicken, creamy feta, roasted red peppers and corn are generously piled on top of our famous tomato sauce.',
        price: 15,
        size: 'Small',
        weight: 550,
        image: 'http://www.ilforno.bg/45-large_default/polo.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Polo',

        description:
          'Pollo might be your choice when you are in the mood for something healthy. Tender grilled chicken, creamy feta, roasted red peppers and corn are generously piled on top of our famous tomato sauce.',
        price: 20,
        size: 'Medium',
        weight: 550,
        image: 'http://www.ilforno.bg/45-large_default/polo.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Polo',

        description:
          'Pollo might be your choice when you are in the mood for something healthy. Tender grilled chicken, creamy feta, roasted red peppers and corn are generously piled on top of our famous tomato sauce.',
        price: 25,
        size: 'Large',
        weight: 550,
        image: 'http://www.ilforno.bg/45-large_default/polo.jpg',
        likes: [],
        reviews: [],
      },
      // cheese
      {
        name: 'Four Cheeses',

        description:
          'Pizza cheese encompasses several varieties and types of cheeses and dairy products. These include processed and modified cheese such as mozzarella-like processed cheeses and mozzarella variants.',
        price: 15,
        size: 'Small',
        weight: 500,
        image:
          'https://thumbs.dreamstime.com/b/four-cheese-pizza-mozzarella-cheese-dorblu-cheddar-cheese-parmesan-cheese-isolated-white-background-91847479.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Four Cheeses',

        description:
          'Pizza cheese encompasses several varieties and types of cheeses and dairy products. These include processed and modified cheese such as mozzarella-like processed cheeses and mozzarella variants.',
        price: 20,
        size: 'Medium',
        weight: 500,
        image:
          'https://thumbs.dreamstime.com/b/four-cheese-pizza-mozzarella-cheese-dorblu-cheddar-cheese-parmesan-cheese-isolated-white-background-91847479.jpg',
        likes: [],
        reviews: [],
      },
      {
        name: 'Four Cheeses',

        description:
          'Pizza cheese encompasses several varieties and types of cheeses and dairy products. These include processed and modified cheese such as mozzarella-like processed cheeses and mozzarella variants.',
        price: 25,
        size: 'Large',
        weight: 500,
        image:
          'https://thumbs.dreamstime.com/b/four-cheese-pizza-mozzarella-cheese-dorblu-cheddar-cheese-parmesan-cheese-isolated-white-background-91847479.jpg',
        likes: [],
        reviews: [],
      },
    ];

    PizzaModel.create(pizzasSeed)
      .then(() => console.log('Pizza created successfully.'))
      .catch((error) => console.log(error));
  });
};

module.exports = seedPizza;
