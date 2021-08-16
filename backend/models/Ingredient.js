const { Schema, model } = require('mongoose');
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const ingredientSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  price: {
    type: Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
});

module.exports = model('Ingredients', ingredientSchema);
