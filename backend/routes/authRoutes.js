const express = require('express');

const { AuthController } = require('../controllers');

const { create, login } = AuthController;
const router = express.Router();

router.post('/signup', create);
router.post('/login', login);

module.exports = router;
