var express = require('express');
var router = express.Router();
var client = require('./index');


router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
