const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.post('/sign', userCtrl.sign);

module.exports = router;