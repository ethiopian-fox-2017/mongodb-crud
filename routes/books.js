var express = require('express');
var router = express.Router();
var Book = require('../controllers/book')

router.post('/', Book.create)
      .get('/', Book.show)

module.exports = router
