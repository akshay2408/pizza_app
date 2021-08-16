const express = require('express');

const { OrderController } = require('../controllers');
const { tokenAuthentication } = require('../util');

const { create, findOrderByUser, findPendingOrders, approveOrder } =
  OrderController;

const router = express.Router();

router.post('/submit', tokenAuthentication, create);
router.get('/user', tokenAuthentication, findOrderByUser);

router.get('/pending', tokenAuthentication, findPendingOrders);
router.post('/approve/:id', tokenAuthentication, approveOrder);

module.exports = router;
