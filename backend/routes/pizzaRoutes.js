const express = require('express');

const { PizzaController } = require('../controllers');

const { list, ingredientsList } = PizzaController;
const router = express.Router();

router.get('/all', list);

router.get('/ingredients', ingredientsList);

module.exports = router;
