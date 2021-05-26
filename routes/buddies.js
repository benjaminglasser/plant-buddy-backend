var express = require('express');
var router = express.Router();
var buddiesCtrl = require('../controllers/buddies')

/* GET users listing. */
router.get('/', buddiesCtrl.index)

module.exports = router;
