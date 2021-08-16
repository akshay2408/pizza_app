const { Schema, model } = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

let pizzaSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  weight: {
    type: Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  description: { type: Schema.Types.String },
  price: {
    type: Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  size: { type: String, default: 'Small', enum: ['Small', 'Medium', 'Large'] },
  image: {
    type: Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
});
module.exports = model('Pizza', pizzaSchema);
