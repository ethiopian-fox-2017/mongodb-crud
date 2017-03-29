var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost/library';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.send(err)
    } else {
      db.collection('books').insertOne({
        isbn    : "978-1-891830-77-8",
        title   : "Every Girl is the End of the World",
        author  : "Daniel",
        category  : "Mature",
        stock   : 5
      }, function(err, data) {
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
    }
  })
});

router.get('/show', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.send(err)
    } else {
      db.collection('books').find().toArray(function(err, data) {
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
    }
  })
});


module.exports = router;
