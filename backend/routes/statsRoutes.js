const express = require('express');

const { StatsController } = require('../controllers');

const { list } = StatsController;
const router = express.Router();

router.get('/', list);

module.exports = router;
