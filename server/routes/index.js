var express = require('express');
var router = express.Router();

const { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {

  const serverUUID = req.app.get('uuid')
  
  res.send({
    server: serverUUID,
    request: uuidv4()
  });
});

module.exports = router;
