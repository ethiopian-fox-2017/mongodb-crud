const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/library';

module.exports = {

  insertOne: function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
      if (err) res.send(err.message)
      
      db.collection('books').insertOne( {
        "isbn" : req.body.isbn,
        "title" : req.body.title,
        "author" : req.body.author,
        "category" : req.body.category,
        "stock" : req.body.stock
      }, function(err, result) {
        if (err) res.send(err.message)
        res.json(result)
      });

      db.close();
    });

  }, // insertOne

  findAll: function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
      if (err) res.send(err.message)

      db.collection('books').find().toArray(function(err, books) {
        if (err) res.send(err.message)
        res.json(books)
      })

      db.close();
    });

  } // findAll

}