const routes = require('express').Router();
const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017/library';


routes.get('/list', function(req, res) {
  mongoClient.connect(url, function(err,db) {
    if(err) {
      res.send(err.message)
    } else {
      db.collection('books').find().toArray(function(err,results){
        if(err) {
          res.send(err.message);
        } else {
          res.send(results);
        }
      });
    }
  })
})

routes.get('/insert', function(req, res) {
  mongoClient.connect(url, function(err,db) {
    if (err) {
      res.send(err.message)
    } else {
      db.collection('books').insertOne({
        isbn: '978-1-60309-002-1',
        title: 'Lean Work',
        author: 'James Kokolomel',
        category: 'Strategy',
        stock: 7
      }, function(err, result) {
        if (err) {
          res.send(err.message)
        } else {
          res.send('Insert berhasil '+result);
        }
      })
    }
  })
})

module.exports = routes;