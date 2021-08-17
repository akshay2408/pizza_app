import React from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import { paymentValidationFunc } from '../../utils/formValidator';
import Input from '../Common/Input';

const CheckOutForm = (props) => {
  const { onSubmit, onToggle, inputs, onChange, onCheckout, total } = props;

  const {
    userName,
    address,
    postalCode,
    city,
    phone,
    cvc,
    expiry,
    cardHolderName,
    cardNumber,
  } = inputs;

  let validObj = paymentValidationFunc(
    userName,
    address,
    postalCode,
    city,
    phone,
    cardNumber,
    cardHolderName,
    expiry,
    cvc
  );
  return (
    <MDBModal isOpen={onToggle} centered>
      <MDBModalHeader toggle={onCheckout}>Checkout</MDBModalHeader>
      <MDBModalBody>
        <form onSubmit={onSubmit}>
          <div className='row'>
            <p>
              <b>Customer Information :-</b>
            </p>
            <div className='col-md-12'>
              <Input
                type='text'
                name='userName'
                label='Name'
                placeholder='John Doe'
                value={userName}
                onChange={onChange}
                valid={validObj.validUserName}
              />
              <Input
                type='text'
                name='address'
                label='Address'
                placeholder='1 Montreal CA'
                value={address}
                onChange={onChange}
                valid={validObj.validAddress}
              />
            </div>
            <div className='col-md-6'>
              <Input
                type='text'
                name='postalCode'
                label='Postal Code'
                placeholder='452006'
                value={postalCode}
                onChange={onChange}
                valid={validObj.validPostalCode}
              />
            </div>
            <div className='col-md-6'>
              <Input
                type='text'
                name='city'
                label='City'
                placeholder='Banglore'
                value={city}
                onChange={onChange}
                valid={validObj.validCity}
              />
            </div>{' '}
            <div className='col-md-6'>
              <Input
                type='tel'
                name='phone'
                label='Phone'
                placeholder='9876543219'
                value={phone}
                onChange={onChange}
                valid={validObj.validPhone}
              />
            </div>
            <p className='space-top'>
              <b>Payment :-</b>
            </p>
            <div className='col-md-12'>
              <Input
                type='tel'
                name='cardNumber'
                label='Card Number'
                placeholder='XXXXXXXXXXXX'
                value={cardNumber}
                onChange={onChange}
                valid={validObj.validCardNumber}
              />
              <Input
                type='text'
                name='cardHolderName'
                label='Card Holder Name'
                placeholder='John Doe'
                value={cardHolderName}
                onChange={onChange}
                valid={validObj.validCardHolderName}
              />
            </div>
            <div className='col-md-6'>
              <Input
                type='text'
                name='expiry'
                label='Card Expiry'
                placeholder='MM/YY'
                value={expiry}
                onChange={onChange}
                valid={validObj.validExpiry}
              />
            </div>
            <div className='col-md-6'>
              <Input
                type='tel'
                name='cvc'
                label='CVC/CVV'
                placeholder='***'
                value={cvc}
                onChange={onChange}
                valid={validObj.validCvc}
              />
            </div>
            <div className='col-md-12'>
              <input
                type='submit'
                className='btn btn-primary'
                value={`Pay ${total.toFixed(2)} $`}
                disabled={!validObj.validForm}
              />
            </div>
          </div>
        </form>
      </MDBModalBody>
    </MDBModal>
  );
};

export default CheckOutForm;
