import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../../utils/auth';

const OrdersRow = (props) => {
  const isAdmin = Auth.isUserAdmin();

  const { ingredients, order } = props;
  const { date, products, status } = order;

  let totalPrice = 0;
  for (const product of products) {
    if (product.ingredients && product.ingredients.length > 0) {
      let ingredientsInCart = ingredients.filter((p) =>
        product.ingredients.includes(p.name)
      );
      let ingredientPrice = ingredientsInCart.reduce(function (
        accumulator,
        item
      ) {
        return accumulator + item.price;
      },
      0);
      totalPrice += product.quantity * (product.price + ingredientPrice);
    } else {
      totalPrice += product.quantity * product.price;
    }
  }

  return (
    <tr>
      <th>#{props.index + 1}</th>
      <td>{new Date(date).toLocaleString()}</td>
      <td>$ {totalPrice.toFixed(2)}</td>
      <td>
        <span
          className={`label label-info font-weight-bold ${
            status === 'Approved' ? 'text-success' : 'text-danger'
          }`}
        >
          {status}
        </span>
      </td>
      <td>
        <Link
          to={`/orders/details/${props.order._id}`}
          className='btn btn-outline-warning btn-sm'
        >
          View
        </Link>
      </td>
      {isAdmin && (
        <td>
          <button
            className='btn btn-outline-success btn-sm'
            onClick={() => props.onApprove(props.order._id)}
          >
            Approve
          </button>
        </td>
      )}
    </tr>
  );
};

export default OrdersRow;
