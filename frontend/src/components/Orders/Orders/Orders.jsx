import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrdersRow from './OrdersRow';
import Auth from '../../../utils/auth';
import {
  fetchUserOrdersAction,
  fetchPendingOrdersAction,
  approveOrderAction,
} from '../../../actions/ordersActions';

const Orders = (props) => {
  const dispatch = useDispatch();

  // selectors
  const userOrders = useSelector((state) => state.userOrders);
  const pendingOrders = useSelector((state) => state.pendingOrders);
  const ingredients = useSelector((state) => state.ingredient);

  useEffect(() => {
    if (Auth.isUserAdmin()) {
      dispatch(fetchPendingOrdersAction());
    } else {
      dispatch(fetchUserOrdersAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
  -----------------------------------
    Function to approve order
  ----------------------------------
  */
  const onApproveOrder = (id) => {
    dispatch(approveOrderAction(id));
  };

  let heading;
  let noOrdersMessage;
  let orders;
  const isAdmin = Auth.isUserAdmin();
  if (isAdmin) {
    orders = pendingOrders
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((o, i) => (
        <OrdersRow
          key={o._id}
          order={o}
          index={i}
          onApprove={onApproveOrder}
          ingredients={ingredients}
        />
      ));
    heading = 'Pending Orders';
    noOrdersMessage = 'There are currently no pending orders!';
  } else {
    orders = userOrders
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((o, i) => (
        <OrdersRow key={o._id} order={o} index={i} ingredients={ingredients} />
      ));
    heading = 'My Orders';
    noOrdersMessage = 'You have not made any orders!';
  }

  return (
    <div className='container' style={{ paddingTop: 25 }}>
      <h1 className='text-center'>{heading}</h1>
      <div className='row' style={{ paddingTop: 25 }}>
        <div className='col-md-12' id='customer-orders'>
          <div className='box'>
            <div className='table-responsive'>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>View</th>
                    {isAdmin && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>{orders}</tbody>
              </table>
              {orders.length === 0 && (
                <h3 className='text-warning'>{noOrdersMessage}</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
