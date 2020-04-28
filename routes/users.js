const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.post('/sign', userCtrl.sign);
router.post('/signup', userCtrl.signup);
router.post('/enlist', userCtrl.enlist);
router.get('/enlisted', userCtrl.enlisted);

module.exports = router;