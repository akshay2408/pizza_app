import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrderDetailsRow from './OrderDetailsRow';
import Auth from '../../../utils/auth';
import {
  fetchUserOrdersAction,
  fetchPendingOrdersAction,
} from '../../../actions/ordersActions';
import NotFoundPage from '../../Common/NotFound/NotFoundPage';

const OrderDetails = (props) => {
  // selectors
  const userOrders = useSelector((state) => state.userOrders);
  const pendingOrders = useSelector((state) => state.pendingOrders);
  const ingredients = useSelector((state) => state.ingredient);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Auth.isUserAdmin()) {
      dispatch(fetchPendingOrdersAction());
    } else {
      dispatch(fetchUserOrdersAction());
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let orders;
  if (Auth.isUserAdmin()) {
    if (pendingOrders.length === 0) {
      return <h3 className='text-primary'>Loading...</h3>;
    }
    orders = pendingOrders;
  } else {
    if (userOrders.length === 0) {
      return <h3 className='text-primary'>Loading...</h3>;
    }
    orders = userOrders;
  }

  let orderId = props.match.params.id;
  let order = orders.find((o) => o._id === orderId);
  if (!order) {
    return <NotFoundPage errMessage='ORDER NOT FOUND' />;
  }

  let totalPrice = 0;
  for (const product of order.products) {
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

  let products = order.products.map((p, i) => (
    <OrderDetailsRow key={i} product={p} index={i} ingredients={ingredients} />
  ));

  return (
    <div className='container mt-4'>
      <h1 className='text-center'>Order #{order._id}</h1>
      <div className='row space-top'>
        <div className='col-md-6 mt-3'>
          <p>
            <span className='font-weight-bold lead text-warning'>
              Products In Order:
            </span>{' '}
            <span className='ml-2 lead'>{order.products.length}</span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>Date:</span>{' '}
            <span className='ml-2 lead'>
              {new Date(order.date).toLocaleString()}
            </span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>
              Total Price:
            </span>{' '}
            <span className='ml-2 lead'>${totalPrice.toFixed(2)}</span>
          </p>

          <p>
            <span className='font-weight-bold lead text-info'>
              Customer Details :-
            </span>{' '}
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>Name:</span>{' '}
            <span className='ml-2 lead'>{order.userName}</span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>Address:</span>{' '}
            <span className='ml-2 lead'>{order.address}</span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>
              Postal code:
            </span>{' '}
            <span className='ml-2 lead'>{order.postalCode}</span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>City:</span>{' '}
            <span className='ml-2 lead'>{order.city}</span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>Phone:</span>{' '}
            <span className='ml-2 lead'>{order.phone}</span>
          </p>
        </div>
        <div className='col-md-6 mt-3'>
          <p>
            <span className='font-weight-bold lead text-info'>
              Payment Details:-
            </span>{' '}
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>
              Card Number:
            </span>{' '}
            <span className='ml-2 lead'>
              {order.cardType} {'  '}
              {order.cardNumber}
            </span>
          </p>
          <p>
            <span className='font-weight-bold lead text-warning'>
              Payment Status :
            </span>{' '}
            <span className='ml-2 lead text-success'>Succeed</span>
          </p>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-12' id='customer-orders'>
          <div className='box'>
            <div className='table-responsive'>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>{products}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
