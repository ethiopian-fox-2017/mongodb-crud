var express = require('express');
var router = express.Router();
var book = require('../controller/ctrl-book')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET book list */
router.get('/list', book.findDocs)

/* POST add new Book */
router.post('/add', book.insertDoc)

module.exports = router;
