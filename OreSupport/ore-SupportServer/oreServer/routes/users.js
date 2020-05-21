var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password= req.body.password
  res.send(username + "------" + password);
});

router.post('/update', function(req, res, next) {
  var username = req.body.username;
  var password= req.body.password
  res.send(username + "------" + password);
});

router.post('/info', function(req, res, next) {
  var username = req.body.username;
  var password= req.body.password
  res.send(username + "------" + password);
})

module.exports = router;
