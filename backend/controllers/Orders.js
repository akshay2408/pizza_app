const { OrderModel } = require('../models');

/*
------------------------
    API to create order
-----------------------
*/
const create = async (req, res) => {
  const { body, user } = req;
  const { _id } = user;
  const { product: products, infoObject } = body;
  let orderObj = {
    creator: _id,
    products,
    ...infoObject,
  };
  OrderModel.create(orderObj)
    .then((createdOrder) => {
      res.status(200).json({
        success: true,
        message: 'Order created successfully.',
        data: createdOrder,
      });
    })
    .catch((err) => {
      console.log(err);
      const message = 'Something went wrong :(';
      return res.status(200).json({
        success: false,
        message: message,
      });
    });
};

/*
-------------------------------
    API to find order by  user
-------------------------------
*/
const findOrderByUser = async (req, res) => {
  const { user } = req;
  const { _id } = user;
  OrderModel.find({ creator: _id }).then((orders) => {
    res.status(200).json(orders);
  });
};

/*
-----------------------------
    API to find pending order
-----------------------------
*/
const findPendingOrders = async (req, res) => {
  const { user } = req;
  const { role } = user;
  if (role === 'Admin') {
    OrderModel.find({ status: 'Pending' }).then((orders) => {
      res.status(200).json(orders);
    });
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!',
    });
  }
};

/*
------------------------
    API to approve order
-----------------------
*/
const approveOrder = async (req, res) => {
  const { params } = req;
  const { id } = params;
  const orderId = id;
  OrderModel.findById(orderId)
    .then((order) => {
      if (!order) {
        const message = 'Order not found.';
        return res.status(200).json({
          success: false,
          message: message,
        });
      }

      order.status = 'Approved';
      order
        .save()
        .then(() => {
          res.status(200).json({
            success: true,
            message: 'Order approved successfully.',
          });
        })
        .catch((err) => {
          console.log(err);
          const message = 'Something went wrong :(';
          return res.status(200).json({
            success: false,
            message: message,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      const message = 'Something went wrong :(';
      return res.status(200).json({
        success: false,
        message: message,
      });
    });
};

module.exports = { create, findOrderByUser, findPendingOrders, approveOrder };
