var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Pears Portal Home! \n');
});

module.exports = router;
