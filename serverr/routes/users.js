var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function(req, res, next) {
  var data={
    username:req.body.username,
    password:req.body.password
  }
  res.send(data)
  // res.send('respond with a resource');
});

module.exports = router;
