import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';

import CheckOutForm from './checkout';
import CartRow from './CartRow';
import './CartPage.css';
import {
  syncCartAction,
  removeFromCartAction,
} from '../../actions/cartActions';
import { submitOrderAction } from '../../actions/ordersActions';
import { paymentValidationFunc } from '../../utils/formValidator';

const initialStates = {
  userName: '',
  address: '',
  postalCode: '',
  city: '',
  phone: '',
  cvc: '',
  expiry: '',
  cardHolderName: '',
  cardNumber: '',
};

const Cart = (props) => {
  const { history } = props;
  // states
  const [toggle, setToggle] = useState(false);
  const [inputs, setInputs] = useState(initialStates);

  // selectors
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const ingredients = useSelector((state) => state.ingredient);

  const dispatch = useDispatch();

  /*
  -----------------------------------
    Function to manage input states
  ----------------------------------
  */
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /*
  ------------------------------------
    Function to manage checkout modal
  ------------------------------------
  */
  const onCheckout = () => {
    setToggle(!toggle);
  };

  /*
  -----------------------------------
    Function to manage Payment order
  ----------------------------------
  */
  const onSubmit = (e) => {
    e.preventDefault();
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
    if (validObj.validForm) {
      const infoObject = {
        ...inputs,
        cardNumber: cardNumber.replace(/\d(?=\d{4})/g, '*'),
        cvc: cvc.replace(/\d(?=)/gm, '*'),
        cardType: validObj.cardType,
      };

      let product = [];
      for (let element of cart) {
        let fetchedProducts = products.find((p) => p._id === element.id);
        product.push({
          id: element.id,
          name: fetchedProducts.name,
          quantity: element.quantity,
          price: fetchedProducts.price,
          ingredients: element.ingredients,
        });
      }
      const data = {
        infoObject,
        product,
      };
      setToggle(false);
      dispatch(submitOrderAction(data));
      history.push('/orders');
    } else {
      toastr.error('Please check form errors');
    }
  };

  /*
  ----------------------------------------
    Function to delete product from cart
  ---------------------------------------
  */
  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  /*
  -----------------------------------
    Function to update product
  ----------------------------------
  */
  const syncCart = (id, quantity) => {
    dispatch(syncCartAction(id, quantity));
  };

  let total = 0;
  let cartIds = cart.map((c) => c.id);
  let productsInCart = products.filter((p) => cartIds.includes(p._id));

  for (let product of productsInCart) {
    let result = cart.find((i) => i.id === product._id);
    product.quantity = result.quantity;
    product.ingredients = result.ingredients;

    if (result.ingredients && result.ingredients.length > 0) {
      let ingredientsInCart = ingredients.filter((p) =>
        result.ingredients.includes(p.name)
      );
      let ingredientPrice = ingredientsInCart.reduce(function (
        accumulator,
        item
      ) {
        return accumulator + item.price;
      },
      0);
      total += product.quantity * (product.price + ingredientPrice);
    } else {
      total += product.quantity * product.price;
    }
  }

  let cartRows = productsInCart.map((p, i) => (
    <CartRow
      key={i}
      product={p}
      syncCart={syncCart}
      ingredients={ingredients}
      removeFromCart={removeFromCart}
      {...props}
    />
  ));

  return (
    <div className='container'>
      <table id='cart' className='table table-hover table-condensed'>
        <thead>
          <tr>
            <th style={{ width: 50 }}>Product</th>
            <th style={{ width: 10 }}>Price</th>
            <th style={{ width: 8 }}>Quantity</th>
            <th style={{ width: 22 }} className='text-center'>
              Subtotal
            </th>
            <th style={{ width: 10 }} />
          </tr>
        </thead>
        <tbody>{cartRows}</tbody>
        <tfoot>
          <tr>
            <td>
              <Link to='/' className='btn btn-warning'>
                <i className='fa fa-angle-left' /> Continue Shopping
              </Link>
            </td>
            <td colSpan='2' className='hidden-xs' />
            <td className='hidden-xs text-center'>
              <strong>Total ${total.toFixed(2)}</strong>
            </td>
            {productsInCart.length > 0 && (
              <td>
                <button
                  onClick={onCheckout}
                  className='btn btn-success btn-block'
                >
                  Checkout <i className='fa fa-angle-right' />
                </button>
              </td>
            )}
          </tr>
        </tfoot>
      </table>

      <CheckOutForm
        onToggle={toggle}
        {...props}
        onSubmit={onSubmit}
        onChange={onChange}
        inputs={inputs}
        total={total}
        onCheckout={onCheckout}
      />
    </div>
  );
};

export default Cart;
