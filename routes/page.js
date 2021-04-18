var express = require('express');
var router = express.Router();
const { isLoggedIn } = require('../lib/auth');

router.get('/page', isLoggedIn,(req, res) => {

    res.render('page');
});
module.exports = router;