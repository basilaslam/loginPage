var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  let arr = [{name:'a'},{name:'b'},{name:'c'}];
  res.render('login', { title: arr });
});

module.exports = router;
