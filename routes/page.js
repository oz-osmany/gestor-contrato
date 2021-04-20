var express = require('express');
var router = express.Router();
const { isLoggedIn } = require('../lib/auth');

router.get('/page', isLoggedIn,(req, res) => {
    // sessionStorage.setItem('user', user);
   // console.log(req.body);
    //const user=req.session
 res.render('page');
});
module.exports = router;