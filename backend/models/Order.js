const { Schema, model } = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const orderSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  products: [],
  userName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  address: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  postalCode: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  city: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  phone: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  cardNumber: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  cardType: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  cardHolderName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  expiry: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  cvc: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  date: {
    type: Schema.Types.Date,
    required: REQUIRED_VALIDATION_MESSAGE,
    default: Date.now,
  },
  status: {
    type: Schema.Types.String,
    enum: {
      values: ['Pending', 'Approved', 'Delivered'],
      message:
        'Status is invalid, valid values include [Pending, Approved, Delivered].',
    },
    default: 'Pending',
    required: REQUIRED_VALIDATION_MESSAGE,
  },
});

module.exports = model('Order', orderSchema);
