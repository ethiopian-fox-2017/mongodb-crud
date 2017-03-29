var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/mongodb_crud';

var addBook = function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').insertOne({
      "isbn" : req.body.isbn,
      "title" : req.body.title,
      "author" : req.body.author,
      "category" : req.body.category,
      "stock" : req.body.stock
    }, function(err, result) {
      res.send(result)
    });
  });
};

var getBooks = function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').find().toArray(function(err, books) {
      if(err) throw err;
      res.send(books);
    });
  });
};

module.exports = {
  addBook,
  getBooks
}
