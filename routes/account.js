var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();
var jsonParser = bodyParser.json()

const users = ['John', 'Betty', 'Hal'];
router.get('/users', jsonParser, (req, res) => {
  res.json(users);
});

module.exports = router;