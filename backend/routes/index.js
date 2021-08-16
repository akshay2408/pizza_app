const express = require('express');

const authRoutes = require('./authRoutes');

const statsRoutes = require('./statsRoutes');
const pizzaRoutes = require('./pizzaRoutes');
const ordersRoutes = require('./ordersRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/pizza', pizzaRoutes);
router.use('/stats', statsRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;
