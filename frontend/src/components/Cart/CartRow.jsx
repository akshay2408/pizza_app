import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSync } from '@fortawesome/free-solid-svg-icons';

const CartRow = (props) => {
  const { product, syncCart, removeFromCart, ingredients } = props || {};
  const {
    image,
    name,
    ingredients: ingredient,
    price,
    quantity,
    _id,
  } = product || {};
  let subtotal = quantity * price;

  if (ingredient && ingredient.length > 0) {
    let ingredientsInCart = ingredients.filter((p) =>
      ingredient.includes(p.name)
    );
    let ingredientPrice = ingredientsInCart.reduce(function (
      accumulator,
      item
    ) {
      return accumulator + item.price;
    },
    0);
    subtotal = quantity * (price + ingredientPrice);
  }

  /*
  -----------------------------------
    Function to manage input change
  ----------------------------------
  */
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    syncCart(_id, parseInt(value, 10));
  };

  /*
  -----------------------------------
    Function to refresh product
  ----------------------------------
  */
  const onRefresh = () => {
    syncCart(_id, 1);
  };

  /*
  -----------------------------------
    Function to delete product
  ----------------------------------
  */
  const onDelete = () => {
    removeFromCart(_id);
  };
  return (
    <tr>
      <td data-th='Product'>
        <div className='row'>
          <div className='col-sm-4 hidden-xs'>
            <img src={image} alt='...' className='cart-image' />
          </div>
          <div className='col-sm-8'>
            <h4 className='nomargin'>{name}</h4>
            <p>{ingredient && ingredient.join(', ')}</p>
          </div>
        </div>
      </td>
      <td data-th='Price'>${price.toFixed(2)}</td>
      <td data-th='Quantity'>
        <input
          type='number'
          name='quantity'
          className='form-control text-center'
          value={quantity}
          onChange={onChange}
          min='1'
        />
      </td>
      <td data-th='Subtotal' className='text-center'>
        ${subtotal.toFixed(2)}
      </td>
      <td className='actions' data-th=''>
        <button className='btn btn-info btn-sm' onClick={onRefresh}>
          <FontAwesomeIcon icon={faSync} />{' '}
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />{' '}
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
